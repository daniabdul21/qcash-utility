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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var downloadjs_1 = __importDefault(require("downloadjs"));
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var API_PREFIX = "/mass-transfer";
var MassTransferService = function (token) {
    var getSearchCriteriaForTransferInquiry = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/inquiry/search-criteria"), {
                            params: (0, pickBy_1.default)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_1)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getTransferInquiryOverview = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/inquiry/list"), {
                            params: (0, pickBy_1.default)(params, function (value) { return value !== undefined && value !== ""; }),
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
    var getTransferInquiryDetailSummary = function (batchReffNo) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/summary/inquiry/").concat(batchReffNo))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_3)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTransferInquiryDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParam, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParam = __rest(params, ["batchReffNo"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/inquiry/details/").concat(batchReffNo), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_4 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_4)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getTransferInquiryRejectionDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParam, res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParam = __rest(params, ["batchReffNo"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/inquiry/rejection/").concat(batchReffNo), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_5 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_5)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileTransferInquiryDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, batchReffNo, format, restParam, res, content, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = params.filename, batchReffNo = params.batchReffNo, format = params.format, restParam = __rest(params, ["filename", "batchReffNo", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/inquiry/details/").concat(batchReffNo, "/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_6 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_6)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileTransactionActionDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, batchReffNo, format, restParam, res, content, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = params.filename, batchReffNo = params.batchReffNo, format = params.format, restParam = __rest(params, ["filename", "batchReffNo", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-action/details/").concat(batchReffNo, "/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_7 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_7)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileTransferInquiryRejectionDetail = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, batchReffNo, format, restParam, res, content, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = params.filename, batchReffNo = params.batchReffNo, format = params.format, restParam = __rest(params, ["filename", "batchReffNo", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/inquiry/rejection/").concat(batchReffNo, "/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_8 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_8)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getSearchCriteriaForTransactionAction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/transaction-action/search-criteria"), {
                            params: (0, pickBy_1.default)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_9 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_9)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionActionList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-action/list"), {
                            params: (0, pickBy_1.default)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
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
    var getTransactionActionDetailSummary = function (batchReffNo) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/summary/").concat(batchReffNo))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_11 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_11)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionActionDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParam, res, err_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParam = __rest(params, ["batchReffNo"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/transaction-action/details/").concat(batchReffNo), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_12 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_12)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileTransactionActionList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var downloadFileName, format, restParam, res, content, err_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    downloadFileName = params.downloadFileName, format = params.format, restParam = __rest(params, ["downloadFileName", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/transaction-action/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(downloadFileName, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_13 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_13)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileTransferInquiryList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var downloadFileName, format, restParam, res, content, err_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    downloadFileName = params.downloadFileName, format = params.format, restParam = __rest(params, ["downloadFileName", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/inquiry/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(downloadFileName, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_14 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_14)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileFormatGroupMapping = function (companyID) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/mapping/file-format"), {
                            params: {
                                companyID: companyID
                            }
                        })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    error_1 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileTypeGroupMapping = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/mapping/file-type"), { params: params })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    error_2 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getListTemplate = function (companyID) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/template/list"), { companyID: companyID })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    error_3 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadTemplateByID = function (templateID) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/template/get/").concat(templateID), {
                            responseType: "blob",
                        })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res];
                case 2:
                    error_4 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _a === void 0 ? void 0 : _a.data) || { meesage: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postCreateMassTransfer = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/submit-form"), body)];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    error_5 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postCreateMassTransferV2 = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_6;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/submit-form-v2"), body)];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    error_6 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMakerConfirmationDetailList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParam, res, err_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, restParam = __rest(params, ["batchReffNo"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/maker-validation/").concat(batchReffNo), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_15 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_15)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getMakerConfirmationRejectionList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, restParam, res, err_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    batchReffNo = params.batchReffNo, restParam = __rest(params, ["batchReffNo"]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/maker-validation-rejection/").concat(batchReffNo), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_16 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_16)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileMakerConfirmationDetail = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, batchReffNo, format, restParam, res, content, err_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = params.filename, batchReffNo = params.batchReffNo, format = params.format, restParam = __rest(params, ["filename", "batchReffNo", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/maker-validation/").concat(batchReffNo, "/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_17 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_17)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getFileMakerConfirmationRejectionDetail = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, batchReffNo, format, restParam, res, content, err_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = params.filename, batchReffNo = params.batchReffNo, format = params.format, restParam = __rest(params, ["filename", "batchReffNo", "format"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/maker-validation-rejection/").concat(batchReffNo, "/file/").concat(format), {
                            params: (0, pickBy_1.default)(restParam, function (value) { return value !== undefined && value !== ""; }),
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_18 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_18)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getViewDataMassTransfer = function (batchReffNo) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/summary/inquiry/").concat(batchReffNo))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_19 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_19)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var checkDuplicateFile = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_20;
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
                    err_20 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_20)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMassTransferCustomerDetail = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, cuReff, transactionId, res, err_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, cuReff = params.cuReff, transactionId = params.transactionId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/detail/").concat(batchReffNo, "/").concat(cuReff, "/").concat(transactionId))];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_21 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_21)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getSearchCriteriaForMakerHistory = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/v2/inquiry/search-criteria"), {
                            params: (0, pickBy_1.default)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_22 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_22)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getFileCustomerReceipt = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var batchReffNo, cuReff, filename, format, transactionId, res, content, err_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batchReffNo = params.batchReffNo, cuReff = params.cuReff, filename = params.filename, format = params.format, transactionId = params.transactionId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/receipt/").concat(batchReffNo, "/").concat(cuReff, "/").concat(transactionId), {
                            responseType: "blob",
                        })];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error("Server Error");
                    content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat(filename, ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_23 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_23)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getValidateCompany = function (batchReffNo) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/validate/").concat(batchReffNo))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_24 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_24)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getValidateCompanyDetail = function (batchReffNo, customerReffNumber, transactionId) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_25;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/validate/").concat(batchReffNo, "/transaction/").concat(customerReffNumber, "/").concat(transactionId))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_25 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_25)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMassTransferDetailFilterOption = function (batchReffNo, transactionFilter) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_26;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/filter/").concat(batchReffNo), {
                            params: { transactionFilter: transactionFilter },
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_26 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_26)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        getMassTransferCustomerDetail: getMassTransferCustomerDetail,
        getMakerConfirmationRejectionList: getMakerConfirmationRejectionList,
        getSearchCriteriaForMakerHistory: getSearchCriteriaForMakerHistory,
        getSearchCriteriaForTransactionAction: getSearchCriteriaForTransactionAction,
        getSearchCriteriaForTransferInquiry: getSearchCriteriaForTransferInquiry,
        getTransferInquiryOverview: getTransferInquiryOverview,
        getTransferInquiryDetailSummary: getTransferInquiryDetailSummary,
        getTransferInquiryDetailList: getTransferInquiryDetailList,
        getTransferInquiryRejectionDetailList: getTransferInquiryRejectionDetailList,
        getFileTransferInquiryRejectionDetail: getFileTransferInquiryRejectionDetail,
        getFileTransferInquiryDetailList: getFileTransferInquiryDetailList,
        getTransactionActionList: getTransactionActionList,
        getTransactionActionDetailSummary: getTransactionActionDetailSummary,
        getTransactionActionDetailList: getTransactionActionDetailList,
        getFileTransactionActionList: getFileTransactionActionList,
        getFileTransactionActionDetailList: getFileTransactionActionDetailList,
        getFileTransferInquiryList: getFileTransferInquiryList,
        downloadTemplateByID: downloadTemplateByID,
        getListTemplate: getListTemplate,
        postCreateMassTransfer: postCreateMassTransfer,
        postCreateMassTransferV2: postCreateMassTransferV2,
        getFileMakerConfirmationRejectionDetail: getFileMakerConfirmationRejectionDetail,
        getFileMakerConfirmationDetail: getFileMakerConfirmationDetail,
        getViewDataMassTransfer: getViewDataMassTransfer,
        getFileFormatGroupMapping: getFileFormatGroupMapping,
        getFileTypeGroupMapping: getFileTypeGroupMapping,
        checkDuplicateFile: checkDuplicateFile,
        getMakerConfirmationDetailList: getMakerConfirmationDetailList,
        getFileCustomerReceipt: getFileCustomerReceipt,
        getValidateCompany: getValidateCompany,
        getValidateCompanyDetail: getValidateCompanyDetail,
        getMassTransferDetailFilterOption: getMassTransferDetailFilterOption,
    };
};
exports.default = MassTransferService;
//# sourceMappingURL=mass-transfer.js.map