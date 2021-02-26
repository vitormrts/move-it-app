webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ExperienceBar/ExperienceBar.tsx":
/*!********************************************************!*\
  !*** ./src/components/ExperienceBar/ExperienceBar.tsx ***!
  \********************************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExperienceBar\", function() { return ExperienceBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExperienceBar.module.scss */ \"./src/components/ExperienceBar/ExperienceBar.module.scss\");\n/* harmony import */ var _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/ExperienceBar/ExperienceBar.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ExperienceBar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      currentExperience = _useContext.currentExperience,\n      experienceToNextLevel = _useContext.experienceToNextLevel;\n\n  var percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['experiencebar-container'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['experiencebar-container__initial-xp'],\n      children: \"0 xp\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['experiencebar-container__progress'],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['experiencebar-container__total'],\n        style: {\n          width: \"\".concat(percentToNextLevel, \"%\")\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['experiencebar-container__current-experience'],\n        style: {\n          left: \"\".concat(percentToNextLevel, \"%\")\n        },\n        children: [currentExperience, \" xp\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _ExperienceBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['experiencebar-container__experience-nlw'],\n      children: [experienceToNextLevel, \" xp\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ExperienceBar, \"xp6xnADdbDm6RMZ4bALXLzkyKR0=\");\n\n_c = ExperienceBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"ExperienceBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci9FeHBlcmllbmNlQmFyLnRzeD80ODViIl0sIm5hbWVzIjpbIkV4cGVyaWVuY2VCYXIiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJjdXJyZW50RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInBlcmNlbnRUb05leHRMZXZlbCIsIk1hdGgiLCJyb3VuZCIsInN0eWxlcyIsIndpZHRoIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsb0JBQ3VCQyx3REFBVSxDQUFDQyw2RUFBRCxDQURqQztBQUFBLE1BQ3JCQyxpQkFEcUIsZUFDckJBLGlCQURxQjtBQUFBLE1BQ0ZDLHFCQURFLGVBQ0ZBLHFCQURFOztBQUc1QixNQUFNQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLGlCQUFpQixHQUFHLEdBQS9CLElBQXNDQyxxQkFBakU7QUFFQSxzQkFDSTtBQUFRLGFBQVMsRUFBRUksaUVBQU0sQ0FBQyx5QkFBRCxDQUF6QjtBQUFBLDRCQUNJO0FBQU0sZUFBUyxFQUFFQSxpRUFBTSxDQUFDLHFDQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRUEsaUVBQU0sQ0FBQyxtQ0FBRCxDQUF0QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsaUVBQU0sQ0FBQyxnQ0FBRCxDQUF0QjtBQUEwRCxhQUFLLEVBQUU7QUFBRUMsZUFBSyxZQUFLSixrQkFBTDtBQUFQO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0saUJBQVMsRUFBRUcsaUVBQU0sQ0FBQyw2Q0FBRCxDQUF2QjtBQUF3RSxhQUFLLEVBQUU7QUFBRUUsY0FBSSxZQUFLTCxrQkFBTDtBQUFOLFNBQS9FO0FBQUEsbUJBQW9IRixpQkFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSTtBQUFNLGVBQVMsRUFBRUssaUVBQU0sQ0FBQyx5Q0FBRCxDQUF2QjtBQUFBLGlCQUFxRUoscUJBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBZmVKLGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyL0V4cGVyaWVuY2VCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0V4cGVyaWVuY2VCYXIubW9kdWxlLnNjc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gRXhwZXJpZW5jZUJhcigpIHtcbiAgICBjb25zdCB7Y3VycmVudEV4cGVyaWVuY2UsIGV4cGVyaWVuY2VUb05leHRMZXZlbH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxuXG4gICAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gTWF0aC5yb3VuZChjdXJyZW50RXhwZXJpZW5jZSAqIDEwMCkgLyBleHBlcmllbmNlVG9OZXh0TGV2ZWxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXNbJ2V4cGVyaWVuY2ViYXItY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ2V4cGVyaWVuY2ViYXItY29udGFpbmVyX19pbml0aWFsLXhwJ119PjAgeHA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydleHBlcmllbmNlYmFyLWNvbnRhaW5lcl9fcHJvZ3Jlc3MnXX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZXhwZXJpZW5jZWJhci1jb250YWluZXJfX3RvdGFsJ119IHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWAgfX0vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydleHBlcmllbmNlYmFyLWNvbnRhaW5lcl9fY3VycmVudC1leHBlcmllbmNlJ119IHN0eWxlPXt7IGxlZnQ6IGAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fT57Y3VycmVudEV4cGVyaWVuY2V9IHhwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snZXhwZXJpZW5jZWJhci1jb250YWluZXJfX2V4cGVyaWVuY2Utbmx3J119PntleHBlcmllbmNlVG9OZXh0TGV2ZWx9IHhwPC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ExperienceBar/ExperienceBar.tsx\n");

/***/ })

})