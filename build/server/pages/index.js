"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,337,698];
exports.modules = {

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1897);
/* harmony import */ var _components_layout_mainheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9761);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1838);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7577);
/* harmony import */ var _components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_6__]);
_components_Toast__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* pages/index.js */ 












function Home() {
    const { 0: nfts , 1: setNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: topSeller , 1: setTopSeller  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: users , 1: User  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: baseURL , 1: setBaseUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: rndmNumber , 1: setRndmNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loadingState , 1: setLoadingState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("not-loaded");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadNFTs();
    // NFTtransfer()
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    async function loadNFTs() {
        User(JSON.parse(localStorage.getItem("user")));
        // Fatch Top Seller
        const top_seller = await axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://2kpaid.com/api" + "/api/get-top-seller", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        setTopSeller(top_seller.data.data);
        /* create a generic provider and query for unsold market items */ const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_11__/* .marketplaceAddress */ .I, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__/* .abi */ .Mt, provider);
        const data = await contract.fetchMarketItems();
        // fatch latest nfts
        var wallet_addresses = [];
        var wallet_response = "";
        const itemsss = await Promise.all(data.map(async (i, index)=>{
            wallet_addresses.push(i.seller);
        }));
        let fd = new FormData;
        fd.append("wallet_address", wallet_addresses);
        wallet_response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://2kpaid.com/api" + "/api/nft-profile-image-list", fd, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const userNFT = wallet_response.data.user_nft.reverse();
        setBaseUrl(wallet_response.data.base_url);
        /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */ const reponsePriceExchange = await axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + 1);
        const items = await Promise.all(userNFT.map(async (i)=>{
            var profileImage = "";
            var user_name = "";
            wallet_response.data.profilesData.forEach((value)=>{
                if (value.wallet_address == i.seller) {
                    profileImage = value.profile_image, user_name = value.name;
                }
            });
            const tokenUri = await contract.tokenURI(i.tokenID);
            if (reponsePriceExchange) {
                if (tokenUri.split("/")[2] == "infura-ipfs.io") {
                    var getwayURL = "https://gateway.moralisipfs.com/ipfs/" + tokenUri.split("/")[4];
                    const meta = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(getwayURL);
                    const USDPrice = i.price * reponsePriceExchange.data.USD;
                    if (meta.data != undefined) {
                        let price = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatUnits(i.string_price, "ether");
                        let item = {
                            price,
                            DollarPrice: USDPrice,
                            tokenID: i.tokenID,
                            seller: i.seller,
                            string_price: i.string_price,
                            owner: i.owner,
                            image: meta.data.image,
                            name: meta.data.name,
                            description: meta.data.description,
                            pImage: profileImage,
                            wishlist: i.wishlist,
                            Uname: user_name,
                            wishlist_id: i.wishlist_id ? i.wishlist_id : "",
                            id: i.id
                        };
                        console.log(item);
                        return item;
                    }
                }
            }
        }));
        setNfts(items);
        setLoadingState("loaded");
    }
    async function buyNft(nft) {
        const user = JSON.parse(localStorage.getItem("user"));
        var product_id = "";
        if (user) {
            var temp = "logout";
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
                document.getElementById("button_disabled" + nft.id).innerHTML = "Processing...";
                document.getElementById("button_disabled" + nft.id).disabled = true;
                /* needs the user to sign the transaction, so will use Web3Provider and sign it */ var price = "";
                var transaction = "";
                try {
                    const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();
                    const connection = await web3Modal.connect();
                    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(connection);
                    const signer = provider.getSigner();
                    const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_11__/* .marketplaceAddress */ .I, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__/* .abi */ .Mt, signer);
                    /* user will be prompted to pay the asking proces to complete the transaction */ price = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.parseUnits(nft.price, "ether");
                    transaction = await contract.createMarketSale(nft.tokenID, {
                        value: price
                    });
                    await transaction.wait();
                } catch (error) {
                    if (error.code == "-32603") {
                        notify("error", "Insufficient funds for gas * price + value!");
                        document.getElementById("button_disabled" + nft.id).innerHTML = "Buy";
                        document.getElementById("button_disabled" + nft.id).disabled = false;
                    }
                    if (error.code == "ACTION_REJECTED") {
                        notify("error", "Transaction rejected!");
                        document.getElementById("button_disabled" + nft.id).innerHTML = "Buy";
                        document.getElementById("button_disabled" + nft.id).disabled = false;
                    }
                }
                if (transaction) {
                    let fd = new FormData();
                    fd.append("product_id", nft.id);
                    fd.append("name", nft.name);
                    fd.append("price", nft.price);
                    fd.append("string_price", nft.string_price);
                    fd.append("description", nft.description);
                    fd.append("image", nft.image);
                    fd.append("tokenID", nft.tokenID);
                    fd.append("hash_token", transaction.hash);
                    fd.append("from_wallet", transaction.from);
                    fd.append("gasLimit", JSON.stringify(transaction.gasLimit));
                    fd.append("gasPrice", JSON.stringify(transaction.gasPrice));
                    fd.append("maxFeePerGas", JSON.stringify(transaction.maxFeePerGas));
                    fd.append("maxPriorityFeePerGas", JSON.stringify(transaction.maxPriorityFeePerGas));
                    axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://2kpaid.com/api" + "/api/user-buy-nft", fd, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + user.access_token
                        }
                    }).then((response)=>{
                        notify("success", "Buy NFT successfully!");
                        const data = response.data;
                        product_id = response.data.userNFT.id;
                        document.getElementById("button_disabled" + nft.id).innerHTML = "Buy";
                        document.getElementById("button_disabled" + nft.id).disabled = false;
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
                    let transaction_detail = new FormData();
                    transaction_detail.append("product_id", nft.id);
                    transaction_detail.append("Transaction_Token", "ABC001567IUOP");
                    transaction_detail.append("Price", nft.price);
                    transaction_detail.append("Quantity", 1);
                    axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://2kpaid.com/api" + "/api/order-nft", transaction_detail, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + user.access_token
                        }
                    }).then((response)=>{
                        const data = response.data;
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
                    loadNFTs();
                }
            }
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
    // if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainheader__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "mainbanner",
                style: {
                    background: "url(" + "/assets/images/mainbg.jpg" + ")"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mainbanner-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            children: [
                                                "Mint, ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Buy"
                                                }),
                                                ", and ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Sell"
                                                }),
                                                " Your NFT's",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "divider"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "2kPAID is the biggest Blockchain based NFT marketplace"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "btn-sec",
                                            children: [
                                                users ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/create-nft",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btn btn-info b-btn",
                                                        children: "Create NFT"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/login",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btn btn-info b-btn",
                                                        children: "Create NFT"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/signup",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btn btn-info",
                                                        children: "Sign Up"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mainbanner-right",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mainbanner-top",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mainbanner-a",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/images/mainimg1.jpg",
                                                    className: "img-fluid",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mainbanner-b",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/images/mainimg2.jpg",
                                                    className: "img-fluid",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "uk-position-right uk-opacity-30",
                                                viewBox: "0 0 200 200",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fill: "#F796FF",
                                                    d: "M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z",
                                                    transform: "translate(100 100)"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
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
                                        "Latest NFTs",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "divider"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row myfvtrow",
                            children: [
                                loadingState === "not-loaded" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-sm-6 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Loading"
                                    })
                                }) : "",
                                loadingState === "loaded" && !nfts.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-sm-6 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "No nfts found"
                                    })
                                }) : nfts.reverse().slice(0, 5).map((nft, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "nftbox-desc-img",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "nftbox-user",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: nft.pImage ? baseURL + "/public/" + nft.pImage : "assets/images/user.png",
                                                                            className: "img-fluid",
                                                                            alt: ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: nft.Uname.length > 9 ? nft.Uname.substring(0, 9) + "..." : nft.Uname
                                                                    })
                                                                ]
                                                            })
                                                        }),
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
                                                                nft.DollarPrice.toFixed(7),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "like-design",
                                                                    style: {
                                                                        display: users ? "block" : "none"
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        onClick: ()=>wishlist(nft.wishlist_id, nft.id),
                                                                        id: nft.wishlist_id,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: nft.wishlist == 1 ? "fa fa-heart active" : "fa fa-heart-o",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn btn-info",
                                                            id: "button_disabled" + nft.id,
                                                            style: {
                                                                display: users ? "block" : "none"
                                                            },
                                                            onClick: ()=>buyNft(nft),
                                                            children: "Buy"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i))
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "topcollections",
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
                                        "Top Collections",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "divider"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "collection_top",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "collection_row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "collection_item_img",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/images/nft4.png",
                                                                        className: "img-fluid",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "collection-desc",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                children: "CinnaRolls"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                children: "10 Collection"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "collection_item_img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "assets/images/nft3.png",
                                                                className: "img-fluid",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "collection_item_img",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/images/nft2.png",
                                                                        className: "img-fluid",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "collection-desc",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                children: "Pans"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                children: "30 Collection"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "collection_item_img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "assets/images/nft1.png",
                                                                className: "img-fluid",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "collection_row collection_row2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "collection_item_img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "assets/images/nft5.png",
                                                                className: "img-fluid",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "collection_item_img",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/images/nft6.png",
                                                                        className: "img-fluid",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "collection-desc",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                children: "Paper Planes"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                children: "20 Collection"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "collection_item_img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "assets/images/nft7.png",
                                                                className: "img-fluid",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "collection_item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "collection_item_in",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "collection_item_img",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/images/nft8.png",
                                                                        className: "img-fluid",
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "collection-desc",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                children: "Lightning Gods"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                children: "8 Collection"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "topcollections-desc",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "btn btn-info",
                                            children: "all Collection"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "top-seller",
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
                                        "Top Sellers",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "divider"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: topSeller.length > 0 ? topSeller.map((seller, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "top-sellerbox",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "top-sellerimg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: seller.profile,
                                                        className: "img-fluid",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: seller.full_name
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: seller.total ? seller.total + " nfts" : "0 nfts"
                                            })
                                        ]
                                    })
                                }, i)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: {
                                        fontSize: "1.7em"
                                    },
                                    children: "Seller not found"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_10__["default"], {})
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897,702], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();