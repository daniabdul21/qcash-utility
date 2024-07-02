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
/* eslint-disable @typescript-eslint/no-explicit-any */
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var api_service_1 = require("./api-service");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var ReportStatementService = function () {
    // reporting
    var getAllReportStatementSetting = function (body) {
        return custom_axios_1.default
            .get("/report-statement/setting", { params: body })
            .then(function (response) {
            var _a, _b, _c;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: (_b = response.data) === null || _b === void 0 ? void 0 : _b.data,
                pagination: (_c = response.data) === null || _c === void 0 ? void 0 : _c.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getReportStatementSetting = function (taskID, body) {
        return custom_axios_1.default
            .get("/report-statement/setting/Task/".concat(taskID), body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getAllReportStatementModule = function (body) {
        return custom_axios_1.default
            .get("/report-statement/setting/modules", body)
            .then(function (response) {
            var _a, _b, _c;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: (_b = response.data) === null || _b === void 0 ? void 0 : _b.data,
                pagination: (_c = response.data) === null || _c === void 0 ? void 0 : _c.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var createReportStatementSetting = function (body) {
        return custom_axios_1.default
            .post("/report-statement/setting/create", __assign({}, body))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var updateReportStatementSetting = function (taskID, body) {
        return custom_axios_1.default
            .post("/report-statement/setting/create/".concat(taskID), __assign({}, body))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadReportStatementSetting = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return api_service_1.apiClient
            .get("report-statement/setting/download/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_").concat("ReceiptSetting", ".").concat(format === null || format === void 0 ? void 0 : format.toLocaleLowerCase()), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var deleteReportStatementSetting = function (body) {
        return custom_axios_1.default
            .post("/report-statement/setting/task/delete", __assign({}, body))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var resendReportStatementSetting = function (body) {
        return custom_axios_1.default
            .post("/report-generate/resend", __assign({}, body))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
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
    var createCacheTaskBulk = function (rcode) {
        return api_service_1.apiClient
            .post("/task/rescache", { rcode: rcode })
            .then(function (response) {
            var _a;
            if (response.status !== 200)
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return response;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    return {
        // reporting
        getAllReportStatementSetting: getAllReportStatementSetting,
        getReportStatementSetting: getReportStatementSetting,
        getAllReportStatementModule: getAllReportStatementModule,
        createReportStatementSetting: createReportStatementSetting,
        updateReportStatementSetting: updateReportStatementSetting,
        downloadReportStatementSetting: downloadReportStatementSetting,
        deleteReportStatementSetting: deleteReportStatementSetting,
        resendReportStatementSetting: resendReportStatementSetting,
        createCacheTaskBulk: createCacheTaskBulk,
        getActivityLogs: getActivityLogs,
    };
};
exports.default = ReportStatementService;
//# sourceMappingURL=report-statement.js.map