webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Countdown/Countdown.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdown-container__aCoXf {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__aCoXf > div {\\n  flex: 1 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n.Countdown_countdown-container__aCoXf > div span {\\n  flex: 1 1;\\n}\\n.Countdown_countdown-container__aCoXf > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n.Countdown_countdown-container__button__1uAEx {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background-color: var(--blue);\\n  color: var(--white);\\n  transition: background-color 0.2s;\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n}\\n.Countdown_countdown-container__button__1uAEx:not(:disabled):hover {\\n  background-color: var(--blue-dark);\\n}\\n.Countdown_countdown-container__button--active__33QHL {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__button--active__33QHL:not(:disabled):hover {\\n  background-color: var(--red);\\n  color: var(--white);\\n}\\n.Countdown_countdown-container__button__1uAEx:disabled {\\n  background-color: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 4px solid var(--green);\\n}\\n@media (max-width: 851px) {\\n  .Countdown_countdown-container__button__1uAEx {\\n    margin-bottom: 5rem;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Countdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,SAAA;EAEA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,wBAAA;EACA,wCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAIQ;EACI,SAAA;AAFZ;AAGY;EACI,+BAAA;AADhB;AAGY;EACI,8BAAA;AADhB;AAMI;EACI,kBAAA;EACA,gBAAA;AAJR;AAOI;EACI,WAAA;EACA,YAAA;EAEA,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,SAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EACA,iCAAA;EAEA,kBAAA;EACA,gBAAA;AAVR;AAYQ;EACI,kCAAA;AAVZ;AAaQ;EACI,8BAAA;EACA,mBAAA;AAXZ;AAaY;EACI,4BAAA;EACA,mBAAA;AAXhB;AAeQ;EACI,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;AAbZ;AAgBQ;EAzCJ;IA0CQ,mBAAA;EAbV;AACF\",\"sourcesContent\":[\".countdown-container {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n\\n    & > div {\\n        flex: 1;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-evenly;\\n    \\n        background: var(--white);\\n        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n        border-radius: 5px;\\n        font-size: 8.5rem;\\n        text-align: center;\\n\\n        span {\\n            flex: 1;\\n            &:first-child {\\n                border-right: 1px solid #f0f1f3;\\n            }\\n            &:last-child {\\n                border-left: 1px solid #f0f1f3;\\n            }\\n        }\\n    }\\n\\n    & > span {\\n        font-size: 6.25rem;\\n        margin: 0 0.5rem;\\n    }\\n\\n    &__button {\\n        width: 100%;\\n        height: 5rem;\\n    \\n        margin-top: 2rem;\\n    \\n        display: flex;\\n        align-items: center;\\n        justify-content:center;\\n    \\n        border: 0;\\n        border-radius: 5px;\\n    \\n        background-color: var(--blue);\\n        color: var(--white);\\n        transition: background-color 0.2s;\\n    \\n        font-size: 1.25rem;\\n        font-weight: 600;\\n\\n        &:not(:disabled):hover {\\n            background-color: var(--blue-dark);\\n        }\\n\\n        &--active {\\n            background-color: var(--white);\\n            color: var(--title);\\n\\n            &:not(:disabled):hover {\\n                background-color: var(--red);\\n                color: var(--white);\\n            }\\n        }\\n\\n        &:disabled {\\n            background-color: var(--white);\\n            color: var(--text);\\n            cursor: not-allowed;\\n            border-bottom: 4px solid var(--green);\\n        }\\n\\n        @media (max-width: 851px) {\\n            margin-bottom: 5rem;\\n        }\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdown-container\": \"Countdown_countdown-container__aCoXf\",\n\t\"countdown-container__button\": \"Countdown_countdown-container__button__1uAEx\",\n\t\"countdown-container__button--active\": \"Countdown_countdown-container__button--active__33QHL\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcz82OWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsa0JBQWtCLHdCQUF3QiwwQkFBMEIscUJBQXFCLHdCQUF3QixHQUFHLCtDQUErQyxjQUFjLGtCQUFrQix3QkFBd0Isa0NBQWtDLDZCQUE2Qiw2Q0FBNkMsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRyxvREFBb0QsY0FBYyxHQUFHLGdFQUFnRSxvQ0FBb0MsR0FBRywrREFBK0QsbUNBQW1DLEdBQUcsZ0RBQWdELHVCQUF1QixxQkFBcUIsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyx1QkFBdUIsa0NBQWtDLHdCQUF3QixzQ0FBc0MsdUJBQXVCLHFCQUFxQixHQUFHLHNFQUFzRSx1Q0FBdUMsR0FBRyx5REFBeUQsbUNBQW1DLHdCQUF3QixHQUFHLDhFQUE4RSxpQ0FBaUMsd0JBQXdCLEdBQUcsMERBQTBELG1DQUFtQyx1QkFBdUIsd0JBQXdCLDBDQUEwQyxHQUFHLDZCQUE2QixtREFBbUQsMEJBQTBCLEtBQUssR0FBRyxPQUFPLHNGQUFzRixVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFlBQVksS0FBSywrQ0FBK0MsbUJBQW1CLDBCQUEwQiw4QkFBOEIsdUJBQXVCLDBCQUEwQixpQkFBaUIsa0JBQWtCLDBCQUEwQiw4QkFBOEIsd0NBQXdDLHlDQUF5QyxtREFBbUQsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsa0RBQWtELGVBQWUsNEJBQTRCLGlEQUFpRCxlQUFlLFdBQVcsT0FBTyxrQkFBa0IsNkJBQTZCLDJCQUEyQixPQUFPLG1CQUFtQixzQkFBc0IsdUJBQXVCLGlDQUFpQyw4QkFBOEIsOEJBQThCLGlDQUFpQywwQkFBMEIsNkJBQTZCLDhDQUE4Qyw4QkFBOEIsNENBQTRDLG1DQUFtQywyQkFBMkIsb0NBQW9DLGlEQUFpRCxXQUFXLHVCQUF1Qiw2Q0FBNkMsa0NBQWtDLHdDQUF3QywrQ0FBK0Msc0NBQXNDLGVBQWUsV0FBVyx3QkFBd0IsNkNBQTZDLGlDQUFpQyxrQ0FBa0Msb0RBQW9ELFdBQVcsdUNBQXVDLGtDQUFrQyxXQUFXLE9BQU8sR0FBRyxtQkFBbUI7QUFDbDFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24vQ291bnRkb3duLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHtcXG4gIGZsZXg6IDEgMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiA4LjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYgPiBkaXYgc3BhbiB7XFxuICBmbGV4OiAxIDE7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uX18xdUFFeCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19idXR0b25fXzF1QUV4Om5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uLS1hY3RpdmVfXzMzUUhMIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uLS1hY3RpdmVfXzMzUUhMOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbl9fMXVBRXg6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTFweCkge1xcbiAgLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19idXR0b25fXzF1QUV4IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NvdW50ZG93bi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxTQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFJUTtFQUNJLFNBQUE7QUFGWjtBQUdZO0VBQ0ksK0JBQUE7QUFEaEI7QUFHWTtFQUNJLDhCQUFBO0FBRGhCO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQVlRO0VBQ0ksa0NBQUE7QUFWWjtBQWFRO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQVhaO0FBYVk7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0FBWGhCO0FBZVE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQWJaO0FBZ0JRO0VBekNKO0lBMENRLG1CQUFBO0VBYlY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcblxcbiAgICAmID4gZGl2IHtcXG4gICAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgIFxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIFxcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICAgXFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtLWFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxuXFxuICAgICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpkaXNhYmxlZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODUxcHgpIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50ZG93bi1jb250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGZcIixcblx0XCJjb3VudGRvd24tY29udGFpbmVyX19idXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uX18xdUFFeFwiLFxuXHRcImNvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbi0tYWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbi0tYWN0aXZlX18zM1FITFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss\n");

/***/ })

})