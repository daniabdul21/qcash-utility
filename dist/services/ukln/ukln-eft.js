"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var downloadjs_1 = __importDefault(require("downloadjs"));
var lodash_1 = require("lodash");
var custom_axios_1 = __importDefault(require("../custom-axios"));
var API_PREFIX_REMITTANCE = "/ukln-swift";
var UKLNEFTService = function () {
    var getBeneficiaryFavorite = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(API_PREFIX_REMITTANCE, "/beneficiary-favourite/get"), params)
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                })];
        });
    }); };
    var postActionBeneficiaryFavorite = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(API_PREFIX_REMITTANCE, "/beneficiary-favourite/action"), __assign({}, params))
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                })];
        });
    }); };
    var getTransactionList = function () { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(API_PREFIX_REMITTANCE, "/transaction/list"), __assign({}, params))
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                })];
        });
    }); }; };
    var postExchangeRateGlobalSwift = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/ukln-swift-transmitter-esb/exchange-rate-sum", __assign({}, params))
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                })];
        });
    }); };
    var getDataTransactionDetail = function (processId, transactionId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(API_PREFIX_REMITTANCE, "/transaction/detail"), { processId: processId, transactionId: transactionId })
                    .then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    console.error("error from server: " + error);
                    return Promise.reject(error.response.data);
                })];
        });
    }); };
    var postMakerSubmitGlobalSwift = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(API_PREFIX_REMITTANCE, "/submit"), __assign({}, params))
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    if (err instanceof axios_1.AxiosError && err.response) {
                        throw new Error(err.response.data.message);
                    }
                    throw new Error("Server Error");
                })];
        });
    }); };
    var postTransactionActionTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var taskIDvalue, res, err_1, apiResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if ("taskID" in params) {
                        taskIDvalue = params.taskID;
                        delete params.taskID;
                        params.taskIds = taskIDvalue;
                    }
                    if ('rows' in params) {
                        delete params.rows;
                    }
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/task"), params)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_1 = _a.sent();
                    if (err_1 instanceof axios_1.AxiosError) {
                        if (err_1.response) {
                            apiResponse = err_1.response;
                            if (apiResponse.data && apiResponse.data.message) {
                                throw new Error(apiResponse.data.message);
                            }
                        }
                        throw new Error("Server Error: " + err_1.message);
                    }
                    else {
                        throw new Error((err_1 instanceof Error ? err_1.message : "An unknown error occurred"));
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getActionFor = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/mapping/action-for"), {
                            params: params
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_2 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_2)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getDebitAccountNumber = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/mapping/debit-account-number"), __assign(__assign({}, params), { fileType: params.debitAccountNumber || "" }))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_3)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var downloadTransactionActionSingleReceipt = function (transactionId, processId, filename) { return __awaiter(void 0, void 0, void 0, function () {
        var res, content, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/transaction/detail/file"), {
                            processId: processId,
                            transactionId: transactionId,
                        }, { responseType: "blob" })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename), content);
                    return [2 /*return*/, res.data];
                case 2:
                    error_1 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadRecapTransactionAction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_4, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/transaction/list/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_4 = _c.sent();
                    if (!(err_4 instanceof axios_1.AxiosError && err_4.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_4.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var postTransactionInquiryListGlobalSwift = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/inquiry/history"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_5 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_5)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getDebitAccountNumberGlobalSwift = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/mapping/debit-account-number"), __assign({}, params))];
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
    var getStatusGlobalSwift = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/mapping/status"), __assign({}, params))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_7 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_7)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var downloadRecapTransactionInquiry = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_8, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX_REMITTANCE, "/inquiry/history/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_8 = _c.sent();
                    if (!(err_8 instanceof axios_1.AxiosError && err_8.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_8.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return {
        getBeneficiaryFavorite: getBeneficiaryFavorite,
        postActionBeneficiaryFavorite: postActionBeneficiaryFavorite,
        getTransactionList: getTransactionList,
        getDataTransactionDetail: getDataTransactionDetail,
        postExchangeRateGlobalSwift: postExchangeRateGlobalSwift,
        postMakerSubmitGlobalSwift: postMakerSubmitGlobalSwift,
        postTransactionActionTask: postTransactionActionTask,
        getActionFor: getActionFor,
        getDebitAccountNumber: getDebitAccountNumber,
        downloadTransactionActionSingleReceipt: downloadTransactionActionSingleReceipt,
        downloadRecapTransactionAction: downloadRecapTransactionAction,
        postTransactionInquiryListGlobalSwift: postTransactionInquiryListGlobalSwift,
        getDebitAccountNumberGlobalSwift: getDebitAccountNumberGlobalSwift,
        getStatusGlobalSwift: getStatusGlobalSwift,
        downloadRecapTransactionInquiry: downloadRecapTransactionInquiry
    };
};
exports.default = UKLNEFTService;
//# sourceMappingURL=ukln-eft.js.map