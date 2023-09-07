"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[7851],{"./packages/address/Address.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/address/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.k,title:"Wallet/Address",args:{address:"0x5a98fcbea516cf06857215779fd812ca3bef1b32",symbols:3},argTypes:{symbols:{control:{type:"range",min:3,max:21,step:1}}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.k,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Address {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/address/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Address});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const AddressStyle=styled_components_browser_esm.ZP.div`
  position: relative;
  display: inline-block;
  font-weight: 400;
`,AddressFullStyle=styled_components_browser_esm.ZP.span`
  position: absolute;
  overflow: hidden;
  inset: 0;
  color: transparent;
`,AddressTrimmedStyle=styled_components_browser_esm.ZP.span`
  user-select: none;
  pointer-events: none;
`,trimAddress=(address,symbols)=>{if(symbols<=0)return"";if(2*symbols>=address.length)return address;return`${address.slice(0,symbols)}...${address.slice(-symbols)}`},Address=(0,react.forwardRef)((({symbols=3,address,...rest},ref)=>(0,jsx_runtime.jsxs)(AddressStyle,{...rest,ref,children:[(0,jsx_runtime.jsx)(AddressFullStyle,{children:address}),(0,jsx_runtime.jsx)(AddressTrimmedStyle,{children:trimAddress(address,symbols)})]})));Address.displayName="Address"}}]);