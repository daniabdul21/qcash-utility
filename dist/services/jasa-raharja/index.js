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
var custom_axios_1 = __importDefault(require("../custom-axios"));
var lodash_1 = require("lodash");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var get_data_download_1 = require("./get-data-download");
var helper_filter_1 = require("./helper-filter");
var JasaRaharjaService = function () {
    // Task's summary status counter
    var getStatusCounter = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .get("/task/statuses/counter", { params: params })
                        .then(function (response) {
                        var _a;
                        if (!response || response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    // Get Jasa Raharja task list
    var getTaskList = function (productName, activeTabValue) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filterParams, filterParsed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (params.filter !== undefined && params.filter !== "") {
                        filterParsed = params.filter.split(",");
                        filterParams = (0, helper_filter_1.removeInvalidDateFilter)(filterParsed.toString());
                    }
                    (0, helper_filter_1.defaultStatusFilter)(filterParams, activeTabValue);
                    return [4 /*yield*/, custom_axios_1.default
                            .get("/jasaraharja/task", { params: __assign(__assign({}, params), { filter: (0, helper_filter_1.defaultStatusFilter)(filterParams, activeTabValue), services: productName }) })
                            .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                if (!response || response.status !== 200) {
                                    throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                                }
                                return [2 /*return*/, response.data];
                            });
                        }); })
                            .catch(function (error) {
                            var _a;
                            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); }; };
    // Get Jasa Raharja task list with summary status counter
    var getStatusCounterAndTaskList = function (productName, activeTabValue) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var statusCounter, dataList, error_1, error_2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    statusCounter = void 0, dataList = void 0;
                    if (!(activeTabValue !== "History")) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getStatusCounter({ type: productName })];
                case 2:
                    statusCounter = _a.sent();
                    ;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error in status counter");
                    return [3 /*break*/, 4];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, getTaskList(productName, activeTabValue)(params)];
                case 5:
                    dataList = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error("Error in list");
                    return [3 /*break*/, 7];
                case 7:
                    // Merge task list with status counter summary
                    if ((statusCounter === null || statusCounter === void 0 ? void 0 : statusCounter.data) && activeTabValue !== "History") {
                        return [2 /*return*/, __assign(__assign({}, dataList), { summary: statusCounter.data })];
                    }
                    return [2 /*return*/, dataList];
                case 8:
                    error_3 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_3)];
                case 9: return [2 /*return*/];
            }
        });
    }); }; };
    // Get Jasa Raharja task by ID
    var getTaskById = function (taskID, service) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/jasaraharja/task/".concat(taskID), { params: { service: service } })
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
    // Update Jasa Raharja task
    var updateTask = function (taskID, payload) {
        var _a, _b, _c, _d, _e;
        return custom_axios_1.default
            .post("/task/workflow", {
            taskID: ["".concat(taskID)],
            productID: (_a = payload === null || payload === void 0 ? void 0 : payload.productID) !== null && _a !== void 0 ? _a : "",
            action: (_b = payload === null || payload === void 0 ? void 0 : payload.action) !== null && _b !== void 0 ? _b : "",
            reasons: (_c = payload === null || payload === void 0 ? void 0 : payload.reasons) !== null && _c !== void 0 ? _c : "",
            comment: (_d = payload === null || payload === void 0 ? void 0 : payload.comment) !== null && _d !== void 0 ? _d : "",
            passCode: (_e = payload === null || payload === void 0 ? void 0 : payload.passCode) !== null && _e !== void 0 ? _e : "",
        })
            .then(function (response) {
            if (response.status !== 200) {
                throw response;
            }
            return response.data;
        })
            .catch(function (error) {
            throw error;
        });
    };
    // Download Jasa Raharja receipt
    var downloadReceipt = function (taskId, service) {
        return custom_axios_1.default
            .get("/jasaraharja/download/".concat(taskId), { params: { service: service } })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Server Error");
            }
            ;
            return response.data;
        })
            .catch(function (err) {
            Promise.reject(err);
        });
    };
    // Download Jasa Raharja recap
    var downloadRecap = function (productName, type, dynamicQuery) { return function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            params = (0, get_data_download_1.getDataDownload)(productName, type, dynamicQuery, props);
            return [2 /*return*/, custom_axios_1.default
                    .get("/jasaraharja/download-task", { params: params, responseType: 'blob' })
                    .then(function (response) {
                    if (response.status !== 200) {
                        throw new Error("Server Error");
                    }
                    ;
                    var contentType = response.headers["content-type"];
                    var dateNow = (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss");
                    var filename = "".concat(dateNow, "-").concat(productName);
                    (0, downloadjs_1.default)(response.data, (0, lodash_1.kebabCase)("".concat(filename)), contentType);
                    return response.data;
                })
                    .catch(function (err) {
                    Promise.reject(err);
                })];
        });
    }); }; };
    return {
        getTaskList: getTaskList,
        getTaskById: getTaskById,
        getStatusCounter: getStatusCounter,
        getStatusCounterAndTaskList: getStatusCounterAndTaskList,
        updateTask: updateTask,
        downloadReceipt: downloadReceipt,
        downloadRecap: downloadRecap
    };
};
exports.default = JasaRaharjaService;
//# sourceMappingURL=index.js.map