"use strict";
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 1897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export displayIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const displayIcon = (type)=>{
    switch(type){
        case "success":
            return /*#__PURE__*/ _jsx(FaCheck, {});
        case "info":
            return /*#__PURE__*/ _jsx(FaInfo, {});
        case "error":
            return /*#__PURE__*/ _jsx(FaExclamationCircle, {});
        case "warning":
            return /*#__PURE__*/ _jsx(FaExclamationTriangle, {});
        default:
            return /*#__PURE__*/ _jsx(FaBug, {});
    }
};
const ToastMessage = ({ type , message  })=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast[type](/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            display: "flex"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                flexGrow: 1,
                fontSize: 15,
                padding: "8px 12px"
            },
            children: message
        })
    }));
ToastMessage.propTypes = {
    message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
ToastMessage.dismiss = react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;