webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdownContainer__3pqLs {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div {\\n    flex: 1 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background: var(--white);\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n\\n.Countdown_countdownContainer__3pqLs > div span {\\n    flex: 1 1;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:last-child {\\n    border-left: 1px solid #f0f1f3;\\n}\\n\\n\\n.Countdown_countdownContainer__3pqLs > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content:center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background-color: var(--blue);\\n    color: var(--white);\\n    transition: background-color 0.2s;\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n}\\n\\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\\n    background-color: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc {\\n    background-color: var(--white);\\n    color: var(--title);\\n}\\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover {\\n    background-color: var(--red);\\n    color: var(--white);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,YAAY;IACZ,mBAAmB;;IAEnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;;IAEP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,wBAAwB;IACxB,wCAAwC;IACxC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,SAAO;AACX;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;;AAGA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;;IAEtB,SAAS;IACT,kBAAkB;;IAElB,6BAA6B;IAC7B,mBAAmB;IACnB,iCAAiC;;IAEjC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,mBAAmB;AACvB\",\"sourcesContent\":[\".countdownContainer {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.countdownContainer > div {\\n    flex: 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background: var(--white);\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n\\n.countdownContainer > div span {\\n    flex: 1;\\n}\\n\\n.countdownContainer > div span:first-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > div span:last-child {\\n    border-left: 1px solid #f0f1f3;\\n}\\n\\n\\n.countdownContainer > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content:center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background-color: var(--blue);\\n    color: var(--white);\\n    transition: background-color 0.2s;\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n    background-color: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n    background-color: var(--white);\\n    color: var(--title);\\n}\\n.countdownButtonActive:not(:disabled):hover {\\n    background-color: var(--red);\\n    color: var(--white);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Countdown_countdownContainer__3pqLs\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzQyZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHlDQUF5QyxtQkFBbUIsMEJBQTBCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLEdBQUcsZ0RBQWdELGdCQUFnQixzQkFBc0IsMEJBQTBCLG9DQUFvQyxpQ0FBaUMsK0NBQStDLHlCQUF5Qix3QkFBd0IseUJBQXlCLEdBQUcsdURBQXVELGdCQUFnQixHQUFHLGlFQUFpRSxzQ0FBc0MsR0FBRyxnRUFBZ0UscUNBQXFDLEdBQUcsbURBQW1ELHlCQUF5Qix1QkFBdUIsR0FBRyx1Q0FBdUMsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDBCQUEwQiw2QkFBNkIsa0JBQWtCLHlCQUF5QixzQ0FBc0MsMEJBQTBCLHdDQUF3QywyQkFBMkIsdUJBQXVCLEdBQUcsNERBQTRELHlDQUF5QyxHQUFHLDZDQUE2QyxxQ0FBcUMsMEJBQTBCLEdBQUcsZ0VBQWdFLG1DQUFtQywwQkFBMEIsR0FBRyxPQUFPLDJHQUEyRyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLCtDQUErQyxtQkFBbUIsMEJBQTBCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLEdBQUcsK0JBQStCLGNBQWMsc0JBQXNCLDBCQUEwQixvQ0FBb0MsaUNBQWlDLCtDQUErQyx5QkFBeUIsd0JBQXdCLHlCQUF5QixHQUFHLHNDQUFzQyxjQUFjLEdBQUcsZ0RBQWdELHNDQUFzQyxHQUFHLCtDQUErQyxxQ0FBcUMsR0FBRyxrQ0FBa0MseUJBQXlCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsbUJBQW1CLHlCQUF5QixzQkFBc0IsMEJBQTBCLDZCQUE2QixrQkFBa0IseUJBQXlCLHNDQUFzQywwQkFBMEIsd0NBQXdDLDJCQUEyQix1QkFBdUIsR0FBRywyQ0FBMkMseUNBQXlDLEdBQUcsNEJBQTRCLHFDQUFxQywwQkFBMEIsR0FBRywrQ0FBK0MsbUNBQW1DLDBCQUEwQixHQUFHLG1CQUFtQjtBQUNqcUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYge1xcbiAgICBmbGV4OiAxIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gZGl2IHNwYW4ge1xcbiAgICBmbGV4OiAxIDE7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2M6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjs7SUFFbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFPOztJQUVQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCOztJQUU3Qix3QkFBd0I7SUFDeEIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFNBQU87QUFDWDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsU0FBUztJQUNULGtCQUFrQjs7SUFFbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQ0FBaUM7O0lBRWpDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcbi5jb3VudGRvd25CdXR0b25BY3RpdmU6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMc1wiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVXCIsXG5cdFwiY291bnRkb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2NcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css\n");

/***/ })

})