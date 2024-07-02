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
var custom_axios_1 = __importDefault(require("./custom-axios"));
var qs_1 = __importDefault(require("qs"));
var utilities_1 = require("@/utilities");
var InternalTransferService = function (token, baseURL) {
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
    var postSingleInternalTransfer = function (body, otpValue) {
        return custom_axios_1.default
            .post("/transfer/single/task", __assign(__assign({}, body), { passCode: otpValue }))
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
    var postSingleInternalTemplate = function (body) {
        return custom_axios_1.default
            .post("/transfer/single/template", body)
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
    var putSingleInternalTemplate = function (id, body) {
        return custom_axios_1.default
            .post("/transfer/single/template/".concat(id), body)
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
    var deleteSingleInternalTemplate = function (id) {
        return custom_axios_1.default
            .post("/transfer/single/template/".concat(id, "/delete"), {})
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
    var putSingleInternalTransfer = function (taskId, body, otpValue) {
        return custom_axios_1.default
            .post("/transfer/single/task/".concat(taskId), __assign(__assign({}, body), { passCode: otpValue }))
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
    var getSingleInternalTransfer = function (taskID) {
        return custom_axios_1.default
            .get("/transfer/task/".concat(taskID))
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
    var getTransferExchangeRate = function (dealtCurrency, counterCurrency) {
        return custom_axios_1.default
            .post("/swift/brigate/kurs-briefx", {
            DEALTCURRENCY: dealtCurrency,
            COUNTERCURRENCY: counterCurrency,
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
    var getListTransfer = function (params) {
        return custom_axios_1.default
            .get("/transfer/task", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                response: response,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListSingleTransferTemplate = function (params) {
        return custom_axios_1.default
            .get("/transfer/single/template", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                response: response,
                pagination: response.data.pagination,
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
    var updateTransferStatus = function (taskId, action, reasons, comment, passCode, productID) {
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
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var updateTask = function (id, payload) {
        if (payload.action === types_1.TransactionFunctionEnum.Cancel) {
            payload = __assign(__assign({}, payload), { comment: "cancel", action: types_1.TransactionFunctionEnum.Delete });
        }
        return custom_axios_1.default
            .post("/transfer/task/".concat(id), payload)
            .then(function (response) {
            if (response.status !== 200 || response.data.error) {
                return {
                    error: true,
                    message: response.data.message,
                };
            }
            return {
                error: false,
                message: "",
                data: response.data.data,
            };
        })
            .catch(function (error) {
            return {
                error: true,
                message: error.message,
            };
        });
    };
    var getMenuLicense = function (companyId) {
        return (custom_axios_1.default
            // .get(`/menu/license/data2?page=1&limit=10&filter=company_id:${companyId},product_id:120`)
            .post("/menu/license/data2", {
            page: 1,
            limit: 10,
            filter: "company_id:".concat(companyId),
            in: "product_id:120",
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
        }));
    };
    var getCompanyLimit = function (companyId) {
        return custom_axios_1.default
            .get("/company/limit?companyID=".concat(companyId))
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
    var getCompanyLimitSummary = function (companyId, holdingId, currencyCode) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/transaction/limit/summary", {
                    companyId: companyId,
                    holdingId: holdingId,
                    currencyCode: currencyCode,
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
                })];
        });
    }); };
    var getWorkflow = function (companyId, currency) {
        return custom_axios_1.default
            .post("/workflow/data", {
            page: 1,
            limit: 10,
            dir: "ASC",
            workflow: {
                moduleID: "120",
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
    var getInternalTransferPendingTask = function (params) {
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
    var createMultipleInternalTransfer = function (body, rCode, companyID, userID) {
        var req = JSON.stringify(body);
        var bodyData = qs_1.default.stringify({ request: req });
        var bodyparsed = bodyData.slice(8);
        var hash = CreateSignature({ request: bodyparsed }, companyID, userID);
        return custom_axios_1.default
            .post("/transfer/multiple/task", { request: bodyparsed, rcode: rCode }, {
            headers: headersWithSignature(hash),
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
    var createMultipleCache = function (rcode) {
        return custom_axios_1.default
            .post("/transfer/rescache", { rcode: rcode })
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
    var updateMultipleInternalTransfer = function (taskId, body) {
        return custom_axios_1.default
            .put("/transfer/multiple/task/".concat(taskId), body)
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
    var downloadDataTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("transfer/task/template/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Internal-Fund-Transfer", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var checkCutOffHoilday = function (time, moduleId) {
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
    var checkCutOffHoildayForRecurring = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var recurringPeriodStart, recurringPeriodEnd, recurringDay, recurringDate, recurringTime, recurringFrequency, moduleId;
        return __generator(this, function (_a) {
            recurringPeriodStart = params.recurringPeriodStart, recurringPeriodEnd = params.recurringPeriodEnd, recurringDay = params.recurringDay, recurringDate = params.recurringDate, recurringTime = params.recurringTime, recurringFrequency = params.recurringFrequency, moduleId = params.moduleId;
            return [2 /*return*/, (custom_axios_1.default
                    // .get(`/cut-off/available-time?modulID=${moduleId}&time=${time}`)
                    .get("cut-off/available-time-recurring?startDate=".concat(recurringPeriodStart, "&endDate=").concat(recurringPeriodEnd, "&day=").concat(recurringDay, "&dateMonthly=").concat(recurringDate, "&time=").concat(recurringTime, "&Frequency=").concat(recurringFrequency, "&modulID=").concat(moduleId))
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
                    return Promise.reject(error.response.data);
                }))];
        });
    }); };
    var getNotifEmailLength = function () {
        return custom_axios_1.default
            .get("/system/key/max-email-notification")
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
    var downloadReceiptIFT = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var transaction_id;
        return __generator(this, function (_a) {
            transaction_id = props.transaction_id;
            return [2 /*return*/, custom_axios_1.default
                    .get(encodeURI("transfer/receipt/".concat(transaction_id)), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Download Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(transaction_id, "-Transfer-Receipt-").concat((0, utilities_1.formatDate)(new Date(), "DD-MM-YYYY-HHmmSS"), ".pdf"), content);
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject((err === null || err === void 0 ? void 0 : err.message) || ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Download Error (Server Not Responding)" });
                })];
        });
    }); };
    var getDataCooperationCurrency = function () {
        var data = { filter: null };
        return custom_axios_1.default
            .post("/swift/nostro-priority", data)
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
    return {
        getTransferExchangeRate: getTransferExchangeRate,
        getListTransfer: getListTransfer,
        getInternalTransferPendingTask: getInternalTransferPendingTask,
        getActivityLogs: getActivityLogs,
        getMenuLicense: getMenuLicense,
        getSingleInternalTransfer: getSingleInternalTransfer,
        getListSingleTransferTemplate: getListSingleTransferTemplate,
        getCompanyLimit: getCompanyLimit,
        getWorkflow: getWorkflow,
        postSingleInternalTransfer: postSingleInternalTransfer,
        postSingleInternalTemplate: postSingleInternalTemplate,
        putSingleInternalTemplate: putSingleInternalTemplate,
        putSingleInternalTransfer: putSingleInternalTransfer,
        createMultipleInternalTransfer: createMultipleInternalTransfer,
        updateMultipleInternalTransfer: updateMultipleInternalTransfer,
        validateOtp: validateOtp,
        updateTransferStatus: updateTransferStatus,
        deleteSingleInternalTemplate: deleteSingleInternalTemplate,
        updateTask: updateTask,
        downloadDataTable: downloadDataTable,
        checkCutOffHoilday: checkCutOffHoilday,
        checkCutOffHoildayForRecurring: checkCutOffHoildayForRecurring,
        getNotifEmailLength: getNotifEmailLength,
        createMultipleCache: createMultipleCache,
        downloadReceiptIFT: downloadReceiptIFT,
        getCompanyLimitSummary: getCompanyLimitSummary,
        getDataCooperationCurrency: getDataCooperationCurrency,
    };
};
exports.default = InternalTransferService;
//# sourceMappingURL=internal-transfer.js.map