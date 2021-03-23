module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/signin.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Authentication/Authentication.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/Authentication/Authentication.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Authentication_container__3WIPl\",\n\t\"container__symbol\": \"Authentication_container__symbol__aqvMT\",\n\t\"container__logo\": \"Authentication_container__logo__3amHj\",\n\t\"container__description\": \"Authentication_container__description__33zk7\",\n\t\"container__login\": \"Authentication_container__login__23eEh\",\n\t\"container__submit\": \"Authentication_container__submit__3wA7t\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi9BdXRoZW50aWNhdGlvbi5tb2R1bGUuc2Nzcz83NDA3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uL0F1dGhlbnRpY2F0aW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQXV0aGVudGljYXRpb25fY29udGFpbmVyX18zV0lQbFwiLFxuXHRcImNvbnRhaW5lcl9fc3ltYm9sXCI6IFwiQXV0aGVudGljYXRpb25fY29udGFpbmVyX19zeW1ib2xfX2Fxdk1UXCIsXG5cdFwiY29udGFpbmVyX19sb2dvXCI6IFwiQXV0aGVudGljYXRpb25fY29udGFpbmVyX19sb2dvX18zYW1IalwiLFxuXHRcImNvbnRhaW5lcl9fZGVzY3JpcHRpb25cIjogXCJBdXRoZW50aWNhdGlvbl9jb250YWluZXJfX2Rlc2NyaXB0aW9uX18zM3prN1wiLFxuXHRcImNvbnRhaW5lcl9fbG9naW5cIjogXCJBdXRoZW50aWNhdGlvbl9jb250YWluZXJfX2xvZ2luX18yM2VFaFwiLFxuXHRcImNvbnRhaW5lcl9fc3VibWl0XCI6IFwiQXV0aGVudGljYXRpb25fY29udGFpbmVyX19zdWJtaXRfXzN3QTd0XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Authentication/Authentication.module.scss\n");

/***/ }),

/***/ "./src/components/Authentication/Authentication.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Authentication/Authentication.tsx ***!
  \**********************************************************/
/*! exports provided: Authentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Authentication\", function() { return Authentication; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication.module.scss */ \"./src/components/Authentication/Authentication.module.scss\");\n/* harmony import */ var _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/components/Authentication/Authentication.tsx\";\n\n\nfunction Authentication() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['container'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['container__symbol'],\n        src: \"icons/symbol.png\",\n        alt: \"symbol image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['container__logo'],\n        src: \"logo-full-white.svg\",\n        alt: \"logo move-it\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"Bem-vindo!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['container__description'],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"icons/github.png\",\n            alt: \"github.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Fa\\xE7a login com seu GitHub para come\\xE7ar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['container__login'],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: _Authentication_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['container__submit'],\n            type: \"submit\",\n            onClick: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"signIn\"])('github'),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Fazer login com o GitHub\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/icons/arrow.svg\",\n              alt: \"arrow icon\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi9BdXRoZW50aWNhdGlvbi50c3g/ZjU0MCJdLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbiIsInN0eWxlcyIsInNpZ25JbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxTQUFTQSxjQUFULEdBQTBCO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDLFdBQUQsQ0FBdEI7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUEsa0VBQU0sQ0FBQyxtQkFBRCxDQUF0QjtBQUE2QyxXQUFHLEVBQUMsa0JBQWpEO0FBQW9FLFdBQUcsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGtFQUFNLENBQUMsaUJBQUQsQ0FBdEI7QUFBMkMsV0FBRyxFQUFDLHFCQUEvQztBQUFxRSxXQUFHLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUssbUJBQVMsRUFBRUEsa0VBQU0sQ0FBQyx3QkFBRCxDQUF0QjtBQUFBLGtDQUNJO0FBQUssZUFBRyxFQUFDLGtCQUFUO0FBQTRCLGVBQUcsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBUUk7QUFBSyxtQkFBUyxFQUFFQSxrRUFBTSxDQUFDLGtCQUFELENBQXRCO0FBQUEsaUNBQ0k7QUFBUSxxQkFBUyxFQUFFQSxrRUFBTSxDQUFDLG1CQUFELENBQXpCO0FBQWdELGdCQUFJLEVBQUMsUUFBckQ7QUFBOEQsbUJBQU8sRUFBRSxNQUFNQywrREFBTSxDQUFDLFFBQUQsQ0FBbkY7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUssaUJBQUcsRUFBQyxrQkFBVDtBQUE0QixpQkFBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uL0F1dGhlbnRpY2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9BdXRoZW50aWNhdGlvbi5tb2R1bGUuc2NzcydcblxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRhaW5lciddfT5cbiAgICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXJfX3N5bWJvbCddfSBzcmM9XCJpY29ucy9zeW1ib2wucG5nXCIgYWx0PVwic3ltYm9sIGltYWdlXCIvPlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlc1snY29udGFpbmVyX19sb2dvJ119IHNyYz1cImxvZ28tZnVsbC13aGl0ZS5zdmdcIiBhbHQ9XCJsb2dvIG1vdmUtaXRcIi8+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5CZW0tdmluZG8hPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXJfX2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9naXRodWIucG5nXCIgYWx0PVwiZ2l0aHViLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZhw6dhIGxvZ2luIGNvbSBzZXUgR2l0SHViIHBhcmEgY29tZcOnYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRhaW5lcl9fbG9naW4nXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXJfX3N1Ym1pdCddfSB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gc2lnbkluKCdnaXRodWInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmF6ZXIgbG9naW4gY29tIG8gR2l0SHViPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Fycm93LnN2Z1wiIGFsdD1cImFycm93IGljb25cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Authentication/Authentication.tsx\n");

/***/ }),

/***/ "./src/pages/signin.tsx":
/*!******************************!*\
  !*** ./src/pages/signin.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Authentication/Authentication */ \"./src/components/Authentication/Authentication.tsx\");\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/move-it-app/src/pages/signin.tsx\";\n\n\nfunction SignIn() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Sign In | MoveIt\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__[\"Authentication\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2lnbmluLnRzeD9mNmE5Il0sIm5hbWVzIjpbIlNpZ25JbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0kscUVBQUMsd0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0giLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2lnbmluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uL0F1dGhlbnRpY2F0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5TaWduIEluIHwgTW92ZUl0PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPEF1dGhlbnRpY2F0aW9uLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/signin.tsx\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });