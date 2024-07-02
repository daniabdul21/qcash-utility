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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var uuid_1 = require("uuid");
var downloadjs_1 = __importDefault(require("downloadjs"));
var types_1 = require("@/types");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var API_PREFIX = "/account-receivable";
var AccountReceivableService = function () {
    var postUploadMandateFile = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/batch/file-upload/mandate", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postUploadDirectDebit = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/batch/file-upload/direct-debit", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_2)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadTemplateByID = function (templateID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/"), {
                            responseType: "blob",
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_3 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var checkDuplicateFile = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/batch/file-upload/check-duplicate", payload)];
                case 1:
                    response = _a.sent();
                    if (response.data.code !== 200) {
                        throw new Error(response.data.message);
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_4 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_4)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getListTemplate = function (companyID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/"), { companyID: companyID })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_5 = _b.sent();
                    return [4 /*yield*/, Promise.reject(((_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMandateCodeMappings = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 2, , 4]);
                    params = {
                        processId: (0, uuid_1.v4)(),
                        companyId: params.companyId,
                        limit: (_a = params.limit) !== null && _a !== void 0 ? _a : 10,
                        dir: (_b = params.dir) !== null && _b !== void 0 ? _b : "",
                        page: (_c = params.page) !== null && _c !== void 0 ? _c : 1,
                        sort: (_d = params.sort) !== null && _d !== void 0 ? _d : "",
                        filter: (_e = params.filter) !== null && _e !== void 0 ? _e : "",
                    };
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/mandate", {
                            params: params,
                        })];
                case 1:
                    response = _f.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_6 = _f.sent();
                    return [4 /*yield*/, Promise.reject(error_6)];
                case 3: return [2 /*return*/, _f.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMandateTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/mandate-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_7 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_7)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getAccountStatusMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/account-status")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_8 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_8)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileFormatMappings = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mapping/file-format", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_9 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_9)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReportTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/receivable-reports/report-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_10 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_10)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadReceivableReport = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/receivable-reports/download"), body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_11 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_11)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var generateReceivableReport = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/receivable-reports/generate"), body)];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Unable to generate report. Please try again later.");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_12 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_12)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadBatchReceivableReport = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, content, fileName, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/receivable-reports/download-batch"), body, { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    content = response.headers["content-type"];
                    fileName = "Receivable Reports ".concat((0, moment_1.default)(new Date()).format("YYYYMMDDHHmm"));
                    (0, downloadjs_1.default)(response.data, fileName, content);
                    return [2 /*return*/];
                case 2:
                    error_13 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_13)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getDataReceivableReportsList = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/receivable-reports/list"), body)];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_14 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_14)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/receivable-reports/file-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_15 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_15)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMandateCategoryMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/mandate-category")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_16 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_16)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getStatusMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/status")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_17 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_17)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getAmountTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/amount-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_18 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_18)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionFrequencyMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/transaction-frequency")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_19 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_19)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getBatchTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/batch-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_20 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_20)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMakerConfirmationData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/data", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_21 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_21)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postMakerConfirmationAction = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/action", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_22 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_22)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMakerConfirmationDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/data/batch-detail", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_23 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_23)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMakerConfirmationBatchRejectionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/data/batch-detail/rejection", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_24 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_24)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getActionTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_25;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/receivable-action/action-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_25 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_25)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getProductMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_26;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/receivable-action/product")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_26 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_26)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionTypeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_27;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/receivable-action/transaction-type")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_27 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_27)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableActionData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_28;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/data", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_28 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_28)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postReceivableActionAction = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_29;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/action", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_29 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_29)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableActionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_30;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/data/batch-detail", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_30 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_30)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableActionBatchRejectionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_31;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/data/batch-detail/rejection", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_31 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_31)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMandateManagementData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_32;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mandate/data", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_32 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_32)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var createMandateManagementData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_33;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mandate/create", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_33 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_33)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var createDirectDebitData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_34;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/direct-debit/create", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_34 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_34)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var checkDuplicateMandateManagementData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_35;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mandate/create/check-duplicate", body)];
                case 1:
                    response = _a.sent();
                    if (response.data.code !== 200) {
                        throw new Error(response.data.message);
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_35 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_35)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var checkDuplicateDirectDebitData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_36;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/direct-debit/create/check-duplicate", body)];
                case 1:
                    response = _a.sent();
                    if (response.data.code !== 200) {
                        throw new Error(response.data.message);
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_36 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_36)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postCreateOverride = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_37;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/inquiry/counter-party", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_37 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_37)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMandateDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_38;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mandate/data/detail", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_38 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_38)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateMandateManagementData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_39;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mandate/update", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_39 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_39)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableInquiryData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_40;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_40 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_40)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableInquiryDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_41;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data/batch-detail", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_41 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_41)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableInquiryBatchRejectionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_42;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data/batch-detail/rejection", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_42 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_42)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableInquiryTransactionDataDetail = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_43;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data/detail", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_43 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_43)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableOverviewData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_44;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-overview/overview", {
                            processId: (0, uuid_1.v4)(),
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_44 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_44)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableOverviewSummaryData = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var body, response, error_45;
        var _c = _b.processId, processId = _c === void 0 ? (0, uuid_1.v4)() : _c, _d = _b.dateRangeId, dateRangeId = _d === void 0 ? "1" : _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    body = {
                        processId: processId,
                        dateRangeId: dateRangeId,
                    };
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-overview/summary", body)];
                case 2:
                    response = _e.sent();
                    return [2 /*return*/, response.data];
                case 3:
                    error_45 = _e.sent();
                    return [4 /*yield*/, Promise.reject(error_45)];
                case 4: return [2 /*return*/, _e.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableOverviewSummaryRangeMappings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_46;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get(API_PREFIX + "/mapping/receivable-summary/range")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_46 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_46)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableOverviewTransactionInProgressData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_47;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-overview/transaction-in-progress", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_47 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_47)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableOverviewRejectionMandateDetailsData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_48;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-overview/rejection-mandate-details", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_48 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_48)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getReceivableOverviewHistoryData = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var body, response, error_49;
        var _c = _b.processId, processId = _c === void 0 ? (0, uuid_1.v4)() : _c, _d = _b.month, month = _d === void 0 ? new Date().getMonth() + 1 : _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    body = {
                        processId: processId,
                        month: month,
                    };
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-overview/history", body)];
                case 2:
                    response = _e.sent();
                    return [2 /*return*/, response.data];
                case 3:
                    error_49 = _e.sent();
                    return [4 /*yield*/, Promise.reject(error_49)];
                case 4: return [2 /*return*/, _e.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var exportMakerConfirmationData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_50;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/data/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "maker_confirmation_data_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_50 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_50)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportMakerConfirmationDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_51;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/data/batch-detail/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "maker_confirmation_data_detail_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_51 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_51)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportMakerConfirmationBatchRejectionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_52;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/maker-confirmation/data/batch-detail/rejection/export", body, { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "maker_confirmation_rejection_detail_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_52 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_52)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportReceivableActionData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_53;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/data/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "receivable_action_data_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_53 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_53)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportReceivableActionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_54;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/data/batch-detail/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "receivable_action_detail_data_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_54 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_54)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportReceivableActionBatchRejectionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_55;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-action/data/batch-detail/rejection/export", body, { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "receivable_action_rejection_detail_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_55 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_55)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportReceivableInquiryData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_56;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "receivable_inquiry_data_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_56 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_56)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportReceivableInquiryDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_57;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data/batch-detail/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "receivable_inquiry_detail_data_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_57 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_57)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportReceivableInquiryBatchRejectionDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_58;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/receivable-inquiry/data/batch-detail/rejection/export", body, { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "receivable_inquiry_rejection_detail_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_58 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_58)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportMandateManagementData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_59;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/mandate/data/export", body, { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "mandate_data_".concat(body.exportCriteria.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_59 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_59)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var postUploadCounterPartyValidation = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_60;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/batch/file-upload/cpv", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_60 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_60)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCounterPartyValidationData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_61;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/cpv/data", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_61 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_61)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportCounterPartyValidationData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_62;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/cpv/data/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "cpv_data_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_62 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_62)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var exportCounterPartyValidationDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, isCsv, contentDisposition, fileName, file, error_63;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/cpv/data/batch-detail/export", body, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    isCsv = body.fileTypeId === types_1.ReceivableFileDownloadType.csv;
                    contentDisposition = response.headers["content-disposition"];
                    fileName = "";
                    if (contentDisposition) {
                        fileName = contentDisposition
                            .split(";")
                            .find(function (n) { return n.includes("filename="); })
                            .replace("filename=", "")
                            .trim()
                            .slice(1, -1);
                    }
                    else {
                        fileName = "cpv_data_detail_".concat(body.companyCode, "_").concat(Date.now());
                    }
                    if (isCsv) {
                        file = new Blob([response.data], { type: "text/csv" });
                        (0, downloadjs_1.default)(file, fileName);
                        return [2 /*return*/];
                    }
                    (0, downloadjs_1.default)(response.data, fileName);
                    return [2 /*return*/];
                case 2:
                    error_63 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_63)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCounterPartyValidationDetailData = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_64;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(API_PREFIX + "/cpv/data/batch-detail", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_64 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_64)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        postUploadMandateFile: postUploadMandateFile,
        downloadTemplateByID: downloadTemplateByID,
        checkDuplicateFile: checkDuplicateFile,
        getListTemplate: getListTemplate,
        getFileFormatMappings: getFileFormatMappings,
        getFileTypeMappings: getFileTypeMappings,
        getMandateTypeMappings: getMandateTypeMappings,
        getMandateCategoryMappings: getMandateCategoryMappings,
        getStatusMappings: getStatusMappings,
        getAmountTypeMappings: getAmountTypeMappings,
        getTransactionFrequencyMappings: getTransactionFrequencyMappings,
        getBatchTypeMappings: getBatchTypeMappings,
        getMakerConfirmationData: getMakerConfirmationData,
        postMakerConfirmationAction: postMakerConfirmationAction,
        getMandateManagementData: getMandateManagementData,
        createMandateManagementData: createMandateManagementData,
        checkDuplicateMandateManagementData: checkDuplicateMandateManagementData,
        postCreateOverride: postCreateOverride,
        getMakerConfirmationDetailData: getMakerConfirmationDetailData,
        getMakerConfirmationBatchRejectionDetailData: getMakerConfirmationBatchRejectionDetailData,
        getMandateDetailData: getMandateDetailData,
        updateMandateManagementData: updateMandateManagementData,
        getActionTypeMappings: getActionTypeMappings,
        getProductMappings: getProductMappings,
        getReportTypeMappings: getReportTypeMappings,
        getTransactionTypeMappings: getTransactionTypeMappings,
        downloadReceivableReport: downloadReceivableReport,
        generateReceivableReport: generateReceivableReport,
        getDataReceivableReportsList: getDataReceivableReportsList,
        downloadBatchReceivableReport: downloadBatchReceivableReport,
        getReceivableActionData: getReceivableActionData,
        postReceivableActionAction: postReceivableActionAction,
        getReceivableActionDetailData: getReceivableActionDetailData,
        getReceivableActionBatchRejectionDetailData: getReceivableActionBatchRejectionDetailData,
        getReceivableInquiryData: getReceivableInquiryData,
        getReceivableInquiryDetailData: getReceivableInquiryDetailData,
        getReceivableInquiryBatchRejectionDetailData: getReceivableInquiryBatchRejectionDetailData,
        getReceivableInquiryTransactionDataDetail: getReceivableInquiryTransactionDataDetail,
        getMandateCodeMappings: getMandateCodeMappings,
        createDirectDebitData: createDirectDebitData,
        checkDuplicateDirectDebitData: checkDuplicateDirectDebitData,
        postUploadDirectDebit: postUploadDirectDebit,
        getReceivableOverviewData: getReceivableOverviewData,
        getReceivableOverviewSummaryData: getReceivableOverviewSummaryData,
        getReceivableOverviewSummaryRangeMappings: getReceivableOverviewSummaryRangeMappings,
        getReceivableOverviewTransactionInProgressData: getReceivableOverviewTransactionInProgressData,
        getReceivableOverviewRejectionMandateDetailsData: getReceivableOverviewRejectionMandateDetailsData,
        getReceivableOverviewHistoryData: getReceivableOverviewHistoryData,
        exportMakerConfirmationData: exportMakerConfirmationData,
        exportMakerConfirmationDetailData: exportMakerConfirmationDetailData,
        exportMakerConfirmationBatchRejectionDetailData: exportMakerConfirmationBatchRejectionDetailData,
        exportReceivableActionData: exportReceivableActionData,
        exportReceivableActionDetailData: exportReceivableActionDetailData,
        exportReceivableActionBatchRejectionDetailData: exportReceivableActionBatchRejectionDetailData,
        exportReceivableInquiryData: exportReceivableInquiryData,
        exportReceivableInquiryDetailData: exportReceivableInquiryDetailData,
        exportReceivableInquiryBatchRejectionDetailData: exportReceivableInquiryBatchRejectionDetailData,
        exportMandateManagementData: exportMandateManagementData,
        postUploadCounterPartyValidation: postUploadCounterPartyValidation,
        getCounterPartyValidationData: getCounterPartyValidationData,
        exportCounterPartyValidationData: exportCounterPartyValidationData,
        exportCounterPartyValidationDetailData: exportCounterPartyValidationDetailData,
        getAccountStatusMappings: getAccountStatusMappings,
        getCounterPartyValidationDetailData: getCounterPartyValidationDetailData,
    };
};
exports.default = AccountReceivableService;
//# sourceMappingURL=account-receivable.js.map