export declare enum FileFormat {
    UNKNOWN_FILE_FORMAT = "UNKNOWN_FILE_FORMAT",
    "Template Default" = "TEMPLATE_DEFAULT",
    "Template Default XLSX" = "TEMPLATE_DEFAULT_XLSX",
    "Template Default XLS" = "TEMPLATE_DEFAULT_XLS"
}
export declare const ReceivableChargeType: {
    readonly Customer: "Customer";
    readonly "Counter Party": "Counter Party";
};
export declare const ReceivableFileDownloadType: {
    readonly xlsx: "1";
    readonly csv: "2";
};
export type ReceivableFileDownloadTypeIds = typeof ReceivableFileDownloadType[keyof typeof ReceivableFileDownloadType];
export declare const MandateCategory: {
    readonly ON_US: 1;
    readonly OFF_US: 2;
};
export type MandateCategoryIds = typeof MandateCategory[keyof typeof MandateCategory];
export declare const BatchType: {
    readonly "Mandate Management": 1;
    readonly "Direct Debit": 2;
    readonly "Counter Party Validation": 3;
};
export type BatchTypeIds = typeof BatchType[keyof typeof BatchType];
export declare const ReceivableStatusesById: {
    readonly "1": "Pending Maker";
    readonly "2": "On Checker";
    readonly "3": "On Signer";
    readonly "4": "On Releaser";
    readonly "5": "Success";
    readonly "6": "Failed";
    readonly "7": "Retur";
    readonly "8": "Waiting Schedule";
    readonly "9": "Rejected";
    readonly "10": "Waiting Process";
    readonly "11": "On Progress";
    readonly "12": "Proceed Next Process";
    readonly "13": "Approved";
    readonly "14": "Active";
    readonly "15": "Inactive";
    readonly "16": "Expired";
    readonly "17": "File In Process";
    readonly "18": "File Completed";
    readonly "19": "Invalid File Format";
};
export declare const AccountReceivableStatuses: {
    readonly "Pending Maker Confirmation": "Pending Maker Confirmation";
    readonly "On Checker": "On Checker";
    readonly "On Signer": "On Signer";
    readonly "On Releaser": "On Releaser";
    readonly Success: "Success";
    readonly Failed: "Failed";
    readonly Retur: "Retur";
    readonly "Waiting Schedule": "Waiting Schedule";
    readonly Rejected: "Rejected";
    readonly "Waiting Process": "Waiting Process";
    readonly "On Progress": "On Progress";
    readonly "Proceed Next Process": "Proceed Next Process";
    readonly Approved: "Approved";
    readonly Active: "Active";
    readonly Inactive: "Inactive";
    readonly Expired: "Expired";
    readonly "Invalid File Format": "Invalid File Format";
    readonly "File In Process": "File In Process";
    readonly "File Completed": "File Completed";
};
export type AccountReceivableStatusesText = typeof AccountReceivableStatuses[keyof typeof AccountReceivableStatuses];
export declare enum MandateType {
    UNKNOWN_MANDATE_TYPE = "UNKNOWN_MANDATE_TYPE",
    "Adhoc" = "ADHOC",
    "Frequency" = "FREQUENCY"
}
export declare const MandateTypeIds: {
    readonly ADHOC: 1;
    readonly FREQUENCY: 2;
};
export declare enum Status {
    UNKNOWN_STATUS = 0,
    PENDING_MAKER_CONFIRMATION = 1,
    ON_CHECKER = 2,
    ON_SIGNER = 3,
    ON_RELEASER = 4,
    SUCCESS = 5,
    FAILED = 6,
    RETUR = 7,
    WAITING_SCHEDULE = 8,
    REJECTED = 9,
    WAITING_PROCESS = 10
}
export declare const ReceivableReportFileName: {
    readonly "Mandate Management": "Mandate_Report";
    readonly "Direct Debit": "DDI_Report";
};
export type ReportTypeKeys = keyof typeof ReceivableReportFileName;
export declare const ReceivableReportTypeNameMapping: {
    readonly "Mandate Management": "Mandate Report";
    readonly "Direct Debit": "DDI Report";
};
