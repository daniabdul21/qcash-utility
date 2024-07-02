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
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var qs_1 = __importDefault(require("qs"));
var moment_1 = __importDefault(require("moment"));
var AccountService = function (token) {
    var getAccountTaskData = function (params) {
        return custom_axios_1.default
            .get("account/task", {
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
            return Promise.reject(error);
        });
    };
    var getAccountData = function () {
        return custom_axios_1.default
            .get("/account/data", {
            params: {
                dir: "DESC",
            },
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getAccountData2 = function (params) {
        return custom_axios_1.default.get("/account/data", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getAccountDataByRole = function (params) {
        if (params === void 0) { params = {}; }
        return custom_axios_1.default.get("/account/dataByRole", { params: params }).then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        });
    };
    var getAccountDepositoDataByRole = function (params) {
        if (params === void 0) { params = {}; }
        return custom_axios_1.default.get("/deposito/dataByRole", { params: params }).then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        });
    };
    var postAvailableAccount = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var companyID = _b.companyID, accountNumber = _b.accountNumber;
        return __generator(this, function (_c) {
            return [2 /*return*/, custom_axios_1.default.post("/account/available", {
                    companyID: companyID,
                    accountNumber: accountNumber,
                })];
        });
    }); };
    var getAccountTaskV2 = function (params) {
        return custom_axios_1.default.get("/account/task", { params: params }).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getAccountTask = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var _c = _b.dir, dir = _c === void 0 ? "DESC" : _c, _d = _b.step, step = _d === void 0 ? "AllStep" : _d, _e = _b.status, status = _e === void 0 ? "AllStatus" : _e;
        return __generator(this, function (_f) {
            return [2 /*return*/, custom_axios_1.default
                    .get("account/task", {
                    params: {
                        dir: dir,
                        step: step,
                        status: status,
                    },
                })
                    .then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data;
                })];
        });
    }); };
    var getAccountTaskById = function (taskID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.get("/account/task/".concat(taskID)).then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data;
                })];
        });
    }); };
    var putAccountTask = function (taskID, params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/account/task/edit/".concat(taskID), params)
                    .then(function (response) {
                    if (response.status !== 200) {
                        return Promise.reject(response);
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                })];
        });
    }); };
    var deleteAccountTask = function (taskID) {
        return custom_axios_1.default
            .post("account/task/delete/".concat(taskID), { taskID: taskID })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var postValidateAccountUKLN = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var accountNo = _b.accountNo, _c = _b.countryCode, countryCode = _c === void 0 ? "" : _c;
        return __generator(this, function (_d) {
            return [2 /*return*/, custom_axios_1.default.post("account/ukln/inquiry", {
                    accountNo: accountNo,
                    countryCode: countryCode,
                })];
        });
    }); };
    var postValidateAccountV2 = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var accountNo = _b.accountNo, _c = _b.remark, remark = _c === void 0 ? "" : _c, _d = _b.countryCode, countryCode = _d === void 0 ? "" : _d, _e = _b.type, type = _e === void 0 ? "" : _e, _f = _b.country, country = _f === void 0 ? "" : _f;
        return __generator(this, function (_g) {
            return [2 /*return*/, custom_axios_1.default.post("account/validate/data", {
                    accountNo: accountNo,
                    remark: remark,
                    countryCode: countryCode,
                    type: type,
                    country: country,
                })];
        });
    }); };
    var postValidateAccount = function (_a, config_1) { return __awaiter(void 0, [_a, config_1], void 0, function (_b, config) {
        var accountNo = _b.accountNo, _c = _b.remark, remark = _c === void 0 ? "" : _c, _d = _b.type, type = _d === void 0 ? "" : _d;
        return __generator(this, function (_e) {
            return [2 /*return*/, custom_axios_1.default.post("/account/validate", {
                    accountNo: accountNo,
                    remark: remark,
                    type: type,
                }, config)];
        });
    }); };
    var postValidateAccountCIF = function (_a, config_1) { return __awaiter(void 0, [_a, config_1], void 0, function (_b, config) {
        var accountNo = _b.accountNo;
        return __generator(this, function (_c) {
            return [2 /*return*/, custom_axios_1.default.post("/account/validate-account-number", {
                    accountNumber: accountNo,
                }, config)];
        });
    }); };
    var getRdnAccount = function (body) {
        return custom_axios_1.default
            .post("/account/rdn", body)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var postAccountTask = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.post("account/task", params)];
        });
    }); };
    var postAccountDraft = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.post("account/task", params)];
        });
    }); };
    var postAccountTaskBulk = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.post("account/task-multiple", params)];
        });
    }); };
    var postAccountTaskBulkDraft = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default.post("account/task-multiple", params)];
        });
    }); };
    var validateAccountNumber = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("/account/validate/data", params)
                        .then(function (response) {
                        var _a, _b;
                        if (response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        if (response.data.error) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("there is error on" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getListCompany = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var limit = _b.limit, page = _b.page, search = _b.search;
        return __generator(this, function (_c) {
            try {
                if (!search) {
                    return [2 /*return*/, custom_axios_1.default.get("/company/v2/data?limit=".concat(limit, "&page=").concat(page, "&filter=status:active&"))];
                }
                else {
                    return [2 /*return*/, custom_axios_1.default.get("/company/v2/data?limit=".concat(limit, "&page=").concat(page, "&query=name%3A%25!").concat(search, "&filter=status:active&"))];
                }
            }
            catch (error) {
                console.log({ error: error });
                return [2 /*return*/, null];
            }
            return [2 /*return*/];
        });
    }); };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/account", {
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
    var fetchUsedAlias = function (companyID, accountNumber) {
        return custom_axios_1.default
            .post("account/used", {
            companyID: companyID,
            accountNumber: accountNumber,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.accountAlias;
        });
    };
    var putTask = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/task/".concat(taskId), {
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
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getAccountDepositoData = function (params) {
        return custom_axios_1.default
            .get("/deposito/list", {
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
            return Promise.reject(error);
        });
    };
    var downloadAccountDepositoTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(btoa(getFilter));
        var formatFile = (format === "xls" ? "xlsx" : format).toUpperCase();
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/deposito/download/".concat(formatFile).concat(filter).concat(sort).concat(dir), { responseType: "blob" })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("YYYY-MM-DD"), "_DepositoAccounts.").concat(format === null || format === void 0 ? void 0 : format.toLowerCase()), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var downloadTableNonDeposito = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/account/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Account", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getAccountTaskDataV2 = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir, step = params.step;
        return custom_axios_1.default
            .get("/account/v2/task?".concat(filter), {
            params: {
                step: step,
                page: page,
                limit: limit,
                query: query,
                sort: sort,
                dir: dir,
            },
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
            return Promise.reject(error);
        });
    };
    var getAccountCreatedUpdated = function () {
        return custom_axios_1.default
            .get("account/approved-created")
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
    var submitFile = function (body) {
        var req = JSON.stringify(body);
        var dtas = qs_1.default.stringify({ request: req });
        return custom_axios_1.default
            .post("/account/mass-register/submit-file", {
            request: dtas,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return Promise.reject(response.data);
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var checkDuplicateFileName = function (filename, companyid) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/account/mass-register/duplicate-by-name", {
                    filename: filename,
                    companyid: companyid,
                })
                    .then(function (response) {
                    if (response.status !== 200) {
                        return Promise.reject(response.data);
                    }
                    return response.data;
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var getListMassRegister = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("/account/mass-register/list?".concat(filter), {
            params: {
                limit: limit,
                page: page,
                sort: sort,
                dir: dir,
                query: query,
            },
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
            return Promise.reject(error);
        });
    };
    var getListBatchTable = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir, batchId = params.batchId, companyName = params.companyName;
        return custom_axios_1.default
            .get("/account/mass-register/detail-account?".concat(filter), {
            params: {
                limit: limit,
                page: page,
                sort: sort,
                dir: dir,
                query: query,
                batchId: batchId,
                companyName: companyName,
            },
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
            return Promise.reject(error);
        });
    };
    var getInvalidData = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, filter, sort, dir, batchId, companyName;
        return __generator(this, function (_a) {
            page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir, batchId = params.batchId, companyName = params.companyName;
            return [2 /*return*/, custom_axios_1.default
                    .get("/account/mass-register/detail-account-invalid?".concat(filter), {
                    params: {
                        limit: limit,
                        page: page,
                        sort: sort,
                        dir: dir,
                        query: query,
                        batchId: batchId,
                        companyName: companyName,
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
                })];
        });
    }); };
    var getListBatchDetail = function (batchId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/account/mass-register/detail-batch", {
                    params: {
                        batchId: batchId,
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
                })];
        });
    }); };
    var createTaskMassRegister = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("account/mass-register/create-task", params)
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
    var deleteBatchMassRegister = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("account/mass-register/delete-batch", params)
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
    var massApproveTask = function (_a) {
        var companyId = _a.companyId, action = _a.action, batchId = _a.batchId, reason = _a.reason, description = _a.description;
        return custom_axios_1.default
            .post("/account/mass-register/approve", {
            companyId: companyId,
            action: action,
            batchId: batchId,
            reason: reason,
            description: description,
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
    return {
        downloadTableNonDeposito: downloadTableNonDeposito,
        massApproveTask: massApproveTask,
        getInvalidData: getInvalidData,
        submitFile: submitFile,
        getListBatchTable: getListBatchTable,
        getListBatchDetail: getListBatchDetail,
        checkDuplicateFileName: checkDuplicateFileName,
        deleteAccountTask: deleteAccountTask,
        postValidateAccountV2: postValidateAccountV2,
        postAccountTaskBulkDraft: postAccountTaskBulkDraft,
        postAccountDraft: postAccountDraft,
        putTask: putTask,
        getActivityLogs: getActivityLogs,
        fetchUsedAlias: fetchUsedAlias,
        downloadAccountDepositoTable: downloadAccountDepositoTable,
        getAccountDepositoData: getAccountDepositoData,
        getAccountTaskV2: getAccountTaskV2,
        getAccountTaskData: getAccountTaskData,
        getAccountData: getAccountData,
        getAccountDataByRole: getAccountDataByRole,
        getAccountDepositoDataByRole: getAccountDepositoDataByRole,
        getAccountTask: getAccountTask,
        getAccountTaskById: getAccountTaskById,
        putAccountTask: putAccountTask,
        postAccountTask: postAccountTask,
        postAccountTaskBulk: postAccountTaskBulk,
        postValidateAccount: postValidateAccount,
        getAccountData2: getAccountData2,
        postAvailableAccount: postAvailableAccount,
        postValidateAccountCIF: postValidateAccountCIF,
        validateAccountNumber: validateAccountNumber,
        getListCompany: getListCompany,
        postValidateAccountUKLN: postValidateAccountUKLN,
        getAccountTaskDataV2: getAccountTaskDataV2,
        getAccountCreatedUpdated: getAccountCreatedUpdated,
        getRdnAccount: getRdnAccount,
        getListMassRegister: getListMassRegister,
        createTaskMassRegister: createTaskMassRegister,
        deleteBatchMassRegister: deleteBatchMassRegister,
    };
};
exports.default = AccountService;
//# sourceMappingURL=account.js.map