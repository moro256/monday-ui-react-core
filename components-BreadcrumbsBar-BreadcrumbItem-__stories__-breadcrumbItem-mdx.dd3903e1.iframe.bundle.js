"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1037,3719],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,States:()=>States,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BreadcrumbItem_stories_breadcrumbItem_stories});__webpack_require__("../../node_modules/react/index.js");var createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/functions/createComponentTemplate.js"),BreadcrumbsBar=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbsBar.tsx"),BreadcrumbItem=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem.tsx"),Workspace=__webpack_require__("./src/components/Icon/Icons/components/Workspace.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),breadcrumbItem_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(breadcrumbItem_stories.A,options);breadcrumbItem_stories.A&&breadcrumbItem_stories.A.locals&&breadcrumbItem_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:BreadcrumbItem.A,iconPropNamesArray:["icon"]}),breadcrumbItemTemplate=(0,createComponentTemplate.M)(BreadcrumbItem.A);const BreadcrumbItem_stories_breadcrumbItem_stories={title:"Navigation/BreadcrumbsBar/BreadcrumbItem",component:BreadcrumbItem.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:breadcrumbItemTemplate.bind({}),name:"Overview",args:{text:"Workspace",icon:Workspace.A}},States={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_column-wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Link"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,link:"https://www.google.com"})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Function"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,onClick:function onClick(){alert("Hello")}})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Disabled"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.INDICATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,disabled:!0})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Current"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.INDICATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,isCurrent:!0})})]})]})},name:"States"},WithIcon={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_column-wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"With Icon"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.INDICATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Without Icon"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.INDICATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace"})})]})]})},name:"With icon"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: breadcrumbItemTemplate.bind({}),\n  name: "Overview",\n  args: {\n    text: "Workspace",\n    icon: Workspace\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-breadcrumb-item_column-wrapper">\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Link</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} link="https://www.google.com" />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Function</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} onClick={() => {\n          alert("Hello");\n        }} />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Disabled</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} disabled />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Current</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />\n        </BreadcrumbsBar>\n      </div>\n    </div>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-breadcrumb-item_column-wrapper">\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>With Icon</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Without Icon</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>\n          <BreadcrumbItem text="Workspace" />\n        </BreadcrumbsBar>\n      </div>\n    </div>,\n  name: "With icon"\n}',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","WithIcon"]},"./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_breadcrumbItem_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable}=_components;return PropsTable||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("PropsTable",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_breadcrumbItem_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"breadcrumbitem",children:"BreadcrumbItem"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_breadcrumbItem_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_breadcrumbItem_stories__WEBPACK_IMPORTED_MODULE_4__.States})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_breadcrumbItem_stories__WEBPACK_IMPORTED_MODULE_4__.WithIcon})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../storybook-blocks/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-breadcrumb-item_column-wrapper{display:flex;flex-direction:column;gap:40px}.monday-storybook-breadcrumb-item_column-wrapper ol{padding:0}.monday-storybook-breadcrumb-item_row-wrapper{display:flex;align-items:center;justify-content:flex-start;gap:50px}.monday-storybook-breadcrumb-item_row-wrapper span{width:100px}","",{version:3,sources:["webpack://./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.scss"],names:[],mappings:"AACE,iDACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,oDACE,SAAA,CAIJ,8CACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,QAAA,CACA,mDACE,WAAA",sourcesContent:[".monday-storybook-breadcrumb-item {\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    ol {\n      padding: 0;\n    }\n  }\n\n  &_row-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 50px;\n    span {\n      width: 100px;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);