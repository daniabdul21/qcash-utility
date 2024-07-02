import { CurrencyType } from "./internal-transfer";
export declare enum TransactionActionEnum {
    Approve = "Approve",
    ApproveDelete = "ApproveDelete",
    Cancel = "Cancel",
    Create = "Create",
    Delete = "Delete",
    DeleteRequest = "DeleteRequest",
    Download = "Download",
    DownloadReceipt = "DownloadReceipt",
    Reject = "Reject",
    RejectDelete = "RejectDelete",
    Rework = "Rework",
    Submit = "Submit",
    Confirm = "Confirm"
}
export declare enum TransactionActionLabel {
    Approve = "Approve",
    ApproveDelete = "Approve Request for Delete",
    Cancel = "Cancel",
    Create = "Send for Approval",
    Delete = "Delete",
    DeleteRequest = "Request for Delete",
    Download = "Download",
    DownloadReceipt = "Download Receipt",
    Reject = "Reject",
    RejectDelete = "Reject Request for Delete",
    Rework = "Rework",
    Submit = "Send for Approval",
    Confirm = "Confirm"
}
export declare enum TransactionFunctionEnum {
    Approve = "approve",
    ApproveDelete = "approve",
    Cancel = "cancel",
    Create = "create",
    Delete = "delete",
    DeleteRequest = "delete",
    Download = "download",
    DownloadReceipt = "download",
    Reject = "reject",
    RejectDelete = "reject",
    Rework = "rework",
    Submit = "submit",
    Confirm = "submit"
}
export declare enum TransactionActionMessage {
    Approve = "has been Approved",
    ApproveDelete = "Requested for Delete has been Approved",
    Cancel = "has been Canceled",
    Create = "has been Send for Approval",
    Delete = "has been Deleted",
    DeleteRequest = "Requested for Delete has been Sent",
    Download = "has been Downloaded",
    DownloadReceipt = "has been Downloaded",
    Reject = "has been Rejected",
    RejectDelete = "Request For Delete has been Rejected",
    Rework = "has been Sent for Rework",
    Submit = "has been Submited",
    Confirm = "has been Confirmed"
}
export interface TransactionActionPayload {
    action: TransactionFunctionEnum;
    reasons?: string;
    comment?: string;
}
export declare const TransactionReworkReasons: string[];
export declare const TransactionRejectReasons: string[];
export interface CalculateRatePayload {
    senderCurrency: string;
    receiverCurrency: string;
    amount: number;
    dealCode: string;
    currencyType: CurrencyType;
}
export declare enum AmountPosition {
    DEBET = "DEBET",
    KREDIT = "KREDIT"
}
export interface CalculatorValasPayload {
    senderCurrency: string;
    receivedCurrency: string;
    amount: number;
    amountPosition: AmountPosition;
    dealCode: string;
}
interface Limit {
    limit: string;
    currencyID: string;
    currency: string;
}
interface TransactionLimitModule {
    moduleName: string;
    productID: string;
    limit: Limit[];
}
export interface TransactionLimit {
    companyName: string;
    companyID: string;
    modules: TransactionLimitModule[];
}
export interface TransactionLimitParams {
    page: number;
    limit: number;
    query: string;
    filter: string;
    filterOr: string;
    sort: string;
    dir: "ASC" | "DESC";
    companyID: string;
    holdingID: string;
    customOrder: string;
    companyName: string;
    currency: string;
}
export interface LimitProps {
    available: number;
    used: number;
    total: number;
}
export interface TransactionLimitProps {
    dailyCompanyLimit: LimitProps;
    dailyCompanyGrouplimit: LimitProps;
    holdingCompanyLimit: LimitProps;
    workflowLimit: LimitProps;
    transactionLimit: LimitProps;
}
export {};
