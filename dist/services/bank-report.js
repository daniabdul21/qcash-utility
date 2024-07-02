"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var BankReportServices = function () {
    var getListData = function () {
        return custom_axios_1.default.get("bank-report/list").then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    return {
        getListData: getListData
    };
};
exports.default = BankReportServices;
//# sourceMappingURL=bank-report.js.map