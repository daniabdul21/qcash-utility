declare namespace MultipleBIFASTTransferType {
    interface Form {
        senderAccountNumber: string;
        senderAccountCurrency: string;
        senderAccountName: string;
        senderAccountAlias: string;
        senderAccountBalance: string;
        receivers: any;
        receiverAccountName: string;
        receiverAccountAlias: string;
        receiverAccountNumber: string;
        receiverAccountBalance: string;
        receiverAccountCurrency: string;
        receiverBankName: string;
        receiverBankCode: string;
        currency: string;
        amount: string;
        scheduledDate: string;
        scheduledAt: string;
        scheduledTime: string;
        transactionSchedule: string;
        fee: string;
        dealCode: string;
        remark: string;
        exchangeRate: string;
        receivedAmount: string;
        exchangeRateCurrency: string;
        dealCodeValidity: string;
        feeAmount: string;
        limit: string;
        limitCurrency: string;
    }
    interface Payload {
        taskId?: string;
        data: Omit<Form, "dealCodeValidity" | "limit" | "limitCurrency" | "regBeneficiary">;
        isDraft: boolean;
    }
    interface ResponseData extends Omit<Form, "dealCodeValidity" | "limit" | "limitCurrency" | "regBeneficiary"> {
        transactionID: string;
    }
    interface Response {
        taskId?: string;
        data: ResponseData;
        task: any;
        isDraft: boolean;
    }
    interface Template extends Omit<Form, "senderAccountNumber" | "senderAccountCurrency" | "senderAccountName" | "senderAccountAlias" | "senderAccountBalance" | "receivers"> {
        templateName: string;
        createdDate: string;
        createdBy: string;
    }
}
export type { MultipleBIFASTTransferType };
