"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1981,1319],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ProgressBars/LinearProgressBar/__stories__/linearProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiProgressBar:()=>MultiProgressBar,Overview:()=>Overview,ProgressBarAsACounter:()=>ProgressBarAsACounter,ProgressBarAsLoadingIndicator:()=>ProgressBarAsLoadingIndicator,Regular:()=>Regular,WithSecondaryValue:()=>WithSecondaryValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinearProgressBar_stories_linearProgressBar_stories});var react=__webpack_require__("../../node_modules/react/index.js"),LinearProgressBar=__webpack_require__("./src/components/ProgressBars/LinearProgressBar/LinearProgressBar.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts");const colors_namespaceObject=JSON.parse('{"zB":"#0085ff","fv":"#037f4c","D9":"#ffcb00"}');var Info=__webpack_require__("./src/components/Icon/Icons/components/Info.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),BreadcrumbItem=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem.tsx"),BreadcrumbsBar=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbsBar.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),linearProgressBar_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ProgressBars/LinearProgressBar/__stories__/linearProgressBar.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(linearProgressBar_stories.A,options);linearProgressBar_stories.A&&linearProgressBar_stories.A.locals&&linearProgressBar_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:LinearProgressBar.A,enumPropNamesArray:["size","barStyle"]});const LinearProgressBar_stories_linearProgressBar_stories={title:"Feedback/LinearProgressBar",component:LinearProgressBar.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var lineProgressBarTemplate=function lineProgressBarTemplate(args){return(0,jsx_runtime.jsx)(LinearProgressBar.A,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:"linear-progress-bar_small-wrapper"},args))};lineProgressBarTemplate.displayName="lineProgressBarTemplate";var Overview={render:lineProgressBarTemplate.bind({}),name:"Overview",args:{value:20,size:LinearProgressBar.A.sizes.LARGE}},Regular={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_column",children:[(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_block",children:[(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_small-wrapper",indicateProgress:!0,value:30,size:LinearProgressBar.A.sizes.LARGE}),"With label"]}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_block",children:[(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_small-wrapper",value:30,size:LinearProgressBar.A.sizes.LARGE}),"Without label"]})]})},name:"Regular"},WithSecondaryValue={render:function render(){return(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_small-wrapper",value:50,indicateProgress:!0,valueSecondary:65,size:LinearProgressBar.A.sizes.LARGE})},name:"With secondary value"},MultiProgressBar={render:function render(){var multiValues=(0,react.useMemo)((function(){return[{value:25,color:colors_namespaceObject.zB},{value:75,color:colors_namespaceObject.D9},{value:100,color:colors_namespaceObject.fv}]}),[]);return(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_big-wrapper",value:25,size:LinearProgressBar.A.sizes.LARGE,indicateProgress:!0,multi:!0,multiValues})},name:"Multi progress bar"},ProgressBarAsACounter={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_box",children:[(0,jsx_runtime.jsx)("h4",{children:"Loading files"}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_inline-wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_icon-wrapper",children:["Items",(0,jsx_runtime.jsx)(Icon.A,{icon:Info.A})]}),(0,jsx_runtime.jsx)("span",{children:"142/200"})]}),(0,jsx_runtime.jsx)(LinearProgressBar.A,{value:71,size:LinearProgressBar.A.sizes.LARGE,barStyle:LinearProgressBar.A.styles.POSITIVE})]})},name:"Progress bar as a counter"},ProgressBarAsLoadingIndicator={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_box-wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_row",children:[(0,jsx_runtime.jsx)("div",{className:"linear-progress-bar_img"}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_aside",children:[(0,jsx_runtime.jsx)("b",{children:"Frame 697.pg"}),(0,jsx_runtime.jsxs)(BreadcrumbsBar.A,{type:BreadcrumbsBar.A.types.INDICATION,className:"linear-progress-bar_breadcrumbs",children:[(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Hadas Test"}),(0,jsx_runtime.jsx)(BreadcrumbItem.A,{text:"Activity 6"})]}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_inline-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"2KB"}),(0,jsx_runtime.jsx)("span",{children:"Saving..."})]})]})]}),(0,jsx_runtime.jsx)(LinearProgressBar.A,{value:71})]})},name:"Progress bar as loading indicator"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: lineProgressBarTemplate.bind({}),\n  name: "Overview",\n  args: {\n    value: 20,\n    size: LinearProgressBar.sizes.LARGE\n  }\n}',...Overview.parameters?.docs?.source}}},Regular.parameters={...Regular.parameters,docs:{...Regular.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="linear-progress-bar_column">\n      <div className="linear-progress-bar_block">\n        <LinearProgressBar className="linear-progress-bar_small-wrapper" indicateProgress value={30} size={LinearProgressBar.sizes.LARGE} />\n        With label\n      </div>\n      <div className="linear-progress-bar_block">\n        <LinearProgressBar className="linear-progress-bar_small-wrapper" value={30} size={LinearProgressBar.sizes.LARGE} />\n        Without label\n      </div>\n    </div>,\n  name: "Regular"\n}',...Regular.parameters?.docs?.source}}},WithSecondaryValue.parameters={...WithSecondaryValue.parameters,docs:{...WithSecondaryValue.parameters?.docs,source:{originalSource:'{\n  render: () => <LinearProgressBar className="linear-progress-bar_small-wrapper" value={50} indicateProgress valueSecondary={65} size={LinearProgressBar.sizes.LARGE} />,\n  name: "With secondary value"\n}',...WithSecondaryValue.parameters?.docs?.source}}},MultiProgressBar.parameters={...MultiProgressBar.parameters,docs:{...MultiProgressBar.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const multiValues = useMemo(() => [{\n      value: 25,\n      color: colors.primary\n    }, {\n      value: 75,\n      color: colors.yellow\n    }, {\n      value: 100,\n      color: colors.grass_green\n    }], []);\n    return <LinearProgressBar className="linear-progress-bar_big-wrapper" value={25} size={LinearProgressBar.sizes.LARGE} indicateProgress multi multiValues={multiValues} />;\n  },\n  name: "Multi progress bar"\n}',...MultiProgressBar.parameters?.docs?.source}}},ProgressBarAsACounter.parameters={...ProgressBarAsACounter.parameters,docs:{...ProgressBarAsACounter.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="linear-progress-bar_box">\n      <h4>Loading files</h4>\n      <div className="linear-progress-bar_inline-wrapper">\n        <div className="linear-progress-bar_icon-wrapper">\n          Items\n          <Icon icon={Info} />\n        </div>\n        <span>142/200</span>\n      </div>\n      <LinearProgressBar value={71} size={LinearProgressBar.sizes.LARGE} barStyle={LinearProgressBar.styles.POSITIVE} />\n    </div>,\n  name: "Progress bar as a counter"\n}',...ProgressBarAsACounter.parameters?.docs?.source}}},ProgressBarAsLoadingIndicator.parameters={...ProgressBarAsLoadingIndicator.parameters,docs:{...ProgressBarAsLoadingIndicator.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="linear-progress-bar_box-wrapper">\n      <div className="linear-progress-bar_row">\n        <div className="linear-progress-bar_img" />\n        <div className="linear-progress-bar_aside">\n          <b>Frame 697.pg</b>\n          <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION} className="linear-progress-bar_breadcrumbs">\n            <BreadcrumbItem text="Hadas Test" />\n            <BreadcrumbItem text="Activity 6" />\n          </BreadcrumbsBar>\n          <div className="linear-progress-bar_inline-wrapper">\n            <span>2KB</span>\n            <span>Saving...</span>\n          </div>\n        </div>\n      </div>\n      <LinearProgressBar value={71} />\n    </div>,\n  name: "Progress bar as loading indicator"\n}',...ProgressBarAsLoadingIndicator.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Regular","WithSecondaryValue","MultiProgressBar","ProgressBarAsACounter","ProgressBarAsLoadingIndicator"]},"./src/components/ProgressBars/LinearProgressBar/__stories__/linearProgressBar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>linearProgressBar});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/components/storybook-link/storybook-link.js"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),LinearProgressBar=__webpack_require__("./src/components/ProgressBars/LinearProgressBar/LinearProgressBar.tsx"),TipMultiStepIndicator=function TipMultiStepIndicator(){return(0,jsx_runtime.jsxs)(tip.A,{children:["If you need to lead a user through a progress, use the"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Navigation/MultiStepIndicator",size:storybook_link.A.sizes.SMALL,children:"MultiStepIndicator"})," ","instead."]})};TipMultiStepIndicator.displayName="TipMultiStepIndicator";var ComponentRulePositive=function ComponentRulePositive(){return(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"linear-progress-bar_dialog-wrapper",children:[(0,jsx_runtime.jsx)("b",{children:"Items usage"}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_inline-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Items"}),(0,jsx_runtime.jsx)("span",{children:"142/200"})]}),(0,jsx_runtime.jsx)(LinearProgressBar.A,{value:71})]})};ComponentRulePositive.displayName="ComponentRulePositive";var ComponentRuleNegative=function ComponentRuleNegative(){return(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"linear-progress-bar_dialog-wrapper",children:[(0,jsx_runtime.jsx)("b",{children:"Storage"}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_row-wrapper",children:[(0,jsx_runtime.jsx)("div",{className:"linear-progress-bar_title",children:"Drive 1"}),(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_without-bg",value:88})]}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_row-wrapper",children:[(0,jsx_runtime.jsx)("div",{className:"linear-progress-bar_title",children:"Drive 2"}),(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_without-bg",value:46})]}),(0,jsx_runtime.jsxs)("div",{className:"linear-progress-bar_row-wrapper",children:[(0,jsx_runtime.jsx)("div",{className:"linear-progress-bar_title",children:"Drive 3"}),(0,jsx_runtime.jsx)(LinearProgressBar.A,{className:"linear-progress-bar_without-bg",value:72})]})]})};ComponentRuleNegative.displayName="ComponentRuleNegative";var linearProgressBar_stories=__webpack_require__("./src/components/ProgressBars/LinearProgressBar/__stories__/linearProgressBar.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:linearProgressBar_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"linearprogressbar",children:"LinearProgressBar"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Progress bars show continuous progress through a process, such as a percentage value. They show how much progress is complete and how much remains."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:linearProgressBar_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Give users an indication of how much of the task has been completed and how much is left."]}),"\n",(0,jsx_runtime.jsx)(TipMultiStepIndicator,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"regular",children:"Regular"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:linearProgressBar_stories.Regular})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-secondary-value",children:"With secondary value"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:linearProgressBar_stories.WithSecondaryValue})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multi-progress-bar",children:"Multi progress bar"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:linearProgressBar_stories.MultiProgressBar})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(ComponentRulePositive,{}),description:"Use a progress bar only process has start and finish point."},negative:{component:(0,jsx_runtime.jsx)(ComponentRuleNegative,{}),description:"Don’t use an infinite scalable indicator."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-bar-as-a-counter",children:"Progress bar as a counter"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The user can see in a clear way the number of items used in the account."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:linearProgressBar_stories.ProgressBarAsACounter})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-bar-as-loading-indicator",children:"Progress bar as loading indicator"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:linearProgressBar_stories.ProgressBarAsLoadingIndicator})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map._v,component_description_map.UT,component_description_map.w2]})]})}const linearProgressBar=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ProgressBars/LinearProgressBar/__stories__/linearProgressBar.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/components/ProgressBars/LinearProgressBar/__stories__/assets/Logo.png"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,`.linear-progress-bar_small-wrapper{width:400px}.linear-progress-bar_big-wrapper{width:600px}.linear-progress-bar_inline-wrapper{display:flex;align-items:space-between;justify-content:space-between;padding:14px 0 4px}.linear-progress-bar_dialog-wrapper{width:254px;height:124px;padding:20px 14px;display:flex;flex-direction:column}.linear-progress-bar_box{width:200px;padding:0 20px 10px}.linear-progress-bar_icon-wrapper{display:flex;align-items:center;justify-content:center;gap:2px}.linear-progress-bar_row-wrapper{display:flex;flex-flow:row nowrap;align-items:center;padding:0}.linear-progress-bar_title{width:80px}.linear-progress-bar_img{width:80px;height:80px;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-position:center;background-size:contain;background-repeat:no-repeat}.linear-progress-bar_box-wrapper{display:flex;width:410px;flex-direction:column;border:1px solid;border-color:var(--sb-layout-border-color);padding:16px}.linear-progress-bar_aside{display:flex;flex-direction:column;width:400px;padding-left:10px}.linear-progress-bar_row{display:flex}.linear-progress-bar_breadcrumbs{margin:-12px -46px -20px}.linear-progress-bar_block{display:flex;flex-direction:column;gap:8px}.linear-progress-bar_column{display:flex;flex-direction:column;gap:40px}`,"",{version:3,sources:["webpack://./src/components/ProgressBars/LinearProgressBar/__stories__/linearProgressBar.stories.scss"],names:[],mappings:"AACE,mCACE,WAAA,CAGF,iCACE,WAAA,CAGF,oCACE,YAAA,CACA,yBAAA,CACA,6BAAA,CACA,kBAAA,CAGF,oCACE,WAAA,CACA,YAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CAGF,yBACE,WAAA,CACA,mBAAA,CAGF,kCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CAGF,iCACE,YAAA,CACA,oBAAA,CACA,kBAAA,CACA,SAAA,CAGF,2BACE,UAAA,CAGF,yBACE,UAAA,CACA,WAAA,CACA,wDAAA,CACA,0BAAA,CACA,uBAAA,CACA,2BAAA,CAGF,iCACE,YAAA,CACA,WAAA,CACA,qBAAA,CACA,gBAAA,CACA,0CAAA,CACA,YAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CAGF,yBACE,YAAA,CAGF,iCACE,wBAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,OAAA,CAGF,4BACE,YAAA,CACA,qBAAA,CACA,QAAA",sourcesContent:['.linear-progress-bar {\n  &_small-wrapper {\n    width: 400px;\n  }\n\n  &_big-wrapper {\n    width: 600px;\n  }\n\n  &_inline-wrapper {\n    display: flex;\n    align-items: space-between;\n    justify-content: space-between;\n    padding: 14px 0 4px;\n  }\n\n  &_dialog-wrapper {\n    width: 254px;\n    height: 124px;\n    padding: 20px 14px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  &_box {\n    width: 200px;\n    padding: 0 20px 10px;\n  }\n\n  &_icon-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n  }\n\n  &_row-wrapper {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    padding: 0;\n  }\n\n  &_title {\n    width: 80px;\n  }\n\n  &_img {\n    width: 80px;\n    height: 80px;\n    background-image: url("./assets/Logo.png");\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n  &_box-wrapper {\n    display: flex;\n    width: 410px;\n    flex-direction: column;\n    border: 1px solid;\n    border-color: var(--sb-layout-border-color);\n    padding: 16px;\n  }\n\n  &_aside {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    padding-left: 10px;\n  }\n\n  &_row {\n    display: flex;\n  }\n\n  &_breadcrumbs {\n    margin: -12px -46px -20px;\n  }\n\n  &_block {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  &_column {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/ProgressBars/LinearProgressBar/__stories__/assets/Logo.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/Logo.e6823aa8.png"}}]);