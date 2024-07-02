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
var CutOffService = function (baseURL, token) {
    // Update Task
    var putTask = function (taskId, action, reasons, comment) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/task/action", {
                            taskID: taskId,
                            action: action,
                            reasons: reasons,
                            comment: comment,
                        })];
                case 1:
                    response = _c.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _c.sent();
                    return [2 /*return*/, Promise.reject((_b = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _b === void 0 ? void 0 : _b.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getCutOffTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, sort, limit, filter, search, dir, status_1, response, error_2;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    page = params.page, sort = params.sort, limit = params.limit, filter = params.filter, search = params.search, dir = params.dir, status_1 = params.status;
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/task/list", {
                            page: page,
                            sort: sort,
                            limit: limit,
                            filter: !filter
                                ? {
                                    scheduleName: "",
                                    module: "",
                                    createBy: "",
                                    reviewBy: "",
                                    status: "",
                                    custom: "",
                                }
                                : filter,
                            search: search,
                            dir: dir,
                            status: status_1 || "AllStatus",
                        })];
                case 1:
                    response = _c.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, {
                            data: response.data.data,
                            pagination: response.data.pagination,
                        }];
                case 2:
                    error_2 = _c.sent();
                    return [2 /*return*/, Promise.reject((_b = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _b === void 0 ? void 0 : _b.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getCutOffData = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/data", params)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_3 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_3.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getCutOffDataByID = function (ScheduleID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/data/detail", {
                            ScheduleID: ScheduleID,
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_4 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_4.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getCutOffTaskByID = function (taskID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/task/detail", { taskID: taskID })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_5 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_5.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var createNewTask = function (isDraft, params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/task", {
                            isDraft: isDraft,
                            data: params,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        // throw new Error(response.data?.message || "Server Error");
                        return [2 /*return*/, response.data];
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_6 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_6.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var editTask = function (taskID, isDraft, params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/task/edit/".concat(taskID), {
                            isDraft: isDraft,
                            data: params,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        // throw new Error(response.data?.message || "Server Error");
                        return [2 /*return*/, response.data];
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_7 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_7.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getMenuLicence = function (params) {
        return custom_axios_1.default.get("/menu/license/data2", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getDataCreatedBy = function () {
        return custom_axios_1.default.get("/cut-off/task/me/created-by").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getDataReviewedBy = function () {
        return custom_axios_1.default.get("/cut-off/task/me/approved-by").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getDataSchedule = function (params) {
        return custom_axios_1.default.get("/cut-off/data/schedule?Product=".concat(params)).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCutOffTemplate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_8;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/cut-off/template")];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_8 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_8.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/Cut Off", {
                            page: page,
                            limit: limit,
                            search: search,
                            // dateFrom: `${split[0]}`,
                            // dateTo: `${split[1]}`,
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: 
                // const split = filter?.split(",");
                return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getProduct = function () {
        return custom_axios_1.default.get("/cut-off/task/product/Cut Off").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCurrencies = function () {
        return custom_axios_1.default.get("/company/currency").then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data.data;
        });
    };
    var getAvailableCurrency = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_9;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("/cut-off/available-currency")];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_9 = _b.sent();
                    return [2 /*return*/, Promise.reject(((_a = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getAvailableTime = function (time, moduleId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.get("/cut-off/available-time?time=".concat(time, "&modulID=").concat(moduleId)).then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data.data;
                })];
        });
    }); };
    return {
        getMenuLicence: getMenuLicence,
        getCutOffTask: getCutOffTask,
        getActivityLogs: getActivityLogs,
        createNewTask: createNewTask,
        putTask: putTask,
        getCutOffTaskByID: getCutOffTaskByID,
        getCutOffData: getCutOffData,
        getCutOffDataByID: getCutOffDataByID,
        editTask: editTask,
        getCutOffTemplate: getCutOffTemplate,
        getDataCreatedBy: getDataCreatedBy,
        getDataReviewedBy: getDataReviewedBy,
        getDataSchedule: getDataSchedule,
        getProduct: getProduct,
        getCurrencies: getCurrencies,
        getAvailableCurrency: getAvailableCurrency,
        getAvailableTime: getAvailableTime,
    };
};
exports.default = CutOffService;
//# sourceMappingURL=cut-off.js.map