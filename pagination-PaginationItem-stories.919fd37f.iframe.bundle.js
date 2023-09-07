"use strict";(self.webpackChunk_lidofinance_lido_ui=self.webpackChunk_lidofinance_lido_ui||[]).push([[2195],{"./packages/pagination/PaginationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ref,ref1,ref2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/pagination/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.nt,title:"Pagination/PaginationItem",args:{variant:_index__WEBPACK_IMPORTED_MODULE_1__.Vm.default,disabled:!1,icon:"2"},argTypes:{variant:{options:_index__WEBPACK_IMPORTED_MODULE_1__.Vm,control:"inline-radio"}}},Basic=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.nt,{...props});Basic.parameters={...Basic.parameters,docs:{...null===(ref=Basic.parameters)||void 0===ref?void 0:ref.docs,source:{originalSource:"props => <PaginationItem {...props} />",...null===(ref1=Basic.parameters)||void 0===ref1||null===(ref2=ref1.docs)||void 0===ref2?void 0:ref2.source}}}},"./packages/box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Box=(0,__webpack_require__("./packages/styled-system/index.ts").M)(styled_components_browser_esm.ZP.div``)},"./packages/pagination/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tl:()=>Pagination,nt:()=>PaginationItem,Vm:()=>PaginationItemVariant});var PaginationItemVariant,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./packages/icons/index.tsx"),box=__webpack_require__("./packages/box/index.ts");!function(PaginationItemVariant){PaginationItemVariant.default="default",PaginationItemVariant.active="active"}(PaginationItemVariant||(PaginationItemVariant={}));const numberSort=(a,b)=>a-b,pagination_getShowingPages=(pagesCount,currPage=1,siblingCount=1)=>{if(!pagesCount)return[];const showingPagesCount=1===siblingCount?7:5;if(pagesCount<=showingPagesCount)return((start,end)=>{const length=end-start+1;return Array.from({length},((_,i)=>start+i))})(1,pagesCount);const lastPage=pagesCount,firstPages=[],firstEllipsis=[],middlePages=[],lastEllipsis=[],lastPages=[],pusher=(()=>{const innerArray=[];return(arr,element)=>(innerArray.includes(element)&&"..."!==element||(innerArray.push(element),arr.push(element)),innerArray.length)})();let siblings;switch(pusher(firstPages,1),!0){case 1===currPage:siblings=[0,1,1+siblingCount];break;case lastPage===currPage:siblings=[-siblingCount-1,-1,0];break;case 1===siblingCount&&currPage-1==3:siblings=[-2,-1,0,1];break;case 1===siblingCount&&lastPage-currPage==3:siblings=[-1,0,1,2];break;case 1===siblingCount:siblings=[-1,0,1];break;case 0===siblingCount&&currPage-1==2:siblings=[-1,0];break;case 0===siblingCount&&lastPage-currPage==2:siblings=[0,1];break;default:siblings=[0]}siblings.forEach((sibling=>{pusher(middlePages,currPage+sibling)})),currPage-1>=3+siblingCount&&pusher(firstEllipsis,"..."),lastPage-currPage>=3+siblingCount&&pusher(lastEllipsis,"...");for(let i=showingPagesCount-pusher(lastPages,lastPage);i>0;i--)currPage<pagesCount/2?pusher(lastPages,lastPage-i):pusher(firstPages,1+i);return[...firstPages.sort(numberSort),...firstEllipsis,...middlePages,...lastEllipsis,...lastPages.sort(numberSort)]},variantColors={[PaginationItemVariant.active]:styled_components_browser_esm.iv`
    border-color: var(--lido-color-primary);
    color: var(--lido-color-primary);

    :not(:disabled):hover {
      border-color: var(--lido-color-primaryVisited);
      color: var(--lido-color-primaryVisited);
    }
  `,[PaginationItemVariant.default]:styled_components_browser_esm.iv`
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    :not(:disabled):hover {
      border-color: var(--lido-color-primary);
      color: var(--lido-color-primary);
    }
  `},PaginationItemStyle=styled_components_browser_esm.ZP.button`
  width: 32px;
  height: 32px;
  background-color: var(--lido-color-foreground);
  border: 1px solid;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  padding: 0;

  ${({$variant})=>variantColors[$variant]}

  :disabled {
    border-color: var(--lido-color-border);
    color: var(--lido-color-textSecondary);
    cursor: unset;
  }
`,PaginationItem=({icon,variant=PaginationItemVariant.default,...rest})=>(0,jsx_runtime.jsx)(PaginationItemStyle,{$variant:variant,...rest,children:icon}),PaginationBlock=(0,styled_components_browser_esm.ZP)(box.x)`
  display: flex;
  gap: 8px;
`,Pagination=({onItemClick,pagesCount,activePage=1,siblingCount})=>{const[currentPage,setCurrPage]=(0,react.useState)((length=pagesCount,!(activeItem=activePage)||activeItem>=length||activeItem<0?1:activeItem));var length,activeItem;const showingPages=(0,react.useMemo)((()=>pagination_getShowingPages(pagesCount,currentPage,siblingCount)),[pagesCount,currentPage,siblingCount]);if((0,react.useEffect)((()=>{setCurrPage((page=>page!==activePage?activePage:page))}),[activePage]),pagesCount<=0)return null;const onPageItemClick=(page,e)=>{onItemClick(page,e),setCurrPage(page)};return(0,jsx_runtime.jsxs)(PaginationBlock,{children:[(0,jsx_runtime.jsx)(PaginationItem,{disabled:1===currentPage,icon:(0,jsx_runtime.jsx)(icons.ArrowLeft,{}),onClick:()=>{1!==currentPage&&(onItemClick(currentPage-1),setCurrPage(currentPage-1))}}),showingPages.map(((page,index)=>{const isDisabled="..."===page,variant=page===currentPage?PaginationItemVariant.active:PaginationItemVariant.default;return(0,jsx_runtime.jsx)(PaginationItem,{icon:page,variant,disabled:isDisabled,onClick:onPageItemClick.bind(null,page)},"..."===page?`${page}${index}`:page)})),(0,jsx_runtime.jsx)(PaginationItem,{disabled:currentPage===pagesCount,icon:(0,jsx_runtime.jsx)(icons.ArrowRight,{}),onClick:()=>{currentPage!==pagesCount&&(onItemClick(currentPage+1),setCurrPage(currentPage+1))}})]})}},"./packages/styled-system/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>styled_system_withStyledSystem});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),dist_index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const styled_system_withStyledSystem=function withStyledSystem(Component){return(0,styled_components_browser_esm.ZP)(Component).withConfig({shouldForwardProp:index_esm.ZP})((0,dist_index_esm.qC)(dist_index_esm.Dh,dist_index_esm.$_,dist_index_esm.cp,dist_index_esm.bK,dist_index_esm.GQ,dist_index_esm.eC,dist_index_esm.Oq,dist_index_esm.Cg,dist_index_esm.FK,dist_index_esm.AF))}}}]);