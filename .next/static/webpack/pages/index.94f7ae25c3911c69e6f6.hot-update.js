webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Countdown/Countdown.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdown-container__aCoXf {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n.Countdown_countdown-container__aCoXf > div {\\n  flex: 1 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n.Countdown_countdown-container__aCoXf > div span {\\n  flex: 1 1;\\n}\\n.Countdown_countdown-container__aCoXf > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n.Countdown_countdown-container__aCoXf > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n.Countdown_countdown-container__button__1uAEx {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background-color: var(--blue);\\n  color: var(--white);\\n  transition: background-color 0.2s;\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n}\\n.Countdown_countdown-container__button__1uAEx:not(:disabled):hover {\\n  background-color: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__2fD0J {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__2fD0J:not(:disabled):hover {\\n  background-color: var(--red);\\n  color: var(--white);\\n}\\n\\n.Countdown_countdownButton__yih7Q:disabled {\\n  background-color: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 4px solid var(--green);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Countdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,SAAA;EAEA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,wBAAA;EACA,wCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAIQ;EACI,SAAA;AAFZ;AAGY;EACI,+BAAA;AADhB;AAGY;EACI,8BAAA;AADhB;AAMI;EACI,kBAAA;EACA,gBAAA;AAJR;AAOI;EACI,WAAA;EACA,YAAA;EAEA,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,SAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EACA,iCAAA;EAEA,kBAAA;EACA,gBAAA;AAVR;AAYQ;EACI,kCAAA;AAVZ;;AAeA;EACI,8BAAA;EACA,mBAAA;AAZJ;;AAcA;EACI,4BAAA;EACA,mBAAA;AAXJ;;AAcA;EACI,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;AAXJ\",\"sourcesContent\":[\".countdown-container {\\n    display:flex;\\n    align-items: center;\\n\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n\\n    & > div {\\n        flex: 1;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-evenly;\\n    \\n        background: var(--white);\\n        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n        border-radius: 5px;\\n        font-size: 8.5rem;\\n        text-align: center;\\n\\n        span {\\n            flex: 1;\\n            &:first-child {\\n                border-right: 1px solid #f0f1f3;\\n            }\\n            &:last-child {\\n                border-left: 1px solid #f0f1f3;\\n            }\\n        }\\n    }\\n\\n    & > span {\\n        font-size: 6.25rem;\\n        margin: 0 0.5rem;\\n    }\\n\\n    &__button {\\n        width: 100%;\\n        height: 5rem;\\n    \\n        margin-top: 2rem;\\n    \\n        display: flex;\\n        align-items: center;\\n        justify-content:center;\\n    \\n        border: 0;\\n        border-radius: 5px;\\n    \\n        background-color: var(--blue);\\n        color: var(--white);\\n        transition: background-color 0.2s;\\n    \\n        font-size: 1.25rem;\\n        font-weight: 600;\\n\\n        &:not(:disabled):hover {\\n            background-color: var(--blue-dark);\\n        }\\n    }\\n}\\n\\n.countdownButtonActive {\\n    background-color: var(--white);\\n    color: var(--title);\\n}\\n.countdownButtonActive:not(:disabled):hover {\\n    background-color: var(--red);\\n    color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n    background-color: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n    border-bottom: 4px solid var(--green);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdown-container\": \"Countdown_countdown-container__aCoXf\",\n\t\"countdown-container__button\": \"Countdown_countdown-container__button__1uAEx\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__2fD0J\",\n\t\"countdownButton\": \"Countdown_countdownButton__yih7Q\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5tb2R1bGUuc2Nzcz82OWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsa0JBQWtCLHdCQUF3QiwwQkFBMEIscUJBQXFCLHdCQUF3QixHQUFHLCtDQUErQyxjQUFjLGtCQUFrQix3QkFBd0Isa0NBQWtDLDZCQUE2Qiw2Q0FBNkMsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRyxvREFBb0QsY0FBYyxHQUFHLGdFQUFnRSxvQ0FBb0MsR0FBRywrREFBK0QsbUNBQW1DLEdBQUcsZ0RBQWdELHVCQUF1QixxQkFBcUIsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyx1QkFBdUIsa0NBQWtDLHdCQUF3QixzQ0FBc0MsdUJBQXVCLHFCQUFxQixHQUFHLHNFQUFzRSx1Q0FBdUMsR0FBRyw2Q0FBNkMsbUNBQW1DLHdCQUF3QixHQUFHLGtFQUFrRSxpQ0FBaUMsd0JBQXdCLEdBQUcsZ0RBQWdELG1DQUFtQyx1QkFBdUIsd0JBQXdCLDBDQUEwQyxHQUFHLE9BQU8sc0ZBQXNGLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsK0NBQStDLG1CQUFtQiwwQkFBMEIsOEJBQThCLHVCQUF1QiwwQkFBMEIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsOEJBQThCLHdDQUF3Qyx5Q0FBeUMsbURBQW1ELDZCQUE2Qiw0QkFBNEIsNkJBQTZCLGtCQUFrQixzQkFBc0IsNkJBQTZCLGtEQUFrRCxlQUFlLDRCQUE0QixpREFBaUQsZUFBZSxXQUFXLE9BQU8sa0JBQWtCLDZCQUE2QiwyQkFBMkIsT0FBTyxtQkFBbUIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsOEJBQThCLDhCQUE4QixpQ0FBaUMsMEJBQTBCLDZCQUE2Qiw4Q0FBOEMsOEJBQThCLDRDQUE0QyxtQ0FBbUMsMkJBQTJCLG9DQUFvQyxpREFBaUQsV0FBVyxPQUFPLEdBQUcsNEJBQTRCLHFDQUFxQywwQkFBMEIsR0FBRywrQ0FBK0MsbUNBQW1DLDBCQUEwQixHQUFHLCtCQUErQixxQ0FBcUMseUJBQXlCLDBCQUEwQiw0Q0FBNEMsR0FBRyxtQkFBbUI7QUFDei9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9Db3VudGRvd24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYgPiBkaXYge1xcbiAgZmxleDogMSAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDguNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiBzcGFuIHtcXG4gIGZsZXg6IDEgMTtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcbi5Db3VudGRvd25fY291bnRkb3duLWNvbnRhaW5lcl9fYUNvWGYgPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19hQ29YZiA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuLkNvdW50ZG93bl9jb3VudGRvd24tY29udGFpbmVyX19idXR0b25fXzF1QUV4IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbl9fMXVBRXg6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzJmRDBKIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18yZkQwSjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fX3lpaDdROmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ291bnRkb3duLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLFNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLHdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0ksU0FBQTtBQUZaO0FBR1k7RUFDSSwrQkFBQTtBQURoQjtBQUdZO0VBQ0ksOEJBQUE7QUFEaEI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsU0FBQTtFQUNBLGtCQUFBO0VBRUEsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQVZSO0FBWVE7RUFDSSxrQ0FBQTtBQVZaOztBQWVBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWNBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWNBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFYSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcblxcbiAgICAmID4gZGl2IHtcXG4gICAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgIFxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIFxcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICAgXFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uQWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG4uY291bnRkb3duQnV0dG9uQWN0aXZlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudGRvd24tY29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2FDb1hmXCIsXG5cdFwiY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbl9fMXVBRXhcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18yZkQwSlwiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fX3lpaDdRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Countdown/Countdown.module.scss\n");

/***/ })

})