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
exports.TransactionStatus = void 0;
var services_1 = require("@/services");
var utilities_1 = require("@/utilities");
var downloadjs_1 = __importDefault(require("downloadjs"));
var qs_1 = __importDefault(require("qs"));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Reworked"] = "Reworked";
    TransactionStatus["Approved"] = "Approved";
    TransactionStatus["Success"] = "Success";
    TransactionStatus["Pending"] = "Pending";
    TransactionStatus["Timeout"] = "Timeout";
    TransactionStatus["Progress"] = "Progress";
    TransactionStatus["Rejected"] = "Rejected";
    TransactionStatus["Failed"] = "Failed";
    TransactionStatus["Error"] = "Error";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var SwiftService = function (baseURL, token, companyID, userID) {
    //**********************
    // User
    //**********************
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
    var getDataSwiftTask = function (params) {
        var page = params.page, limit = params.limit, filter = params.filter, query = params.query, dir = params.dir, status = params.status, sort = params.sort;
        var data = {
            page: page,
            sort: sort,
            limit: limit,
            filter: !filter
                ? {
                    beneficiaryCountry: "",
                    beneficiaryBank: "",
                    dateCreated: "",
                    dateModified: "",
                    createdBy: "",
                    reviewerName: "",
                    currency: "",
                    status: "",
                    custom: "data.transactionStatus:-",
                }
                : filter,
            search: query,
            dir: dir,
            status: status || "AllStatus",
        };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/task/list", data, {
            headers: headersWithSignature(hash),
        })
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
            // return error.response;
        });
    };
    var getWorkflowData = function (companyId, moduleId, currency) {
        return (services_1.customAxios
            // .get(`workflow/data`, {
            //   params,
            // })
            .post("/workflow/data", {
            page: 1,
            limit: 10,
            dir: "ASC",
            workflow: {
                moduleID: moduleId,
                companyID: companyId,
                currencyName: currency,
            },
        })
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
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        }));
    };
    var getDataFIle = function (body, action) {
        var bodyy = {
            objectName: "".concat(body),
            contentDisposition: action,
        };
        return services_1.customAxios
            .post("file-listener/file-download", bodyy, { responseType: "blob" })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            if (action === "attachment") {
                var dataDownload = response.headers["content-type"];
                (0, downloadjs_1.default)(response.data, body, dataDownload);
            }
            else {
                var dataDownload = response.headers["content-type"];
                if (dataDownload === "image/png" ||
                    dataDownload === "image/jpeg" ||
                    dataDownload === "text/csv" ||
                    dataDownload === "application/vnd.ms-excel") {
                    var url = URL.createObjectURL(response.data);
                    window.open(url, "_blank");
                }
                else if (dataDownload === "application/pdf") {
                    var file = new File([response.data], "".concat(body), {
                        type: dataDownload,
                    });
                    // const file = new Blob([response.data], { type: 'application/pdf' })
                    var fileURL = URL.createObjectURL(file);
                    var pdfWindow = window.open();
                    if (pdfWindow !== null) {
                        pdfWindow.location.href = fileURL;
                    }
                }
            }
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getBeneficiaryAccountData = function (params) {
        return services_1.customAxios
            .get("beneficiary-account/data", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getBeneficiaryAccountDataByRole = function (params) {
        return services_1.customAxios
            .get("beneficiary-account/dataByRole", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            var _a, _b, _c, _d;
            return Promise.reject({
                message: ((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) + "\n Failed to get Beneficiary Account List",
                code: (_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.code,
            });
        });
    };
    var getAccountDataByRole = function (params) {
        return services_1.customAxios
            .get("account/dataByRole", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var validationHardToken = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("/swift/hard-token-validation", params, {
            headers: headersWithSignature(hash),
        })
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
            Promise.reject(error);
            return error.response;
        });
    };
    var getDataSwifts = function (params) {
        var page = params.page, limit = params.limit, filter = params.filter, query = params.query, dir = params.dir, sort = params.sort;
        var data = {
            page: page,
            limit: limit,
            filter: !filter
                ? {
                    beneficiaryCountry: "",
                    beneficiaryBank: "",
                    dateCreated: "",
                    dateModified: "",
                    createdBy: "",
                    reviewerName: "",
                    currency: "",
                    custom: "",
                }
                : filter,
            search: query,
            dir: dir,
            sort: sort,
        };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/data", data, {
            headers: headersWithSignature(hash),
        })
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
            Promise.reject(error);
            return error.response;
        });
    };
    var getCompany = function (params) {
        return services_1.customAxios
            .get("/company/limit", { params: params })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (err) {
            return err.response;
        });
    };
    var getMenuLicence = function (companyId, moduleId) {
        return (services_1.customAxios
            // .get(`/menu/license/data2`, { params })
            .post("/menu/license/data2", {
            page: 1,
            limit: 10,
            filter: "company_id:".concat(companyId),
            in: "product_id:".concat(moduleId),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        }));
    };
    var getAccountData = function (params) {
        return services_1.customAxios
            .get("/account/data", { params: params })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getDetailDataSwift = function (id) {
        var data = { taskID: id };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/task/detail", data, {
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
            var _a, _b, _c, _d;
            return Promise.reject({
                message: ((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) + "\n Failed to get Swift Data",
                code: (_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.code,
            });
        });
    };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split, data, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    data = { page: page, limit: limit, search: search, dateFrom: "".concat(split[0]), dateTo: "".concat(split[1]) };
                    hash = CreateSignature(data, companyID, userID);
                    return [4 /*yield*/, services_1.customAxios
                            .post("/task/activity-logs/swift", data, {
                            headers: headersWithSignature(hash),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })
                            .catch(function (error) {
                            Promise.reject(error);
                            return error.response;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getDataRoutePartner = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("/swift/route-partner", params, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    // const getDataExchangeRate = (params: any) => {
    //   return customAxios
    //     .post(`/swift/brigate/kurs-briefx`, params)
    //     .then((response) => {
    //       if (response.status !== 200) {
    //         throw new Error(response.data?.message || "Server Error");
    //       }
    //       return response.data.data;
    //     })
    //     .catch((error) => {
    //       return Promise.reject(error);
    //     });
    // };
    var getDataExchangeRate = function (params) {
        return services_1.customAxios
            .get("/transaction/rate", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            // Promise.reject(error);
            return error.response;
        });
    };
    var getDataCooperationCurrency = function () {
        var data = { filter: null };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/nostro-priority", data, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getCheckingApprover = function (param) {
        var hash = CreateSignature(param, companyID, userID);
        return services_1.customAxios
            .post("/swift/check-approval", param, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getCutOffSwiftAll = function (param) {
        return services_1.customAxios
            .get("/cut-off/data/schedule?Product=".concat(param))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var postFileUpload = function (file) {
        // const hash = CreateSignature(file, companyID, userID);
        return services_1.customAxios
            .post("file-listener/v2/file-upload", file, {
            headers: { "Content-Type": "multipart/form-data" },
            // headers: headersWithSignature(hash),
        })
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
            return Promise.reject(error);
        });
    };
    var postSwiftTransfer = function (params, dataRouterParter, isDraft, beneficiaryEmails, validationToken, swiftID, senderData) {
        var transformResponseValueRouterPartner = function (response) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27;
            var newValue = {
                ticketNumber: (_a = response === null || response === void 0 ? void 0 : response.TICKET_NUMBER) !== null && _a !== void 0 ? _a : "",
                route: (_b = response === null || response === void 0 ? void 0 : response.ROUTE) !== null && _b !== void 0 ? _b : "",
                transactionType: (_c = response === null || response === void 0 ? void 0 : response.TRANSACTION_TYPE) !== null && _c !== void 0 ? _c : "",
                transactionIdType: (_d = response === null || response === void 0 ? void 0 : response.TRANSACTION_ID_TYPE) !== null && _d !== void 0 ? _d : "",
                nostroBic: (_e = response === null || response === void 0 ? void 0 : response.NOSTRO_BIC) !== null && _e !== void 0 ? _e : "",
                nostroDescription: (_f = response === null || response === void 0 ? void 0 : response.nostroDescription) !== null && _f !== void 0 ? _f : "",
                sendAmount: (_g = response === null || response === void 0 ? void 0 : response.SEND_AMOUNT) !== null && _g !== void 0 ? _g : "",
                sendAmountTotal: (_h = response === null || response === void 0 ? void 0 : response.SEND_AMOUNT_TOTAL) !== null && _h !== void 0 ? _h : "",
                sendCurrency: (_j = response === null || response === void 0 ? void 0 : response.SEND_CURRENCY) !== null && _j !== void 0 ? _j : "",
                currencyTrx: (_k = response === null || response === void 0 ? void 0 : response.CURRENCY_TRX) !== null && _k !== void 0 ? _k : "",
                baseCurrency: (_l = response === null || response === void 0 ? void 0 : response.BASE_CURRENCY) !== null && _l !== void 0 ? _l : "",
                chargesCurrency: (_m = response === null || response === void 0 ? void 0 : response.CHARGES_CURRENCY) !== null && _m !== void 0 ? _m : "",
                amount: (_o = response === null || response === void 0 ? void 0 : response.AMOUNT) !== null && _o !== void 0 ? _o : "",
                amountConvert: (_p = response === null || response === void 0 ? void 0 : response.AMOUNT_CONVERT) !== null && _p !== void 0 ? _p : "",
                charges: (_q = response === null || response === void 0 ? void 0 : response.CHARGES) !== null && _q !== void 0 ? _q : "",
                chargesOur: (_r = response === null || response === void 0 ? void 0 : response.CHARGES_OUR) !== null && _r !== void 0 ? _r : "",
                fxSpread: (_s = response === null || response === void 0 ? void 0 : response.FX_SPREAD) !== null && _s !== void 0 ? _s : "",
                multicurrency: (_t = response === null || response === void 0 ? void 0 : response.multicurrency) !== null && _t !== void 0 ? _t : "",
                estimatedTime: (_u = response === null || response === void 0 ? void 0 : response.ESTIMATED_TIME) !== null && _u !== void 0 ? _u : "",
                buyRate: (_v = response === null || response === void 0 ? void 0 : response.BUY_RATE) !== null && _v !== void 0 ? _v : "",
                sellRate: (_w = response === null || response === void 0 ? void 0 : response.SELL_RATE) !== null && _w !== void 0 ? _w : "",
                sessionId: (_x = response === null || response === void 0 ? void 0 : response.SESSION_ID) !== null && _x !== void 0 ? _x : "",
                debitAmountMain: (_y = response === null || response === void 0 ? void 0 : response.DEBIT_AMOUNT_MAIN) !== null && _y !== void 0 ? _y : "",
                debitAmountFeeMain: (_z = response === null || response === void 0 ? void 0 : response.DEBIT_AMOUNT_FEE_MAIN) !== null && _z !== void 0 ? _z : "",
                debetAmountFeeTotal: (_0 = response === null || response === void 0 ? void 0 : response.debetAmountFeeTotal) !== null && _0 !== void 0 ? _0 : "",
                iaFeeOurAccountMain: (_1 = response === null || response === void 0 ? void 0 : response.IA_FEE_OUR_ACCOUNT_MAIN) !== null && _1 !== void 0 ? _1 : "",
                iaFeeOurAmountMain: (_2 = response === null || response === void 0 ? void 0 : response.IA_FEE_OUR_AMOUNT_MAIN) !== null && _2 !== void 0 ? _2 : "",
                glAccount: (_3 = response === null || response === void 0 ? void 0 : response.GL_ACCOUNT) !== null && _3 !== void 0 ? _3 : "",
                glAmountMain: (_4 = response === null || response === void 0 ? void 0 : response.GL_AMOUNT_MAIN) !== null && _4 !== void 0 ? _4 : "",
                debitCurrencyMain: (_5 = response === null || response === void 0 ? void 0 : response.DEBIT_CURRENCY_MAIN) !== null && _5 !== void 0 ? _5 : "",
                creditCurrencyGlMain: (_6 = response === null || response === void 0 ? void 0 : response.CREDIT_CURRENCY_GL_MAIN) !== null && _6 !== void 0 ? _6 : "",
                creditCurrencyIaMain: (_7 = response === null || response === void 0 ? void 0 : response.CREDIT_CURRENCY_IA_MAIN) !== null && _7 !== void 0 ? _7 : "",
                feeDebitAmount: (_8 = response === null || response === void 0 ? void 0 : response.FEE_DEBIT_AMOUNT) !== null && _8 !== void 0 ? _8 : "",
                glFeeAccount: (_9 = response === null || response === void 0 ? void 0 : response.GL_FEE_ACCOUNT) !== null && _9 !== void 0 ? _9 : "",
                creditCurrencyFee: (_10 = response === null || response === void 0 ? void 0 : response.CREDIT_CURRENCY_FEE) !== null && _10 !== void 0 ? _10 : "",
                feeCreditAmount: (_11 = response === null || response === void 0 ? void 0 : response.FEE_CREDIT_AMOUNT) !== null && _11 !== void 0 ? _11 : "",
                nostroAccount: (_12 = response === null || response === void 0 ? void 0 : response.NOSTRO_ACCOUNT) !== null && _12 !== void 0 ? _12 : "",
                nostroAmount: (_13 = response === null || response === void 0 ? void 0 : response.NOSTRO_AMOUNT) !== null && _13 !== void 0 ? _13 : "",
                iaFeeCreditAmount: (_14 = response === null || response === void 0 ? void 0 : response.IA_FEE_CREDIT_AMOUNT) !== null && _14 !== void 0 ? _14 : "",
                creditCurrencyNostroDestBank: (_15 = response === null || response === void 0 ? void 0 : response.CREDIT_CURRENCY_NOSTRO_DEST_BANK) !== null && _15 !== void 0 ? _15 : "",
                nostroCurrency: (_16 = response === null || response === void 0 ? void 0 : response.NOSTRO_CURRENCY) !== null && _16 !== void 0 ? _16 : "",
                nostroAccountType: (_17 = response === null || response === void 0 ? void 0 : response.NOSTRO_ACCOUNT_TYPE) !== null && _17 !== void 0 ? _17 : "",
                iaFeeAccount: (_18 = response === null || response === void 0 ? void 0 : response.IA_FEE_ACCOUNT) !== null && _18 !== void 0 ? _18 : "",
                destBankDebitAmount: (_19 = response === null || response === void 0 ? void 0 : response.DEST_BANK_DEBIT_AMOUNT) !== null && _19 !== void 0 ? _19 : "",
                rateGapDebitAmount: (_20 = response === null || response === void 0 ? void 0 : response.RATE_GAP_DEBIT_AMOUNT) !== null && _20 !== void 0 ? _20 : "",
                rateGapCreditAmount: (_21 = response === null || response === void 0 ? void 0 : response.RATE_GAP_CREDIT_AMOUNT) !== null && _21 !== void 0 ? _21 : "",
                creditCurrencyIaDestBank: (_22 = response === null || response === void 0 ? void 0 : response.CREDIT_CURRENCY_IA_DEST_BANK) !== null && _22 !== void 0 ? _22 : "",
                iaFeeDebitAmount: (_23 = response === null || response === void 0 ? void 0 : response.IA_FEE_DEBIT_AMOUNT) !== null && _23 !== void 0 ? _23 : "",
                glFeeCreditAmount: (_24 = response === null || response === void 0 ? void 0 : response.GL_FEE_CREDIT_AMOUNT) !== null && _24 !== void 0 ? _24 : "",
                debitCurrencyRateGap: (_25 = response === null || response === void 0 ? void 0 : response.DEBIT_CURRENCY_RATE_GAP) !== null && _25 !== void 0 ? _25 : "",
                creditCurrencyRateGap: (_26 = response === null || response === void 0 ? void 0 : response.CREDIT_CURRENCY_RATE_GAP) !== null && _26 !== void 0 ? _26 : "",
                urlTracking: (_27 = response === null || response === void 0 ? void 0 : response.URL_TRACKING) !== null && _27 !== void 0 ? _27 : "",
            };
            return newValue;
        };
        var customData = __assign(__assign({}, params), { DEAL_CODE: params === null || params === void 0 ? void 0 : params.DEALCODE });
        customData === null || customData === void 0 ? true : delete customData.DEALCODE;
        var data = {
            isDraft: isDraft,
            data: customData,
            selectedRoutePartner: transformResponseValueRouterPartner(dataRouterParter),
            taskID: swiftID,
            beneficiaryEmails: beneficiaryEmails,
            userName: validationToken === null || validationToken === void 0 ? void 0 : validationToken.userName,
            passCode: validationToken === null || validationToken === void 0 ? void 0 : validationToken.passCode,
            senderData: senderData,
        };
        console.log("data45", data);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        var bodyparsed = body.slice(8);
        var hash = CreateSignature({ request: bodyparsed }, companyID, userID);
        return services_1.customAxios
            .post("swift/task", { request: bodyparsed }, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            // const hash = CreateSignature(response.data, companyID, userID);
            // if (hash !== response.headers["signature"]) {
            //   throw new Error("Data not Authorized");
            // }
            // if (response.status !== 200) {
            //   throw new Error(response?.data?.message || "Server Error");
            // }
            // if (response.data.error) {
            //   throw new Error(response?.data?.message || "Server Error");
            // }
            return response;
        })
            .catch(function (error) {
            var _a, _b;
            return Promise.reject({ message: ((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) + "\n \nFailed to Create Swift Task" });
        });
    };
    var putTask = function (taskID, action, reasons, comment, validationToken) {
        if (reasons === void 0) { reasons = ""; }
        if (comment === void 0) { comment = ""; }
        var data = {
            taskID: taskID,
            action: action,
            reasons: reasons,
            comment: comment,
            userName: validationToken === null || validationToken === void 0 ? void 0 : validationToken.userName,
            passCode: validationToken === null || validationToken === void 0 ? void 0 : validationToken.passCode,
        };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/task/action", data, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var deleteTask = function (taskID) {
        var hash = CreateSignature(taskID, companyID, userID);
        return services_1.customAxios
            .post("/swift/task/delete", taskID, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var cancelTask = function (taskID, action, reasons, comment) {
        if (reasons === void 0) { reasons = ""; }
        if (comment === void 0) { comment = ""; }
        var data = {
            taskID: taskID,
            action: action,
            reasons: reasons,
            comment: comment,
        };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/task/cancel", data, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getTransactionStatus = function (taskID) {
        var data = { taskID: taskID };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/transactions-checker", data, {
            headers: headersWithSignature(hash),
        })
            .then(function (ress) {
            if (!ress) {
                return;
            }
            return ress.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getTransactionStatusMultiple = function (taskID) {
        var data = { taskIDs: taskID };
        var hash = CreateSignature(data, companyID, userID);
        return services_1.customAxios
            .post("/swift/transactions-checkers", data, {
            headers: headersWithSignature(hash),
        })
            .then(function (ress) {
            if (!ress) {
                return;
            }
            return ress.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getUsersData = function (username) {
        return services_1.customAxios
            .get("user/data?user.username=".concat(username))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var getTemplateData = function (params) {
        return services_1.customAxios
            .get("swift/template/get", params)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var saveTemplateData = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("swift/template/save", params, {
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
            Promise.reject(error);
            return error.response;
        });
    };
    var deleteTemplateData = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("swift/template/delete", params, {
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
            Promise.reject(error);
            return error.response;
        });
    };
    var updateTemplateData = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("swift/template/edit", params, {
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
            Promise.reject(error);
            return error.response;
        });
    };
    var getCutOffHolidaySchedule = function (time, currency, moduleID) {
        return services_1.customAxios
            .get("/cut-off/available-time?time=".concat(time, "&modulID=").concat(moduleID !== null && moduleID !== void 0 ? moduleID : 100, "&currency=").concat(currency)) //Module ID Deposito 84
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            Promise.reject(error);
            return error.response;
        });
    };
    var downloadReceipSwift = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var transaction_id, _a, on, url;
        return __generator(this, function (_b) {
            transaction_id = props.transaction_id, _a = props.on, on = _a === void 0 ? "" : _a;
            url = "swift/receipt/".concat(transaction_id);
            if (on === "history") {
                url = "swift/receiptmt103/".concat(transaction_id);
            }
            return [2 /*return*/, services_1.customAxios
                    .get(encodeURI(url), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Download Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(transaction_id, "-Receipt-").concat((0, utilities_1.formatDate)(new Date(), "DD-MM-YYYY-HHmmSS"), ".pdf"), content);
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject((err === null || err === void 0 ? void 0 : err.message) || ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Download Error (Server Not Responding)" });
                })];
        });
    }); };
    var getDataRoutePartnerValidation = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("/swift/route-partner", params, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataRoutePartnerValidationV2 = function (params) {
        var hash = CreateSignature(params, companyID, userID);
        return services_1.customAxios
            .post("/swift/route-partner-v2", params, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    return {
        getDataSwiftTask: getDataSwiftTask,
        getDetailDataSwift: getDetailDataSwift,
        getActivityLogs: getActivityLogs,
        getCompany: getCompany,
        getAccountData: getAccountData,
        getDataSwifts: getDataSwifts,
        postSwiftTransfer: postSwiftTransfer,
        validationHardToken: validationHardToken,
        getDataRoutePartner: getDataRoutePartner,
        postFileUpload: postFileUpload,
        getMenuLicence: getMenuLicence,
        getDataExchangeRate: getDataExchangeRate,
        putTask: putTask,
        getDataCooperationCurrency: getDataCooperationCurrency,
        getBeneficiaryAccountData: getBeneficiaryAccountData,
        getWorkflowData: getWorkflowData,
        getDataFIle: getDataFIle,
        getTransactionStatus: getTransactionStatus,
        getTransactionStatusMultiple: getTransactionStatusMultiple,
        getCheckingApprover: getCheckingApprover,
        getBeneficiaryAccountDataByRole: getBeneficiaryAccountDataByRole,
        getAccountDataByRole: getAccountDataByRole,
        getCutOffSwiftAll: getCutOffSwiftAll,
        getUsersData: getUsersData,
        deleteTask: deleteTask,
        getTemplateData: getTemplateData,
        deleteTemplateData: deleteTemplateData,
        saveTemplateData: saveTemplateData,
        updateTemplateData: updateTemplateData,
        getCutOffHolidaySchedule: getCutOffHolidaySchedule,
        cancelTask: cancelTask,
        downloadReceipSwift: downloadReceipSwift,
        getDataRoutePartnerValidation: getDataRoutePartnerValidation,
        getDataRoutePartnerValidationV2: getDataRoutePartnerValidationV2,
    };
};
exports.default = SwiftService;
//# sourceMappingURL=swift.js.map