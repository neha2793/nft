"use strict";
(() => {
var exports = {};
exports.id = 886;
exports.ids = [886,337,698];
exports.modules = {

/***/ 1946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapMSCVideo)
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
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1402);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5569);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_10__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_4__]);
_components_Toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* pages/create-nft.js */ 












function MapMSCVideo() {
    const { 0: inputField , 1: setInputField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        Name: "",
        Description: "",
        Featured_Image: ""
    });
    const { SearchBar  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    const { 0: ManageSCList , 1: setManageSCList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: base_url , 1: BaseUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: filteredMapManageShippingContainer , 1: setFilteredMapManageShippingContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        MSCVideoList();
        var table = document.querySelector("#data-table-ID");
        table.classList.remove("table-bordered");
    }, []);
    const inputsHandler = (index)=>{
        var temp = [];
        filteredMapManageShippingContainer.forEach((value, i)=>{
            if (i == index) {
                value.SCplacement_id = "";
            }
            temp.push(value);
        });
        setFilteredMapManageShippingContainer(temp);
    };
    // Get SC Video List .....
    async function MSCVideoList() {
        const user = JSON.parse(localStorage.getItem("user"));
        let params = query_string__WEBPACK_IMPORTED_MODULE_7___default().parse(location.search);
        if (user) {
            var fd = new FormData();
            fd.append("item_id", params.id);
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://2kpaid.com/api" + "/api/get-manage-sc-list", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                const data = response.data;
                BaseUrl(response.data.base_url);
                setManageSCList(Object.values(data.manage_sc));
                setFilteredMapManageShippingContainer(Object.values(data.manage_sc));
                setTimeout(()=>{
                    Object.values(data.manage_sc).map((item, index)=>{
                        if (Boolean(item.SCplacement_id)) {
                            if (document.getElementById(index)) {
                                document.getElementById(index).checked = true;
                            }
                        }
                    });
                }, 200);
            }).catch(function(error) {
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
            });
        } else {
            router.push("/login");
        }
    }
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    // Datalist
    const columns = [
        {
            text: "#",
            dataField: "Sc_ID",
            headerStyle: {
                minWidth: "50px"
            },
            style: {
                width: "50px"
            },
            formatter: (cell, row, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "checkbox",
                            defaultChecked: Boolean(row.SCplacement_id),
                            onChange: ()=>inputsHandler(index),
                            className: "checkboxs",
                            name: "checkbox",
                            value: row.Sc_ID,
                            id: index
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: index
                        })
                    ]
                })
        },
        {
            text: "Image",
            dataField: "Featured_Image",
            formatter: (cell, row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "video_button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://2kpaid.com/api" + "/public/" + row.Featured_Image
                        })
                    })
                }),
            headerStyle: {
                minWidth: "50px"
            },
            style: {
                width: "50px"
            }
        },
        {
            text: "Name",
            dataField: "Name",
            sort: true,
            headerStyle: {
                minWidth: "150px"
            },
            style: {
                width: "150px"
            }
        },
        {
            text: "Description",
            dataField: "Description",
            sort: true,
            style: {
                width: "504px"
            },
            headerStyle: {
                minWidth: "504px"
            }
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
    // Sc Video Uploaded Here......
    async function Submit() {
        const user = JSON.parse(localStorage.getItem("user"));
        let params = query_string__WEBPACK_IMPORTED_MODULE_7___default().parse(location.search);
        var arr = [];
        jquery__WEBPACK_IMPORTED_MODULE_8__(".checkboxs").each(function(index) {
            if (jquery__WEBPACK_IMPORTED_MODULE_8__("#" + index).is(":checked")) {
                var checkedBoxes = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + index).val();
                arr.push(checkedBoxes);
            }
        });
        let fd = new FormData();
        fd.append("SC_ID", arr);
        fd.append("Item_ID", params.id);
        fd.append("Item_type", "Product");
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
            method: "post",
            url: "https://2kpaid.com/api" + "/api/map-manage-shipping-container",
            data: fd,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + user.access_token
            }
        }).then((response)=>{
            if (response.data.status == 204) {
                notify("success", "Unmap shipping container successfully");
            } else {
                notify("success", "Map shipping container successfully");
            }
        }).catch(function(error) {
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
        });
    }
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
                                        children: "Map Shipping Container"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row video_heading",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Shipping Container List"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "table-responsive datatables-design",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                                keyField: "id",
                                                data: filteredMapManageShippingContainer,
                                                columns: columns,
                                                search: true,
                                                children: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchBar, {
                                                                ...props.searchProps
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                keyField: "id",
                                                                columns: columns,
                                                                id: "data-table-ID",
                                                                classes: "dt-responsive dataTable no-footer",
                                                                data: filteredMapManageShippingContainer,
                                                                pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_10___default()(options),
                                                                noDataIndication: "No Records Found",
                                                                ...props.baseProps
                                                            })
                                                        ]
                                                    })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tablebtn text-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "btn btn-info",
                                                onClick: Submit,
                                                children: "Submit"
                                            })
                                        })
                                    ]
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

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

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

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897], () => (__webpack_exec__(1946)));
module.exports = __webpack_exports__;

})();