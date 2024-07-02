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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var lodash_1 = __importStar(require("lodash"));
var moment_1 = __importDefault(require("moment"));
var router_1 = require("next/router");
var downloadjs_1 = __importDefault(require("downloadjs"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var MODUL_PREFIX_URL = "create-briva-upload";
var POST = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var path = _b.path, payload = _b.payload;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/").concat(path), payload)
                    .then(function (response) {
                    return {
                        code: response.data.code,
                        error: false,
                        data: response.data.data,
                        message: response.data.message,
                    };
                })
                    .catch(function (error) {
                    var resp = error.response.data;
                    return {
                        error: resp.error,
                        code: resp.code,
                        data: null,
                        message: resp.message,
                    };
                })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };
var mappingpParamToPayload = function (params) {
    var _a, _b, _c, _d;
    var resParam = __assign({}, params);
    var sort = (_a = resParam.getSort) !== null && _a !== void 0 ? _a : "";
    var dir = (_b = resParam.getDir) !== null && _b !== void 0 ? _b : "";
    var query = (_c = resParam.getSearch) !== null && _c !== void 0 ? _c : "";
    var filter = (_d = resParam.getFilter) !== null && _d !== void 0 ? _d : "";
    var mappedParam = __assign({}, (0, lodash_1.pickBy)({
        sort: sort,
        dir: dir,
        query: query,
        filter: filter,
    }, function (value) { return value !== undefined && value !== ""; }));
    return mappedParam;
};
var SmartBillingService = function (token, baseURL) {
    // ============================    MENU -> BILLING MANAGEMENT  ==============================
    var router = (0, router_1.useRouter)();
    var getListTaskVA = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var restParam, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    restParam = __rest(params, []);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/list/va"), __assign({}, (0, lodash_1.pickBy)(restParam, function (value) { return value !== undefined && value !== ""; })))];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_1)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getListTaskVAByMapId = function (mapId, type) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/detail/va/").concat(mapId), {
                            type: type,
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_2 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_2)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFilterList = function (name, type, query) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(MODUL_PREFIX_URL, "/list/").concat(name), {
                    search: query,
                    type: type,
                    limit: 10,
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return response.data.data;
                })
                    .catch(function (error) {
                    console.error("error from server: " + error);
                    return Promise.reject(error);
                })];
        });
    }); };
    var getRecentTaskVA = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var restParam, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    restParam = __rest(params, []);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/va/list-pending"), __assign({}, (0, lodash_1.pickBy)(restParam, function (value) { return value !== undefined && value !== ""; })))];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_3 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_3)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var updateStatusVA = function (mapId, type, remark, reason) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/change-status-va"), __assign(__assign({ mapId: mapId, type: type }, (remark ? { remark: remark } : {})), (reason ? { reason: reason } : {})))
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
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var downloadVAList = function (params, type) { return __awaiter(void 0, void 0, void 0, function () {
        var format, validFormat, payload;
        return __generator(this, function (_a) {
            format = params.format;
            validFormat = format !== "xls" ? format : "xlsx";
            payload = __assign(__assign({ type: type }, mappingpParamToPayload(params)), { limit: 999 });
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/download-list-va/").concat(lodash_1.default.upperCase(validFormat)), payload, {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.data.error || response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "Report-list-".concat(type, "-VA_").concat((0, moment_1.default)().format("DD_MM_YYYY"), ".").concat(validFormat), content);
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    // ============================    MENU -> BILLING MANAGEMENT -> Create   ==============================
    var searchVAInfo = function (params) {
        return POST({
            path: "search-va-info",
            payload: params,
        });
    };
    var SendApprovalVA = function (payload) {
        return POST({ path: "send-approval-va", payload: payload });
    };
    // ============================    SMART BILLING MANAGEMENT HISTORY   ==============================
    var getBrivaUploadHistory = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/task-file/lists"), __assign({}, (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; })))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_4 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_4)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUploadHistoryByTaskId = function (taskID, type) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5, status_1, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/task-file/detail/").concat(taskID), {
                            type: type,
                        })];
                case 1:
                    res = _c.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_5 = _c.sent();
                    status_1 = (_b = err_5 === null || err_5 === void 0 ? void 0 : err_5.response) === null || _b === void 0 ? void 0 : _b.status;
                    if (!(status_1 === 404 || status_1 === 400)) return [3 /*break*/, 3];
                    _a = router.push("/smart-billing-management/history?tab=active");
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, Promise.reject((err_5 === null || err_5 === void 0 ? void 0 : err_5.message) || { message: "Network Error" })];
                case 4:
                    _a = _c.sent();
                    _c.label = 5;
                case 5: return [2 /*return*/, _a];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getFilePreviewByTaskId = function (taskId, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("".concat(MODUL_PREFIX_URL, "/file-preview/").concat(taskId), __assign({}, (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; })))
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: response.data,
                    };
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var downloadFilePreviewByTaskId = function (params, taskId, type) { return __awaiter(void 0, void 0, void 0, function () {
        var format, validFormat, payload;
        return __generator(this, function (_a) {
            format = params.format;
            validFormat = format !== "xls" ? format : "xlsx";
            payload = __assign({ taskId: +taskId, type: type }, mappingpParamToPayload(params));
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/file-preview/download/").concat(lodash_1.default.upperCase(validFormat)), payload, {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.data.error || response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "Upload-summary-report-".concat(taskId, ".").concat(validFormat), content);
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var updateStatusTask = function (taskId, action, comment, reasons, passCode) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/task-file/").concat(action === "submit" ? action : "status"), __assign(__assign(__assign(__assign({ taskId: taskId }, (action === "submit" ? {} : { action: action })), (comment ? { comment: comment } : {})), (reasons ? { reasons: reasons } : {})), (passCode ? { passCode: passCode } : {})))
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
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var downloadListTask = function (params, type) { return __awaiter(void 0, void 0, void 0, function () {
        var format, validFormat, payload;
        return __generator(this, function (_a) {
            format = params.format;
            validFormat = format !== "xls" ? format : "xlsx";
            payload = __assign(__assign({ type: type }, mappingpParamToPayload(params)), { limit: 999 });
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/task-file/download/").concat(lodash_1.default.upperCase(validFormat)), payload, {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.data.error || response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat("Report-upload-list-").concat((0, moment_1.default)().format("DD_MM_YYYY"), ".").concat(validFormat), content);
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    // ============================    SMART BILLING MANAGEMENT HISTORY -> create   ==============================
    var submitUpload = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/".concat(MODUL_PREFIX_URL, "/task-file/create"), payload)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadMasterFile = function (name, extension) { return __awaiter(void 0, void 0, void 0, function () {
        var response, content, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/".concat(MODUL_PREFIX_URL, "/file-format/download"), {
                            name: name,
                        }, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(name, ".").concat(extension), content);
                    if (response.status !== 200)
                        throw new Error("Error");
                    return [2 /*return*/, response];
                case 2:
                    error_2 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_2 === null || error_2 === void 0 ? void 0 : error_2.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // ============================    BRIVA UPLOAD DETAIL PAGE   ==============================
    var getInvalidBrivaUploadDetail = function (taskID, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/create-briva-upload/list-invalid-data-upload", {
                    params: params,
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: response.data,
                    };
                })
                    .catch(function (error) {
                    console.log(error);
                    return Promise.reject(error);
                })];
        });
    }); };
    // ============================    LIST DETAIL PAGE   ==============================
    var getListDetailBillingManagement = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filter, resParam, payload;
        return __generator(this, function (_a) {
            filter = params.filter, resParam = __rest(params, ["filter"]);
            payload = (0, lodash_1.pickBy)(__assign(__assign(__assign({}, resParam), { filter: (filter === null || filter === void 0 ? void 0 : filter.filterString) || "" }), ((filter === null || filter === void 0 ? void 0 : filter.filterDate) ? __assign({}, filter.filterDate) : {})), function (value) { return value !== undefined && value !== ""; });
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/billing-management"), payload)
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: response.data.data,
                        response: response,
                        pagination: response.data.pagination,
                    };
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var downloadDetailBillingManagement = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var format, validFormat, mappedParams, payload;
        var _a, _b;
        return __generator(this, function (_c) {
            format = params.format;
            validFormat = format !== "xls" ? format : "xlsx";
            mappedParams = mappingpParamToPayload(params);
            payload = __assign(__assign(__assign({}, mappedParams), { filter: ((_a = mappedParams === null || mappedParams === void 0 ? void 0 : mappedParams["filter"]) === null || _a === void 0 ? void 0 : _a.filterString) || "" }), (((_b = mappedParams === null || mappedParams === void 0 ? void 0 : mappedParams["filter"]) === null || _b === void 0 ? void 0 : _b.filterDate) ? mappedParams["filter"].filterDate : {}));
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/billing-management/download/").concat(lodash_1.default.upperCase(validFormat)), payload, {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.data.error || response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Billing-Management", ".").concat(validFormat), content);
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var checkStatusInvoice = function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/billing-management/status-briva"), {
                    id: taskId,
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: response.data.data,
                        response: response,
                        pagination: response.data.pagination,
                    };
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var sendEmailInvoice = function (taskIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(MODUL_PREFIX_URL, "/billing-management/send-email"), {
                    billing_detail_id: taskIds,
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: response.data.data,
                        response: response,
                        pagination: response.data.pagination,
                    };
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var downloadInvoice = function (taskId, brivaNo) { return __awaiter(void 0, void 0, void 0, function () {
        var response, errorData, errorMessage, content, filename, error_3, errorBlob, errorJson;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("/".concat(MODUL_PREFIX_URL, "/download-invoice"), {
                            billing_detail_id: taskId,
                        }, {
                            responseType: "blob",
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200 || response.data.error) {
                        errorData = response.data || {};
                        errorMessage = errorData.message || "Server Error";
                        throw new Error(errorMessage);
                    }
                    content = response.headers["content-type"];
                    filename = "".concat("briva-invoice_").concat(brivaNo, "_").concat((0, moment_1.default)().format("DD_MM_YYYY"), ".pdf");
                    return [2 /*return*/, (0, downloadjs_1.default)(response.data, filename, content)];
                case 2:
                    error_3 = _b.sent();
                    if (!(error_3.response && ((_a = error_3.response.data) === null || _a === void 0 ? void 0 : _a.text))) return [3 /*break*/, 4];
                    return [4 /*yield*/, error_3.response.data.text()];
                case 3:
                    errorBlob = _b.sent();
                    errorJson = JSON.parse(errorBlob);
                    return [2 /*return*/, Promise.reject(errorJson)];
                case 4: return [2 /*return*/, Promise.reject(error_3)];
                case 5: return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // ============================    GLOBAL ENDPOINT   ==============================
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, _a, filter, split, response, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.query, _a = params.filter, filter = _a === void 0 ? "," : _a;
                    split = filter.split(",");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("/task/activity-logs/".concat(type), {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 3:
                    error_4 = _b.sent();
                    return [4 /*yield*/, Promise.reject((error_4 === null || error_4 === void 0 ? void 0 : error_4.message) || { message: "Network Error" })];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    var getSBUserList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/user/data", { params: params })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            data: response.data.data,
                            response: response,
                            pagination: response.data.pagination,
                        }];
                case 2:
                    error_5 = _a.sent();
                    return [4 /*yield*/, Promise.reject((error_5 === null || error_5 === void 0 ? void 0 : error_5.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getPendingTaskHistoryUploadVA = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var encodedFilter, filter, res, err_6;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    encodedFilter = btoa(params === null || params === void 0 ? void 0 : params.filter);
                    filter = encodedFilter ? (_a = encodedFilter.split("=")) === null || _a === void 0 ? void 0 : _a[0] : "";
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/task-file/lists"), __assign(__assign({}, (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; })), { filter: filter }))];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_6 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_6)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        searchVAInfo: searchVAInfo,
        SendApprovalVA: SendApprovalVA,
        downloadVAList: downloadVAList,
        getFilterList: getFilterList, //option data for dropdown in filter VA
        getListTaskVA: getListTaskVA,
        getListTaskVAByMapId: getListTaskVAByMapId,
        getRecentTaskVA: getRecentTaskVA,
        updateStatusVA: updateStatusVA,
        downloadMasterFile: downloadMasterFile,
        submitUpload: submitUpload,
        downloadListTask: downloadListTask,
        getBrivaUploadHistory: getBrivaUploadHistory,
        updateStatusTask: updateStatusTask,
        downloadDetailBillingManagement: downloadDetailBillingManagement,
        downloadFilePreviewByTaskId: downloadFilePreviewByTaskId,
        getFilePreviewByTaskId: getFilePreviewByTaskId,
        getInvalidBrivaUploadDetail: getInvalidBrivaUploadDetail,
        getListDetailBillingManagement: getListDetailBillingManagement,
        getUploadHistoryByTaskId: getUploadHistoryByTaskId,
        sendEmailInvoice: sendEmailInvoice,
        checkStatusInvoice: checkStatusInvoice,
        downloadInvoice: downloadInvoice,
        getActivityLogs: getActivityLogs,
        getSBUserList: getSBUserList,
        getPendingTaskHistoryUploadVA: getPendingTaskHistoryUploadVA,
    };
};
exports.default = SmartBillingService;
//# sourceMappingURL=smart-billing.js.map