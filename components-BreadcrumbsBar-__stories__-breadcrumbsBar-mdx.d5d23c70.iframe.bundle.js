"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3649,9779],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/BreadcrumbsBar/__stories__/breadcrumbsBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavigatableBreadcrumbs:()=>NavigatableBreadcrumbs,Overview:()=>Overview,TextOnly:()=>TextOnly,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BreadcrumbsBar_stories_breadcrumbsBar_stories});__webpack_require__("../../node_modules/react/index.js");var BreadcrumbsBar=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbsBar.tsx"),BreadcrumbItem=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem.tsx"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),Workspace=__webpack_require__("./src/components/Icon/Icons/components/Workspace.tsx"),Folder=__webpack_require__("./src/components/Icon/Icons/components/Folder.tsx"),Board=__webpack_require__("./src/components/Icon/Icons/components/Board.tsx"),Group=__webpack_require__("./src/components/Icon/Icons/components/Group.tsx"),person3=__webpack_require__("./src/components/BreadcrumbsBar/__stories__/assets/person3.png"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),breadcrumbsBar_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/BreadcrumbsBar/__stories__/breadcrumbsBar.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(breadcrumbsBar_stories.A,options);breadcrumbsBar_stories.A&&breadcrumbsBar_stories.A.locals&&breadcrumbsBar_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:BreadcrumbsBar.A,enumPropNamesArray:["type"]}),breadcrumbsBarTemplate=function breadcrumbsBarTemplate(args){return(0,jsx_runtime.jsx)(BreadcrumbsBar.A,_objectSpread(_objectSpread({},args),{},{children:args.items&&args.items.map((function(item){return(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:item.text,icon:item.icon},item.text)}))}))};breadcrumbsBarTemplate.displayName="breadcrumbsBarTemplate";const BreadcrumbsBar_stories_breadcrumbsBar_stories={title:"Navigation/BreadcrumbsBar/BreadcrumbsBar",component:BreadcrumbsBar.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:breadcrumbsBarTemplate.bind({}),name:"Overview",args:{items:[{text:"Workspace",icon:Workspace.A},{text:"Folder",icon:Folder.A},{text:"Board",icon:Board.A},{text:"Group",icon:Group.A}]}},TextOnly={render:function render(){return(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.INDICATION,children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",isCurrent:!0}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Folder"}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Board"}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Group"})]})},name:"Text only"},WithIcons={render:function render(){return(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,isCurrent:!0}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Folder",icon:Folder.A}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Board",icon:Board.A}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Group",icon:Group.A})]})},name:"With icons"},NavigatableBreadcrumbs={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumbs-bar_inline-wrapper",children:[(0,jsx_runtime.jsx)(Avatar.A,{size:Avatar.A.sizes.MEDIUM,src:person3,type:Avatar.A.types.IMG}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumbs-bar_column-wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"monday-storybook-breadcrumbs-bar_title",children:"Rotem Dekel"}),(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"User research",icon:Board.A}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Video sessions",icon:Group.A})]})]})]})},name:"Navigatable breadcrumbs"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: breadcrumbsBarTemplate.bind({}),\n  name: "Overview",\n  args: {\n    items: [{\n      text: "Workspace",\n      icon: Workspace\n    }, {\n      text: "Folder",\n      icon: Folder\n    }, {\n      text: "Board",\n      icon: Board\n    }, {\n      text: "Group",\n      icon: Group\n    }]\n  }\n}',...Overview.parameters?.docs?.source}}},TextOnly.parameters={...TextOnly.parameters,docs:{...TextOnly.parameters?.docs,source:{originalSource:'{\n  render: () => <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>\n      <BreadcrumbItem text="Workspace" isCurrent />\n      <BreadcrumbItem text="Folder" />\n      <BreadcrumbItem text="Board" />\n      <BreadcrumbItem text="Group" />\n    </BreadcrumbsBar>,\n  name: "Text only"\n}',...TextOnly.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>\n      <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />\n      <BreadcrumbItem text="Folder" icon={Folder} />\n      <BreadcrumbItem text="Board" icon={Board} />\n      <BreadcrumbItem text="Group" icon={Group} />\n    </BreadcrumbsBar>,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},NavigatableBreadcrumbs.parameters={...NavigatableBreadcrumbs.parameters,docs:{...NavigatableBreadcrumbs.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-breadcrumbs-bar_inline-wrapper">\n      <Avatar size={Avatar.sizes.MEDIUM} src={person3} type={Avatar.types.IMG} />\n      <div className="monday-storybook-breadcrumbs-bar_column-wrapper">\n        <span className="monday-storybook-breadcrumbs-bar_title">Rotem Dekel</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>\n          <BreadcrumbItem text="User research" icon={Board} />\n          <BreadcrumbItem text="Video sessions" icon={Group} />\n        </BreadcrumbsBar>\n      </div>\n    </div>,\n  name: "Navigatable breadcrumbs"\n}',...NavigatableBreadcrumbs.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","TextOnly","WithIcons","NavigatableBreadcrumbs"]},"./src/components/BreadcrumbsBar/__stories__/breadcrumbsBar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>breadcrumbsBar});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),BreadcrumbsBar=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbsBar.tsx"),BreadcrumbItem=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem.tsx"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),Workspace=__webpack_require__("./src/components/Icon/Icons/components/Workspace.tsx"),Folder=__webpack_require__("./src/components/Icon/Icons/components/Folder.tsx"),Board=__webpack_require__("./src/components/Icon/Icons/components/Board.tsx"),Group=__webpack_require__("./src/components/Icon/Icons/components/Group.tsx"),person3=__webpack_require__("./src/components/BreadcrumbsBar/__stories__/assets/person3.png"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/components/storybook-link/storybook-link.js"),TipCheckYourself=function TipCheckYourself(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Check yourself",children:["If you are taking users through a multistep process, use the"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Navigation/MultiStepIndicator",size:storybook_link.A.sizes.SMALL,children:"MultiStepIndicator"})," ","component instead."]})};TipCheckYourself.displayName="TipCheckYourself";var breadcrumbsBar_stories=__webpack_require__("./src/components/BreadcrumbsBar/__stories__/breadcrumbsBar.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div",span:"span"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:breadcrumbsBar_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"breadcrumbsbar",children:"BreadcrumbsBar"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Breadcrumbs allow users to keep track and maintain awareness of their location as they navigate through pages, folders, files, etc."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:breadcrumbsBar_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step","Effective in a hierarchy of more than two levels.","Start with the highest level parent page and move deeper into the information architecture as the breadcrumb trail progresses.","Use breadcrumbs when the user is most likely to have landed on the page from an external source.","Place breadcrumbs at the top left corner of the screen, above the page title."]}),"\n",(0,jsx_runtime.jsx)(TipCheckYourself,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text-only",children:"Text only"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:breadcrumbsBar_stories.TextOnly})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:breadcrumbsBar_stories.WithIcons})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,isCurrent:!0}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Folder",icon:Folder.A}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Board",icon:Board.A}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Group",icon:Group.A})]}),description:"If there’s a need to insert an icon, use for all items."},negative:{component:(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Workspace",icon:Workspace.A,isCurrent:!0}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Folder"}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Board"}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Group"})]}),description:"Don’t use icons if not applied to all steps."}},{positive:{component:(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-breadcrumbs-bar_inline-wrapper",children:[(0,jsx_runtime.jsx)(Avatar.A,{size:Avatar.A.sizes.MEDIUM,src:person3,type:Avatar.A.types.IMG}),(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-breadcrumbs-bar_column-wrapper",children:[(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-breadcrumbs-bar_title",children:"Rotem Dekel"}),(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"User research",icon:Board.A}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Video sessions",icon:Group.A})]})]})]}),description:"Use breadcrumbs when there is more than two levels of hierarchy."},negative:{component:(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-breadcrumbs-bar_inline-wrapper",children:[(0,jsx_runtime.jsx)(Avatar.A,{size:Avatar.A.sizes.MEDIUM,src:person3,type:Avatar.A.types.IMG}),(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-breadcrumbs-bar_column-wrapper",children:[(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-breadcrumbs-bar_title",children:"Rotem Dekel"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.NAVIGATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"User research",icon:Board.A})})]})]}),description:"Don’t use breadcrumbs when there is only one level of navigation or hierachy."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"navigatable-breadcrumbs",children:"Navigatable breadcrumbs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use when breadcrumbs are clickable and are used for information and navigation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:breadcrumbsBar_stories.NavigatableBreadcrumbs})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.z9,component_description_map.pl,component_description_map.DF]})]})}const breadcrumbsBar=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/BreadcrumbsBar/__stories__/breadcrumbsBar.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-breadcrumbs-bar_inline-wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 12px;gap:12px;width:320px}.monday-storybook-breadcrumbs-bar_line{display:flex;align-items:center;gap:10px;padding-left:5px}.monday-storybook-breadcrumbs-bar_title{font-style:normal;font-weight:500;font-size:16px;line-height:24px}.monday-storybook-breadcrumbs-bar_column-wrapper{display:flex;flex-direction:column}.monday-storybook-breadcrumbs-bar_column-wrapper ol{padding-inline-start:0;padding:0;margin:0}","",{version:3,sources:["webpack://./src/components/BreadcrumbsBar/__stories__/breadcrumbsBar.stories.scss"],names:[],mappings:"AACE,iDACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,gBAAA,CACA,QAAA,CACA,WAAA,CAGF,uCACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,gBAAA,CAGF,wCACE,iBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAGF,iDACE,YAAA,CACA,qBAAA,CACA,oDACE,sBAAA,CACA,SAAA,CACA,QAAA",sourcesContent:[".monday-storybook-breadcrumbs-bar {\n  &_inline-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 8px 12px;\n    gap: 12px;\n    width: 320px;\n  }\n\n  &_line {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding-left: 5px;\n  }\n\n  &_title {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    ol {\n      padding-inline-start: 0;\n      padding: 0;\n      margin: 0;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/BreadcrumbsBar/__stories__/assets/person3.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/person3.7ed20eb8.png"}}]);