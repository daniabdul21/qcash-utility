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
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var DOPupukService = function () {
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
                        "productID": 452,
                        "filterOr": "AccountStatus:ACTIVE|AccountStatus:RESTRICTED"
                    };
                    return [4 /*yield*/, custom_axios_1.default.get("account/dataByRole", { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
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
                    return [4 /*yield*/, custom_axios_1.default.post("do-pupuk-indonesia/outbound/check-debit-account", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var validateBookingCode = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("do-pupuk-indonesia/outbound/inquiry", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
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
    var submitTask = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("do-pupuk-indonesia/task/submit", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
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
    var submitUpdateTask = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("do-pupuk-indonesia/task/update", payload)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_5 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getPupukTaskList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var typeTab, response, error_6;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    typeTab = params.typeTab;
                    if (!typeTab)
                        params.typeTab = "transaction";
                    return [4 /*yield*/, custom_axios_1.default.get("do-pupuk-indonesia/task/list", { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_6 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getPupukTaskDetail = function (transactionId, tab) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_7, notAllowed;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.default.get("do-pupuk-indonesia/".concat(tab || "task", "/detail/").concat(transactionId))];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_7 = _e.sent();
                    notAllowed = [400, 401, 403];
                    if (!(((_a = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _a === void 0 ? void 0 : _a.status) === 404)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.reject("NotFound")];
                case 3: return [2 /*return*/, _e.sent()];
                case 4:
                    if (!notAllowed.includes((_b = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _b === void 0 ? void 0 : _b.status)) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.reject("Unauthorized")];
                case 5: return [2 /*return*/, _e.sent()];
                case 6: return [4 /*yield*/, Promise.reject(((_d = (_c = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || "Network Error")];
                case 7: return [2 /*return*/, _e.sent()];
                case 8:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var body, response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    body = { taskIds: params === null || params === void 0 ? void 0 : params.taskIds };
                    return [4 /*yield*/, custom_axios_1.default.post("do-pupuk-indonesia/task/delete", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_8 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_8 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var updateTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var body, response, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    body = __assign({}, params);
                    return [4 /*yield*/, custom_axios_1.default.post("do-pupuk-indonesia/task/action", body)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_9 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_9 || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadDataTable = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, getFilterOr, typeTab, filterOr, encodedFilterOr, response, content, error_10;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 4]);
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr, typeTab = props.typeTab;
                    filterOr = btoa(getFilterOr);
                    encodedFilterOr = filterOr ? (_a = filterOr.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.default
                            .get(encodeURI("/do-pupuk-indonesia/task/list/download/".concat(format)), {
                            responseType: "blob",
                            params: __assign(__assign(__assign(__assign(__assign({}, (encodedFilterOr && { filterOr: encodedFilterOr })), (getFilter && { filter: getFilter })), (getSort && { sort: getSort })), (getDir && { dir: getDir })), (typeTab && { typeTab: typeTab })),
                        })];
                case 1:
                    response = _d.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Pupuk_Indonesia", ".").concat(format), content);
                    return [2 /*return*/, true];
                case 2:
                    error_10 = _d.sent();
                    return [4 /*yield*/, Promise.reject(((_c = (_b = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "Network Error")];
                case 3: return [2 /*return*/, _d.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var downloadReceipt = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var isSingle, fileName, fileFormat, body, response, content, error_11;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    isSingle = params.transactionId.length === 1;
                    fileName = isSingle ? params.transactionId[0] : "DO Pupuk Indonesia Receipt_" + (0, moment_1.default)().format("DD-MM-YYYY");
                    fileFormat = isSingle ? ".pdf" : ".zip";
                    body = __assign({}, params);
                    return [4 /*yield*/, custom_axios_1.default.post(encodeURI("do-pupuk-indonesia/history/download/receipt"), body, { responseType: "blob" })];
                case 1:
                    response = _c.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(fileName).concat(fileFormat), content);
                    return [2 /*return*/, true];
                case 2:
                    error_11 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getTaskData = function (transactionId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_12, notAllowed;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 8]);
                    return [4 /*yield*/, custom_axios_1.default.get("/do-pupuk-indonesia/task/detail/".concat(transactionId))];
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
                case 8:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getFilterData = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_13;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/do-pupuk-indonesia/task/list/filter", {
                            params: params
                        })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_13 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    var getStatusGroup = function (tab, filter, query) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_14;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/do-pupuk-indonesia/filter/status", { params: { tab: tab, filter: filter, query: query } })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_14 = _c.sent();
                    return [4 /*yield*/, Promise.reject(((_b = (_a = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Network Error")];
                case 3: return [2 /*return*/, _c.sent()];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        deleteTask: deleteTask,
        downloadDataTable: downloadDataTable,
        downloadReceipt: downloadReceipt,
        getDebitAccList: getDebitAccList,
        getFilterData: getFilterData,
        getPupukTaskList: getPupukTaskList,
        getPupukTaskDetail: getPupukTaskDetail,
        getStatusGroup: getStatusGroup,
        submitTask: submitTask,
        updateTask: updateTask,
        validateBookingCode: validateBookingCode,
        validateDebitAcc: validateDebitAcc,
        getTaskData: getTaskData,
        submitUpdateTask: submitUpdateTask
    };
};
exports.default = DOPupukService;
//# sourceMappingURL=do-pupuk.js.map