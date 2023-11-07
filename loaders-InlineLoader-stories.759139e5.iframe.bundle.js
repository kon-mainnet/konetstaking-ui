"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[50],{"./packages/loaders/InlineLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithText:()=>WithText,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,ref3,ref4,ref5,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/loaders/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_index_js__WEBPACK_IMPORTED_MODULE_2__.Gl,title:"Loaders/InlineLoader",args:{color:"text"},argTypes:{color:{options:(enumObject=_index_js__WEBPACK_IMPORTED_MODULE_2__._,Object.values(enumObject).filter((value=>"string"==typeof value))),control:"inline-radio",description:"Background color (component has opacity)"}}};var enumObject;const Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.Gl,{...props}),RowStyle=_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  max-width: 300px;
  margin: 10px 0;

  & > div {
    flex-grow: 1;
    flex-basis: 50%;
  }
`,WithText=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowStyle,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"First row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.Gl,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowStyle,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Second row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.Gl,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RowStyle,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Third row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.Gl,{})]})]});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <InlineLoader {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},WithText.parameters={...WithText.parameters,docs:{...null===(ref3=WithText.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"() => <>\n    <RowStyle>\n      <div>First row</div>\n      <InlineLoader />\n    </RowStyle>\n    <RowStyle>\n      <div>Second row</div>\n      <InlineLoader />\n    </RowStyle>\n    <RowStyle>\n      <div>Third row</div>\n      <InlineLoader />\n    </RowStyle>\n  </>",...null===(ref4=WithText.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}}},"./packages/loaders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>InlineLoader,_:()=>InlineLoaderColor,aN:()=>Loader,ux:()=>LoaderColor,gI:()=>LoaderSize});var LoaderSize,LoaderColor,InlineLoaderColor,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(LoaderSize){LoaderSize[LoaderSize.small=18]="small",LoaderSize[LoaderSize.medium=24]="medium",LoaderSize[LoaderSize.large=64]="large"}(LoaderSize||(LoaderSize={})),function(LoaderColor){LoaderColor[LoaderColor.primary=0]="primary",LoaderColor[LoaderColor.secondary=1]="secondary",LoaderColor[LoaderColor.foreground=2]="foreground",LoaderColor[LoaderColor.success=3]="success"}(LoaderColor||(LoaderColor={})),function(InlineLoaderColor){InlineLoaderColor[InlineLoaderColor.text=0]="text",InlineLoaderColor[InlineLoaderColor.secondary=1]="secondary",InlineLoaderColor[InlineLoaderColor.foreground=2]="foreground"}(InlineLoaderColor||(InlineLoaderColor={}));var styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts");const rotation=styled_components_wrapper.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,LoaderStyle=styled_components_wrapper.ZP.div`
  margin: 0;
  padding: 0;
  line-height: 0;
  width: ${props=>props.$size}px;
  height: ${props=>props.$size}px;
  color: ${({$color})=>`var(--lido-color-${$color})`};
`,LoaderCircleBgStyle=styled_components_wrapper.ZP.circle`
  fill: none;
  stroke: currentcolor;
  stroke-width: ${props=>props.$thickness};
  opacity: 0.2;
`,LoaderCircleFgStyle=styled_components_wrapper.ZP.circle`
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-width: ${props=>props.$thickness};
  stroke-dasharray: ${props=>{const circumference=2*props.r*Math.PI;return`${.25*circumference} ${.75*circumference}`}};
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 1.4s linear infinite;
`,Loader=(0,react.forwardRef)((({size="medium",thickness=3,color="primary",...rest},ref)=>{const pxSize=LoaderSize[size],center=pxSize/2,radius=pxSize/2-thickness/2;return(0,jsx_runtime.jsx)(LoaderStyle,{$size:pxSize,$color:color,...rest,ref,children:(0,jsx_runtime.jsxs)("svg",{width:pxSize,height:pxSize,viewBox:`0 0 ${pxSize} ${pxSize}`,children:[(0,jsx_runtime.jsx)(LoaderCircleBgStyle,{$thickness:thickness,cx:center,cy:center,r:radius}),(0,jsx_runtime.jsx)(LoaderCircleFgStyle,{$thickness:thickness,cx:center,cy:center,r:radius})]})})}));Loader.displayName="Loader";const translation=styled_components_wrapper.F4`
  100% {
    background-position: 0 0;
  }
`,InlineLoaderStyle=styled_components_wrapper.ZP.span`
  --loader-color: ${({$color})=>$color?`var(--lido-color-${$color})`:"currentColor"};

  width: 100%;
  display: inline-block;
  vertical-align: top;
  border-radius: 1000px;
  position: relative;
  overflow: hidden;
  user-select: none;
  opacity: 0.05;
  animation: ${translation} 2s infinite;
  background-size: 300% 100%;
  background-position: 100% 0;
  background-image: linear-gradient(
    90deg,
    var(--loader-color) 0,
    var(--loader-color) 33.33%,
    transparent 44.44%,
    transparent 55.55%,
    var(--loader-color) 66.66%,
    var(--loader-color) 100%
  );

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--loader-color);
    opacity: 0.2;
  }
`,InlineLoader=(0,react.forwardRef)((({color,...rest},ref)=>{const heightAdjuster=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "});return(0,jsx_runtime.jsx)(InlineLoaderStyle,{$color:color,...rest,ref,children:heightAdjuster})}));InlineLoader.displayName="InlineLoader"}}]);