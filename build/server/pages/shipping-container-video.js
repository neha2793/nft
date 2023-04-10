"use strict";
(() => {
var exports = {};
exports.id = 377;
exports.ids = [377,337,698];
exports.modules = {

/***/ 2098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SCVideo)
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










function SCVideo() {
    const { 0: inputField , 1: setInputField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        description: "",
        video: "",
        redirection_link: ""
    });
    const { SearchBar  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    const { 0: file , 1: setFileObject  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: video , 1: setVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: videoList , 1: setSCVideoList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: flag , 1: setFlag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: Divflag , 1: setDivFlag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: base_url , 1: BaseUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: html , 1: Sethtml  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: fileType , 1: SetFileType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("video");
    const { 0: filteredShippingContainer , 1: setFilteredShippingContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        SCVideoList();
        var element = document.querySelector("#data-table-ID");
        element.classList.remove("table-bordered");
    }, []);
    // Get SC Video List .....
    function SCVideoList() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://2kpaid.com/api" + "/api/get-sc-video", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then(async (response)=>{
                const data = response.data;
                BaseUrl(response.data.base_url);
                setSCVideoList(Object.values(data.sc_videos));
                setFilteredShippingContainer(Object.values(data.sc_videos));
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
    const columns = [
        {
            text: "#",
            dataField: "id",
            formatter: (cell, row, index)=>index + 1
        },
        {
            text: "Video",
            sort: true,
            dataField: "video",
            headerStyle: {
                minWidth: "50px"
            },
            style: {
                width: "50px"
            },
            formatter: (cell, row)=>row.type == "Video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "video_button",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fa fa-play-circle",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "button",
                                onClick: popUpClick,
                                value: "",
                                className: "fa fa-play-circle",
                                name: base_url + "/public/" + row.video
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                    width: "320",
                                    height: "240",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            src: row.video ? "https://2kpaid.com/api" + "/public/" + row.video : "",
                                            type: "video/mp4"
                                        }),
                                        "Your browser does not support the video tag."
                                    ]
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "video_button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: row.video ? base_url + "/" + row.video : "",
                        className: "zoom"
                    })
                })
        },
        {
            text: "Name",
            headerStyle: {
                minWidth: "150px"
            },
            style: {
                width: "150px"
            },
            sort: true,
            dataField: "name",
            formatter: (cell, row)=>row.name
        },
        {
            text: "Description",
            sort: true,
            dataField: "description",
            formatter: (cell, row)=>row.description,
            style: {
                width: "504px"
            },
            headerStyle: {
                minWidth: "504px"
            }
        },
        {
            text: "Action",
            classes: "icon-design-td",
            dataField: "SCplacement_id",
            headerStyle: {
                minWidth: "190px"
            },
            style: {
                width: "190px"
            },
            formatter: (cell, row)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "icon-design icon-delete",
                                id: row.id,
                                onClick: DeleteSC,
                                value: row.id,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-trash",
                                    "aria-hidden": "true"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-info",
                                id: row.id,
                                onClick: (e)=>{
                                    router.push(`/map-shipping-container?id=${row.id}`);
                                },
                                value: row.id,
                                children: "Map Container"
                            })
                        })
                    ]
                })
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
        paginationTotalRenderer: customTotal
    };
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    // Sc Video Input handle Here......
    const inputsHandler = (e, resolve)=>{
        const { name , value  } = e.target;
        if (name == "video") {
            if (e.target.files[0]) {
                if (e.target.files[0].type.split("/")[0] == "video") {
                    SetFileType("video");
                } else {
                    SetFileType("image");
                }
                setFileObject(URL.createObjectURL(e.target.files[0]));
                setVideo(e.target.files[0]);
            }
        } else {
            setInputField((prevState)=>({
                    ...prevState,
                    [name]: value
                }));
        }
        setFlag(true);
    };
    // Sc Video Uploaded Here......
    async function submitButton() {
        const user = JSON.parse(localStorage.getItem("user"));
        let fd = new FormData();
        fd.append("name", inputField.name);
        fd.append("video", video);
        fd.append("description", inputField.description);
        fd.append("redirection_link", inputField.redirection_link);
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
            method: "post",
            url: "https://2kpaid.com/api" + "/api/sc-video",
            data: fd,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + user.access_token
            }
        }).then((response)=>{
            notify("success", "Shipping container video added successfully!");
            setInputField({
                name: "",
                description: "",
                video: "",
                redirection_link: ""
            });
            document.getElementById("name").value = "";
            document.getElementById("comment").value = "";
            document.getElementById("profilepreview").src = "";
            setFlag(false);
            setDivFlag(false);
            SCVideoList();
            SetFileType("video");
            setFileObject("");
            setVideo("");
        }).catch(function(error) {
            // handle error
            console.log(error);
            if (error.response.status == 400) {
                notify("error", error.response.data.error);
            } else if (error.response.status == 401) {
                localStorage.removeItem("user");
                router.push("/login");
            } else if (error.response.status == 413) {
                notify("error", "File size too large!");
            } else {
                notify("error", "Something went wrong please try again!");
            }
        });
    }
    // SC Video Delete.....
    async function DeleteSC(e) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (confirm("Are you sure?")) {
            let fd = new FormData();
            fd.append("sc_id", e.currentTarget.value);
            axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: "post",
                url: "https://2kpaid.com/api" + "/api/sc-video-delete",
                data: fd,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                notify("success", "Shipping container video deleted successfully!");
                setSCVideoList("");
                SCVideoList();
            }).catch(function(error) {
                // handle error
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
    }
    function divHandle(e) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.user.is_verified == 1 && user) {
            setDivFlag(true);
        } else {
            e.preventDefault();
            alert("You do not have permission to access this option!");
        }
    }
    function closeDiv() {
        setDivFlag(false);
    }
    // Popup close ....
    function close() {
        setShow(false);
        Sethtml("");
    }
    function popUpClick(e) {
        setShow(true);
        Sethtml(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                width: "320",
                height: "240",
                src: e.currentTarget.name,
                controls: true,
                autoPlay: true
            })
        }));
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
                                        children: "Shipping Container Video"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        style: {
                            display: Divflag ? "block" : "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "login-page-design",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Add Shipping Container video"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "loginform",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "close",
                                                    "data-dismiss": "modal",
                                                    onClick: closeDiv,
                                                    children: "Back"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "box",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "file",
                                                            onChange: inputsHandler,
                                                            name: "video",
                                                            id: "file-5",
                                                            className: "inputfile inputfile-4",
                                                            "data-multiple-caption": "{count} files selected",
                                                            multiple: true
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "file-5",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: fileType == "video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        id: "profilepreview",
                                                                        "data-id": flag,
                                                                        "data-value": file,
                                                                        "data-sc": video,
                                                                        src: flag ? file : video
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview",
                                                                        "data-id": flag,
                                                                        "data-value": file,
                                                                        "data-sc": video,
                                                                        src: flag ? file : video
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        height: "24px",
                                                                        viewBox: "0 0 24 24",
                                                                        width: "24px",
                                                                        fill: "#000000",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M0 0h24v24H0V0z",
                                                                                fill: "none"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        onChange: inputsHandler,
                                                        placeholder: "Name",
                                                        id: "name",
                                                        name: "name"
                                                    })
                                                }),
                                                fileType == "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            onChange: inputsHandler,
                                                            placeholder: "Redirection link",
                                                            id: "redirection_link",
                                                            name: "redirection_link"
                                                        })
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        className: "form-control",
                                                        rows: "5",
                                                        onChange: inputsHandler,
                                                        placeholder: "Description",
                                                        name: "description",
                                                        id: "comment"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group loginbtn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "button",
                                                        className: "btn btn-info",
                                                        onClick: submitButton,
                                                        value: "Submit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        style: {
                            display: Divflag ? "none" : "block"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row video_heading",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Shipping Container Video List"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6 text-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "btn btn-info add_sc",
                                            onClick: divHandle,
                                            children: "Add SC Video"
                                        })
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
                                            data: filteredShippingContainer,
                                            columns: columns,
                                            search: true,
                                            children: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchBar, {
                                                            ...props.searchProps
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            keyField: "dataField",
                                                            columns: columns,
                                                            data: filteredShippingContainer,
                                                            id: "data-table-ID",
                                                            tabIndexCell: true,
                                                            responsive: true,
                                                            defaultSortDirection: "asc",
                                                            classes: "dt-responsive dataTable no-footer",
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "modal-row",
                        className: "modal",
                        style: {
                            display: show ? "block" : "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "modal-dialog",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "modal-header",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "modal-title",
                                                children: "Shipping Container Video"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "close",
                                                "data-dismiss": "modal",
                                                onClick: close,
                                                children: "\xd7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "modal-body",
                                        children: html
                                    })
                                ]
                            })
                        })
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897], () => (__webpack_exec__(2098)));
module.exports = __webpack_exports__;

})();