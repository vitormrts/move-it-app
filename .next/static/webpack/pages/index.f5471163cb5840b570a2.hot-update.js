webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeBox\", function() { return ChallengeBox; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ \"./src/styles/components/ChallengeBox.module.css\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/ChallengeBox.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ChallengeBox() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      activeChallenge = _useContext.activeChallenge,\n      resetChallenge = _useContext.resetChallenge,\n      completeChallenge = _useContext.completeChallenge;\n\n  function handleChallengeSucceeded() {\n    completeChallenge;\n  }\n\n  function handleChallengeFailed() {\n    resetChallenge();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxContainer,\n    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxActive,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        children: [\"Ganhe \", activeChallenge.amount, \" xp\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/\".concat(activeChallenge.type, \".svg\"),\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Novo desafio\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: activeChallenge.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxFailedButton,\n          onClick: resetChallenge,\n          children: \"Falhei\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxSucceedButton,\n          onClick: completeChallenge,\n          children: \"Completei\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxNotActive,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Finalize um ciclo para receber um desafio\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/level-up.svg\",\n          alt: \"Level up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, this), \"Avance de level completando desafios.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengeBox, \"fZYbVcPxlfVQUCydZk5iQ1UfXok=\");\n\n_c = ChallengeBox;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengeBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeD9mNzExIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWQiLCJoYW5kbGVDaGFsbGVuZ2VGYWlsZWQiLCJzdHlsZXMiLCJjaGFsbGVuZ2VCb3hDb250YWluZXIiLCJjaGFsbGVuZ2VCb3hBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZ2VCb3hGYWlsZWRCdXR0b24iLCJjaGFsbGVuZ2VCb3hTdWNjZWVkQnV0dG9uIiwiY2hhbGxlbmdlQm94Tm90QWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxvQkFDa0NDLHdEQUFVLENBQUNDLDZFQUFELENBRDVDO0FBQUEsTUFDcEJDLGVBRG9CLGVBQ3BCQSxlQURvQjtBQUFBLE1BQ0hDLGNBREcsZUFDSEEsY0FERztBQUFBLE1BQ2FDLGlCQURiLGVBQ2FBLGlCQURiOztBQUczQixXQUFTQyx3QkFBVCxHQUFvQztBQUNoQ0QscUJBQWlCO0FBQ3BCOztBQUVELFdBQVNFLHFCQUFULEdBQWlDO0FBQzdCSCxrQkFBYztBQUNqQjs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUksaUZBQU0sQ0FBQ0MscUJBQXZCO0FBQUEsY0FDTU4sZUFBZSxnQkFDYjtBQUFLLGVBQVMsRUFBRUssaUZBQU0sQ0FBQ0Usa0JBQXZCO0FBQUEsOEJBQ0k7QUFBQSw2QkFBZVAsZUFBZSxDQUFDUSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLGtCQUFXUixlQUFlLENBQUNTLElBQTNCLFNBQVI7QUFBK0MsYUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUEsb0JBQUlULGVBQWUsQ0FBQ1U7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQVNJO0FBQUEsZ0NBQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFFTCxpRkFBTSxDQUFDTSx3QkFBeEM7QUFBa0UsaUJBQU8sRUFBRVYsY0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUVJLGlGQUFNLENBQUNPLHlCQUF4QztBQUFtRSxpQkFBTyxFQUFFVixpQkFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGEsZ0JBZ0JqQjtBQUFLLGVBQVMsRUFBRUcsaUZBQU0sQ0FBQ1EscUJBQXZCO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUMsb0JBQVQ7QUFBOEIsYUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRCSDs7R0F2Q2VoQixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHRcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCkge1xuICAgIGNvbnN0IHthY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBjb21wbGV0ZUNoYWxsZW5nZX0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkKCkge1xuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZUZhaWxlZCgpIHtcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgIHsgYWN0aXZlQ2hhbGxlbmdlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94QWN0aXZlfT5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5HYW5oZSB7YWN0aXZlQ2hhbGxlbmdlLmFtb3VudH0geHA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveEZhaWxlZEJ1dHRvbn0gb25DbGljaz17cmVzZXRDaGFsbGVuZ2V9PkZhbGhlaTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94U3VjY2VlZEJ1dHRvbn0gb25DbGljaz17Y29tcGxldGVDaGFsbGVuZ2V9PkNvbXBsZXRlaTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveE5vdEFjdGl2ZX0+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5GaW5hbGl6ZSB1bSBjaWNsbyBwYXJhIHJlY2ViZXIgdW0gZGVzYWZpbzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIHVwXCIvPlxuICAgICAgICAgICAgICAgICAgICBBdmFuY2UgZGUgbGV2ZWwgY29tcGxldGFuZG8gZGVzYWZpb3MuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChallengeBox.tsx\n");

/***/ })

})