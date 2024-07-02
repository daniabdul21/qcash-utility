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
var lodash_1 = require("lodash");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var MODUL_PREFIX_URL = "cash-card";
var mappingpParamToPayload = function (params) {
    var _a, _b, _c, _d, _e;
    var resParam = __assign({}, params);
    var query = (_a = resParam.getSearch) !== null && _a !== void 0 ? _a : "";
    var filter = (_b = resParam.getFilter) !== null && _b !== void 0 ? _b : "";
    var limit = (_c = resParam.pageLimit) !== null && _c !== void 0 ? _c : "";
    var page = resParam.pageIndex ? +resParam.pageIndex + 1 : "";
    var sort = (_d = resParam.getSort) !== null && _d !== void 0 ? _d : "";
    var dir = (_e = resParam.getDir) !== null && _e !== void 0 ? _e : "";
    var mappedParam = (0, lodash_1.omitBy)({
        query: query,
        filter: filter,
        limit: limit,
        page: page,
        sort: sort,
        dir: dir,
    }, function (value) { return value === ""; });
    return mappedParam;
};
var CashCardService = function () {
    // ============================    START GENERALENDPOINT      ==========================
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, _a, filter, split, response, error_1;
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
                    error_1 = _b.sent();
                    return [4 /*yield*/, Promise.reject((error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || { message: "Network Error" })];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    var downloadMasterFile = function (name, extension) { return __awaiter(void 0, void 0, void 0, function () {
        var response, content, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/".concat(MODUL_PREFIX_URL, "/management/file-format/download"), {
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
    var remigrateVA = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedParams, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    sanitizedParams = (0, lodash_1.omitBy)(data, function (value) { return value === ""; });
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/va/send"), sanitizedParams)];
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
    // ============================    END GENERALENDPOINT      ============================
    // ============================    START CASHCARD MANAGEMENT  ============================
    var getListMappingCorporateCode = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var type, url, sanitizedParams, res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    type = params.type;
                    url = "management";
                    if (type === "upload") {
                        url = "/management/upload/list";
                        delete params.type;
                    }
                    sanitizedParams = (0, lodash_1.omitBy)(params, function (value) { return value === ""; });
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/").concat(url), sanitizedParams)];
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
    var getDetailMaping = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/detail-mapping"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_3)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getMapCorporateCode = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedParams, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    sanitizedParams = (0, lodash_1.omitBy)(params, function (value) { return value === ""; });
                    if (!(sanitizedParams === null || sanitizedParams === void 0 ? void 0 : sanitizedParams["corporate_code"]))
                        return [2 /*return*/];
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/detail"), sanitizedParams)];
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
    var submitMapCorporateCode = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/save"), { data: data })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_5 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_5)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateMappingStatus = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var type, resData, sanitizedData, url, res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    type = data.type, resData = __rest(data, ["type"]);
                    sanitizedData = (0, lodash_1.omitBy)(resData, function (value) { return value === ""; });
                    url = type === "upload" ? "upload/update" : "update";
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/").concat(url), sanitizedData)];
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
    var downloadListMapping = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var format, type, url, validFormat, mappedParams, res, filename, content, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    format = params.format, type = params.typeTab;
                    url = type === "upload" ? "upload/download" : "download";
                    validFormat = format !== "xls" ? format : "xlsx";
                    mappedParams = mappingpParamToPayload(params);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/").concat(url, "/").concat((0, lodash_1.upperCase)(validFormat)), __assign(__assign({}, mappedParams), { type: type }), {
                            responseType: "blob",
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    filename = "report_list".concat(type === "upload" ? "_upload" : "", "_mapping_").concat((0, moment_1.default)().format("DD_MM_YYYY"), ".").concat(validFormat);
                    content = res.headers["content-type"];
                    return [2 /*return*/, (0, downloadjs_1.default)(res.data, filename, content)];
                case 2:
                    error_3 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_3)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // UPLOAD
    var uploadMapping = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/mapping/upload"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_7 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_7)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUploadMappingDetail = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/upload/detail"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_8 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_8)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var uploadMappingPreview = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedData, res, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(params === null || params === void 0 ? void 0 : params.uploadId))
                        return [2 /*return*/];
                    sanitizedData = (0, lodash_1.omitBy)(params, function (value) { return value === ""; });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/upload/preview"), sanitizedData)];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_9 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_9)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var downloadFilePreview = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var format, uploadId, validFormat, mappedParams, res, filename, content, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    format = params.format, uploadId = params.uploadId;
                    validFormat = format !== "xls" ? format : "xlsx";
                    mappedParams = mappingpParamToPayload(params);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/management/upload/preview/download/").concat((0, lodash_1.upperCase)(validFormat)), __assign(__assign({}, mappedParams), { uploadId: uploadId }), {
                            responseType: "blob",
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    filename = "list_file_preview_upload_mapping_".concat((0, moment_1.default)().format("DD_MM_YYYY"), ".").concat(validFormat);
                    content = res.headers["content-type"];
                    return [2 /*return*/, (0, downloadjs_1.default)(res.data, filename, content)];
                case 2:
                    error_4 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_4)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // ============================    END CASHCARD MANAGEMENT  ==============================
    // ============================    START CASHCARD (CU/CA)  ============================
    var getListVA = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/VA/list"), {
                            companyCode: "0",
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_10 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_10)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTaskList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var type, url, sanitizedParams, res, err_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    type = params.type;
                    url = "setting";
                    if (type === "upload") {
                        url = "setting/upload/list";
                        delete params.type;
                    }
                    sanitizedParams = (0, lodash_1.omitBy)(params, function (value) { return value === ""; });
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/").concat(url), sanitizedParams)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_11 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_11)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var saveSetting = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedData, res, err_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    sanitizedData = (0, lodash_1.omitBy)(data, function (value) { return value === ""; });
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/setting/save"), __assign({}, sanitizedData))];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_12 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_12)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateRequestStatus = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedData, res, err_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    sanitizedData = (0, lodash_1.omitBy)(data, function (value) { return value === ""; });
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/setting/update"), sanitizedData)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_13 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_13)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTaskById = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedData, res, err_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    sanitizedData = (0, lodash_1.omitBy)(data, function (value) { return value === ""; });
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/setting/detail"), sanitizedData)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_14 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_14)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getVADetail = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/VA/detail"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_15 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_15)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getListCorpCode = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/corporate-code/list"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_16 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_16)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var downloadListSetting = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var format, type, validFormat, mappedParams, res, content, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    format = params.format, type = params.typeTab;
                    validFormat = format !== "xls" ? format : "xlsx";
                    mappedParams = mappingpParamToPayload(params);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/setting/download/").concat((0, lodash_1.upperCase)(validFormat)), __assign(__assign({}, mappedParams), { type: type }), {
                            responseType: "blob",
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    content = res.headers["content-type"];
                    return [2 /*return*/, (0, downloadjs_1.default)(res.data, "list-task_setting_cashcard_".concat((0, moment_1.default)().format("DD-MM-YYYY"), ".").concat(validFormat), content)];
                case 2:
                    error_5 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_5)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getListSummary = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/summary"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_17 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_17)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // UPLOAD
    var uploadSetting = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/setting/upload"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_18 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_18)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUploadSettingDetail = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/setting/upload/detail"), data)];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 2:
                    err_19 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_19)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUploadSettingFilePreview = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var sanitizedData, res, err_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sanitizedData = (0, lodash_1.omitBy)(params, function (value) { return value === ""; });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(MODUL_PREFIX_URL, "/upload/preview"), sanitizedData)];
                case 2:
                    res = _a.sent();
                    if (res.status !== 200)
                        throw new Error(res.data.message || "Server Error");
                    return [2 /*return*/, res.data];
                case 3:
                    err_20 = _a.sent();
                    return [4 /*yield*/, Promise.reject(err_20)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // ============================    END CASHCARD (CU/CA)  ============================
    return {
        downloadListMapping: downloadListMapping,
        getActivityLogs: getActivityLogs,
        getListMappingCorporateCode: getListMappingCorporateCode,
        getDetailMaping: getDetailMaping,
        getMapCorporateCode: getMapCorporateCode,
        submitMapCorporateCode: submitMapCorporateCode,
        updateMappingStatus: updateMappingStatus,
        getListVA: getListVA,
        getVADetail: getVADetail,
        getTaskList: getTaskList,
        saveSetting: saveSetting,
        updateRequestStatus: updateRequestStatus,
        getTaskById: getTaskById,
        downloadListSetting: downloadListSetting,
        getListSummary: getListSummary,
        getListCorpCode: getListCorpCode,
        //upload
        uploadMapping: uploadMapping,
        getUploadMappingDetail: getUploadMappingDetail,
        uploadMappingPreview: uploadMappingPreview,
        downloadFilePreview: downloadFilePreview,
        downloadMasterFile: downloadMasterFile,
        uploadSetting: uploadSetting,
        getUploadSettingDetail: getUploadSettingDetail,
        getUploadSettingFilePreview: getUploadSettingFilePreview,
        remigrateVA: remigrateVA,
    };
};
exports.default = CashCardService;
//# sourceMappingURL=cash-card.js.map