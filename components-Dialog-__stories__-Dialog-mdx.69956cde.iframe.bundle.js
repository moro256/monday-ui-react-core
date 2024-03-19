"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3655],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Dialog/__stories__/Dialog.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Dialog});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),AttentionBox=__webpack_require__("./src/components/AttentionBox/AttentionBox.tsx"),AttentionBoxLink=__webpack_require__("./src/components/AttentionBox/AttentionBoxLink/AttentionBoxLink.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/components/storybook-link/storybook-link.js"),link_link=__webpack_require__("../storybook-blocks/dist/components/link/link.js"),TipDialogContentContainer=function TipDialogContentContainer(){return(0,jsx_runtime.jsxs)(tip.A,{children:["For setting the dialog UI appearance, use"," ",(0,jsx_runtime.jsx)(storybook_link.A,{size:storybook_link.A.sizes.SMALL,page:"Popover",story:"DialogContentContainer",children:"DialogContentContainer"})," ","component."]})};TipDialogContentContainer.displayName="TipDialogContentContainer";var TipDevTipPopperJs=function TipDevTipPopperJs(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Dev tip",children:["You can use the",(0,jsx_runtime.jsx)(link_link.A,{size:link_link.A.sizes.SMALL,href:"https://popper.js.org/docs/v2/modifiers/",children:"Popper.js modifiers"}),"for extended Dialog customization."]})};TipDevTipPopperJs.displayName="TipDevTipPopperJs";var TipModal=function TipModal(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Wishing to position your popover in the center of the page?",children:["Exactly for this purpose, we created the"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Feedback/Modal",size:storybook_link.A.sizes.SMALL,children:"Modal"})," ","component! Check it out."]})};TipModal.displayName="TipModal";var TipDevTipTechnicalPattern=function TipDevTipTechnicalPattern(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Dev tip",children:["If you wish to implement a"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Inputs/Dropdown",size:storybook_link.A.sizes.SMALL,children:"Dropdown"})," ","inside a Dialog container and need help displaying the Dropdowns popovers correctly, read more about our Dropdown in popovers technical pattern"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Technical Patterns/Dropdowns inside pop-overs",size:storybook_link.A.sizes.SMALL,children:"here"}),"."]})};TipDevTipTechnicalPattern.displayName="TipDevTipTechnicalPattern";var Dialog_stories=__webpack_require__("./src/components/Dialog/__stories__/Dialog.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",code:"code"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,StorybookLink,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Dialog_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"dialog",children:"Dialog"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The dialog component's purpose is to position a popup component nearby another element, such as any kind of a button.\nPlease be aware that the dialog component is not responsible for the appearance features of the popup, such as its background color or size."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(TipDialogContentContainer,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(TipDevTipPopperJs,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Dialog can appear from top, bottom, left and right to an element","Usually, the dialog will be positioned next to the triggered element.",(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The Dialog component is mainly used to create customized menus that cannot be developed using the"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Navigation/Menu/Menu",children:"Menu"})," and"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Buttons/MenuButton",children:"MenuButton"})," components."]})]}),"\n",(0,jsx_runtime.jsx)(AttentionBox.A,{title:"Trying to implement your own customize menu?",children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Please be sure that what you try implement cannot be achieved by using already implemented simpler components - such\nas our ",(0,jsx_runtime.jsx)(AttentionBoxLink.A,{href:"/?path=/docs/navigation-menu-menu--docs",text:"Menu component"}),", because creating\nan over-complicated UI can hurt user experience."]})})}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(TipModal,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"positions",children:"Positions"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.Positions})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dialog-show-triggers",children:"Dialog show triggers"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We can choose what will be the related element's trigger which will be responsible for the dialog appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.ShowTriggers})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dialog-hide-triggers",children:"Dialog hide triggers"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We can set the triggers which will be responsible for hide the dialog"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.HideTriggers})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"controlled-dialog",children:"Controlled Dialog"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Manage the open and close state of the dialog. Note that ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," is used and ",(0,jsx_runtime.jsx)(_components.code,{children:"showTrigger"})," is set to ",(0,jsx_runtime.jsx)(_components.code,{children:"[]"})," to disable the default triggers."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.ControlledDialog})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dialog-with-tooltip",children:"Dialog with tooltip"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Dialog has a ",(0,jsx_runtime.jsx)("code",{children:"tooltip"})," prop which adds an arrow pointing toward the center of the reference element."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.DialogWithTooltip})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dialog-prevent-container-scroll",children:"Dialog prevent container scroll"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Prevent containerSelector scroll when dialog open"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:Dialog_stories.DisableScrollWhenDialogOpen})}),"\n",(0,jsx_runtime.jsx)(TipDevTipTechnicalPattern,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.sc,component_description_map.UB,component_description_map.r8]})]})}const Dialog=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);