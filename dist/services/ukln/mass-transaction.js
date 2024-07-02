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
var API_PREFIX = "/ukln-mass-transaction";
var UKLNMassTransactionService = function () {
    var postCreateMassTransfer = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/batch/file-upload"), body)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_1 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTemplateList = function (type, companyID) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/templates"), {
                            params: {
                                type: type,
                                companyID: companyID
                            }
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadTemplateByID = function (fileFormatId) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/template/get/").concat(fileFormatId), {
                            responseType: "blob",
                        })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res];
                case 2:
                    error_2 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var checkDuplicateFilename = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/file/duplicate-by-name"), {
                            params: { filename: filename },
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_2 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_2)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postMakerConfirmationBatchList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/maker-confirmation"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_3)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postMakerConfirmationDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/maker-confirmation/detail"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_4 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_4)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileFormat = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/mapping/v2/file-format"))];
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
    var getFileType = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/mapping/v2/file-type"), {
                            params: params
                        })];
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
    var postMakerConfirmationTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/task/global-mass-transaction/set", params)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_7 = _a.sent();
                    if (err_7 instanceof axios_1.AxiosError && err_7.response) {
                        throw new Error(err_7.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getRejectionDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/rejection-detail/").concat(params.batchId), {
                            params: params
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_8 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_8)];
                case 3: return [2 /*return*/, _a.sent()];
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
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/inquiry/history"), params)];
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
    var postTransactionActionBatchList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-action"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_10 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_10)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postTransactionActionDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-action/detail"), params)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_11 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_11)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postTransactionActionTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/task"), params)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_12 = _a.sent();
                    if (err_12 instanceof axios_1.AxiosError && err_12.response) {
                        throw new Error(err_12.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getActionFor = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/mapping/action-for"), {
                            params: params
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_13 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_13)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getBatchReffNo = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/mapping/batch-reff-no"), params)];
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
    var getDebitAccountNumber = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/mapping/debit-account-number"), __assign(__assign({}, params), { fileType: params.debitAccountNumber || "" }))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_15 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_15)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var postDownloadBatchMakerConfirmation = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_16, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/maker-confirmation/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
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
    var postDownloadDetailMakerConfirmation = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_17, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/maker-confirmation/detail/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
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
    var postDownloadBatchTransactionAction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_18, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-action/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
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
    var postDownloadBatchTransactionInquiry = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_19, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/inquiry/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
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
    var postDownloadDetailTransactionAction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, extension, restParams, res, err_20, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, extension = params.extension, restParams = __rest(params, ["filename", "extension"]);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/transaction-action/detail/file/").concat(extension), (0, lodash_1.pickBy)(restParams, function (value) { return value !== undefined && value !== ""; }), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_20 = _c.sent();
                    if (!(err_20 instanceof axios_1.AxiosError && err_20.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_20.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getMassTransactionRejectionDetail = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, batchId, extension, res, content, err_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = params.filename, batchId = params.batchId, extension = params.extension;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/rejection-detail/").concat(batchId, "/file/").concat(extension), {
                            params: params,
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(extension), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_21 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_21)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionDetailInDetail = function (batchReffNo, customerReffNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/detail/").concat(batchReffNo, "/").concat(customerReffNumber))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_22 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_22)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadGlobalTransactionReceipt = function (batchId, transactionId, processId, filename) { return __awaiter(void 0, void 0, void 0, function () {
        var res, content, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/detail/").concat(batchId, "/").concat(transactionId, "/receipt"), {
                            params: { processId: processId },
                            responseType: "blob",
                        })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename), content);
                    return [2 /*return*/, res.data];
                case 2:
                    error_3 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        // upload
        getTemplateList: getTemplateList,
        downloadTemplateByID: downloadTemplateByID,
        checkDuplicateFilename: checkDuplicateFilename,
        postCreateMassTransfer: postCreateMassTransfer,
        // maker-confirmation
        postMakerConfirmationTask: postMakerConfirmationTask,
        postMakerConfirmationBatchList: postMakerConfirmationBatchList,
        postMakerConfirmationDetailList: postMakerConfirmationDetailList,
        getRejectionDetailList: getRejectionDetailList,
        getFileFormat: getFileFormat,
        getFileType: getFileType,
        postDownloadBatchMakerConfirmation: postDownloadBatchMakerConfirmation,
        postDownloadDetailMakerConfirmation: postDownloadDetailMakerConfirmation,
        // transaction action
        postTransactionActionTask: postTransactionActionTask,
        postTransactionActionBatchList: postTransactionActionBatchList,
        postTransactionActionDetailList: postTransactionActionDetailList,
        getActionFor: getActionFor,
        getBatchReffNo: getBatchReffNo,
        getDebitAccountNumber: getDebitAccountNumber,
        postDownloadBatchTransactionAction: postDownloadBatchTransactionAction,
        postDownloadDetailTransactionAction: postDownloadDetailTransactionAction,
        getTransactionDetailInDetail: getTransactionDetailInDetail,
        downloadGlobalTransactionReceipt: downloadGlobalTransactionReceipt,
        postTransactionInquiryBatchList: postTransactionInquiryBatchList,
        postDownloadBatchTransactionInquiry: postDownloadBatchTransactionInquiry,
        //rejection detail
        getMassTransactionRejectionDetail: getMassTransactionRejectionDetail,
    };
};
exports.default = UKLNMassTransactionService;
//# sourceMappingURL=mass-transaction.js.map