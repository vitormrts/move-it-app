webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Countdown/Countdown.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdown-container__aCoXf {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__aCoXf > div {\\n  flex: 1 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n.Countdown_countdown-container__aCoXf > div span {\\n  flex: 1 1;\\n}\\n.Countdown_countdown-container__aCoXf > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n.Countdown_countdown-container__button__1uAEx {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background-color: var(--blue);\\n  color: var(--white);\\n  transition: background-color 0.2s;\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n}\\n.Countdown_countdown-container__button__1uAEx:not(:disabled):hover {\\n  background-color: var(--blue-dark);\\n}\\n.Countdown_countdown-container__button--active__33QHL {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__button--active__33QHL:not(:disabled):hover {\\n  background-color: var(--red);\\n  color: var(--white);\\n}\\n.Countdown_countdown-container__button__1uAEx:disabled {\\n  background-color: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 4px solid var(--green);\\n}\\n\\n.Countdown_countdownButton__yih7Q:disabled {\\n  background-color: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 4px solid var(--green);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Countdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,SAAA;EAEA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,wBAAA;EACA,wCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAIQ;EACI,SAAA;AAFZ;AAGY;EACI,+BAAA;AADhB;AAGY;EACI,8BAAA;AADhB;AAMI;EACI,kBAAA;EACA,gBAAA;AAJR;AAOI;EACI,WAAA;EACA,YAAA;EAEA,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,SAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EACA,iCAAA;EAEA,kBAAA;EACA,gBAAA;AAVR;AAYQ;EACI,kCAAA;AAVZ;AAaQ;EACI,8BAAA;EACA,mBAAA;AAXZ;AAaY;EACI,4BAAA;EACA,mBAAA;AAXhB;AAeQ;EACI,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;AAbZ;;AAmBA;EACI,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;AAhBJ\",\"sourcesContent\":[\".countdown-container {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n\\n    & > div {\\n        flex: 1;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-evenly;\\n    \\n        background: var(--white);\\n        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n        border-radius: 5px;\\n        font-size: 8.5rem;\\n        text-align: center;\\n\\n        span {\\n            flex: 1;\\n            &:first-child {\\n                border-right: 1px solid #f0f1f3;\\n            }\\n            &:last-child {\\n                border-left: 1px solid #f0f1f3;\\n            }\\n        }\\n    }\\n\\n    & > span {\\n        font-size: 6.25rem;\\n        margin: 0 0.5rem;\\n    }\\n\\n    &__button {\\n        width: 100%;\\n        height: 5rem;\\n    \\n        margin-top: 2rem;\\n    \\n        display: flex;\\n        align-items: center;\\n        justify-content:center;\\n    \\n        border: 0;\\n        border-radius: 5px;\\n    \\n        background-color: var(--blue);\\n        color: var(--white);\\n        transition: background-color 0.2s;\\n    \\n        font-size: 1.25rem;\\n        font-weight: 600;\\n\\n        &:not(:disabled):hover {\\n            background-color: var(--blue-dark);\\n        }\\n\\n        &--active {\\n            background-color: var(--white);\\n            color: var(--title);\\n\\n            &:not(:disabled):hover {\\n                background-color: var(--red);\\n                color: var(--white);\\n            }\\n        }\\n\\n        &:disabled {\\n            background-color: var(--white);\\n            color: var(--text);\\n            cursor: not-allowed;\\n            border-bottom: 4px solid var(--green);\\n        }\\n    }\\n}\\n\\n\\n.countdownButton:disabled {\\n    background-color: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n    border-bottom: 4px solid var(--green);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdown-container\": \"Countdown_countdown-container__aCoXf\",\n\t\"countdown-container__button\": \"Countdown_countdown-container__button__1uAEx\",\n\t\"countdown-container__button--active\": \"Countdown_countdown-container__button--active__33QHL\",\n\t\"countdownButton\": \"Countdown_countdownButton__yih7Q\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcz82OWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsa0JBQWtCLHdCQUF3QiwwQkFBMEIscUJBQXFCLHdCQUF3QixHQUFHLCtDQUErQyxjQUFjLGtCQUFrQix3QkFBd0Isa0NBQWtDLDZCQUE2Qiw2Q0FBNkMsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRyxvREFBb0QsY0FBYyxHQUFHLGdFQUFnRSxvQ0FBb0MsR0FBRywrREFBK0QsbUNBQW1DLEdBQUcsZ0RBQWdELHVCQUF1QixxQkFBcUIsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyx1QkFBdUIsa0NBQWtDLHdCQUF3QixzQ0FBc0MsdUJBQXVCLHFCQUFxQixHQUFHLHNFQUFzRSx1Q0FBdUMsR0FBRyx5REFBeUQsbUNBQW1DLHdCQUF3QixHQUFHLDhFQUE4RSxpQ0FBaUMsd0JBQXdCLEdBQUcsMERBQTBELG1DQUFtQyx1QkFBdUIsd0JBQXdCLDBDQUEwQyxHQUFHLGdEQUFnRCxtQ0FBbUMsdUJBQXVCLHdCQUF3QiwwQ0FBMEMsR0FBRyxPQUFPLHNGQUFzRixVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLGdEQUFnRCxtQkFBbUIsMEJBQTBCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLGlCQUFpQixrQkFBa0IsMEJBQTBCLDhCQUE4Qix3Q0FBd0MseUNBQXlDLG1EQUFtRCw2QkFBNkIsNEJBQTRCLDZCQUE2QixrQkFBa0Isc0JBQXNCLDZCQUE2QixrREFBa0QsZUFBZSw0QkFBNEIsaURBQWlELGVBQWUsV0FBVyxPQUFPLGtCQUFrQiw2QkFBNkIsMkJBQTJCLE9BQU8sbUJBQW1CLHNCQUFzQix1QkFBdUIsaUNBQWlDLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLDBCQUEwQiw2QkFBNkIsOENBQThDLDhCQUE4Qiw0Q0FBNEMsbUNBQW1DLDJCQUEyQixvQ0FBb0MsaURBQWlELFdBQVcsdUJBQXVCLDZDQUE2QyxrQ0FBa0Msd0NBQXdDLCtDQUErQyxzQ0FBc0MsZUFBZSxXQUFXLHdCQUF3Qiw2Q0FBNkMsaUNBQWlDLGtDQUFrQyxvREFBb0QsV0FBVyxPQUFPLEdBQUcsaUNBQWlDLHFDQUFxQyx5QkFBeUIsMEJBQTBCLDRDQUE0QyxHQUFHLG1CQUFtQjtBQUMxL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiB7XFxuICBmbGV4OiAxIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogOC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW4ge1xcbiAgZmxleDogMSAxO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbl9fMXVBRXgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uX18xdUFFeDpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbi0tYWN0aXZlX18zM1FITCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbi0tYWN0aXZlX18zM1FITDpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19idXR0b25fXzF1QUV4OmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9feWloN1E6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Db3VudGRvd24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksU0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZSO0FBSVE7RUFDSSxTQUFBO0FBRlo7QUFHWTtFQUNJLCtCQUFBO0FBRGhCO0FBR1k7RUFDSSw4QkFBQTtBQURoQjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUpSO0FBT0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FBVlI7QUFZUTtFQUNJLGtDQUFBO0FBVlo7QUFhUTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFYWjtBQWFZO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtBQVhoQjtBQWVRO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFiWjs7QUFtQkE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQWhCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcblxcbiAgICAmID4gZGl2IHtcXG4gICAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgIFxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIFxcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICAgXFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtLWFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxuXFxuICAgICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpkaXNhYmxlZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudGRvd24tY29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmXCIsXG5cdFwiY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbl9fMXVBRXhcIixcblx0XCJjb3VudGRvd24tY29udGFpbmVyX19idXR0b24tLWFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19idXR0b24tLWFjdGl2ZV9fMzNRSExcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX195aWg3UVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss\n");

/***/ })

})