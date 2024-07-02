"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var TransactionsService = function (token, baseURL) {
    var headersProductID = function (productID) {
        return {
            "Grpc-Metadata-Product-Id": productID,
        };
    };
    var getDataTransactions = function (params) {
        return custom_axios_1.default
            .get("transaction", {
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
    var getDataTransaction = function (id) {
        return custom_axios_1.default
            .get("transaction/".concat(id))
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
    var getTransactionLimit = function (params) {
        return custom_axios_1.default
            .get("transaction/limit/list", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        });
    };
    var getLimitModule = function (params) {
        return custom_axios_1.default
            .get("transaction/limit/module", {
            params: params,
        })
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
    var getLimitSummary = function (companyId, holdingId, currencyCode) {
        return custom_axios_1.default
            .post("transaction/limit/summary", {
            companyId: companyId,
            holdingId: holdingId,
            currencyCode: currencyCode,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return {
                    status: response.status,
                };
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            Promise.reject(error);
            return {
                status: 201,
                data: [],
            };
        });
    };
    var validateOtp = function (idToken, otpToken) {
        return custom_axios_1.default
            .post("/transaction/hard-token-validation", {
            userName: idToken,
            passCode: otpToken,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.data.responseCode !== "00") {
                throw new Error(response.data.data.responseMessage || "Server Error");
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var updateTask = function (id, payload) {
        return custom_axios_1.default
            .post("task/" + id, payload)
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
    var bulkUpdateTask = function (payload) {
        return custom_axios_1.default
            .post("task/workflow", payload, {
            headers: headersProductID(payload === null || payload === void 0 ? void 0 : payload.productID),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200 || response.data.error) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                error: false,
                message: "",
                data: response.data.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var createCacheTaskBulk = function (rcode) {
        return custom_axios_1.default
            .post("/task/rescache", { rcode: rcode })
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
    var calculateRate = function (payload) {
        return custom_axios_1.default
            .get("/transaction/rate", { params: payload })
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
    var calculatorValas = function (payload) {
        return custom_axios_1.default
            .post("/transaction/calculator-valas", payload)
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
    var getDataAllTransaction = function (params) {
        return custom_axios_1.default
            .get("/transaction/external-transfer", { params: params })
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
    return {
        getDataTransactions: getDataTransactions,
        getTransactionLimit: getTransactionLimit,
        getLimitModule: getLimitModule,
        getLimitSummary: getLimitSummary,
        getDataTransaction: getDataTransaction,
        validateOtp: validateOtp,
        updateTask: updateTask,
        calculateRate: calculateRate,
        getDataAllTransaction: getDataAllTransaction,
        bulkUpdateTask: bulkUpdateTask,
        createCacheTaskBulk: createCacheTaskBulk,
        calculatorValas: calculatorValas,
    };
};
exports.default = TransactionsService;
//# sourceMappingURL=transactions.js.map