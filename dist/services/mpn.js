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
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var qs_1 = __importDefault(require("qs"));
var api_service_1 = require("./api-service");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var MPNService = function (companyID, userID) {
    var getMenus = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.post("/menu/license/data2", props)];
                case 1:
                    res = _b.sent();
                    if (res.status !== 200)
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return [2 /*return*/, {
                            data: res.data,
                        }];
                case 2:
                    err_1 = _b.sent();
                    return [4 /*yield*/, Promise.reject(err_1)];
                case 3: return [2 /*return*/, _b.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var validateOtp = function (params) {
        return custom_axios_1.default
            .post("/transaction/hard-token-validation", params)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getMPNPendingTask = function (params) {
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
    var checkCutOffHoliday = function (time, moduleId) {
        return custom_axios_1.default
            .get("/cut-off/available-time?modulID=".concat(moduleId, "&time=").concat(time))
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
        });
    };
    var getLimitFile = function () {
        return custom_axios_1.default
            .get("/system/key/maximum-upload-size")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    // UPDATED
    var getListTaxMPN = function (body) {
        return custom_axios_1.default
            .get("/mpn/tax-codes", body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListInquiryRecord = function (id, body) {
        return custom_axios_1.default
            .get("/mpn/check-failed-inquiry/".concat(id), body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListFailedInquiryRecord = function (id, body) {
        return custom_axios_1.default
            .get("/mpn/v3/check-failed-inquiry/".concat(id), body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var inquiryTaxMPN = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/tax", body)
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
    var inquiryTaxMPNV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/tax", body)
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
    /* eslint @typescript-eslint/no-var-requires: "off" */
    var crypto = require("crypto-js");
    var headersWithSignature = function (signature) {
        return {
            "Grpc-Metadata-Signature": signature,
        };
    };
    var CreateSignature = function (params, companyID, userID) {
        var secret = "BRIC@MS4dd0ns";
        var data = "bodydata:" +
            JSON.stringify(params) +
            "&bearer:".concat(localStorage.getItem("access-token"), "&companyid:") +
            companyID +
            "&userid:" +
            userID;
        if ("".concat(process.env["NEXT_PUBLIC_SIGNATURE"]) === "" ||
            "".concat(process.env["NEXT_PUBLIC_SIGNATURE"]) == "undefined" ||
            "".concat(process.env["NEXT_PUBLIC_SIGNATURE"]) == undefined) {
            var hash = crypto.HmacSHA256(data, secret);
            return hash.toString(crypto.enc.Hex);
        }
        else {
            var hash = crypto.HmacSHA256(data, "".concat(process.env["NEXT_PUBLIC_SIGNATURE"]));
            return hash.toString(crypto.enc.Hex);
        }
    };
    var createSingleTaxMPN = function (body, rCode) {
        var req = JSON.stringify(body);
        var bodyData = qs_1.default.stringify({ request: req });
        var bodyparsed = bodyData.slice(8);
        var hash = CreateSignature({ request: bodyparsed }, companyID, userID);
        return custom_axios_1.default
            .post("/mpn/create/single/task", { request: bodyparsed, rCode: rCode }, {
            headers: headersWithSignature(hash),
        })
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
    var createSingleTaxMPNV3 = function (body, rCode) {
        var req = JSON.stringify(body);
        var bodyData = qs_1.default.stringify({ request: req });
        var bodyparsed = bodyData.slice(8);
        var hash = CreateSignature({ request: bodyparsed }, companyID, userID);
        return custom_axios_1.default
            .post("/mpn/v3/create/single/task", { request: bodyparsed, rCode: rCode }, {
            headers: headersWithSignature(hash),
        })
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
    var createUploadTaxMPN = function (body, rCode) {
        return custom_axios_1.default
            .post("/mpn/create/upload/task", __assign(__assign({}, body), { rCode: rCode }))
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
    var createUploadTaxMPNV3 = function (body, rCode) {
        return custom_axios_1.default
            .post("/mpn/v3/create/upload/task", __assign(__assign({}, body), { rCode: rCode }))
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
    var inputUploadTaxMPN = function (body, rCode) {
        return custom_axios_1.default
            .post("/mpn/input/upload/task", __assign(__assign({}, body), { rCode: rCode }))
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
    var inputUploadTaxMPNV3 = function (body, rCode) {
        return custom_axios_1.default
            .post("/mpn/v3/input/upload/task", __assign(__assign({}, body), { rCode: rCode }))
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
    var createCacheMPN = function (rcode) {
        return api_service_1.apiClient
            .post("/mpn/rescache", { rcode: rcode })
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
    var getListSingleMPN = function (params) {
        return custom_axios_1.default
            .get("/mpn/task", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListSingleMPNV3 = function (params) {
        return custom_axios_1.default
            .get("/mpn/v3/task", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListUploadMPN = function (params) {
        return custom_axios_1.default
            .get("/mpn/upload/task", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListUploadMPNV3 = function (params) {
        return custom_axios_1.default
            .get("/mpn/v3/upload/task", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var inquirySSPMPN = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/ssp", body)
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
    var inquirySSPMPNV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/ssp", body)
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
    var inquiryReceiptMPN = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/receipt/download", body)
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
    var inquiryBPNMPN = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/bpn", body)
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
    var inquiryBPNMPNV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/bpn", body)
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
    var inquiryReinquirySingle = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/re-inquiry", body)
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
    var inquiryReinquiryUpload = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/upload/re-inquiry", body)
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
    var inquiryReinquiryUploadV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/upload/re-inquiry-bulk", body)
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
    var bulkInquiryReinquiryUpload = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/upload/re-inquiry-bulk", body)
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
    var bulkInquiryReinquiryUploadV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/upload/re-inquiry-bulk", body)
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
    var inputSingleTaxMPN = function (body, rCode) {
        var req = JSON.stringify(body);
        var bodyData = qs_1.default.stringify({ request: req });
        var bodyparsed = bodyData.slice(8);
        var hash = CreateSignature({ request: bodyparsed }, companyID, userID);
        return custom_axios_1.default
            .post("/mpn/input/single/task", { request: bodyparsed, rCode: rCode }, {
            headers: headersWithSignature(hash),
        })
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
    var inquiryBillingMPN = function (body) {
        return custom_axios_1.default
            .post("/mpn/inquiry/billing", body)
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
    var getSingleMPN = function (taskID, body) {
        return custom_axios_1.default
            .get("/mpn/task/".concat(taskID), body)
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
    var getUploadMPN = function (taskID, params) {
        return custom_axios_1.default
            .get("/mpn/upload/task/".concat(taskID), { params: params })
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
        });
    };
    var getUploadMPNV3 = function (taskID, params) {
        return custom_axios_1.default
            .get("/mpn/v3/upload/task/".concat(taskID), { params: params })
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
        });
    };
    var getBillingMPN = function (taskId, rowId, body) {
        return custom_axios_1.default
            .get("/mpn/task/billing/".concat(taskId, "/").concat(rowId), body)
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
    var getBillingMPNV3 = function (taskId, rowId, body) {
        return custom_axios_1.default
            .get("/mpn/v3/task/billing/".concat(taskId, "/").concat(rowId), body)
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
    var updateMPNStatus = function (taskId, action, reasons, comment, passCode) {
        return custom_axios_1.default
            .post("/task/workflow", {
            taskID: ["".concat(taskId)],
            action: action !== null && action !== void 0 ? action : "",
            reasons: reasons !== null && reasons !== void 0 ? reasons : "",
            comment: comment !== null && comment !== void 0 ? comment : "",
            passCode: passCode !== null && passCode !== void 0 ? passCode : "",
            idToken: "",
            otp: "",
            productID: "233", //ProductID MPN
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
    var updateTask = function (id, payload) {
        if (payload.action === types_1.TransactionFunctionEnum.Create) {
            return submitSingleMPN(id);
        }
        else {
            return updateMPNStatus(id, payload.action, payload.reasons, payload.comment);
        }
    };
    var submitSingleMPN = function (taskId, passCode) {
        return custom_axios_1.default
            .post("/mpn/task", { taskID: taskId, isDraft: false, passCode: passCode })
            .then(function (response) {
            if (response.status !== 200) {
                throw response;
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            throw error;
        });
    };
    var submitCreateUploadMPN = function (taskId, passCode, rCode) {
        return custom_axios_1.default
            .post("/mpn/create/upload/task", { taskID: taskId, isDraft: false, passCode: passCode, rCode: rCode })
            .then(function (response) {
            if (response.status !== 200) {
                throw response;
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            throw error;
        });
    };
    var submitInputUploadMPN = function (taskId, passCode, rCode) {
        return custom_axios_1.default
            .post("/mpn/input/upload/task", { taskID: taskId, isDraft: false, passCode: passCode, rCode: rCode })
            .then(function (response) {
            if (response.status !== 200) {
                throw response;
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            throw error;
        });
    };
    var downloadSingleDataTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return api_service_1.apiClient
            .get("mpn/task/template/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("MPN", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadSingleDataTableV3 = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return api_service_1.apiClient
            .get("mpn/v3/task/template/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("MPN", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadUploadDataTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return api_service_1.apiClient
            .get("mpn/task/template/upload/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("MPN", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadUploadDataTableV3 = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr;
        var filter = "?filter=".concat(getFilter);
        var filterOr = getFilterOr ? "&filterOr=".concat(getFilterOr) : "";
        var sort = getSort ? "&sort=".concat(getSort) : "";
        var dir = getDir ? "&dir=".concat(getDir) : "";
        return api_service_1.apiClient
            .get("mpn/v3/task/template/upload/".concat(format).concat(filter).concat(filterOr).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("MPN", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadFilePreview = function (props, taskID) {
        var format = props.format;
        return api_service_1.apiClient
            .get("/mpn/task/file-preview/".concat(format, "?taskID=").concat(taskID), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "Detail_Records_MPN".concat(taskID, ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadFilePreviewV3 = function (props, taskID) {
        var format = props.format;
        return api_service_1.apiClient
            .get("/mpn/v3/task/file-preview/".concat(format, "?taskID=").concat(taskID), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "Detail_Records_MPN".concat(taskID, ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadFailedInquiry = function (taskID, format) {
        return custom_axios_1.default
            .get("/mpn/check-failed-inquiry/template/".concat(format, "?taskID=").concat(taskID), { responseType: "blob" })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "Invalid_Records_MPN".concat(taskID, ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadFailedInquiryV3 = function (taskID, format) {
        return custom_axios_1.default
            .get("/mpn/v3/check-failed-inquiry/template/".concat(format, "?taskID=").concat(taskID), { responseType: "blob" })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "Invalid_Records_MPN".concat(taskID, ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getIdentifyTypeMPN = function (taskID) {
        return custom_axios_1.default
            .get("/mpn/identify/".concat(taskID))
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
    var getIdentifyTypeMPNV3 = function (taskID, itemId) {
        return custom_axios_1.default
            .get("/mpn/v3/identify/".concat(taskID).concat(itemId && "?transferItemID=".concat(itemId)))
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
    var getListCreatedBy = function () {
        return custom_axios_1.default
            .get("/mpn/task/me/created-by")
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
    var getListApprovedBy = function () {
        return custom_axios_1.default
            .get("/mpn/task/me/approved-by")
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
    var getListTaxNumber = function (body) {
        return custom_axios_1.default
            .get("/mpn/v3/tax-payer", body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var addTaxNumberToFavorite = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/tax-payer/save", body)
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
    var inquiryBillingMPNV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/billing", body)
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
    var inputSingleTaxMPNV3 = function (body, rCode) {
        var req = JSON.stringify(body);
        var bodyData = qs_1.default.stringify({ request: req });
        var bodyparsed = bodyData.slice(8);
        var hash = CreateSignature({ request: bodyparsed }, companyID, userID);
        return custom_axios_1.default
            .post("/mpn/v3/input/single/task", { request: bodyparsed, rCode: rCode }, {
            headers: headersWithSignature(hash),
        })
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
    var inquiryReinquirySingleMPNV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/inquiry/re-inquiry", body)
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
    var getSingleMPNV3 = function (taskID, body) {
        return custom_axios_1.default
            .get("/mpn/v3/task/".concat(taskID), body)
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
    var deleteTaxPayerMPNV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/tax-payer/delete", body)
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
    var createFileUpload = function (body) {
        return custom_axios_1.default
            .post("/mpn/file-upload/create", body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
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
    var createFileUploadV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/file-upload/create", body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
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
    var inputFileUpload = function (body) {
        return custom_axios_1.default
            .post("/mpn/file-upload/input", body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
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
    var inputFileUploadV3 = function (body) {
        return custom_axios_1.default
            .post("/mpn/v3/file-upload/input", body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
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
    var downloadTemplate = function (body) {
        return api_service_1.apiClient
            .post("/mpn/v3/upload/template/download", body, {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "Module Penerimaan ".concat((body === null || body === void 0 ? void 0 : body.mpnVersion) === "3" ? "Pajak" : "Negara (MPN)", ".xls"), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var generateTaxReport = function (params) {
        return custom_axios_1.default
            .get("/mpn-report/report-list", { params: params })
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
    var downloadReport = function (body) {
        return custom_axios_1.default
            .post("/mpn-report/download/request", body)
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
    var getDownloadReport = function (params) {
        return custom_axios_1.default
            .get("/mpn-report/download/request", { params: params })
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
    return {
        getMenus: getMenus,
        getActivityLogs: getActivityLogs,
        getMPNPendingTask: getMPNPendingTask,
        checkCutOffHoliday: checkCutOffHoliday,
        validateOtp: validateOtp,
        getLimitFile: getLimitFile,
        getListTaxMPN: getListTaxMPN,
        getListInquiryRecord: getListInquiryRecord,
        getListFailedInquiryRecord: getListFailedInquiryRecord,
        inquiryTaxMPN: inquiryTaxMPN,
        inquiryTaxMPNV3: inquiryTaxMPNV3,
        createSingleTaxMPN: createSingleTaxMPN,
        createSingleTaxMPNV3: createSingleTaxMPNV3,
        createUploadTaxMPN: createUploadTaxMPN,
        createUploadTaxMPNV3: createUploadTaxMPNV3,
        inputUploadTaxMPN: inputUploadTaxMPN,
        inputUploadTaxMPNV3: inputUploadTaxMPNV3,
        getListSingleMPN: getListSingleMPN,
        getListSingleMPNV3: getListSingleMPNV3,
        getListUploadMPN: getListUploadMPN,
        getListUploadMPNV3: getListUploadMPNV3,
        inquiryBPNMPN: inquiryBPNMPN,
        inquiryBPNMPNV3: inquiryBPNMPNV3,
        inquirySSPMPN: inquirySSPMPN,
        inquirySSPMPNV3: inquirySSPMPNV3,
        inquiryReceiptMPN: inquiryReceiptMPN,
        inquiryReinquirySingle: inquiryReinquirySingle,
        inquiryReinquirySingleMPNV3: inquiryReinquirySingleMPNV3,
        inquiryReinquiryUpload: inquiryReinquiryUpload,
        inquiryReinquiryUploadV3: inquiryReinquiryUploadV3,
        bulkInquiryReinquiryUpload: bulkInquiryReinquiryUpload,
        bulkInquiryReinquiryUploadV3: bulkInquiryReinquiryUploadV3,
        inputSingleTaxMPN: inputSingleTaxMPN,
        inquiryBillingMPN: inquiryBillingMPN,
        getSingleMPN: getSingleMPN,
        getSingleMPNV3: getSingleMPNV3,
        getUploadMPN: getUploadMPN,
        getUploadMPNV3: getUploadMPNV3,
        getBillingMPN: getBillingMPN,
        getBillingMPNV3: getBillingMPNV3,
        updateMPNStatus: updateMPNStatus,
        updateTask: updateTask,
        submitSingleMPN: submitSingleMPN,
        submitCreateUploadMPN: submitCreateUploadMPN,
        submitInputUploadMPN: submitInputUploadMPN,
        downloadSingleDataTable: downloadSingleDataTable,
        downloadSingleDataTableV3: downloadSingleDataTableV3,
        downloadUploadDataTable: downloadUploadDataTable,
        downloadUploadDataTableV3: downloadUploadDataTableV3,
        createCacheMPN: createCacheMPN,
        downloadFilePreview: downloadFilePreview,
        downloadFilePreviewV3: downloadFilePreviewV3,
        downloadFailedInquiry: downloadFailedInquiry,
        downloadFailedInquiryV3: downloadFailedInquiryV3,
        getIdentifyTypeMPN: getIdentifyTypeMPN,
        getIdentifyTypeMPNV3: getIdentifyTypeMPNV3,
        getListCreatedBy: getListCreatedBy,
        getListApprovedBy: getListApprovedBy,
        getListTaxNumber: getListTaxNumber,
        addTaxNumberToFavorite: addTaxNumberToFavorite,
        inquiryBillingMPNV3: inquiryBillingMPNV3,
        inputSingleTaxMPNV3: inputSingleTaxMPNV3,
        deleteTaxPayerMPNV3: deleteTaxPayerMPNV3,
        createFileUpload: createFileUpload,
        createFileUploadV3: createFileUploadV3,
        inputFileUpload: inputFileUpload,
        inputFileUploadV3: inputFileUploadV3,
        downloadTemplate: downloadTemplate,
        generateTaxReport: generateTaxReport,
        downloadReport: downloadReport,
        getDownloadReport: getDownloadReport,
    };
};
exports.default = MPNService;
//# sourceMappingURL=mpn.js.map