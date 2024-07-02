import { ApiResponse } from "@/types";
import * as Yup from "yup";
export interface MassTransferSummary {
    totalRecord: number;
    totalAmount: number;
    dataSuccessed: number;
    amountSuccessed: number;
    dataRejected: number;
    amountRejected: number;
    invalidData: number;
    batchReffNo: string;
    filename: string;
    status?: string;
}
export interface TransactionActionSummaryDetailResponse {
    totalRecord: number;
    totalAmount: number;
    pendingActionRecord: number;
    pendingActionAmount: number;
    deliveredProcessingRecord: number;
    deliveredProcessingAmount: number;
    processedRecord: number;
    processedAmount: number;
    batchReffNo: string;
    filename: string;
}
export interface MassTransferSummaryDetail {
    id: string;
    batchReffNo: string;
    filename: string;
    fileFormat: string;
    extension: string;
    createdAt: any;
}
export interface SummaryDetailInquiryResponse extends MassTransferSummaryDetail {
    totalEntryRecord: number;
    totalEntryAmount: number;
    totalSuccessedRecord: number;
    totalSuccessedAmount: number;
    totalRejectedRecord: number;
    totalRejectedAmount: number;
}
export interface SummaryDetailResponse extends MassTransferSummaryDetail {
    totalEntryRecord: number;
    totalEntryAmount: number;
    totalPendingRecord: number;
    totalPendingAmount: number;
    totalProcessingRecord: number;
    totalProcessingAmount: number;
    totalProcessedRecord: number;
    totalProcessedAmount: number;
    isProcessDone: boolean;
    pendingStatus: number;
    totalProcessedPaidAmount: number;
    totalProcessedPaidRecord: number;
    totalProcessedUnpaidRecord: number;
    totalProcessedUnpaidAmount: number;
}
export interface TransactionActionDetailListResponse {
    id: string;
    massTransferId: string;
    customerReffNumber: string;
    debitAccountName: string;
    debitAccountNo: string;
    beneficiaryName: string;
    beneficiaryValidation: string;
    beneficiaryAccountNo: string;
    beneficiaryBankName: string;
    status: string;
    amount: number;
    currency: string;
    transactionRemark: string;
    color: string;
    taskId: string;
    workflow: string;
    productName: string;
    transactionDate: string;
    productType: string;
    sorBorUetr: string;
    statusReason: string;
    createdAt: string;
}
export interface TransactionActionDetailWorkflow {
    nextStep?: string;
    workflow: {
        header: any;
        records: any;
        createdAt: any;
        createdBy: {
            userID: number;
            username: string;
        };
        currentStep: string;
        currentRoleIDs?: number[];
        participantUserIDs?: number[];
    };
    nextStatus?: string;
}
export interface MassTransferSummaryDetailListResponse {
    id: string;
    massTransferId?: string;
    customerReffNumber: string;
    beneficiaryName: string;
    beneficiaryValidation: string;
    beneficiaryAccountNo: string;
    beneficiaryBankName: string;
    transactionDate: string;
    reason: string;
    debitAccountNo: string;
    debitAccountName: string;
    status: string;
    amount: number;
    currency: string;
    transactionRemark: string;
    color?: string;
    statusReason?: string;
    productType?: string;
    sorBorUetr?: string;
    createdAt: string;
}
export interface MakerConfirmationDetailResponse {
    referenceNumber: string;
    totalRecord: 0;
    totalAmount: 0;
    dataSuccessed: string;
    amountSuccessed: string;
    dataRejected: string;
    amountRejected: string;
    invalidData: string;
    status: string;
    filename: string;
}
export interface MassTransferSummaryDetailParams {
    tabStatus: string;
    batchReffNo: string;
    companyID?: string;
}
export interface MassTransferParams {
    batchReffNo: string;
    companyID?: string;
}
export interface MassTransferReceipt {
    batchReffNo: string;
    cuReff: string;
    filename: string;
    transactionId: string;
    format: "pdf" | "xls" | "csv";
}
export interface SummaryDetailFileParams {
    format: "pdf" | "xls" | "csv";
    filename: string;
    batchReffNo: string;
    status: string;
    page?: number;
    limit?: number;
    query?: string;
    filter?: string;
    sort?: string;
    dir?: string;
    transferHistoryStatus?: number;
    companyID?: number;
}
export interface TransactionActionDetailFileParams {
    format: "pdf" | "xls" | "csv";
    filename: string;
    batchReffNo: string;
    page?: number;
    limit?: number;
    query?: string;
    filter?: string;
    sort?: string;
    dir?: string;
    transferHistoryStatus?: number;
    companyID?: number;
}
export interface TransactionActionFileParams {
    format: "pdf" | "xls" | "csv";
    downloadFileName: string;
    actionType: string;
    actionFor: string;
    filename?: string;
    batchReffNo?: string;
    page?: number;
    limit?: number;
    query?: string;
    sort?: string;
    dir?: string;
    debitAccountNo?: string;
    customerReffNo?: string;
    companyID?: number;
}
export interface TransferInquiryFileParams {
    format: "pdf" | "xls" | "csv";
    downloadFileName: string;
    fileFormat?: string;
    fileType?: string;
    uploadedFromDate: string;
    uploadedToDate: string;
    filename?: string;
    batchReffNo?: string;
    page?: number;
    limit?: number;
    query?: string;
    sort?: string;
    dir?: string;
    status?: string;
    companyID?: number;
    isMakerConfirmation?: boolean;
}
export interface RejectionDetailFileParams {
    format: "pdf" | "xls" | "csv";
    filename: string;
    batchReffNo: string;
    limit?: number;
    page?: number;
    query?: string;
    sort?: string;
    dir?: string;
}
export interface RejectionDetailTableParams {
    format: "pdf" | "xls" | "csv";
    limit?: number;
    page?: number;
    query?: string;
    sort?: string;
    dir?: string;
}
export interface RejectionListResponse {
    dataRow: number;
    originalRecords: string;
    reason: string;
}
export type PayloadTransferInquiry = {
    fileFormat: {
        value: string;
        label: string;
    };
    file_type: {
        value: string;
        label: string;
    };
    filename?: {
        value?: string;
        label?: string;
    };
    status?: {
        value?: string;
        label?: string;
    };
    uploadedDate: {
        endDate: string;
        endTime: string;
        startDate: string;
        startTime: string;
    } | null;
};
export type OldPayloadTransferInquiry = {
    fileFormat: {
        value: string;
        label: string;
    };
    file_type: {
        value: string;
        label: string;
    };
    filename?: {
        value?: string;
        label?: string;
    };
    status?: {
        value?: string;
        label?: string;
    };
    uploadedFromDate: string;
    uploadedToDate: string;
};
export type ResponseDetailDataFilter = {
    fileFormat: {
        label: string;
        value: string;
    };
    fileType: {
        label: string;
        value: string;
    };
};
export type TransferInquiryFilterResponse = {
    file: any;
    filename: string[];
    status: any;
};
export type TransferInquiryResponse = {
    massTransferId: string;
    batchReffNo: string;
    fileFormat?: string;
    filename: string;
    totalRecords: number;
    transactionSuccessed: number;
    amountSuccessed: number;
    transactionRejected: number;
    amountRejected: number;
    transactionPending: number;
    amountPending: number;
    status: string;
    isAuthorized: boolean;
    uploadedDate: string;
};
export type TransferInquiryOverviewParams = {
    fileFormat?: string;
    fileType?: string;
    filename?: any;
    status?: string;
    uploadedFromDate: string;
    uploadedToDate: string;
    isMakerConfirmation?: boolean;
};
export interface TransactionActionResponse {
    id: string;
    batchReffNo: string;
    filename: string;
    totalRecords: number;
    totalTransactionAmount: number;
    amountPending: number;
    status: string;
    isAuthorized: boolean;
    isProcessDone: boolean;
}
export type TransactionActionParams = {
    actionType: string;
    actionFor: string;
    filename?: string;
    debitAccountNo?: string;
    batchReffNo?: string;
    customerReffNo?: string;
};
export interface TransactionActionSelectParams {
    actionType: SelectParams[];
    actionFor: SelectParams[];
    batchReffNo: string[];
    customerReffNo: string[];
    debitAccounts: string[];
    filename: string[];
    searchCriteriaData: CriteriaSelectParams[];
}
export interface CriteriaSelectParams {
    filename?: string;
    batchReffNo?: string;
    customerReffNo?: string;
}
export interface SelectParams {
    label: string;
    value: string | number;
}
export interface MassTransferTaskParams {
    mass_transfer_id: string[];
    action: "approve" | "reject";
    pass_code: string;
    rcode?: string;
    is_approved_by_parent?: boolean;
    task_ids?: string[];
    comment?: string;
    reasons?: string;
}
export interface MassTransferTaskWithWorkflowResponse {
    task: TaskTransactionAction | null;
    error: boolean;
    message: string;
}
interface TaskTransactionAction {
    massTransferID: string;
    TaskID: number;
    type: string;
    status: "NullStatus" | "Pending" | "Draft" | "Returned" | "Approved" | "Rejected" | "DeleteRequest" | "Deleted" | "Cancelled";
    step: "NullStep" | "Maker" | "Checker" | "Signer" | "Releaser";
    createdByID: number;
    lastApprovedByID: number;
    lastRejectedByID: number;
    data: string;
    comment: string;
    featureID: string;
    parentID: string;
    isParentActive: true;
    reasons: string;
    lastApprovedByName: string;
    lastRejectedByName: string;
    updatedByID: number;
    updatedByName: string;
    createdByName: string;
    dataBak: string;
    childBak: string;
    workflowDoc: string;
    companyID: number;
    holdingID: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    approvedAt: string;
    rejectedAt: string;
}
export interface CreateRequestBody {
    fileFormat: SelectParams | null;
    fileType: SelectParams | null;
    beneficiaryValidation: SelectParams | null;
    fileDescription: string;
    file: string | FormData;
}
export interface MakerConfirmationDetailResponse {
    id: string;
    massTransferId: string;
    customerReffNumber: string;
    debitAccountName: string;
    debitAccountNo: string;
    sorBorUetr: string;
    productType: string;
    transactionDate: string;
    beneficiaryName: string;
    beneficiaryValidation: string;
    beneficiaryAccountNo: string;
    beneficiaryBankName: string;
    status: string;
    amount: number;
    currency: string;
    transactionRemark: string;
    statusReason: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface BodyResponseSubmit {
    id?: string;
    error?: boolean;
    message?: string;
    filename?: string;
    fileFormat?: string;
    fileType?: string;
    uploadedDate?: Date;
}
export interface UploadMassTransferParams {
    uploadKey: string;
    templateId: string;
    beneficiary: boolean;
    description: string;
}
export type MassTransferCustomerDetailParams = {
    batchReffNo: string;
    cuReff: string;
    transactionId: string;
};
export interface MassTransferTemplateListResponse {
    id: string;
    name: string;
    extension: string;
    path: string;
    companyID: number;
    companyOwner: string;
    data: string;
    createdById: number;
    createdByName: string;
    createdAt: string;
    updatedAt: string;
}
export interface MassTransferCustomerDetailResponse {
    id: string;
    customerReffNumber: string;
    senderAccountName: string;
    senderAccountAlias: string;
    senderAccountNo: string;
    senderCurrency: string;
    beneficiaryCurrency: string;
    beneficiaryAccountName: string;
    beneficiaryAccountNo: string;
    beneficiaryAccountAlias: string;
    transactionType: string;
    beneficiaryBankIdentifier: string;
    bankName: string;
    sentAmount: number;
    fee: number;
    transactionSchedule: string;
    exchangeRate: number;
    receivedAmount: number;
    transactionRemark: string;
    notification: string;
    status: "ALL_STATUS" | "ON_CHECKER" | "ON_SIGNER" | "ON_RELEASER" | "ON_PROCESS" | "SENT_TO_SWIFT" | "SENT_TO_BI" | "SUCCESS" | "FAILED" | "RETUR" | "WAITING_SCHEDULE" | "REJECTED" | "PENDING_MAKER_CONFIRMATION" | "WAITING_PROCESS" | "PARTIALLY_PROCCESSED" | "FILE_COMPLETED" | "FILE_IN_PROCESS";
    simodisInfo: string;
    sor: string;
    bor: string;
    uetr: string;
    reason: string;
    valueDate: string;
    updatedAt: string;
    voucherCode: string;
    purposeCode: string;
    boardPurposeCode: string;
    enrichmentDetails1: string;
    enrichmentDetails2: string;
    enrichmentDetails3: string;
    enrichmentDetails4: string;
    payerBankName: string;
    payerBankAddress: string;
    payerCountryCode: string;
    beneficiaryBankName: string;
    beneficiaryBankAddress: string;
    beneficiaryCountryCode: string;
    intermediaryBankName: string;
    intermediaryBankAddress: string;
    intermediaryCountryCode: string;
    remittanceNumber: string;
}
export interface MassTransferValidate extends Pick<ApiResponse, "code" | "error" | "message"> {
    isValid: boolean;
}
export interface MassTransferFilterOption {
    bankOptions: string[];
    currencyOptions: string[];
    statusOptions: string[];
}
export declare const InitialValueCreateMassTransfer: {
    fileFormat: null;
    fileType: null;
    beneficiaryValidation: null;
    fileDescription: string;
    file: string;
};
export interface MassTransferFileFormatGroupMappingData {
    templateId: string;
    name: string;
    description: string;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
}
export type MassTransferFileFormatGroupMappingResponse = ApiResponse<MassTransferFileFormatGroupMappingData[]>;
export interface MassTransferFileTypeGroupMappingData {
    id: string;
    name: string;
    extension: string;
    path: string;
    companyID: number;
    companyOwner: string;
    data: string;
    createdById: number;
    createdByName: string;
    createdAt: string;
    updatedAt: string;
    templateId: {
        templateId: string;
        name: string;
        description: string;
        createdBy: string;
        createdAt: string;
        updatedBy: string;
        updatedAt: string;
    };
}
export interface MassTransferFileTypeGroupMappingParams {
    templateId: string;
    companyID: string;
}
export type MassTransferFileTypeGroupMappingResponse = ApiResponse<MassTransferFileTypeGroupMappingData[]>;
export declare const ValidationFormCreateMassTransfer: Yup.ObjectSchema<{
    fileFormat: {} | null;
    beneficiaryValidation: string;
    fileType: string;
    file: string | undefined;
    fileDescription: Yup.Maybe<string | undefined>;
}, Yup.AnyObject, {
    fileFormat: {};
    beneficiaryValidation: undefined;
    fileType: undefined;
    file: undefined;
    fileDescription: undefined;
}, "">;
export declare enum MassTransferFilterEnum {
    ALL_TRANSACTION_FILTER = "ALL_TRANSACTION_FILTER",
    FILTER_TRANSACTION_ACTION = "FILTER_TRANSACTION_ACTION",
    FILTER_TAB_ON_PROCESS = "FILTER_TAB_ON_PROCESS",
    FILTER_TAB_HISTORY = "FILTER_TAB_HISTORY"
}
export type MassTransferFilter = MassTransferFilterEnum.ALL_TRANSACTION_FILTER | MassTransferFilterEnum.FILTER_TRANSACTION_ACTION | MassTransferFilterEnum.FILTER_TAB_ON_PROCESS | MassTransferFilterEnum.FILTER_TAB_HISTORY;
export declare const MenuForFilterName: {
    0: MassTransferFilterEnum;
    1: MassTransferFilterEnum;
    2: MassTransferFilterEnum;
    3: MassTransferFilterEnum;
};
export declare const MenuForFilterValue: {
    ALL_TRANSACTION_FILTER: number;
    FILTER_TRANSACTION_ACTION: number;
    FILTER_TAB_ON_PROCESS: number;
    FILTER_TAB_HISTORY: number;
};
export {};
