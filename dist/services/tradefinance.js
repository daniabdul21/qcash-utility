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
var services_1 = require("@/services");
var crypto_js_1 = __importDefault(require("crypto-js"));
var qs_1 = __importDefault(require("qs"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var Tradefinance = function (baseURL, token) {
    var privateKey = process.env["NEXT_PUBLIC_SIGNATURE"];
    var getDataMdBranch = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, services_1.customAxios
                        .get("/system/master-data/MdBranch", {
                        params: params,
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
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getBranch = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, services_1.customAxios
                        .get("/system/master-data/MdBranch", {
                        params: params,
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
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var uploadFileListener = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, services_1.customAxios.post("/issuance-lc/file-upload/create", payload, {
                            headers: { "Content-Type": "multipart/form-data" },
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Network Error");
                    }
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _a.sent();
                    return [4 /*yield*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getDownloadFile = function (fileName, id, action) { return __awaiter(void 0, void 0, void 0, function () {
        var bodyy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bodyy = {
                        fileName: fileName,
                        id: id,
                        contentDisposition: action,
                    };
                    return [4 /*yield*/, services_1.customAxios
                            .post("/issuance-lc/get-file-download", bodyy, { responseType: "blob" })
                            .then(function (response) {
                            if (response.status !== 200)
                                return;
                            if (action === "attachment") {
                                var dataDownload = response.headers["content-type"];
                                (0, downloadjs_1.default)(response.data, fileName, dataDownload);
                            }
                            else {
                                var dataDownload = response.headers["content-type"];
                                if (dataDownload === "application/pdf") {
                                    var file = new File([response.data], fileName, {
                                        type: dataDownload,
                                    });
                                    var fileURL = URL.createObjectURL(file);
                                    var pdfWindow = window.open();
                                    if (pdfWindow !== null) {
                                        pdfWindow.location.href = fileURL;
                                    }
                                }
                                else {
                                    var url = URL.createObjectURL(response.data);
                                    window.open(url, "_blank");
                                }
                            }
                        })
                            .catch(function (error) {
                            return Promise.reject(error);
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getCountry = function () {
        return services_1.customAxios
            .get("/system/master-data/MdCountry?limit=0&page=1&dir=ASC&sort=description", {})
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
    var getDataSwiftCode = function (params) {
        return services_1.customAxios
            .get("/system/master-data/MdBiccc", {
            params: params,
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
        });
    };
    var getDataCurrency = function () {
        return services_1.customAxios
            .get("/bg/currency", {})
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
    var getAccountData = function (params) {
        return services_1.customAxios.get("/account/dataByRole", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getCheckBalance = function (params, companyID, userID, key) {
        var hash = CreateSignature(params, companyID, userID, key);
        return services_1.customAxios
            .post("/issuance-lc/validate", params, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Grpc-Metadata-Signature": hash,
            },
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
    var getListIssuedLc = function (data) {
        var datas = {
            page: data.page.toString(),
            limit: data.limit.toString(),
            channelId: data.channelId,
            channelCompanyId: data.channelCompanyId,
            channelUserId: data.channelUserId,
            registrationNo: data.registrationNo,
            currency: data.currency,
            applicantName: data.applicantName,
            beneficiaryName: data.beneficiaryName,
            beneficiaryCountry: data.beneficiaryCountry,
            subProduct: data.subProduct,
            statusChannel: data.statusChannel,
            approvalPosition: data.approvalPosition,
            statusInternal: data.statusInternal,
            teamPosition: data.teamPosition,
            issueDate: data.issueDate,
            expiryDate: data.expiryDate,
            startIncomingDate: data.startIncomingDate,
            endIncomingDate: data.endIncomingDate,
        };
        return services_1.customAxios
            .post("/issuance-lc/getListIssuedLc", datas)
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
    var getAmountToWord = function (params) {
        return services_1.customAxios
            .get("/issuance-lc/getAmountToWord", {
            params: params,
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
        });
    };
    var getListAccountWithImportLine = function (params) {
        return services_1.customAxios
            .get("/issuance-lc/getListAccountWithImportLine", {
            params: params,
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
        });
    };
    var getSaveIssuedLc = function (data, companyID, userID, key) {
        var req = JSON.stringify(data);
        var enc = qs_1.default.stringify({ request: req });
        var hash = CreateSignature(data, companyID, userID, key);
        return services_1.customAxios
            .post("/issuance-lc/SaveIssuedLc", { request: enc }, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Grpc-Metadata-Signature": hash,
                "Content-Type": "application/x-www-form-urlencoded",
            },
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
    var getListMasterDataByTypeId = function () {
        return services_1.customAxios
            .get("/issuance-lc/getListMasterDataByTypeId?typeId=PlaceOfExpiry")
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
    var getCustomer = function (data) {
        return services_1.customAxios
            .get("/company/bricams-svc/customer/detail/" + data + "")
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
    var getSummaryLC = function (data, companyID, userID, key) {
        var signature = CreateSignature(data, companyID, userID, key);
        return services_1.customAxios
            .post("/issuance-lc/getSummaryLCAndCoverageAccount", data, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Grpc-Metadata-Signature": signature,
            },
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
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDetailById = function (transactionId, req) {
        return services_1.customAxios
            .post("/issuance-lc/GetDetailIssuedLc", {
            transactionEventId: transactionId,
            requestBase64Doc: "",
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
    var refreshSession = function () {
        var refreshToken = localStorage.getItem("refresh-token");
        return services_1.customAxios
            .post("/auth/refresh", {
            refreshToken: refreshToken,
        })
            .then(function (response) {
            var _a, _b, _c, _d;
            if (response.status === 200) {
                if (response.data.data.accessToken !== undefined && response.data.data.accessToken !== "") {
                    var token_1 = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.accessToken;
                    var refreshToken_1 = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.refreshToken;
                    localStorage.setItem("access-token", token_1);
                    localStorage.setItem("refresh-token", refreshToken_1);
                }
                else {
                    console.log("Refresh token nya gak dapet, malah string kosong");
                }
                return;
            }
            else {
                return;
            }
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var putTask = function (transactionEventId, action, reasons, comment, personalNumber) {
        return services_1.customAxios
            .post("/issuance-lc/ApprovalIssuedLc", {
            transactionEventId: transactionEventId,
            statusChannel: action,
            statusInternal: "",
            personalNumber: personalNumber,
            reason: reasons,
            remark: comment,
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
    var validateOtp = function (params) {
        return services_1.customAxios
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
    var getSaveCreateTemplate = function (data) {
        var req = JSON.stringify(data);
        var enc = qs_1.default.stringify({ request: req });
        return services_1.customAxios
            .post("/issuance-lc/saveTemplate", { request: enc }, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/x-www-form-urlencoded",
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
    var getAllTemplate = function (userID) {
        return services_1.customAxios
            .get("/issuance-lc/getListTemplate/".concat(userID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                // pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getTemplatebyID = function (templateID) {
        return services_1.customAxios
            .get("/issuance-lc/getTemplateById/".concat(templateID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                // pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getWorkflowStatus = function (transactionEventId) {
        return services_1.customAxios
            .get("/issuance-lc/getWorkflow/".concat(transactionEventId))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var deleteTemplatebyId = function (templateID) {
        return services_1.customAxios
            .post("/issuance-lc/deleteTemplate", {
            id: templateID,
        })
            .then(function (response) {
            var _a, _b;
            if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.responseCode) !== "0001") {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return {
                data: response.data.responseCode,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var editTemplatebyId = function (templateID, templateName) {
        return services_1.customAxios
            .post("/issuance-lc/updateTemplate", {
            id: templateID,
            templateName: templateName,
        })
            .then(function (response) {
            var _a, _b;
            if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.responseCode) !== "0001") {
                throw new Error(((_b = response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return {
                data: response.data.responseCode,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadMT700 = function (eventID, companyID, userID, key) {
        var data = {
            transactionEventId: eventID,
        };
        var hash = CreateSignature(data, companyID, userID, key);
        return services_1.customAxios
            .post("/issuance-lc/downloadPreviewMT", data, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Grpc-Metadata-Signature": hash,
            },
            responseType: "blob",
        })
            .then(function (response) {
            if (response.status === 400) {
                throw new Error("Bad Request Data. Please Try Again!");
            }
            else if (response.status === 401) {
                throw new Error("Session Expired. Please Relogin!");
            }
            else if (response.status === 404) {
                throw new Error("Download data notfound. Please Try Again!");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListHSCode = function (data, companyID, userID) {
        var request = JSON.stringify(data);
        var enc = qs_1.default.stringify({ request: request });
        if (enc.includes("request=")) {
            enc = enc.replace("request=", "");
        }
        var hash = CreateSignature(enc, companyID, userID, privateKey);
        return services_1.customAxios
            .post("/issuance-lc/getlisthscode", { request: enc }, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Grpc-Metadata-Signature": hash,
            },
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
        getDataMdBranch: getDataMdBranch,
        getDownloadFile: getDownloadFile,
        getBranch: getBranch,
        getCountry: getCountry,
        getDataSwiftCode: getDataSwiftCode,
        getDataCurrency: getDataCurrency,
        getAccountData: getAccountData,
        getCheckBalance: getCheckBalance,
        getListIssuedLc: getListIssuedLc,
        getAmountToWord: getAmountToWord,
        getListAccountWithImportLine: getListAccountWithImportLine,
        getSaveIssuedLc: getSaveIssuedLc,
        getListMasterDataByTypeId: getListMasterDataByTypeId,
        getCustomer: getCustomer,
        uploadFileListener: uploadFileListener,
        getSummaryLC: getSummaryLC,
        getDetailById: getDetailById,
        putTask: putTask,
        validateOtp: validateOtp,
        getSaveCreateTemplate: getSaveCreateTemplate,
        getAllTemplate: getAllTemplate,
        getTemplatebyID: getTemplatebyID,
        deleteTemplatebyId: deleteTemplatebyId,
        editTemplatebyId: editTemplatebyId,
        getWorkflowStatus: getWorkflowStatus,
        downloadMT700: downloadMT700,
        refreshSession: refreshSession,
        getListHSCode: getListHSCode,
    };
};
exports.default = Tradefinance;
//# sourceMappingURL=tradefinance.js.map