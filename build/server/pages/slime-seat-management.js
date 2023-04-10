"use strict";
(() => {
var exports = {};
exports.id = 396;
exports.ids = [396,337,698];
exports.modules = {

/***/ 4947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlimeSeatManagement)
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1402);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5569);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_9__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1838);
/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_4__]);
_components_Toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* pages/create-nft.js */ 















function SlimeSeatManagement() {
    const { 0: inputField , 1: setInputField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        Description: "",
        Price: "",
        S_ID: ""
    });
    const { 0: ButtonDisabled , 1: setButtonDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { SearchBar  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap-table2-toolkit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    const { 0: flag , 1: setFlag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: DivflagAdd , 1: setDivFlagAdd  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: DivflagList , 1: setDivFlagList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: base_url , 1: BaseUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: Image_path , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: processing , 1: setProcessing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: uploading , 1: setUploading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // IMage Object
    const { 0: image_priview1 , 1: setImagePreview1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_priview2 , 1: setImagePreview2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_priview3 , 1: setImagePreview3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_priview4 , 1: setImagePreview4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_priview5 , 1: setImagePreview5  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Image Files
    const { 0: image_file1 , 1: setImageFile1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_file2 , 1: setImageFile2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_file3 , 1: setImageFile3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_file4 , 1: setImageFile4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_file5 , 1: setImageFile5  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Images IDS
    const { 0: image_ID1 , 1: setImageID1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_ID2 , 1: setImageID2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_ID3 , 1: setImageID3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_ID4 , 1: setImageID4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image_ID5 , 1: setImageID5  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: product_image , 1: setProductImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Edit
    const { 0: DivflagEdit , 1: setDivFlagEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: data , 1: setEditData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Featured Image
    const { 0: featured_image , 1: setFeatured_image  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: fileUrl , 1: setFileUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: fileUrlObj , 1: setFileUrlOBJ  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: filteredSlimeSeat , 1: setFilteredSlimeSeat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: USDPrice , 1: setUSDPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dataFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { 0: FlagData , 1: setFlagData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        SlimeSeatManagementList();
        var table = document.querySelector("#data-table-ID");
        table.classList.remove("table-bordered");
    }, []);
    const notify = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((type, message)=>{
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            type,
            message
        });
    }, []);
    async function setData(data, USDPrice) {
        Object.values(data).forEach(async (value, index)=>{
            value.USDPrice = value.Price * USDPrice;
            console.log(USDPrice);
        });
        return data;
    }
    // Get SC Video List .....
    async function SlimeSeatManagementList() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            try {
                var response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://2kpaid.com/api" + "/api/get-slime-seat-list", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user.access_token
                    }
                });
                const data = response.data;
                BaseUrl(response.data.base_url);
                const perUSDPrice = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + 1);
                var dataWithUSD = await setData(data.data, perUSDPrice.data.USD);
                console.log(dataWithUSD);
                setFilteredSlimeSeat(dataWithUSD);
                setFlagData(false);
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
    // Sc Video Input handle Here......
    const inputsHandler = (e, resolve)=>{
        const { name , value  } = e.target;
        if (name == "Image_path") {
            if (image_file1 == "" || image_file2 == "" || image_file3 == "" || image_file4 == "" || image_file5 == "") {
                if (e.target.files[0]) {
                    if (image_priview1 == "" && e.target.files[0].name.split(".")[1] == "jpg") {
                        setImagePreview1(URL.createObjectURL(e.target.files[0]));
                        console.log(Image_path);
                        Image_path.splice(0, 0, e.target.files[0]);
                        setImageFile1(e.target.files[0]);
                    } else if (image_priview2 == "" && e.target.files[0].name.split(".")[1] == "jpg") {
                        setImagePreview2(URL.createObjectURL(e.target.files[0]));
                        Image_path.splice(1, 0, e.target.files[0]);
                        setImageFile2(e.target.files[0]);
                    } else if (image_priview3 == "" && e.target.files[0].name.split(".")[1] == "jpg") {
                        setImagePreview3(URL.createObjectURL(e.target.files[0]));
                        Image_path.splice(2, 0, e.target.files[0]);
                        setImageFile3(e.target.files[0]);
                    } else if (image_priview4 == "" && e.target.files[0].name.split(".")[1] == "jpg") {
                        setImagePreview4(URL.createObjectURL(e.target.files[0]));
                        Image_path.splice(3, 0, e.target.files[0]);
                        setImageFile4(e.target.files[0]);
                    } else if (image_priview5 == "" && e.target.files[0].name.split(".")[1] == "jpg") {
                        setImagePreview5(URL.createObjectURL(e.target.files[0]));
                        Image_path.splice(4, 0, e.target.files[0]);
                        setImageFile5(e.target.files[0]);
                    } else {
                        notify("error", "Please upload only .jpg file!");
                    }
                    setFlag(true);
                }
            } else {
                notify("error", "Please upload only 5 images!");
            }
        } else {
            setInputField((prevState)=>({
                    ...prevState,
                    [name]: value
                }));
        }
    };
    // Sc Video Uploaded Here......
    async function submitButton() {
        const user = JSON.parse(localStorage.getItem("user"));
        var temp = "logout";
        if (inputField.Description && inputField.Price && inputField.name) {
            if (user) {
                var response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://2kpaid.com/api" + "/api/check-auth", {
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
                    setButtonDisabled(true);
                    // NFT UPLOAD......
                    const url = await uploadToIPFS();
                    setProcessing("Processing...");
                    const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_12___default())();
                    const connection = await web3Modal.connect();
                    const provider = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.providers.Web3Provider(connection);
                    const signer = provider.getSigner();
                    const user1 = JSON.parse(localStorage.getItem("user"));
                    if (inputField.name && inputField.Price && inputField.Description) {
                        // Wallet Address Save
                        let formdata = new FormData();
                        formdata.append("wallet_address", await signer.getAddress());
                        axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://2kpaid.com/api" + "/api/save-wallet-address", formdata, {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + user1.access_token
                            }
                        }).then((response)=>{
                            console.log(response.data);
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
                        /* create the NFT */ const price = ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.utils.parseUnits(inputField.Price, "ether");
                        let contract = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_14__/* .marketplaceAddress */ .I, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_13__/* .abi */ .Mt, signer);
                        let listingPrice = await contract.getListingPrice();
                        listingPrice = listingPrice.toString();
                        let transaction = "";
                        try {
                            transaction = await contract.createToken(url, price, {
                                value: listingPrice
                            });
                            await transaction.wait();
                        } catch (error) {
                            if (error.code == "-32603") {
                                notify("error", "Insufficient funds for gas * price + value!");
                                setProcessing(null);
                            }
                            if (error.code == "ACTION_REJECTED") {
                                notify("error", "Transaction rejected!");
                                setProcessing(null);
                            }
                        }
                        if (transaction) {
                            const data = await contract.fetchItemsListed();
                            let lastData = data[data.length - 1];
                            let NFTD = new FormData();
                            NFTD.append("name", inputField.name);
                            NFTD.append("price", inputField.Price);
                            NFTD.append("string_price", lastData.price.toString());
                            NFTD.append("description", inputField.Description);
                            NFTD.append("image", fileUrl);
                            NFTD.append("hash_token", transaction.hash);
                            NFTD.append("tokenID", lastData.tokenId.toNumber());
                            NFTD.append("seller", lastData.seller);
                            var nftcreated = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://2kpaid.com/api" + "/api/save-user-nft", NFTD, {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + user1.access_token
                                }
                            });
                            if (nftcreated.data) {
                                let fd = new FormData();
                                jquery__WEBPACK_IMPORTED_MODULE_7__.each(jquery__WEBPACK_IMPORTED_MODULE_7__(Image_path), function(i, file) {
                                    fd.append("Image_path[]", file);
                                });
                                fd.append("name", inputField.name);
                                fd.append("Price", inputField.Price);
                                fd.append("Description", inputField.Description);
                                fd.append("product_id", nftcreated.data.userNFT.id);
                                fd.append("featured_image", featured_image);
                                axios__WEBPACK_IMPORTED_MODULE_2___default()({
                                    method: "post",
                                    url: "https://2kpaid.com/api" + "/api/add-slime-seat",
                                    data: fd,
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                        "Authorization": "Bearer " + user1.access_token
                                    }
                                }).then((response)=>{
                                    notify("success", "Slime seat added successfully!");
                                    setProcessing(null);
                                    setInputField({
                                        name: "",
                                        Description: "",
                                        Price: ""
                                    });
                                    document.getElementById("name").value = "";
                                    document.getElementById("comment").value = "";
                                    document.getElementById("price").value = "";
                                    document.getElementById("matic_price").value = "";
                                    setDivFlagList(true);
                                    setDivFlagAdd(false);
                                    setImages("");
                                    setFileUrlOBJ(null);
                                    setFileUrl(null);
                                    setImagePreview1("");
                                    setImagePreview2("");
                                    setImagePreview3("");
                                    setImagePreview4("");
                                    setImagePreview5("");
                                    SlimeSeatManagementList();
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
                                notify("error", "Something went wrong please try again!");
                            }
                        }
                    // Save nft details
                    } else {
                        notify("error", "Please fill all mandatory fields!");
                        setButtonDisabled(false);
                    }
                }
            } else {
                router.push("/login");
            }
        } else {
            notify("error", "Please fill all mandatory fields!");
        }
    }
    // SC Video Delete.....
    async function DeleteSlimeSeat(e) {
        if (confirm("Are you sure?")) {
            const user = JSON.parse(localStorage.getItem("user"));
            let fd = new FormData();
            fd.append("S_ID", e.currentTarget.value);
            axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: "post",
                url: "https://2kpaid.com/api" + "/api/slime-seat-delete",
                data: fd,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then((response)=>{
                notify("success", "Slime seat deleted successfully!");
                SlimeSeatManagementList();
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
    // Edit Data Show....
    function divHandleEdit(e) {
        const user = JSON.parse(localStorage.getItem("user"));
        var s_id = e.currentTarget.value;
        var fd = new FormData();
        fd.append("S_ID", e.currentTarget.value);
        if (user) {
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://2kpaid.com/api" + "/api/get-slime-seat-wid", fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.access_token
                }
            }).then(async (response)=>{
                const data = response.data;
                setEditData(data);
                setInputField(data.TBL_slime_seats);
                const reponsePriceExchange = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + data.TBL_slime_seats.Price);
                setUSDPrice(reponsePriceExchange.data.USD);
                setFlag(true);
                setProductImage(data.product_image);
                var imageArr = [];
                data.TBL_Slimeseat_Images.map(function(value, index) {
                    if (value.Image_path == s_id + "_1.jpg") {
                        if (value.Status == 1) {
                            setImagePreview1(response.data.base_url + "/" + value.Image_path);
                            setImageFile1(value.Image_path);
                        }
                        setImageID1(value.id);
                    }
                    if (value.Image_path == s_id + "_2.jpg") {
                        if (value.Status == 1) {
                            setImagePreview2(response.data.base_url + "/" + value.Image_path);
                            setImageFile2(value.Image_path);
                        }
                        setImageID2(value.id);
                    }
                    if (value.Image_path == s_id + "_3.jpg") {
                        if (value.Status == 1) {
                            setImagePreview3(response.data.base_url + "/" + value.Image_path);
                            setImageFile3(value.Image_path);
                        }
                        setImageID3(value.id);
                    }
                    if (value.Image_path == s_id + "_4.jpg") {
                        if (value.Status == 1) {
                            setImagePreview4(response.data.base_url + "/" + value.Image_path);
                            setImageFile4(value.Image_path);
                        }
                        setImageID4(value.id);
                    }
                    if (value.Image_path == s_id + "_5.jpg") {
                        if (value.Status == 1) {
                            setImagePreview5(response.data.base_url + "/" + value.Image_path);
                            setImageFile5(value.Image_path);
                        }
                        setImageID5(value.id);
                    }
                });
                var imgPath = [];
                var arrIDS = [];
                jquery__WEBPACK_IMPORTED_MODULE_7__.each(jquery__WEBPACK_IMPORTED_MODULE_7__(data.TBL_Slimeseat_Images), function(i, data) {
                    imgPath.push(data.Image_path);
                    arrIDS.push(data.id);
                });
                setImages(imgPath);
                setDivFlagEdit(true);
                setDivFlagList(false);
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
    // Update Data Show.....
    async function UpdateButton() {
        const user = JSON.parse(localStorage.getItem("user"));
        let fd = new FormData();
        fd.append("img_1", image_file1);
        fd.append("img_2", image_file2);
        fd.append("img_3", image_file3);
        fd.append("img_4", image_file4);
        fd.append("img_5", image_file5);
        fd.append("img_id1", image_ID1);
        fd.append("img_id2", image_ID2);
        fd.append("img_id3", image_ID3);
        fd.append("img_id4", image_ID4);
        fd.append("img_id5", image_ID5);
        fd.append("S_ID", inputField.S_ID);
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
            method: "post",
            url: "https://2kpaid.com/api" + "/api/update-slime-seat",
            data: fd,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + user.access_token
            }
        }).then((response)=>{
            // window.location.reload();
            notify("success", "Slime seat updated successfully!");
            setDivFlagList(true);
            setDivFlagEdit(false);
            setImagePreview1("");
            setImagePreview2("");
            setImagePreview3("");
            setImagePreview4("");
            setImagePreview5("");
            SlimeSeatManagementList();
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
    // Image Remove
    function removeImage(e) {
        console.log(e.currentTarget.id);
        if (e.currentTarget.id == 0) {
            setImagePreview1("");
            setImageFile1("");
        }
        if (e.currentTarget.id == 1) {
            setImagePreview2("");
            setImageFile2("");
        }
        if (e.currentTarget.id == 2) {
            setImagePreview3("");
            setImageFile3("");
        }
        if (e.currentTarget.id == 3) {
            setImagePreview4("");
            setImageFile4("");
        }
        if (e.currentTarget.id == 4) {
            setImagePreview5("");
            setImageFile5("");
        }
    }
    function divHandle(e) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            if (user.user.is_verified == 1) {
                setDivFlagAdd(true);
                setDivFlagList(false);
            } else {
                e.preventDefault();
                alert("You do not have permission to access this option!");
            }
        }
    }
    function closeDiv() {
        setDivFlagAdd(false);
        setDivFlagEdit(false);
        setDivFlagList(true);
        setImages("");
        setImagePreview1("");
        setImagePreview2("");
        setImagePreview3("");
        setImagePreview4("");
        setImagePreview5("");
        setImageFile1("");
        setImageFile2("");
        setImageFile3("");
        setImageFile4("");
        setImageFile5("");
    }
    async function updateFormPrice(e) {
        if (e.target.value == "") {
            document.querySelector(".doller_price").value = "";
            setInputField({
                ...inputField,
                Price: e.target.value
            });
        } else {
            var exchangePriceResponse = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.coinconvert.net/convert/matic/usd?amount=" + e.target.value);
            if (exchangePriceResponse) {
                document.querySelector(".doller_price").value = exchangePriceResponse.data.USD;
                setInputField({
                    ...inputField,
                    Price: e.target.value.toString()
                });
            }
        }
    }
    // Featured Images Updoad
    async function onChangeAdd(e) {
        var formData = new FormData();
        const file = e.target.files[0];
        if (file) {
            formData.append("file", file);
            setUploading("Uploading...");
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    method: "POST",
                    data: formData,
                    maxBodyLength: "Infinity",
                    headers: {
                        "pinata_api_key": "619827e9e828fdef0328",
                        "pinata_secret_api_key": "65661d2e1f23e071faaeeb14030e5ff8d81f1ee7d1d5fc250e8991aa7199d6bc"
                    }
                });
                const url = `https://infura-ipfs.io/ipfs/${response.data.IpfsHash}`;
                setFileUrl(url);
                console.log(url);
                setFeatured_image(file);
                setFileUrlOBJ(URL.createObjectURL(file));
                setButtonDisabled(false);
                setUploading(null);
            } catch (e1) {
                console.log("Error uploading file: ", e1);
            }
        }
    // return response.data.IpfsHash;
    }
    async function uploadToIPFS() {
        const { name , Description , Price  } = inputField;
        if (!name || !Description || !Price || !fileUrl) return;
        /* first, upload metadata to IPFS */ const data = JSON.stringify({
            name,
            Description,
            Price,
            image: fileUrl
        });
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
                url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                method: "POST",
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "pinata_api_key": "619827e9e828fdef0328",
                    "pinata_secret_api_key": "65661d2e1f23e071faaeeb14030e5ff8d81f1ee7d1d5fc250e8991aa7199d6bc",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1MTUwMTllYi03NTVmLTRkNGYtYTRkOS1mMmE2MmVkMzM5ZjkiLCJlbWFpbCI6InJzOTYxMzYwOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjE5ODI3ZTllODI4ZmRlZjAzMjgiLCJzY29wZWRLZXlTZWNyZXQiOiI2NTY2MWQyZTFmMjNlMDcxZmFhZWViMTQwMzBlNWZmOGQ4MWYxZWU3ZDFkNWZjMjUwZTg5OTFhYTcxOTlkNmJjIiwiaWF0IjoxNjYyMTEwNzI1fQ.R7EAt6TfKn0U42TWptpY6p4d3nvIPoCOw7NnEFNecJs"
                }
            });
            const url = `https://infura-ipfs.io/ipfs/${response.data.IpfsHash}`;
            setButtonDisabled(false);
            return url;
        } catch (e) {
            console.log("Error uploading file: ", e);
            notify("error", "Error uploading file: ", e);
        }
    }
    // Datalist
    const columns = [
        {
            text: "#",
            dataField: "created_at",
            formatter: (cell, row, index)=>index + 1
        },
        {
            text: "Image",
            dataField: "featured_image",
            headerStyle: {
                minWidth: "50px"
            },
            style: {
                width: "50px"
            },
            formatter: (cell, row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "video_button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://2kpaid.com/api" + "/public/" + row.featured_image
                        })
                    })
                })
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
            }
        },
        {
            text: "Description",
            dataField: "Description",
            sort: true,
            headerStyle: {
                minWidth: "313px"
            },
            style: {
                width: "313px"
            }
        },
        {
            text: "Matic Price",
            dataField: "Price",
            sort: true,
            headerStyle: {
                minWidth: "90px"
            },
            formatter: (cell, row)=>row.Price ? row.Price + "Matic" : "",
            style: {
                width: "90px"
            }
        },
        {
            text: "USD Price",
            dataField: "USDPrice",
            sort: true,
            headerStyle: {
                minWidth: "150px"
            },
            formatter: (cell, row)=>row.USDPrice ? "$ " + row.USDPrice.toFixed(7) : "",
            style: {
                width: "90px"
            }
        },
        {
            text: "Action",
            dataField: "S_ID",
            classes: "icon-design-td",
            headerStyle: {
                minWidth: "225px"
            },
            style: {
                width: "225px"
            },
            formatter: (cell, row)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "icon-design icon-edit",
                                id: row.S_ID,
                                onClick: divHandleEdit,
                                value: row.S_ID,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-pencil",
                                    "aria-hidden": "true"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "icon-design icon-delete",
                                id: row.S_ID,
                                onClick: DeleteSlimeSeat,
                                value: row.S_ID,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-trash",
                                    "aria-hidden": "true"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-info",
                                id: row.S_ID,
                                onClick: (e)=>{
                                    router.push(`/map-slime-seat?id=${row.S_ID}`);
                                },
                                value: row.S_ID,
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
                                        children: "Slime Seat Management"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        style: {
                            display: DivflagAdd ? "block" : "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "login-page-design",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Add Slime Seat"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "loginform",
                                            style: {
                                                maxWidth: "710px"
                                            },
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
                                                            onChange: onChangeAdd,
                                                            name: "featured_image",
                                                            id: "featured_image",
                                                            className: "inputfile inputfile-4 file-5",
                                                            "data-multiple-caption": "{count} files selected",
                                                            multiple: true
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            htmlFor: "featured_image",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "profilepreview",
                                                                        src: fileUrlObj
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
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("lable", {
                                                            className: "lable-design",
                                                            children: "Multiple images"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "file",
                                                            onChange: inputsHandler,
                                                            name: "Image_path",
                                                            id: "file-4",
                                                            className: "form-control",
                                                            "data-multiple-caption": "{count} files selected",
                                                            multiple: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "preview_images",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview1) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove1 get_image_id",
                                                                                id: 0,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview1",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview1
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview1",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview1",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview2) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove2 get_image_id",
                                                                                id: 1,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview2",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview2
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview2",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview2",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview3) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove3 get_image_id",
                                                                                id: 2,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview3",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview3
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview3",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview3",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview4) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove4 get_image_id",
                                                                                id: 3,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview4",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview4
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview4",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview4",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview5) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove5 get_image_id",
                                                                                id: 4,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview5",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview5
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview5",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview5",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            children: [
                                                                "Name",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            onChange: inputsHandler,
                                                            id: "name",
                                                            required: true,
                                                            name: "name"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        children: [
                                                                            "Matic Price",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        className: "form-control",
                                                                        onChange: updateFormPrice,
                                                                        id: "matic_price",
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        children: "Dollar Price"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        className: "form-control doller_price",
                                                                        readOnly: true,
                                                                        id: "price"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            children: [
                                                                "Description",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            className: "form-control",
                                                            rows: "5",
                                                            onChange: inputsHandler,
                                                            required: true,
                                                            name: "Description",
                                                            id: "comment"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group loginbtn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "button",
                                                        className: "btn btn-info",
                                                        disabled: processing ? "disabled" : ButtonDisabled ? "disabled" : "",
                                                        onClick: submitButton,
                                                        value: uploading ? uploading : processing ? processing : "Submit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        style: {
                            display: DivflagEdit ? "block" : "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "login-page-design",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Edit Slime Seat"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "loginform",
                                            style: {
                                                maxWidth: "710px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "close",
                                                    "data-dismiss": "modal",
                                                    onClick: closeDiv,
                                                    children: "Back"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "box",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "file-5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    id: "profilepreview",
                                                                    src: product_image
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
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("lable", {
                                                            className: "lable-design",
                                                            children: "Multiple images"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "file",
                                                            onChange: inputsHandler,
                                                            name: "Image_path",
                                                            id: "file-4",
                                                            className: "form-control",
                                                            "data-multiple-caption": "{count} files selected",
                                                            multiple: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "preview_images",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview1) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove1 get_image_id",
                                                                                "data-image": data ? data.TBL_Slimeseat_Images[0] ? data.TBL_Slimeseat_Images[0].id : "" : "",
                                                                                id: 0,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview1",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview1
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview1",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview1",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview2) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove2 get_image_id",
                                                                                "data-image": data ? data.TBL_Slimeseat_Images[1] ? data.TBL_Slimeseat_Images[1].id : "" : "",
                                                                                id: 1,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview2",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview2
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview2",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview2",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview3) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove3 get_image_id",
                                                                                "data-image": data ? data.TBL_Slimeseat_Images[2] ? data.TBL_Slimeseat_Images[2].id : "" : "",
                                                                                id: 2,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview3",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview3
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview3",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview3",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview4) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove4 get_image_id",
                                                                                "data-image": data ? data.TBL_Slimeseat_Images[3] ? data.TBL_Slimeseat_Images[3].id : "" : "",
                                                                                id: 3,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview4",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview4
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview4",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview4",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "box",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                                    children: flag ? Boolean(image_priview5) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "remove5 get_image_id",
                                                                                "data-image": data ? data.TBL_Slimeseat_Images[4] ? data.TBL_Slimeseat_Images[4].id : "" : "",
                                                                                id: 4,
                                                                                onClick: removeImage,
                                                                                children: "X"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                id: "profilepreview5",
                                                                                className: "profile_images_preview",
                                                                                src: image_priview5
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview5",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        id: "profilepreview5",
                                                                        className: "profile_images_preview",
                                                                        src: Image_path > 0 ? base_url + "/public/" + Image_path : "assets/images/no-image.png"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        readOnly: true,
                                                        className: "form-control",
                                                        value: inputField.name,
                                                        onChange: inputsHandler,
                                                        placeholder: "Name",
                                                        id: "name",
                                                        name: "name"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    readOnly: true,
                                                                    className: "form-control",
                                                                    value: inputField.Price,
                                                                    onChange: inputsHandler,
                                                                    placeholder: "Price",
                                                                    id: "price",
                                                                    name: "Price"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    className: "form-control usdPrice",
                                                                    readOnly: true,
                                                                    value: USDPrice,
                                                                    placeholder: "USD Price",
                                                                    id: "price"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        className: "form-control",
                                                        readOnly: true,
                                                        rows: "5",
                                                        value: inputField.Description,
                                                        onChange: inputsHandler,
                                                        placeholder: "Description",
                                                        name: "Description",
                                                        id: "comment"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group loginbtn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "button",
                                                        className: "btn btn-info",
                                                        onClick: UpdateButton,
                                                        value: "Update"
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
                            display: DivflagList ? "block" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row video_heading",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Slime Seat Management List"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6 text-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "btn btn-info add_sc",
                                            onClick: divHandle,
                                            children: "Add Slime Seat"
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
                                            data: filteredSlimeSeat,
                                            columns: columns,
                                            search: true,
                                            children: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchBar, {
                                                            ...props.searchProps
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            keyField: "id",
                                                            id: "data-table-ID",
                                                            classes: "dt-responsive dataTable no-footer",
                                                            data: filteredSlimeSeat,
                                                            columns: columns,
                                                            pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_9___default()(options),
                                                            noDataIndication: FlagData ? "Loading" : "No Records Found",
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

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,761,714,897,702], () => (__webpack_exec__(4947)));
module.exports = __webpack_exports__;

})();