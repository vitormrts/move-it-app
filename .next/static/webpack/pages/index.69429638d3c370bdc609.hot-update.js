webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_vitormrts_rea_de_Trabalho_Projects_move_it_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countdownTimeout;\nfunction Countdown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.1 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_vitormrts_rea_de_Trabalho_Projects_move_it_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1]; // se nao tiver 2, adiciona a esquerda\n\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_vitormrts_rea_de_Trabalho_Projects_move_it_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1]; // se nao tiver 2, adiciona a esquerda\n  // altera o estado do botao\n\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setTime(0.1 * 60);\n  } // Countdown iniciado: contagem regressiva\n  // Recebe dois parametros, o primeiro e a funcao que sera executada, ja o segundo eh a variavel que executara a funcao caso ela seja alterada\n  // se clicarmos no botao, o efeito active eh alterado, entao useEffect eh ativado\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(isActive);\n\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time == 0) {\n      setHasFinished(true);\n      setIsActive(false);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: true,\n      type: \"button\",\n      className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive),\n      onClick: resetCountdown,\n      children: \"Abandonar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, this) : null, isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive),\n      onClick: resetCountdown,\n      children: \"Abandonar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,\n      onClick: startCountdown,\n      children: \"Iniciar um ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Countdown, \"zMEuIev5oGYBR6jD/swcyLIfj/8=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwic2V0SGFzRmluaXNoZWQiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FEUjtBQUFBLE1BQ2pCQyxJQURpQjtBQUFBLE1BQ1hDLE9BRFc7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWpCRyxRQUZpQjtBQUFBLE1BRVBDLFdBRk87O0FBQUEsbUJBR2NKLHNEQUFRLENBQUMsS0FBRCxDQUh0QjtBQUFBLE1BR2pCSyxXQUhpQjtBQUFBLE1BR0pDLGNBSEk7O0FBS3hCLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCOztBQU53Qiw4QkFRVVUsTUFBTSxD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Yy9jb21wb25lbnRzL0NvdW50ZG93bi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCJcblxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKVxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjBcbiBcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpIC8vIHNlIG5hbyB0aXZlciAyLCBhZGljaW9uYSBhIGVzcXVlcmRhXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKSAvLyBzZSBuYW8gdGl2ZXIgMiwgYWRpY2lvbmEgYSBlc3F1ZXJkYVxuXG4gICAgLy8gYWx0ZXJhIG8gZXN0YWRvIGRvIGJvdGFvXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KVxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgICAgc2V0VGltZSgwLjEqNjApXG4gICAgfVxuXG4gICAgLy8gQ291bnRkb3duIGluaWNpYWRvOiBjb250YWdlbSByZWdyZXNzaXZhXG4gICAgLy8gUmVjZWJlIGRvaXMgcGFyYW1ldHJvcywgbyBwcmltZWlybyBlIGEgZnVuY2FvIHF1ZSBzZXJhIGV4ZWN1dGFkYSwgamEgbyBzZWd1bmRvIGVoIGEgdmFyaWF2ZWwgcXVlIGV4ZWN1dGFyYSBhIGZ1bmNhbyBjYXNvIGVsYSBzZWphIGFsdGVyYWRhXG4gICAgLy8gc2UgY2xpY2FybW9zIG5vIGJvdGFvLCBvIGVmZWl0byBhY3RpdmUgZWggYWx0ZXJhZG8sIGVudGFvIHVzZUVmZmVjdCBlaCBhdGl2YWRvXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzQWN0aXZlKVxuICAgICAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PSAwKSB7XG4gICAgICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKVxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9LCBbaXNBY3RpdmUsIHRpbWVdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtoYXNGaW5pc2hlZCA/IChcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uQWN0aXZlfWB9IG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufT5cbiAgICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cbiAgICAgICAgICAgIDwvYnV0dG9uPilcbiAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25BY3RpdmV9YH0gb25DbGljaz17cmVzZXRDb3VudGRvd259PlxuICAgICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufSBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0+XG4gICAgICAgICAgICAgICAgSW5pY2lhciB1bSBjaWNsb1xuICAgICAgICAgICAgPC9idXR0b24+KSB9XG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})