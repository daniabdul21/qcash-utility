import { ApiResponse } from "../../app";
import { OmitProperties } from "../../helper";
export interface InquirySPBData {
    transactionId: string;
    transactionDate: string;
    entityCode: string;
    spbNo: string;
    senderInfo: string;
    beneficiaryInfo: string;
    remark: string;
    amount: string;
    currency: string;
    status: string;
    workflow: string;
    taskId: string;
}
export type InquirySPBDataResponse = ApiResponse<InquirySPBData[]>;
export type InquirySPBResponse = OmitProperties<ApiResponse, "data" | "pagination">;
export interface InquirySPBDataDetail {
    transactionId: string;
    customerReference: string;
    instructionCode: string;
    createdDate: string;
    debitAmount: string;
    creditAmount: string;
    chargeType: string;
    chargeAmount: string;
    remark: string;
    notification: string;
    entityCode: string;
    spbNo: string;
    allocationNo: string;
    activityCode: string;
    activityName: string;
    contractorName: string;
    contractNo: string;
    quantum: string;
    ppnBankName: string;
    contractorAddress: string;
    brutoAmount: string;
    ppn: string;
    potAmount: string;
    billCode: string;
    billName: string;
    billShortName: string;
    billAmount: string;
    makerInfo: string;
    checkerInfo: string;
    approverInfo: string;
    status: string;
    debitAccount: string;
    debitAccountName: string;
    beneficiaryAccount: string;
    beneficiaryAccountName: string;
    workflow: string;
    taskStatus: string;
    transactionResponseMessage: string;
    taskId: string;
}
export type InquirySPBDataDetailResponse = ApiResponse<InquirySPBDataDetail>;
export interface BenefInfoFilter {
    beneficiaryInfo: [];
}
export type BenefInfoTableFilterResponse = ApiResponse<BenefInfoFilter>;
export interface EntityCodeFilter {
    entityCode: [];
}
export type EntityCodeTableFilterResponse = ApiResponse<EntityCodeFilter>;
export interface SenderInfoFilter {
    senderInfo: [];
}
export type SenderInfoTableResponse = ApiResponse<SenderInfoFilter>;
export interface SPBNoFilter {
    spbNo: [];
}
export type SPBNoTableFilterResponse = ApiResponse<SPBNoFilter>;
export interface StatusFilter {
    status: [];
}
export type StatusFilterResponse = ApiResponse<StatusFilter>;
export interface TransactionIdFilter {
    transactionId: [];
}
export type TransactionIdTableFilterResponse = ApiResponse<TransactionIdFilter>;
export interface InquiryApprovalData {
    error: string;
    code: number;
    message: string;
    data: any;
}
export type InquiryApprovalDataResponse = ApiResponse<InquiryApprovalData>;
