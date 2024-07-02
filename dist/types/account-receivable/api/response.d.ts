import { ApiResponse } from "../../app";
import { OmitProperties } from "../../helper";
export interface BasicMapping {
    id: string;
    name: string;
}
export interface OverviewBatchDataDetail {
    totalRecord: number;
    totalAmount: number;
    totalDataSuccessed: number;
    amountSuccessed: number;
    totalDataRejected: number;
    amountRejected: number;
}
export interface ReceivableBatchDetail {
    companyCode: string;
    companyName: string;
    batchId: string;
    batchReffNo: string;
    fileName: string;
    mandateCategory: string;
    mandateType: string;
    totalRecord: number;
    dataSuccessed: number;
    dataRejected: number;
    makeDate: string;
    creditAccountNumber: string;
    status: string;
    statusDescription: string;
}
export interface ReceivableBatchDataDetail {
    companyCode: string;
    companyName: string;
    mandateCode: string;
    mandateCategory: string;
    counterPartyAccount: string;
    counterPartyName: string;
    payerBank: string;
    amountType: string;
    mandateType: string;
    expiredDate: string;
    status: string;
}
export type ReceivableBatchDataDetailResponse = ApiResponse<ReceivableBatchDataDetail[]> & {
    overview: OverviewBatchDataDetail;
};
export interface ReceivableBatchDataRejectionDetail {
    dataRow: number;
    originalRecord: string;
    reason: string[];
}
export type ReceivableBatchDataRejectionDetailResponse = ApiResponse<ReceivableBatchDataRejectionDetail[]>;
export type ReceivableBatchDataResponse = ApiResponse<ReceivableBatchDetail[]>;
export type ReceivableActionResponse = OmitProperties<ApiResponse, "data" | "pagination">;
export interface BatchFileUploadData {
    batchReffNo: string;
    fileType: string;
    fileName: string;
    fileFormat: FileFormatData;
    mandateCategory: MandateCategoryData;
    batchType: BatchTypesData;
    mandateType: MandateTypesData;
    companyId: string;
    creditAccountNumber: string;
}
export type BatchFileUploadResponse = OmitProperties<ApiResponse<BatchFileUploadData> & {
    processId: string;
}, "pagination">;
export type BatchFileUploadCheckDuplicateResponse = OmitProperties<ApiResponse<BatchFileUploadData> & {
    processId: string;
}, "pagination" | "data">;
export interface AmountTypeData {
    amountTypeId: string;
    name: string;
    description: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type AmountTypeResponse = OmitProperties<ApiResponse<AmountTypeData[]>, "pagination">;
export interface FileFormatData {
    fileFormatId: string;
    name: string;
    description: string;
    companyId: string;
    extension: string;
    fileId: string;
    fileHeader: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type FileFormatMappingsResponse = OmitProperties<ApiResponse<FileFormatData[]>, "pagination">;
export type FileTypeData = BasicMapping;
export type FileTypeMappingsResponse = OmitProperties<ApiResponse<FileTypeData[]>, "pagination">;
export type AccountStatusData = BasicMapping;
export type AccountStatusMappingsResponse = OmitProperties<ApiResponse<AccountStatusData[]>, "pagination">;
export interface MandateCategoryData {
    mandateCategoryId: string;
    name: string;
    description: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type MandateCategoryMappingsResponse = OmitProperties<ApiResponse<MandateCategoryData[]>, "pagination">;
export interface MandateTypesData {
    mandateTypeId: string;
    name: string;
    description: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type MandateTypeMappingsResponse = OmitProperties<ApiResponse<MandateTypesData[]>, "pagination">;
export interface StatusesData {
    statusId: string;
    name: string;
    description: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type StatusesMappingsResponse = OmitProperties<ApiResponse<StatusesData[]>, "pagination">;
export interface TransactionFrequenciesData {
    transactionFrequencyId: string;
    name: string;
    description: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type TransactionFrequencyMappingsResponse = OmitProperties<ApiResponse<TransactionFrequenciesData[]>, "pagination">;
export interface BatchTypesData {
    batchTypeId: string;
    name: string;
    description: string;
    createdBy: string;
    createdDt: string;
    updatedBy: string;
    updatedDt: string;
}
export type BatchTypeMappingsResponse = OmitProperties<ApiResponse<BatchTypesData[]>, "pagination">;
export interface MandateManagementData {
    mandateId: string;
    companyCode: string;
    companyName: string;
    mandateCode: string;
    mandateCategory: string;
    counterPartyAccount: string;
    counterPartyName: string;
    payerBank: string;
    amountType: string;
    trxAmount: string;
    mandateExpiredDate: string;
    makerDate: string;
    mandateType: string;
    status: string;
    mandateBatchDetailId: string;
}
export type MandateManagementDataResponse = ApiResponse<MandateManagementData[]>;
export interface MandateManagementCreateResponseData {
    batchReffNo: string;
    customerReffNo: string;
    mandateCategory: MandateCategoryData;
    mandateType: MandateTypesData;
    mandateCode: string;
    counterPartyAccountNumber: string;
    counterPartyName: string;
}
export type MandateManagementCreateResponse = OmitProperties<ApiResponse<MandateManagementCreateResponseData>, "pagination"> & {
    processId: string;
};
export type MandateManagementCheckDuplicateResponse = OmitProperties<ApiResponse, "pagination" | "data"> & {
    processId: string;
};
export interface MandateManagementCreateOverride {
    counterPartyValidation: string;
    counterPartyAccountStatus: string;
}
export type MandateManagementCreateOverrideResponse = ApiResponse<MandateManagementCreateOverride> & {
    processId: string;
};
export interface MandateManagementDetailResponseData {
    mandateId: string;
    companyCode: string;
    mandateCode: string;
    mandateCategory: MandateCategoryData;
    creditAccountNumber: string;
    counterPartyAccount: string;
    counterPartyName: string;
    counterPartyAccountStatus: string;
    payerBank: string;
    amountType: AmountTypeData;
    transactionAmount: string;
    transactionFrequency: TransactionFrequenciesData;
    noOfInstallment: string;
    remarks: string;
    effectiveDate: string;
    expiredDate: string;
    counterPartyAddress: string;
    counterPartyPhoneNo: string;
    counterPartyEmail: string;
    mandateTypeId: string;
}
export type MandateManagementDetailResponse = OmitProperties<ApiResponse<MandateManagementDetailResponseData>, "pagination">;
export interface MandateManagementUpdateData {
    batchId: string;
    batchReffNo: string;
    fileName: string;
    mandateCategory: string;
    mandateType: string;
    totalRecord: 0;
    mandateSuccessed: 0;
    mandateRejected: 0;
    makeDate: string;
    creditAccountNumber: string;
    status: string;
    statusDescription: string;
}
export type MandateManagementUpdateDataResponse = OmitProperties<ApiResponse<MandateManagementUpdateData>, "pagination">;
export interface ActionTypesData {
    id: string;
    name: string;
}
export type ActionTypeMappingsResponse = OmitProperties<ApiResponse<ActionTypesData[]>, "pagination">;
export interface ProductsData {
    id: string;
    name: string;
}
export type ProductMappingsResponse = OmitProperties<ApiResponse<ProductsData[]>, "pagination">;
export interface TransactionTypesData {
    id: string;
    name: string;
}
export type TransactionMappingsResponse = OmitProperties<ApiResponse<TransactionTypesData[]>, "pagination">;
export interface MandateCodeData {
    id: string;
    name: string;
}
export type MandateCodeMappingsResponse = OmitProperties<ApiResponse<MandateCodeData[]>, "pagination">;
export type DirectDebitCheckDuplicateResponse = OmitProperties<ApiResponse, "data" | "pagination"> & {
    processId: string;
};
export interface DirectDebitCreateResponseData {
    batchReffNo: string;
    batchType: BatchTypesData;
    mandateCategory: MandateCategoryData;
    mandateType: MandateTypesData;
    companyId: string;
}
export type DirectDebitCreateResponse = OmitProperties<ApiResponse<DirectDebitCreateResponseData>, "pagination"> & {
    processId: string;
};
export interface ReceivableInquiryData {
    companyCode: string;
    companyName: string;
    batchId: string;
    batchReffNo: string;
    fileName: string;
    mandateCategory: string;
    mandateType: string;
    totalTransactionAmount: number;
    transactionAmount: number;
    transactionSuccess: number;
    amountSuccess: number;
    transactionFailed: number;
    amountFailed: number;
    transactionPending: number;
    amountPending: number;
    makerDate: string;
    creditAccountNumber: string;
    status: string;
}
export type ReceivableInquiryDataResponse = ApiResponse<ReceivableInquiryData[]>;
export interface ReceivableInquiryDataDetail {
    companyCode: string;
    companyName: string;
    directDebitId: string;
    directDebitBatchDetailId: string;
    mandateCode: string;
    customerReffNo: string;
    mandateCategory: string;
    counterPartyAccount: string;
    counterPartyName: string;
    payerBank: string;
    transactionAmount: string;
    transactionDate: string;
    remarks: string;
    status: string;
}
export type ReceivableInquiryDataDetailResponse = ApiResponse<ReceivableInquiryDataDetail[]> & {
    overview: OverviewBatchDataDetail;
};
export interface ReceivableInquiryTransactionDataDetail {
    directDebitId: string;
    dierectDebitBatchDetailId: string;
    companyCode: string;
    companyName: string;
    mandateCode: string;
    customerRefNo: string;
    transactionRefNo: string;
    creditAccountNumber: string;
    transactionDate: string;
    transactionAmount: string;
    mandateCategory: string;
    mandateType: string;
    mandateExpiredDate: string;
    transactionStatus: string;
    liquidationRemark: string;
    remarks: string;
    counterPartyAccount: string;
    counterPartyName: string;
    payerBankName: string;
    counterPartyAddress: string;
    counterPartyPhoneNo: string;
    counterPartyEmail: string;
    chargeType: string;
}
export type ReceivableInquiryTransactionDataDetailResponse = OmitProperties<ApiResponse<ReceivableInquiryTransactionDataDetail>, "pagination">;
export interface ReportTypeData {
    id: string;
    name: string;
}
export type ReportTypeMappingsResponse = OmitProperties<ApiResponse<ReportTypeData[]>, "pagination">;
export interface ReceivableSummaryRange {
    id: string;
    name: string;
}
export type ReceivableOverviewSummaryRangeMappingsResponse = OmitProperties<ApiResponse<ReceivableSummaryRange[]>, "pagination">;
export interface ReceivableOverviewOverviewData {
    totalTransaction: number;
    totalSuccessful: number;
    totalInProgress: number;
    totalUnsuccessful: number;
}
export type ReceivableOverviewOverviewResponse = OmitProperties<ApiResponse<ReceivableOverviewOverviewData>, "pagination"> & {
    processId: string;
};
export interface ReceivableOverviewSummaryData {
    totalTransaction: number;
    totalSuccessful: number;
    totalInProgress: number;
    totalUnsuccessful: number;
}
export type ReceivableOverviewSummaryResponse = OmitProperties<ApiResponse<ReceivableOverviewSummaryData>, "pagination"> & {
    processId: string;
};
export interface ReceivableOverviewTransactionInProgressData {
    no: number;
    customerRefNo: string;
    mandateCode: string;
    mandateCategory: string;
    counterPartyName: string;
    amount: string;
}
export type ReceivableOverviewTransactionInProgressResponse = ApiResponse<ReceivableOverviewTransactionInProgressData[]>;
export interface ReceivableOverviewRejectionMandateDetailsData {
    no: number;
    effectiveDate: string;
    mandateCode: string;
    mandateCategory: string;
    counterPartyName: string;
    mandateType: string;
}
export type ReceivableOverviewRejectionMandateDetailsResponse = ApiResponse<ReceivableOverviewRejectionMandateDetailsData[]>;
export interface ReceivableOverviewHistoryData {
    makeDate: string;
    totalAmount: string;
}
export type ReceivableOverviewHistoryResponse = OmitProperties<ApiResponse<ReceivableOverviewHistoryData[]>, "pagination"> & {
    processId: string;
};
export type UploadFileCounterPartyValidationResponse = OmitProperties<ApiResponse<BatchFileUploadData> & {
    processId: string;
}, "pagination">;
export interface CounterPartyValidationData {
    companyCode: string;
    companyName: string;
    batchId: string;
    fileName: string;
    validationCheckDate: string;
    status: string;
    totalRecord: number;
}
export type CounterPartyValidationDataResponse = ApiResponse<CounterPartyValidationData[]>;
export interface CounterPartyValidationBatchDetailData {
    companyCode: string;
    companyName: string;
    counterPartyAccount: string;
    counterPartyName: string;
    counterPartyValidation: string;
    accountStatus: string;
    validationCheckDate: string;
}
export type CounterPartyValidationBatchDetailDataResponse = ApiResponse<CounterPartyValidationBatchDetailData[]>;
export interface ReceivableReportsGetListData {
    id: string;
    fileId: string;
    reportType: string;
    fileName: string;
    fileSize: string;
    periodDate: string;
    requestTime: string;
    status: string;
    companyName: string;
}
export type ReceivableReportsGetListResponse = ApiResponse<ReceivableReportsGetListData[]>;
