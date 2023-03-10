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

/***/ "./components/Toast/index.js":
/*!***********************************!*\
  !*** ./components/Toast/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayIcon\": () => (/* binding */ displayIcon)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst displayIcon = (type)=>{\n    switch(type){\n        case \"success\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaCheck, {}, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n                lineNumber: 15,\n                columnNumber: 14\n            }, undefined);\n        case \"info\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInfo, {}, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n                lineNumber: 17,\n                columnNumber: 14\n            }, undefined);\n        case \"error\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaExclamationCircle, {}, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n                lineNumber: 19,\n                columnNumber: 14\n            }, undefined);\n        case \"warning\":\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaExclamationTriangle, {}, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n                lineNumber: 21,\n                columnNumber: 14\n            }, undefined);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBug, {}, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n                lineNumber: 23,\n                columnNumber: 14\n            }, undefined);\n    }\n};\nconst ToastMessage = ({ type , message  })=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast[type](/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                flexGrow: 1,\n                fontSize: 15,\n                padding: \"8px 12px\"\n            },\n            children: message\n        }, void 0, false, {\n            fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/components/Toast/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined));\nToastMessage.propTypes = {\n    message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n};\nToastMessage.dismiss = react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvYXN0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDUztBQUNJO0FBT2Y7QUFFakIsTUFBTVEsV0FBVyxHQUFHLENBQUNDLElBQUksR0FBSztJQUNuQyxPQUFRQSxJQUFJO1FBQ1YsS0FBSyxTQUFTO1lBQ1oscUJBQU8sOERBQUNMLG1EQUFPOzs7O3lCQUFHLENBQUM7UUFDckIsS0FBSyxNQUFNO1lBQ1QscUJBQU8sOERBQUNELGtEQUFNOzs7O3lCQUFHLENBQUM7UUFDcEIsS0FBSyxPQUFPO1lBQ1YscUJBQU8sOERBQUNJLCtEQUFtQjs7Ozt5QkFBRyxDQUFDO1FBQ2pDLEtBQUssU0FBUztZQUNaLHFCQUFPLDhEQUFDRixpRUFBcUI7Ozs7eUJBQUcsQ0FBQztRQUNuQztZQUNFLHFCQUFPLDhEQUFDQyxpREFBSzs7Ozt5QkFBRyxDQUFDO0tBQ3BCO0NBQ0YsQ0FBQztBQUVGLE1BQU1JLFlBQVksR0FBRyxDQUFDLEVBQUVELElBQUksR0FBRUUsT0FBTyxHQUFFLEdBQ3JDVCxpREFBSyxDQUFDTyxJQUFJLENBQUMsZUFDVCw4REFBQ0csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsT0FBTyxFQUFFLE1BQU07U0FBRTtrQkFDN0IsNEVBQUNGLEtBQUc7WUFBQ0MsS0FBSyxFQUFFO2dCQUFFRSxRQUFRLEVBQUUsQ0FBQztnQkFBRUMsUUFBUSxFQUFFLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxVQUFVO2FBQUU7c0JBQzNETixPQUFPOzs7OztxQkFDSjs7Ozs7aUJBQ0YsQ0FDUDtBQUVIRCxZQUFZLENBQUNRLFNBQVMsR0FBRztJQUN2QlAsT0FBTyxFQUFFVixxRUFBMkI7SUFDcENRLElBQUksRUFBRVIscUVBQTJCO0NBQ2xDLENBQUM7QUFFRlMsWUFBWSxDQUFDVyxPQUFPLEdBQUduQix5REFBYSxDQUFDO0FBRXJDLGlFQUFlUSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9jb21wb25lbnRzL1RvYXN0L2luZGV4LmpzPzgzY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7XG4gIEZhSW5mbyxcbiAgRmFDaGVjayxcbiAgRmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICBGYUJ1ZyxcbiAgRmFFeGNsYW1hdGlvbkNpcmNsZVxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlJY29uID0gKHR5cGUpID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcbiAgICAgIHJldHVybiA8RmFDaGVjayAvPjtcbiAgICBjYXNlIFwiaW5mb1wiOlxuICAgICAgcmV0dXJuIDxGYUluZm8gLz47XG4gICAgY2FzZSBcImVycm9yXCI6XG4gICAgICByZXR1cm4gPEZhRXhjbGFtYXRpb25DaXJjbGUgLz47XG4gICAgY2FzZSBcIndhcm5pbmdcIjpcbiAgICAgIHJldHVybiA8RmFFeGNsYW1hdGlvblRyaWFuZ2xlIC8+O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPEZhQnVnIC8+O1xuICB9XG59O1xuXG5jb25zdCBUb2FzdE1lc3NhZ2UgPSAoeyB0eXBlLCBtZXNzYWdlIH0pID0+XG4gIHRvYXN0W3R5cGVdKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAxLCBmb250U2l6ZTogMTUsIHBhZGRpbmc6IFwiOHB4IDEycHhcIiB9fT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuVG9hc3RNZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cblRvYXN0TWVzc2FnZS5kaXNtaXNzID0gdG9hc3QuZGlzbWlzcztcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RNZXNzYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwidG9hc3QiLCJGYUluZm8iLCJGYUNoZWNrIiwiRmFFeGNsYW1hdGlvblRyaWFuZ2xlIiwiRmFCdWciLCJGYUV4Y2xhbWF0aW9uQ2lyY2xlIiwiZGlzcGxheUljb24iLCJ0eXBlIiwiVG9hc3RNZXNzYWdlIiwibWVzc2FnZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZm9udFNpemUiLCJwYWRkaW5nIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRpc21pc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Toast/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assetss_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assetss/css/bootstrap.min.css */ \"./pages/assetss/css/bootstrap.min.css\");\n/* harmony import */ var _assetss_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assetss_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assetss_css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assetss/css/style.css */ \"./pages/assetss/css/style.css\");\n/* harmony import */ var _assetss_css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assetss_css_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assetss_css_responsive_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assetss/css/responsive.css */ \"./pages/assetss/css/responsive.css\");\n/* harmony import */ var _assetss_css_responsive_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assetss_css_responsive_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assetss_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assetss/css/font-awesome.min.css */ \"./pages/assetss/css/font-awesome.min.css\");\n/* harmony import */ var _assetss_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assetss_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Toast */ \"./components/Toast/index.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_10__, _components_Toast__WEBPACK_IMPORTED_MODULE_11__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_10__, _components_Toast__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* pages/_app.js */ \n\n\n\n\n\n// import Link from 'next/link'\n// import { Button, Card } from \"react-bootstrap\";\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{\n        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n            type,\n            message\n        });\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // window.$ = window.jquery = require('jquery');\n    // window.dt = require('datatables.net');\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_10__.ToastContainer, {\n                        position: \"top-right\",\n                        autoClose: 8000,\n                        hideProgressBar: false,\n                        newestOnTop: false,\n                        draggable: false,\n                        pauseOnVisibilityChange: true,\n                        closeOnClick: true,\n                        pauseOnHover: true\n                    }, void 0, false, {\n                        fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"https://code.jquery.com/jquery-3.5.1.js\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js\",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css\"\n            }, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"assets/js/jquery.min.js\"\n            }, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"\n            }, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"assets/js/bootstrap.min.js\"\n            }, void 0, false, {\n                fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anshuman/Desktop/2kpaid/nft-marketplace/pages/_app.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUIsR0FDakI7QUFBa0M7QUFDaUI7QUFDbkI7QUFDRjtBQUNTO0FBQ3ZDLCtCQUErQjtBQUMvQixrREFBa0Q7QUFDVDtBQUNSO0FBQ0s7QUFDTTtBQUVMO0FBQ1M7QUFDUjtBQUNPO0FBRS9DLFNBQVNTLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBRXZDLE1BQU1DLE1BQU0sR0FBR1osOENBQW9CLENBQUMsQ0FBQ2MsSUFBSSxFQUFFQyxPQUFPLEdBQUs7UUFDckRQLDhEQUFLLENBQUM7WUFBRU0sSUFBSTtZQUFFQyxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQzFCLEVBQUUsRUFBRSxDQUFDO0lBQ04sTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUFFO0lBRTFCSixnREFBUyxDQUFDLElBQU07SUFDZCxnREFBZ0Q7SUFDaEQseUNBQXlDO0tBRTFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNlLEtBQUc7OzBCQUNELDhEQUFDaEIseURBQWdCOztrQ0FDakIsOERBQUNTLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7a0NBQzVCLDhEQUFDSiwyREFBYzt3QkFDZFksUUFBUSxFQUFDLFdBQVc7d0JBQ3BCQyxTQUFTLEVBQUUsSUFBSTt3QkFDZkMsZUFBZSxFQUFFLEtBQUs7d0JBQ3RCQyxXQUFXLEVBQUUsS0FBSzt3QkFDbEJDLFNBQVMsRUFBRSxLQUFLO3dCQUNoQkMsdUJBQXVCO3dCQUN2QkMsWUFBWTt3QkFDWkMsWUFBWTs7Ozs7NEJBQ1o7Ozs7OztvQkFDaUI7MEJBRW5CLDhEQUFDQyxRQUFNO2dCQUFDYixJQUFJLEVBQUMsaUJBQWlCYztnQkFBQUEsR0FBRyxFQUFDLHlDQUF5QzswQkFBQyxHQUFDOzs7OztvQkFBUzswQkFDdEYsOERBQUNELFFBQU07Z0JBQUNiLElBQUksRUFBQyxpQkFBaUI7Z0JBQUNjLEdBQUcsRUFBQyxnRUFBZ0U7MEJBQUMsR0FBQzs7Ozs7b0JBQVM7MEJBQzlHLDhEQUFDQyxNQUFJO2dCQUFDQyxHQUFHLEVBQUMsWUFBWTtnQkFBQ0MsSUFBSSxFQUFDLGtFQUFrRTs7Ozs7b0JBQUc7MEJBRWpHLDhEQUFDSixRQUFNO2dCQUFDQyxHQUFHLEVBQUMseUJBQXlCOzs7OztvQkFBVTswQkFDL0MsOERBQUNELFFBQU07Z0JBQUNDLEdBQUcsRUFBQywyRUFBMkU7Ozs7O29CQUFVOzBCQUNqRyw4REFBQ0QsUUFBTTtnQkFBQ0MsR0FBRyxFQUFDLDRCQUE0Qjs7Ozs7b0JBQVU7Ozs7OztZQUU5QyxDQUNQO0NBQ0Y7QUFFRCxpRUFBZW5CLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xuaW1wb3J0ICogYXMgUmVhY3RBbGwgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCB7IEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCAnLi9hc3NldHNzL2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzcy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHNzL2Nzcy9yZXNwb25zaXZlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzcy9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9hc3RcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3Qgbm90aWZ5ID0gUmVhY3RBbGwudXNlQ2FsbGJhY2soKHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICB0b2FzdCh7IHR5cGUsIG1lc3NhZ2UgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHdpbmRvdy4kID0gd2luZG93LmpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgIC8vIHdpbmRvdy5kdCA9IHJlcXVpcmUoJ2RhdGF0YWJsZXMubmV0Jyk7XG4gICBcbiAgfSwgW10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgIGF1dG9DbG9zZT17ODAwMH1cbiAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICBwYXVzZU9uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgcGF1c2VPbkhvdmVyXG4gICAgICAvPlxuICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgey8qIDxNYWluZm9vdGVyLz4gKi99XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcInNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5qc1wiPiA8L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vY2RuLmRhdGF0YWJsZXMubmV0LzEuMTAuMjIvanMvanF1ZXJ5LmRhdGFUYWJsZXMubWluLmpzXCI+IDwvc2NyaXB0PlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5kYXRhdGFibGVzLm5ldC8xLjEwLjIyL2Nzcy9qcXVlcnkuZGF0YVRhYmxlcy5taW4uY3NzXCIgLz5cblxuICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvanMvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNi4wL3VtZC9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJSZWFjdEFsbCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJxdWVyeVN0cmluZyIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5vdGlmeSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIm1lc3NhZ2UiLCJyb3V0ZXIiLCJkaXYiLCJTdHJpY3RNb2RlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsImRyYWdnYWJsZSIsInBhdXNlT25WaXNpYmlsaXR5Q2hhbmdlIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwic2NyaXB0Iiwic3JjIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/assetss/css/bootstrap.min.css":
/*!*********************************************!*\
  !*** ./pages/assetss/css/bootstrap.min.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/assetss/css/font-awesome.min.css":
/*!************************************************!*\
  !*** ./pages/assetss/css/font-awesome.min.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/assetss/css/responsive.css":
/*!******************************************!*\
  !*** ./pages/assetss/css/responsive.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/assetss/css/style.css":
/*!*************************************!*\
  !*** ./pages/assetss/css/style.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

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