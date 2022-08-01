import { PluginObj, Visitor } from "@babel/core";
import * as t from "@babel/types";
import { NodePath } from "@babel/traverse";
import { camelCase, defaults } from "lodash";
import { dirname, resolve } from "path";
import { convertToModuleClassNames } from "./utils/convertToModuleClassNames";
import { isCssImportDeclaration } from "./utils/isCssImportDeclaration";
import { wrapWithJSXExpressionContainer } from "./utils/wrapWithJSXExpressionContainer";
import { print, printNodeType, printWithCondition } from "./utils/print";
import { isClassNamesImportDeclaration } from "./utils/isClassNamesImportDeclaration";
import { isComponentFile } from "./utils/isComponentFile";
import { isFileContainsCssImports } from "./utils/isFileContainsCssImports";
import { replaceClassNamesInStringLiteral } from "./utils/replaceClassNamesInStringLiteral";
import { splitClassNames } from "./utils/splitClassNames";
import {
  renameClassnamesToCxCallExpression,
  wrapStringLiteralWithCxCallExpression,
  wrapWithCxCallExpression
} from "./utils/wrapWithCxCallExpression";
import { isCxCallExpression } from "./utils/isCxCallExpression";
import { getCssModulesFileName, renameStylesheetFile } from "./utils/renameStylesheetFile";
import { replaceBemHelperCallExpression } from "./utils/replaceBemHelperCallExpression";
import { isBemHelperImportDeclaration } from "./utils/isBemHelperImportDeclaration";

type PluginOptions = {
  importIdentifier: "styles";
};

type State = {
  opts: PluginOptions;
  classNames: Map<string, string>;
  cxImported: boolean;
};

const PLUGIN_DEFAULTS = {
  importIdentifier: "styles"
};

const filesClassNamesMap: Map<string, Map<string, string>> = new Map();

/**
 * These visitors take a string literal, checks to see if it's a valid CSS module
 * class name (from `State.classNames`), and if so replaces them with the corresponding
 * CSS module lookup e.g. `style.className`.
 */
const stringLiteralReplacementVisitors: Visitor<State> = {
  StringLiteral: (path: NodePath<t.StringLiteral>, { classNames, opts }) => {
    const pathNodeStringValue = path.node.value;
    const parentPath = path.parentPath;

    print("### index, path isStringLiteral, pathNodeStringValue = ", pathNodeStringValue);
    printNodeType("### index, parentPath.type", parentPath);

    // Ignore strings inside object lookups i.e. obj["className"]
    if (parentPath.isMemberExpression()) {
      return;
    }

    // Replace all className strings with styles["className"]
    const newPath = replaceClassNamesInStringLiteral(classNames, opts.importIdentifier, path);
    if (path.shouldSkip) {
      // Classnames is not found in set of classnames from .scss file
      return;
    }

    // Conditional style
    if (parentPath.isObjectProperty()) {
      // If the literal is inside an object property definition, we need to change
      // it to be a computed value instead.
      const parentNode = parentPath.node as t.ObjectProperty;
      print("### index, stringLiteralReplacementVisitors, isObjectProperty, parentNode.value = ", parentNode.value);
      const overrideNewPath = t.objectProperty(newPath as any, parentNode.value, true, false);
      const insertedPaths = parentPath.replaceInline([
        overrideNewPath,
        t.objectProperty(t.stringLiteral(path.node.value), parentNode.value, true, false)
      ]);
      insertedPaths.forEach(p => {
        p.skip();
      });
      print("### index, stringLiteralReplacementVisitors, isObjectProperty, insertedPaths", insertedPaths);
      return;
    }
    // Otherwise just replace the literal completely
    else {
      print(
        `### index, stringLiteralReplacementVisitors, isLiteral, pathNodeStringValue = ${pathNodeStringValue}, newPath = `,
        newPath
      );
      const insertedPaths = path.replaceInline([newPath, t.stringLiteral(path.node.value)]);
      insertedPaths.forEach(p => {
        p.skip();
      });

      print("### index, stringLiteralReplacementVisitors, isLiteral, insertedPaths", insertedPaths);
      return;
    }
  }
};

/**
 * These visitors replace classNames inside template strings e.g. `monday-style-avatar_circle--${type}`
 * with `styles[`${camelCase("mondayStyleAvatarCircle"+type)}`]`
 */
const templateLiteralReplacementVisitors: Visitor<State> = {
  TemplateLiteral: (path: NodePath<t.TemplateLiteral>, { classNames, opts }) => {
    printWithCondition(false, "### index, TemplateLiteral, path.node", path.node);

    const quasisString = path.node.quasis.map(q => q.value.cooked).join("");
    const expressions = path.node.expressions.map(e => t.isIdentifier(e) && e.name);

    const newPath = t.memberExpression(
      t.identifier(opts.importIdentifier),
      t.identifier(`\`\$\{camelCase("${camelCase(quasisString)}"+${expressions.join("+")})\}\``),
      true
    );

    const insertedPaths = path.replaceInline([newPath, t.templateLiteral(path.node.quasis, path.node.expressions)]);
    insertedPaths.forEach(p => {
      p.skip();
    });
    printWithCondition(false, "### index, TemplateLiteral, replaced with newPath", newPath);
    return;
  }
};

/**
 * These visitors look within JSX `className` attributes, looking for string literals
 * which we can process into `style["className"]` lookups, as well as variable references
 * in the containing scope which also contain string literals.
 */
const classNameReplacementVisitors: Visitor<State> = {
  ...stringLiteralReplacementVisitors,

  Identifier: ({ node, scope }, state) => {
    const binding = scope.getBinding(node.name);
    if (binding == null) {
      return;
    }

    binding.path.traverse(stringLiteralReplacementVisitors, state);
  }
};

/**
 * These visitors process all JSX `className` attributes and traverses them
 * using the `replacementVisitors`.
 */
const classNameAttributeVisitors: Visitor<State> = {
  JSXAttribute: (path, state) => {
    const { name } = path.node.name;
    if (name !== "className") {
      return;
    }
    const node = path.node.value;

    // If 'className="..."' then convert to 'className={"..."}'
    if (!t.isJSXExpressionContainer(node) && path.node.value?.type === "StringLiteral") {
      // Converting to JSX expression
      const newPath = wrapWithJSXExpressionContainer(path);
      path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      return;
    }

    // If 'className={classnames(...)}' then convert to 'className={cx(...)}'
    if (t.isJSXExpressionContainer(node)) {
      const nodeExpression = node.expression;
      if (
        t.isCallExpression(nodeExpression) &&
        nodeExpression.callee.type === "Identifier" &&
        nodeExpression.callee.name.toLowerCase() === "classnames"
      ) {
        const newPath = renameClassnamesToCxCallExpression(nodeExpression);
        path.replaceWith(t.jsxAttribute(path.node.name, newPath));
        return;
      }
    }

    // If 'className={...}' then convert to 'className={cx(...)}'
    if (t.isJSXExpressionContainer(node) && !isCxCallExpression(node.expression)) {
      const newPath = wrapWithCxCallExpression(node);
      path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      return;
    }

    // Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
    if (t.isJSXExpressionContainer(node) && isCxCallExpression(node.expression)) {
      const callExpression = node.expression as t.CallExpression;
      if (callExpression.arguments.some(a => a.type === "StringLiteral" && a.value.includes(" "))) {
        const newPath = splitClassNames(callExpression);
        path.replaceWith(t.jsxAttribute(path.node.name, newPath));
        return;
      }
    }

    path.traverse(templateLiteralReplacementVisitors, state);
    path.traverse(classNameReplacementVisitors, state);
  },
  ObjectProperty: (path, state) => {
    if (
      path.node.key.type === "Identifier" &&
      path.node.key.name === "className" &&
      path.node.value.type === "StringLiteral"
    ) {
      const stringLiteralNode = path.node.value as t.StringLiteral;
      // If 'className={classnames(...)}' then convert to 'className={cx(...)}'
      // if (
      //   t.isCallExpression(path) &&
      //     path.callee.type === "Identifier" &&
      //     path.callee.name.toLowerCase() === "classnames"
      // ) {
      //   const newPath = renameClassnamesToCxCallExpression(path);
      //   path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      //   return;
      // }

      // If 'className={...}' then convert to 'className={cx(...)}'
      if (!isCxCallExpression(path.node)) {
        const newPath = wrapStringLiteralWithCxCallExpression(stringLiteralNode);
        path.replaceWith(t.objectProperty(t.identifier("className"), newPath));
        // return;
      }

      // Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
      // if (isCxCallExpression(node.expression)) {
      //   const callExpression = node.expression as t.CallExpression;
      //   if (callExpression.arguments.some(a => a.type === "StringLiteral" && a.value.includes(" "))) {
      //     const newPath = splitClassNames(callExpression);
      //     path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      //     return;
      //   }
      // }

      path.traverse(templateLiteralReplacementVisitors, state);
      path.traverse(classNameReplacementVisitors, state);
    }
  }
};

/**
 * These visitors process all bemHelpers function calls
 */
const bemHelperCallExpressionsVisitors: Visitor<State> = {
  CallExpression: (path: NodePath<t.CallExpression>, { classNames }) => {
    if (path.node.callee.type === "Identifier" && path.node.callee.name === "bemHelper") {
      const newPath = replaceBemHelperCallExpression(classNames, path);
      path.replaceWith(newPath as any);
    }
  }
};

/**
 * These visitors process top-level import statements, looking for all CSS imports.
 * When found, we'll retrieve and parse the CSS using PostCSS, to return the top
 * level CSS module class names that can be used in the code. We'll then store this
 * information in `State.classNames`, to be used in the above processing steps
 */
const importVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<t.ImportDeclaration>, state: State) => {
    const { hub, node } = path;
    // @ts-ignore
    const file = hub["file"];

    if (!isComponentFile(file)) {
      print("### index, importVisitors, isComponentFile = false", file.opts.filename);
      return;
    }

    // Inserts "import cx from classNames;"
    if (!state.cxImported && isFileContainsCssImports(file)) {
      path.insertBefore(
        t.importDeclaration([t.importDefaultSpecifier(t.identifier("cx"))], t.stringLiteral("classnames"))
      );
      state.cxImported = true;
      print("### index, importVisitors, new cx import inserted");
    }

    // Remove duplicated imports from classnames
    if (state.cxImported && isClassNamesImportDeclaration(node) && node.start !== undefined) {
      print("### index, importVisitors, cx import removed!");
      path.remove();
      return;
    }

    if (isBemHelperImportDeclaration(node)) {
      print("### index, importVisitors, bemHelper import removed!");
      path.remove();
      return;
    }

    // Ignore imports of non-CSS files
    if (!isCssImportDeclaration(node)) {
      return;
    }

    // Calculate the file path relative to the current file
    const scssFilename: string = resolve(dirname(file.opts.filename), node.source.value);
    // Get all relevant class names from the file
    let classNames: Map<string, string>;
    if (!filesClassNamesMap.has(scssFilename)) {
      classNames = convertToModuleClassNames(scssFilename);
      filesClassNamesMap.set(scssFilename, classNames);
      renameStylesheetFile(scssFilename);
    } else {
      classNames = filesClassNamesMap.get(scssFilename)!;
    }
    printWithCondition(false, "### convertToModuleClassNames, classNames", classNames);

    state = {
      ...state,
      classNames
    };

    // Replace the existing import with a wildcard import, namespaced under
    // a module-scope identifier we can reference the keys of. This will be
    // the CSS module classname map provided by webpack css-loader with modules
    // enabled usually, or possibly PostCSS modules plugin like we use here.
    path.replaceWith(
      t.importDeclaration(
        [t.importNamespaceSpecifier(t.identifier(state.opts.importIdentifier))],
        t.stringLiteral(getCssModulesFileName(node.source.value))
      )
    );

    // Traverse the top-level program path for BEM call expressions
    file.path.traverse(bemHelperCallExpressionsVisitors, state);

    // Traverse the top-level program path for JSX className attributes
    file.path.traverse(classNameAttributeVisitors, state);
  }
};

export default (): PluginObj<State> => ({
  name: "react-css-modules",
  visitor: {
    Program: (programPath, state) => {
      programPath.traverse(importVisitors, {
        ...state,
        opts: defaults({}, state.opts, PLUGIN_DEFAULTS)
      });
    }
  }
});
