"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




class Mainheader extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            user: "",
            redirect: ""
        };
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        this.setState({
            user: user
        });
    }
    Logout() {
        const user = JSON.parse(localStorage.getItem("user"));
        var base_url = window.location.origin;
        console.log(base_url + "/login");
        if (user) {
            localStorage.removeItem("user");
            window.location.replace(base_url + "/login");
        }
    }
    profileTab(e) {
        e.stopPropagation();
        var nfttb = document.querySelector("#nft-tb");
        if (nfttb.classList.contains("active-tab")) {
            nfttb.classList.remove("active-tab");
        }
        var profile = document.querySelector("#profile-tb");
        if (profile.classList.contains("active-tab")) {
            profile.classList.remove("active-tab");
        } else {
            profile.classList.add("active-tab");
        }
    }
    nftTab(e) {
        e.stopPropagation();
        var profile = document.querySelector("#profile-tb");
        if (profile.classList.contains("active-tab")) {
            profile.classList.remove("active-tab");
        }
        var nfttb = document.querySelector("#nft-tb");
        if (nfttb.classList.contains("active-tab")) {
            nfttb.classList.remove("active-tab");
        } else {
            nfttb.classList.add("active-tab");
        }
    }
    CheckApproval(e) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.user.is_verified == 0 || user.user.is_verified == 2) {
            e.preventDefault();
            alert("You do not have permission to access this option!");
        }
    }
    render() {
        if (this.state.redirect) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
                to: this.state.redirect
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "header-sec",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "navbar navbar-expand-lg navbar-dark",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "navbar-brand",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "assets/images/logo.png",
                                                className: "img-fluid",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "navbar-toggler",
                                        type: "button",
                                        "data-toggle": "collapse",
                                        "data-target": "#collapsibleNavbar",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "collapse navbar-collapse",
                                        id: "collapsibleNavbar",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "navbar-nav ml-auto",
                                            id: "myNavbar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    children: this.state.user ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/login",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link",
                                                            children: "Create Your NFT"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    style: {
                                                        display: this.state.user ? "block" : "none"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "/shipping-container",
                                                        className: "nav-link",
                                                        children: "Shipping Container"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    style: {
                                                        display: this.state.user ? "block" : "none"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/all-nft",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link",
                                                            children: "Explore"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "nav-item dropdown dropdown-d",
                                                    style: {
                                                        display: this.state.user ? "block" : "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            className: "nav-link dropdown-toggle",
                                                            id: "navbardrop",
                                                            "data-toggle": "dropdown",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: this.state.user ? this.state.user.user.profile_image != null ? this.state.user.base_url + "/public/" + this.state.user.user.profile_image : "assets/images/user.png" : "assets/images/user.png",
                                                                    className: "img-fluid",
                                                                    alt: ""
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: this.state.user ? this.state.user.user.name : ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "dropdown-menu",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "dropdown-item",
                                                                    href: "#",
                                                                    children: "My Profile"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            onClick: this.profileTab,
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "#",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fa fa-user",
                                                                                            "aria-hidden": "true"
                                                                                        }),
                                                                                        "Profile info",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fa fa-angle-down",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    id: "profile-tb",
                                                                                    className: "",
                                                                                    style: {
                                                                                        display: "none"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                className: "dropdown-item",
                                                                                                href: "/view-profile",
                                                                                                children: "Profile View"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                href: "/my-profile",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    className: "dropdown-item",
                                                                                                    href: "#",
                                                                                                    children: "Profile Edit"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            onClick: (e)=>{
                                                                                this.nftTab(e);
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "#",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: "assets/images/nft.png"
                                                                                        }),
                                                                                        "My NFTs",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fa fa-angle-down",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    id: "nft-tb",
                                                                                    style: {
                                                                                        display: "none"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                className: "dropdown-item",
                                                                                                href: "/create-nft",
                                                                                                onClick: this.CheckApproval,
                                                                                                children: "Create NFT"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                className: "dropdown-item",
                                                                                                href: "/my-nft",
                                                                                                children: "Minted"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                className: "dropdown-item",
                                                                                                href: "/purchased-nfts",
                                                                                                children: "Purchased"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                className: "dropdown-item",
                                                                                href: "/wishlist",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fa fa-heart",
                                                                                        "aria-hidden": "true"
                                                                                    }),
                                                                                    "Wishlist"
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "dropdown-item",
                                                                    href: "#",
                                                                    onClick: this.Logout,
                                                                    children: "Log out"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mainheader);


/***/ })

};
;