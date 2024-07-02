import { ProductAuthorityType } from "../authority";
import { UserBricamsDetail } from "../user";
export interface MBPayloadDownloadTemplate {
    name: string;
    label?: string;
    extension: string;
}
export interface MBUploadFileContainerProps {
    authority: ProductAuthorityType;
    bricamsUser: UserBricamsDetail;
    companyID: string;
    debitAccounts: any[];
    getCheckBalance: any;
    productId: string;
    systemParamData: any;
    token: string;
    userID: string;
}
export interface MBFileUploadRequestBody {
    debitAccount: string;
    fileDescription: string;
    filename?: string;
}
export type MBFormUpload = {
    currency: string;
    debitAccountNumber: string;
    debitAccountName: string;
    file: File | null;
    fileDescription: string;
    size?: string;
};
export interface MBPayloadDownloadMasterFile {
    name: string;
    type: string;
    extension: string;
}
export declare enum MBStatusRow {
    ALL = "All",
    CHECKING = "Checking",
    DELETED = "Deleted",
    FAILED = "Failed",
    INVALID_DATA = "Invalid Data",
    ON_CHECKER = "On Checker",
    ON_RELEASER = "On Releaser",
    ON_SIGNER = "On Signer",
    PAID = "Paid",
    READY_TO_SUBMIT = "Ready to Submit",
    REJECTED = "Rejected",
    SUCCESS = "Success",
    SUSPEND = "Suspend",
    UNPAID = "Unpaid",
    WAITING_PAYMENT = "Waiting Payment"
}
