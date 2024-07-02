"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var downloadjs_1 = __importDefault(require("downloadjs"));
var lodash_1 = require("lodash");
var qs_1 = __importDefault(require("qs"));
var custom_axios_1 = __importDefault(require("../custom-axios"));
var API_PREFIX = "/ukln-ift";
var UKLNIFTService = function () {
    var crypto = require("crypto-js");
    var headersWithSignature = function (signature) {
        return {
            "grpc-metadata-signature": signature,
        };
    };
    var CreateSignature = function (params, companyID, userID) {
        var secret = "BRIC@MS4dd0ns";
        var data = "bodydata:" +
            JSON.stringify(params) +
            "&bearer:".concat(localStorage.getItem("access-token"), "&companyid:") +
            companyID +
            "&userid:" +
            userID;
        if ("".concat(process.env["NEXT_PUBLIC_SIGNATURE"]) === "" ||
            "".concat(process.env["NEXT_PUBLIC_SIGNATURE"]) == "undefined" ||
            "".concat(process.env["NEXT_PUBLIC_SIGNATURE"]) == undefined) {
            var hash = crypto.HmacSHA256(data, secret);
            return hash.toString(crypto.enc.Hex);
        }
        else {
            var hash = crypto.HmacSHA256(data, "".concat(process.env["NEXT_PUBLIC_SIGNATURE"]));
            return hash.toString(crypto.enc.Hex);
        }
    };
    var getTransactionActionDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParams, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParams = __rest(params, ["batchReffNo"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-action/details/").concat(batchReffNo), {
                            params: (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 3:
                    err_1 = _a.sent();
                    if (err_1 instanceof axios_1.AxiosError && err_1.response) {
                        throw new Error(err_1.response.data.message);
                    }
                    throw new Error("Server Error");
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postTransactionActionBatchList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-action/data"), (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; }))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_2 = _a.sent();
                    if (err_2 instanceof axios_1.AxiosError && err_2.response) {
                        throw new Error(err_2.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var postTransactionActionBatchListV2 = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/v2/transaction-action/data"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    if (err_3 instanceof axios_1.AxiosError && err_3.response) {
                        throw new Error(err_3.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionActionDetailListV2 = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParams, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParams = __rest(params, ["batchReffNo"]);
                    console.log(params);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/transaction-action/details/").concat(batchReffNo), { params: params })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_4 = _a.sent();
                    if (err_4 instanceof axios_1.AxiosError && err_4.response) {
                        throw new Error(err_4.response.data.message);
                    }
                    throw new Error("Server Error");
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionActionCriteriaOptions = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-action/search-criteria"), {
                            params: (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_5 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_5)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionActionCriteriaOptionsV2 = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/transaction-action/search-criteria"))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_6 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_6)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var createTaskIFT = function (payload, rCode, companyID, userID) { return __awaiter(void 0, void 0, void 0, function () {
        var req, bodyData, bodyparsed, hash, res, err_7;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    req = JSON.stringify(payload);
                    bodyData = qs_1.default.stringify({ request: req });
                    bodyparsed = bodyData.slice(8);
                    hash = CreateSignature({ request: bodyparsed }, companyID, userID);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/task"), { request: bodyparsed }, {
                            headers: headersWithSignature(hash),
                        })];
                case 2:
                    res = _b.sent();
                    if (res.status !== 200) {
                        throw new Error(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, res.data];
                case 3:
                    err_7 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_7)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionInquiryDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParams, res, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParams = __rest(params, ["batchReffNo"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/transaction-inquiry/details/").concat(batchReffNo), {
                            params: (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 3:
                    err_8 = _a.sent();
                    if (err_8 instanceof axios_1.AxiosError && err_8.response) {
                        throw new Error(err_8.response.data.message);
                    }
                    throw new Error("Server Error");
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postTransactionInquiryBatchList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/v2/transaction-inquiry/data"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_9 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_9)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getAccountStatementLogs = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/ukln-forecasting/logs")];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_10 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_10)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getStatusMapping = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/v2/mapping/status"), {
                            params: params
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_11 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_11)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionInquiryCriteriaOptions = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-inquiry/search-criteria"), {
                            params: (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_12 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_12)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postInternalTransferTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/task/action"), params)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_13 = _a.sent();
                    if (err_13 instanceof axios_1.AxiosError && err_13.response) {
                        throw new Error(err_13.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var addBeneficiaryAccountUKLN = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("".concat(API_PREFIX, "/beneficiary-account"), params)
                        .then(function (response) {
                        var _a, _b;
                        if (response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        if (response.data.error) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("there is error on" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getDataBeneficiaryAccountUKLN = function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (params) {
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                return [2 /*return*/, custom_axios_1.default.get("ukln-ift/beneficiary-account/data", { params: params }).then(function (response) {
                        var _a, _b;
                        if (response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        if (response.data.error) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("there is error on" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
            });
        });
    };
    var getDetailEditUKLN = function (batchReffNo) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.get("ukln-ift/".concat(batchReffNo)).then(function (response) {
                    var _a, _b;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    if (response.data.error) {
                        throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.log("there is error on" + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                })];
        });
    }); };
    var getCustomerDetail = function (batchReffNo, customerReffNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("ukln-ift/v2/detail/".concat(batchReffNo, "/").concat(customerReffNumber))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_14 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_14)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getAccountDataByRole = function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (params) {
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                return [2 /*return*/, custom_axios_1.default.get("/account/dataByRole", { params: params }).then(function (response) {
                        var _a, _b;
                        if (response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        if (response.data.error) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("there is error on" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
            });
        });
    };
    var getDownloadReceipt = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, customerReffNo, filename, res, err_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, customerReffNo = params.customerReffNo, filename = params.filename;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/receipt/").concat(batchReffNo, "/").concat(customerReffNo), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 5];
                case 3:
                    err_15 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_15)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getValidateAccessUKLN = function (batchReffNo) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.get("ukln-ift/validate/".concat(batchReffNo)).then(function (response) {
                    var _a, _b;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    if (response.data.error) {
                        throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.log("there is error on" + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                })];
        });
    }); };
    var postDownloadBatchTransactionAction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_16, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-action/data/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_16 = _c.sent();
                    if (!(err_16 instanceof axios_1.AxiosError && err_16.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_16.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getDownloadDetailTransactionAction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, batchReffNo, restParams, res, err_17, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, batchReffNo = params.batchReffNo, restParams = __rest(params, ["filename", "extension", "batchReffNo"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-action/details/").concat(batchReffNo, "/file/").concat(extension), {
                            params: (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_17 = _c.sent();
                    if (!(err_17 instanceof axios_1.AxiosError && err_17.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_17.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var postDownloadBatchTransactionInquiry = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_18, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-inquiry/data/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_18 = _c.sent();
                    if (!(err_18 instanceof axios_1.AxiosError && err_18.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_18.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getDownloadDetailTransactionInquiry = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, batchReffNo, restParams, res, err_19, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, batchReffNo = params.batchReffNo, restParams = __rest(params, ["filename", "extension", "batchReffNo"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-inquiry/details/").concat(batchReffNo, "/file/").concat(extension), {
                            params: (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_19 = _c.sent();
                    if (!(err_19 instanceof axios_1.AxiosError && err_19.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_19.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var validateAccountNumber = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("account/ukln/validate/data", params)
                        .then(function (response) {
                        var _a, _b;
                        if (response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        if (response.data.error) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("there is error on" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        getAccountStatementLogs: getAccountStatementLogs,
        getTransactionActionDetailList: getTransactionActionDetailList,
        getTransactionActionDetailListV2: getTransactionActionDetailListV2,
        postTransactionActionBatchList: postTransactionActionBatchList,
        getTransactionActionCriteriaOptions: getTransactionActionCriteriaOptions,
        getTransactionInquiryDetailList: getTransactionInquiryDetailList,
        postTransactionInquiryBatchList: postTransactionInquiryBatchList,
        postTransactionActionBatchListV2: postTransactionActionBatchListV2,
        getTransactionInquiryCriteriaOptions: getTransactionInquiryCriteriaOptions,
        getTransactionActionCriteriaOptionsV2: getTransactionActionCriteriaOptionsV2,
        createTaskIFT: createTaskIFT,
        postInternalTransferTask: postInternalTransferTask,
        getDataBeneficiaryAccountUKLN: getDataBeneficiaryAccountUKLN,
        addBeneficiaryAccountUKLN: addBeneficiaryAccountUKLN,
        getDetailEditUKLN: getDetailEditUKLN,
        getAccountDataByRole: getAccountDataByRole,
        getCustomerDetail: getCustomerDetail,
        getDownloadReceipt: getDownloadReceipt,
        getValidateAccessUKLN: getValidateAccessUKLN,
        validateAccountNumber: validateAccountNumber,
        getStatusMapping: getStatusMapping,
        postDownloadBatchTransactionAction: postDownloadBatchTransactionAction,
        postDownloadBatchTransactionInquiry: postDownloadBatchTransactionInquiry,
        getDownloadDetailTransactionInquiry: getDownloadDetailTransactionInquiry,
        getDownloadDetailTransactionAction: getDownloadDetailTransactionAction,
    };
};
exports.default = UKLNIFTService;
//# sourceMappingURL=ukln-ift.js.map