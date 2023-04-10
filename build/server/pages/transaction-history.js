"use strict";
(() => {
var exports = {};
exports.id = 282;
exports.ids = [282,337,698];
exports.modules = {

/***/ 5077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransactionHistory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1897);
/* harmony import */ var _components_layout_mainheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9761);
/* harmony import */ var _components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4714);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1402);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5569);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_8__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_4__]);
_components_Toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* pages/create-nft.js */ 










function TransactionHistory() {
    const { SearchBar  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dataFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { 0: FilteredTransactionHostory , 1: setFilteredTransactionHostory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: Flag , 1: setFlag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        GetTransactionHistory();
        var table = document.querySelector("#data-table-ID");
        table.classList.remove("table-bordered");
    }, [
        FilteredTransactionHostory
    ]);
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    async function setData(data, USDPrice) {
        Object.values(data).forEach(async (value, index)=>{
            value.USDPrice = value.T_Amount * USDPrice;
        });
        return data;
    }
    // Get SC Video List .....
    async function GetTransactionHistory() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            try {
                var response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://2kpaid.com/api" + "/api/get-transaction-history", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user.access_token
                    }
                });
                const data = await response.data;
                const perUSDPrice = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + 1);
                var dataWithUSD = await setData(data.data, perUSDPrice.data.USD);
                console.log(dataWithUSD);
                setFilteredTransactionHostory(dataWithUSD);
            } catch (error) {
                // handle error
                console.log(error);
                if (error.response.status == 400) {
                    notify("error", error.response.data.error);
                } else if (error.response.status == 401) {
                    localStorage.removeItem("user");
                    router.push("/login");
                } else {
                    notify("error", "Something went wrong please try again!");
                }
            }
        } else {
            router.push("/login");
        }
    }
    // Datalist
    const columns = [
        {
            text: "#",
            dataField: "id",
            formatter: (cell, row, index)=>index + 1
        },
        {
            text: "Transaction ID",
            dataField: "Transaction_Token",
            sort: true,
            headerStyle: {
                minWidth: "120px"
            },
            style: {
                width: "120px"
            },
            formatter: (cell, row)=>row.Transaction_Token
        },
        {
            text: "Name",
            dataField: "name",
            sort: true,
            headerStyle: {
                minWidth: "150px"
            },
            style: {
                width: "150px"
            },
            formatter: (cell, row)=>row.name
        },
        {
            text: "Matic Price",
            dataField: "T_Amount",
            sort: true,
            headerStyle: {
                minWidth: "90px"
            },
            formatter: (cell, row)=>row.T_Amount + "Matic"
        },
        {
            text: "USD Price",
            dataField: "USDPrice",
            sort: true,
            headerStyle: {
                minWidth: "90px"
            },
            formatter: (cell, row)=>row.USDPrice ? "$ " + row.USDPrice.toFixed(7) : "Not Found"
        },
        {
            text: "Status",
            dataField: "Status",
            sort: true,
            formatter: (cell, row)=>row.Status
        }, 
    ];
    const customTotal = (from, to, size)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "react-bootstrap-table-pagination-total",
            children: [
                "Showing ",
                from,
                " to ",
                to,
                " of ",
                size,
                " Results"
            ]
        });
    const options = {
        paginationSize: 4,
        pageStartIndex: 1,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: "First",
        prePageText: "Back",
        nextPageText: "Next",
        lastPageText: "Last",
        nextPageTitle: "First page",
        prePageTitle: "Pre page",
        firstPageTitle: "Next page",
        lastPageTitle: "Last page",
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainheader__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "login-page",
                style: {
                    background: "url(" + "assets/images/loginbg.jpg" + ")"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "innerbg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Transaction History"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row video_heading",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Transaction History list"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6 text-right"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "table-responsive datatables-design",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                            keyField: "id",
                                            data: FilteredTransactionHostory,
                                            columns: columns,
                                            search: true,
                                            children: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchBar, {
                                                            ...props.searchProps
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            keyField: "id",
                                                            id: "data-table-ID",
                                                            classes: "dt-responsive dataTable no-footer",
                                                            columns: columns,
                                                            data: FilteredTransactionHostory,
                                                            pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_8___default()(options),
                                                            noDataIndication: "No Records Found",
                                                            ...props.baseProps
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1402:
/***/ ((module) => {

module.exports = require("react-bootstrap-table-next");

/***/ }),

/***/ 5569:
/***/ ((module) => {

module.exports = require("react-bootstrap-table2-paginator");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897], () => (__webpack_exec__(5077)));
module.exports = __webpack_exports__;

})();