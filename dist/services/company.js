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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@/utilities");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var CompanyService = function (baseURL, token) {
    var getCurrencies = function () {
        return custom_axios_1.default.get("/company/currency").then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data.data;
        });
    };
    var getCompanies = function (query) {
        return custom_axios_1.default
            .get("/company/data", query
            ? __assign({
                params: {
                    companyName: query ? query.toLowerCase() : null,
                    page: 1,
                    limit: 100,
                },
            }) : {})
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data.data;
        });
    };
    var getDataCompanies = function () {
        return custom_axios_1.default.get("/company/data?page=1&limit=100").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getAccountData = function () {
        return custom_axios_1.default.get("/account/data").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCompaniesBricams = function () {
        return custom_axios_1.default.get("/company/bricams/customer?page=1&limit=100").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data.data;
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var getCompaniesData = function (params) {
        return custom_axios_1.default
            .get("/company/bricams/customer", {
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
    var getCompanyGroups = function () {
        return custom_axios_1.default.get("/company/group/data").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var getCompanyGroupTask = function (params) {
        return custom_axios_1.default
            .get("/company/group/task", {
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
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var storeCompanyGroupTask = function (params) {
        return custom_axios_1.default
            .post("/company/group/task", {
            data: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getTask = function (taskId) {
        return custom_axios_1.default.get("/company/group/task?filter=task_id:".concat(taskId)).then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var putCompanyGroupTask = function (taskId, params) {
        return custom_axios_1.default
            .put("/company/group/task/".concat(taskId), {
            data: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        });
    };
    var getCompaniesBricamsCustomer = function () {
        return custom_axios_1.default
            .get("/company/bricams/customer")
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            return response.data.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getCompaniesBricamsCustomerDetail = function (id) {
        return custom_axios_1.default
            .get("/company/bricams/customer/detail/".concat(id))
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            return response.data.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getCompanyLimit = function (params) {
        return custom_axios_1.default.get("/company/limit", { params: params }).then(function (response) {
            if (response.status !== 200) {
                throw new utilities_1.Exception(response.data.message);
            }
            return response.data.data;
        });
    };
    return {
        getAccountData: getAccountData,
        getCompanies: getCompanies,
        getCompaniesBricams: getCompaniesBricams,
        getCompaniesBricamsCustomer: getCompaniesBricamsCustomer,
        getCompaniesBricamsCustomerDetail: getCompaniesBricamsCustomerDetail,
        getCompaniesData: getCompaniesData,
        getCompanyGroups: getCompanyGroups,
        getCompanyGroupTask: getCompanyGroupTask,
        getCompanyLimit: getCompanyLimit,
        getCurrencies: getCurrencies,
        getDataCompanies: getDataCompanies,
        getTask: getTask,
        putCompanyGroupTask: putCompanyGroupTask,
        storeCompanyGroupTask: storeCompanyGroupTask,
    };
};
exports.default = CompanyService;
//# sourceMappingURL=company.js.map