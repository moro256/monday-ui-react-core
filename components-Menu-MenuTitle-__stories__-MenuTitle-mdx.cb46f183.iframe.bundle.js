"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[9847,2753],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Menu/MenuTitle/__stories__/MenuTitle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CaptionPlacements:()=>CaptionPlacements,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../storybook-blocks/dist/functions/createComponentTemplate.js"),_storybook_functions_createStoryMetaSettingsDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_MenuTitle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuTitle/MenuTitle.tsx"),_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,_storybook_functions_createStoryMetaSettingsDecorator__WEBPACK_IMPORTED_MODULE_2__.B)({component:_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A,enumPropNamesArray:["captionPosition"]});const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Menu/MenuTitle",component:_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__.M)(_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A).bind({}),name:"Overview",args:{caption:"Menu title"}},CaptionPlacements={render:function render(){return[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A,{caption:"Top caption",captionPosition:_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A.positions.TOP}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Menu item"})]},"top"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_5__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A,{caption:"Center caption",captionPosition:_MenuTitle__WEBPACK_IMPORTED_MODULE_3__.A.positions.CENTER}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Menu item"})]},"center")]},name:"Caption placements"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: menuTitleTemplate.bind({}),\n  name: "Overview",\n  args: {\n    caption: "Menu title"\n  }\n}',...Overview.parameters?.docs?.source}}},CaptionPlacements.parameters={...CaptionPlacements.parameters,docs:{...CaptionPlacements.parameters?.docs,source:{originalSource:'{\n  render: () => [<Menu key="top">\n      <MenuTitle caption="Top caption" captionPosition={MenuTitle.positions.TOP} />\n      <MenuItem title="Menu item" />\n    </Menu>, <Menu key="center">\n      <MenuTitle caption="Center caption" captionPosition={MenuTitle.positions.CENTER} />\n      <MenuItem title="Menu item" />\n    </Menu>],\n  name: "Caption placements"\n}',...CaptionPlacements.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","CaptionPlacements"]},"./src/components/Menu/MenuTitle/__stories__/MenuTitle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_MenuTitle_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Menu/MenuTitle/__stories__/MenuTitle.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable}=_components;return PropsTable||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("PropsTable",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_MenuTitle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"menu-title",children:"Menu Title"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_MenuTitle_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"caption-positions",children:"Caption positions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_MenuTitle_stories__WEBPACK_IMPORTED_MODULE_4__.CaptionPlacements})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../storybook-blocks/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);