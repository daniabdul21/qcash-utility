import { SingleInternalTransferType } from "../internal-transfer";
import { TransactionWorkflow } from "../workflow";
declare namespace SingleExternalTransferType {
    interface Form extends Omit<SingleInternalTransferType.Form, "feeAmount" | "currency" | "dealCode" | "notificationEmails"> {
        receiverAccountEmail: string[];
        transferCategory: string;
        transferFee: number;
        channelFee: number;
        bankCode?: string;
        receiverBankCode?: string;
        bankName?: string;
        senderType?: string;
        recidencyStatus?: string;
        instructionType?: string;
        idNumber?: string;
        type?: string | null;
        status?: string;
        accountTypeValue?: string;
        rtgsTransaction?: string | number;
    }
    interface Payload {
        taskId?: string;
        data: Omit<Form, "dealCodeValidity" | "limit" | "limitCurrency" | "regBeneficiary">;
        isDraft: boolean;
    }
    interface ResponseData extends Omit<Form, "dealCodeValidity" | "limit" | "limitCurrency" | "regBeneficiary"> {
        transactionID: string;
        status?: string;
        statusMessage?: string;
        parentID?: string;
        sender?: any;
        beneficiary?: any;
        totalFeeAmount?: any;
        feeAmount?: any;
        executedAt?: any;
        remittanceAccount?: string;
        referenceNumber?: string;
        transactionType?: string;
        valueDate?: any;
        sor?: any;
        bor?: any;
        uetr?: any;
        isBeneficiaryFav?: boolean;
        saveAsFavourite?: boolean;
    }
    interface Response {
        taskId?: string;
        data: ResponseData;
        task: any;
        workflow: TransactionWorkflow.Root;
        isDraft: boolean;
    }
    interface Template extends Omit<Form, "senderAccountBalance" | "senderAccountUpdatedAt" | "receiverAccountBalance" | "receiverAccountUpdatedAt" | "feeAmount" | "dealCodeValidity" | "limit" | "limitCurrency"> {
        templateID?: string;
        id?: string;
        templateName: string;
        createdAt: string;
        createdBy: string;
        updatedAt?: string;
    }
    interface TemplateKliring {
        templateName?: string;
        data?: any;
    }
}
export interface externalCalculatePayload {
    senderCurrency: string;
    receiverCurrency: string;
    amount: number;
    dealCode: string;
    currencyType: "Credit" | "Debit";
}
export type { SingleExternalTransferType };
