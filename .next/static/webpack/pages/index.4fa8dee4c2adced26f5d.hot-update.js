webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Countdown/Countdown.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdown-container__aCoXf {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__aCoXf > div {\\n  flex: 1 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n.Countdown_countdown-container__aCoXf > div span {\\n  flex: 1 1;\\n}\\n.Countdown_countdown-container__aCoXf > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n.Countdown_countdownContainer__2WBmB > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__yih7Q {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background-color: var(--blue);\\n  color: var(--white);\\n  transition: background-color 0.2s;\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n}\\n\\n.Countdown_countdownButton__yih7Q:not(:disabled):hover {\\n  background-color: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__2fD0J {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__2fD0J:not(:disabled):hover {\\n  background-color: var(--red);\\n  color: var(--white);\\n}\\n\\n.Countdown_countdownButton__yih7Q:disabled {\\n  background-color: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 4px solid var(--green);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Countdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,SAAA;EAEA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,wBAAA;EACA,wCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAIQ;EACI,SAAA;AAFZ;AAGY;EACI,+BAAA;AADhB;AAGY;EACI,8BAAA;AADhB;AAYA;EACI,kBAAA;EACA,gBAAA;AAVJ;;AAaA;EACI,WAAA;EACA,YAAA;EAEA,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,SAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EACA,iCAAA;EAEA,kBAAA;EACA,gBAAA;AAfJ;;AAkBA;EACI,kCAAA;AAfJ;;AAkBA;EACI,8BAAA;EACA,mBAAA;AAfJ;;AAiBA;EACI,4BAAA;EACA,mBAAA;AAdJ;;AAiBA;EACI,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;AAdJ\",\"sourcesContent\":[\".countdown-container {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n\\n    & > div {\\n        flex: 1;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-evenly;\\n    \\n        background: var(--white);\\n        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n        border-radius: 5px;\\n        font-size: 8.5rem;\\n        text-align: center;\\n\\n        span {\\n            flex: 1;\\n            &:first-child {\\n                border-right: 1px solid #f0f1f3;\\n            }\\n            &:last-child {\\n                border-left: 1px solid #f0f1f3;\\n            }\\n        }\\n    }\\n\\n    & > span {\\n        \\n    }\\n}\\n\\n\\n.countdownContainer > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content:center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background-color: var(--blue);\\n    color: var(--white);\\n    transition: background-color 0.2s;\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n    background-color: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n    background-color: var(--white);\\n    color: var(--title);\\n}\\n.countdownButtonActive:not(:disabled):hover {\\n    background-color: var(--red);\\n    color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n    background-color: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n    border-bottom: 4px solid var(--green);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdown-container\": \"Countdown_countdown-container__aCoXf\",\n\t\"countdownContainer\": \"Countdown_countdownContainer__2WBmB\",\n\t\"countdownButton\": \"Countdown_countdownButton__yih7Q\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__2fD0J\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcz82OWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsa0JBQWtCLHdCQUF3QiwwQkFBMEIscUJBQXFCLHdCQUF3QixHQUFHLCtDQUErQyxjQUFjLGtCQUFrQix3QkFBd0Isa0NBQWtDLDZCQUE2Qiw2Q0FBNkMsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRyxvREFBb0QsY0FBYyxHQUFHLGdFQUFnRSxvQ0FBb0MsR0FBRywrREFBK0QsbUNBQW1DLEdBQUcsK0NBQStDLHVCQUF1QixxQkFBcUIsR0FBRyx1Q0FBdUMsZ0JBQWdCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyx1QkFBdUIsa0NBQWtDLHdCQUF3QixzQ0FBc0MsdUJBQXVCLHFCQUFxQixHQUFHLDREQUE0RCx1Q0FBdUMsR0FBRyw2Q0FBNkMsbUNBQW1DLHdCQUF3QixHQUFHLGtFQUFrRSxpQ0FBaUMsd0JBQXdCLEdBQUcsZ0RBQWdELG1DQUFtQyx1QkFBdUIsd0JBQXdCLDBDQUEwQyxHQUFHLE9BQU8sc0ZBQXNGLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsK0NBQStDLG1CQUFtQiwwQkFBMEIsOEJBQThCLHVCQUF1QiwwQkFBMEIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsOEJBQThCLHdDQUF3Qyx5Q0FBeUMsbURBQW1ELDZCQUE2Qiw0QkFBNEIsNkJBQTZCLGtCQUFrQixzQkFBc0IsNkJBQTZCLGtEQUFrRCxlQUFlLDRCQUE0QixpREFBaUQsZUFBZSxXQUFXLE9BQU8sa0JBQWtCLGlCQUFpQixHQUFHLGtDQUFrQyx5QkFBeUIsdUJBQXVCLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQiwwQkFBMEIsNkJBQTZCLGtCQUFrQix5QkFBeUIsc0NBQXNDLDBCQUEwQix3Q0FBd0MsMkJBQTJCLHVCQUF1QixHQUFHLDJDQUEyQyx5Q0FBeUMsR0FBRyw0QkFBNEIscUNBQXFDLDBCQUEwQixHQUFHLCtDQUErQyxtQ0FBbUMsMEJBQTBCLEdBQUcsK0JBQStCLHFDQUFxQyx5QkFBeUIsMEJBQTBCLDRDQUE0QyxHQUFHLG1CQUFtQjtBQUMvN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiB7XFxuICBmbGV4OiAxIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogOC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW4ge1xcbiAgZmxleDogMSAxO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fMldCbUIgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX195aWg3USB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fX3lpaDdROm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18yZkQwSiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMmZEMEo6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX195aWg3UTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NvdW50ZG93bi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxTQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFJUTtFQUNJLFNBQUE7QUFGWjtBQUdZO0VBQ0ksK0JBQUE7QUFEaEI7QUFHWTtFQUNJLDhCQUFBO0FBRGhCO0FBWUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBa0JBO0VBQ0ksa0NBQUE7QUFmSjs7QUFrQkE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBaUJBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtBQWRKOztBQWlCQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBZEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvdW50ZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG5cXG4gICAgJiA+IGRpdiB7XFxuICAgICAgICBmbGV4OiAxO1xcblxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgXFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBzcGFuIHtcXG4gICAgICAgIFxcbiAgICB9XFxufVxcblxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG5cXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcbi5jb3VudGRvd25CdXR0b25BY3RpdmU6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50ZG93bi1jb250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGZcIixcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18yV0JtQlwiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fX3lpaDdRXCIsXG5cdFwiY291bnRkb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMmZEMEpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss\n");

/***/ })

})