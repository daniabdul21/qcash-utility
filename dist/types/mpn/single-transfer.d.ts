import { TransactionWorkflow } from "../workflow";
declare namespace SingleMPNType {
    interface Form {
        senderAccountNumber: string;
        senderAccountCurrency: string;
        senderAccountName: string;
        senderAccountAlias: string;
        senderAccountBalance: string;
        senderAccountUpdatedAt: string;
        receiverAccountNumber: string;
        receiverAccountCurrency: string;
        receiverAccountName: string;
        receiverAccountAlias: string;
        receiverAccountBalance: string;
        receiverAccountUpdatedAt: string;
        dealCode?: string | null;
        dealCodeValidity?: boolean;
        currency: string;
        fee: string;
        feeAmount: number;
        amount: string;
        receivedAmount: string;
        transactionSchedule: string;
        scheduledAt?: string | null;
        scheduledDate?: string | null;
        scheduledTime?: string | null;
        recurringFrequency?: string | null;
        recurringPeriodStart?: string | null;
        recurringPeriodEnd?: string | null;
        recurringDay?: string | null;
        recurringDate?: string | null;
        recurringTime?: string | null;
        remark?: string | null;
        exchangeRate: number;
        exchangeRateCurrency?: string;
        limit?: number;
        limitCurrency?: string;
        regBeneficiary?: boolean;
        notificationEmails: {
            email: string;
        }[];
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
    }
    interface Response {
        taskId?: string;
        data: ResponseData;
        task: any;
        workflow: TransactionWorkflow.Root;
        isDraft: boolean;
    }
    interface TemplateData extends Partial<Form> {
        createdAt?: any;
        createdBy?: string;
        updatedAt?: any;
    }
    interface Template {
        template: {
            id?: string;
            templateName: string;
            data?: string;
            createdAt?: any;
            updatedAt?: string;
        };
        data: TemplateData;
    }
}
export type { SingleMPNType };
