"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[9351],{"./src/components/AttentionBox/__stories__/attentionBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AttentionBoxInsideADialogCombobox:()=>AttentionBoxInsideADialogCombobox,AttentionBoxWithLink:()=>AttentionBoxWithLink,Dismissable:()=>Dismissable,NaturalAttentionBox:()=>NaturalAttentionBox,Overview:()=>Overview,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AttentionBox_stories_attentionBox_stories});var react=__webpack_require__("../../node_modules/react/index.js"),AttentionBox=__webpack_require__("./src/components/AttentionBox/AttentionBox.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/functions/createComponentTemplate.js"),story_description=__webpack_require__("../storybook-blocks/dist/components/story-description/story-description.js"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),Info=__webpack_require__("./src/components/Icon/Icons/components/Info.tsx"),ThumbsUp=__webpack_require__("./src/components/Icon/Icons/components/ThumbsUp.tsx"),Invite=__webpack_require__("./src/components/Icon/Icons/components/Invite.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx");const person_namespaceObject=__webpack_require__.p+"static/media/person.de30c8ee.png";var Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Favorite=__webpack_require__("./src/components/Icon/Icons/components/Favorite.tsx"),AttentionBoxLink=__webpack_require__("./src/components/AttentionBox/AttentionBoxLink/AttentionBoxLink.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),attentionBox_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/AttentionBox/__stories__/attentionBox.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(attentionBox_stories.A,options);attentionBox_stories.A&&attentionBox_stories.A.locals&&attentionBox_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:AttentionBox.A,enumPropNamesArray:["type","iconType"],iconPropNamesArray:["icon"],actionPropsArray:["onClose"]}),attentionBoxTemplate=(0,createComponentTemplate.M)(AttentionBox.A);const AttentionBox_stories_attentionBox_stories={title:"Feedback/AttentionBox",component:AttentionBox.A,subcomponents:{AttentionBoxLink:AttentionBoxLink.A},argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:attentionBoxTemplate.bind({}),name:"Overview",args:{onClose:function onClose(){return null},title:"Attention box title",text:"Studies show that 100% of people who celebrate birthdays, will eventually die.",className:"monday-storybook-attention-box_box"}},States={render:function render(){return(0,jsx_runtime.jsxs)(Flex.A,{direction:Flex.A.directions.COLUMN,gap:Flex.A.gaps.SMALL,children:[(0,jsx_runtime.jsx)(story_description.A,{description:"Primary",children:(0,jsx_runtime.jsx)(AttentionBox.A,{title:"Enabling SSO Login",text:"Will cause all your team lose access to the account until using the correct SSO source.",className:"monday-storybook-attention-box_box",icon:Info.A})}),(0,jsx_runtime.jsx)(story_description.A,{description:"Success",children:(0,jsx_runtime.jsx)(AttentionBox.A,{title:"You're doing great",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",type:AttentionBox.A.types.SUCCESS,className:"monday-storybook-attention-box_box",icon:ThumbsUp.A})}),(0,jsx_runtime.jsx)(story_description.A,{description:"Danger",children:(0,jsx_runtime.jsx)(AttentionBox.A,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:AttentionBox.A.types.DANGER,className:"monday-storybook-attention-box_box"})}),(0,jsx_runtime.jsx)(story_description.A,{description:"Warning",children:(0,jsx_runtime.jsx)(AttentionBox.A,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:AttentionBox.A.types.WARNING,className:"monday-storybook-attention-box_box"})}),(0,jsx_runtime.jsx)(story_description.A,{description:"Dark",children:(0,jsx_runtime.jsx)(AttentionBox.A,{title:"What a great idea!",text:"You can also make this list sortable by tagging the items with tags column",type:AttentionBox.A.types.DARK,className:"monday-storybook-attention-box_box",icon:Favorite.A})})]})},name:"States"},AttentionBoxWithLink={render:function render(){return(0,jsx_runtime.jsx)(AttentionBox.A,{compact:!0,className:"monday-storybook-attention-box--fixed-width",children:(0,jsx_runtime.jsxs)(Flex.A,{justify:Flex.A.justify.SPACE_BETWEEN,gap:Flex.A.gaps.XS,children:["Get your monday.com notifications",(0,jsx_runtime.jsx)(AttentionBoxLink.A,{href:"",text:"Learn more"})]})})}},Dismissable={render:function render(){var mockOnClose=(0,react.useCallback)((function(){return null}),[]);return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_row-wrapper",children:[(0,jsx_runtime.jsx)(AttentionBox.A,{title:"Regular attention box",text:"Dismissable attention box with two lines of content.",onClose:mockOnClose,className:"monday-storybook-attention-box_box",icon:Info.A}),(0,jsx_runtime.jsx)(AttentionBox.A,{text:"Attention box in compact mode",onClose:mockOnClose,compact:!0,className:"monday-storybook-attention-box_box"})]})},name:"Dismissable "},NaturalAttentionBox={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"monday-storybook-attention-box_title",children:"Cross-Account Copier"}),(0,jsx_runtime.jsx)("span",{className:"monday-storybook-attention-box_text",children:"Copy boards and dashboards to another account"}),(0,jsx_runtime.jsx)(AttentionBox.A,{compact:!0,withIconWithoutHeader:!0,icon:Info.A,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",type:AttentionBox.A.types.DARK})]})},name:"Natural attention box"},AttentionBoxInsideADialogCombobox={render:function render(){var mockOnClose=(0,react.useCallback)((function(){return null}),[]);return(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-attention-box_search-bar",children:[(0,jsx_runtime.jsx)(Search.A,{placeholder:"Search by name, role, team, or email"}),(0,jsx_runtime.jsx)("div",{className:"monday-storybook-attention-box_lable",children:"Suggested people"}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_search",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_inline-container",children:[(0,jsx_runtime.jsx)(Avatar.A,{size:Avatar.A.sizes.MEDIUM,src:person_namespaceObject,type:Avatar.A.types.IMG}),(0,jsx_runtime.jsxs)("span",{className:"monday-storybook-attention-box_name",children:["May Kishon ",(0,jsx_runtime.jsx)("span",{children:"(UX/UI Product Designer)"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_inline-container",children:[(0,jsx_runtime.jsx)(Icon.A,{iconSize:"24",icon:Invite.A,className:"monday-storybook-attention-box_icon"}),(0,jsx_runtime.jsx)("span",{className:"monday-storybook-attention-box_name",children:"Invite new board member by email"})]}),(0,jsx_runtime.jsx)(AttentionBox.A,{text:"Hold ⌘ to select more than one person or team",compact:!0,onClose:mockOnClose})]})]})},name:"Attention box inside a dialog/combobox"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: attentionBoxTemplate.bind({}),\n  name: "Overview",\n  args: {\n    onClose: () => null,\n    title: "Attention box title",\n    text: "Studies show that 100% of people who celebrate birthdays, will eventually die.",\n    className: "monday-storybook-attention-box_box"\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL}>\n      <StoryDescription description="Primary">\n        <AttentionBox title="Enabling SSO Login" text="Will cause all your team lose access to the account until using the correct SSO source." className="monday-storybook-attention-box_box" icon={Info} />\n      </StoryDescription>\n      <StoryDescription description="Success">\n        <AttentionBox title="You\'re doing great" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type={AttentionBox.types.SUCCESS} className="monday-storybook-attention-box_box" icon={ThumbsUp} />\n      </StoryDescription>\n      <StoryDescription description="Danger">\n        <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type={AttentionBox.types.DANGER} className="monday-storybook-attention-box_box" />\n      </StoryDescription>\n      <StoryDescription description="Warning">\n        <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type={AttentionBox.types.WARNING} className="monday-storybook-attention-box_box" />\n      </StoryDescription>\n      <StoryDescription description="Dark">\n        <AttentionBox title="What a great idea!" text="You can also make this list sortable by tagging the items with tags column" type={AttentionBox.types.DARK} className="monday-storybook-attention-box_box" icon={Favorite} />\n      </StoryDescription>\n    </Flex>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},AttentionBoxWithLink.parameters={...AttentionBoxWithLink.parameters,docs:{...AttentionBoxWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return /** Classname for setting a constant width to the attention box */(\n      <AttentionBox compact className="monday-storybook-attention-box--fixed-width">\n        <Flex justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.XS}>\n          Get your monday.com notifications\n          <AttentionBoxLink href="" text="Learn more" />\n        </Flex>\n      </AttentionBox>\n    );\n  }\n}',...AttentionBoxWithLink.parameters?.docs?.source}}},Dismissable.parameters={...Dismissable.parameters,docs:{...Dismissable.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const mockOnClose = useCallback(() => null, []);\n    return <div className="monday-storybook-attention-box_row-wrapper">\n        <AttentionBox title="Regular attention box" text="Dismissable attention box with two lines of content." onClose={mockOnClose} className="monday-storybook-attention-box_box" icon={Info} />\n        <AttentionBox text="Attention box in compact mode" onClose={mockOnClose} compact className="monday-storybook-attention-box_box" />\n      </div>;\n  },\n  name: "Dismissable "\n}',...Dismissable.parameters?.docs?.source}}},NaturalAttentionBox.parameters={...NaturalAttentionBox.parameters,docs:{...NaturalAttentionBox.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-attention-box_wrapper">\n      <span className="monday-storybook-attention-box_title">Cross-Account Copier</span>\n      <span className="monday-storybook-attention-box_text">Copy boards and dashboards to another account</span>\n      <AttentionBox compact withIconWithoutHeader icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." type={AttentionBox.types.DARK} />\n    </div>,\n  name: "Natural attention box"\n}',...NaturalAttentionBox.parameters?.docs?.source}}},AttentionBoxInsideADialogCombobox.parameters={...AttentionBoxInsideADialogCombobox.parameters,docs:{...AttentionBoxInsideADialogCombobox.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const mockOnClose = useCallback(() => null, []);\n    return <DialogContentContainer className="monday-storybook-attention-box_search-bar">\n        <Search placeholder="Search by name, role, team, or email" />\n        <div className="monday-storybook-attention-box_lable">Suggested people</div>\n        <div className="monday-storybook-attention-box_search">\n          <div className="monday-storybook-attention-box_inline-container">\n            <Avatar size={Avatar.sizes.MEDIUM} src={person} type={Avatar.types.IMG} />\n            <span className="monday-storybook-attention-box_name">\n              May Kishon <span>(UX/UI Product Designer)</span>\n            </span>\n          </div>\n          <div className="monday-storybook-attention-box_inline-container">\n            <Icon iconSize="24" icon={Invite} className="monday-storybook-attention-box_icon" />\n            <span className="monday-storybook-attention-box_name">Invite new board member by email</span>\n          </div>\n          <AttentionBox text="Hold ⌘ to select more than one person or team" compact onClose={mockOnClose} />\n        </div>\n      </DialogContentContainer>;\n  },\n  name: "Attention box inside a dialog/combobox"\n}',...AttentionBoxInsideADialogCombobox.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","AttentionBoxWithLink","Dismissable","NaturalAttentionBox","AttentionBoxInsideADialogCombobox"]},"../storybook-blocks/dist/components/story-description/story-description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>p});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),withStaticProps=__webpack_require__("../storybook-blocks/dist/types/withStaticProps.js"),FlexConstants=__webpack_require__("../storybook-blocks/dist/helpers/components/Flex/FlexConstants.js"),Flex=__webpack_require__("../storybook-blocks/dist/helpers/components/Flex/Flex.js"),e_description="story-description-module_description__yFjQO",e_vertical="story-description-module_vertical__C1SJj";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var p=(0,withStaticProps.N)((function m(t){var o,l,n,_t$description=t.description,a=void 0===_t$description?"":_t$description,p=t.headerStyle,u=t.children,_t$vertical=t.vertical,v=void 0!==_t$vertical&&_t$vertical,f=t.className,j=t.align,_t$justify=t.justify,g=void 0===_t$justify?null===(o=m.justify)||void 0===o?void 0:o.START:_t$justify,h=t.headerAlign,y=t.headerJustify,x=(0,react.useMemo)((function(){var i,s;return v?null===(i=m.directions)||void 0===i?void 0:i.COLUMN:null===(s=m.directions)||void 0===s?void 0:s.ROW}),[v]);return(0,jsx_runtime.jsxs)(Flex.A,{direction:x,gap:null===(l=m.gaps)||void 0===l?void 0:l.MEDIUM,justify:g,align:j||void 0,className:f,children:[(0,jsx_runtime.jsx)(Flex.A,{className:classnames_default()(e_description,_defineProperty({},e_vertical,v)),style:Object.assign({width:"120px"},p),justify:y,align:h||(null===(n=m.align)||void 0===n?void 0:n.CENTER),children:a}),u]})}),{justify:FlexConstants.aP,align:FlexConstants.xB,gaps:FlexConstants.Us,directions:FlexConstants.bo})},"../storybook-blocks/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/AttentionBox/__stories__/attentionBox.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-attention-box--fixed-width{width:430px}.monday-storybook-attention-box_column-wrapper{display:flex;flex-direction:column;justify-content:flex-start;gap:15px}.monday-storybook-attention-box_title{font-style:normal;font-weight:bold;font-size:24px;line-height:28px;display:block}.monday-storybook-attention-box_text{font-size:14px;line-height:22px;margin:4px 0 10px}.monday-storybook-attention-box_row-wrapper{display:flex;flex-direction:row;gap:52px;align-content:flex-start}.monday-storybook-attention-box_inline-wrapper{display:flex;align-items:center;gap:6px}.monday-storybook-attention-box_wrapper{display:flex;flex-direction:column}.monday-storybook-attention-box_search-bar{display:flex;flex-direction:column;gap:18px;padding:16px;width:380px}.monday-storybook-attention-box_box{width:340px}.monday-storybook-attention-box_search{display:flex;flex-direction:column;align-items:flex-start;gap:18px}.monday-storybook-attention-box_lable{font-size:14px;padding-left:5px;margin-top:4px}.monday-storybook-attention-box_inline-container{display:flex;align-items:center;justify-content:center;gap:8px}.monday-storybook-attention-box_name{font-size:14px}.monday-storybook-attention-box_name span{color:var(--sb-secondary-text-color)}.monday-storybook-attention-box_icon{margin:0 5px 0 8px}.monday-storybook-attention-box_info{display:flex;justify-content:space-between}.monday-storybook-attention-box_att-box{width:430px;margin-top:10px}","",{version:3,sources:["webpack://./src/components/AttentionBox/__stories__/attentionBox.stories.scss"],names:[],mappings:"AAGE,6CACE,WAAA,CAGF,+CACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,QAAA,CAGF,sCACE,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CAGF,qCACE,cAAA,CACA,gBAAA,CACA,iBAAA,CAGF,4CACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,wBAAA,CAGF,+CACE,YAAA,CACA,kBAAA,CACA,OAAA,CAGF,wCACE,YAAA,CACA,qBAAA,CAGF,2CACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,YAAA,CACA,WAAA,CAGF,oCACE,WAAA,CAGF,uCACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,QAAA,CAGF,sCACE,cAAA,CACA,gBAAA,CACA,cAAA,CAGF,iDACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CAGF,qCACE,cAAA,CAEA,0CACE,oCAAA,CAIJ,qCACE,kBAAA,CAGF,qCACE,YAAA,CACA,6BAAA,CAGF,wCACE,WAAA,CACA,eAAA",sourcesContent:['@import "../../../styles/typography";\n\n.monday-storybook-attention-box {\n  &--fixed-width {\n    width: 430px;\n  }\n\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 15px;\n  }\n\n  &_title {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 28px;\n    display: block;\n  }\n\n  &_text {\n    font-size: 14px;\n    line-height: 22px;\n    margin: 4px 0 10px;\n  }\n\n  &_row-wrapper {\n    display: flex;\n    flex-direction: row;\n    gap: 52px;\n    align-content: flex-start;\n  }\n\n  &_inline-wrapper {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  &_wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &_search-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    padding: 16px;\n    width: 380px;\n  }\n\n  &_box {\n    width: 340px;\n  }\n\n  &_search {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 18px;\n  }\n\n  &_lable {\n    font-size: 14px;\n    padding-left: 5px;\n    margin-top: 4px;\n  }\n\n  &_inline-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n\n  &_name {\n    font-size: 14px;\n\n    span {\n      color: var(--sb-secondary-text-color);\n    }\n  }\n\n  &_icon {\n    margin: 0 5px 0 8px;\n  }\n\n  &_info {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &_att-box {\n    width: 430px;\n    margin-top: 10px;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);