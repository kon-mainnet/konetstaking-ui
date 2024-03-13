"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[9668],{"./packages/addressBadge/AddressBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>AddressBadge_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),useBreakpoint=__webpack_require__("./packages/hooks/useBreakpoint.ts"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),identicon=__webpack_require__("./packages/identicon/index.ts");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n\n  & > * {\n    flex-shrink: 0;\n  }\n\n  & > :first-child {\n    flex-shrink: 1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var AddressBadgeStyle=(0,styled_components_wrapper.ZP)(identicon.pv)(_templateObject());function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _Basic_parameters,_Basic_parameters_docs,_Basic_parameters1,AddressBadge=(0,react.forwardRef)((function(_param,ref){var address=_param.address,_param_symbolsMobile=_param.symbolsMobile,symbolsMobile=void 0===_param_symbolsMobile?3:_param_symbolsMobile,_param_symbolsDesktop=_param.symbolsDesktop,symbolsDesktop=void 0===_param_symbolsDesktop?6:_param_symbolsDesktop,rest=_object_without_properties(_param,["address","symbolsMobile","symbolsDesktop"]),isMobile=(0,useBreakpoint.G)("md");return(0,jsx_runtime.jsx)(AddressBadgeStyle,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({symbols:isMobile?symbolsMobile:symbolsDesktop,address:null!=address?address:""},rest),{ref}))}));function AddressBadge_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AddressBadge_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){AddressBadge_stories_define_property(target,key,source[key])}))}return target}function AddressBadge_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function AddressBadge_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}AddressBadge.displayName="AddressBadge";const AddressBadge_stories={component:AddressBadge,title:"Wallet/AddressBadge",args:{address:"0x5a98fcbea516cf06857215779fd812ca3bef1b32",symbolsMobile:3,symbolsDesktop:6},argTypes:{symbolsMobile:{control:{type:"range",min:3,max:21,step:1}},symbolsDesktop:{control:{type:"range",min:3,max:21,step:1}}}};var Basic=function(props){return(0,jsx_runtime.jsx)(AddressBadge,AddressBadge_stories_object_spread({},props))};Basic.parameters=AddressBadge_stories_object_spread_props(AddressBadge_stories_object_spread({},Basic.parameters),{docs:AddressBadge_stories_object_spread_props(AddressBadge_stories_object_spread({},null===(_Basic_parameters=Basic.parameters)||void 0===_Basic_parameters?void 0:_Basic_parameters.docs),{source:AddressBadge_stories_object_spread({originalSource:"props => <AddressBadge {...props} />"},null===(_Basic_parameters1=Basic.parameters)||void 0===_Basic_parameters1||null===(_Basic_parameters_docs=_Basic_parameters1.docs)||void 0===_Basic_parameters_docs?void 0:_Basic_parameters_docs.source)})})},"./packages/hooks/useBreakpoint.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useBreakpoint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/styled-components-wrapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useBreakpoint=function(breakpoint){var maxWidth=(0,_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.Fg)().breakpointsMap[breakpoint].width,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){try{return window.matchMedia("(max-width: ".concat(maxWidth,")")).matches}catch(error){return!1}})),2),isBreakpoint=_useState[0],seIsBreakpoint=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){try{var mql=window.matchMedia("(max-width: ".concat(maxWidth,")")),setMobileFromQuery=function(param){var matches=param.matches;seIsBreakpoint(matches)};return mql.addEventListener("change",setMobileFromQuery),setMobileFromQuery(mql),function(){mql.removeEventListener("change",setMobileFromQuery)}}catch(error){return}}),[maxWidth]),isBreakpoint}}}]);