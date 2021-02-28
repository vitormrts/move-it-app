webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown/Countdown.tsx":
/*!************************************************!*\
  !*** ./src/components/Countdown/Countdown.tsx ***!
  \************************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_vitormrts_rea_de_Trabalho_Projects_move_it_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/CountdownContext */ \"./src/contexts/CountdownContext.tsx\");\n/* harmony import */ var _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Countdown.module.scss */ \"./src/components/Countdown/Countdown.module.scss\");\n/* harmony import */ var _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/Countdown/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar countdownTimeout;\nfunction Countdown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__[\"CountdownContext\"]),\n      minutes = _useContext.minutes,\n      seconds = _useContext.seconds,\n      hasFinished = _useContext.hasFinished,\n      isActive = _useContext.isActive,\n      resetCountdown = _useContext.resetCountdown,\n      startCountdown = _useContext.startCountdown;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_vitormrts_rea_de_Trabalho_Projects_move_it_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1]; // se nao tiver 2, adiciona a esquerda\n\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_vitormrts_rea_de_Trabalho_Projects_move_it_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1]; // se nao tiver 2, adiciona a esquerda\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['countdown-container'],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: true,\n      className: _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['countdown-container__button'],\n      children: \"Ciclo encerrado\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [\" \", isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"\".concat(_Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['countdown-container__button'], \" \").concat(_Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['countdown-container__button--active']),\n        onClick: resetCountdown,\n        children: \"Abandonar ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 25\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['countdown-container__button'],\n        onClick: startCountdown,\n        children: \"Iniciar um ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 29\n      }, this)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Countdown, \"9xJbyXzgIfp/KUwd9shdxsUAixA=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi50c3g/YmI3YSJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwidXNlQ29udGV4dCIsIkNvdW50ZG93bkNvbnRleHQiLCJtaW51dGVzIiwic2Vjb25kcyIsImhhc0ZpbmlzaGVkIiwiaXNBY3RpdmUiLCJyZXNldENvdW50ZG93biIsInN0YXJ0Q291bnRkb3duIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxvQkFRcEJDLHdEQUFVLENBQUNDLDJFQUFELENBUlU7QUFBQSxNQUVwQkMsT0FGb0IsZUFFcEJBLE9BRm9CO0FBQUEsTUFHcEJDLE9BSG9CLGVBR3BCQSxPQUhvQjtBQUFBLE1BSXBCQyxXQUpvQixlQUlwQkEsV0FKb0I7QUFBQSxNQUtwQkMsUUFMb0IsZUFLcEJBLFFBTG9CO0FBQUEsTUFNcEJDLGNBTm9CLGVBTXBCQSxjQU5vQjtBQUFBLE1BT3BCQyxjQVBvQixlQU9wQkEsY0FQb0I7O0FBQUEsOEJBVVVDLE1BQU0sQ0FBQ04sT0FBRCxDQUFOLENBQWdCTyxRQUFoQixDQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQ0MsS0FBakMsQ0FBdUMsRUFBdkMsQ0FWVjtBQUFBO0FBQUEsTUFVakJDLFVBVmlCO0FBQUEsTUFVTEMsV0FWSyw4QkFVcUQ7OztBQVZyRCwrQkFXVUosTUFBTSxDQUFDTCxPQUFELENBQU4sQ0FBZ0JNLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQVhWO0FBQUE7QUFBQSxNQVdqQkcsVUFYaUI7QUFBQSxNQVdMQyxXQVhLLDhCQVdxRDs7O0FBRTdFLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVDLDZEQUFNLENBQUMscUJBQUQsQ0FBdEI7QUFBQSw4QkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFNSTtBQUFBLGdDQUNJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQWFLVixXQUFXLGdCQUNSO0FBQVEsY0FBUSxNQUFoQjtBQUFpQixlQUFTLEVBQUVXLDZEQUFNLENBQUMsNkJBQUQsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUSxnQkFLSjtBQUFBLHNCQUFJVixRQUFRLGdCQUNSO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsWUFBS1UsNkRBQU0sQ0FBQyw2QkFBRCxDQUFYLGNBQThDQSw2REFBTSxDQUFDLHFDQUFELENBQXBELENBQS9CO0FBQThILGVBQU8sRUFBRVQsY0FBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFLSjtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUVTLDZEQUFNLENBQUMsNkJBQUQsQ0FBdkM7QUFBd0UsZUFBTyxFQUFFUixjQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxSO0FBQUEsb0JBbEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQTVDZVIsUzs7S0FBQUEsUyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi9Db3VudGRvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHRcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db3VudGRvd24ubW9kdWxlLnNjc3NcIlxuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXRcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHMsXG4gICAgICAgIGhhc0ZpbmlzaGVkLFxuICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgcmVzZXRDb3VudGRvd24sXG4gICAgICAgIHN0YXJ0Q291bnRkb3duXG4gICAgfSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dClcblxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJykgLy8gc2UgbmFvIHRpdmVyIDIsIGFkaWNpb25hIGEgZXNxdWVyZGFcbiAgICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpIC8vIHNlIG5hbyB0aXZlciAyLCBhZGljaW9uYSBhIGVzcXVlcmRhXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY291bnRkb3duLWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2hhc0ZpbmlzaGVkID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvdW50ZG93bi1jb250YWluZXJfX2J1dHRvbiddfT5cbiAgICAgICAgICAgICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvXG4gICAgICAgICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICA8PiB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Ake3N0eWxlc1snY291bnRkb3duLWNvbnRhaW5lcl9fYnV0dG9uJ119ICR7c3R5bGVzWydjb3VudGRvd24tY29udGFpbmVyX19idXR0b24tLWFjdGl2ZSddfWB9IG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzWydjb3VudGRvd24tY29udGFpbmVyX19idXR0b24nXX0gb25DbGljaz17c3RhcnRDb3VudGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown/Countdown.tsx\n");

/***/ })

})