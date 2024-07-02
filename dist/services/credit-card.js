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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var custom_axios_1 = require("./custom-axios");
var types_1 = require("@/types");
var CreditCardUploadService = function () {
    var getBankIssuerList = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("upload-cc-payment/parameter/bank-issuer")];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200)
                        return [2 /*return*/, response.data];
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getDebitAccList = function (companyID) { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, error_2;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    params = {
                        "account.companyID": companyID,
                        "account.accountCurrency": "IDR",
                        "productID": types_1.ProductIdByTypeEnum.UPLOAD_CC_PAYMENT,
                        "filterOr": "AccountStatus:ACTIVE|AccountStatus:RESTRICTED"
                    };
                    return [4 /*yield*/, custom_axios_1.customAxios.get("account/dataByRole", { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_2 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var validateDebitAcc = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var body, response, error_3;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    body = __assign({}, params);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("upload-cc-payment/multiple/outbound/check-debit-account", body)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_3 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var validateCCNumber = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var body, response, error_4;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    body = __assign({}, params);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("upload-cc-payment/multiple/outbound/inquiry", body)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_4 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var fileDownload = function (path, param) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/file/".concat(path, "/").concat(param), {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200)
                        throw new Error("Error");
                    return [2 /*return*/, response];
                case 2:
                    error_5 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_5 === null || error_5 === void 0 ? void 0 : error_5.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var submitUploadCCPayment = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/submit-upload", payload)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_6 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_6 === null || error_6 === void 0 ? void 0 : error_6.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUserList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/user/data", { params: params })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            data: response.data.data,
                            response: response,
                            pagination: response.data.pagination,
                        }];
                case 2:
                    error_7 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_7 === null || error_7 === void 0 ? void 0 : error_7.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getListPaymentHistory = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_8, notAllowed, status_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/history/list", { params: params })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_8 = _b.sent();
                    notAllowed = [400, 401, 403];
                    status_1 = (_a = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (!notAllowed.includes(status_1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [4 /*yield*/, Promise.reject((error_8 === null || error_8 === void 0 ? void 0 : error_8.message) || { message: "Network Error" })];
                case 5: return [2 /*return*/, _b.sent()];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getListCompletedPaymentHistory = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/history/final/list", { params: params })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            data: response.data.data,
                            response: response,
                            pagination: response.data.pagination,
                        }];
                case 2:
                    error_9 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_9 === null || error_9 === void 0 ? void 0 : error_9.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getListMultiplePayment = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_10, notAllowed, status_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/multiple/task/list", { params: __assign(__assign({}, params), { typeTab: "transaction" }) })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_10 = _b.sent();
                    notAllowed = [400, 401, 403];
                    status_2 = (_a = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (!notAllowed.includes(status_2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [4 /*yield*/, Promise.reject((error_10 === null || error_10 === void 0 ? void 0 : error_10.message) || { message: "Network Error" })];
                case 5: return [2 /*return*/, _b.sent()];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getCCPaymentDetail = function (taskId, final, params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_11, notAllowed, status_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/history/".concat(final ? "final/" : "", "detail/").concat(taskId), { params: params })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, {
                            data: response.data.data.items,
                            detail: response.data.data.summary,
                            pagination: response.data.data.pagination,
                        }];
                case 2:
                    error_11 = _b.sent();
                    notAllowed = [400, 401, 403];
                    status_3 = (_a = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (status_3 === 404)
                        return [2 /*return*/, { detail: "404" }];
                    if (notAllowed.includes(status_3))
                        return [2 /*return*/, { detail: "Unauthorized" }];
                    return [4 /*yield*/, Promise.reject((error_11 === null || error_11 === void 0 ? void 0 : error_11.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCCMultipleDetail = function (taskId, final, params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_12, notAllowed, status_4;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/multiple/".concat(final ? "history/" : "task", "/detail/").concat(taskId), { params: params })];
                case 1:
                    response = _d.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_12 = _d.sent();
                    notAllowed = [400, 401, 403];
                    status_4 = (_a = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (status_4 === 404)
                        return [2 /*return*/, { detail: "404" }];
                    if (notAllowed.includes(status_4))
                        return [2 /*return*/, { detail: "Unauthorized" }];
                    return [4 /*yield*/, Promise.reject(((_c = (_b = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "Network Error")];
                case 3: return [2 /*return*/, _d.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var deleteTask = function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/history/delete", { taskId: taskId })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_13 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_13 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var deleteTaskMultipleCC = function (taskIds) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/multiple/task/delete", { taskIds: taskIds })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_14 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_14 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var sendForApproval = function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/history/send", { taskId: taskId })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_15 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_15 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var submitMultipleTask = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_16;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/multiple/task/submit", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_16 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateMultipleTask = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_17;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/multiple/task/update", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_17 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateTaskStatus = function (props, isMultiple) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/".concat(isMultiple ? "multiple/task/action" : "update-statuses"), __assign({}, props))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_18 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_18 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadDataTable = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir, response, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
                    filter = "?filter=".concat(getFilter);
                    sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
                    dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .get(encodeURI("/upload-cc-payment/history/list/template/".concat(format).concat(filter).concat(sort).concat(dir)), {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Upload CC Payment", ".").concat(format), content);
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadFinalDataTable = function (props, isMultiple) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir, type, response, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
                    filter = "?filter=".concat(getFilter);
                    sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
                    dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
                    type = isMultiple ? "&typeTab=history" : "";
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .get(encodeURI("/upload-cc-payment/".concat(isMultiple ? "multiple/task/list/download" : "history/final/list/template", "/").concat(format).concat(filter).concat(sort).concat(dir).concat(type)), {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Upload CC Payment", ".").concat(format), content);
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadDetailTable = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, itemIds, taskId, type, ids, encoded, replaceString, response, content;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    format = props.format, itemIds = props.itemIds, taskId = props.taskId, type = props.type;
                    ids = [];
                    itemIds === null || itemIds === void 0 ? void 0 : itemIds.forEach(function (id) {
                        ids.push("upload_cc_payment_item_id:".concat(id));
                    });
                    encoded = btoa(ids.join("|"));
                    replaceString = encoded ? (_a = encoded.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .get(encodeURI("/upload-cc-payment/history/".concat(type ? "final/" : "", "detail/template/").concat(format)), {
                            responseType: "blob",
                            params: {
                                task_id: taskId,
                                filterOr: replaceString
                            },
                        })];
                case 1:
                    response = _b.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("CC Payment Detail", ".").concat(format), content);
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadDetailReceipt = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var isSingle, response, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isSingle = typeof props.itemId === "string";
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .post(encodeURI("/upload-cc-payment/history/final/detail/receipt".concat(!isSingle ? "/multiple" : "")), __assign({}, props), { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("CC Payment Receipt").concat(isSingle ? ".pdf" : ".zip"), content);
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadReceiptMultiple = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var isSingle, response, content;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    isSingle = ((_a = props.taskIds) === null || _a === void 0 ? void 0 : _a.length) === 1;
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/multiple/history/download/receipt", __assign({}, props), { responseType: "blob" })];
                case 1:
                    response = _b.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("CC Payment Receipt").concat(isSingle ? ".pdf" : ".zip"), content);
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadOneToOneList = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, getFilterOr, typeTab, filterOr, encodedFilterOr, response, content, error_19;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 4]);
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr, typeTab = props.typeTab;
                    filterOr = btoa(getFilterOr);
                    encodedFilterOr = filterOr ? (_a = filterOr.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .get(encodeURI("/upload-cc-payment/multiple/task/list/download/".concat(format)), {
                            responseType: "blob",
                            params: __assign(__assign(__assign(__assign(__assign({}, (encodedFilterOr && { filterOr: encodedFilterOr })), (getFilter && { filter: getFilter })), (getSort && { sort: getSort })), (getDir && { dir: getDir })), (typeTab && { typeTab: typeTab || "transaction" })),
                        })];
                case 1:
                    response = _d.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Credit_Card", ".").concat(format), content);
                    return [2 /*return*/, true];
                case 2:
                    error_19 = _d.sent();
                    return [4 /*yield*/, Promise.reject(((_c = (_b = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "Network Error")];
                case 3: return [2 /*return*/, _d.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getFilterData = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_20;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/multiple/task/list/filter", {
                            params: params
                        })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_20 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, _a, filter, split, response, error_21;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = params.page, limit = params.limit, query = params.query, _a = params.filter, filter = _a === void 0 ? "," : _a;
                    split = filter.split(",");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/task/activity-logs/".concat(type), {
                            page: page,
                            limit: limit,
                            search: query,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 3:
                    error_21 = _b.sent();
                    return [4 /*yield*/, Promise.reject((error_21 === null || error_21 === void 0 ? void 0 : error_21.message) || { message: "Network Error" })];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    var getSavedCcList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_22, notAllowed, status_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/upload-cc-payment/multiple/credit-card/list", { params: params })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_22 = _b.sent();
                    notAllowed = [400, 401, 403];
                    status_5 = (_a = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (!notAllowed.includes(status_5)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [4 /*yield*/, Promise.reject((error_22 === null || error_22 === void 0 ? void 0 : error_22.message) || { message: "Network Error" })];
                case 5: return [2 /*return*/, _b.sent()];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var deleteSavedCc = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, error_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    params = {
                        creditCardId: id,
                    };
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/multiple/credit-card/delete", params)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_23 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_23 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateSavedCc = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/upload-cc-payment/multiple/credit-card/edit", params)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_24 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_24 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        getBankIssuerList: getBankIssuerList,
        getDebitAccList: getDebitAccList,
        fileDownload: fileDownload,
        submitUploadCCPayment: submitUploadCCPayment,
        getListPaymentHistory: getListPaymentHistory,
        getListCompletedPaymentHistory: getListCompletedPaymentHistory,
        getListMultiplePayment: getListMultiplePayment,
        getCCPaymentDetail: getCCPaymentDetail,
        getCCMultipleDetail: getCCMultipleDetail,
        getFilterData: getFilterData,
        downloadDataTable: downloadDataTable,
        downloadFinalDataTable: downloadFinalDataTable,
        downloadDetailTable: downloadDetailTable,
        downloadDetailReceipt: downloadDetailReceipt,
        downloadReceiptMultiple: downloadReceiptMultiple,
        downloadOneToOneList: downloadOneToOneList,
        getActivityLogs: getActivityLogs,
        deleteTask: deleteTask,
        deleteTaskMultipleCC: deleteTaskMultipleCC,
        sendForApproval: sendForApproval,
        updateTaskStatus: updateTaskStatus,
        getUserList: getUserList,
        submitMultipleTask: submitMultipleTask,
        validateCCNumber: validateCCNumber,
        validateDebitAcc: validateDebitAcc,
        updateMultipleTask: updateMultipleTask,
        getSavedCcList: getSavedCcList,
        deleteSavedCc: deleteSavedCc,
        updateSavedCc: updateSavedCc
    };
};
exports.default = CreditCardUploadService;
//# sourceMappingURL=credit-card.js.map