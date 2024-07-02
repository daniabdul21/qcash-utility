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
exports.default = LiquidityService;
var api_service_1 = require("./api-service");
var types_1 = require("@/types");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
/**
 * Liquidity Cash Pooling API Prefix
 */
var API_PREFIX = "/liquidity/cash-pooling";
function LiquidityService() {
    var _this = this;
    //! --- Cash Pooling ---
    /**
     * Get List Liquidity Task.
     */
    var getLiquiditiesTask = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/task"), { params: params })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Create Task Liquidity.
     */
    var createLiquidityTask = function (body) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/task"), body)
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Deactivate Liquidity Task.
     */
    var deactivateTask = function (taskID, payload, passCode) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/task/deactivate/").concat(taskID), {
                    request: payload,
                    passCode: passCode,
                })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Delete Liquidity by Task ID.
     */
    var deleteLiquidityTask = function (taskID) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/task/delete/").concat(taskID))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get Detail Liquidity Task.
     */
    var getLiquidityTask = function (taskID) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/task/detail/").concat(taskID))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Edit Liquidity Task.
     */
    var editLiquidityTask = function (taskID, body) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/task/edit/").concat(taskID), __assign({}, body))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Reactivate Liquidity Task.
     */
    var reactivateTask = function (taskID, payload, passCode) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/task/reactivate/").concat(taskID), {
                    request: payload,
                    passCode: passCode,
                })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get List Transaction History.
     */
    var getTransactionsHistory = function (taskId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/task/trx-history/").concat(taskId))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Download Liquidities Task.
     */
    var downloadLiquiditiesTask = function (props) { return __awaiter(_this, void 0, void 0, function () {
        var format, getFilter, getFilterOr, getSort, getDir, filter, filterOr, sort, dir;
        return __generator(this, function (_a) {
            format = props.format, getFilter = props.getFilter, getFilterOr = props.getFilterOr, getSort = props.getSort, getDir = props.getDir;
            filter = "?filter=".concat(encodeURIComponent(getFilter));
            filterOr = getFilterOr ? "&filterOr=".concat(encodeURIComponent(getFilterOr)) : "";
            sort = getSort ? "&sort=".concat(getSort) : "";
            dir = getDir ? "&dir=".concat(getDir) : "";
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/task/").concat(format).concat(filter).concat(filterOr).concat(sort).concat(dir), {
                    responseType: "blob",
                })
                    .then(function (res) {
                    var content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_Cash_Pooling.").concat(format), content);
                })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Download Liquidities Task.
     */
    var downloadTrxHistory = function (props) { return __awaiter(_this, void 0, void 0, function () {
        var search, format, sort, dir, taskID;
        return __generator(this, function (_a) {
            search = props.search, format = props.format, sort = props.sort, dir = props.dir, taskID = props.taskID;
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/task/trx-history/download/").concat(taskID, "?search=").concat(search, "&fileFormat=").concat(format, "&sort=").concat(sort, "&dir=").concat(dir), {
                    responseType: "blob",
                })
                    .then(function (res) {
                    var content = res.headers["content-type"];
                    (0, downloadjs_1.default)(res.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_Cash_Pooling.").concat(format), content);
                })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get List TBA Value.
     */
    var getListTBAValue = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/tba"))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Validate Date.
     */
    var validateDate = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/validate-date"), { params: params })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Update Task Action.
     */
    var updateTask = function (taskID, action, reasons, comment, passCode) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/task/action"), {
                    taskID: taskID,
                    action: action,
                    reasons: reasons,
                    comment: comment,
                    passCode: passCode,
                })
                    .then(function (res) {
                    return {
                        data: res.data,
                        response: res,
                    };
                })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Update Task (Bulk Action)
     */
    var updateTaskBulkAction = function (taskID, payload) { return __awaiter(_this, void 0, void 0, function () {
        var action, reasons, comment, passCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    action = payload.action, reasons = payload.reasons, comment = payload.comment, passCode = payload.passCode;
                    return [4 /*yield*/, updateTask(taskID, action, reasons, comment, passCode)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    /**
     * Get Activity Log.
     */
    var getActivityLogs = function (params) { return __awaiter(_this, void 0, void 0, function () {
        var page, limit, query, _a, filter, split;
        return __generator(this, function (_b) {
            page = params.page, limit = params.limit, query = params.query, _a = params.filter, filter = _a === void 0 ? "," : _a;
            split = filter.split(",");
            return [2 /*return*/, api_service_1.apiClient
                    .post("/task/activity-logs/".concat(types_1.ProductTypeEnum.CASH_POOLING), {
                    page: page,
                    limit: limit,
                    search: query,
                    dateFrom: "".concat(split[0]),
                    dateTo: "".concat(split[1]),
                })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get Pending Task.
     */
    var getLiquidityPendingTask = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("/task/normal", { params: params })
                    .then(function (res) {
                    res.data.data = res.data.data.map(function (item) {
                        if (item.task && item.task.createdByName === "")
                            item.task.createdByName = "-";
                        if (item.task && item.task.lastApprovedByName === "")
                            item.task.lastApprovedByName = "-";
                        if (item.task && item.task.lastRejectedByName === "")
                            item.task.lastRejectedByName = "-";
                        if (item.task && item.task.updatedByName === "")
                            item.task.updatedByName = "-";
                        return item;
                    });
                    return {
                        data: res.data.data,
                        pagination: res.data.pagination,
                    };
                })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    //! Relation
    /**
     * Get List Company.
     */
    var getCompanies = function (companyName) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("/company/data", {
                    params: {
                        companyName: companyName ? companyName.toLowerCase() : null,
                        page: 1,
                        limit: 100,
                    },
                })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    var getCompanyWithQuery = function (query) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("/company/data?".concat(query))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get Data Menu License.
     */
    var getMenuLicenseTasks = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("/menu/license/task", { params: params })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get Data Queue.
     */
    var getDataQueueBA = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/queue"), {
                    params: params,
                })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    var getAccounts = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .get("/account/data", { params: params })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    // Edit Queue BA
    var postDataQueueBA = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("".concat(API_PREFIX, "/queue/edit"), __assign({}, params))
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get List Transaction History
     */
    var getTransactionsHistoryDetail = function (params) { return __awaiter(_this, void 0, void 0, function () {
        var taskID, rest;
        return __generator(this, function (_a) {
            taskID = params.taskID, rest = __rest(params, ["taskID"]);
            return [2 /*return*/, api_service_1.apiClient
                    .get("".concat(API_PREFIX, "/task/trx-history/").concat(taskID), {
                    params: __assign({}, rest),
                })
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get Currency by Menu License.
     */
    var getCurrencies = function (params) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("/menu/license/data2", params)
                    .then(function (res) { return res.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    /**
     * Get User BRICaMS Detail
     */
    var getUserBricamsDetail = function (username) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_service_1.apiClient
                    .post("/user/bricams-svc/detail", { username: username })
                    .then(function (res) { return res.data.data; })
                    .catch(function (err) { return Promise.reject(err); })];
        });
    }); };
    return {
        getTransactionsHistoryDetail: getTransactionsHistoryDetail,
        getLiquiditiesTask: getLiquiditiesTask,
        createLiquidityTask: createLiquidityTask,
        deactivateTask: deactivateTask,
        deleteLiquidityTask: deleteLiquidityTask,
        getLiquidityTask: getLiquidityTask,
        editLiquidityTask: editLiquidityTask,
        reactivateTask: reactivateTask,
        getTransactionsHistory: getTransactionsHistory,
        downloadLiquiditiesTask: downloadLiquiditiesTask,
        getListTBAValue: getListTBAValue,
        validateDate: validateDate,
        updateTask: updateTask,
        updateTaskBulkAction: updateTaskBulkAction,
        getActivityLogs: getActivityLogs,
        getLiquidityPendingTask: getLiquidityPendingTask,
        getCompanies: getCompanies,
        getCompanyWithQuery: getCompanyWithQuery,
        getMenuLicenseTasks: getMenuLicenseTasks,
        getDataQueueBA: getDataQueueBA,
        getAccounts: getAccounts,
        postDataQueueBA: postDataQueueBA,
        getCurrencies: getCurrencies,
        getUserBricamsDetail: getUserBricamsDetail,
        downloadTrxHistory: downloadTrxHistory,
    };
}
//# sourceMappingURL=liquidity.js.map