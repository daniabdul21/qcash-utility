"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivableReportTypeNameMapping = exports.ReceivableReportFileName = exports.Status = exports.MandateTypeIds = exports.MandateType = exports.AccountReceivableStatuses = exports.ReceivableStatusesById = exports.BatchType = exports.MandateCategory = exports.ReceivableFileDownloadType = exports.ReceivableChargeType = exports.FileFormat = void 0;
var FileFormat;
(function (FileFormat) {
    FileFormat["UNKNOWN_FILE_FORMAT"] = "UNKNOWN_FILE_FORMAT";
    FileFormat["Template Default"] = "TEMPLATE_DEFAULT";
    FileFormat["Template Default XLSX"] = "TEMPLATE_DEFAULT_XLSX";
    FileFormat["Template Default XLS"] = "TEMPLATE_DEFAULT_XLS";
})(FileFormat || (exports.FileFormat = FileFormat = {}));
exports.ReceivableChargeType = {
    "Customer": "Customer",
    "Counter Party": "Counter Party",
};
exports.ReceivableFileDownloadType = {
    xlsx: "1",
    csv: "2",
};
exports.MandateCategory = {
    ON_US: 1,
    OFF_US: 2,
};
exports.BatchType = {
    "Mandate Management": 1,
    "Direct Debit": 2,
    "Counter Party Validation": 3,
};
exports.ReceivableStatusesById = {
    "1": "Pending Maker",
    "2": "On Checker",
    "3": "On Signer",
    "4": "On Releaser",
    "5": "Success",
    "6": "Failed",
    "7": "Retur",
    "8": "Waiting Schedule",
    "9": "Rejected",
    "10": "Waiting Process",
    "11": "On Progress",
    "12": "Proceed Next Process",
    "13": "Approved",
    "14": "Active",
    "15": "Inactive",
    "16": "Expired",
    "17": "File In Process",
    "18": "File Completed",
    "19": "Invalid File Format",
};
exports.AccountReceivableStatuses = {
    "Pending Maker Confirmation": "Pending Maker Confirmation",
    "On Checker": "On Checker",
    "On Signer": "On Signer",
    "On Releaser": "On Releaser",
    Success: "Success",
    Failed: "Failed",
    Retur: "Retur",
    "Waiting Schedule": "Waiting Schedule",
    Rejected: "Rejected",
    "Waiting Process": "Waiting Process",
    "On Progress": "On Progress",
    "Proceed Next Process": "Proceed Next Process",
    Approved: "Approved",
    Active: "Active",
    Inactive: "Inactive",
    Expired: "Expired",
    "Invalid File Format": "Invalid File Format",
    "File In Process": "File In Process",
    "File Completed": "File Completed",
};
var MandateType;
(function (MandateType) {
    MandateType["UNKNOWN_MANDATE_TYPE"] = "UNKNOWN_MANDATE_TYPE";
    MandateType["Adhoc"] = "ADHOC";
    MandateType["Frequency"] = "FREQUENCY";
})(MandateType || (exports.MandateType = MandateType = {}));
exports.MandateTypeIds = {
    ADHOC: 1,
    FREQUENCY: 2,
};
var Status;
(function (Status) {
    Status[Status["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
    Status[Status["PENDING_MAKER_CONFIRMATION"] = 1] = "PENDING_MAKER_CONFIRMATION";
    Status[Status["ON_CHECKER"] = 2] = "ON_CHECKER";
    Status[Status["ON_SIGNER"] = 3] = "ON_SIGNER";
    Status[Status["ON_RELEASER"] = 4] = "ON_RELEASER";
    Status[Status["SUCCESS"] = 5] = "SUCCESS";
    Status[Status["FAILED"] = 6] = "FAILED";
    Status[Status["RETUR"] = 7] = "RETUR";
    Status[Status["WAITING_SCHEDULE"] = 8] = "WAITING_SCHEDULE";
    Status[Status["REJECTED"] = 9] = "REJECTED";
    Status[Status["WAITING_PROCESS"] = 10] = "WAITING_PROCESS";
})(Status || (exports.Status = Status = {}));
exports.ReceivableReportFileName = {
    "Mandate Management": "Mandate_Report",
    "Direct Debit": "DDI_Report",
};
exports.ReceivableReportTypeNameMapping = {
    "Mandate Management": "Mandate Report",
    "Direct Debit": "DDI Report",
};
//# sourceMappingURL=enum.ts.js.map
