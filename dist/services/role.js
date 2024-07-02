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
exports.TaskAction = void 0;
var services_1 = require("@/services");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var TaskAction;
(function (TaskAction) {
    TaskAction["Approve"] = "approve";
    TaskAction["Reject"] = "reject";
    TaskAction["Rework"] = "rework";
    TaskAction["Cancel"] = "cancel";
    TaskAction["Delete"] = "delete";
    TaskAction["DeleteRequest"] = "delete";
    TaskAction["Submit"] = "submit";
    TaskAction["All"] = "All";
})(TaskAction || (exports.TaskAction = TaskAction = {}));
var RoleService = function () {
    var getAuthorityLevel = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .get("/role/authority-level", {
                    params: {
                        dir: "ASC",
                        limit: "20",
                        sort: "AuthorityLevelID",
                    },
                })
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                })];
        });
    }); };
    var getProduct = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .get("/product?product.IsCu=true&product.isEnable=true&product.isAllowed=true&dir=ASC&sort=Name", {})
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                })];
        });
    }); };
    var getMenuLicenses = function (companyID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .post("/menu/license/data2", {
                    dir: "ASC",
                    filter: "company_id:".concat(companyID),
                    sort: "product_name",
                })
                    .then(function (response) {
                    return response.data.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                })];
        });
    }); };
    var getProductAuth = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .get("/role/product", {
                    params: {
                        dir: "DESC",
                        limit: -1,
                        page: -1,
                    },
                })
                    .then(function (response) {
                    return response.data.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                })];
        });
    }); };
    var getAccountData = function (companyID) {
        return services_1.customAxios
            .get("/account/data", {
            params: {
                dir: "DESC",
                "account.companyID": "".concat(companyID),
            },
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getRoleTaskById = function (taskID) {
        return services_1.customAxios
            .get("/role/task/".concat(taskID))
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getRdnAccountAccess = function (body) {
        return services_1.customAxios
            .post("/account/rdn/role", body)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getBeneficiaryAccountData = function (companyID) {
        return services_1.customAxios
            .get("/beneficiary-account/data?beneficiaryAccount.companyID=".concat(companyID), {
            params: {
                dir: "DESC",
                page: -1,
                limit: -1,
            },
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getDepositoAccountData = function (companyID) {
        return services_1.customAxios
            .get("/deposito/list?filter=companyId:".concat(companyID), {
            params: {
                dir: "DESC",
                page: -1,
                limit: -1,
            },
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var postRoleTask = function (payload) {
        return services_1.customAxios
            .post("role/task", payload)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var postEditRoleTask = function (taskID, payload) {
        return services_1.customAxios
            .post("role/task/edit/".concat(taskID), payload)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var putTaskRole = function (taskId, action, reasons, comment) {
        return services_1.customAxios
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
    var deleteTaskRole = function (taskID) {
        return services_1.customAxios
            .post("/task/".concat(taskID), {
            action: "delete",
            reasons: "",
            comment: "",
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getRoleTasksV2 = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return services_1.customAxios
            .get("role/v2/task?".concat(filter), {
            params: {
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
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var downloadTableRole = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return services_1.customAxios
            .get("/role/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("User", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getRoleTaskMeCreatedApproved = function () {
        return services_1.customAxios
            .get("/role/v2/created-approved")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserCounts = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .get("/role/user-counts")
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var getRoleRoleAuthorityLevel = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .get("/role/role-authority-level")
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var getUserRolesV2 = function (roleID) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, services_1.customAxios
                    .get("/role/v2/user-roles?RoleID=".concat(roleID))
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (error) {
                    var _a;
                    console.error("error from server: " + error);
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, services_1.customAxios
                            .post("/task/activity-logs/role", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            return response.data;
                        })
                            .catch(function (error) {
                            var _a;
                            console.error("error from server: " + error);
                            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        getAuthorityLevel: getAuthorityLevel,
        getProduct: getProduct,
        getMenuLicenses: getMenuLicenses,
        getProductAuth: getProductAuth,
        getAccountData: getAccountData,
        getBeneficiaryAccountData: getBeneficiaryAccountData,
        getDepositoAccountData: getDepositoAccountData,
        getRoleTaskById: getRoleTaskById,
        postRoleTask: postRoleTask,
        postEditRoleTask: postEditRoleTask,
        putTaskRole: putTaskRole,
        deleteTaskRole: deleteTaskRole,
        getRoleTasksV2: getRoleTasksV2,
        downloadTableRole: downloadTableRole,
        getRoleTaskMeCreatedApproved: getRoleTaskMeCreatedApproved,
        getUserCounts: getUserCounts,
        getRoleRoleAuthorityLevel: getRoleRoleAuthorityLevel,
        getUserRolesV2: getUserRolesV2,
        getActivityLogs: getActivityLogs,
        getRdnAccountAccess: getRdnAccountAccess
    };
};
exports.default = RoleService;
//# sourceMappingURL=role.js.map