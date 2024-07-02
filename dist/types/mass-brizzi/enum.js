"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBatch = exports.FormatTemplateEnum = void 0;
var FormatTemplateEnum;
(function (FormatTemplateEnum) {
    FormatTemplateEnum[FormatTemplateEnum["unknown"] = 0] = "unknown";
    FormatTemplateEnum[FormatTemplateEnum["xlsx"] = 1] = "xlsx";
    FormatTemplateEnum[FormatTemplateEnum["xls"] = 2] = "xls";
    FormatTemplateEnum[FormatTemplateEnum["csv"] = 3] = "csv";
    FormatTemplateEnum[FormatTemplateEnum["pdf"] = 4] = "pdf";
    FormatTemplateEnum[FormatTemplateEnum["zip"] = 5] = "zip";
})(FormatTemplateEnum || (exports.FormatTemplateEnum = FormatTemplateEnum = {}));
var StatusBatch;
(function (StatusBatch) {
    StatusBatch["UNKNOWN"] = "unknown";
    StatusBatch["ON_PROCESS"] = "on process";
    StatusBatch["INVALID_DATA"] = "invalid data";
    StatusBatch["READY_TO_SUBMIT"] = "ready to submit";
    StatusBatch["ON_CHECKER"] = "on checker";
    StatusBatch["ON_SIGNER"] = "on signer";
    StatusBatch["ON_RELEASER"] = "on releaser";
    StatusBatch["PAID"] = "paid";
    StatusBatch["UNPAID"] = "unpaid";
    StatusBatch["SUSPEND"] = "suspend";
    StatusBatch["REJECTED"] = "rejected";
    StatusBatch["DELETED"] = "deleted";
})(StatusBatch || (exports.StatusBatch = StatusBatch = {}));
//# sourceMappingURL=enum.ts.js.map
