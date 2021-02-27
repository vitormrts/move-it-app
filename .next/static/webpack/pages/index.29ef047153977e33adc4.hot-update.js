webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ThemeSwitcher/ThemeSwitcher.tsx":
/*!********************************************************!*\
  !*** ./src/components/ThemeSwitcher/ThemeSwitcher.tsx ***!
  \********************************************************/
/*! exports provided: ThemeSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeSwitcher\", function() { return ThemeSwitcher; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeSwitcher_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeSwitcher.module.scss */ \"./src/components/ThemeSwitcher/ThemeSwitcher.module.scss\");\n/* harmony import */ var _ThemeSwitcher_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ThemeSwitcher_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/ThemeSwitcher/ThemeSwitcher.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction ThemeSwitcher() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDark = _useState[0],\n      setIsDark = _useState[1];\n\n  var lightColors = {\n    \"white\": \"#fff\",\n    \"background\": \"#f2f3f5\",\n    \"gray-line\": \"#DCDDE0\",\n    \"text\": \"#666666\",\n    \"text-highlight\": \"#3A46C4\",\n    \"title\": \"#2D384D\",\n    \"red\": \"#E83F5B\",\n    \"green\": \"#4CD62B\",\n    \"blue\": \"#5965E0\",\n    \"blue-dark\": \"#4953B8\",\n    \"blue-twitter\": \"#2AA9E0\",\n    \"text-button\": \"#FFF\"\n  };\n  var darkColors = {\n    \"white\": \"#575757\",\n    \"background\": \"#2d2c2c\",\n    \"gray-line\": \"#DCDDE0\",\n    \"text\": \"#dfdfdf\",\n    \"text-highlight\": \"#FFF\",\n    \"title\": \"#fff\",\n    \"red\": \"#EA1A3C\",\n    \"green\": \"#41DF1A\",\n    \"blue\": \"#3A46C4\",\n    \"blue-dark\": \"#4953B8\",\n    \"blue-twitter\": \"#2AA9E0\",\n    \"text-button\": \"#FFF\"\n  };\n\n  var transformKey = function transformKey(key) {\n    return \"--color-\" + key.replace(/([A-Z])/, \"-$1\").toLowerCase();\n  };\n\n  function changeColors(colors) {\n    Object.keys(colors).map(function (key) {\n      return document.documentElement.style.setProperty(transformKey(key), colors[key]);\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isDark) {\n      // troca as cores para dark\n      changeColors(darkColors);\n    } else {\n      // troca as cores para light\n      changeColors(lightColors);\n    }\n  }, [isDark]);\n\n  function switchTheme() {\n    if (isDark) {\n      setIsDark(false);\n    } else {\n      setIsDark(true);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _ThemeSwitcher_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['switcher-container'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _ThemeSwitcher_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['profile-container__checkbox'],\n      onClick: switchTheme\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this), isDark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      width: \"26\",\n      height: \"26\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        fill: \"gray\",\n        \"fill-rule\": \"evenodd\",\n        d: \"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 76\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      width: \"26\",\n      height: \"26\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        fill: \"gray\",\n        \"fill-rule\": \"evenodd\",\n        d: \"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 371\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 308\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ThemeSwitcher, \"q9ovQTvwIdpxeVii6kJLTuTYpwE=\");\n\n_c = ThemeSwitcher;\n\nvar _c;\n\n$RefreshReg$(_c, \"ThemeSwitcher\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci9UaGVtZVN3aXRjaGVyLnRzeD84ZDdiIl0sIm5hbWVzIjpbIlRoZW1lU3dpdGNoZXIiLCJ1c2VTdGF0ZSIsImlzRGFyayIsInNldElzRGFyayIsImxpZ2h0Q29sb3JzIiwiZGFya0NvbG9ycyIsInRyYW5zZm9ybUtleSIsImtleSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNoYW5nZUNvbG9ycyIsImNvbG9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ1c2VFZmZlY3QiLCJzd2l0Y2hUaGVtZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE1BRHFCO0FBQUEsTUFDYkMsU0FEYTs7QUFHNUIsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCLGFBQVMsTUFETztBQUVoQixrQkFBYyxTQUZFO0FBR2hCLGlCQUFhLFNBSEc7QUFJaEIsWUFBUSxTQUpRO0FBS2hCLHNCQUFrQixTQUxGO0FBTWhCLGFBQVMsU0FOTztBQU9oQixXQUFPLFNBUFM7QUFRaEIsYUFBUyxTQVJPO0FBU2hCLFlBQVEsU0FUUTtBQVVoQixpQkFBYSxTQVZHO0FBV2hCLG9CQUFnQixTQVhBO0FBWWhCLG1CQUFlO0FBWkMsR0FBcEI7QUFlQSxNQUFNQyxVQUFVLEdBQUc7QUFDZixhQUFTLFNBRE07QUFFZixrQkFBYyxTQUZDO0FBR2YsaUJBQWEsU0FIRTtBQUlmLFlBQVEsU0FKTztBQUtmLHNCQUFrQixNQUxIO0FBTWYsYUFBUyxNQU5NO0FBT2YsV0FBTyxTQVBRO0FBUWYsYUFBUyxTQVJNO0FBU2YsWUFBUSxTQVRPO0FBVWYsaUJBQWEsU0FWRTtBQVdmLG9CQUFnQixTQVhEO0FBWWYsbUJBQWU7QUFaQSxHQUFuQjs7QUFlQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxHQUFHO0FBQUEsV0FBSSxhQUFhQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEtBQXZCLEVBQThCQyxXQUE5QixFQUFqQjtBQUFBLEdBQXhCOztBQUVBLFdBQVNDLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQzFCQyxVQUFNLENBQUNDLElBQVAsQ0FBWUYsTUFBWixFQUFvQkcsR0FBcEIsQ0FBd0IsVUFBQVAsR0FBRztBQUFBLGFBQ3ZCUSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQ1osWUFBWSxDQUFDQyxHQUFELENBQXZELEVBQThESSxNQUFNLENBQUNKLEdBQUQsQ0FBcEUsQ0FEdUI7QUFBQSxLQUEzQjtBQUdIOztBQUVEWSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJakIsTUFBSixFQUFZO0FBQ1I7QUFDQVEsa0JBQVksQ0FBQ0wsVUFBRCxDQUFaO0FBQ0gsS0FIRCxNQUdPO0FBQ0g7QUFDQUssa0JBQVksQ0FBQ04sV0FBRCxDQUFaO0FBQ0g7QUFDSixHQVJRLEVBUU4sQ0FBQ0YsTUFBRCxDQVJNLENBQVQ7O0FBVUEsV0FBU2tCLFdBQVQsR0FBdUI7QUFDbkIsUUFBSWxCLE1BQUosRUFBWTtBQUNSQyxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSDtBQUNKOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFFa0IsaUVBQU0sQ0FBQyxvQkFBRCxDQUF0QjtBQUFBLDRCQUNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFFQSxpRUFBTSxDQUFDLDZCQUFELENBQXZDO0FBQXdFLGFBQU8sRUFBRUQ7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUtsQixNQUFNLGdCQUNQO0FBQUssV0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQUssRUFBQyxJQUE5QztBQUFtRCxZQUFNLEVBQUMsSUFBMUQ7QUFBQSw2QkFBK0Q7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFrQixxQkFBVSxTQUE1QjtBQUFzQyxTQUFDLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZ0JBQ2dTO0FBQUssV0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQUssRUFBQyxJQUE5QztBQUFtRCxZQUFNLEVBQUMsSUFBMUQ7QUFBQSw2QkFBK0Q7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFrQixxQkFBVSxTQUE1QjtBQUFzQyxTQUFDLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSDNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBcEVlRixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci9UaGVtZVN3aXRjaGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGhlbWVTd2l0Y2hlci5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVN3aXRjaGVyKCkge1xuICAgIGNvbnN0IFtpc0RhcmssIHNldElzRGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBsaWdodENvbG9ycyA9IHtcbiAgICAgICAgXCJ3aGl0ZVwiOiBcIiNmZmZcIixcbiAgICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2YyZjNmNVwiLFxuICAgICAgICBcImdyYXktbGluZVwiOiBcIiNEQ0RERTBcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiIzY2NjY2NlwiLFxuICAgICAgICBcInRleHQtaGlnaGxpZ2h0XCI6IFwiIzNBNDZDNFwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiIzJEMzg0RFwiLFxuICAgICAgICBcInJlZFwiOiBcIiNFODNGNUJcIixcbiAgICAgICAgXCJncmVlblwiOiBcIiM0Q0Q2MkJcIixcbiAgICAgICAgXCJibHVlXCI6IFwiIzU5NjVFMFwiLFxuICAgICAgICBcImJsdWUtZGFya1wiOiBcIiM0OTUzQjhcIixcbiAgICAgICAgXCJibHVlLXR3aXR0ZXJcIjogXCIjMkFBOUUwXCIsXG4gICAgICAgIFwidGV4dC1idXR0b25cIjogXCIjRkZGXCJcbiAgICB9XG5cbiAgICBjb25zdCBkYXJrQ29sb3JzID0ge1xuICAgICAgICBcIndoaXRlXCI6IFwiIzU3NTc1N1wiLFxuICAgICAgICBcImJhY2tncm91bmRcIjogXCIjMmQyYzJjXCIsXG4gICAgICAgIFwiZ3JheS1saW5lXCI6IFwiI0RDRERFMFwiLFxuICAgICAgICBcInRleHRcIjogXCIjZGZkZmRmXCIsXG4gICAgICAgIFwidGV4dC1oaWdobGlnaHRcIjogXCIjRkZGXCIsXG4gICAgICAgIFwidGl0bGVcIjogXCIjZmZmXCIsXG4gICAgICAgIFwicmVkXCI6IFwiI0VBMUEzQ1wiLFxuICAgICAgICBcImdyZWVuXCI6IFwiIzQxREYxQVwiLFxuICAgICAgICBcImJsdWVcIjogXCIjM0E0NkM0XCIsXG4gICAgICAgIFwiYmx1ZS1kYXJrXCI6IFwiIzQ5NTNCOFwiLFxuICAgICAgICBcImJsdWUtdHdpdHRlclwiOiBcIiMyQUE5RTBcIixcbiAgICAgICAgXCJ0ZXh0LWJ1dHRvblwiOiBcIiNGRkZcIlxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybUtleSA9IGtleSA9PiBcIi0tY29sb3ItXCIgKyBrZXkucmVwbGFjZSgvKFtBLVpdKS8sIFwiLSQxXCIpLnRvTG93ZXJDYXNlKClcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUNvbG9ycyhjb2xvcnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoY29sb3JzKS5tYXAoa2V5ID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkodHJhbnNmb3JtS2V5KGtleSksIGNvbG9yc1trZXldKSAgIFxuICAgICAgICApXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzRGFyaykge1xuICAgICAgICAgICAgLy8gdHJvY2EgYXMgY29yZXMgcGFyYSBkYXJrXG4gICAgICAgICAgICBjaGFuZ2VDb2xvcnMoZGFya0NvbG9ycylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRyb2NhIGFzIGNvcmVzIHBhcmEgbGlnaHRcbiAgICAgICAgICAgIGNoYW5nZUNvbG9ycyhsaWdodENvbG9ycylcbiAgICAgICAgfVxuICAgIH0sIFtpc0RhcmtdKVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVGhlbWUoKSB7XG4gICAgICAgIGlmIChpc0RhcmspIHtcbiAgICAgICAgICAgIHNldElzRGFyayhmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzRGFyayh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snc3dpdGNoZXItY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2ZpbGUtY29udGFpbmVyX19jaGVja2JveCddfSBvbkNsaWNrPXtzd2l0Y2hUaGVtZX0vPlxuICAgICAgICAgICAge2lzRGFyayA/IChcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiPjxwYXRoIGZpbGw9XCJncmF5XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTMgMGMuODEgMCAxLjYwMy4wNzQgMi4zNzMuMjE2QzEwLjU5MyAxLjE5OSA3IDUuNDMgNyAxMC41IDcgMTYuMjk5IDExLjcwMSAyMSAxNy41IDIxYzIuOTk2IDAgNS43LTEuMjU1IDcuNjEzLTMuMjY4QzIzLjIyIDIyLjU3MiAxOC41MSAyNiAxMyAyNiA1LjgyIDI2IDAgMjAuMTggMCAxM1M1LjgyIDAgMTMgMHpcIi8+PC9zdmc+KSA6ICg8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIj48cGF0aCBmaWxsPVwiZ3JheVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEzIDIxYTEgMSAwIDAxMSAxdjNhMSAxIDAgMTEtMiAwdi0zYTEgMSAwIDAxMS0xem0tNS42NTctMi4zNDNhMSAxIDAgMDEwIDEuNDE0bC0yLjEyMSAyLjEyMWExIDEgMCAwMS0xLjQxNC0xLjQxNGwyLjEyLTIuMTIxYTEgMSAwIDAxMS40MTUgMHptMTIuNzI4IDBsMi4xMjEgMi4xMjFhMSAxIDAgMDEtMS40MTQgMS40MTRsLTIuMTIxLTIuMTJhMSAxIDAgMDExLjQxNC0xLjQxNXpNMTMgOGE1IDUgMCAxMTAgMTAgNSA1IDAgMDEwLTEwem0xMiA0YTEgMSAwIDExMCAyaC0zYTEgMSAwIDExMC0yaDN6TTQgMTJhMSAxIDAgMTEwIDJIMWExIDEgMCAxMTAtMmgzem0xOC4xOTItOC4xOTJhMSAxIDAgMDEwIDEuNDE0bC0yLjEyIDIuMTIxYTEgMSAwIDAxLTEuNDE1LTEuNDE0bDIuMTIxLTIuMTIxYTEgMSAwIDAxMS40MTQgMHptLTE2Ljk3IDBsMi4xMjEgMi4xMkExIDEgMCAwMTUuOTMgNy4zNDRMMy44MDggNS4yMjJhMSAxIDAgMDExLjQxNC0xLjQxNHpNMTMgMGExIDEgMCAwMTEgMXYzYTEgMSAwIDExLTIgMFYxYTEgMSAwIDAxMS0xelwiLz48L3N2Zz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ThemeSwitcher/ThemeSwitcher.tsx\n");

/***/ })

})