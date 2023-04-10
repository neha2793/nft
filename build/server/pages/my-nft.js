"use strict";
(() => {
var exports = {};
exports.id = 806;
exports.ids = [806,337,698];
exports.modules = {

/***/ 8818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatorDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1897);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1838);
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7577);
/* harmony import */ var _components_layout_mainheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9761);
/* harmony import */ var _components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4714);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_5__]);
_components_Toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* pages/dashboard.js */ 











function CreatorDashboard() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: nfts , 1: setNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loadingState , 1: setLoadingState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("not-loaded");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: rndmNumber , 1: setRndmNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadNFTs();
    }, []);
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    async function loadNFTs() {
        const user = JSON.parse(localStorage.getItem("user"));
        var temp = "logout";
        if (user) {
            var response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://2kpaid.com/api" + "/api/check-auth", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                temp = "login";
            }).catch(function(error) {
                // handle error
                if (error.response.status == 400) {
                    notify("error", error.response.data.error);
                } else if (error.response.status == 401) {
                    temp = "logout";
                    localStorage.removeItem("user");
                    router.push("/login");
                } else {
                    notify("error", "Something went wrong please try again!");
                }
            });
            if (temp == "login") {
                const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({
                    network: "mainnet",
                    cacheProvider: true
                });
                if (window.ethereum) {
                    await window.ethereum.request({
                        method: "eth_requestAccounts"
                    }).then((res)=>{
                    // Return the address of the wallet
                    });
                } else {
                    alert("install metamask extension!!");
                }
                const connection = await web3Modal.connect();
                setLoading(true);
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_10__/* .marketplaceAddress */ .I, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__/* .abi */ .Mt, signer);
                const data = await contract.fetchItemsListed();
                var wallet_response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://2kpaid.com/api" + "/api/get-users-nft", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user.access_token
                    }
                });
                const userNFT = wallet_response.data.user_nft.reverse();
                const reponsePriceExchange = await axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + 1);
                if (wallet_response.data) {
                    const items = await Promise.all(userNFT.map(async (i, index)=>{
                        const tokenUri = await contract.tokenURI(i.tokenID);
                        if (reponsePriceExchange) {
                            if (tokenUri.split("/")[2] == "infura-ipfs.io") {
                                var getwayURL = "https://gateway.moralisipfs.com/ipfs/" + tokenUri.split("/")[4];
                                const meta = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(getwayURL);
                                const USDPrice = i.price * reponsePriceExchange.data.USD;
                                if (meta.data != undefined) {
                                    const priceFormat = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.parseUnits(i.price, "ether");
                                    let price = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatUnits(priceFormat, "ether");
                                    let item = {
                                        price,
                                        DollarPrice: USDPrice,
                                        tokenId: i.tokenID,
                                        seller: i.seller,
                                        owner: i.owner,
                                        image: meta.data.image,
                                        name: meta.data.name,
                                        item_id: wallet_response.data.user_nft ? wallet_response.data.user_nft[index].id : "",
                                        wishlist: i.wishlist,
                                        wishlist_id: i.wishlist_id ? i.wishlist_id : "",
                                        id: i.id
                                    };
                                    return item;
                                }
                            }
                        }
                    }));
                    setNfts(items);
                    setLoading(false);
                    setLoadingState("loaded");
                }
            }
        } else {
            router.push("/login");
        }
    }
    async function wishlist(wishlist_id, product_id) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (Boolean(wishlist_id)) {
            var fd = new FormData();
            fd.append("wishlist_id", wishlist_id);
            axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://2kpaid.com/api" + "/api/remove-wishlist", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                nfts.forEach((nft, index)=>{
                    if (Boolean(wishlist_id)) {
                        if (nft.wishlist_id == wishlist_id) {
                            // console.log(wishlist_id); 
                            nft.wishlist_id = "";
                            nft.wishlist = 0;
                        }
                        nfts[index] = nft;
                    }
                });
                setRndmNumber(Math.random());
                setNfts(nfts);
                notify("success", "Wishlist removed successfully!");
            }).catch(function(error) {
                // handle error
                if (error.response) {
                    if (error.response.status == 400) {
                        notify("error", error.response.data.error);
                    } else if (error.response.status == 401) {
                        localStorage.removeItem("user");
                        router.push("/login");
                    } else {
                        notify("error", "Something went wrong please try again!");
                    }
                } else {
                    console.log(error);
                }
            });
        } else {
            var fd = new FormData();
            fd.append("product_id", product_id);
            axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://2kpaid.com/api" + "/api/add-wishlist", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                nfts.forEach((nft, index)=>{
                    if (Boolean(product_id)) {
                        if (nft.id == product_id) {
                            // console.log(wishlist_id); 
                            nft.wishlist_id = response.data.wishlist.id;
                            nft.wishlist = 1;
                        }
                        nfts[index] = nft;
                    }
                });
                console.log(nfts);
                setRndmNumber(Math.random());
                setNfts(nfts);
                notify("success", "Wishlist added successfully!");
            }).catch(function(error) {
                // handle error
                if (error.response) {
                    if (error.response.status == 400) {
                        notify("error", error.response.data.error);
                    } else if (error.response.status == 401) {
                        localStorage.removeItem("user");
                        router.push("/login");
                    } else {
                        notify("error", "Something went wrong please try again!");
                    }
                } else {
                    console.log(error);
                }
            });
        }
    }
    if (loadingState === "loaded" && !nfts.length) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainheader__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "latestnft",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "heading",
                                    children: [
                                        "My NFT",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "divider"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row myfvtrow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "py-10 px-20 text-3xl",
                                    children: "No nfts listed"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainheader__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "latestnft",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "heading",
                                    children: [
                                        "My NFTs",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "divider"
                                        })
                                    ]
                                })
                            })
                        }),
                        loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "loader-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "spinner"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row myfvtrow",
                                children: nfts.map((nft, i)=>nft ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-sm-6 col-md-4 col-lg-3 myfvt",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "nftbox",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "nftbox-img",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: nft.image,
                                                                className: "img-fluid",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "counter"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "nftbox-desc",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: nft.name
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                            className: "rate",
                                                            children: [
                                                                "$ ",
                                                                nft.DollarPrice.toFixed(7)
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn btn-info",
                                                            onClick: (e)=>{
                                                                router.push(`/map-manage-shipping-container?id=${nft.item_id}`);
                                                            },
                                                            value: nft.item_id,
                                                            children: "Map Container"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i) : "")
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_8__["default"], {})
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

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

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

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897,702], () => (__webpack_exec__(8818)));
module.exports = __webpack_exports__;

})();