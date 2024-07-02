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
var downloadjs_1 = __importDefault(require("downloadjs"));
var custom_axios_1 = require("./custom-axios");
var types_1 = require("@/types");
var moment_1 = __importDefault(require("moment"));
var CardMerchantService = function () {
    var getDebitAccList = function (companyID) { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    params = {
                        "account.companyID": companyID,
                        "account.accountCurrency": "IDR",
                        productID: types_1.ProductIdByTypeEnum.CARD_MERCHANT_CARD_REQUEST,
                        filterOr: "AccountStatus:ACTIVE|AccountStatus:RESTRICTED",
                    };
                    return [4 /*yield*/, custom_axios_1.customAxios.get("account/dataByRole", { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var validateDebitAcc = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("card-merchant/outbound/check-debit-account", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var submitRequestCard = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("card-merchant/card-request/task/submit", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_3 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateRequestCard = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("card-merchant/card-request/task/update", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_4 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCardMerchantList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5, notAllowed, status_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/transaction/list", { params: params })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_5 = _b.sent();
                    notAllowed = [400, 401, 403];
                    status_1 = (_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (!notAllowed.includes(status_1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [4 /*yield*/, Promise.reject((error_5 === null || error_5 === void 0 ? void 0 : error_5.message) || { message: "Network Error" })];
                case 5: return [2 /*return*/, _b.sent()];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getCardMerchantListHistory = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6, notAllowed, status_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/history/list", { params: params })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_6 = _b.sent();
                    notAllowed = [400, 401, 403];
                    status_2 = (_a = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _a === void 0 ? void 0 : _a.status;
                    if (!notAllowed.includes(status_2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [4 /*yield*/, Promise.reject((error_6 === null || error_6 === void 0 ? void 0 : error_6.message) || { message: "Network Error" })];
                case 5: return [2 /*return*/, _b.sent()];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var downloadCardMerchantList = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, getFilterOr, typeTab, filterOr, encodedFilterOr, response, content, error_7;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 4]);
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr, typeTab = props.typeTab;
                    filterOr = btoa(getFilterOr);
                    encodedFilterOr = filterOr ? (_a = filterOr.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.customAxios.get(encodeURI("/card-merchant/transaction/download/list/".concat(format)), {
                            responseType: "blob",
                            params: __assign(__assign(__assign(__assign(__assign({}, (encodedFilterOr && { filterOr: encodedFilterOr })), (getFilter && { filter: getFilter })), (getSort && { sort: getSort })), (getDir && { dir: getDir })), (typeTab && { typeTab: typeTab || "Card Request" })),
                        })];
                case 1:
                    response = _d.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat(String(typeTab).toUpperCase(), ".").concat(format), content);
                    return [2 /*return*/, true];
                case 2:
                    error_7 = _d.sent();
                    return [4 /*yield*/, Promise.reject(((_c = (_b = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "Network Error")];
                case 3: return [2 /*return*/, _d.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadCardMerchantHistory = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, getFilterOr, typeTab, filterOr, encodedFilterOr, response, content, fileName, error_8;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 4]);
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr, typeTab = props.typeTab;
                    filterOr = btoa(getFilterOr);
                    encodedFilterOr = filterOr ? (_a = filterOr.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.customAxios.get(encodeURI("/card-merchant/history/download/list/".concat(format)), {
                            responseType: "blob",
                            params: __assign(__assign(__assign(__assign(__assign({}, (encodedFilterOr && { filterOr: encodedFilterOr })), (getFilter && { filter: getFilter })), (getSort && { sort: getSort })), (getDir && { dir: getDir })), (typeTab && { typeTab: typeTab || "Card Request" })),
                        })];
                case 1:
                    response = _d.sent();
                    content = response.headers["content-type"];
                    fileName = "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat(String(typeTab)
                        .toUpperCase()
                        .replace("-", "_"), "_HISTORY.").concat(format);
                    (0, downloadjs_1.default)(response.data, fileName, content);
                    return [2 /*return*/, true];
                case 2:
                    error_8 = _d.sent();
                    return [4 /*yield*/, Promise.reject(((_c = (_b = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "Network Error")];
                case 3: return [2 /*return*/, _d.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var submitConfirmCard = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_9;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("card-merchant/card-confirmation/task/submit", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_9 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateConfirmCard = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_10;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("card-merchant/card-confirmation/task/update", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_10 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getConfirmationCard = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_11;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/card-confirmation/outbound/cards", { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_11 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCardRequestDetail = function (transactionId, isHistory) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_12, notAllowed;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/card-request/".concat(isHistory ? "history/" : "task/", "detail/").concat(transactionId))];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_12 = _e.sent();
                    notAllowed = [400, 401, 403];
                    if (!(((_a = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _a === void 0 ? void 0 : _a.status) === 404)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("NotFound")];
                case 3: return [2 /*return*/, _e.sent()];
                case 4:
                    if (!notAllowed.includes((_b = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _b === void 0 ? void 0 : _b.status)) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 5: return [2 /*return*/, _e.sent()];
                case 6: return [4 /*yield*/, Promise.reject(((_d = (_c = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "Network Error")];
                case 7: return [2 /*return*/, _e.sent()];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var getCardConfirmationDetail = function (transactionId, isHistory) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_13, notAllowed;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/card-confirmation/".concat(isHistory ? "history/" : "task/", "detail/").concat(transactionId))];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_13 = _e.sent();
                    notAllowed = [400, 401, 403];
                    if (!(((_a = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _a === void 0 ? void 0 : _a.status) === 404)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("NotFound")];
                case 3: return [2 /*return*/, _e.sent()];
                case 4:
                    if (!notAllowed.includes((_b = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _b === void 0 ? void 0 : _b.status)) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 5: return [2 /*return*/, _e.sent()];
                case 6: return [4 /*yield*/, Promise.reject(((_d = (_c = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "Network Error")];
                case 7: return [2 /*return*/, _e.sent()];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var getGeneratePinDetail = function (transactionId, isHistory) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_14, notAllowed;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/generate-pin/".concat(isHistory ? "history/" : "task/", "detail/").concat(transactionId))];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_14 = _e.sent();
                    notAllowed = [400, 401, 403];
                    if (!(((_a = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _a === void 0 ? void 0 : _a.status) === 404)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("NotFound")];
                case 3: return [2 /*return*/, _e.sent()];
                case 4:
                    if (!notAllowed.includes((_b = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _b === void 0 ? void 0 : _b.status)) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 5: return [2 /*return*/, _e.sent()];
                case 6: return [4 /*yield*/, Promise.reject(((_d = (_c = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "Network Error")];
                case 7: return [2 /*return*/, _e.sent()];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var getCardBlockDetail = function (transactionId, isHistory) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_15, notAllowed;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/card-block/".concat(isHistory ? "history/" : "task/", "detail/").concat(transactionId))];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_15 = _e.sent();
                    notAllowed = [400, 401, 403];
                    if (!(((_a = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _a === void 0 ? void 0 : _a.status) === 404)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("NotFound")];
                case 3: return [2 /*return*/, _e.sent()];
                case 4:
                    if (!notAllowed.includes((_b = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _b === void 0 ? void 0 : _b.status)) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 5: return [2 /*return*/, _e.sent()];
                case 6: return [4 /*yield*/, Promise.reject(((_d = (_c = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "Network Error")];
                case 7: return [2 /*return*/, _e.sent()];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var getCardRelationDetail = function (transactionId, isHistory, params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_16, notAllowed;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _j.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/card-relation/".concat(isHistory ? "history/" : "task/", "detail/").concat(transactionId), { params: params })];
                case 1:
                    response = _j.sent();
                    return [2 /*return*/, {
                            data: (_a = response.data.data.cardRelationItems) === null || _a === void 0 ? void 0 : _a.data,
                            detail: response.data.data.transactionInformation,
                            pagination: (_b = response.data.data.cardRelationItems) === null || _b === void 0 ? void 0 : _b.pagination,
                            workflowDoc: (_c = response.data.data) === null || _c === void 0 ? void 0 : _c.workflowDoc,
                            task: (_d = response.data.data) === null || _d === void 0 ? void 0 : _d.task,
                        }];
                case 2:
                    error_16 = _j.sent();
                    notAllowed = [400, 401, 403];
                    if (!(((_e = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _e === void 0 ? void 0 : _e.status) === 404)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("NotFound")];
                case 3: return [2 /*return*/, _j.sent()];
                case 4:
                    if (!notAllowed.includes((_f = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _f === void 0 ? void 0 : _f.status)) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 5: return [2 /*return*/, _j.sent()];
                case 6: return [4 /*yield*/, Promise.reject(((_h = (_g = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.message) || "Network Error")];
                case 7: return [2 /*return*/, _j.sent()];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var downloadCardRelation = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, getFilterOr, id, filterOr, encodedFilterOr, response, content, error_17;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 4]);
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr, id = props.id;
                    filterOr = btoa(getFilterOr);
                    encodedFilterOr = filterOr ? (_a = filterOr.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.customAxios.get(encodeURI("/card-merchant/card-relation/task/detail/download/".concat(format)), {
                            responseType: "blob",
                            params: __assign(__assign(__assign(__assign(__assign({}, (encodedFilterOr && { filterOr: encodedFilterOr })), (getFilter && { filter: getFilter })), (getSort && { sort: getSort })), (getDir && { dir: getDir })), { taskId: id }),
                        })];
                case 1:
                    response = _d.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(String(id).toUpperCase(), ".").concat(format), content);
                    return [2 /*return*/, true];
                case 2:
                    error_17 = _d.sent();
                    return [4 /*yield*/, Promise.reject(((_c = (_b = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "Network Error")];
                case 3: return [2 /*return*/, _d.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var searchCardRelationByNumber = function (cardNumber, path) { return __awaiter(void 0, void 0, void 0, function () {
        var customPath, response, error_18;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    customPath = path === "generate-pin" ? "card-relation/task/detail/card-relation-item" : "generate-pin/task";
                    return [4 /*yield*/, custom_axios_1.customAxios.get("card-merchant/".concat(customPath, "/").concat(cardNumber))];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_18 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var deleteTransaction = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var body, response, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    body = { taskIds: params === null || params === void 0 ? void 0 : params.taskIds };
                    return [4 /*yield*/, custom_axios_1.customAxios.post("".concat(params === null || params === void 0 ? void 0 : params.path, "/task/delete"), body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_19 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_19 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateTransaction = function (payload, path) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_20;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("".concat(path, "/task/action"), payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_20 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var generateAndBlock = function (params, path) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_21;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("".concat(path, "/task/submit"), params)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_21 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFilterData = function (params, isHistory) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_22;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/card-merchant/".concat(isHistory ? "history" : "transaction", "/filter/list"), {
                            params: params,
                        })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_22 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var submitCardRelation = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/card-merchant/card-relation/task/submit", payload)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_23 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_23 === null || error_23 === void 0 ? void 0 : error_23.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var sendCardRelation = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.post("/card-merchant/card-relation/task/send", payload)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_24 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_24 === null || error_24 === void 0 ? void 0 : error_24.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadTemplateRelation = function (extension) { return __awaiter(void 0, void 0, void 0, function () {
        var response, content, error_25;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/card-merchant/card-relation/file/template/".concat(extension), {
                            responseType: "blob",
                        })];
                case 1:
                    response = _c.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "TEMPLATE_CardRelation.".concat(extension === "converter" ? "xls" : extension), content);
                    return [2 /*return*/, true];
                case 2:
                    error_25 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCardRelationFilter = function (transactionId, field) { return __awaiter(void 0, void 0, void 0, function () {
        var params, response, error_26;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    params = {
                        field: field,
                    };
                    return [4 /*yield*/, custom_axios_1.customAxios.get("/card-merchant/card-relation/filter/".concat(transactionId), { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_26 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        deleteTransaction: deleteTransaction,
        generateAndBlock: generateAndBlock,
        getDebitAccList: getDebitAccList,
        validateDebitAcc: validateDebitAcc,
        submitRequestCard: submitRequestCard,
        getCardMerchantList: getCardMerchantList,
        getCardMerchantListHistory: getCardMerchantListHistory,
        getConfirmationCard: getConfirmationCard,
        submitConfirmCard: submitConfirmCard,
        getCardRequestDetail: getCardRequestDetail,
        updateRequestCard: updateRequestCard,
        updateConfirmCard: updateConfirmCard,
        getCardConfirmationDetail: getCardConfirmationDetail,
        downloadCardMerchantList: downloadCardMerchantList,
        downloadCardMerchantHistory: downloadCardMerchantHistory,
        searchCardRelationByNumber: searchCardRelationByNumber,
        updateTransaction: updateTransaction,
        getFilterData: getFilterData,
        sendCardRelation: sendCardRelation,
        submitCardRelation: submitCardRelation,
        downloadTemplateRelation: downloadTemplateRelation,
        getGeneratePinDetail: getGeneratePinDetail,
        getCardBlockDetail: getCardBlockDetail,
        getCardRelationDetail: getCardRelationDetail,
        downloadCardRelation: downloadCardRelation,
        getCardRelationFilter: getCardRelationFilter,
    };
};
exports.default = CardMerchantService;
//# sourceMappingURL=card-merchant.js.map