import { ApiResponse } from "../app";
import { GlobalAccountStatementDownloadStatus, GlobalScheduleType, GlobalTransactionStatus, GlobalTransactionType } from "./global";
interface SelectParams<L = string, V = number> {
    label: L;
    value: V;
}
export interface GlobalTransactionActionBatchListResponse {
    batchReffNo: string;
    transactionType: GlobalTransactionType;
    noOfTransaction: number;
    transactionAmount: number;
    makerDate: string;
    status: GlobalTransactionStatus;
    id: number;
    taskId: number;
    fileFormat: string;
    fileName: string;
    totalRecords: number;
    transactionSuccessed: number;
    amountSuccessed: number;
    transactionRejected: number;
    amountRejected: number;
}
export interface GlobalTransactionInquiryBatchListResponse {
    batchReffNo: string;
    transactionType: GlobalTransactionType;
    noOfTransaction: string;
    transactionAmount: string;
    makerDate: string;
    status: GlobalTransactionStatus;
}
export interface GlobalTransactionActionDetailListResponse {
    id: string;
    customerReffNumber: string;
    makerDate: string;
    debitAccountNo: string;
    accountName: string;
    beneficiaryAccountNo: string;
    beneficiaryName: string;
    currency: string;
    transactionType: GlobalTransactionType;
    amount: number;
    status: GlobalTransactionStatus;
}
export type GlobalInternalTransferDetailResponse = ApiResponse<GlobalTransactionInquiryDetailListResponse[]> & {
    summary: GlobalMassTransactionSummaryResponse;
};
export interface GlobalTransactionInquiryDetailListResponse {
    id: string;
    customerReffNumber: string;
    transactionDate: string;
    debitAccountNo: string;
    accountName: string;
    beneficiaryAccountNo: string;
    beneficiaryName: string;
    transactionType: GlobalTransactionType;
    currency: string;
    amount: number;
    transactionStatus: GlobalTransactionStatus;
}
export interface GlobalTransactionActionCriteriaOptionsResponse {
    actionType: SelectParams[];
    transactionType: SelectParams[];
    batchReffNo: string[];
    accountNumber: string[];
}
export interface GlobalTransactionInquiryCriteriaOptionsResponse {
    senderAccountNumber: string[];
    transactionType: SelectParams[];
    customerReffNumber: string[];
    status: SelectParams[];
    batchReffNo: string[];
}
export interface GlobalAccountStatementLogsResponse {
    accountNumber: string;
    startDate: string;
    endDate: string;
    fileType: string;
    companyId: number;
    createdAt: Date;
}
export interface GlobalAccountStatementListResponse {
    accountNumber: string;
    status: GlobalAccountStatementDownloadStatus;
    fileType: string;
    fileName: string;
    startDate: string;
    endDate: string;
    requestCode: string;
    isDownloaded: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface GlobalAccountStatementInquiryResponse {
    filename: string;
    requestCode: string;
    status: string;
    statusDesc: string;
}
export interface GlobalInternalTransferTaskResponse {
    taskId: string;
    type: string;
    status: string;
    step: string;
    featureId: string;
    lastApprovedById: string;
    lastRejectedById: string;
    lastApprovedByName: string;
    lastRejectedByName: string;
    createdByName: string;
    updatedByName: string;
    reasons: string;
    comment: string;
    companyId: string;
    holdingId: string;
    createdAt: string;
    updatedAt: string;
}
export interface TransactionActionSingleResponse {
    swiftCode: number;
    transferredAmount: number;
    isApprover: boolean;
    beneficiaryAccount: string;
    beneficiaryAlias: string;
    beneficiaryBankName: string;
    beneficiaryName: string;
    beneficiaryValidation: string;
    beneficiaryAddress: string;
    companyId: string;
    convertedAmount: number;
    createdAt: string;
    creditCurrency: string;
    currency: string;
    customerRefNo: string;
    debitAccount: string;
    debitAlias: string;
    debitAddress: string;
    debitCurrency: string;
    debitName: string;
    esbRefNo: string;
    fee: number;
    productType: string;
    transactionSchedule: string;
    sentAmount: number;
    statusDescription: string;
    statusId: number;
    statusReason: string;
    taskId: string;
    totalDebitAmount: number;
    transactionAmount: number;
    transactionId: string;
    transactionRefNo: string;
    transactionRemark: string;
    updatedBy: string;
    valueDate: string;
    workflowDoc: string;
}
export interface CustomerDetailResponse {
    id: string;
    senderAccountName: string;
    senderAccountAlias: string;
    senderAccountNumber: string;
    senderAccountCurrency: string;
    beneficiaryAccountName: string;
    beneficiaryAccountAlias: string;
    beneficiaryAccountNumber: string;
    beneficiaryAccountCurrency: string;
    transferId: string;
    taskStatus: string;
    transactionStatus: GlobalTransactionStatus;
    transactionType: GlobalTransactionType;
    sentAmount: number;
    feeAmount: number;
    receivedAmount: number;
    scheduleType: GlobalScheduleType;
    remark: string;
    createdAt: string;
    approvedAt: string;
}
export interface GlobalMassTransactionListResponse {
    batchId: string;
    batchRefferenceNo: string;
    taskId: string;
    isBenefValidation: boolean;
    transactionDate: string;
    fileFormat: string;
    fileType: string;
    fileName: string;
    totalRecords: number;
    totalAmount: number;
    transactionSuccessed: number;
    amountSuccessed: number;
    transactionRejected: number;
    amountRejected: number;
    statusId: string;
    statusDescription: string;
    createdDt: string;
    createdBy: string;
    updatedDt: string;
    updatedBy: string;
    statusName: GlobalTransactionStatus;
    currency: string;
    isAuthorize: boolean;
}
export interface GlobalRejectionDetailListResponse {
    id: string;
    transactionRefNo: string;
    reason: string;
    rowNumber: number;
    massTransferId: string;
}
export interface GlobalMassTransactionDetailListResponse {
    massTransactionId: string;
    CustomerReffNo: string;
    transactionDate: string;
    debitAccountNumber: string;
    debitAccountName: string;
    beneficiaryAccountNo: string;
    beneficiaryName: string;
    beneficiaryValidation: string;
    beneficiaryBankName: string;
    transactionAmount: string;
    productType: string;
    currency: string;
    transactionRemark: string;
    flaggingLegend: string;
    statusId: string;
    statusDescription: string;
    transactionMessage: string;
}
export interface GlobalMassTransactionSummaryResponse {
    totalRecord: number;
    totalAmount: number;
    totalDataSuccessed: number;
    amountSuccessed: number;
    totalDataRejected: number;
    amountRejected: number;
    batchId: string;
    batchRefNo: string;
    fileName: string;
    fileFormat: string;
    extension: string;
    createdDt: string;
    totalPaid: number;
    totalUnpaid: number;
    totalProcess: number;
    amountProcess: number;
    amountPaid: number;
    amountUnpaid: number;
}
export type GlobalMassTransactionDetailResponse = ApiResponse<GlobalMassTransactionDetailListResponse[]> & {
    summary: GlobalMassTransactionSummaryResponse;
};
export interface GlobalFileFormatResponse {
    fileTypeId: string;
    name: string;
}
export interface GlobalFileTypeResponse {
    fileFormatId: string;
    name: string;
    extension: string;
}
export interface GlobalActionForResponse {
    VERIFY: number;
    APPROVE: number;
    RELEASE: number;
}
export interface FileFormatGlobalCreateMassTransfer {
    fileFormatId: string;
    companyId: string;
    name: string;
    extension: string;
    fileId: string;
    fileHeader: string;
    description: string;
    type: string;
    createdBy: string;
    createdDt?: string;
    updatedBy: string;
    updatedDt?: string;
}
export interface GlobalCreateMassTransferResponse {
    batchFileUploadId: string;
    batchId: string;
    batchReffNo: string;
    fileFormat: FileFormatGlobalCreateMassTransfer;
    fileType: string;
    fileName: string;
    companyId: string;
}
export interface GlobalTaskMassTransactionTaskResponse {
    error: boolean;
    message: string;
    task: {
        task_id: string;
    };
}
export interface TransactionDetailInDetailBatch {
    transactionDate: string;
    productType: string;
}
export interface TransactionDetailInDetailTransaction {
    massTransferTransactionId: string;
    batchId: string;
    transactionRefNo: string;
    customerRefNo: string;
    senderAccountNumber: string;
    beneficiaryAccountNumber: string;
    beneficiaryCurrency: string;
    beneficiaryAccountName: string;
    beneficiaryValidation: string;
    beneficiaryBankName: string;
    creditAmount: number;
    transactionRemark: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
    senderAccountName: string;
    statusId: string;
    creditCurrency: string;
    beneficiaryEmailAddress: string;
    dealCode: string;
    uaid: string;
    color: string;
    fee: string;
    rowNumber: string;
    transactionMessage: string;
    statusDescription: string;
    senderCurrency: string;
    senderAccountAlias: string;
    senderBankName: string;
    senderBankAddress: string;
}
export interface TransactionDetailInDetailResponse {
    batch: TransactionDetailInDetailBatch;
    transaction: TransactionDetailInDetailTransaction;
}
export interface GlobalSwiftTransactionInquiryResponse {
    transactionId: string;
    customerRefNo: string;
    valueDate: string;
    debitAccount: string;
    debitName: string;
    beneficiaryAccount: string;
    beneficiaryName: string;
    beneficiaryValidation: string;
    productType: string;
    currency: string;
    beneficiaryBankName: string;
    transactionAmount: number;
    transactionRemark: string;
    transactionRefNo: string;
    statusReason: string;
    statusId: number;
    statusDescription: string;
    workflowDoc: string;
    taskId: string;
    companyId: string;
    updatedBy: string;
    fee: number;
    debitCurrency: string;
    creditCurrency: string;
    beneficiaryAlias: string;
    debitAlias: string;
    convertedAmount: number;
    totalDebitAmount: number;
    createdAt: string;
}
export {};
