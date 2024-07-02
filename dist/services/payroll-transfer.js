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
var types_1 = require("@/types");
var utilities_1 = require("@/utilities");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var PayrollTransferService = function () {
    var postPayrollTransfer = function (body, config) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/payroll/task", body, config)];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw response;
                    }
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getPayrollTransfer = function (taskID, params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/payroll/task/".concat(taskID), {
                            params: params,
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    error_2 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_2)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getListPayrollTransfer = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/payroll/task", {
                            params: params,
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, {
                            data: response.data.data,
                            response: response,
                            pagination: response.data.pagination,
                        }];
                case 2:
                    error_3 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_3)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var validateOtp = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/transaction/hard-token-validation", params)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, {
                            data: response.data.data,
                        }];
                case 2:
                    error_4 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_4)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updatePayrollTransferStatus = function (taskId, action, reasons, comment, passCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/payroll/task/set/".concat(taskId), {
                            action: action,
                            reasons: reasons,
                            comment: comment,
                            passCode: passCode,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw response;
                    }
                    return [2 /*return*/, {
                            data: response.data,
                            response: response,
                        }];
                case 2:
                    error_5 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_5)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getPayrollTransferPendingTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/task/normal", { params: params })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    response.data.data = response.data.data.map(function (item) {
                        if (item.task && item.task.createdByName === "") {
                            item.task.createdByName = "-";
                        }
                        if (item.task && item.task.lastApprovedByName === "") {
                            item.task.lastApprovedByName = "-";
                        }
                        if (item.task && item.task.lastRejectedByName === "") {
                            item.task.lastRejectedByName = "-";
                        }
                        if (item.task && item.task.updatedByName === "") {
                            item.task.updatedByName = "-";
                        }
                        return item;
                    });
                    return [2 /*return*/, {
                            data: response.data.data,
                            pagination: response.data.pagination,
                        }];
                case 2:
                    error_6 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_6)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, _a, filter, split, response, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = params.page, limit = params.limit, query = params.query, _a = params.filter, filter = _a === void 0 ? "," : _a;
                    split = filter.split(",");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("/task/activity-logs/".concat(type), {
                            page: page,
                            limit: limit,
                            search: query,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })];
                case 2:
                    response = _b.sent();
                    if (response.status !== 200) {
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, response.data];
                case 3:
                    error_7 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_7)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    var submitPayroll = function (taskId, passCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/payroll/task/".concat(taskId), { passCode: passCode })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw response;
                    }
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    error_8 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_8)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateTask = function (id, payload) {
        if (payload.action === types_1.TransactionFunctionEnum.Create) {
            return submitPayroll(id);
        }
        else {
            return updatePayrollTransferStatus(id, payload.action, payload.reasons, payload.comment);
        }
    };
    var downloadDataTable = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir, response, content, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
                    filter = "?filter=".concat(getFilter);
                    sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
                    dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.get(encodeURI("/payroll/task/template/".concat(format).concat(filter).concat(sort).concat(dir)), {
                            responseType: "blob",
                        })];
                case 2:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Payroll", ".").concat(format), content);
                    return [3 /*break*/, 5];
                case 3:
                    error_9 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_9)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var downloadDataTableDetail = function (taskID, props) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, format, _b, getFilter, _c, getSort, _d, getDir, encType, filter, sort, dir, response, content, error_10;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = props.format, format = _a === void 0 ? "pdf" : _a, _b = props.getFilter, getFilter = _b === void 0 ? "" : _b, _c = props.getSort, getSort = _c === void 0 ? "id" : _c, _d = props.getDir, getDir = _d === void 0 ? "ASC" : _d, encType = props.encType;
                    filter = "?filter=".concat(getFilter);
                    sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
                    dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get(encodeURI("/payroll/task/".concat(taskID, "/template/").concat(format).concat(filter).concat(sort).concat(dir, "&page=-1&limit=-1")), {
                            responseType: "blob",
                        })];
                case 2:
                    response = _f.sent();
                    if (response.status !== 200) {
                        throw new Error(((_e = response.data) === null || _e === void 0 ? void 0 : _e.message) || "Server Error");
                    }
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Payroll", ".").concat(format).concat(encType && content === "application/octet-stream" ? ".".concat(encType) : ''), content);
                    return [3 /*break*/, 5];
                case 3:
                    error_10 = _f.sent();
                    return [4 /*yield*/, Promise.reject(error_10)];
                case 4: return [2 /*return*/, _f.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var checkCutOffHoilday = function (time, moduleId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_11;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/cut-off/available-time?modulID=".concat(moduleId, "&time=").concat(time))];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, {
                            data: response.data,
                        }];
                case 2:
                    error_11 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_11)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getLimitFile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_12;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/system/key/maximum-upload-size")];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_12 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_12)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadReceiptPayroll = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var beneficiaryName, id, _a, batch, taskId, url, response, content, err_1;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    beneficiaryName = props.beneficiaryName, id = props.id, _a = props.batch, batch = _a === void 0 ? false : _a, taskId = props.taskId;
                    url = "payroll/receipt/".concat(id, "?taskId=").concat(taskId);
                    if (batch) {
                        url = "payroll/receipt-batch/".concat(taskId);
                    }
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default
                            .get(encodeURI(url), {
                            responseType: 'blob'
                        })];
                case 2:
                    response = _d.sent();
                    if (response.status !== 200) {
                        throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || 'Download Error');
                    }
                    content = response.headers['content-type'];
                    (0, downloadjs_1.default)(response.data, "".concat(beneficiaryName, "-Transfer-Receipt-").concat((0, utilities_1.formatDate)(new Date(), "DD-MM-YYYY-HHmmSS"), ".pdf"), content);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _d.sent();
                    return [4 /*yield*/, Promise.reject((err_1 === null || err_1 === void 0 ? void 0 : err_1.message) || ((_c = err_1 === null || err_1 === void 0 ? void 0 : err_1.response) === null || _c === void 0 ? void 0 : _c.data) || { message: 'Download Error (Server Not Responding)' })];
                case 4: return [2 /*return*/, _d.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var checkDuplicateFilename = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/payroll/file/duplicate-by-name", params)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_13 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_13)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        postPayrollTransfer: postPayrollTransfer,
        updatePayrollTransferStatus: updatePayrollTransferStatus,
        getActivityLogs: getActivityLogs,
        getPayrollTransferPendingTask: getPayrollTransferPendingTask,
        getPayrollTransfer: getPayrollTransfer,
        getListPayrollTransfer: getListPayrollTransfer,
        submitPayroll: submitPayroll,
        updateTask: updateTask,
        downloadDataTable: downloadDataTable,
        checkCutOffHoilday: checkCutOffHoilday,
        validateOtp: validateOtp,
        getLimitFile: getLimitFile,
        downloadDataTableDetail: downloadDataTableDetail,
        downloadReceiptPayroll: downloadReceiptPayroll,
        checkDuplicateFilename: checkDuplicateFilename
    };
};
exports.default = PayrollTransferService;
//# sourceMappingURL=payroll-transfer.js.map