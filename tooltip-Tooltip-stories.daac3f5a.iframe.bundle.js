"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[3597],{"./packages/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>Icon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,ref3,ref4,ref5,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_icons_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/index.tsx"),_popover_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/popover/index.ts"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/tooltip/index.ts");const getOptions=enumObject=>Object.values(enumObject).filter((value=>"string"==typeof value)),__WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_3__.u,title:"Dialogs/Tooltip",parameters:{layout:"centered"},args:{title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates pariatur culpa consectetur velit iste rem, aspernatur voluptatem aperiam itaque obcaecati vero non quis id iure vitae, quae quibusdam quidem.",offset:"xs",placement:"bottom"},argTypes:{title:{control:"text"},offset:{options:getOptions(_popover_index__WEBPACK_IMPORTED_MODULE_2__.V0),control:"inline-radio"},placement:{options:getOptions(_popover_index__WEBPACK_IMPORTED_MODULE_2__.m9),control:"radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.u,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Hover me"})}),Icon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.u,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_index__WEBPACK_IMPORTED_MODULE_1__.Question,{})});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <Tooltip {...props}>\n    <span>Hover me</span>\n  </Tooltip>",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}},Icon.parameters={...Icon.parameters,docs:{...null===(ref3=Icon.parameters)||void 0===ref3?void 0:ref3.docs,source:{originalSource:"props => <Tooltip {...props}>\n    <Question />\n  </Tooltip>",...null===(ref4=Icon.parameters)||void 0===ref4||null===(ref5=ref4.docs)||void 0===ref5?void 0:ref5.source}}}},"./packages/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,Y5:()=>useEscape,ch:()=>useInterceptFocus,F5:()=>useLockScroll,qq:()=>useMergeRefs,O3:()=>useOutsideClick,iP:()=>useWindowSize});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const useBreakpoint=breakpoint=>{const maxWidth=(0,styled_components_browser_esm.Fg)().breakpointsMap[breakpoint].width,[isBreakpoint,seIsBreakpoint]=(0,react.useState)((()=>{try{return window.matchMedia(`(max-width: ${maxWidth})`).matches}catch(error){return!1}}));return(0,react.useEffect)((()=>{try{const mql=window.matchMedia(`(max-width: ${maxWidth})`),setMobileFromQuery=({matches})=>{seIsBreakpoint(matches)};return mql.addEventListener("change",setMobileFromQuery),setMobileFromQuery(mql),()=>{mql.removeEventListener("change",setMobileFromQuery)}}catch(error){return}}),[maxWidth]),isBreakpoint},useEscape=callback=>{const handleKeyDown=(0,react.useCallback)((event=>{"Escape"===event.key&&(null==callback||callback())}),[callback]);(0,react.useEffect)((()=>(window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown))),[handleKeyDown])},useInterceptFocus=()=>{const savedElement=(0,react.useRef)(null),restoreFocus=(0,react.useCallback)((()=>{savedElement.current instanceof HTMLElement&&savedElement.current.focus()}),[]);return[(0,react.useCallback)((node=>{savedElement.current=document.activeElement;node.contains(document.activeElement)||node.focus()}),[]),restoreFocus]},setStyleProperty=(element,property,value)=>{value?element.style.setProperty(property,value):element.style.removeProperty(property)},useLockScroll=(element=document.body)=>{const lockScroll=(0,react.useCallback)((()=>{if(!(element=>document.body===element?window.innerWidth>document.documentElement.clientWidth:element.scrollHeight>element.clientHeight)(element))return;const previousValues={paddingRight:element.style.paddingRight,overflow:element.style.overflow},paddingRight=(element=>parseInt(window.getComputedStyle(element).paddingRight,10)||0)(element)+(()=>{const tempDiv=document.createElement("div");Object.assign(tempDiv.style,{position:"absolute",left:"-9000px",width:"100px",height:"100px",overflow:"scroll"}),document.body.appendChild(tempDiv);const scrollbarSize=tempDiv.offsetWidth-tempDiv.clientWidth;return document.body.removeChild(tempDiv),scrollbarSize})();setStyleProperty(element,"padding-right",`${paddingRight}px`),setStyleProperty(element,"overflow","hidden");return()=>{const{paddingRight,overflow}=previousValues;setStyleProperty(element,"padding-right",paddingRight),setStyleProperty(element,"overflow",overflow)}}),[element]);(0,react.useLayoutEffect)((()=>lockScroll()),[lockScroll])};var useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");const useMergeRefs=refs=>(0,useMergeRef.q)(refs.filter((ref=>!!ref))),useOutsideClick=callback=>{const ref=(0,react.useRef)(null),handleOutsideClick=(0,react.useCallback)((event=>{const popover=ref.current,{target}=event;if(!(target instanceof Element))return;!1===(null==popover?void 0:popover.contains(target))&&(null==callback||callback())}),[callback]);return(0,react.useEffect)((()=>(document.addEventListener("mousedown",handleOutsideClick),()=>document.removeEventListener("mousedown",handleOutsideClick))),[handleOutsideClick]),{ref}},getWindowSize=()=>[window.innerWidth,window.innerHeight],useWindowSize=()=>{const[size,setSize]=(0,react.useState)(getWindowSize),handleResize=(0,react.useCallback)((()=>{setSize(getWindowSize())}),[]);return(0,react.useEffect)((()=>(window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize))),[handleResize]),size};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;__webpack_require__("./packages/theme/index.ts")},"./packages/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rd:()=>DEFAULT_PLACEMENT,J2:()=>Popover,V0:()=>PopoverOffset,m9:()=>PopoverPlacement});const INITIAL_STYLE={position:"fixed",opacity:0,pointerEvents:"none"},DEFAULT_PLACEMENT="bottomLeft";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),utils=__webpack_require__("./packages/utils/index.ts"),hooks=__webpack_require__("./packages/hooks/index.ts"),transition=__webpack_require__("./packages/transition/index.ts");const PopoverWrapperStyle=styled_components_browser_esm.ZP.div`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${({$backdrop})=>$backdrop?"100%":"0px"};
`,visibleCSS=styled_components_browser_esm.iv`
  opacity: 1;

  &[data-placement] {
    transform: translate(0, 0);
  }
`,hiddenCSS=styled_components_browser_esm.iv`
  opacity: 0;

  &[data-placement^='top'] {
    transform: translateY(6px);
  }
  &[data-placement^='right'] {
    transform: translateX(-6px);
  }
  &[data-placement^='bottom'] {
    transform: translateY(-6px);
  }
  &[data-placement^='left'] {
    transform: translateX(6px);
  }
`,PopoverRootStyle=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
  transition: opacity ${({$duration})=>$duration}ms ease;
  transition-property: opacity, transform;

  ${({$transition})=>["exiting","exited"].includes($transition)?hiddenCSS:visibleCSS}
`,PopoverRoot=(0,transition.Y)((0,react.forwardRef)((({anchorRef,wrapperRef:externalWrapperRef,placement=DEFAULT_PLACEMENT,backdrop=!0,transitionStatus,duration,style:propsStyle,onClose,...rest},externalRef)=>{(0,hooks.Y5)(onClose);const{ref:outsidePopoverRef}=(0,hooks.O3)(onClose),{popoverRef:positionPopoverRef,wrapperRef:positionWrapperRef,style}=(({placement=DEFAULT_PLACEMENT,anchorRef,style:propsStyle})=>{const popoverRef=(0,react.useRef)(null),wrapperRef=(0,react.useRef)(null),[popoverStyle,setPopoverStyle]=(0,react.useState)(INITIAL_STYLE),[windowWidth,windowHeight]=(0,hooks.iP)();(0,react.useLayoutEffect)((()=>{if(!anchorRef.current||!popoverRef.current||!wrapperRef.current)return;const position=((anchorRect,popoverRect,wrapperRect,placement)=>{const position={};switch(placement){case"top":case"bottom":position.left=(anchorRect.left+anchorRect.right)/2-popoverRect.width/2;break;case"topLeft":case"bottomLeft":position.left=anchorRect.left;break;case"topRight":case"bottomRight":position.left=anchorRect.right-popoverRect.width;break;case"rightTop":case"right":case"rightBottom":position.left=anchorRect.right;break;case"leftTop":case"left":case"leftBottom":position.left=anchorRect.left-popoverRect.width}switch(placement){case"left":case"right":position.top=(anchorRect.top+anchorRect.bottom)/2-popoverRect.height/2;break;case"leftTop":case"rightTop":position.top=anchorRect.top;break;case"leftBottom":case"rightBottom":position.top=anchorRect.bottom-popoverRect.height;break;case"topLeft":case"top":case"topRight":position.top=anchorRect.top-popoverRect.height;break;case"bottomLeft":case"bottom":case"bottomRight":position.top=anchorRect.bottom}return position.top-=wrapperRect.top,position.left-=wrapperRect.left,position})(anchorRef.current.getBoundingClientRect(),popoverRef.current.getBoundingClientRect(),wrapperRef.current.getBoundingClientRect(),placement);setPopoverStyle(position)}),[anchorRef,placement,windowWidth,windowHeight]);const style={...propsStyle,...popoverStyle};return{popoverRef,wrapperRef,style}})({placement,anchorRef,style:propsStyle}),popoverRef=(0,hooks.qq)([positionPopoverRef,outsidePopoverRef,externalRef]),wrapperRef=(0,hooks.qq)([positionWrapperRef,externalWrapperRef]);return utils.cV?react_dom.createPortal((0,jsx_runtime.jsx)(PopoverWrapperStyle,{$backdrop:backdrop,ref:wrapperRef,children:(0,jsx_runtime.jsx)(PopoverRootStyle,{...rest,$transition:transitionStatus,$duration:duration,"data-placement":placement,style,ref:popoverRef})}),utils.cV):null})));PopoverRoot.displayName="PopoverRoot";const PopoverStyle=(0,styled_components_browser_esm.ZP)(PopoverRoot)`
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);
  font-size: ${({theme})=>theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  font-weight: 400;
  border-radius: ${({theme})=>theme.borderRadiusesMap.lg}px;
  box-shadow: ${({theme})=>theme.boxShadows.xs}
    var(--lido-color-shadowLight);
  padding: ${({theme})=>theme.spaceMap.lg}px;
  overflow: auto;

  ${({$offset,placement,theme})=>{const offset=theme.spaceMap[$offset];return placement.startsWith("top")?`margin-top: ${-offset}px`:placement.startsWith("right")?`margin-left: ${offset}px`:placement.startsWith("bottom")?`margin-top: ${offset}px`:placement.startsWith("left")?`margin-left: ${-offset}px`:""}}
`,Popover=(0,react.forwardRef)((({placement=DEFAULT_PLACEMENT,open=!1,offset="xs",...rest},ref)=>(0,jsx_runtime.jsx)(PopoverStyle,{$offset:offset,placement,in:open,...rest,ref})));var PopoverOffset,PopoverPlacement;Popover.displayName="Popover",function(PopoverOffset){PopoverOffset[PopoverOffset.xs=0]="xs",PopoverOffset[PopoverOffset.sm=1]="sm",PopoverOffset[PopoverOffset.md=2]="md",PopoverOffset[PopoverOffset.lg=3]="lg",PopoverOffset[PopoverOffset.xl=4]="xl"}(PopoverOffset||(PopoverOffset={})),function(PopoverPlacement){PopoverPlacement[PopoverPlacement.topLeft=0]="topLeft",PopoverPlacement[PopoverPlacement.top=1]="top",PopoverPlacement[PopoverPlacement.topRight=2]="topRight",PopoverPlacement[PopoverPlacement.rightTop=3]="rightTop",PopoverPlacement[PopoverPlacement.right=4]="right",PopoverPlacement[PopoverPlacement.rightBottom=5]="rightBottom",PopoverPlacement[PopoverPlacement.bottomLeft=6]="bottomLeft",PopoverPlacement[PopoverPlacement.bottom=7]="bottom",PopoverPlacement[PopoverPlacement.bottomRight=8]="bottomRight",PopoverPlacement[PopoverPlacement.leftTop=9]="leftTop",PopoverPlacement[PopoverPlacement.left=10]="left",PopoverPlacement[PopoverPlacement.leftBottom=11]="leftBottom"}(PopoverPlacement||(PopoverPlacement={}))},"./packages/tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),popover=__webpack_require__("./packages/popover/index.ts");const TooltipPopoverStyle=(0,styled_components_browser_esm.ZP)(popover.J2)`
  && {
    padding: 12px;
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
    font-size: ${({theme})=>theme.fontSizesMap.xxxs}px;
    line-height: 1.8em;
    font-weight: 400;
    max-width: 256px;
    border-radius: ${({theme})=>theme.borderRadiusesMap.md}px;
    box-shadow: ${({theme})=>theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  }
`;var hooks=__webpack_require__("./packages/hooks/index.ts"),react_is=__webpack_require__("./node_modules/react-is/index.js");const Tooltip=(0,react.forwardRef)((({title,children,...rest},ref)=>{const[state,setState]=(0,react.useState)(!1),keepTimeoutRef=(0,react.useRef)(null),child=react.Children.only(children);if(!(0,react_is.isElement)(child))throw new Error("Child must be a React element");const anchorRef=(0,react.useRef)(null),mergedRef=(0,hooks.qq)([child.ref,anchorRef]),handleMouseEnter=()=>{keepTimeoutRef.current&&(clearTimeout(keepTimeoutRef.current),keepTimeoutRef.current=null),setState(!0)},handleMouseLeave=()=>{keepTimeoutRef.current=setTimeout((()=>{setState(!1),keepTimeoutRef.current=null}),150)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,react.cloneElement)(child,{ref:mergedRef,onMouseEnter(event){var _props,ref;handleMouseEnter(),null===(ref=(_props=child.props).onMouseEnter)||void 0===ref||ref.call(_props,event)},onMouseLeave(event){var _props,ref;handleMouseLeave(),null===(ref=(_props=child.props).onMouseLeave)||void 0===ref||ref.call(_props,event)}}),(0,jsx_runtime.jsx)(TooltipPopoverStyle,{...rest,open:state,backdrop:!1,anchorRef,onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave,ref,children:title})]})}));Tooltip.displayName="Tooltip"},"./packages/transition/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>withTransition});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./packages/hooks/index.ts"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js");const DEFAULT_DURATION=150;function withTransition(Component){function Wrapped({in:state=!1,timeout=DEFAULT_DURATION,mountOnEnter=!0,unmountOnExit=!0,appear=!0,enter=!0,exit=!0,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited,...rest},externalRef){const transitionProps={in:state,timeout,mountOnEnter,unmountOnExit,appear,enter,exit,addEndListener,onEnter,onEntering,onEntered,onExit,onExiting,onExited},ref=(0,hooks.qq)([externalRef]);return(0,jsx_runtime.jsx)(Transition.ZP,{...transitionProps,nodeRef:ref,children:status=>(0,jsx_runtime.jsx)(Component,{...rest,duration:timeout,transitionStatus:status,ref})})}return(0,react.forwardRef)(Wrapped)}}}]);