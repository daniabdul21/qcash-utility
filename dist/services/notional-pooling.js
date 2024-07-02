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
var types_1 = require("@/types");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var qs_1 = __importDefault(require("qs"));
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var NotionalPoolingServices = function (baseURL, token, companyID, userID, groupID, userType, isDone, taskID) {
    var headersWithSignature = function (signature) {
        return {
            "Content-Type": "application/x-www-form-urlencoded",
            "Grpc-Metadata-Signature": signature,
        };
    };
    var privateKey = process.env["NEXT_PUBLIC_SIGNATURE"];
    var getListCompany = function () {
        return custom_axios_1.default
            .get("company/data", {
            params: {
                filter: "status:active",
            },
        })
            .then(function (response) {
            if (response.status !== 200) {
                return [];
            }
            return response.data.data;
        })
            .catch(function (_) {
            return [];
        });
    };
    var postValidateAccount = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var accountNo = _b.accountNo, _c = _b.remark, remark = _c === void 0 ? "" : _c, _d = _b.countryCode, countryCode = _d === void 0 ? "" : _d, _e = _b.type, type = _e === void 0 ? "" : _e;
        return __generator(this, function (_f) {
            return [2 /*return*/, custom_axios_1.default.post("account/validate/data", {
                    accountNo: accountNo,
                    remark: remark,
                    countryCode: countryCode,
                    type: type,
                })];
        });
    }); };
    var getListRate = function (currenrcy) {
        return custom_axios_1.default
            .get("system/master-data/MdJhrate", {
            params: {
                limit: 100,
                "data.rateCurr": currenrcy,
            },
        })
            .then(function (response) {
            if (response.status !== 200) {
                return [];
            }
            return response.data.data;
        })
            .catch(function (_) {
            return [];
        });
    };
    var getAccountData = function (params) {
        return custom_axios_1.default.get("/account/data", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var bulkApprovalNotpool = function (data) {
        return custom_axios_1.default
            .post("/task/workflow", data, {
            headers: { "Grpc-Metadata-Product-Id": data.productID },
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
        });
    };
    var downloadTable = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getFilterOr, getSort, getDir, typeTab, fileFormat, data, request, urlEncoded, signature, responseType, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    format = props.format, getFilter = props.getFilter, getFilterOr = props.getFilterOr, getSort = props.getSort, getDir = props.getDir, typeTab = props.typeTab;
                    fileFormat = types_1.FormatEnum["".concat(format)];
                    data = {
                        dir: getDir,
                        fileFormat: fileFormat,
                        filter: getFilter,
                        filterOr: getFilterOr,
                        sort: getSort,
                    };
                    // @ts-ignore
                    if (userType)
                        data.tab = typeTab;
                    request = JSON.stringify(data);
                    urlEncoded = qs_1.default.stringify({ request: request });
                    if (urlEncoded.includes("request=")) {
                        urlEncoded = urlEncoded.replace("request=", "");
                    }
                    signature = CreateSignature(urlEncoded, companyID, userID, privateKey);
                    responseType = "blob";
                    config = {
                        headers: headersWithSignature(signature),
                        responseType: responseType,
                    };
                    return [4 /*yield*/, custom_axios_1.default
                            //@ts-ignore
                            .post("/notpool/download-task", { request: urlEncoded }, config)
                            .then(function (response) {
                            //@ts-ignore
                            if (response || response.status === 200) {
                                var contentType = response.headers["content-type"];
                                var YEAR_DATETIME_FULL_FORMAT = "YYYY-MM-DD HH:mm:ss";
                                var now = (0, moment_1.default)().format(YEAR_DATETIME_FULL_FORMAT);
                                var filename = "".concat(now, " Notional Pooling");
                                (0, downloadjs_1.default)(response.data, "".concat((0, lodash_1.kebabCase)(filename), ".").concat(format), contentType);
                            }
                        })
                            .catch(function (error) {
                            var _a;
                            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var listBranch = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .get("/system/master-data/MdBranch", { params: params })
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
    var createNotpol = function (data) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(dtas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/notpool/save-notpool", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.data.code === 200) {
                return response;
            }
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDetailNotpool = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("/notpool/get-detail-notpool", data)
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
    var getListNotpool = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data.tab && userType)
                        data.tab = "active";
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/get-list-notpool", data)
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
    var approvalNotpool = function (taskId, action, type, reasons, comment) {
        return custom_axios_1.default
            .post("/notpool/approve-notpool/".concat(taskId), {
            taskId: taskId,
            type: type,
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
        });
    };
    var approvalNotpoolCU = function (taskId, action, type, reasons, comment, passcode, isToken) {
        return custom_axios_1.default
            .post("/notpool/approve-member/".concat(taskId), {
            taskId: taskId,
            type: type,
            action: action,
            reasons: reasons,
            comment: comment,
            passcode: passcode,
            isToken: isToken,
        })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
        });
    };
    var deleteNotpool = function (taskID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("/notpool/delete", {
                        taskID: taskID,
                    })
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
    var getMembers = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data.dir = data.dir === "DESC" ? 0 : 1;
                    if (isDone) {
                        data.task_id = "";
                        data.group_id = groupID;
                    }
                    else {
                        data.task_id = taskID;
                        data.group_id = "";
                    }
                    req = JSON.stringify(data);
                    dtas = qs_1.default.stringify({ request: req });
                    signature = CreateSignature(dtas, companyID, userID, privateKey);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/get-members", { request: dtas }, {
                            headers: headersWithSignature(signature),
                        })
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
    var saveMember = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            req = JSON.stringify(data);
            dtas = qs_1.default.stringify({ request: req });
            signature = CreateSignature(dtas, companyID, userID, privateKey);
            return [2 /*return*/, custom_axios_1.default
                    .post("/notpool/save-member", { request: dtas }, {
                    headers: headersWithSignature(signature),
                })
                    .then(function (response) {
                    if (response.data.code === 200) {
                        return response;
                    }
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var getCheckBalance = function (params) {
        return custom_axios_1.default
            .post("/account/validate", params)
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
    var getListReport = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data.dir = data.dir === "DESC" ? 0 : 1;
                    req = JSON.stringify(data);
                    dtas = qs_1.default.stringify({ request: req });
                    signature = CreateSignature(dtas, companyID, userID, privateKey);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/get-list-report", { request: dtas }, {
                            headers: headersWithSignature(signature),
                        })
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
    var generateReport = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    req = JSON.stringify(data);
                    dtas = qs_1.default.stringify({ request: req });
                    signature = CreateSignature(dtas, companyID, userID, privateKey);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/generate-report", { request: dtas }, {
                            headers: headersWithSignature(signature),
                        })
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
    var getStatusReport = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    req = JSON.stringify(data);
                    dtas = qs_1.default.stringify({ request: req });
                    signature = CreateSignature(dtas, companyID, userID, privateKey);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/get-status-report", { request: dtas }, {
                            headers: headersWithSignature(signature),
                        })
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
    var cancelReport = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    req = JSON.stringify(data);
                    dtas = qs_1.default.stringify({ request: req });
                    signature = CreateSignature(dtas, companyID, userID, privateKey);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/cancel-report", { request: dtas }, {
                            headers: headersWithSignature(signature),
                        })
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
    var downloadReport = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var req, dtas, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    req = JSON.stringify(data);
                    dtas = qs_1.default.stringify({ request: req });
                    signature = CreateSignature(dtas, companyID, userID, privateKey);
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/notpool/download-report", { request: dtas }, {
                            headers: headersWithSignature(signature),
                            responseType: "blob",
                        })
                            .then(function (response) {
                            var _a;
                            if (!response || response.status !== 200) {
                                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                            }
                            var content = response.headers["content-type"];
                            (0, downloadjs_1.default)(response.data, data.file_name, content);
                            return response;
                        })
                            .catch(function (error) {
                            var _a;
                            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var nwDt = "";
    var CreateSignature = function (params, companyID, userID, key) {
        nwDt = params.toString().replace("request=", "");
        var data = "bodydata:" +
            nwDt +
            "&bearer:".concat(localStorage.getItem("access-token"), "&companyid:") +
            companyID +
            "&userid:" +
            userID;
        var hash = crypto_js_1.default.HmacSHA256(data, key);
        return hash.toString(crypto_js_1.default.enc.Hex);
    };
    return {
        approvalNotpool: approvalNotpool,
        approvalNotpoolCU: approvalNotpoolCU,
        createNotpol: createNotpol,
        CreateSignature: CreateSignature,
        deleteNotpool: deleteNotpool,
        getAccountData: getAccountData,
        getDetailNotpool: getDetailNotpool,
        getListCompany: getListCompany,
        getListNotpool: getListNotpool,
        getListRate: getListRate,
        getMembers: getMembers,
        listBranch: listBranch,
        postValidateAccount: postValidateAccount,
        bulkApprovalNotpool: bulkApprovalNotpool,
        downloadTable: downloadTable,
        saveMember: saveMember,
        getCheckBalance: getCheckBalance,
        getListReport: getListReport,
        generateReport: generateReport,
        getStatusReport: getStatusReport,
        cancelReport: cancelReport,
        downloadReport: downloadReport,
    };
};
exports.default = NotionalPoolingServices;
//# sourceMappingURL=notional-pooling.js.map