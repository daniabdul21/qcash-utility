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
var types_1 = require("@/types");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var qs_1 = __importDefault(require("qs"));
var OnlineBGService = function (baseURL, token) {
    // Update Task
    var putTask = function (taskId, action, reasons, comment) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("/task/".concat(taskId), {
                            action: action,
                            reasons: reasons,
                            comment: comment,
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // Applicant Name
    var getApplicantName = function (thirdPartyID) {
        return custom_axios_1.default
            .get("/bg/applicant-name?thirdPartyID=".concat(thirdPartyID))
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
    // BG Monitoring
    var getDataMonitoring = function (params, paramsTwo) {
        return custom_axios_1.default
            .get("/bg/transaction/data?".concat(paramsTwo), {
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
    var getDataMonitoringNew = function (params, type) {
        var parseDt = params.filter !== "" ? JSON.parse(params.filter) : {};
        var parseDtFilterOr = params.filterOr.split("|");
        // const referenceNo = parseDtFilterOr.length > 0 ? parseDtFilterOr[0] : '';
        var referenceNo = "";
        var applicantName = "";
        for (var i = 0; i < parseDtFilterOr.length; i++) {
            if (parseDtFilterOr[i].startsWith("referenceNo:")) {
                referenceNo = parseDtFilterOr[i].split(":")[1];
                break;
            }
        }
        for (var i = 0; i < parseDtFilterOr.length; i++) {
            if (parseDtFilterOr[i].startsWith("applicantName:")) {
                applicantName = parseDtFilterOr[i].split(":")[1];
                break;
            }
        }
        var datas = {
            "transaction.startDate": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.startDate) || "",
            "transaction.endDate": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.endDate) || "",
            "transaction.referenceNo": referenceNo,
            "transaction.thirdPartyID": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.thirdPartyID) || 0,
            "transaction.applicantName": applicantName,
            "transaction.status": params.query,
            page: params.page,
            limit: params.limit,
            query: params.query,
            sort: params.sort,
            dir: params.dir,
        };
        return custom_axios_1.default
            .get("/bg/transaction/data", {
            params: datas,
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
    var getDataMonitoringNewFilter = function (params) {
        var parseDt = params.filter !== "" ? JSON.parse(params.filter) : {};
        var parseDtFilterOr = params.filterOr.split("|");
        var referenceNo = "";
        var applicantName = "";
        for (var i = 0; i < parseDtFilterOr.length; i++) {
            if (parseDtFilterOr[i].startsWith("referenceNo:")) {
                referenceNo = parseDtFilterOr[i].split(":")[1];
                break;
            }
        }
        for (var i = 0; i < parseDtFilterOr.length; i++) {
            if (parseDtFilterOr[i].startsWith("applicantName:")) {
                applicantName = parseDtFilterOr[i].split(":")[1];
                break;
            }
        }
        var datas = {
            "transaction.startDate": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.startDate) || "",
            "transaction.endDate": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.endDate) || "",
            "transaction.referenceNo": referenceNo || "",
            "transaction.thirdPartyID": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.thirdPartyID) || 0,
            "transaction.applicantName": applicantName || "",
            page: 1,
            limit: 10,
            query: params.query,
            sort: params.sort,
            dir: params.dir,
        };
        return custom_axios_1.default
            .get("/bg/transaction/data", {
            params: datas,
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
    // Third Party
    var getDataThirdParty = function (type) {
        if (type === void 0) { type = types_1.ThirdpartyTypeEnum.All; }
        return custom_axios_1.default
            .get("/bg/third-party?type=".concat(type))
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
    // Cabang Pembuka / Opening Branch
    var getDataOpeningBranch = function () {
        return custom_axios_1.default
            .get("/bg/third-party")
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
    // Cabang Penerbit / Publisher Branch
    var getDataPublisherBranch = function () {
        return custom_axios_1.default
            .get("/bg/third-party")
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
    // Beneficiary
    var getDataBeneficiary = function (thirdPartyID, type) {
        if (type === void 0) { type = "AllBeneficiary"; }
        return custom_axios_1.default
            .get("/bg/beneficiary-name?thirdPartyID=".concat(thirdPartyID, "&type=").concat(type))
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
    // BG Mapping
    var getDataBGMapping = function (params) {
        return custom_axios_1.default
            .get("/bg/mapping/task", {
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
    // BG Issuing List
    var getDataBGIssuing = function (params) {
        return custom_axios_1.default
            .get("/bg/issuing/task", {
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
    // BG Issuing detail
    var getDataBGIssuingDetail = function (taskID) {
        return custom_axios_1.default
            .get("/bg/issuing/task/".concat(taskID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDetailBGMapping = function (id) {
        return custom_axios_1.default
            .get("/bg/mapping/task/".concat(id))
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
    var createBGMapping = function (data) {
        return custom_axios_1.default
            .post("/bg/mapping/task", data)
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
    var updateBGMapping = function (id, data) {
        return custom_axios_1.default
            .post("/bg/mapping/task/".concat(id), data)
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
    // Mapping Digital BG
    var getDataMappingDigitalBG = function (params) {
        return custom_axios_1.default
            .get("/bg/mapping-digital/task", {
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
    var getDetailMappingDigitalBG = function (id) {
        return custom_axios_1.default
            .get("/bg/mapping-digital/task/".concat(id))
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
    var createMappingDigitalBG = function (data) {
        return custom_axios_1.default
            .post("/bg/mapping-digital/task", data)
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
    var updateMappingDigitalBG = function (id, data) {
        return custom_axios_1.default
            .post("/bg/mapping-digital/task/".concat(id), data)
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
    var getMappingPendingTask = function (params) {
        return custom_axios_1.default
            .get("/bg/mapping/task", { params: params })
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
    var getMappingDigitalBGPendingTask = function (params) {
        return custom_axios_1.default
            .get("/bg/mapping-digital/task", { params: params })
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
    var getIssuingPendingTask = function (params) {
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
    var uploadEncode = function (data) {
        return custom_axios_1.default
            .post("/uploadEncode", data)
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
    var getMappingFilterCompany = function () {
        return custom_axios_1.default
            .get("/bg/mapping/filter/company")
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
    var postBGIssuing = function (data) {
        return custom_axios_1.default
            .post("/bg/issuing/task", data)
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
    var putBGIssuing = function (data, taskId) {
        return custom_axios_1.default
            .post("/bg/issuing/task/".concat(taskId), data)
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
    var checkStatusIssuing = function (taskID) {
        return custom_axios_1.default
            .get("/bg/issuing/check?taskID=".concat(taskID))
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
    var downloadAttachment = function (objectName, action) {
        var bodyy = {
            objectName: objectName,
            contentDisposition: action,
        };
        return custom_axios_1.default
            .post("file-listener/file-download", bodyy, { responseType: "blob" })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            if (action === "attachment") {
                var dataDownload = response.headers["content-type"];
                (0, downloadjs_1.default)(response.data, objectName, dataDownload);
            }
            else {
                var dataDownload = response.headers["content-type"];
                if (dataDownload === "application/pdf") {
                    var file = new File([response.data], objectName, {
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
        });
    };
    // Branch List
    var getDataBranch = function (unit) {
        return custom_axios_1.default
            .get("/system/master-data/MdBranch?filter=unit:".concat(unit))
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
    var getURIDownloadBGMonitoring = function (param) {
        return custom_axios_1.default
            .get("/bg/transaction/attachment/".concat(param))
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
    var updateBgIssuingStatus = function (taskId, action, reasons, comment, passCode, productID) {
        return custom_axios_1.default
            .post("/task/workflow", {
            taskID: taskId,
            action: action,
            reasons: reasons,
            comment: comment,
            passCode: passCode,
            productID: productID,
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
            return Promise.reject(error);
        });
    };
    var updateTask = function (id, payload) {
        return updateBgIssuingStatus(id, payload.action, payload.reasons, payload.comment);
    };
    // Branch List
    var getCurrencies = function () {
        return custom_axios_1.default
            .get("/bg/currency")
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
    // Check Individual Limit
    var checkIdividualLimit = function (cif) {
        return custom_axios_1.default
            .post("/bg/individual-limit/check", {
            cif: cif,
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
    // Check acccount validate
    var postValidateAccount = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var accountNo = _b.accountNo, _c = _b.remark, remark = _c === void 0 ? "" : _c;
        return __generator(this, function (_d) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/account/validate", {
                    accountNo: accountNo,
                    remark: remark,
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
                })];
        });
    }); };
    // Check Third Party Already Used Or No
    var CheckThirdParty = function (company_id) {
        return custom_axios_1.default
            .get("/task?filter=company_id:".concat(company_id, ",type:BG Mapping Digital"))
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
    // get default max length
    var getDefaultMaxLengthBGMapping = function () {
        return custom_axios_1.default
            .get("/system/key/default-max-bg-mapping")
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
    var getDefaultMaxLengthBGMappingDigital = function () {
        return custom_axios_1.default
            .get("/system/key/default-max-bg-mapping-digital")
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
    var downloadDataTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/bg/issuing/task/template/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("BG-Issuing", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //CLAIM BG
    var getDataClaimBG = function (payload) {
        var reffNumber = payload.reffNumber, _a = payload.isEdit, isEdit = _a === void 0 ? false : _a, rest = __rest(payload, ["reffNumber", "isEdit"]);
        var url = "/bg/cancellation/transaction-data";
        if (isEdit) {
            url = "/bg/cancellation/task";
        }
        return custom_axios_1.default
            .get("".concat(url, "/").concat(reffNumber))
            .then(function (response) {
            if (!response)
                throw new Error("Failed to get response data claim BG");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var uploadBgCancellation = function (data) {
        return custom_axios_1.default
            .post("/bg/cancellation/upload", data, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
            if (!response)
                throw new Error("Failed to upload file bg cancellation");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var uploadFileBgCancellation = function (data) {
        return custom_axios_1.default
            .post("file-listener/file-upload", data, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
            if (!response)
                throw new Error("Failed to upload file on server");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var saveBgCancellationTask = function (payload, isEdit) {
        var url = "/bg/cancellation/task";
        if (isEdit) {
            url = "/bg/cancellation/task/".concat(payload.taskId);
        }
        return custom_axios_1.default
            .post(url, payload)
            .then(function (response) {
            if (!response)
                throw new Error("Failed to save task Claim BG");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var getCancellationTask = function (params) {
        // .get(`bg/cancellation/task?status=AllStatus&step=AllStep&limit=10&page=1&sort=status&dir=ASC&filterOr=status_word:Draft,On Signer,Return&query=data.transaction.beneficiaryName,data.transaction.beneficiaryName.applicantName:elnusa`)
        return custom_axios_1.default
            .get("bg/cancellation/task", {
            params: params,
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
    var getCancellationTask2 = function (params) {
        return custom_axios_1.default
            .get("bg/cancellation/task", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data.map(function (items) { return (__assign(__assign({}, items), { referenceNo: items.data.reffNumber, registrationNo: items.data.transaction.registrationNo, thirdPartyName: items.data.transaction.thirdPartyName, applicantName: items.data.transaction.applicantName, beneficiaryName: items.data.transaction.beneficiaryName, issueDate: items.data.transaction.issueDate, effectiveDate: items.data.transaction.effectiveDate, maturityDate: items.data.transaction.maturityDate, claimPeriod: items.data.transaction.claimPeriod, transactionTypeID: items.data.transaction.transactionTypeID, amount: items.data.transaction.amount })); });
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getWorkflow = function (companyId, currency) {
        return custom_axios_1.default
            .post("/workflow/data", {
            page: 1,
            limit: 10,
            dir: "ASC",
            workflow: {
                moduleID: "90",
                companyID: companyId,
                currencyName: currency,
            },
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var checkTransactionBGCancellation = function (payload) {
        return custom_axios_1.default
            .post("/bg/cancellation/checking-transaction-single", payload)
            .then(function (response) {
            if (!response || response.status !== 200)
                throw new Error("Failed to check transaction BG Cancellation");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var downloadTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir, getFilterOr = props.getFilterOr;
        var filter = "?filter=".concat(getFilter);
        var parseDt = getFilter !== "" ? JSON.parse(getFilter) : {};
        var parseDtFilterOr = getFilterOr.split("|");
        var referenceNo = "";
        var applicantName = "";
        for (var i = 0; i < parseDtFilterOr.length; i++) {
            if (parseDtFilterOr[i].startsWith("referenceNo:")) {
                referenceNo = parseDtFilterOr[i].split(":")[1];
                break;
            }
        }
        for (var i = 0; i < parseDtFilterOr.length; i++) {
            if (parseDtFilterOr[i].startsWith("applicantName:")) {
                applicantName = parseDtFilterOr[i].split(":")[1];
                break;
            }
        }
        var datas = {
            "transaction.startDate": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.startDate) || "",
            "transaction.endDate": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.endDate) || "",
            "transaction.referenceNo": referenceNo,
            "transaction.thirdPartyID": (parseDt === null || parseDt === void 0 ? void 0 : parseDt.thirdPartyID) || 0,
            "transaction.applicantName": applicantName,
            page: "1",
            limit: "5000",
        };
        var queryParams = qs_1.default.stringify(datas);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return (custom_axios_1.default
            .get("/bg/transaction/data/template/".concat(format, "?").concat(queryParams).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("BG-Monitoring", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        }));
    };
    var downloadTableCancellation = function (props) {
        var format = props.format, getFilter = props.getFilter, getFilterOr = props.getFilterOr, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filterOr=".concat(getFilterOr);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/bg/cancellation/download/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("BG-Cancellation", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getlistTaskGraphCancellation = function () {
        return custom_axios_1.default
            .get("bg/cancellation/task/statuses/counter")
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200)
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err || "Failed to get Response");
        });
    };
    return {
        getDataMonitoring: getDataMonitoring,
        getDataThirdParty: getDataThirdParty,
        createBGMapping: createBGMapping,
        getDataBGMapping: getDataBGMapping,
        getDetailBGMapping: getDetailBGMapping,
        updateBGMapping: updateBGMapping,
        putTask: putTask,
        getApplicantName: getApplicantName,
        getDataMappingDigitalBG: getDataMappingDigitalBG,
        getDetailMappingDigitalBG: getDetailMappingDigitalBG,
        createMappingDigitalBG: createMappingDigitalBG,
        updateMappingDigitalBG: updateMappingDigitalBG,
        getDataBeneficiary: getDataBeneficiary,
        getActivityLogs: getActivityLogs,
        getMappingPendingTask: getMappingPendingTask,
        getMappingDigitalBGPendingTask: getMappingDigitalBGPendingTask,
        uploadEncode: uploadEncode,
        downloadAttachment: downloadAttachment,
        putBGIssuing: putBGIssuing,
        getDataPublisherBranch: getDataPublisherBranch,
        validateOtp: validateOtp,
        checkStatusIssuing: checkStatusIssuing,
        getDataBranch: getDataBranch,
        getDataBGIssuing: getDataBGIssuing,
        getDataBGIssuingDetail: getDataBGIssuingDetail,
        getDataOpeningBranch: getDataOpeningBranch,
        getIssuingPendingTask: getIssuingPendingTask,
        getMappingFilterCompany: getMappingFilterCompany,
        postBGIssuing: postBGIssuing,
        updateBgIssuingStatus: updateBgIssuingStatus,
        getCurrencies: getCurrencies,
        checkIdividualLimit: checkIdividualLimit,
        postValidateAccount: postValidateAccount,
        updateTask: updateTask,
        CheckThirdParty: CheckThirdParty,
        getDefaultMaxLengthBGMapping: getDefaultMaxLengthBGMapping,
        getDefaultMaxLengthBGMappingDigital: getDefaultMaxLengthBGMappingDigital,
        downloadDataTable: downloadDataTable,
        getDataMonitoringNew: getDataMonitoringNew,
        getDataMonitoringNewFilter: getDataMonitoringNewFilter,
        getURIDownloadBGMonitoring: getURIDownloadBGMonitoring,
        getDataClaimBG: getDataClaimBG,
        uploadBgCancellation: uploadBgCancellation,
        uploadFileBgCancellation: uploadFileBgCancellation,
        saveBgCancellationTask: saveBgCancellationTask,
        getWorkflow: getWorkflow,
        getCancellationTask: getCancellationTask,
        getCancellationTask2: getCancellationTask2,
        checkTransactionBGCancellation: checkTransactionBGCancellation,
        downloadTable: downloadTable,
        downloadTableCancellation: downloadTableCancellation,
        getlistTaskGraphCancellation: getlistTaskGraphCancellation
    };
};
exports.default = OnlineBGService;
//# sourceMappingURL=digi-guarantee.js.map