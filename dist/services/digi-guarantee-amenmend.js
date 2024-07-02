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
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var OnlineBGServiceAmendment = function (baseURL, token) {
    var checkAmendAndCancel = function (params) {
        return custom_axios_1.default
            .post("/bg/amendment-and-cancellation/check", params)
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
    var getTransaction = function (params) {
        return custom_axios_1.default
            .post("/bg/amendment/get-transaction", params)
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
    var saveTaskTransaction = function (params) {
        return custom_axios_1.default
            .post("/bg/amendment/task", params)
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
    var getDataCurrency = function () {
        return custom_axios_1.default
            .get("/bg/currency", {})
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
    var getlistTaskGraphAmandement = function (params) {
        var _a = params.isHistory, isHistory = _a === void 0 ? true : _a, rest = __rest(params, ["isHistory"]);
        var url = "/bg/amendment/task/statuses/counter";
        if (!isHistory) {
            url = "/task/statuses/counter";
        }
        return custom_axios_1.default
            .get(url, { params: __assign({}, rest) })
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
    var getDataBGAmendment = function (params) {
        return custom_axios_1.default
            .get("/bg/amendment-and-cancellation/task", {
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
    var getDataBGAmendmentHistory = function (params) {
        return custom_axios_1.default
            .get("/bg/amendment-and-cancellation/task/history", {
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
    var fetchFilterBGAmendment = function (params) {
        var _a = params.actionBy, actionBy = _a === void 0 ? "" : _a, rest = __rest(params, ["actionBy"]);
        var url = "/bg/amendment-and-cancellation/task";
        if (actionBy === "history") {
            url = "/bg/amendment-and-cancellation/task/history";
        }
        return custom_axios_1.default
            .get(url, {
            params: __assign({}, rest),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data.map(function (items) { return (__assign(__assign({}, items), { transactionID: items.transactionId, referenceNo: items.referenceNumber })); });
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var bulkUpdateTaskAemendment = function (payload) {
        return custom_axios_1.default
            .post("/bg/amendment-and-cancellation/task/action", payload)
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
    var checkTransactionBgAmendment = function (payload) {
        return custom_axios_1.default
            .post("/bg/amendment/checking-transaction", payload)
            .then(function (response) {
            if (!response || response.status !== 200)
                throw new Error("Falied to check transaction BG Amendment");
            return response.data;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var getViewDetail = function (params) {
        return custom_axios_1.default
            .get("/bg/amendment/task/" + params)
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
    var getInsuranceLimit = function () {
        return custom_axios_1.default
            .get("/bg/insurance-limit")
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
    var downloadTableAmendment = function (props) {
        var format = props.format, getFilter = props.getFilter, getFilterOr = props.getFilterOr, getSort = props.getSort, getDir = props.getDir, tab = props.tab;
        var filter = "?filterOr=".concat(getFilterOr);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/bg/amendment/".concat(tab, "/download/").concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("BG-Amendment", "_").concat(tab, ".").concat(format), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return {
        checkAmendAndCancel: checkAmendAndCancel,
        getTransaction: getTransaction,
        saveTaskTransaction: saveTaskTransaction,
        getDataCurrency: getDataCurrency,
        getlistTaskGraphAmandement: getlistTaskGraphAmandement,
        getDataBGAmendment: getDataBGAmendment,
        getDataBGAmendmentHistory: getDataBGAmendmentHistory,
        fetchFilterBGAmendment: fetchFilterBGAmendment,
        bulkUpdateTaskAemendment: bulkUpdateTaskAemendment,
        checkTransactionBgAmendment: checkTransactionBgAmendment,
        getViewDetail: getViewDetail,
        getInsuranceLimit: getInsuranceLimit,
        downloadTableAmendment: downloadTableAmendment,
    };
};
exports.default = OnlineBGServiceAmendment;
//# sourceMappingURL=digi-guarantee-amenmend.js.map