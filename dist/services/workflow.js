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
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var WorkflowService = function (baseURL, token) {
    //**********************
    // Workflow
    //**********************
    var getWorkflows = function () {
        return custom_axios_1.default
            .get("workflow")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
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
            if (response.status !== 200) {
                return response.data;
            }
            return response.data;
        });
    };
    var getWorkflowTasks = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("workflow/task?".concat(filter), {
            params: {
                page: page,
                limit: limit,
                search: query,
                // query: query ? query : null,
                // filter: filter ? filter : null,
                // sort: sortNew,
                sort: sort,
                dir: dir,
            },
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
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getWorkflowTask = function (taskID) {
        return custom_axios_1.default
            .get("workflow/task/".concat(taskID))
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
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getWorkflowTaskMeCreatedBy = function () {
        return custom_axios_1.default
            .get("workflow/task/me/created-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getWorkflowTaskMeApprovedBy = function () {
        return custom_axios_1.default
            .get("workflow/task/me/approved-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getDataUser = function (params) {
        return custom_axios_1.default
            .get("/user/data", { params: params })
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
    var postWorkflowTask = function (params, isDraft) {
        return custom_axios_1.default
            .post("workflow/task", { isDraft: isDraft, data: params })
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
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
        });
    };
    var putWorkflowTask = function (taskID, params, isDraft) {
        return custom_axios_1.default
            .post("workflow/task/edit/".concat(taskID), { isDraft: isDraft, data: params })
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
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
        });
    };
    var deleteWorkflowTask = function (taskID) {
        console.log("masuk");
        return custom_axios_1.default
            .post("workflow/task/delete/".concat(taskID), { taskID: taskID })
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
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    //**********************
    // Workflow BRICA
    //**********************
    // const getWorkflowsBricamsDetail = (workflowname: string) => {
    //   return customAxios
    //     .get(`workflow/bricams-svc/detail/${workflowname}`)
    //     .then((response) => {
    //       if (response.status !== 200) {
    //         throw new Error(response.data?.responseMessage || "Server Error");
    //       }
    //       if (!response.data.data) {
    //         throw new Error(response.data?.responseMessage || "Server Error");
    //       }
    //       return response.data.data as WorkflowBricamsDetail;
    //     })
    //     .catch((error) => {
    //       console.error("error from server: " + error);
    //       return Promise.reject(error);
    //     });
    // };
    //**********************
    // External
    //**********************
    // const getRoleData = async (workflowTypeID: string) => {
    //   return customAxios
    //     .get(`role/data?role.workflowTypeID=${workflowTypeID}&dir=DESC`)
    //     .then((response) => {
    //       if (response.status !== 200) {
    //         return;
    //       }
    //       return response.data.data;
    //     });
    // };
    // const getRoleWorkflowType = async () => {
    //   return await customAxios
    //     .get(`role/workflow-type`)
    //     .then((response) => {
    //       if (response.status !== 200) {
    //         throw new Error(response.data?.message || "Server Error");
    //       }
    //       return response.data.data;
    //     })
    //     .catch((error) => {
    //       console.error("error from server: " + error);
    //       return Promise.reject(error);
    //     });
    // };
    var getProducts = function () {
        return custom_axios_1.default
            .get("/product?product.IsTransactional=true&dir=DESC")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getDataMenuLicenses = function (params) {
        return custom_axios_1.default
            .get("/menu/license/task", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getMenuLicenses = function (companyID) {
        return custom_axios_1.default
            .post("/menu/license/data2", {
            dir: "ASC",
            filter: "company_id:".concat(companyID, ",is_allowed:true,is_enable:true,is_transactional:true,"),
            sort: "product_name",
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getCompanyLimitByCompanyId = function (companyID) {
        return custom_axios_1.default.get("company/limit?companyID=".concat(companyID)).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCompanyLimitByHoldingId = function (companyID) {
        return custom_axios_1.default.get("company/group-limit?holdingID=".concat(companyID)).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCompaniesByHoldingId = function (companyID) {
        return custom_axios_1.default.get("company/data?holdingID=".concat(companyID)).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCompaniesWorkflowByCompanyId = function (companyID) {
        return (custom_axios_1.default
            // .get(`workflow/company?workflow.companyID=${companyID}`)
            .get("workflow/company/".concat(companyID))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        }));
    };
    var getRoleUsersByCompanyId = function (companyID, AuthorityLevelID, ProductID) {
        return custom_axios_1.default
            .get("role/count/role-users?CompanyID=".concat(companyID, "&AuthorityLevelID=").concat(AuthorityLevelID, "&ProductID=").concat(ProductID))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getSpesificRoleUserByCompanyId = function (companyID, AuthorityLevelID, ProductID) {
        return custom_axios_1.default
            .get("role/count/role-users/data?CompanyID=".concat(companyID, "&AuthorityLevelID=").concat(AuthorityLevelID, "&ProductID=").concat(ProductID))
            .then(function (res) {
            if (res.status !== 200 || !res) {
                return;
            }
            return res.data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    var getRolesByCompanyId = function (companyID) {
        return custom_axios_1.default.get("role/data?role.companyID=".concat(companyID, "&limit=-1&page=1")).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
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
                            .post("/task/activity-logs/workflow", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200)
                                return;
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getCurrenciesByModuleId = function (companyID, features) {
        // const filter = { companyID: params, moduleID: features }
        return custom_axios_1.default
            .post("/workflow/currency", {
            companyID: companyID,
            moduleID: features,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getWorkflow = function (param) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/workflow/data", param)
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200) {
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return response.data.data;
                })
                    .catch(function (error) {
                    return Promise.reject(error.response.data);
                })];
        });
    }); };
    var getAllCompanyWorkflow = function (query, limit) {
        return custom_axios_1.default
            .get("company/data", {
            params: {
                companyName: query ? query.toLowerCase() : null,
                page: 1,
                limit: limit,
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
    var downloadTableWorkflow = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = getFilter !== "" ? "?filter=".concat(getFilter) : "";
        var sort = getSort && getSort !== "" ? (filter !== "" ? "&sort=".concat(getSort) : "?sort=".concat(getSort)) : "";
        var dir = getDir && getDir !== "" ? (sort !== "" ? "&dir=".concat(getDir) : "?dir=".concat(getDir)) : "";
        return custom_axios_1.default
            .get("/workflow/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Workflow", ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getCompanies = function (params) {
        return custom_axios_1.default.get("/company/data", { params: params }).then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data.data;
        });
    };
    var getWorkflowTaskV2 = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("workflow/v2/task?".concat(filter), {
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
    var downloadTableWorkflowV2 = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/workflow/v2/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
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
    var putTaskWorkflow = function (taskId, action, reasons, comment) {
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
    var getWorkflowTaskMeCreatedApproved = function () {
        return custom_axios_1.default
            .get("/workflow/v2/created-approved")
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
    return {
        deleteWorkflowTask: deleteWorkflowTask,
        getWorkflows: getWorkflows,
        getWorkflowTasks: getWorkflowTasks,
        getWorkflowTask: getWorkflowTask,
        getWorkflowTaskMeCreatedBy: getWorkflowTaskMeCreatedBy,
        getWorkflowTaskMeApprovedBy: getWorkflowTaskMeApprovedBy,
        postWorkflowTask: postWorkflowTask,
        putWorkflowTask: putWorkflowTask,
        getCompanyLimitByCompanyId: getCompanyLimitByCompanyId,
        getCompanyLimitByHoldingId: getCompanyLimitByHoldingId,
        getCompaniesByHoldingId: getCompaniesByHoldingId,
        getMenuLicenses: getMenuLicenses,
        getProducts: getProducts,
        getRolesByCompanyId: getRolesByCompanyId,
        getDataUser: getDataUser,
        getActivityLogs: getActivityLogs,
        getCompaniesWorkflowByCompanyId: getCompaniesWorkflowByCompanyId,
        getRoleUsersByCompanyId: getRoleUsersByCompanyId,
        getCurrenciesByModuleId: getCurrenciesByModuleId,
        getDataMenuLicenses: getDataMenuLicenses,
        getSpesificRoleUserByCompanyId: getSpesificRoleUserByCompanyId,
        putTask: putTask,
        getWorkflow: getWorkflow,
        getAllCompanyWorkflow: getAllCompanyWorkflow,
        downloadTableWorkflow: downloadTableWorkflow,
        getCompanies: getCompanies,
        getWorkflowTaskV2: getWorkflowTaskV2,
        downloadTableWorkflowV2: downloadTableWorkflowV2,
        putTaskWorkflow: putTaskWorkflow,
        getWorkflowTaskMeCreatedApproved: getWorkflowTaskMeCreatedApproved,
    };
};
exports.default = WorkflowService;
//# sourceMappingURL=workflow.js.map