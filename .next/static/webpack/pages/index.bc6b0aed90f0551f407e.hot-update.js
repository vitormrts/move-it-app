webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Countdown/Countdown.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdown-container__aCoXf {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__aCoXf > div {\\n  flex: 1 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n.Countdown_countdown-container__aCoXf > div span {\\n  flex: 1 1;\\n}\\n.Countdown_countdown-container__aCoXf > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n.Countdown_countdownContainer__2WBmB > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__yih7Q {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background-color: var(--blue);\\n  color: var(--white);\\n  transition: background-color 0.2s;\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n}\\n\\n.Countdown_countdownButton__yih7Q:not(:disabled):hover {\\n  background-color: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__2fD0J {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__2fD0J:not(:disabled):hover {\\n  background-color: var(--red);\\n  color: var(--white);\\n}\\n\\n.Countdown_countdownButton__yih7Q:disabled {\\n  background-color: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 4px solid var(--green);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Countdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,SAAA;EAEA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,wBAAA;EACA,wCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAIQ;EACI,SAAA;AAFZ;AAGY;EACI,+BAAA;AADhB;AAGY;EACI,8BAAA;AADhB;AAMI;EACI,kBAAA;EACA,gBAAA;AAJR;AAaA;EACI,kBAAA;EACA,gBAAA;AAXJ;;AAcA;EACI,WAAA;EACA,YAAA;EAEA,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,SAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EACA,iCAAA;EAEA,kBAAA;EACA,gBAAA;AAhBJ;;AAmBA;EACI,kCAAA;AAhBJ;;AAmBA;EACI,8BAAA;EACA,mBAAA;AAhBJ;;AAkBA;EACI,4BAAA;EACA,mBAAA;AAfJ;;AAkBA;EACI,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;AAfJ\",\"sourcesContent\":[\".countdown-container {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n\\n    & > div {\\n        flex: 1;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-evenly;\\n    \\n        background: var(--white);\\n        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n        border-radius: 5px;\\n        font-size: 8.5rem;\\n        text-align: center;\\n\\n        span {\\n            flex: 1;\\n            &:first-child {\\n                border-right: 1px solid #f0f1f3;\\n            }\\n            &:last-child {\\n                border-left: 1px solid #f0f1f3;\\n            }\\n        }\\n    }\\n\\n    & > span {\\n        font-size: 6.25rem;\\n        margin: 0 0.5rem;\\n    }\\n\\n    &__button {\\n        \\n    }\\n}\\n\\n\\n.countdownContainer > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content:center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background-color: var(--blue);\\n    color: var(--white);\\n    transition: background-color 0.2s;\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n    background-color: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n    background-color: var(--white);\\n    color: var(--title);\\n}\\n.countdownButtonActive:not(:disabled):hover {\\n    background-color: var(--red);\\n    color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n    background-color: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n    border-bottom: 4px solid var(--green);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdown-container\": \"Countdown_countdown-container__aCoXf\",\n\t\"countdownContainer\": \"Countdown_countdownContainer__2WBmB\",\n\t\"countdownButton\": \"Countdown_countdownButton__yih7Q\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__2fD0J\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcz82OWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsa0JBQWtCLHdCQUF3QiwwQkFBMEIscUJBQXFCLHdCQUF3QixHQUFHLCtDQUErQyxjQUFjLGtCQUFrQix3QkFBd0Isa0NBQWtDLDZCQUE2Qiw2Q0FBNkMsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRyxvREFBb0QsY0FBYyxHQUFHLGdFQUFnRSxvQ0FBb0MsR0FBRywrREFBK0QsbUNBQW1DLEdBQUcsZ0RBQWdELHVCQUF1QixxQkFBcUIsR0FBRywrQ0FBK0MsdUJBQXVCLHFCQUFxQixHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHFCQUFxQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHVCQUF1QixrQ0FBa0Msd0JBQXdCLHNDQUFzQyx1QkFBdUIscUJBQXFCLEdBQUcsNERBQTRELHVDQUF1QyxHQUFHLDZDQUE2QyxtQ0FBbUMsd0JBQXdCLEdBQUcsa0VBQWtFLGlDQUFpQyx3QkFBd0IsR0FBRyxnREFBZ0QsbUNBQW1DLHVCQUF1Qix3QkFBd0IsMENBQTBDLEdBQUcsT0FBTyxzRkFBc0YsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLCtDQUErQyxtQkFBbUIsMEJBQTBCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLGlCQUFpQixrQkFBa0IsMEJBQTBCLDhCQUE4Qix3Q0FBd0MseUNBQXlDLG1EQUFtRCw2QkFBNkIsNEJBQTRCLDZCQUE2QixrQkFBa0Isc0JBQXNCLDZCQUE2QixrREFBa0QsZUFBZSw0QkFBNEIsaURBQWlELGVBQWUsV0FBVyxPQUFPLGtCQUFrQiw2QkFBNkIsMkJBQTJCLE9BQU8sbUJBQW1CLGlCQUFpQixHQUFHLGtDQUFrQyx5QkFBeUIsdUJBQXVCLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLGtCQUFrQix5QkFBeUIsc0NBQXNDLDBCQUEwQix3Q0FBd0MsMkJBQTJCLHVCQUF1QixHQUFHLDJDQUEyQyx5Q0FBeUMsR0FBRyw0QkFBNEIscUNBQXFDLDBCQUEwQixHQUFHLCtDQUErQyxtQ0FBbUMsMEJBQTBCLEdBQUcsK0JBQStCLHFDQUFxQyx5QkFBeUIsMEJBQTBCLDRDQUE0QyxHQUFHLG1CQUFtQjtBQUNucEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiB7XFxuICBmbGV4OiAxIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogOC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW4ge1xcbiAgZmxleDogMSAxO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fMldCbUIgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX195aWg3USB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fX3lpaDdROm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18yZkQwSiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMmZEMEo6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX195aWg3UTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NvdW50ZG93bi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxTQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFJUTtFQUNJLFNBQUE7QUFGWjtBQUdZO0VBQ0ksK0JBQUE7QUFEaEI7QUFHWTtFQUNJLDhCQUFBO0FBRGhCO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFhQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksa0NBQUE7QUFoQko7O0FBbUJBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFrQkE7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBa0JBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFmSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcblxcbiAgICAmID4gZGl2IHtcXG4gICAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idXR0b24ge1xcbiAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5jb3VudGRvd25CdXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcblxcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG5cXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnRkb3duLWNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZlwiLFxuXHRcImNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzJXQm1CXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9feWloN1FcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18yZkQwSlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss\n");

/***/ })

})