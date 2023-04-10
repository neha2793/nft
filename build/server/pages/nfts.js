"use strict";
(() => {
var exports = {};
exports.id = 353;
exports.ids = [353,337,698];
exports.modules = {

/***/ 4542:
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
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1897);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_mainheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9761);
/* harmony import */ var _components_layout_mainfooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4714);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1838);
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_3__]);
_components_Toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* pages/index.js */ 












function Home() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: nfts , 1: setNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: html , 1: Sethtml  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: baseURL , 1: setBaseUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: rndmNumber , 1: setRndmNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const checkedArr = [];
    const options = [
        {
            value: "by_user",
            label: "By User"
        },
        {
            value: "by_custom",
            label: "By Custom"
        }, 
    ];
    var wltAdr = [];
    const { 0: loadingState , 1: setLoadingState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("not-loaded");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadNFTs();
    }, []);
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    async function users(e) {
        if (e.value == "by_user") {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                var formData = new FormData();
                formData.append("by_user", e.value);
                // const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-users', formData);
                axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://2kpaid.com/api" + "/api/get-users", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user.access_token
                    }
                }).then((response)=>{
                    const data = response.data.user;
                    setShow(true);
                    Sethtml(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "nft_users",
                            children: data.map((user, key)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "abc",
                                            id: user.id,
                                            value: user.id,
                                            name: "ids[]",
                                            "data-id": user.id,
                                            onChange: handleChange,
                                            type: "checkbox"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: user.id,
                                            children: [
                                                " ",
                                                user.name
                                            ]
                                        })
                                    ]
                                }, key);
                            })
                        })
                    }));
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
    }
    function close() {
        setShow(false);
    }
    async function handleChange(event) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (event.target.checked) {
            checkedArr.push(event.target.value);
            var fd = new FormData();
            fd.append("ids[]", checkedArr);
            // setLoading(true)
            axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://2kpaid.com/api" + "/api/get-user-nft-collections", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                wltAdr.push(event.target.value);
                loadNFTs(response.data.userNFTCollection, response.data.wallet_address, response.data.flag);
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
        } else {
            let index = checkedArr.findIndex((a)=>a === event.target.value);
            checkedArr.splice(index, 1);
            var fd = new FormData();
            fd.append("ids[]", checkedArr);
            // const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/get-user-nft-collections',fd);
            axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://2kpaid.com/api" + "/api/get-user-nft-collections", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                if (checkedArr.length > 0) {
                    wltAdr.push(event.target.value);
                    loadNFTs(response.data.userNFTCollection, response.data.wallet_address, response.data.flag);
                } else {
                    wltAdr.push(event.target.value);
                    loadNFTs(response.data.userNFTCollection, response.data.wallet_address);
                }
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
    ;
    async function loadNFTs(nftCollection, wallet_address, flag) {
        /* create a generic provider and query for unsold market items */ // Check auth
        setLoading(true);
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_11__/* .marketplaceAddress */ .I, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_10__/* .abi */ .Mt, provider);
        const data = await contract.fetchMarketItems();
        var wallet_addresses = [];
        var wallet_response = "";
        const itemsss = await Promise.all(data.map(async (i, index)=>{
            wallet_addresses.push(i.seller);
        }));
        /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */ // For user image
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            let fd = new FormData;
            fd.append("wallet_address", wallet_addresses);
            wallet_response = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://2kpaid.com/api" + "/api/nft-profile-image", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            });
            const userNFT = wallet_response.data.user_nft.reverse();
            const reponsePriceExchange = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + 1);
            setBaseUrl(wallet_response.data.base_url);
            if (nftCollection != undefined && flag == "backend") {
                if (nftCollection.length > 0) {
                    const items = await Promise.all(nftCollection.map(async (i, index)=>{
                        if (wallet_address.includes(i.seller)) {
                            console.log(i);
                            var profileImage = "";
                            wallet_response.data.profilesData.forEach((value)=>{
                                if (value.wallet_address == i.seller) {
                                    profileImage = value.profile_image;
                                }
                            });
                            const tokenUri = await contract.tokenURI(i.tokenID);
                            const USDPrice = i.price * reponsePriceExchange.data.USD;
                            if (reponsePriceExchange) {
                                if (tokenUri.split("/")[2] == "infura-ipfs.io") {
                                    var getwayURL = "https://gateway.moralisipfs.com/ipfs/" + tokenUri.split("/")[4];
                                    const meta = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(getwayURL);
                                    let price = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatUnits(i.string_price, "ether");
                                    console.log(i.string_price);
                                    let item = {
                                        price,
                                        DollarPrice: USDPrice,
                                        tokenId: i.tokenID,
                                        seller: i.seller,
                                        image: meta.data.image,
                                        name: meta.data.name,
                                        description: meta.data.description,
                                        pImage: profileImage,
                                        TokenID: i.tokenID,
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
                } else {
                    console.log("No NFT");
                    setNfts([]);
                    setLoadingState("loaded");
                }
            } else {
                console.log("Without filter");
                const items1 = await Promise.all(userNFT.map(async (i, index)=>{
                    var profileImage = "";
                    wallet_response.data.profilesData.forEach((value)=>{
                        if (value.wallet_address == i.seller) {
                            profileImage = value.profile_image;
                        }
                    });
                    const tokenUri = await contract.tokenURI(i.tokenID);
                    const USDPrice = i.price * reponsePriceExchange.data.USD;
                    // const reponsePriceExchange = await axios.get('https://api.coinconvert.net/convert/matic/usd?amount='+i.price)
                    if (reponsePriceExchange) {
                        if (tokenUri.split("/")[2] == "infura-ipfs.io") {
                            var getwayURL = "https://ipfs.io/ipfs/" + tokenUri.split("/")[4];
                            const meta = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(getwayURL);
                            if (meta.data != undefined) {
                                let price = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatUnits(i.string_price, "ether");
                                let item = {
                                    price,
                                    DollarPrice: USDPrice,
                                    tokenId: i.tokenID,
                                    seller: i.seller,
                                    image: meta.data.image,
                                    name: meta.data.name,
                                    description: meta.data.description,
                                    pImage: profileImage,
                                    TokenID: i.tokenID,
                                    wishlist: i.wishlist,
                                    wishlist_id: i.wishlist_id ? i.wishlist_id : "",
                                    id: i.id
                                };
                                return item;
                            }
                        }
                    }
                }));
                setNfts(items1);
                setLoading(false);
                setLoadingState("loaded");
            }
        } else {
            router.push("/login");
        }
    }
    async function buyNft(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */ console.log(nft);
        const user = JSON.parse(localStorage.getItem("user"));
        var temp = "logout";
        var response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://2kpaid.com/api" + "/api/check-auth", {
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
            const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();
            const connection = await web3Modal.connect();
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_11__/* .marketplaceAddress */ .I, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_10__/* .abi */ .Mt, signer);
            /* user will be prompted to pay the asking proces to complete the transaction */ const price = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.parseUnits(nft.price, "ether");
            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price
            });
            await transaction.wait();
            let fd = new FormData();
            fd.append("name", nft.name);
            fd.append("price", nft.price);
            fd.append("string_price", nft.string_price);
            fd.append("description", nft.description);
            fd.append("image", nft.image);
            fd.append("tokenID", nft.tokenId);
            fd.append("hash_token", transaction.hash);
            fd.append("from_wallet", transaction.from);
            fd.append("gasLimit", JSON.stringify(transaction.gasLimit));
            fd.append("gasPrice", JSON.stringify(transaction.gasPrice));
            fd.append("maxFeePerGas", JSON.stringify(transaction.maxFeePerGas));
            fd.append("maxPriorityFeePerGas", JSON.stringify(transaction.maxPriorityFeePerGas));
            axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://2kpaid.com/api" + "/api/user-buy-nft", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                notify("success", "Buy NFT successfully");
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
    async function wishlist(wishlist_id, product_id) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (Boolean(wishlist_id)) {
            var fd = new FormData();
            fd.append("wishlist_id", wishlist_id);
            axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://2kpaid.com/api" + "/api/remove-wishlist", fd, {
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
            axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://2kpaid.com/api" + "/api/add-wishlist", fd, {
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "heading",
                                        children: [
                                            "All NFTs",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "divider"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "select-nfts",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            options: options,
                                            onChange: users,
                                            id: "long-value-select",
                                            instanceId: "long-value-select"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row myfvtrow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "py-10 px-20 text-3xl",
                                    children: "No items in marketplace"
                                })
                            })
                        })
                    ]
                })
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
                                        children: "Users"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "heading",
                                        children: [
                                            "All NFTs",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "divider"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "select-nfts",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            options: options,
                                            onChange: users,
                                            id: "long-value-select",
                                            instanceId: "long-value-select"
                                        })
                                    })
                                })
                            ]
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
                                                            className: "counter",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "717 : 6 : 32 : 34"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "nftbox-desc",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "nftbox-desc-img",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "nftbox-user",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: nft.pImage ? baseURL + "/" + nft.pImage : "assets/images/user.png",
                                                                            className: "img-fluid",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        onClick: ()=>wishlist(nft.wishlist_id, nft.id),
                                                                        id: nft.wishlist_id,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: nft.wishlist == 1 ? "fa fa-heart-o active" : "fa fa-heart-o",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    })
                                                                })
                                                            ]
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
                                                                nft.DollarPrice.toFixed(7)
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn btn-info",
                                                            onClick: ()=>buyNft(nft),
                                                            "data-id": nft.TokenID,
                                                            children: "Buy"
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
                                        children: "Users"
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

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897,702], () => (__webpack_exec__(4542)));
module.exports = __webpack_exports__;

})();