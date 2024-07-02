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
var custom_axios_1 = __importDefault(require("./custom-axios"));
var utilities_1 = require("@/utilities");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var NotificationService = function (token, url) {
    var getNotificationList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, userID;
        return __generator(this, function (_a) {
            page = params.page, limit = params.limit, userID = params.userID;
            return [2 /*return*/, custom_axios_1.default
                    .get("/notification/notification-fcm?limit=".concat(limit, "&page=").concat(page, "&userID=").concat(userID))
                    .then(function (response) {
                    console.log("Response FCM", response);
                    if (response.status !== 200) {
                        return;
                    }
                    return {
                        data: response.data.data,
                    };
                })];
        });
    }); };
    var getNotifications = function (params, pagination) {
        var paramsNotification = {};
        if (params) {
            paramsNotification = (0, utilities_1.prefixObj)(params, "notification.");
        }
        return custom_axios_1.default
            .get("notification/data", {
            params: __assign(__assign({}, paramsNotification), pagination),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getNotificationTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("notification/task", {
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
                    var _a;
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var getNotification = function (TaskID) {
        return custom_axios_1.default
            .get("notification/task/".concat(TaskID))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getClients = function () {
        return custom_axios_1.default
            .get("notification/temporary/client")
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getNotificationModules = function (countryName) {
        return custom_axios_1.default
            .get("notification/module/".concat(countryName))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getNotificationModuleEvents = function (moduleID) {
        return custom_axios_1.default
            .get("notification/event/module/".concat(moduleID))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getNotificationEvents = function () {
        return custom_axios_1.default
            .get("notification/event")
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var storeNotification = function (params, isDraft) {
        return custom_axios_1.default
            .post("notification/task", { isDraft: isDraft, data: params })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var updateNotification = function (TaskID, isDraft, params) {
        return custom_axios_1.default
            .post("notification/task/edit/".concat(TaskID), {
            isDraft: isDraft,
            data: params,
            taskID: TaskID,
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var deleteTaskById = function (taskID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/notification/task/delete/".concat(taskID), { taskID: taskID })
                    .then(function (response) {
                    var _a;
                    if (!response || response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Internal Server Error");
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.log("error from server: " + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/notification", {
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
    var getNotificationModuleVariable = function (moduleId) {
        return custom_axios_1.default
            .get("notification/module/variables", {
            params: {
                moduleId: moduleId,
            },
        })
            .then(function (response) {
            if (response.status !== 200)
                return;
            return response.data.data;
        });
    };
    var putTask = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/task/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Internal Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.log("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var downloadTableNotification = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/notification/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Notification", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getNotificationTaskV2 = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, filter, sort, dir, step;
        return __generator(this, function (_a) {
            page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir, step = params.step;
            return [2 /*return*/, custom_axios_1.default
                    .get("notification/v2/task?".concat(filter), {
                    params: {
                        step: step,
                        page: page,
                        limit: limit,
                        query: query,
                        sort: sort,
                        dir: dir,
                    },
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
                    var _a;
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var downloadTableNotificationv2 = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/notification/v2/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Notification", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var deactivateNotification = function (taskID) {
        return custom_axios_1.default
            .post("notification/v2/deactivate/".concat(taskID), {
            taskID: taskID,
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {
        getNotificationList: getNotificationList,
        getActivityLogs: getActivityLogs,
        getNotifications: getNotifications,
        getNotificationTask: getNotificationTask,
        getNotification: getNotification,
        getClients: getClients,
        getNotificationModules: getNotificationModules,
        getNotificationModuleEvents: getNotificationModuleEvents,
        getNotificationEvents: getNotificationEvents,
        storeNotification: storeNotification,
        updateNotification: updateNotification,
        deleteTaskById: deleteTaskById,
        getNotificationModuleVariable: getNotificationModuleVariable,
        putTask: putTask,
        downloadTableNotification: downloadTableNotification,
        getNotificationTaskV2: getNotificationTaskV2,
        downloadTableNotificationv2: downloadTableNotificationv2,
        deactivateNotification: deactivateNotification,
    };
};
exports.default = NotificationService;
//# sourceMappingURL=notification.js.map