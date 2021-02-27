webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/contexts/CountdownContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar countdownTimeout;\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(25 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60; // altera o estado do botao\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setTime(25 * 60);\n    setHasFinished(false);\n  } // Countdown iniciado: contagem regressiva\n  // Recebe dois parametros, o primeiro e a funcao que sera executada, ja o segundo eh a variavel que executara a funcao caso ela seja alterada\n  // se clicarmos no botao, o efeito active eh alterado, entao useEffect eh ativado\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time == 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      startCountdown: startCountdown,\n      resetCountdown: resetCountdown\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CountdownProvider, \"mj5/cnN4jENLd9Ysf8U5sf/QRNY=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4P2ZlOWQiXSwibmFtZXMiOlsiQ291bnRkb3duQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVQLElBQUlDLGdCQUFKO0FBRU8sU0FBU0MsaUJBQVQsT0FBaUU7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DOztBQUFBLG9CQUN0Q0Msd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FENEI7QUFBQSxNQUM1REMsaUJBRDRELGVBQzVEQSxpQkFENEQ7O0FBQUEsa0JBRzVDQyxzREFBUSxDQUFDLEtBQUssRUFBTixDQUhvQztBQUFBLE1BRzdEQyxJQUg2RDtBQUFBLE1BR3ZEQyxPQUh1RDs7QUFBQSxtQkFJcENGLHNEQUFRLENBQUMsS0FBRCxDQUo0QjtBQUFBLE1BSTdERyxRQUo2RDtBQUFBLE1BSW5EQyxXQUptRDs7QUFBQSxtQkFLOUJKLHNEQUFRLENBQUMsS0FBRCxDQUxzQjtBQUFBLE1BSzdESyxXQUw2RDtBQUFBLE1BS2hEQyxjQUxnRDs7QUFPcEUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkIsQ0FSb0UsQ0FXcEU7O0FBQ0EsV0FBU1UsY0FBVCxHQUEwQjtBQUN0QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDdEJDLGdCQUFZLENBQUNuQixnQkFBRCxDQUFaO0FBQ0FVLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLEtBQUcsRUFBSixDQUFQO0FBQ0FJLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0gsR0FyQm1FLENBdUJwRTtBQUNBO0FBQ0E7OztBQUNBUSx5REFBUyxDQUFFLFlBQU07QUFDYixRQUFJWCxRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN0QlAsc0JBQWdCLEdBQUdxQixVQUFVLENBQUUsWUFBTTtBQUNqQ2IsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0gsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFHSCxLQUpELE1BSU8sSUFBSUUsUUFBUSxJQUFJRixJQUFJLElBQUksQ0FBeEIsRUFBMkI7QUFDOUJLLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FGLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FMLHVCQUFpQjtBQUNwQjtBQUNKLEdBVlEsRUFVTixDQUFDSSxRQUFELEVBQVdGLElBQVgsQ0FWTSxDQUFUO0FBWUEsc0JBQ0kscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFO0FBQzlCTSxhQUFPLEVBQVBBLE9BRDhCO0FBRTlCRyxhQUFPLEVBQVBBLE9BRjhCO0FBRzlCTCxpQkFBVyxFQUFYQSxXQUg4QjtBQUk5QkYsY0FBUSxFQUFSQSxRQUo4QjtBQUs5QlEsb0JBQWMsRUFBZEEsY0FMOEI7QUFNOUJDLG9CQUFjLEVBQWRBO0FBTjhCLEtBQWxDO0FBQUEsY0FRS2hCO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBbERlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi9DaGFsbGVuZ2VzQ29udGV4dCdcblxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHsgLy8gZGFkb3MgcmV0b3JuYWRvcyBwZWxvIGNvbnRleHRvXG4gICAgbWludXRlczogbnVtYmVyO1xuICAgIHNlY29uZHM6IG51bWJlcjtcbiAgICBoYXNGaW5pc2hlZDogYm9vbGVhbjtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcbiAgICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKVxuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXRcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93blByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ291bnRkb3duUHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXG5cbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgyNSAqIDYwKVxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MClcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwXG5cblxuICAgIC8vIGFsdGVyYSBvIGVzdGFkbyBkbyBib3Rhb1xuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dClcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgICAgIHNldFRpbWUoMjUqNjApXG4gICAgICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKVxuICAgIH1cblxuICAgIC8vIENvdW50ZG93biBpbmljaWFkbzogY29udGFnZW0gcmVncmVzc2l2YVxuICAgIC8vIFJlY2ViZSBkb2lzIHBhcmFtZXRyb3MsIG8gcHJpbWVpcm8gZSBhIGZ1bmNhbyBxdWUgc2VyYSBleGVjdXRhZGEsIGphIG8gc2VndW5kbyBlaCBhIHZhcmlhdmVsIHF1ZSBleGVjdXRhcmEgYSBmdW5jYW8gY2FzbyBlbGEgc2VqYSBhbHRlcmFkYVxuICAgIC8vIHNlIGNsaWNhcm1vcyBubyBib3RhbywgbyBlZmVpdG8gYWN0aXZlIGVoIGFsdGVyYWRvLCBlbnRhbyB1c2VFZmZlY3QgZWggYXRpdmFkb1xuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PSAwKSB7XG4gICAgICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKVxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpXG4gICAgICAgIH1cbiAgICB9LCBbaXNBY3RpdmUsIHRpbWVdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgbWludXRlcyxcbiAgICAgICAgICAgIHNlY29uZHMsXG4gICAgICAgICAgICBoYXNGaW5pc2hlZCxcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXG4gICAgICAgICAgICByZXNldENvdW50ZG93blxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContext.tsx\n");

/***/ })

})