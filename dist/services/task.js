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
var utilities_1 = require("@/utilities");
var lodash_1 = require("lodash");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment/moment"));
var TaskService = function (baseURL, token) {
    var getTask = function (params, pagination) { return __awaiter(void 0, void 0, void 0, function () {
        var paramsTask;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paramsTask = (0, utilities_1.prefixObj)(params, "task.");
                    return [4 /*yield*/, custom_axios_1.default.get("/task", {
                            params: __assign(__assign({}, paramsTask), pagination),
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getActivityLogs = function (type) {
        if (type === void 0) { type = "system"; }
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var filter, limit, page, query, split, url, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = params.filter, limit = params.limit, page = params.page, query = params.query;
                        split = filter.split(",");
                        url = "/task/activity-logs/".concat(type);
                        data = {
                            dateFrom: (0, lodash_1.get)(split, "0", ""),
                            dateTo: (0, lodash_1.get)(split, "1", ""),
                            limit: limit,
                            page: page,
                            search: (0, lodash_1.get)(params, "search", query),
                        };
                        return [4 /*yield*/, custom_axios_1.default.post(url, data).then(function (response) {
                                if (response.status !== 200) {
                                    return;
                                }
                                return response.data;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
    };
    var getActivityLogNew = function (props) {
        var type = props.type, data = __rest(props, ["type"]);
        return custom_axios_1.default
            .post("/task/activity-logs/".concat(type), __assign({}, data))
            .then(function (response) {
            return { data: response.data };
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    var getDownloadActivityLog = function (props) {
        var type = props.type, action = props.action, _a = props.dateFrom, dateFrom = _a === void 0 ? "" : _a, _b = props.dateTo, dateTo = _b === void 0 ? "" : _b, _c = props.search, search = _c === void 0 ? "" : _c;
        return custom_axios_1.default
            .post("/task/activity-logs/".concat(type, "/download/").concat(action), {
            dateFrom: dateFrom,
            dateTo: dateTo,
            search: search,
        }, { responseType: "blob" })
            .then(function (resp) {
            var content = resp.headers["content-type"];
            return (0, downloadjs_1.default)(resp.data, "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_QCASH.").concat(action), content);
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var getGraphStatus = function (status, service) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default.get("/task/graph/status", {
                        params: { status: status, service: service },
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getGraphStep = function (params) {
        return custom_axios_1.default.get("/task/graph/steps", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
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
            if (response.status !== 200) {
                return response.data;
            }
            return response.data.data;
        });
    };
    var putTaskMenu = function (taskId, action, reasons, comment) {
        if (reasons === void 0) { reasons = null; }
        if (comment === void 0) { comment = null; }
        return custom_axios_1.default
            .post("task/".concat(taskId), {
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
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var putTaskAction = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/task/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return response.data;
            }
            return response.data.data;
        })
            .catch(function () {
            return {
                error: true,
            };
        });
    };
    var putTaskEncrypted = function (taskId, action, reasons, comment) {
        if (reasons === void 0) { reasons = null; }
        if (comment === void 0) { comment = null; }
        return custom_axios_1.default
            .post("/task/".concat(taskId, "/ev"), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getTaskNormal = function (params, pagination) {
        // const paramsTask = prefixObj(params, "task.");
        // const paramsTask = params;
        return custom_axios_1.default.get("task/normal", { params: __assign(__assign({}, params), pagination) }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var postMassTransferTask = function (params, config) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("task/mass-transfer/workflow", params, config)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getCreatedUpdatedTask = function (type, column, table) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("/task/list", {
                        table: table || "tasks",
                        column: column,
                        type: type,
                        isDistinct: true,
                    })
                        .then(function (response) {
                        var _a, _b;
                        if ((response === null || response === void 0 ? void 0 : response.status) !== 200 || ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.error)) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return {
                            data: response.data.data,
                            pagination: response.data.pagination,
                        };
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("error is" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getGraphStepWorkflow = function (params) {
        return custom_axios_1.default.get("task/my-graph/workflow", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            var responseData = (0, lodash_1.get)(response, "data.data", []);
            if (!(0, lodash_1.isEmpty)(responseData))
                responseData = (0, lodash_1.sortBy)(responseData, ["step", "type"]);
            return responseData;
        });
    };
    var getDataPendingTasks = function (params) {
        return custom_axios_1.default
            .get("/task/normal", { params: params })
            .then(function (response) {
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
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    return {
        getActivityLogs: getActivityLogs,
        getCreatedUpdatedTask: getCreatedUpdatedTask,
        getGraphStatus: getGraphStatus,
        getGraphStep: getGraphStep,
        getGraphStepWorkflow: getGraphStepWorkflow,
        getTask: getTask,
        getTaskNormal: getTaskNormal,
        postMassTransferTask: postMassTransferTask,
        putTask: putTask,
        putTaskAction: putTaskAction,
        putTaskEncrypted: putTaskEncrypted,
        putTaskMenu: putTaskMenu,
        getActivityLogNew: getActivityLogNew,
        getDownloadActivityLog: getDownloadActivityLog,
        getDataPendingTasks: getDataPendingTasks,
    };
};
exports.default = TaskService;
//# sourceMappingURL=task.js.map