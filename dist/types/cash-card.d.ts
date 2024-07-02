import { DownloadTransactionTableProps } from "./transaction-table";
export declare enum CashcardManagementMapStatuses {
    UNKNOWN_STATUS_MAP = 0,
    ACTIVE = 1,
    DRAFT = 2,
    RETURNED = 3,
    APPROVED = 4,
    REJECTED = 5,
    DELETE_REQUEST = 6,
    DELETED = 7,
    CANCELLED = 8,
    SUCCESS = 9,
    FAILED = 10,
    APPROVAL_REQUEST = 11
}
export interface CreateMapCorporateCodeContainerPorps {
    signer: boolean;
}
export interface CashCardManagementMapItem {
    id: number;
    corporateCode: string;
    companyId: string;
    companyCode: string;
    companyName: string;
    createdAt: string;
    createdBy?: string;
    error?: boolean;
    status?: string;
    message?: string;
}
export interface CashCardManagementFormValues {
    corporateCode: string;
    company: {
        companyName: string;
        companyLoginCode: string;
        companyID: string;
    } | null;
}
export interface CashCardManagementItem {
    companyCode: string;
    companyId: string;
    companyName: string;
    corporateCode: string;
    createdAt: string;
    createdBy: string;
    historyId: string;
    status: CashcardManagementMapStatuses;
    statusDesc: string;
    taskId: string;
    mappingId: string;
    updatedAt: string;
    updatedBy: string;
    reason?: string;
    remark?: string;
}
export interface ColumnHeader {
    Header: string;
    accessor: string;
    width: number;
    sticky?: boolean;
    type: "select" | "date";
}
export interface CashCardColumnHeader extends ColumnHeader {
    value: {
        pending?: string;
        done?: string;
        upload?: string;
    };
}
export interface ResponseItem {
    taskId: string;
    uploadId: string;
    error: boolean;
    message: string;
}
export interface MappedBulkActionResponse {
    task: {
        TaskID: string;
    };
    error: boolean;
    message: string;
}
export interface ListTabs<T> {
    id: number;
    label: string;
    value: T;
}
export interface CashCardManagementParams {
    type: "pending" | "done" | "upload";
}
export interface unformatedTaskDate {
    unformatedCreatedAt?: Date;
    unformatedUpdatedAt?: Date;
}
export interface DownloadListDetailMappingParams extends DownloadTransactionTableProps {
    getSearch: string;
}
export interface CashCardSettingFormValues {
    daily: number;
    email?: string;
    plafon: number;
    pointToPoint?: {
        label: string;
        value: number;
    } | null;
    requestType: {
        label: string;
        value: number;
    } | null;
    virtualAccount: {
        label: string;
        value: string;
    } | null;
}
export declare enum CashcardRequestType {
    REGULAR = 1,
    TOPUP = 2,
    BLOCK = 3,
    UNBLOCK = 4,
    MATURITY_ACTIVITY = 5,
    LIFECYCLE_DAYS = 6,
    LIFECYCLE_POINT_TO_POINT = 7
}
export interface CACVAListItem {
    customerName: string;
    virtualAccount: string;
}
export declare enum CACStatusEnum {
    UNKNOWN_STATUS = 0,
    ON_CHECKER = 1,
    ON_SIGNER = 2,
    ON_RELEASER = 3,
    REJECTED = 4,
    APPROVED = 5,
    DELETED = 6
}
export declare enum CACStatusStrEnum {
    UNKNOWN_STATUS = 0,
    ON_CHECKER = "On Checker",
    ON_SIGNER = "On Signer",
    ON_RELEASER = "On Releaser",
    REJECTED = "Rejected",
    APPROVED = "Approved",
    DELETED = "Deleted"
}
export interface CACListSummaryPayload {
    companyId?: string;
    corporateCode?: string;
    startDate: string;
    endDate: string;
}
export interface CashCardSummaryFormValues {
    corporateCode: {
        label: string;
        value: string;
        disabled?: boolean;
    } | null;
    company: {
        companyName: string;
        companyLoginCode: string;
        companyID: string;
    } | null;
    dateRange: [Date | null, Date | null];
}
export interface CashCardSummaryItem {
    corporateName: string;
    corporateCode: string;
    virtualAccount: string;
    virtualName: string;
    openingBalance: string;
    reportTotalAmountDebit: string;
    closingBalance: string;
}
export interface CashCardUploadPayload {
    uploadKey: string;
    description: string;
    fileFormatId: number;
}
export interface DownloadFilePreviewParams extends DownloadTransactionTableProps {
    getSearch: string;
    uploadId: string;
}
export declare enum CashCardUploadStatusStrEnum {
    FILE_IN_PROCESS = "File In Process",
    INVALID_FILE_FORMAT = "Invalid File Format",
    INVALID_DATA = "Invalid Data",
    ON_CHECKER = "On Checker",
    ON_SIGNER = "On Signer",
    ON_RELEASER = "On Releaser",
    REJECTED = "Rejected",
    APPROVED = "Approved"
}
interface CashCardUploadItem {
    cashcardFileUploadId: string;
    uploadId: string;
    taskId: string;
    createdAt: Date | undefined;
    createdBy: string;
    updatedAt: Date | undefined;
    updatedBy: string;
    status: CashCardUploadStatusStrEnum;
    fileName: string;
    fileDescription?: string;
    reason?: string;
    remark?: string;
    validRecord: string;
    invalidRecord: string;
}
export interface CashCardRemigratePayload {
    corporateCode: string;
    appKey: string;
    userInfo: {
        userId: string;
        companyId: string;
        roleIds: string[];
        userName: string;
        companyName: string;
        userType: string;
    };
}
export interface CashCardManagementUploadItem extends CashCardUploadItem {
    processDataValid: string;
    processDataInvalid: string;
}
export interface CashCardUploadSettingItem extends CashCardUploadItem {
    totalSettingFailed: string;
    totalSettingSuccess: string;
}
export {};
