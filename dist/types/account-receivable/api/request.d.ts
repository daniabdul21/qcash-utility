export interface ReceivableBatchDataDetailSearchCriteria {
    batchId: string;
    batchTypeId: string;
    isHistory: boolean;
    createdDate: string;
    mandateCode: string;
    mandateCategoryId: string;
    statusId: string;
    createdBy: string;
    updatedDate: string;
    updatedBy: string;
}
export interface ReceivableBatchDataDetailRequestBody {
    processId: string;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
    searchCriteria: ReceivableBatchDataDetailSearchCriteria;
}
export interface ReceivableExportBatchDataDetailRequestBody {
    processId: string;
    companyId: string;
    companyCode: string;
    fileTypeId: string;
    exportCriteria: ReceivableBatchDataDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableBatchDataRejectionDetailSearchCriteria {
    batchId: string;
    batchTypeId: string;
}
export interface ReceivableBatchDataRejectionDetailRequestBody {
    processId: string;
    searchCriteria: ReceivableBatchDataRejectionDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableExportBatchDataRejectionDetailRequestBody {
    processId: string;
    companyId: string;
    companyCode: string;
    fileTypeId: string;
    exportCriteria: ReceivableBatchDataRejectionDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableApproveRequestBody {
    processId: string;
    actionType: "approve" | "reject";
    batchIds: string[];
    companyCode: string;
    batchTypeId: string;
}
export interface MandateFileUploadRequestBody {
    processId: string;
    mandateCategoryId: string;
    fileFormatId: string;
    fileType: string;
    mandateTypeId: string;
    fileDescription: string;
    fileId: string;
    fileName: string;
    isDraft: boolean;
    batchTypeId: string;
    companyId: string;
    holdingId: string;
    companyCode: string;
    companyName: string;
}
export interface FileFormatMappingsRequestBody {
    companyId: string;
    batchTypeId: string;
}
export interface CheckDuplicateRequestBody {
    fileName: string;
    processId: string;
    companyId: string;
}
export interface MakerConfirmationSearchCriteria {
    batchTypeId: string;
    batchReffNo: string;
    fileFormatId: string;
    fileName: string;
    mandateCategoryId: string;
    mandateTypeId: string;
    creditAccountNumber: string;
    makeDateFrom: string;
    makeDateTo: string;
}
export type MakerConfirmationRequestBody = {
    processId: string;
    companyId: string;
    searchCriteria: MakerConfirmationSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
};
export interface MakerConfirmationDataExportRequestBody {
    processId: string;
    companyId: string;
    companyCode: string;
    fileTypeId: string;
    exportCriteria: MakerConfirmationSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface MandateManagementDataSearchCriteria {
    companyCode: string;
    companyName: string;
    statusId: string;
    mandateCode: string;
    mandateCategoryId: string;
    mandateTypeId: string;
    counterPartyAccount: string;
    counterPartyName: string;
}
export interface MandateManagementDataExportRequestBody {
    processId: string;
    companyId: string;
    fileTypeId: string;
    exportCriteria: MandateManagementDataSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface MandateManagementDataRequestBody {
    processId: string;
    companyId: string;
    searchCriteria: MandateManagementDataSearchCriteria;
    limit: 0;
    page: 0;
    sort: string;
    dir: string;
    filter: string;
}
export interface MandateManagementCreateRequestBodyData {
    companyCode: string;
    companyName: string;
    mandateCategoryId: string;
    mandateCode: string;
    creditAccountNumber: string;
    mandateTypeId: string;
    counterPartyAccountNumber: string;
    counterPartyName: string;
    counterPartyAccountStatus: string;
    payerBank: string;
    amountTypeId: string;
    transactionAmount: number;
    transactionFrequencyId: string;
    noOfInstallment: string;
    effectiveDate: string;
    expiredDate: string;
    remarks: string;
    address: string;
    phoneNumber: string;
    emailAddress: string;
}
export interface MandateManagementCreateRequestBody {
    processId: string;
    data: MandateManagementCreateRequestBodyData;
    isDraft: boolean;
    companyId: string;
    holdingId: string;
}
export interface MandateManagementCheckDuplicateRequestBody {
    processId: string;
    mandateCode: string;
    companyId: string;
}
export interface MandateManagementCreateOverrideRequestBody {
    processId: string;
    counterPartyAccountNumber: string;
}
export interface MandateManagementDataDetailRequestBody {
    processId: string;
    mandateId: string;
    mandateBatchDetailId: string;
}
export interface MandateManagementUpdateRequestBodyData {
    companyCode: string;
    companyName: string;
    mandateCategoryId: string;
    mandateCode: string;
    creditAccountNumber: string;
    mandateTypeId: string;
    counterPartyAccountNumber: string;
    counterPartyName: string;
    counterPartyAccountStatus: string;
    payerBank: string;
    amountTypeId: string;
    transactionAmount: number;
    transactionFrequencyId: string;
    noOfInstallment: string;
    effectiveDate: string;
    expiredDate: string;
    remarks: string;
    address: string;
    phoneNumber: string;
    emailAddress: string;
}
export interface MandateManagementUpdateDataRequestBody {
    processId: string;
    data: MandateManagementUpdateRequestBodyData;
    isDraft: boolean;
    companyId: string;
    holdingId: string;
}
export interface ReceivableActionDataSearchCriteria {
    batchReffNo: string;
    statusId: string;
    batchTypeId: string;
    transactionType: string;
    creditAccountNumber: string;
    fileName: string;
    mandateTypeId: string;
    makeDateFrom: string;
    makeDateTo: string;
}
export interface ReceivableActionDataExportRequestBody {
    processId: string;
    companyId: string;
    fileTypeId: string;
    companyCode: string;
    exportCriteria: ReceivableActionDataSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableActionDataRequestBody {
    processId: string;
    companyId: string;
    searchCriteria: ReceivableActionDataSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface MandateCodeMappingParams {
    processId?: string;
    companyId: string;
    limit?: number;
    page?: number;
    sort?: string;
    dir?: string;
    filter?: string;
}
export interface DirectDebitCheckDuplicateRequestBody {
    processId: string;
    customerRefNo: string;
    companyId: string;
}
export interface DirectDebitCreateRequestBodyData {
    companyCode: string;
    companyName: string;
    mandateCategoryId: string;
    mandateTypeId: string;
    mandateId: string;
    mandateCode: string;
    customerRefNo: string;
    transactionRefNo: string;
    creditAccountNumber: string;
    transactionDate: string;
    transactionAmount: number;
    remarks: string;
}
export interface DirectDebitCreateRequestBody {
    processId: string;
    data: DirectDebitCreateRequestBodyData;
    chargeType: string;
    isDraft: boolean;
    companyId: string;
    holdingId: string;
}
export interface UploadDirectDebitRequestBody {
    processId: string;
    fileFormatId: string;
    fileType: string;
    fileDescription: string;
    fileId: string;
    fileName: string;
    creditAccountNumber: string;
    transactionDate: string;
    isDraft: boolean;
    companyId: string;
    companyName: string;
    holdingId: string;
    companyCode: string;
    chargeType: string;
}
export interface ReceivableInquiryDataSearchCriteria {
    batchReffNo: string;
    transactionType: string;
    counterPartyAccount: string;
    counterPartyName: string;
    fileName: string;
    mandateCategoryId: string;
    mandateTypeId: string;
    creditAccountNumber: string;
    uploadDateFrom: string;
    uploadDateTo: string;
}
export interface ReceivableInquiryDataExportRequestBody {
    processId: string;
    companyId: string;
    fileTypeId: string;
    companyCode: string;
    exportCriteria: ReceivableInquiryDataSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableInquiryDataRequestBody {
    processId: string;
    companyId: string;
    searchCriteria: ReceivableInquiryDataSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableInquiryDataDetailSearchCriteria {
    batchId: string;
    companyId: string;
}
export interface ReceivableInquiryDataDetailRequestBody {
    processId: string;
    searchCriteria: ReceivableInquiryDataDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableInquiryBatchDetailExportRequestBody {
    processId: string;
    companyId: string;
    fileTypeId: string;
    companyCode: string;
    exportCriteria: ReceivableInquiryDataDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableInquiryBatchRejectionDetailSearchCriteria {
    batchId: string;
}
export interface ReceivableInquiryBatchDetailRejectionRequestBody {
    processId: string;
    searchCriteria: ReceivableInquiryDataDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableInquiryBatchRejectionDetailExportRequestBody {
    processId: string;
    companyId: string;
    fileTypeId: string;
    companyCode: string;
    exportCriteria: ReceivableInquiryBatchRejectionDetailSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableInquiryDataTransactionDetailRequestBody {
    processId: string;
    batchId: string;
    directDebitId: string;
    directDebitBatchDetailId: string;
    companyId: string;
}
export interface ReceivableReportsDownloadCriteria {
    companyId: string;
    reportTypeId: string;
    fileTypeId: string;
    mandateCategoryId: string;
    mandateTypeId: string;
    creditAccountNumber: string;
    uploadDateFrom: string;
    uploadDateTo: string;
}
export interface ReceivableReportsRequestBody {
    processId: string;
    companyId: string;
    downloadCriteria: ReceivableReportsDownloadCriteria;
}
export interface ReceivableReportsGenerateRequestBody {
    companyId: string;
    companyName: string;
    reportTypeId: string;
    fileTypeId: string;
    mandateCategoryId: string;
    mandateTypeId: string;
    creditAccountNumber: string;
    uploadDateFrom: string;
    uploadDateTo: string;
}
export interface ReceivableReportsGetDataRequestBody {
    processId: string;
    companyId: string;
    search: string;
    limit: number;
    page: number;
    sort: string;
    dir: string;
}
export interface ReceivableReportsDownloadBatchData {
    id: string;
    fileId: string;
}
export interface ReceivableReportsDownloadBatchRequestBody {
    data: ReceivableReportsDownloadBatchData[];
}
export interface ReceivableOverviewSummaryRequestBody {
    processId?: string;
    dateRangeId?: string;
}
export interface ReceivableOverviewOverviewRequestBody {
    processId: string;
}
export interface ReceivableOverviewTransactionInProgressRequestBody {
    processId: string;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableOverviewRejectionMandateDetailsRequestBody {
    processId: string;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface ReceivableOverviewHistoryRequestBody {
    processId?: string;
    month?: number;
}
export interface CounterPartyValidationFileUploadRequestBody {
    batchTypeId: string;
    processId: string;
    fileFormatId: string;
    fileType: string;
    fileDescription: string;
    fileId: string;
    fileName: string;
    companyId: string;
    holdingId: string;
    companyCode: string;
    companyName: string;
}
export interface CounterPartyValidationDataSearchCriteria {
    counterPartyAccount: string;
    counterPartyName: string;
    counterPartyAccountStatus: string;
    fileName: string;
    uploadDateFrom: string;
    uploadDateTo: string;
}
export interface CounterPartyValidationDataRequestBody {
    processId: string;
    companyId: string;
    searchCriteria: CounterPartyValidationDataSearchCriteria;
    limit: 0;
    page: 0;
    sort: string;
    dir: string;
    filter: string;
}
export interface CounterPartyValidationDataExportRequestBody {
    processId: string;
    companyId: string;
    companyCode: string;
    fileTypeId: string;
    exportCriteria: CounterPartyValidationDataSearchCriteria;
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface CounterPartyValidationBatchDetailExportRequestBody {
    processId: string;
    companyCode: string;
    fileTypeId: string;
    exportCriteria: {
        batchId: string;
        companyId: string;
    };
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
export interface CounterPartyValidationBatchDetailRequestBody {
    processId: string;
    searchCriteria: {
        bacthId: string;
        companyId: string;
    };
    limit: number;
    page: number;
    sort: string;
    dir: string;
    filter: string;
}
