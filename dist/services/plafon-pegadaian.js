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
var types_1 = require("@/types");
var utilities_1 = require("@/utilities");
var crypto_js_1 = __importDefault(require("crypto-js"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var service = "plafon-pegadaian";
var YEAR_DATETIME_FULL_FORMAT = "YYYY-MM-DD HH:mm:ss";
var YEAR_DATE_FORMAT = "YYYY-MM-DD";
var PlafonPegadaianService = function (companyID, userID) {
    var getDataDownload = function (props) {
        var detail = props.detail, query = props.query, dir = props.dir, filter = props.filter, filterOr = props.filterOr, sort = props.sort;
        var data = {
            batchId: detail === null || detail === void 0 ? void 0 : detail.batchId,
            query: query,
            dir: dir,
            filter: filter,
            filterOr: filterOr,
            sort: sort,
        };
        if (!detail) {
            delete data.batchId;
        }
        return data;
    };
    var getSignature = function (params, key) {
        var signature = "";
        if (companyID !== null && userID !== null) {
            var dataToHash = "bodydata:" +
                params +
                "&bearer:".concat(localStorage.getItem("access-token"), "&companyid:") +
                companyID +
                "&userid:" +
                userID;
            var hash = crypto_js_1.default.HmacSHA256(dataToHash, key);
            signature = hash.toString(crypto_js_1.default.enc.Hex);
        }
        return signature;
    };
    var getHeaders = function (signature) { return ({
    // "Content-Type": "application/x-www-form-urlencoded",
    // "Grpc-Metadata-Signature": signature,
    }); };
    var customAxiosPost = function (url, data) {
        var requestValue = undefined;
        var resource = (0, lodash_1.last)((0, lodash_1.split)(url, "/"));
        if ((0, lodash_1.includes)(["list", "detail-query", "filter", "inquiry", "detail", "action"], resource)) {
            requestValue = data;
        }
        else {
            if ((0, lodash_1.includes)("download-receipt", resource)) {
                requestValue = (0, lodash_1.omit)(data, ["extension"]);
            }
            if ((0, lodash_1.includes)(url, "download-list")) {
                requestValue = data;
                requestValue === null || requestValue === void 0 ? true : delete requestValue.format;
            }
            if ((0, lodash_1.includes)("create", resource)) {
                if ((0, lodash_1.has)(data, "taskID")) {
                    requestValue = (0, lodash_1.omit)(data, ["taskID"]);
                }
                else {
                    requestValue = data;
                }
            }
        }
        var privateKey = process.env["NEXT_PUBLIC_SIGNATURE"];
        if (privateKey) {
            var signature = getSignature(requestValue, privateKey);
            var config = { headers: getHeaders(signature) };
            var newUrl = url;
            if ((0, lodash_1.includes)(url, "download")) {
                // newUrl = encodeURI(url);
                var responseType = "blob";
                // @ts-ignore
                config = __assign(__assign({}, config), { responseType: responseType });
            }
            if ((0, lodash_1.includes)(url, "create")) {
                if ((0, lodash_1.has)(data, "taskID")) {
                    newUrl = "".concat(url, "/").concat(data === null || data === void 0 ? void 0 : data.taskID);
                }
                else {
                    newUrl = url;
                }
            }
            return custom_axios_1.default
                .post(newUrl, requestValue, config)
                .then(function (response) {
                var status = (0, lodash_1.get)(response, "status");
                if (status !== 200) {
                    return;
                }
                var responseData = (0, lodash_1.get)(response, "data");
                if ((0, lodash_1.includes)(url, "download-list")) {
                    var fileName = "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_Plafon-Pegadaian");
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(responseData, "".concat((0, lodash_1.kebabCase)(fileName), ".").concat((0, lodash_1.toLower)(resource)), content);
                }
                if ((0, lodash_1.includes)(resource, "download-receipt")) {
                    responseData = {
                        code: response.status,
                        message: response.statusText,
                    };
                }
                if ((0, lodash_1.includes)(resource, "download")) {
                    var res = response.data;
                    var contentType = response.headers["content-type"];
                    var fileFormat = (0, lodash_1.get)(data, "extension");
                    var filenameTemp = (0, lodash_1.get)(data, "name");
                    var type = types_1.FormatTemplateEnum[fileFormat];
                    var now = (0, moment_1.default)().format(YEAR_DATETIME_FULL_FORMAT);
                    var filename = "".concat(now, " Plafon Pegadaian");
                    if ((0, lodash_1.includes)(resource, "download-template")) {
                        var result = window.atob((0, lodash_1.get)(response, "data.data.object"));
                        var toJson = JSON.parse(result);
                        contentType = (0, lodash_1.get)(toJson, "content_type");
                        var fileDecode = (0, lodash_1.get)(toJson, "data");
                        res = window.atob(fileDecode);
                        filename = "".concat(filenameTemp);
                    }
                    if ((0, lodash_1.includes)("download-receipt", resource)) {
                        filename = "".concat((0, moment_1.default)().format(YEAR_DATE_FORMAT), " Plafon Pegadaian Receipt");
                    }
                    (0, downloadjs_1.default)(res, "".concat((0, lodash_1.kebabCase)(filename), ".").concat(type), contentType);
                }
                return responseData;
            })
                .catch(function (error) {
                if ((0, lodash_1.includes)(url, "download") && error.response) {
                    var errorMessage = {
                        code: error.response.status,
                        message: error.response.statusText || (error === null || error === void 0 ? void 0 : error.message),
                    };
                    return errorMessage;
                }
                else {
                    var errorData = (0, lodash_1.get)(error, "response.data");
                    var message = (0, lodash_1.get)(errorData, "message");
                    if (!message)
                        message = "Connection failure";
                    errorData.message = message;
                    return Promise.reject(errorData);
                }
            });
        }
        return null;
    };
    var listPlafond = function (isHistory) { return function (data) {
        var newData = __assign(__assign({}, data), { isHistory: isHistory });
        var url = "/".concat(service, "/list");
        return customAxiosPost(url, newData);
    }; };
    var getFilterPlafond = function (data) {
        var url = "/".concat(service, "/filter");
        return customAxiosPost(url, data);
    };
    var createPlafond = function (data, taskID) { return __awaiter(void 0, void 0, void 0, function () {
        var url, datas, payload;
        return __generator(this, function (_a) {
            url = "/".concat(service, "/create");
            datas = data;
            if (!(0, lodash_1.isEmpty)(taskID)) {
                (0, lodash_1.merge)(datas, { taskID: taskID });
            }
            payload = (0, lodash_1.merge)(data, { rcode: (0, utilities_1.uniqueCode)("BulkAction") });
            return [2 /*return*/, customAxiosPost(url, payload)];
        });
    }); };
    var inquiryPegadaian = function (data) { return function (pagination) { return __awaiter(void 0, void 0, void 0, function () {
        var url, payload;
        return __generator(this, function (_a) {
            url = "/".concat(service, "/inquiry");
            payload = {
                data: data,
                pagination: pagination,
            };
            return [2 /*return*/, customAxiosPost(url, payload)];
        });
    }); }; };
    var detailTransaction = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "/".concat(service, "/detail");
            return [2 /*return*/, customAxiosPost(url, data)];
        });
    }); };
    var detailInquiryPlafond = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "/".concat(service, "/detail-inquiry");
            return [2 /*return*/, customAxiosPost(url, data)];
        });
    }); };
    var downloadListPlafond = function (data, isHistory) { return function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var newData, format, url;
        return __generator(this, function (_a) {
            newData = __assign(__assign({}, getDataDownload(data)), { isHistory: isHistory });
            format = (props === null || props === void 0 ? void 0 : props.format) === "xls" ? "xlsx" : props === null || props === void 0 ? void 0 : props.format;
            url = "/".concat(service, "/download-list/").concat((0, lodash_1.toUpper)(format));
            return [2 /*return*/, customAxiosPost(url, newData)];
        });
    }); }; };
    var downloadReceiptPlafond = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var url, extension, payload;
        var taskId = _b.taskId, isHistory = _b.isHistory;
        return __generator(this, function (_c) {
            url = "/".concat(service, "/download-receipt");
            extension = (0, lodash_1.size)(taskId) < 2 ? 4 : 5;
            payload = (0, lodash_1.merge)({ task_id: taskId, is_history: isHistory }, { extension: extension });
            return [2 /*return*/, customAxiosPost(url, payload)];
        });
    }); };
    var actionPlafond = function (data) {
        var url = "/".concat(service, "/action");
        var payload = (0, lodash_1.merge)(data, {
            rcode: (0, utilities_1.uniqueCode)("SingleAction"),
        });
        return customAxiosPost(url, payload);
    };
    return {
        listPlafond: listPlafond,
        getFilterPlafond: getFilterPlafond,
        createPlafond: createPlafond,
        detailTransaction: detailTransaction,
        inquiryPegadaian: inquiryPegadaian,
        detailInquiryPlafond: detailInquiryPlafond,
        downloadListPlafond: downloadListPlafond,
        downloadReceiptPlafond: downloadReceiptPlafond,
        actionPlafond: actionPlafond,
    };
};
exports.default = PlafonPegadaianService;
//# sourceMappingURL=plafon-pegadaian.js.map