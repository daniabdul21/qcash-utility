import { Options } from "../app";
export type FileFormatMapping = {
    fileId: string;
    extension: string;
} & Options<string>;
export type MandateTypeMapping = Options<string>;
export type FormUploadMandate = {
    file: File[] | null;
    key: string;
    mandateTypeId: Options<string>;
    fileFormatId: Options<string>;
    companyName: string;
    companyCode: (Options<string> & {
        holdingId: string;
        companyName: string;
    }) | null;
    fileType: string;
    fileDescription: string;
};
export type MandateManagementSearchCriteria = {
    companyCode: (Options<string> & {
        companyName: string;
    }) | null;
    companyName: string;
    mandateStatus: Options<string>;
    mandateCode: string;
    mandateCategory: Options<string>;
    mandateType: Options<string>;
    counterPartyAccount: string;
    counterPartyName: string;
};
export type FormNewMandate = {
    companyCode: (Options<string> & {
        companyName: string;
        holdingId: string;
    }) | null;
    companyName: string;
    mandateType: string;
    mandateCode: string;
    mandateCategory: Options<string>;
    creditAccountNumber: Options<string> | null;
    counterPartyAccountNumber: string;
    counterPartyName: string;
    counterPartyAccountStatus: string;
    payerBank: Options<string> | null;
    amountType: Options<string>;
    transactionAmount: string;
    transactionFrequency: Options<string>;
    noOfInstallment: string;
    effectiveDate: Date | null;
    expiredDate: Date | null;
    remarks: string;
    address?: string;
    phoneNumber?: string;
    emailAddress?: string;
};
export type FormDirectDebit = {
    companyCode: (Options<string> & {
        companyName: string;
        holdingId: string;
    }) | null;
    companyName: string;
    mandateType: string;
    mandateCode: (Options<string> & {
        id: string;
    }) | null;
    customerReffNo: string;
    transactionReffNo: string;
    creditAccountNumber: Options<string> | null;
    counterPartyAccountNumber: string;
    counterPartyName: string;
    payerBank: Options<string> | null;
    mandateCategory: Options<string>;
    transactionDate: Date | null;
    expiredDate: Date | null;
    transactionAmount?: string;
    remarks: string;
    chargeType: Options<string>;
    address?: string;
    phoneNumber?: string;
    emailAddress?: string;
};
export interface FormMakerConfirmationSearchCriteria {
    batchType: Options<string> | null;
    batchReffNo: string;
    fileFormat: Options<string> | null;
    fileType: string;
    fileName: string;
    mandateCategory: Options<string> | null;
    mandateType: Options<string> | null;
    creditAccountNumber: Options<string> | null;
    uploadedDate: {
        endDate: string;
        endTime: string;
        startDate: string;
        startTime: string;
    } | null;
    companyCode: (Options<string> & {
        companyName: string;
    }) | null;
    companyName: string;
}
export interface FormReceivableActionSearchCriteria {
    batchReffNo: string;
    companyCode: (Options<string> & {
        companyName: string;
    }) | null;
    companyName: string;
    actionType: Options<string> | null;
    product: Options<string> | null;
    transactionType: Options<string> | null;
    creditAccountNumber: Options<string> | null;
    fileName: string;
    mandateType: Options<string> | null;
    transactionDate: {
        endDate: string;
        endTime: string;
        startDate: string;
        startTime: string;
    } | null;
}
export type FormUploadDirectDebit = {
    companyCode: (Options<string> & {
        holdingId: string;
        companyName: string;
    }) | null;
    companyName: string;
    creditAccountNumber: Options<string> | null;
    chargeType: Options<string>;
    transactionDate: Date | null;
    fileFormat: Options<string>;
    fileType: string;
    fileDescription: string;
    file: File[] | null;
    key: string;
};
export interface FormReceivableInquirySearchCriteria {
    companyCode: (Options<string> & {
        companyName: string;
    }) | null;
    companyName: string;
    transactionType: Options<string> | null;
    counterPartyAccount: string;
    counterPartyName: string;
    fileName: string;
    mandateCategory: Options<string>;
    mandateType: Options<string>;
    creditAccountNumber: Options<string> | null;
    uploadedDate: {
        endDate: string;
        endTime: string;
        startDate: string;
        startTime: string;
    } | null;
    batchReffNo: string;
}
export interface FormReceivableReport {
    companyCode: (Options<string> & {
        companyName: string;
    }) | null;
    companyName: string;
    reportType: Options<string> | null;
    mandateType: Options<string>;
    creditAccountNumber: Options<string> | null;
    mandateCategory: Options<string>;
    fileType: Options<string> | null;
    uploadedDate: {
        endDate: string;
        endTime: string;
        startDate: string;
        startTime: string;
    } | null;
}
export interface FormCounterPartyValidationSearchCriteria {
    fileName: string;
    validationCheckDate: {
        endDate: string;
        endTime: string;
        startDate: string;
        startTime: string;
    } | null;
    counterPartyAccount: string;
    counterPartyName: string;
    counterPartyAccountStatus: Options<string> | null;
    companyCode: (Options<string> & {
        companyName: string;
    }) | null;
    companyName: string;
}
export type FormUploadCounterPartyValidation = {
    file: File[] | null;
    key: string;
    fileFormat: Options<string> | null;
    fileType: string;
    fileDescription: string;
    companyCode: (Options<string> & {
        holdingId: string;
        companyName: string;
    }) | null;
    companyName: string;
};
