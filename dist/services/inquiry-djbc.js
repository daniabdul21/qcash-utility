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
/* eslint-disable @typescript-eslint/no-explicit-any */
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var InquiryDJBCService = function () {
    var getInquiryBilling = function (params) {
        return custom_axios_1.default
            .post("/inquiry-billing/djbc/billing", params)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.taskId,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getInquiryNPWP = function (params) {
        return custom_axios_1.default
            .post("/inquiry-billing/djbc/npwp", params)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.taskId,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getListInquiry = function (params) {
        var _params = __assign({}, params);
        _params === null || _params === void 0 ? true : delete _params.taskId;
        return custom_axios_1.default
            .get("/inquiry-billing/djbc/task/".concat(params === null || params === void 0 ? void 0 : params.taskId, "?search=").concat(params === null || params === void 0 ? void 0 : params.search))
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
    var getInquiryDownload = function (body) {
        return custom_axios_1.default
            .post("/inquiry-billing/djbc/download", body, { responseType: "blob" })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            ;
            var content = response === null || response === void 0 ? void 0 : response.headers["content-type"];
            (0, downloadjs_1.default)(response === null || response === void 0 ? void 0 : response.data, "".concat((0, moment_1.default)(new Date()).format("DD-MM-YYYY"), "_inquiry_billing.xlsx"), content);
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    return {
        getInquiryBilling: getInquiryBilling,
        getInquiryNPWP: getInquiryNPWP,
        getListInquiry: getListInquiry,
        getInquiryDownload: getInquiryDownload,
    };
};
exports.default = InquiryDJBCService;
//# sourceMappingURL=inquiry-djbc.js.map