export interface MPPayloadDownloadMasterFile {
    name: string;
    type: string;
    extension: string;
}
export declare enum MPStatusRow {
    ALL = "All",
    CHECKING = "Checking",
    DELETED = "Deleted",
    FAILED = "Failed",
    INVALID_DATA = "Invalid Data",
    ON_CHECKER = "On Checker",
    ON_RELEASER = "On Releaser",
    ON_SIGNER = "On Signer",
    PAID = "Paid",
    READY_TO_SUBMIT = "Ready To Submit",
    REJECTED = "Rejected",
    SUCCESS = "Success",
    UNPAID = "Unpaid",
    WAITING_PAYMENT = "Waiting Payment"
}
