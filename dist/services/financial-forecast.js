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
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var FinancialForecastService = function () {
    var getRequest = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/forecasting/inquiry/request", props)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    error_1 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getEmailStatement = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filter, response, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    filter = {
                        filter: params === null || params === void 0 ? void 0 : params.filter,
                        // sort: params?.sort,
                        // dir: params?.dir
                    };
                    return [4 /*yield*/, custom_axios_1.default.get("/forecasting/email", { params: filter })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    err_1 = _b.sent();
                    console.log({ err: err_1 });
                    return [4 /*yield*/, Promise.reject(err_1)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadEmailStatement = function (fileFormat) { return __awaiter(void 0, void 0, void 0, function () {
        var response, content, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post(encodeURI("/forecasting/email/download"), {
                            fileFormat: fileFormat,
                        }, { responseType: "blob" })];
                case 1:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_EMAIL_STATEMENT.").concat(fileFormat === null || fileFormat === void 0 ? void 0 : fileFormat.toLocaleLowerCase()), content);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log({ error: error_2 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var createEmailStatement = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/forecasting/email/create", body)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_3 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_3)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateEmailStatement = function (taskId, body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/forecasting/email/update/".concat(taskId), body)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_4 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_4)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var deleteEmailStatement = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/forecasting/email/delete", body)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_5 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_5)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var resendEmailStatement = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/forecasting-generate-email/resend", body)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_6 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_6)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCheckInquiryAccount = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_7;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/forecasting/inquiry/check", props)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200)
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    error_7 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_7)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var cancelInquiryAccount = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("forecasting/inquiry/cancel", props)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200)
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    err_2 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_2)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileMT = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/forecasting-mt/file/".concat(id), { responseType: "blob" })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200)
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: response,
                        }];
                case 2:
                    err_3 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_3)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileNonMT = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/forecasting/file/".concat(id), { responseType: "blob" })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200)
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: response,
                        }];
                case 2:
                    err_4 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_4)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMenus = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/menu/license/data2", props)];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: res.data,
                        }];
                case 2:
                    err_5 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_5)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getDataAccountStatement2 = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("forecasting/data", { params: params })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_6 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_6)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getDataAccountStatement = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_7;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("forecasting/data")];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: res.data,
                        }];
                case 2:
                    err_7 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_7)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFileZip = function (request) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_8;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("forecasting/zip", { request: request }, { responseType: "arraybuffer" })];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, res];
                case 2:
                    err_8 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_8)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTrustedToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_9;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("trusted/token")];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, res];
                case 2:
                    err_9 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_9)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, _a, filter, split;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = params.page, limit = params.limit, query = params.query, _a = params.filter, filter = _a === void 0 ? "," : _a;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/".concat(type), {
                            page: page,
                            limit: limit,
                            search: query,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    }); }; };
    var getSummaryAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/account/dataByRole?productID=258")
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })
                            .catch(function (err) { return console.log(err); })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_8 = _a.sent();
                    console.log({ error: error_8 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var reportSummary = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var error_9;
        var norekVarchar = _b.norekVarchar, tanggalAwalDateTime = _b.tanggalAwalDateTime, tanggalAkhirDateTime = _b.tanggalAkhirDateTime;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/report-summary/customer-information", {
                            norekVarchar: norekVarchar,
                            tanggalAwalDateTime: tanggalAwalDateTime,
                            tanggalAkhirDateTime: tanggalAkhirDateTime,
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })
                            .catch(function (err) { return console.log(err); })];
                case 1: return [2 /*return*/, _c.sent()];
                case 2:
                    error_9 = _c.sent();
                    console.log({ error: error_9 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getListTransaction = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/report-summary/list-transaction", body)
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })
                            .catch(function (err) { return console.log(err); })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_10 = _a.sent();
                    console.log({ error: error_10 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getDetailTransaction = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var data, error_11;
        var trxReff = _b.trxReff, tanggalAwalDateTime = _b.tanggalAwalDateTime, tanggalAkhirDateTime = _b.tanggalAkhirDateTime, glsign = _b.glsign, amount = _b.amount;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post('/report-summary/detail-transaction', {
                            trxReff: trxReff,
                            tanggalAwalDateTime: tanggalAwalDateTime,
                            tanggalAkhirDateTime: tanggalAkhirDateTime,
                            glsign: glsign,
                            amount: amount
                        })];
                case 1:
                    data = _c.sent();
                    if (data.status !== 200) {
                        return [2 /*return*/, null];
                    }
                    else {
                        return [2 /*return*/, data.data];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _c.sent();
                    console.log({ error: error_11 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var downloadListSummary = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/report-summary/download-summary-transaction", body).then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_12 = _a.sent();
                    console.log({ error: error_12 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var downloadDetailTransaction = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        var error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/report-summary/download-detail-transaction", body).then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_13 = _a.sent();
                    console.log({ error: error_13 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleDownloadTransaction = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var response, content, error_14;
        var setLoading = _b.setLoading, dataTmp = _b.dataTmp, token = _b.token, setShowModalErr = _b.setShowModalErr, companyCode = _b.companyCode, tanggal_akhir_date_time = _b.tanggal_akhir_date_time, tanggal_awal_date_time = _b.tanggal_awal_date_time;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(encodeURI("/report-summary/download-detail-transaction"), {
                            detailTransaction: dataTmp.map(function (item, index) {
                                var _a, _b, _c;
                                return {
                                    transaction_refference: (_a = item === null || item === void 0 ? void 0 : item.original) === null || _a === void 0 ? void 0 : _a.transactionReference,
                                    glsign: (_b = item === null || item === void 0 ? void 0 : item.original) === null || _b === void 0 ? void 0 : _b.glsign,
                                    amount: "".concat((_c = item === null || item === void 0 ? void 0 : item.original) === null || _c === void 0 ? void 0 : _c.amount)
                                };
                            }),
                            tanggal_awal_date_time: tanggal_awal_date_time,
                            tanggal_akhir_date_time: tanggal_akhir_date_time,
                            fileFormat: "PDF",
                        }, token
                            ? {
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                },
                                responseType: "blob",
                            }
                            : { responseType: "blob" })];
                case 2:
                    response = _c.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_").concat(companyCode, "_SUMMARY_BALANCE.pdf"), content);
                    return [3 /*break*/, 4];
                case 3:
                    error_14 = _c.sent();
                    console.log({ error: error_14 });
                    setShowModalErr && setShowModalErr();
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDownloadDetails = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var response, content, error_15;
        var setLoading = _b.setLoading, getDownload = _b.getDownload, norekVarchar = _b.norekVarchar, tanggalAkhirDateTime = _b.tanggalAkhirDateTime, tanggalAwalDateTime = _b.tanggalAwalDateTime, token = _b.token, downloadFileName = _b.downloadFileName, fileFormat = _b.fileFormat, companyCode = _b.companyCode;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(encodeURI("".concat(getDownload)), {
                            norekVarchar: norekVarchar,
                            tanggalAkhirDateTime: tanggalAkhirDateTime,
                            tanggalAwalDateTime: tanggalAwalDateTime,
                            fileFormat: fileFormat,
                        }, token
                            ? {
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                },
                                responseType: "blob",
                            }
                            : { responseType: "blob" })];
                case 2:
                    response = _c.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat(companyCode, "_SUMMARY_BALANCE.").concat(fileFormat), content);
                    return [3 /*break*/, 4];
                case 3:
                    error_15 = _c.sent();
                    console.log({ error: error_15 });
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSingleDownload = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var response, content, error_16;
        var setIsLoading = _b.setIsLoading, transaction_reference = _b.transaction_reference, token = _b.token, companyCode = _b.companyCode, tanggal_akhir_date_time = _b.tanggal_akhir_date_time, tanggal_awal_date_time = _b.tanggal_awal_date_time, amount = _b.amount, glsign = _b.glsign;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setIsLoading && setIsLoading(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post(encodeURI("/report-summary/download-detail-transaction"), {
                            detailTransaction: [
                                {
                                    transaction_refference: transaction_reference,
                                    glsign: glsign,
                                    amount: amount === null || amount === void 0 ? void 0 : amount.toString()
                                }
                            ],
                            fileFormat: "PDF",
                            tanggal_akhir_date_time: tanggal_akhir_date_time,
                            tanggal_awal_date_time: tanggal_awal_date_time,
                        }, token
                            ? {
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                },
                                responseType: "blob",
                            }
                            : { responseType: "blob" })];
                case 2:
                    response = _c.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_").concat(companyCode, "_SUMMARY_BALANCE.pdf"), content);
                    return [3 /*break*/, 4];
                case 3:
                    error_16 = _c.sent();
                    console.log({ error: error_16 });
                    return [3 /*break*/, 4];
                case 4:
                    setIsLoading && setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var getCompanyAccount = function (companyCode) {
        return custom_axios_1.default.post("/account/qlola/company-bank-account", {
            companyCode: companyCode,
        });
    };
    return {
        getRequest: getRequest,
        createEmailStatement: createEmailStatement,
        getEmailStatement: getEmailStatement,
        downloadEmailStatement: downloadEmailStatement,
        updateEmailStatement: updateEmailStatement,
        deleteEmailStatement: deleteEmailStatement,
        resendEmailStatement: resendEmailStatement,
        getCheckInquiryAccount: getCheckInquiryAccount,
        cancelInquiryAccount: cancelInquiryAccount,
        getMenus: getMenus,
        getFileMT: getFileMT,
        getFileNonMT: getFileNonMT,
        getDataAccountStatement: getDataAccountStatement,
        getDataAccountStatement2: getDataAccountStatement2,
        getFileZip: getFileZip,
        getTrustedToken: getTrustedToken,
        getActivityLogs: getActivityLogs,
        //report telkomsel summary balance
        getSummaryAccount: getSummaryAccount,
        reportSummary: reportSummary,
        getListTransaction: getListTransaction,
        getDetailTransaction: getDetailTransaction,
        downloadListSummary: downloadListSummary,
        downloadDetailTransaction: downloadDetailTransaction,
        handleDownloadTransaction: handleDownloadTransaction,
        handleDownloadDetails: handleDownloadDetails,
        handleSingleDownload: handleSingleDownload,
        getCompanyAccount: getCompanyAccount,
    };
};
exports.default = FinancialForecastService;
//# sourceMappingURL=financial-forecast.js.map