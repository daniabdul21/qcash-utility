"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var qs_1 = __importDefault(require("qs"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var Amendment = function (token, companyID, userID) {
    var headersWithSignature = function (signature) {
        return {
            "Content-Type": "application/x-www-form-urlencoded",
            "Grpc-Metadata-Signature": signature,
        };
    };
    // const crypto = require("crypto-js");
    var privateKey = process.env["NEXT_PUBLIC_SIGNATURE"];
    var getListAmendCancelLC = function (params) {
        var datas = {
            page: params.page.toString(),
            limit: params.limit.toString(),
            channelId: params.channelId,
            channelCompanyId: params.channelCompanyId,
            channelUserId: params.channelUserId,
            beneficiaryCountry: params.beneficiaryCountry,
            beneficiaryName: params.beneficiaryName,
            issueDate: params.issueDate,
            expiryDate: params.expiryDate,
            currency: params.currency,
            transactionType: params.transactionType,
            statusChannel: params.statusChannel,
            statusInternal: params.statusInternal,
            referenceNo: "",
        };
        var req = JSON.stringify(datas);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(datas, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/amend-cancel-lc/getListAmendCancelLC", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDetailAmendCancelLc = function (data, key) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(data, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/amend-cancel-lc/getDetailAmendCancelLc", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var saveAmendment = function (data, key) {
        var req = JSON.stringify(data);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(data, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/amend-cancel-lc/saveAmendmentLC", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            if (response.status === 200) {
                var responseSignature = CreateSignature(response.data, companyID, userID, privateKey);
                if (responseSignature !== response.headers["signature"]) {
                    throw new Error("Data Not Authorized");
                }
            }
            else if (response.status === 500) {
                throw new Error("Connection Error. Please Try Again!");
            }
            else if (response.status === 401) {
                throw new Error("Session Expired. Please Relogin BRICaMS!");
            }
            else {
                throw new Error("Error undefined. Please Contact Administrator!");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getLatestEventAmendCancel = function (data, key) {
        var hash = CreateSignature(data, companyID, userID, key);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/amend-cancel-lc/getLatestEventAmendCancelLc", { request: body }, {
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
    var getListReference = function (data, key) {
        var hash = CreateSignature(data, companyID, userID, key);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/amend-cancel-lc/getListImportLC", { request: body }, {
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
    var saveCancellationLC = function (data, key) {
        var hash = CreateSignature(data, companyID, userID, key);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/amend-cancel-lc/saveCancellationLC", { request: body }, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            else {
                var responseSignature = CreateSignature(response.data, companyID, userID, privateKey);
                if (responseSignature !== response.headers["signature"]) {
                    throw new Error("Data Not Authorized");
                }
            }
            return response.data;
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
            .post("/amend-cancel-lc/downloadPreviewMT", { request: body }, {
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
    var getSummaryLCAndCoverageAccount = function (params, companyID, userID, key) {
        var req = JSON.stringify(params);
        var dtas = qs_1.default.stringify({ request: req });
        var signature = CreateSignature(params, companyID, userID, privateKey);
        return custom_axios_1.default
            .post("/amend-cancel-lc/getSummaryLCAndCoverageAccount", { request: dtas }, {
            headers: headersWithSignature(signature),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            else {
                var hash = CreateSignature(response.data, companyID, userID, key);
                if (hash !== response.headers["signature"]) {
                    throw new Error("Data not Authorized");
                }
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var approvalAmendCancelLc = function (data, key) {
        var hash = CreateSignature(data, companyID, userID, key);
        var req = JSON.stringify(data);
        var body = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/amend-cancel-lc/approvalAmendCancelLC", { request: body }, {
            headers: headersWithSignature(hash),
        })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message.toString());
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
                var hash_2 = CreateSignature(response.data, companyID, userID, key);
                if (hash_2 !== response.headers["signature"]) {
                    throw new Error("Data not Authorized");
                }
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var CreateSignature = function (params, companyID, userID, key) {
        var data = "bodydata:" +
            JSON.stringify(params) +
            "&bearer:".concat(localStorage.getItem("access-token"), "&companyid:") +
            companyID +
            "&userid:" +
            userID;
        var hash = crypto_js_1.default.HmacSHA256(data, key);
        return hash.toString(crypto_js_1.default.enc.Hex);
    };
    return {
        getListAmendCancelLC: getListAmendCancelLC,
        getListReference: getListReference,
        saveCancellationLC: saveCancellationLC,
        getDetailAmendCancelLc: getDetailAmendCancelLc,
        getSummaryLCAndCoverageAccount: getSummaryLCAndCoverageAccount,
        downloadMT707: downloadMT707,
        getLatestEventAmendCancel: getLatestEventAmendCancel,
        saveAmendment: saveAmendment,
        approvalAmendCancelLc: approvalAmendCancelLc,
        getWorkflow: getWorkflow,
    };
};
exports.default = Amendment;
//# sourceMappingURL=amendment.js.map