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
var router_1 = require("next/router");
var crypto_js_1 = __importDefault(require("crypto-js"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var qs_1 = __importDefault(require("qs"));
var react_1 = require("react");
var custom_axios_1 = __importDefault(require("../custom-axios"));
var service = "multi-payment";
var YEAR_DATETIME_FULL_FORMAT = "YYYY-MM-DD HH:mm:ss";
// TODO: remove parameter billingType, and make solution to define per api PLS DO NOT USE BILLING TYPE ANYMORE
var Multipayment = function (companyID, userID, billingType, isFromTableHistory) {
    if (isFromTableHistory === void 0) { isFromTableHistory = false; }
    var router = (0, router_1.useRouter)();
    var _a = (0, react_1.useState)(false), isFileUpload = _a[0], setIsFileUpload = _a[1];
    (0, react_1.useEffect)(function () {
        var route = router.route;
        var uploadFileParam = route === "/multipayment/upload-file/[batch_id]";
        setIsFileUpload(uploadFileParam);
    }, [router.query]);
    var getDataDownload = function (props) {
        var format = props.format, getFilter = props.getFilter, getFilterOr = props.getFilterOr, getSort = props.getSort, getDir = props.getDir, getSearch = props.getSearch;
        // @ts-ignore
        var fileFormat = types_1.FormatEnum["".concat(format)];
        var data = {
            dir: getDir,
            fileFormat: fileFormat,
            filter: getFilter,
            filterOr: getFilterOr,
            search: getSearch,
            services: billingType,
            sort: getSort,
            query: getSearch,
        };
        return data;
    };
    // TODO: next remove this func and use CreateSignature from custom-axios
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
        "Content-Type": "application/x-www-form-urlencoded",
        "Grpc-Metadata-Signature": signature,
    }); };
    var customAxiosPost = function (url, data) {
        var requestValue = undefined;
        var resource = (0, lodash_1.last)((0, lodash_1.split)(url, "/"));
        if ((0, lodash_1.includes)(["get-list-saved-billing", "get-list-transaction"], resource)) {
            data["search"] = data["query"];
            data["query"] = "";
        }
        if (resource === "task") {
            requestValue = (0, lodash_1.merge)(data, {
                services: String(billingType),
            });
        }
        else if ((0, lodash_1.includes)(["billing-approval", "download-task", "get-list-product-role", "save-billing", "task-detail"], resource)) {
            requestValue = JSON.stringify(data);
        }
        else if ((0, lodash_1.isArray)(data)) {
            requestValue = (0, lodash_1.map)(data, function (item) { return ({ billingType: billingType, requestValue: JSON.stringify(item) }); });
            requestValue = { request: requestValue };
        }
        else {
            var newBillingType = (0, lodash_1.get)(data, "billingType", billingType);
            if ((0, lodash_1.includes)(["get-list-saved-billing", "get-list-transaction"], resource)) {
                var filter = data.filter;
                var splitedFilter = (0, lodash_1.split)(filter, ",");
                var filterType = (0, lodash_1.find)(splitedFilter, function (item) { return (0, lodash_1.includes)(item, "type"); });
                (0, lodash_1.remove)(splitedFilter, function (item) { return (0, lodash_1.includes)(item, "type"); });
                var splitedFilterType = (0, lodash_1.split)(filterType, ":");
                newBillingType = (0, lodash_1.last)(splitedFilterType);
                data["filter"] = String(splitedFilter);
            }
            if ((0, lodash_1.includes)(["download-transaction"], resource)) {
                var filter = data.filter;
                var splitedFilter = (0, lodash_1.split)(filter, ",");
                var filterType = (0, lodash_1.find)(splitedFilter, function (item) { return (0, lodash_1.includes)(item, "type"); });
                (0, lodash_1.remove)(splitedFilter, function (item) { return (0, lodash_1.includes)(item, "type"); });
                var splitedFilterType = (0, lodash_1.split)(filterType, ":");
                if (!filterType) {
                    newBillingType = (0, lodash_1.last)(splitedFilterType);
                }
                data["filter"] = String(splitedFilter);
                requestValue = JSON.stringify(data);
                if (isFromTableHistory) {
                    newBillingType = (0, lodash_1.get)(data, "billingType", billingType);
                }
            }
            requestValue = { billingType: newBillingType || billingType, requestValue: JSON.stringify(data) };
            var type = (0, lodash_1.get)(data, "type");
            var taskId = (0, lodash_1.get)(data, "taskId");
            var isHistory = (0, lodash_1.get)(data, "isHistory");
            if ((0, lodash_1.includes)(["download-invoice"], resource)) {
                if ((0, lodash_1.isArray)(data === null || data === void 0 ? void 0 : data.data)) {
                    requestValue = (0, lodash_1.map)(data === null || data === void 0 ? void 0 : data.data, function (item) { return (__assign(__assign({}, item), { requestValue: JSON.stringify(__assign({}, item.requestValue)) })); });
                }
                else {
                    if (type)
                        requestValue = (0, lodash_1.merge)(requestValue, { billingType: type });
                    requestValue = [(0, lodash_1.merge)(requestValue, { taskId: taskId, isHistory: isHistory })];
                }
            }
            if ((0, lodash_1.includes)(["download-transaction"], resource)) {
                var fileFormat = (0, lodash_1.get)(data, "fileFormat");
                var newData_1 = (0, lodash_1.omit)(data, ["fileFormat"]);
                requestValue = (0, lodash_1.merge)(requestValue, {
                    fileFormat: fileFormat,
                    requestValue: JSON.stringify(newData_1),
                });
            }
            // FIXME: on going to generalize payload
            if ((0, lodash_1.includes)(["billing-inquiry"], resource)) {
                requestValue = JSON.stringify(__assign(__assign({}, data), { billingType: newBillingType }));
            }
            if ((0, lodash_1.includes)(["action", "batch", "batches", "delete-billing", "download", "products", "receipt", "submit-file"], resource)) {
                requestValue = data;
            }
        }
        var newData = undefined;
        if (!(0, lodash_1.includes)(["billing-approval", "billing-inquiry", "download-task", "save-billing", "task-detail"], resource)) {
            requestValue = JSON.stringify(requestValue);
        }
        newData = qs_1.default.stringify({ requestValue: requestValue });
        var privateKey = process.env["NEXT_PUBLIC_SIGNATURE"];
        if (privateKey) {
            if (newData.includes("request=")) {
                newData = newData.replace("request=", "");
            }
            else if (newData.includes("requestValue=")) {
                newData = newData.replace("requestValue=", "");
            }
            var signature = getSignature(newData, privateKey);
            var config = { headers: getHeaders(signature) };
            var newUrl = url;
            if ((0, lodash_1.includes)(url, "download")) {
                newUrl = encodeURI(url);
                var responseType = "blob";
                // @ts-ignore
                config = __assign(__assign({}, config), { responseType: responseType });
            }
            return custom_axios_1.default
                .post(newUrl, { request: newData }, config)
                .then(function (response) {
                var _a, _b;
                var status = (0, lodash_1.get)(response, "status");
                if (status !== 200) {
                    return;
                }
                var responseData = (0, lodash_1.get)(response, "data");
                if ((0, lodash_1.get)(responseData, "response")) {
                    var newResponseData = (0, lodash_1.get)(responseData, "response");
                    newResponseData = JSON.parse(newResponseData);
                    var code = (0, lodash_1.get)(newResponseData, "code");
                    if (code !== 200) {
                        return;
                    }
                    if ((0, lodash_1.includes)(["get-list-transaction"], resource)) {
                        return Object.assign({}, newResponseData, {
                            summary: {
                                totalSingle: (_a = responseData === null || responseData === void 0 ? void 0 : responseData.totalSingle) !== null && _a !== void 0 ? _a : 0,
                                totalUpload: (_b = responseData === null || responseData === void 0 ? void 0 : responseData.totalUpload) !== null && _b !== void 0 ? _b : 0,
                            },
                        });
                    }
                    if (url === "/multi-payment/batches/action")
                        return newResponseData;
                    responseData = (0, lodash_1.get)(newResponseData, "data");
                    if ((0, lodash_1.includes)([
                        "billing-approval",
                        "delete-billing",
                        "get-list-saved-billing",
                        "get-list-transaction",
                        "task",
                        "batches",
                        "batch",
                    ], resource)) {
                        responseData = newResponseData;
                    }
                    if (resource === "save-billing") {
                        var newBillingData = (0, lodash_1.get)(newResponseData, "billingData");
                        var newData_2 = (0, lodash_1.get)(newResponseData, "data");
                        responseData = (0, lodash_1.merge)(newData_2, newBillingData);
                    }
                }
                if ((0, lodash_1.includes)(resource, "download")) {
                    var contentType = response.headers["content-type"];
                    var fileFormat = (0, lodash_1.get)(data, "fileFormat");
                    var transactiondId = (0, lodash_1.get)(data, "transactionId");
                    var type = types_1.FormatEnum[fileFormat];
                    var tab = "Single";
                    if ((0, lodash_1.includes)(resource, "transaction"))
                        tab = "History Single";
                    if ((0, lodash_1.includes)(url, "batches") || (0, lodash_1.includes)(resource, "download-transaction")) {
                        tab = "Upload";
                        var isHistory = (0, lodash_1.get)(data, "isHistory");
                        if (isHistory)
                            tab = "History ".concat(tab);
                    }
                    var now = (0, moment_1.default)().format(YEAR_DATETIME_FULL_FORMAT);
                    var filename = "".concat(now, " Multipayment ").concat(tab);
                    if (isFileUpload) {
                        filename = "".concat(now, " Multipayment Upload");
                    }
                    if ((0, lodash_1.includes)(resource, "invoice")) {
                        var newResponse = {
                            data: response === null || response === void 0 ? void 0 : response.data,
                            code: response === null || response === void 0 ? void 0 : response.status,
                        };
                        responseData = newResponse;
                        filename = "".concat(now, " Payment Receipt ").concat(transactiondId, "}");
                    }
                    (0, downloadjs_1.default)(response.data, "".concat((0, lodash_1.kebabCase)(filename), ".").concat(type), contentType);
                }
                return responseData;
            })
                .catch(function (error) {
                if ((0, lodash_1.includes)(url, "download") && error.response) {
                    var errorMessage = {
                        code: error.response.status,
                        message: error.response.statusText,
                    };
                    if ((0, lodash_1.includes)(resource, "invoice") && (0, lodash_1.isArray)(data === null || data === void 0 ? void 0 : data.data)) {
                        return Promise.reject(errorMessage);
                    }
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
    var batch = function (batchId, data) {
        var url = "/".concat(service, "/batch");
        var newData = __assign(__assign({}, data), { batchId: batchId });
        return customAxiosPost(url, newData);
    };
    var batches = function (isHistory) { return function (data) {
        var newData = __assign(__assign({}, data), { isHistory: true });
        var url = "/".concat(service, "/batches");
        return customAxiosPost(url, isHistory ? newData : data);
    }; };
    var batchesAction = function (data) {
        var url = "/".concat(service, "/batches/action");
        return customAxiosPost(url, data);
    };
    var batchesDownload = function (isHistory, ids) {
        if (isHistory === void 0) { isHistory = false; }
        return function (props) { return __awaiter(void 0, void 0, void 0, function () {
            var data, newData, url;
            return __generator(this, function (_a) {
                data = getDataDownload(props);
                newData = __assign(__assign({}, data), { ids: ids, isHistory: isHistory });
                url = "/".concat(service, "/batches/download");
                return [2 /*return*/, customAxiosPost(url, newData)];
            });
        }); };
    };
    var batchReceipt = function (data) {
        var newData = (0, lodash_1.merge)(data, { fileFormat: types_1.FormatEnum["zip"] });
        var url = "/".concat(service, "/batch/receipt");
        return customAxiosPost(url, newData);
    };
    var billingApproval = function (data) {
        var url = "/".concat(service, "/billing-approval");
        // @ts-ignore: Object is possibly 'null'
        return customAxiosPost(url, data);
    };
    var billingInquiry = function (data) {
        var url = "/".concat(service, "/billing-inquiry");
        return customAxiosPost(url, data);
    };
    var deleteBilling = function (data) {
        var url = "/".concat(service, "/delete-billing");
        return customAxiosPost(url, data);
    };
    var detailTransaction = function (data) {
        var url = "/".concat(service, "/detail-transaction");
        return customAxiosPost(url, data);
    };
    var downloadMasterFile = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var extension, name_1, type, formData, response, content, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    extension = data.extension, name_1 = data.name, type = data.type;
                    formData = new URLSearchParams();
                    formData.append("name", name_1);
                    formData.append("type", type);
                    return [4 /*yield*/, custom_axios_1.default.post("/".concat(service, "/download-master-file"), formData, {
                            responseType: "blob",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        })];
                case 1:
                    response = _a.sent();
                    content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(type.replace(" ", "-"), "-").concat(name_1, ".").concat(extension), content);
                    if (response.status !== 200) {
                        throw new Error("Error");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, Promise.reject((error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || { message: "Network Error" })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var downloadInvoice = function (data) {
        var newData = null;
        if ((0, lodash_1.isArray)(data)) {
            newData = {
                data: data,
                fileFormat: (0, lodash_1.size)(data) > 1 ? types_1.FormatEnum["zip"] : types_1.FormatEnum["pdf"],
                transactionId: "batch",
            };
        }
        else {
            newData = (0, lodash_1.merge)(data, { fileFormat: types_1.FormatEnum["pdf"] });
        }
        var url = "/".concat(service, "/download-invoice");
        return customAxiosPost(url, newData);
    };
    var downloadTask = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var data, url;
        return __generator(this, function (_a) {
            data = getDataDownload(props);
            url = "/".concat(service, "/download-task");
            return [2 /*return*/, customAxiosPost(url, data)];
        });
    }); };
    var downloadTransaction = function (batchId, isFromTableHistory, fileFormat, type) {
        if (isFromTableHistory === void 0) { isFromTableHistory = false; }
        var url = "/".concat(service, "/download-transaction");
        if (isFromTableHistory) {
            var format = types_1.FormatEnum["".concat(fileFormat)];
            var data = {
                billingType: type,
                filter: "batch_id:".concat(batchId),
                services: type,
                fileFormat: format,
                isHistory: isFromTableHistory,
            };
            return customAxiosPost(url, data);
        }
        else {
            return function (props) {
                var data = getDataDownload(props);
                var filter = (0, lodash_1.get)(data, "filter");
                var newFilter = filter;
                if (batchId)
                    newFilter = "batch_id:".concat(batchId, ",").concat(filter);
                var newData = __assign(__assign({}, data), { filter: newFilter });
                return customAxiosPost(url, newData);
            };
        }
    };
    var getListSavedBilling = function (data) {
        var url = "/".concat(service, "/get-list-saved-billing");
        return customAxiosPost(url, data);
    };
    var getListTransaction = function (data) {
        var url = "/".concat(service, "/get-list-transaction");
        // @ts-ignore: Object is possibly 'null'
        return customAxiosPost(url, data);
    };
    var getSummaryStatus = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/task/statuses/counter", props)];
                case 1:
                    response = _b.sent();
                    if ((response === null || response === void 0 ? void 0 : response.status) !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _b.sent();
                    return [4 /*yield*/, Promise.reject(error_2)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var products = function (data) {
        var url = "/".concat(service, "/products");
        return customAxiosPost(url, data);
    };
    var saveBilling = function (data) {
        var url = "/".concat(service, "/save-billing");
        return customAxiosPost(url, data);
    };
    // List of tasks
    var task = function (data) {
        var url = "/".concat(service, "/task");
        return customAxiosPost(url, data);
    };
    var taskDetail = function (data) {
        var url = "/".concat(service, "/task-detail");
        return customAxiosPost(url, data);
    };
    var submitFile = function (data) {
        var url = "/".concat(service, "/submit-file");
        return customAxiosPost(url, data);
    };
    return {
        batch: batch,
        batches: batches,
        batchesAction: batchesAction,
        batchesDownload: batchesDownload,
        batchReceipt: batchReceipt,
        billingApproval: billingApproval,
        billingInquiry: billingInquiry,
        deleteBilling: deleteBilling,
        detailTransaction: detailTransaction,
        downloadInvoice: downloadInvoice,
        downloadMasterFile: downloadMasterFile,
        downloadTask: downloadTask,
        downloadTransaction: downloadTransaction,
        getListSavedBilling: getListSavedBilling,
        getListTransaction: getListTransaction,
        getSummaryStatus: getSummaryStatus,
        products: products,
        saveBilling: saveBilling,
        submitFile: submitFile,
        task: task,
        taskDetail: taskDetail,
    };
};
exports.default = Multipayment;
//# sourceMappingURL=index.js.map