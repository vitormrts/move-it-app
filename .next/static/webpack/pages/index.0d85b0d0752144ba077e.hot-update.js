webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Profile/Profile.tsx":
/*!********************************************!*\
  !*** ./src/components/Profile/Profile.tsx ***!
  \********************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Profile\", function() { return Profile; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _Profile_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile.module.scss */ \"./src/components/Profile/Profile.module.scss\");\n/* harmony import */ var _Profile_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Profile_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/Profile/Profile.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      level = _useContext.level;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Profile_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['profile-container'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"https://github.com/vitormrts.png\",\n      alt: \"Vitor Martins\",\n      className: _Profile_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['profile-container__icon']\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Vitor Martins\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/level.svg\",\n          alt: \"Level\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this), \"Level \", level]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Profile, \"cd5cMxsriMdoXZfM0Hj5dqSzoSU=\");\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlLnRzeD9iOWRkIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJsZXZlbCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxPQUFULEdBQW9CO0FBQUE7O0FBQUEsb0JBQ1BDLHdEQUFVLENBQUNDLDZFQUFELENBREg7QUFBQSxNQUNoQkMsS0FEZ0IsZUFDaEJBLEtBRGdCOztBQUd2QixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQyxtQkFBRCxDQUF0QjtBQUFBLDRCQUNJO0FBQUssU0FBRyxFQUFDLGtDQUFUO0FBQTRDLFNBQUcsRUFBQyxlQUFoRDtBQUFnRSxlQUFTLEVBQUVBLDJEQUFNLENBQUMseUJBQUQ7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFDLGlCQUFUO0FBQTJCLGFBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLFlBRVdELEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FmZUgsTzs7S0FBQUEsTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9maWxlLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlICgpIHtcbiAgICBjb25zdCB7bGV2ZWx9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2ZpbGUtY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vdml0b3JtcnRzLnBuZ1wiIGFsdD1cIlZpdG9yIE1hcnRpbnNcIiBjbGFzc05hbWU9e3N0eWxlc1sncHJvZmlsZS1jb250YWluZXJfX2ljb24nXX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlZpdG9yIE1hcnRpbnM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJMZXZlbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgTGV2ZWwge2xldmVsfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Profile/Profile.tsx\n");

/***/ })

})