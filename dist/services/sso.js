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
/* eslint-disable @typescript-eslint/no-explicit-any */
var custom_axios_1 = require("./custom-axios");
var axios_1 = __importDefault(require("axios"));
var SSOService = function (token) {
    var loginSSO = function (clientName, redirect, errorCallback, statusLoading) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!statusLoading) return [3 /*break*/, 2];
                    statusLoading(true);
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .get("sso/signin-url/".concat(clientName))
                            .then(function (response) {
                            var _a, _b, _c, _d, _e, _f;
                            if (response.status !== 200 && errorCallback) {
                                errorCallback((_a = response.data) !== null && _a !== void 0 ? _a : null);
                                statusLoading(false);
                                return;
                            }
                            if ((!((_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.success) || !((_e = (_d = response.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.url)) && errorCallback) {
                                errorCallback((_f = response.data) !== null && _f !== void 0 ? _f : null);
                                statusLoading(false);
                                return;
                            }
                            redirect(response.data.data.url);
                            statusLoading(false);
                        })
                            .catch(function (err) {
                            var _a, _b;
                            console.error("error", err);
                            if (errorCallback) {
                                errorCallback((_b = (_a = err.data) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : null);
                                statusLoading(false);
                            }
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var loginSSOV2 = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.customAxios.get("sso/signin-url/".concat(params.clientName))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var logoutSSO = function (clientName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.customAxios
                        .get("sso/signout/".concat(clientName))
                        .then(function (response) {
                        if (response.status !== 200) {
                            return;
                        }
                        return response;
                    })
                        .catch(function (err) {
                        return Promise.reject(err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var getClients = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.customAxios.get("sso/client", {
                        validateStatus: function () { return true; },
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getIntegrationConfigs = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        var sortNew = sort ? sort.replace("data.", "") : sort;
        return custom_axios_1.customAxios
            .get("sso/client/task?".concat(filter), {
            params: {
                page: page,
                limit: limit,
                search: query,
                // query: query ? query : null,
                // filter: filter ? filter : null,
                sort: sortNew,
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
    var upsertClientConfig = function (data, taskID) {
        if (taskID) {
            return (custom_axios_1.customAxios
                // .put(`sso/client/task/${taskID}`, data)
                .post("sso/client/task/edit/".concat(taskID), data)
                .then(function (response) {
                var _a;
                if (response.status !== 200) {
                    return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                }
                return response.data;
            })
                .catch(function (error) {
                return Promise.reject(error);
            }));
        }
        return custom_axios_1.customAxios
            .post("sso/client/task", data)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getClientTask = function (taskID) {
        return custom_axios_1.customAxios
            .get("sso/client/task/".concat(taskID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getClientUserTypes = function (clientCode) {
        return custom_axios_1.customAxios
            .get("sso/client/role/".concat(clientCode))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getClientUsers = function (clientCode) { return function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        var sortTemp = sort === null || sort === void 0 ? void 0 : sort.replace("data.", "");
        return custom_axios_1.customAxios
            .get("sso/sync/".concat(clientCode, "/user?").concat(filter), {
            params: {
                page: page,
                limit: limit,
                search: query,
                // query: query ? query : null,
                // filter: filter ? filter : null,
                sort: sortTemp,
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
    }; };
    var getClientUserDetail = function (clientCode, userID) {
        return custom_axios_1.customAxios
            .get("sso/sync/".concat(clientCode, "/user/").concat(userID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var syncUser = function (data, taskID) {
        if (taskID) {
            return (custom_axios_1.customAxios
                // .put(`sso/sync/task/user/${taskID}`, data)
                .post("sso/sync/task/user/edit/".concat(taskID), data)
                .then(function (response) {
                var _a;
                if (response.status !== 200) {
                    return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                }
                return response.data;
            })
                .catch(function (error) {
                return Promise.reject(error);
            }));
        }
        return custom_axios_1.customAxios
            .post("sso/sync/task/user", data)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //@ts-ignore
    var approveSyncUser = function (taskID) {
        if (taskID) {
            return (custom_axios_1.customAxios
                // .put(`sso/sync/task/user/${taskID}/approve`)
                .post("sso/sync/task/user/edit/".concat(taskID, "/approve"), {
                reasons: "",
                comment: "",
            })
                .then(function (response) {
                if (response.status !== 200) {
                    return response.data;
                }
                return response.data;
            })
                .catch(function (error) {
                return Promise.reject(error);
            }));
        }
    };
    var getClientCompanies = function (clientCode) { return function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        var sortTemp = sort === null || sort === void 0 ? void 0 : sort.replace("data.", "");
        return custom_axios_1.customAxios
            .get("sso/sync/".concat(clientCode, "/company?").concat(filter), {
            params: {
                page: page,
                limit: limit,
                search: query,
                // query: query ? query : null,
                // filter: filter ? filter : null,
                // sort,
                sort: sortTemp,
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
    }; };
    var getClientCompanyDetail = function (clientCode, companyID) {
        return custom_axios_1.customAxios
            .get("sso/sync/".concat(clientCode, "/company/").concat(companyID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var syncCompany = function (data, taskID) {
        if (taskID) {
            return (custom_axios_1.customAxios
                // .put(`sso/sync/task/company/${taskID}`, data)
                .post("sso/sync/task/company/edit/".concat(taskID), data)
                .then(function (response) {
                var _a;
                if (response.status !== 200) {
                    return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                }
                return response.data;
            })
                .catch(function (error) {
                return Promise.reject(error);
            }));
        }
        return custom_axios_1.customAxios
            .post("sso/sync/task/company", data)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //@ts-ignore
    var approveSyncCompany = function (taskID) {
        if (taskID) {
            return (custom_axios_1.customAxios
                // .put(`sso/sync/task/company/${taskID}/approve`)
                .post("sso/sync/task/company/edit/".concat(taskID, "/approve"), {
                reasons: "",
                comment: "",
            })
                .then(function (response) {
                if (response.status !== 200) {
                    // return Promise.reject(response.data?.message || "Server Error");
                    return response.data;
                }
                return response.data;
            })
                .catch(function (error) {
                return Promise.reject(error);
            }));
        }
    };
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.customAxios
                            .post("/task/activity-logs/".concat(type), {
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
    }); }; };
    var instance = axios_1.default.create({
        baseURL: "https://dataviz.bri.co.id",
        proxy: {
            host: "http://proxy1.bri.co.id",
            port: 1234,
        },
    });
    var getTokenTableau = function () {
        return instance
            .post("/trusted", {
            username: "CMS_AddOns_EXP",
            trusted_site: "",
        }, {
            headers: {
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Content-Type": "x-www-form-urlencoded",
            },
        })
            .then(function (response) {
            console.log("success hit");
            return ("https://dataviz.bri.co.id/trusted/" +
                response +
                "/views/TRB-BDA-DashboardCMSAddOns/Sheet1?:iid=1?:embed=yes&:toolbar=yes");
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    return {
        loginSSO: loginSSO,
        loginSSOV2: loginSSOV2,
        getClients: getClients,
        getIntegrationConfigs: getIntegrationConfigs,
        upsertClientConfig: upsertClientConfig,
        getClientTask: getClientTask,
        getClientUserTypes: getClientUserTypes,
        getClientUsers: getClientUsers,
        getClientUserDetail: getClientUserDetail,
        syncUser: syncUser,
        approveSyncUser: approveSyncUser,
        getClientCompanies: getClientCompanies,
        getClientCompanyDetail: getClientCompanyDetail,
        syncCompany: syncCompany,
        approveSyncCompany: approveSyncCompany,
        logoutSSO: logoutSSO,
        getActivityLogs: getActivityLogs,
        getTokenTableau: getTokenTableau,
    };
};
exports.default = SSOService;
//# sourceMappingURL=sso.js.map