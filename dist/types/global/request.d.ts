import { DownloadTransactionTableProps } from "../transaction-table";
interface SelectParams<L = string, V = number> {
    label: L;
    value: V;
}
export interface GlobalTransactionActionCriteriaOptionsPayload {
    actionType?: number | string;
    accountNumber?: string;
    batchReffNo?: string;
    transactionType?: number | string;
    limit?: number;
    statusesByGlobalActionType?: number[];
}
export interface GlobalTransactionInquiryCriteriaOptionsPayload {
    accountNumber?: string;
    transactionType?: number;
    customerReffNumber?: string;
    status?: number;
    batchReffNumber?: string;
    limit?: number;
}
export interface GlobalTransactionActionBatchListPayload {
    actionType: number;
    accountNumber: string;
    batchReffNo: string;
    transactionType: number;
    transactionStartDate: string;
    transactionEndDate: string;
}
export interface GlobalTransactionInquiryBatchListPayload {
    companyId?: number;
    processId?: string;
    searchCriteria?: SearchCriteriaGlobalTransactionInquiry;
}
export interface SearchCriteriaGlobalTransactionInquiry {
    status?: number;
    batchRefNo?: string;
    debitAccountNumbers?: string[];
    transactionStartDate?: string;
    transactionEndDate?: string;
}
export interface GlobalTransactionActionDetailListPayload {
    batchReffNo: string;
}
export interface GlobalTransactionInquiryDetailListPayload {
    batchReffNo: string;
}
export interface BeneficiaryDetailTypes {
    bicCode: SelectParams<string, string>;
    bankDetails: SelectParams<string, string>;
    accountNumber: number;
    accountName: string;
    alias: string;
    addressDetail: string;
    phoneNumber: number;
    emailAddress: string;
}
export type payloadBenefSendingTypes = {
    id?: string;
    beneficiary_account_number: string;
    beneficiary_account_name: string;
    beneficiary_alias_name: string;
    beneficiary_address: string;
    beneficiary_phone_number: string;
    beneficiary_email: string;
};
export type payloadSearchTypes = {
    accountNumber: string;
    accountName: string;
    alias: string;
};
export type payloadBenefReceivedTypes = {
    id: string;
    accountNumber: string;
    accountName: string;
    accountAlias: string;
    addressDetails: string;
    phoneNumber: string;
    emailAddress: string;
    alias: string;
};
export type payloadDetailsTypes = {
    id: string;
    address: string;
    phoneNumber: string;
    email: string;
    remark: string;
};
export type payloadOtherDetailsTypes = {
    id?: string;
    sender_phone_number: string;
    sender_address: string;
    sender_email: string;
    remark: string;
};
export type formTransactionDetails = {
    customer_reff_no: string;
    beneficiary_account: string;
    beneficiary_name: string;
    amount: string;
    deal_code: string;
};
export type DataOtherDetailsTypes = {
    phoneNumber: number;
    address: string;
    email: string;
    remark: string;
};
export interface GlobalInternalTransferTaskPayload {
    taskIds: number[];
    action: string;
    comment: string;
    reasons: string;
    passCode: string;
}
export interface GlobalDownloadAccountStatementPayload {
    requestCodes: string[];
    filename: string;
}
export interface GlobalAccountStatementInquiryPayload {
    accountNumbers: string[];
    startDate: string;
    endDate: string;
    fileType: string;
}
export interface IFTReceipt {
    batchReffNo: string;
    customerReffNo: string;
}
export interface GlobalDownloadBatchTransactionActionPayload {
    extension: string;
    filename: string;
    actionType: number;
    transactionType: number;
    accountNumber: string;
    batchReffNo: string;
    transactionStartDate: string;
    transactionEndDate: string;
    page: DownloadTransactionTableProps["page"];
    limit: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query: string;
}
export interface GlobalDownloadBatchTransactionInquiryPayload {
    extension: string;
    filename?: string;
    accountNumber?: string | null;
    transactionType?: number | null;
    customerReffNumber?: string | null;
    status?: number;
    transactionStartDate?: string;
    transactionEndDate?: string;
    page?: DownloadTransactionTableProps["page"];
    limit?: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query: string;
}
export interface GlobalDownloadDetailTransactionActionPayload {
    extension: string;
    filename: string;
    batchReffNo: string;
    page?: DownloadTransactionTableProps["page"];
    limit?: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query: string;
}
export interface GlobalDownloadDetailTransactionInquiryPayload {
    extension: string;
    filename: string;
    batchReffNo: string;
    page?: DownloadTransactionTableProps["page"];
    limit?: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query: string;
}
export interface GlobalDownloadCustomerDetailPayload {
    filename: string;
    batchReffNo: string;
    customerReffNo: string;
}
export interface UploadGlobalMassTransferParams {
    process_id: string;
    file_format_id: number;
    file_type: string;
    file_description: string;
    file_id: string;
    file_name: string;
    is_benef_validation: boolean;
    transaction_date: string;
}
export type GlobalMassTransactionParams = {
    processId?: string;
    companyId?: string;
    searchCriteria?: SearchCriteriaParams;
};
export type GlobalRejectionDetailParams = {
    batchId: string;
};
export type SearchCriteriaParams = {
    isBenefValidation?: string;
    fileType?: string[];
    fileFormat?: string[];
    uploadDateFrom?: string;
    uploadDateTo?: string;
    actionForIds?: number[];
    debitAccountNumbers?: string[];
    companyId?: string;
    batchId?: string;
    batchUploadId?: string;
    actionType?: string;
};
export type GlobalMakerConfirmationDetailParams = {
    processId?: string;
    searchCriteria?: SearchCriteriaMakerConfirmationParams;
};
export type SearchCriteriaMakerConfirmationParams = {
    companyId?: string;
    statuses?: string[];
    batchId?: string;
};
export type GlobalTransactionActionDetailParams = {
    processId: string;
    searchCriteria?: SearchCriteriaTransactionActionParams;
};
export type SearchCriteriaTransactionActionParams = {
    companyId?: string;
    statuses?: string[];
    batchId?: string;
};
export type GlobalFileTypeParams = {
    companyId?: string;
    fileFormatId?: string;
    extension?: string;
};
export type GlobalTransactionActionTaskParams = {
    taskIds: string[];
    action: string;
    comment?: string;
    reasons?: string;
    passCode?: string;
};
export type GlobalMakerConfirmationTaskParams = {
    taskId?: string[];
    taskIds?: string[];
    action: string;
    comment?: string;
    reasons?: string;
    passCode?: string;
    isMakerConfirmation?: boolean;
    processId?: string;
};
export type DownloadGlobalMassTransactionBatchTableProps = {
    processId: string;
    companyId?: string;
    filename?: string;
    extension?: string;
    filter: DownloadTransactionTableProps["filter"];
    page: DownloadTransactionTableProps["page"];
    limit: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query: string;
    searchCriteria?: SearchCriteriaParams;
};
export type DownloadGlobalMassTransactionBatchInquiryTableProps = {
    processId: string;
    companyId?: string;
    filename?: string;
    extension?: string;
    filter: DownloadTransactionTableProps["filter"];
    page: DownloadTransactionTableProps["page"];
    limit: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query?: string;
    transactionStartDate?: string;
    transactionEndDate?: string;
    debitAccountNumbers?: string;
    status?: number;
    batchReffNo?: string | null;
};
export type DownloadGlobalMassTransactionDetailTableProps = {
    processId: string;
    companyId?: string;
    filename?: string;
    extension?: string;
    filter: DownloadTransactionTableProps["filter"];
    page: DownloadTransactionTableProps["page"];
    limit: DownloadTransactionTableProps["limit"];
    sort: DownloadTransactionTableProps["getSort"];
    dir: DownloadTransactionTableProps["getDir"];
    query: string;
    searchCriteria?: SearchCriteriaParams;
};
export interface RejectionMassTransactionDetailTableParams {
    extension: "pdf" | "xls" | "csv";
    limit?: number;
    page?: number;
    query?: string;
    sort?: string;
    dir?: string;
    filter?: string;
}
export type DownloadGlobalMassTransactionRejectionTableProps = {
    extension: "pdf" | "xls" | "csv";
    filename: string;
    processId: string;
    batchId: string;
    limit?: number;
    page?: number;
    sort?: string;
    dir?: string;
    filter?: string;
};
export interface GlobalMassTransactionInquiryBatchListPayload {
    transaction: string;
    status: number;
    accountNumber: string;
    batchReffNo: string;
    customerReffNumber: string;
    transactionType: number;
    transactionStartDate: string;
    transactionEndDate: string;
}
export interface GlobalMassTransactionTransactionInquiryBatchListPayload {
    processId?: string;
    searchCriteria?: SearchCriteriaGlobalMassTransactionTransactionInquiry;
}
export interface SearchCriteriaGlobalMassTransactionTransactionInquiry {
    status?: number;
    fileFormat?: number;
    filetype?: number;
    batchId?: string;
    transactionDateFrom?: string;
    transactionDateT?: string;
}
export interface GlobalSwiftSenderPayload {
    accountNumber: string;
}
export interface GlobalSwiftBeneficiaryPayload {
    bankCode: string;
    accountNumber: string;
    currency: string;
    alias: string;
    bankName: string;
    name: string;
    email: string;
    country: string;
    address: string;
    beneficiaryId?: string | null;
}
export interface GlobalSwiftAdditionalInfoPayload {
    transferPurpose: string;
    remark: string;
    remarkBeneficiary: string;
}
export interface GlobalSwiftDetailsPayload {
    amountCurrency: string;
    dealCode: string;
    transactionSchedule: string;
    transferAmount: number;
    additionalInfo: GlobalSwiftAdditionalInfoPayload;
}
export interface GlobalSwiftMakerParams {
    processId: string;
    sender: GlobalSwiftSenderPayload;
    beneficiary: GlobalSwiftBeneficiaryPayload;
    details: GlobalSwiftDetailsPayload;
    fileId?: string;
    isFavourite?: boolean;
}
export type GlobalSwiftTransactionInquiryParams = {
    processId?: string;
    extension?: string;
    searchCriteria?: GlobalSwiftSearchCriteriaParams;
};
export type GlobalSwiftSearchCriteriaParams = {
    transactionDateFrom?: string;
    transactionDateTo?: string;
    actionForIds?: string[];
    debitAccountNumbers?: string[];
    status?: string[];
};
export type GlobalSwiftTransactionActionParams = {
    processId?: string;
    extension?: string;
    searchCriteria?: GlobalSwiftTransactionActionSearchCriteriaParams;
};
export type GlobalSwiftTransactionActionSearchCriteriaParams = {
    transactionDateFrom?: string;
    transactionDateTo?: string;
    actionForIds?: {
        value: string;
        label: string;
    };
    debitAccountNumbers?: {
        value: string;
        label: string;
    };
    actionType?: {
        value: string;
        label: string;
    };
};
export {};
