export declare enum ExternalTransferMethodEnum {
    RTGS = "RTGS",
    Kliring = "Kliring",
    BIFast = "BIFast",
    OnlineTransfer = "OnlineTransfer",
    RemittanceTransfer = "Remmitence"
}
export declare const ExternalTransferMethodLabelEnum: Map<any, string>;
export declare const dayOptions: {
    value: string;
    label: string;
}[];
export interface LicenseProps {
    menuLicenseID: string;
    menuID: string;
    parentID: string;
    label: string;
    isModule: boolean;
    companyID: string;
    isAllowed: boolean;
    fee: string;
    feeCurrency: string;
    feeType: string;
    transactionLimit: Array<{
        limit: string;
        currencyID: string;
        currency: string;
    }>;
    productID: string;
    productName: string;
    orderNumber: string;
    Company: string;
    chargeDate: Array<any>;
    createdAt: Date;
    createdByID: string;
    updatedAt: Date;
    updatedByID: string;
    name: string;
    isEnable: boolean;
    accountID: string;
    accountNumber: string;
    accountName: string;
    accountAlias: string;
    taskID: string;
    isTransactional: boolean;
    moduleID: string;
    penalty: string;
}
export interface SystemProps {
    id: string;
    productID: string;
    key: string;
    value: string;
    type: string;
    description: string;
    createdAt: Date;
    createdByID: string;
    updatedAt: Date;
    updatedByID: string;
}
