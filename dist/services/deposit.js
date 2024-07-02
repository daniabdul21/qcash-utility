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
exports.TransactionStatus = void 0;
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Reworked"] = "Reworked";
    TransactionStatus["Approved"] = "Approved";
    TransactionStatus["Pending"] = "Pending";
    TransactionStatus["Timeout"] = "Timeout";
    TransactionStatus["Progress"] = "Progress";
    TransactionStatus["Rejected"] = "Rejected";
    TransactionStatus["Failed"] = "Failed";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var DepositService = function () {
    var getDepositData = function (params) {
        return custom_axios_1.default
            .get("deposito/data", {
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
            return Promise.reject(error.response.data);
        });
    };
    var getDepositTaskList = function (params) {
        return custom_axios_1.default
            .get("deposito/task", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var getDepositById = function (taskID) {
        return custom_axios_1.default
            .get("/deposito/task/".concat(taskID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var getDepositPendingTask = function (params) {
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
            return Promise.reject(error.response.data);
        });
    };
    var deleteDeposit = function (taskID) {
        return custom_axios_1.default
            .post("deposito/task/action/".concat(taskID), {
            action: "delete",
            taskID: taskID,
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
            return Promise.reject(error.response.data);
        });
    };
    var getAccountData = function (params) {
        return custom_axios_1.default.get("/account/dataByRole?in=AccountCurrency:IDR", { params: params }).then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        });
    };
    var getListTenor = function (currency) {
        return custom_axios_1.default.get("/deposito/products?product.currency=".concat(currency, "&dir=DESC")).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getDataSystemKey = function (key) {
        return custom_axios_1.default.get("/system/key/".concat(key)).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getVoucher = function (voucherCode, amount, rate, accountNumber, taskID) {
        return custom_axios_1.default
            .post("/deposito/voucher", {
            voucherCode: voucherCode,
            amount: amount,
            rate: rate,
            accountNumber: accountNumber,
            taskID: taskID,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getInterestRate = function (currency, currencyCode) {
        return custom_axios_1.default
            .post("/deposito/inquiry-rate", {
            RATE_CURRENCY: currency,
            PROD_TYPE: currencyCode,
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var getCutOffHolidaySchedule = function (time) {
        return custom_axios_1.default
            .get("/cut-off/available-time?time=".concat(time, "&modulID=84")) //Module ID Deposito 84
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var postDeposit = function (params, isDraft, passCode) {
        return custom_axios_1.default
            .post("deposito/task", {
            data: params,
            isDraft: isDraft,
            passCode: passCode,
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var putDeposit = function (params, isDraft, taskID, passCode) {
        return custom_axios_1.default
            .post("deposito/task/edit/".concat(taskID), {
            data: params,
            isDraft: isDraft,
            passCode: passCode,
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var putManageDeposit = function (params, isDraft, taskID, passCode) {
        return custom_axios_1.default
            .post("deposito/manage/".concat(taskID), {
            data: params,
            isDraft: isDraft,
            passCode: passCode,
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var postWithdrawDeposit = function (taskID, passCode) {
        return custom_axios_1.default
            .post("deposito/withdraw/".concat(taskID), {
            taskID: taskID,
            passCode: passCode,
        })
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var putTask = function (taskId, payload) {
        return custom_axios_1.default.post("/deposito/task/action/".concat(taskId), payload).then(function (response) {
            if (response.status !== 200) {
                return response.data;
            }
            return response.data;
        });
    };
    var getDepositByAccountNumber = function (params) {
        return custom_axios_1.default
            .get("/deposito/data", { params: params })
            .then(function (response) {
            console.log({ response: response });
            if (response.status !== 200) {
                return;
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/deposito", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getTaskByFeatureID = function (depositoID) {
        return custom_axios_1.default.get("deposito/task/deposito/".concat(depositoID)).then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        });
    };
    var downloadDataTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get(encodeURI("/deposito/task/file/".concat(format).concat(filter).concat(sort).concat(dir)), {
            responseType: "blob",
        })
            .then(function (response) {
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Deposit", ".").concat(format), content);
        });
    };
    var getPenalty = function (params) {
        return custom_axios_1.default
            .post("/deposito/penalty", params)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getDataMenuLicense = function (companyID) {
        return (custom_axios_1.default
            // .get(`/menu/license/data2?filter=company_id:${companyID},product_id:84`)
            .post("/menu/license/data2", {
            filter: "company_id:".concat(companyID, ",product_id:84"),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        }));
    };
    var getFeeByCurrency = function (receiverCurrency, amount) {
        return custom_axios_1.default
            .get("/transaction/rate?senderCurrency=IDR&receiverCurrency=".concat(receiverCurrency, "&amount=").concat(amount))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getWorkflowCompany = function (companyID) {
        return custom_axios_1.default
            .get("/workflow/company/".concat(companyID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
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
                    productName: "Deposito",
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
    return {
        getAccountData: getAccountData,
        getDepositData: getDepositData,
        postDeposit: postDeposit,
        getDepositTaskList: getDepositTaskList,
        deleteDeposit: deleteDeposit,
        getDepositById: getDepositById,
        putDeposit: putDeposit,
        getDepositByAccountNumber: getDepositByAccountNumber,
        getActivityLogs: getActivityLogs,
        getTaskByFeatureID: getTaskByFeatureID,
        getListTenor: getListTenor,
        getDataSystemKey: getDataSystemKey,
        getVoucher: getVoucher,
        getInterestRate: getInterestRate,
        downloadDataTable: downloadDataTable,
        putTask: putTask,
        putManageDeposit: putManageDeposit,
        postWithdrawDeposit: postWithdrawDeposit,
        getCutOffHolidaySchedule: getCutOffHolidaySchedule,
        getPenalty: getPenalty,
        getDataMenuLicense: getDataMenuLicense,
        getFeeByCurrency: getFeeByCurrency,
        getDepositPendingTask: getDepositPendingTask,
        getWorkflowCompany: getWorkflowCompany,
        postValidateAccount: postValidateAccount,
    };
};
exports.default = DepositService;
//# sourceMappingURL=deposit.js.map