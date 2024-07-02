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
var utilities_1 = require("@/utilities");
var ExternalTransferService = function (token, baseURL) {
    var postSingleTransfer = function (body, method) {
        var methodUrl = function () {
            switch (method) {
                case "BI-Fast":
                    return "bifast";
                case "Online Transfer":
                    return "online-transfer";
                case "Kliring":
                    return "kliring";
                default:
                    return null;
            }
        };
        return custom_axios_1.default
            .post("/".concat(methodUrl(), "/single/task"), body)
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
        });
    };
    var postSingleExternalTransfer = function (body) {
        return custom_axios_1.default
            .post("/bifast/single/task", body)
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
        });
    };
    var postSingleTemplate = function (url, body) {
        return custom_axios_1.default
            .post("/".concat(url, "/single/template"), body)
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
        });
    };
    var putSingleTemplate = function (url, id, body) {
        return custom_axios_1.default
            .post("/".concat(url, "/single/template/").concat(id), body)
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
        });
    };
    var putSingleTransfer = function (taskId, body, method) { return __awaiter(void 0, void 0, void 0, function () {
        var methodUrl;
        return __generator(this, function (_a) {
            methodUrl = function () {
                switch (method) {
                    case "BI-Fast":
                        return "bifast";
                    case "Online Transfer":
                        return "online-transfer";
                    case "Kliring":
                        return "kliring";
                    case "RTGS":
                        return "rtgs";
                    default:
                        return null;
                }
            };
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(methodUrl(), "/single/task/").concat(taskId), body)
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
                })];
        });
    }); };
    var getSingleTransfer = function (taskID) {
        return custom_axios_1.default
            .get("/bifast/task/".concat(taskID))
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
        });
    };
    var getSingleTransferDynamic = function (taskID, method) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/".concat(method, "/task/").concat(taskID))
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
                })];
        });
    }); };
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
            return Promise.reject(error.response.data);
        });
    };
    var getListTransfer = function (params) {
        return custom_axios_1.default
            .get("/bifast/single/task", {
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
            return Promise.reject(error.response.data);
        });
    };
    var getListExternalTransfer = function (params) {
        var methodUrl = function () {
            switch (params.filter) {
                case "type:BI-Fast":
                    delete params.filter;
                    return "bifast";
                case "type:Online Transfer":
                    delete params.filter;
                    return "online-transfer";
                default:
                    return "bifast";
            }
        };
        return custom_axios_1.default
            .get("/".concat(methodUrl(), "/task"), {
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
            return Promise.reject(error.response.data);
        });
    };
    var validateOtp = function (params) {
        return custom_axios_1.default
            .post("/swift/hard-token-validation", params)
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
            return Promise.reject(error.response.data);
        });
    };
    var validateExternalOtp = function (params) {
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
            return Promise.reject(error.response.data);
        });
    };
    var updateTransaction = function (id, payload, method) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (payload.action === types_1.TransactionFunctionEnum.Cancel) {
                payload = __assign(__assign({}, payload), { comment: "cancel", action: types_1.TransactionFunctionEnum.Delete });
            }
            return [2 /*return*/, custom_axios_1.default
                    .post("/".concat(method, "/task/").concat(id), payload)
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
                    return Promise.reject(error.response.data);
                })];
        });
    }); };
    // TODO: delete this function use main menu service!
    var getMenuLicense = function (companyId, productID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (custom_axios_1.default
                    // .get(
                    //   `/menu/license/data2?page=1&limit=10&filter=company_id:${companyId}&in=product_id:${productID}` //changet from 126 to 227
                    // )
                    .post("/menu/license/data2", {
                    page: 1,
                    limit: 10,
                    filter: "company_id:".concat(companyId),
                    in: "product_id:".concat(productID),
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return response.data.data;
                })
                    .catch(function (error) {
                    var _a, _b;
                    var isError = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
                    return Promise.reject({ message: "".concat(isError ? isError + '\n On License' : 'License Failed To Response') });
                }))];
        });
    }); };
    var getMaxTransactionOnlineTransfer = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/online-transfer/fee")
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    return Promise.reject(error.response.data);
                })];
        });
    }); };
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
            return Promise.reject(error.response.data);
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
                    var _a, _b;
                    var isError = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
                    return Promise.reject({ message: "".concat(isError ? isError + '\n On Company Limit' : 'Failed To Get Company Limit') });
                })];
        });
    }); };
    var getWorkflow = function (companyId, moduleId, currency) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/workflow/data", {
                    page: 1,
                    limit: 10,
                    dir: "ASC",
                    workflow: {
                        moduleID: moduleId,
                        companyID: companyId,
                        currencyName: currency
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
                    var _a, _b;
                    var isError = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
                    return Promise.reject({ message: "".concat(isError ? isError + '\n On Workflow' : 'Failed To Get Workflow Data') });
                })];
        });
    }); };
    // const validateDealCode = (dealCode: string)
    var calculateTransfer = function (payload) {
        // console.log(payload);
        return custom_axios_1.default
            .get("/transfer/rate", { params: payload })
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
    var getPendingTask = function (params) {
        return custom_axios_1.default
            .get("/bifast/single/task", { params: params })
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
            return Promise.reject(error.response.data);
        });
    };
    var getExternalPendingTask = function (params) {
        return custom_axios_1.default
            .get("/bifast/task", { params: params })
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
            return Promise.reject(error.response.data);
        });
    };
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, query = params.query, filter = params.filter;
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
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); }; };
    var getListSingleTemplate = function (url, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/".concat(url, "/single/template"), { params: params })
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
                })];
        });
    }); };
    var deleteSingleTemplate = function (url, id) {
        return custom_axios_1.default
            .post("/".concat(url, "/single/template/").concat(id, "/delete"), {})
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
        });
    };
    var updateExternalTransferStatus = function (taskId, action, reasons, comment, product, typeAction, passCode) {
        if (product === void 0) { product = "bifast"; }
        return custom_axios_1.default
            .post("/".concat(product, "/task/").concat(product === "swift" ? typeAction : taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
            passCode: passCode,
            taskID: taskId,
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
            return Promise.reject(error.response.data);
        });
    };
    // const updateExternalTransferStatus = (
    //   taskId: string,
    //   action: TaskActionEnum,
    //   reasons?: string,
    //   comment?: string
    // ) => {
    //   return customAxios
    //     .post(`/bifast/task/${taskId}`, {
    //       action,
    //       reasons,
    //       comment,
    //     })
    //     .then((response) => {
    //       if (response.status !== 200) {
    //         throw new Error(response.data?.message || "Server Error");
    //       }
    //       return {
    //         data: response.data,
    //         response: response,
    //       };
    //     })
    //     .catch((error) => {
    //       return Promise.reject(error);
    //     });
    // };
    var downloadDataTable = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir;
        return __generator(this, function (_a) {
            format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
            filter = "?filter=".concat(getFilter);
            sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
            dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
            return [2 /*return*/, custom_axios_1.default
                    .get(encodeURI("bifast/task/template/".concat(format).concat(filter).concat(sort).concat(dir)), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error((_a = response.data) === null || _a === void 0 ? void 0 : _a.message);
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("External-Fund-Transfer", "_bifast.").concat(format), content);
                })];
        });
    }); };
    var downloadDataTableOtf = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir;
        return __generator(this, function (_a) {
            format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
            filter = "?filter=".concat(getFilter);
            sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
            dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
            return [2 /*return*/, custom_axios_1.default
                    .get(encodeURI("online-transfer/task/export/".concat(format).concat(filter).concat(sort).concat(dir)), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error((_a = response.data) === null || _a === void 0 ? void 0 : _a.message);
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("External-Fund-Transfer", "_online-transfer.").concat(format), content);
                })];
        });
    }); };
    var downloadDataTableKliring = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir;
        return __generator(this, function (_a) {
            format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
            filter = "?filter=".concat(getFilter);
            sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
            dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
            return [2 /*return*/, custom_axios_1.default
                    .get(encodeURI("transaction/external-transfer/file/".concat(format).concat(filter).concat(sort).concat(dir)), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error((_a = response.data) === null || _a === void 0 ? void 0 : _a.message);
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("External-Fund-Transfer", "_kliring.").concat(format), content);
                })];
        });
    }); };
    var downloadDataTableAll = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var format, getFilter, getSort, getDir, filter, sort, dir;
        return __generator(this, function (_a) {
            format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
            filter = "?filter=".concat(getFilter);
            sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
            dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
            return [2 /*return*/, custom_axios_1.default
                    .get(encodeURI("transaction/external-transfer/file/".concat(format).concat(filter).concat(sort).concat(dir)), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error((_a = response.data) === null || _a === void 0 ? void 0 : _a.message);
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("External-Fund-Transfer", "_all.").concat(format), content);
                })];
        });
    }); };
    var getMinTransactionBiFast = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/system/key/min-bifast-transaction")
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
                })];
        });
    }); };
    var getMinTransactionOnlineTransfer = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/system/key/min-online-transfer-transaction")
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
                })];
        });
    }); };
    var getSystemKey = function (param) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/system/key/".concat(param))
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
                })];
        });
    }); };
    var getBankByBIC = function (bankCode) {
        return custom_axios_1.default
            .get("system/master-data/MdBankKliring", {
            params: {
                "data.bankCode": bankCode,
                page: 1,
                limit: 100,
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
    var getBanks = function (bankName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("system/master-data/MdBankKliring", {
                    params: { page: 1, limit: -1 },
                })
                    .then(function (res) {
                    if (res.status !== 200) {
                        return [];
                    }
                    return res.data.data;
                })
                    .catch(function (_) {
                    return [];
                })];
        });
    }); };
    var getEFTFilterBanks = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("system/master-data/MdBankKliring", { params: params })
                    .then(function (res) {
                    if (res.status !== 200) {
                        return [];
                    }
                    return res.data.data;
                })
                    .catch(function (_) {
                    return [];
                })];
        });
    }); };
    var getBifastBanks = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("system/master-data/MdBankKliring?dir=DESC&filter=ISBIFAST%3Atrue")
                    .then(function (res) {
                    if (res.status !== 200) {
                        return [];
                    }
                    return res.data.data;
                })
                    .catch(function (_) { return []; })];
        });
    }); };
    var checkCutOffHoilday = function (time, moduleId, currency) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/cut-off/available-time?modulID=".concat(moduleId, "&time=").concat(time, "&currency=").concat(currency || ''))
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
                })];
        });
    }); };
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
    var updateTaskOtp = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/task/workflow", body, { timeout: 300000 })
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
                })];
        });
    }); };
    var updateTask = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/task/workflow", body, { timeout: 300000 })
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
                })];
        });
    }); };
    var updateTaskCache = function (rCode) {
        return custom_axios_1.default
            .post("task/rescache", { rcode: rCode })
            .then(function (response) {
            var _a;
            if (response.status !== 200)
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var validateBifastBankSuspended = function (body) {
        var productID = body.productID, code = body.code, bankCode = body.bankCode;
        return custom_axios_1.default
            .get("system/master-data/MdBankKliring/suspend?bankCode=".concat(bankCode, "&code=").concat(code, "&productID=").concat(productID))
            .then(function (response) {
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err.response.data || "Server Error");
        });
    };
    var downloadReceiptByMethod = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var method, transaction_id;
        return __generator(this, function (_a) {
            method = props.method, transaction_id = props.transaction_id;
            return [2 /*return*/, custom_axios_1.default
                    .get(encodeURI("".concat(method, "/receipt/").concat(transaction_id)), {
                    responseType: "blob",
                })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Download Error");
                    }
                    var content = response.headers["content-type"];
                    (0, downloadjs_1.default)(response.data, "".concat(method, "-Transfer-Receipt-").concat((0, utilities_1.formatDate)(new Date(), "DD-MM-YYYY-HHmmSS"), ".pdf"), content);
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject((err === null || err === void 0 ? void 0 : err.message) || ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Download Error (Server Not Responding)" });
                })];
        });
    }); };
    var verifyTransactionBifast = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var taskID;
        return __generator(this, function (_a) {
            taskID = props.taskID;
            return [2 /*return*/, custom_axios_1.default
                    .post(encodeURI("/bifast/verify-transaction"), { task_id: taskID })
                    .then(function (response) {
                    if (!response || response.status !== 200)
                        throw new Error('Failed to verify transaction');
                    return response.data;
                })
                    .catch(function (err) {
                    return Promise.reject(err);
                })];
        });
    }); };
    return {
        updateTask: updateTask,
        updateTaskCache: updateTaskCache,
        updateTaskOtp: updateTaskOtp,
        getTransferExchangeRate: getTransferExchangeRate,
        getListTransfer: getListTransfer,
        checkCutOffHoilday: checkCutOffHoilday,
        checkCutOffHoildayForRecurring: checkCutOffHoildayForRecurring,
        getListExternalTransfer: getListExternalTransfer,
        getPendingTask: getPendingTask,
        getExternalPendingTask: getExternalPendingTask,
        getActivityLogs: getActivityLogs,
        getMenuLicense: getMenuLicense,
        getSingleTransfer: getSingleTransfer,
        getSingleTransferDynamic: getSingleTransferDynamic,
        getCompanyLimit: getCompanyLimit,
        getCompanyLimitSummary: getCompanyLimitSummary,
        getWorkflow: getWorkflow,
        getListSingleTemplate: getListSingleTemplate,
        calculateTransfer: calculateTransfer,
        validateOtp: validateOtp,
        postSingleTemplate: postSingleTemplate,
        putSingleTemplate: putSingleTemplate,
        postSingleTransfer: postSingleTransfer,
        putSingleTransfer: putSingleTransfer,
        updateTransaction: updateTransaction,
        deleteSingleTemplate: deleteSingleTemplate,
        postSingleExternalTransfer: postSingleExternalTransfer,
        updateExternalTransferStatus: updateExternalTransferStatus,
        validateExternalOtp: validateExternalOtp,
        downloadDataTableKliring: downloadDataTableKliring,
        downloadDataTable: downloadDataTable,
        downloadDataTableAll: downloadDataTableAll,
        downloadDataTableOtf: downloadDataTableOtf,
        /* eft min transaction */
        getMinTransactionBiFast: getMinTransactionBiFast,
        getMinTransactionOnlineTransfer: getMinTransactionOnlineTransfer,
        getMaxTransactionOnlineTransfer: getMaxTransactionOnlineTransfer,
        getSystemKey: getSystemKey,
        getEFTFilterBanks: getEFTFilterBanks,
        /* eft end */
        getBankByBIC: getBankByBIC,
        getBanks: getBanks,
        getBifastBanks: getBifastBanks,
        validateBifastBankSuspended: validateBifastBankSuspended,
        downloadReceiptByMethod: downloadReceiptByMethod,
        verifyTransactionBifast: verifyTransactionBifast
    };
};
exports.default = ExternalTransferService;
//# sourceMappingURL=external-transfer.js.map