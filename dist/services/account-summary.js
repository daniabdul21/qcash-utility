"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var downloadjs_1 = __importDefault(require("downloadjs"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var moment_1 = __importDefault(require("moment"));
var AccountSummaryService = function () {
    var getTrustedToken = function () {
        return custom_axios_1.default.get('/account-summary/trusted/token')
            .then(function (res) {
            var _a;
            if (res.status !== 200)
                throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return res;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var getFinancialReport = function (params) {
        return custom_axios_1.default.post("/account-summary", params)
            .then(function (res) {
            var _a;
            if (res.status !== 200)
                throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return res;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var downloadTable = function (format, data, username) {
        return custom_axios_1.default
            .post("/account-summary/download/".concat(format), data, { responseType: "blob" })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat(username, "_").concat((0, moment_1.default)(data === null || data === void 0 ? void 0 : data.startDate).format('MMYYYY'), "_AccountSummary"), content);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return { getTrustedToken: getTrustedToken, getFinancialReport: getFinancialReport, downloadTable: downloadTable };
};
exports.default = AccountSummaryService;
//# sourceMappingURL=account-summary.js.map