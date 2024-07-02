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
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var HolidayService = function (baseURL, token) {
    var getHolidayData = function (params) {
        return custom_axios_1.default
            .get("/cut-off/holiday/task", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var getHolidayTask = function (params) {
        return custom_axios_1.default.get("/cut-off/holiday/task", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getHolidaySchedule = function (params) {
        return custom_axios_1.default.get("/cut-off/holiday/schedules", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getHolidayTaskById = function (taskID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/cut-off/holiday/task/".concat(taskID))
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
    var postHolidayTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/cut-off/holiday/task", params)
                    .then(function (res) {
                    if (res.status !== 200) {
                        return res.data;
                    }
                    return res.data;
                })
                    .catch(function (error) {
                    console.error("error from server: " + error);
                    return Promise.reject(error.response.data);
                })];
        });
    }); };
    var editTask = function (taskID, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/cut-off/holiday/task/edit/".concat(taskID), params)
                    .then(function (res) {
                    if (res.status !== 200) {
                        return res.data;
                    }
                    return res.data;
                })
                    .catch(function (error) {
                    var _a;
                    return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                })];
        });
    }); };
    var deleteHolidayTask = function (taskID) {
        return custom_axios_1.default
            .post("/cut-off/holiday/task/action/".concat(taskID), {
            action: "delete",
            comment: "",
            reasons: "",
        })
            .then(function (response) {
            var _a, _b;
            if (response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/holiday", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var putTaskHoliday = function (taskID, action, reasons, comment) {
        return custom_axios_1.default
            .post("/cut-off/holiday/task/action/".concat(taskID), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return response.data;
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getProduct = function (isUKLN) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("product?product.IsCu=true&product.IsTransactional=true&dir=DESC&filter=ProductID:<>186,IsUKLN:".concat(isUKLN))
                    .then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data;
                })];
        });
    }); };
    var getHolidayCreatedBy = function () {
        return custom_axios_1.default
            .get("/cut-off/holiday/task/me/created-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getHolidayReviewedBy = function () {
        return custom_axios_1.default
            .get("/cut-off/holiday/task/me/approved-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getPattern = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/cut-off/holiday/pattern")
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                    }
                    return response.data.data;
                })
                    .catch(function (err) {
                    var _a;
                    console.log("error :" + err);
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                })];
        });
    }); };
    var getWeekendDays = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/cut-off/holiday/weekend-days")
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                    }
                    return response.data.data;
                })
                    .catch(function (err) {
                    var _a;
                    console.log("error" + err);
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                })];
        });
    }); };
    var downloadTableHoliday = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(encodeURIComponent(getFilter));
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/cut-off/holiday/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Holiday", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    return {
        getPattern: getPattern,
        getWeekendDays: getWeekendDays,
        getHolidayData: getHolidayData,
        getHolidayTask: getHolidayTask,
        getHolidaySchedule: getHolidaySchedule,
        getHolidayTaskById: getHolidayTaskById,
        postHolidayTask: postHolidayTask,
        editTask: editTask,
        deleteHolidayTask: deleteHolidayTask,
        getActivityLogs: getActivityLogs,
        putTaskHoliday: putTaskHoliday,
        getProduct: getProduct,
        getHolidayCreatedBy: getHolidayCreatedBy,
        getHolidayReviewedBy: getHolidayReviewedBy,
        downloadTableHoliday: downloadTableHoliday,
    };
};
exports.default = HolidayService;
//# sourceMappingURL=holiday.js.map