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
var qs_1 = __importDefault(require("qs"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var Incoming = function (token, companyID, userID) {
    var headersWithSignature = function (signature) {
        return {
            "Content-Type": "application/x-www-form-urlencoded",
            "Grpc-Metadata-Signature": signature,
        };
    };
    var privateKey = process.env["NEXT_PUBLIC_SIGNATURE"];
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, filter, split, dateFrom, dateTo, url, data;
        return __generator(this, function (_a) {
            page = params.page, limit = params.limit, query = params.query, filter = params.filter;
            split = filter.split(",");
            dateFrom = split[0];
            dateTo = split[1];
            url = "/task/activity-logs/".concat(type);
            data = {
                dateFrom: dateFrom,
                dateTo: dateTo,
                limit: limit,
                page: page,
                search: query,
            };
            return [2 /*return*/, custom_axios_1.default.post(url, data).then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data;
                })];
        });
    }); }; };
    var getDetailIncoming = function (data, key) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(dtas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/incoming-document-lc/get-detail-incoming-document", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return JSON.parse(response.data.response);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var CHANNEL_ID = "BRCM";
    var EVENT_CODE = "CLM";
    var getListIncoming = function (data) {
        var datas = {
            page: data.page.toString(),
            limit: data.limit.toString(),
            channelId: CHANNEL_ID,
            channelCompanyId: companyID,
            channelUserId: data.channelUserId,
            eventCode: EVENT_CODE,
            registrationNo: data.registrationNo,
            referenceNo: data.referenceNo,
            currency: data.currency,
            applicantName: data.applicantName,
            beneficiaryName: data.beneficiaryName,
            beneficiaryCountry: data.beneficiaryCountry,
            subProduct: data.subProduct,
            statusChannel: data.statusChannel,
            approvalPosition: data.approvalPosition,
            statusInternal: data.statusInternal,
            statusBeneficiaryConsent: data.statusBeneficiaryConsent,
            teamPosition: data.teamPosition,
            amendmentDate: data.amendmentDate,
            issuedDate: data.issuedDate,
            startDate: data.startDate,
            endDate: data.endDate,
            expiryDate: data.expiryDate,
            documentReceivedDate: data.documentReceivedDate,
            paymentDetailsValueDate: data.paymentDetailsValueDate,
            statusApplicantConfirmation: data.statusApplicantConfirmation,
            statusPaymentOption: data.statusPaymentOption,
            taskID: data.taskID,
        };
        var req = JSON.stringify(datas);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(dtas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/incoming-document-lc/get-list-incoming-document", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return JSON.parse(response.data.response);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadMT707 = function (eventID, key) {
        var data = {
            transactionEventId: eventID,
        };
        var hash = CreateSignature(data, companyID, userID, key);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/incoming-document/downloadPreviewMT", { request: body }, {
            headers: headersWithSignature(hash),
            responseType: "blob",
        })
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
    var saveIncomingDoc = function (data, key) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(dtas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/incoming-document-lc/save-incoming-document", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return JSON.parse(response.data.response);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var approveIncomingDoc = function (data, key) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(dtas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/incoming-document-lc/approve-incoming-document", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return JSON.parse(response.data.response);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListDocumentRequired = function (data) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(dtas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/incoming-document-lc/get-list-document-required", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return JSON.parse(response.data.response);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
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
    var getWorkflow = function (data, key) {
        var hash = CreateSignature(data, companyID, userID, key);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/amend-cancel-lc/getWorkflow", { request: body }, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            else {
                var hash_1 = CreateSignature(response.data, companyID, userID, key);
                if (hash_1 !== response.headers["signature"]) {
                    throw new Error("Data not Authorized");
                }
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return {
        getActivityLogs: getActivityLogs,
        getDetailIncoming: getDetailIncoming,
        getListIncoming: getListIncoming,
        downloadMT707: downloadMT707,
        saveIncomingDoc: saveIncomingDoc,
        approveIncomingDoc: approveIncomingDoc,
        getWorkflow: getWorkflow,
        getListDocumentRequired: getListDocumentRequired,
    };
};
exports.default = Incoming;
//# sourceMappingURL=incoming.js.map