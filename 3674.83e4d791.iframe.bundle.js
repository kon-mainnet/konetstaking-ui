"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[3674],{"./packages/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y5:()=>useEscape,ch:()=>useInterceptFocus,F5:()=>useLockScroll,qq:()=>useMergeRefs,O3:()=>useOutsideClick,iP:()=>useWindowSize});__webpack_require__("./packages/hooks/useBreakpoint.ts");var react=__webpack_require__("./node_modules/react/index.js"),useEscape=function(callback){var handleKeyDown=(0,react.useCallback)((function(event){var _callback;"Escape"===event.key&&(null===(_callback=callback)||void 0===_callback||_callback())}),[callback]);(0,react.useEffect)((function(){return window.addEventListener("keydown",handleKeyDown),function(){return window.removeEventListener("keydown",handleKeyDown)}}),[handleKeyDown])};var useInterceptFocus=function(){var savedElement=(0,react.useRef)(null),restoreFocus=(0,react.useCallback)((function(){(function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right})(savedElement.current,HTMLElement)&&savedElement.current.focus()}),[]);return[(0,react.useCallback)((function(node){savedElement.current=document.activeElement,node.contains(document.activeElement)||node.focus()}),[]),restoreFocus]},setStyleProperty=function(element,property,value){value?element.style.setProperty(property,value):element.style.removeProperty(property)},useLockScroll=function(){var element=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,lockScroll=(0,react.useCallback)((function(){if(function(element){return document.body===element?window.innerWidth>document.documentElement.clientWidth:element.scrollHeight>element.clientHeight}(element)){var previousValues={paddingRight:element.style.paddingRight,overflow:element.style.overflow},paddingRight=function(element){return parseInt(window.getComputedStyle(element).paddingRight,10)||0}(element)+function(){var tempDiv=document.createElement("div");Object.assign(tempDiv.style,{position:"absolute",left:"-9000px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(tempDiv);var scrollbarSize=tempDiv.offsetWidth-tempDiv.clientWidth;return document.body.removeChild(tempDiv),scrollbarSize}();setStyleProperty(element,"padding-right","".concat(paddingRight,"px")),setStyleProperty(element,"overflow","hidden");return function(){var overflow=previousValues.overflow;setStyleProperty(element,"padding-right",previousValues.paddingRight),setStyleProperty(element,"overflow",overflow)}}}),[element]);(0,react.useLayoutEffect)((function(){return lockScroll()}),[lockScroll])},useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js"),useMergeRefs=function(refs){return(0,useMergeRef.q)(refs.filter((function(ref){return!!ref})))};var useOutsideClick=function(callback){var ref=(0,react.useRef)(null),handleOutsideClick=(0,react.useCallback)((function(event){var _popover,_callback,popover=ref.current,target=event.target;(function useOutsideClick_instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right})(target,Element)&&(!1===(null===(_popover=popover)||void 0===_popover?void 0:_popover.contains(target))&&(null===(_callback=callback)||void 0===_callback||_callback()))}),[callback]);return(0,react.useEffect)((function(){return document.addEventListener("mousedown",handleOutsideClick),function(){return document.removeEventListener("mousedown",handleOutsideClick)}}),[handleOutsideClick]),{ref}};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var getWindowSize=function(){return[window.innerWidth,window.innerHeight]},useWindowSize=function(){var _useState=_sliced_to_array((0,react.useState)(getWindowSize),2),size=_useState[0],setSize=_useState[1],handleResize=(0,react.useCallback)((function(){setSize(getWindowSize())}),[]);return(0,react.useEffect)((function(){return window.addEventListener("resize",handleResize),function(){return window.removeEventListener("resize",handleResize)}}),[handleResize]),size};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect,__webpack_require__("./packages/theme/index.ts")},"./packages/hooks/useBreakpoint.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useBreakpoint});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/styled-components-wrapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useBreakpoint=function(breakpoint){var maxWidth=(0,_utils_styled_components_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.Fg)().breakpointsMap[breakpoint].width,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){try{return window.matchMedia("(max-width: ".concat(maxWidth,")")).matches}catch(error){return!1}})),2),isBreakpoint=_useState[0],seIsBreakpoint=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){try{var mql=window.matchMedia("(max-width: ".concat(maxWidth,")")),setMobileFromQuery=function(param){var matches=param.matches;seIsBreakpoint(matches)};return mql.addEventListener("change",setMobileFromQuery),setMobileFromQuery(mql),function(){mql.removeEventListener("change",setMobileFromQuery)}}catch(error){return}}),[maxWidth]),isBreakpoint}},"./packages/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rd:()=>DEFAULT_PLACEMENT,J2:()=>Popover,V0:()=>PopoverOffset,m9:()=>PopoverPlacement});var INITIAL_STYLE={position:"fixed",opacity:0,pointerEvents:"none"},DEFAULT_PLACEMENT="bottomLeft",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_wrapper=__webpack_require__("./packages/utils/styled-components-wrapper.ts"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),utils=__webpack_require__("./packages/utils/index.ts"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var usePopoverPosition=function(param){var _param_placement=param.placement,placement=void 0===_param_placement?DEFAULT_PLACEMENT:_param_placement,anchorRef=param.anchorRef,propsStyle=param.style,popoverRef=(0,react.useRef)(null),wrapperRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(INITIAL_STYLE),2),popoverStyle=_useState[0],setPopoverStyle=_useState[1],_useWindowSize=_sliced_to_array((0,hooks.iP)(),2),windowWidth=_useWindowSize[0],windowHeight=_useWindowSize[1];(0,react.useLayoutEffect)((function(){if(anchorRef.current&&popoverRef.current&&wrapperRef.current){var position=function(anchorRect,popoverRect,wrapperRect,placement){var position={};switch(placement){case"top":case"bottom":position.left=(anchorRect.left+anchorRect.right)/2-popoverRect.width/2;break;case"topLeft":case"bottomLeft":position.left=anchorRect.left;break;case"topRight":case"bottomRight":position.left=anchorRect.right-popoverRect.width;break;case"rightTop":case"right":case"rightBottom":position.left=anchorRect.right;break;case"leftTop":case"left":case"leftBottom":position.left=anchorRect.left-popoverRect.width}switch(placement){case"left":case"right":position.top=(anchorRect.top+anchorRect.bottom)/2-popoverRect.height/2;break;case"leftTop":case"rightTop":position.top=anchorRect.top;break;case"leftBottom":case"rightBottom":position.top=anchorRect.bottom-popoverRect.height;break;case"topLeft":case"top":case"topRight":position.top=anchorRect.top-popoverRect.height;break;case"bottomLeft":case"bottom":case"bottomRight":position.top=anchorRect.bottom}return position.top-=wrapperRect.top,position.left-=wrapperRect.left,position}(anchorRef.current.getBoundingClientRect(),popoverRef.current.getBoundingClientRect(),wrapperRef.current.getBoundingClientRect(),placement);setPopoverStyle(position)}}),[anchorRef,placement,windowWidth,windowHeight]);var style=function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},propsStyle,popoverStyle);return{popoverRef,wrapperRef,style}};function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  position: absolute;\n  z-index: 500;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  opacity: 1;\n\n  &[data-placement] {\n    transform: translate(0, 0);\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  opacity: 0;\n\n  &[data-placement^='top'] {\n    transform: translateY(6px);\n  }\n  &[data-placement^='right'] {\n    transform: translateX(-6px);\n  }\n  &[data-placement^='bottom'] {\n    transform: translateY(-6px);\n  }\n  &[data-placement^='left'] {\n    transform: translateX(6px);\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  box-sizing: border-box;\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  transition: opacity ","ms ease;\n  transition-property: opacity, transform;\n\n  ","\n"]);return _templateObject3=function _templateObject(){return data},data}var PopoverWrapperStyle=styled_components_wrapper.ZP.div(_templateObject(),(function(param){return param.$backdrop?"100%":"0px"})),visibleCSS=(0,styled_components_wrapper.iv)(_templateObject1()),hiddenCSS=(0,styled_components_wrapper.iv)(_templateObject2()),PopoverRootStyle=styled_components_wrapper.ZP.div(_templateObject3(),(function(param){return param.$duration}),(function(param){var $transition=param.$transition;return["exiting","exited"].includes($transition)?hiddenCSS:visibleCSS}));function PopoverRoot_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PopoverRoot_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){PopoverRoot_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PopoverRoot=(0,transition.Y)((0,react.forwardRef)((function(_param,externalRef){var anchorRef=_param.anchorRef,externalWrapperRef=_param.wrapperRef,_param_placement=_param.placement,placement=void 0===_param_placement?DEFAULT_PLACEMENT:_param_placement,_param_backdrop=_param.backdrop,backdrop=void 0===_param_backdrop||_param_backdrop,transitionStatus=_param.transitionStatus,duration=_param.duration,propsStyle=_param.style,onClose=_param.onClose,rest=_object_without_properties(_param,["anchorRef","wrapperRef","placement","backdrop","transitionStatus","duration","style","onClose"]);(0,hooks.Y5)(onClose);var outsidePopoverRef=(0,hooks.O3)(onClose).ref,_usePopoverPosition=usePopoverPosition({placement,anchorRef,style:propsStyle}),positionPopoverRef=_usePopoverPosition.popoverRef,positionWrapperRef=_usePopoverPosition.wrapperRef,style=_usePopoverPosition.style,popoverRef=(0,hooks.qq)([positionPopoverRef,outsidePopoverRef,externalRef]),wrapperRef=(0,hooks.qq)([positionWrapperRef,externalWrapperRef]);return utils.cV?react_dom.createPortal((0,jsx_runtime.jsx)(PopoverWrapperStyle,{$backdrop:backdrop,ref:wrapperRef,children:(0,jsx_runtime.jsx)(PopoverRootStyle,_object_spread_props(PopoverRoot_object_spread({},rest),{$transition:transitionStatus,$duration:duration,"data-placement":placement,style,ref:popoverRef}))}),utils.cV):null})));function PopoverStyles_templateObject(){var data=function PopoverStyles_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  background: var(--lido-color-foreground);\n  color: var(--lido-color-text);\n  font-size: ","px;\n  line-height: 1.5em;\n  font-weight: 400;\n  border-radius: ","px;\n  box-shadow: ","\n    var(--lido-color-shadowLight);\n  padding: ","px;\n  overflow: auto;\n\n  ","\n"]);return PopoverStyles_templateObject=function _templateObject(){return data},data}PopoverRoot.displayName="PopoverRoot";var PopoverStyle=(0,styled_components_wrapper.ZP)(PopoverRoot)(PopoverStyles_templateObject(),(function(param){return param.theme.fontSizesMap.xs}),(function(param){return param.theme.borderRadiusesMap.lg}),(function(param){return param.theme.boxShadows.xs}),(function(param){return param.theme.spaceMap.lg}),(function(param){var $offset=param.$offset,placement=param.placement,offset=param.theme.spaceMap[$offset];return placement.startsWith("top")?"margin-top: ".concat(-offset,"px"):placement.startsWith("right")?"margin-left: ".concat(offset,"px"):placement.startsWith("bottom")?"margin-top: ".concat(offset,"px"):placement.startsWith("left")?"margin-left: ".concat(-offset,"px"):""}));function Popover_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Popover_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Popover_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Popover_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Popover_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PopoverOffset,PopoverPlacement,Popover=(0,react.forwardRef)((function(_param,ref){var _param_placement=_param.placement,placement=void 0===_param_placement?DEFAULT_PLACEMENT:_param_placement,_param_open=_param.open,open=void 0!==_param_open&&_param_open,_param_offset=_param.offset,offset=void 0===_param_offset?"xs":_param_offset,rest=Popover_object_without_properties(_param,["placement","open","offset"]);return(0,jsx_runtime.jsx)(PopoverStyle,Popover_object_spread_props(function Popover_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Popover_define_property(target,key,source[key])}))}return target}({$offset:offset,placement,in:open},rest),{ref}))}));Popover.displayName="Popover",function(PopoverOffset){PopoverOffset[PopoverOffset.xs=0]="xs",PopoverOffset[PopoverOffset.sm=1]="sm",PopoverOffset[PopoverOffset.md=2]="md",PopoverOffset[PopoverOffset.lg=3]="lg",PopoverOffset[PopoverOffset.xl=4]="xl"}(PopoverOffset||(PopoverOffset={})),function(PopoverPlacement){PopoverPlacement[PopoverPlacement.topLeft=0]="topLeft",PopoverPlacement[PopoverPlacement.top=1]="top",PopoverPlacement[PopoverPlacement.topRight=2]="topRight",PopoverPlacement[PopoverPlacement.rightTop=3]="rightTop",PopoverPlacement[PopoverPlacement.right=4]="right",PopoverPlacement[PopoverPlacement.rightBottom=5]="rightBottom",PopoverPlacement[PopoverPlacement.bottomLeft=6]="bottomLeft",PopoverPlacement[PopoverPlacement.bottom=7]="bottom",PopoverPlacement[PopoverPlacement.bottomRight=8]="bottomRight",PopoverPlacement[PopoverPlacement.leftTop=9]="leftTop",PopoverPlacement[PopoverPlacement.left=10]="left",PopoverPlacement[PopoverPlacement.leftBottom=11]="leftBottom"}(PopoverPlacement||(PopoverPlacement={}))},"./packages/transition/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>withTransition});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),DEFAULT_DURATION=150;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function withTransition(Component){var Wrapped=function Wrapped(_param,externalRef){var tmp=_param.in,state=void 0!==tmp&&tmp,_param_timeout=_param.timeout,timeout=void 0===_param_timeout?DEFAULT_DURATION:_param_timeout,_param_mountOnEnter=_param.mountOnEnter,mountOnEnter=void 0===_param_mountOnEnter||_param_mountOnEnter,_param_unmountOnExit=_param.unmountOnExit,unmountOnExit=void 0===_param_unmountOnExit||_param_unmountOnExit,_param_appear=_param.appear,appear=void 0===_param_appear||_param_appear,_param_enter=_param.enter,enter=void 0===_param_enter||_param_enter,_param_exit=_param.exit,exit=void 0===_param_exit||_param_exit,addEndListener=_param.addEndListener,onEnter=_param.onEnter,onEntering=_param.onEntering,onEntered=_param.onEntered,onExit=_param.onExit,onExiting=_param.onExiting,onExited=_param.onExited,rest=_object_without_properties(_param,["in","timeout","mountOnEnter","unmountOnExit","appear","enter","exit","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited"]),transitionProps={in:state,timeout,mountOnEnter,unmountOnExit,appear,enter,exit,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited},ref=(0,hooks.qq)([externalRef]);return(0,jsx_runtime.jsx)(Transition.ZP,_object_spread_props(_object_spread({},transitionProps),{nodeRef:ref,children:function(status){return(0,jsx_runtime.jsx)(Component,_object_spread_props(_object_spread({},rest),{duration:timeout,transitionStatus:status,ref}))}}))};return(0,react.forwardRef)(Wrapped)}}}]);