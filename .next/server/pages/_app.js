/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_print_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/print.scss */ \"./styles/print.scss\");\n/* harmony import */ var _styles_print_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_print_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst BG_COLORS = [\n    \"#ebc7eb\",\n    \"thistle\",\n    \"#bdbed6\",\n    \"lavender\",\n    \"lightblue\",\n    \"aliceblue\",\n    \"palegoldenrod\",\n    \"cornsilk\",\n    \"blanchedalmond\",\n    \"papayawhip\",\n    \"bisque\",\n    \"mistyrose\",\n    \"peachpuff\",\n    \"#ffd700\"\n];\nconst BG_TIMEOUT = 30000;\nfunction App({ Component , pageProps  }) {\n    const { 0: colorIndex , 1: setColorIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const colors = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>BG_COLORS.sort(()=>Math.random() - 0.5\n        )\n    , []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let index = 0;\n        function colorUpdate() {\n            index = index === colors.length - 1 ? 0 : index + 1;\n            setColorIndex(index);\n            console.log(`Background changed to \"${colors[index]}\"`);\n        }\n        ;\n        colorUpdate();\n        const colorTimer = setInterval(colorUpdate, BG_TIMEOUT);\n        return ()=>clearInterval(colorTimer)\n        ;\n    }, [\n        colors\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.HelmetProvider, {\n        __source: {\n            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n            lineNumber: 46,\n            columnNumber: 4\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, {\n                __source: {\n                    fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 48,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: \"coreytegeler.com\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"\",\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 49,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Corey Tegeler\",\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 50,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"\",\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 51,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://coreytegeler.com/\",\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 52,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\",\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 53,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.png\",\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 54,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"body\", {\n                        style: `background-color: ${colors[colorIndex]}`,\n                        __source: {\n                            fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                            lineNumber: 55,\n                            columnNumber: 4\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/coreytegeler/Sites/coreytegeler.com/pages/_app.js\",\n                    lineNumber: 57,\n                    columnNumber: 5\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNEO0FBRTdCO0FBQ0Q7QUFFN0IsS0FBSyxDQUFDTSxTQUFTLEdBQUcsQ0FBQztJQUNsQixDQUFTO0lBQ1QsQ0FBUztJQUNULENBQVM7SUFDVCxDQUFVO0lBQ1YsQ0FBVztJQUNYLENBQVc7SUFDWCxDQUFlO0lBQ2YsQ0FBVTtJQUNWLENBQWdCO0lBQ2hCLENBQVk7SUFDWixDQUFRO0lBQ1IsQ0FBVztJQUNYLENBQVc7SUFDWCxDQUFTO0FBQ1YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEtBQUs7U0FFZkMsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkMsS0FBSyxNQUFFQyxVQUFVLE1BQUVDLGFBQWEsTUFBSVYsK0NBQVEsQ0FBQyxDQUFDO0lBRTlDLEtBQUssQ0FBQ1csTUFBTSxHQUFHWiw4Q0FBTyxLQUNyQkssU0FBUyxDQUFDUSxJQUFJLEtBQU9DLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7O01BQ3ZDLENBQUMsQ0FBQztJQUVKaEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQ2lCLEtBQUssR0FBRyxDQUFDO2lCQUNKQyxXQUFXLEdBQUcsQ0FBQztZQUN2QkQsS0FBSyxHQUFHQSxLQUFLLEtBQUtKLE1BQU0sQ0FBQ00sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdGLEtBQUssR0FBRyxDQUFDO1lBQ25ETCxhQUFhLENBQUNLLEtBQUs7WUFDbkJHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLHVCQUF1QixFQUFFUixNQUFNLENBQUNJLEtBQUssRUFBRSxDQUFDO1FBQ3RELENBQUM7O1FBQ0RDLFdBQVc7UUFDWCxLQUFLLENBQUNJLFVBQVUsR0FBR0MsV0FBVyxDQUFDTCxXQUFXLEVBQUVYLFVBQVU7UUFDdEQsTUFBTSxLQUFPaUIsYUFBYSxDQUFDRixVQUFVOztJQUN0QyxDQUFDLEVBQUUsQ0FBQ1Q7UUFBQUEsTUFBTTtJQUFBLENBQUM7SUFFVixNQUFNLHVFQUNKUiw4REFBYzs7Ozs7Ozs7a0ZBQ2JELHNEQUFNOzs7Ozs7Ozt5RkFDTHFCLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBZ0I7O3lGQUN4QkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUFFOzs7Ozs7Ozt5RkFDbENGLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFVO3dCQUFDRCxPQUFPLEVBQUMsQ0FBZTs7Ozs7Ozs7eUZBQ2hERixDQUFJO3dCQUFDRyxRQUFRLEVBQUMsQ0FBZ0I7d0JBQUNELE9BQU8sRUFBQyxDQUFFOzs7Ozs7Ozt5RkFDekNGLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFRO3dCQUFDRCxPQUFPLEVBQUMsQ0FBMkI7Ozs7Ozs7O3lGQUMxREYsQ0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQVM7d0JBQUNELE9BQU8sRUFBQyxDQUFTOzs7Ozs7Ozt5RkFDekNFLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTs7Ozs7Ozs7eUZBQ2xDQyxDQUFJO3dCQUFDQyxLQUFLLEdBQUcsa0JBQWtCLEVBQUVyQixNQUFNLENBQUNGLFVBQVU7Ozs7Ozs7Ozs7aUZBRWpERixTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBRzVCLENBQUM7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcmV5dGVnZWxlci5naXRodWIuaW8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWxtZXQsIEhlbG1ldFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcblxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvcHJpbnQuc2Nzc1wiO1xuXG5jb25zdCBCR19DT0xPUlMgPSBbXG5cdFwiI2ViYzdlYlwiLFxuXHRcInRoaXN0bGVcIixcblx0XCIjYmRiZWQ2XCIsXG5cdFwibGF2ZW5kZXJcIixcblx0XCJsaWdodGJsdWVcIixcblx0XCJhbGljZWJsdWVcIixcblx0XCJwYWxlZ29sZGVucm9kXCIsXG5cdFwiY29ybnNpbGtcIixcblx0XCJibGFuY2hlZGFsbW9uZFwiLFxuXHRcInBhcGF5YXdoaXBcIixcblx0XCJiaXNxdWVcIixcblx0XCJtaXN0eXJvc2VcIixcblx0XCJwZWFjaHB1ZmZcIixcblx0XCIjZmZkNzAwXCJcbl1cblxuY29uc3QgQkdfVElNRU9VVCA9IDMwMDAwO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdGNvbnN0IFtjb2xvckluZGV4LCBzZXRDb2xvckluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG5cdGNvbnN0IGNvbG9ycyA9IHVzZU1lbW8oKCkgPT5cblx0XHRCR19DT0xPUlMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KVxuXHQsIFtdKTtcblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gMDtcblx0XHRmdW5jdGlvbiBjb2xvclVwZGF0ZSgpIHtcblx0XHRcdGluZGV4ID0gaW5kZXggPT09IGNvbG9ycy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMTtcblx0XHRcdHNldENvbG9ySW5kZXgoaW5kZXgpO1xuXHRcdFx0Y29uc29sZS5sb2coYEJhY2tncm91bmQgY2hhbmdlZCB0byBcIiR7Y29sb3JzW2luZGV4XX1cImApO1xuXHRcdH07XG5cdFx0Y29sb3JVcGRhdGUoKTtcblx0XHRjb25zdCBjb2xvclRpbWVyID0gc2V0SW50ZXJ2YWwoY29sb3JVcGRhdGUsIEJHX1RJTUVPVVQpO1xuXHRcdHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNvbG9yVGltZXIpO1xuXHR9LCBbY29sb3JzXSk7XG5cbiAgcmV0dXJuIChcbiAgXHQ8SGVsbWV0UHJvdmlkZXI+XG4gIFx0XHQ8SGVsbWV0PlxuICBcdFx0XHQ8dGl0bGU+Y29yZXl0ZWdlbGVyLmNvbTwvdGl0bGU+XG5cdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cblx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQ29yZXkgVGVnZWxlclwiIC8+XG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2NvcmV5dGVnZWxlci5jb20vXCIgLz5cblx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiZmF2aWNvbi5wbmdcIiAvPlxuXHRcdFx0PGJvZHkgc3R5bGU9e2BiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yc1tjb2xvckluZGV4XX1gfSAvPlxuICBcdFx0PC9IZWxtZXQ+XG5cdCAgXHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIFx0PC9IZWxtZXRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJIZWxtZXQiLCJIZWxtZXRQcm92aWRlciIsIkJHX0NPTE9SUyIsIkJHX1RJTUVPVVQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb2xvckluZGV4Iiwic2V0Q29sb3JJbmRleCIsImNvbG9ycyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiaW5kZXgiLCJjb2xvclVwZGF0ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvclRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsImxpbmsiLCJyZWwiLCJocmVmIiwiYm9keSIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/print.scss":
/*!***************************!*\
  !*** ./styles/print.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet-async");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();