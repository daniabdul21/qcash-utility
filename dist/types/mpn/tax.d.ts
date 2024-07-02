import { BillingCreationMode, BillingCreationType, ScheduleBillingEnumType } from "./enum";
declare namespace MPNTaxType {
    interface CreateBillingForm {
        billingId?: string;
        senderAccount?: any;
        senderAccountNumber: string;
        senderAccountName: string;
        senderAccountAlias: string;
        senderAccountCurrency: string;
        senderAccountUpdatedAt: string;
        senderAccountBallance: string;
        billingCreationType: BillingCreationType;
        billingCreationTypeName: BillingCreationMode;
        taxMapCode: string;
        taxMapName: string;
        taxDepositType: string;
        taxDepositName: string;
        taxAccount: string;
        taxAccountName: string;
        taxAccountNumber: string;
        taxAccountAddress: string;
        notificationEmails: string[];
        taxObjectNumber: string;
        taxDescription: string;
        depositorTaxIdNumber: string;
        depositorName: string;
        depositorAddress: string;
        taxStartPeriod: string;
        taxEndPeriod: string;
        taxYear: string;
        taxDeterminationNumber: string;
        idCardNumber: string;
        idCardName: string;
        idCardAddress: string;
        idCardCity: string;
        scheduleType: ScheduleBillingEnumType;
        scheduledDate?: Date;
        scheduledTime?: string;
        amount?: number;
        isDraft?: boolean;
        passCode?: string;
        success?: boolean;
        next1?: boolean;
        next2?: boolean;
    }
    interface CreateBillingFormV3 {
        billingId?: string;
        senderAccount?: any;
        senderAccountNumber: string;
        senderAccountName: string;
        senderAccountAlias: string;
        senderAccountCurrency: string;
        senderAccountUpdatedAt: string;
        senderAccountBallance: string;
        taxMapCode: string;
        taxMapName: string;
        taxDepositType: string;
        taxDepositName: string;
        taxAccount: string;
        taxAccountName: string;
        taxAccountNumber: string;
        taxAccountAddress: string;
        notificationEmails: string[];
        taxObjectNumber: string;
        taxDescription: string;
        referenceNumber: string;
        taxStartPeriod: string;
        taxEndPeriod: string;
        taxYear: string;
        taxDeterminationNumber: string;
        fullAddress: string;
        address: string;
        urbanVillage: string;
        district: string;
        regency: string;
        province: string;
        scheduleType: ScheduleBillingEnumType;
        scheduledDate?: Date;
        scheduledTime?: string;
        amount?: number;
        isDraft?: boolean;
        passCode?: string;
        success?: boolean;
        next1?: boolean;
        next2?: boolean;
        favorite: boolean;
    }
    interface InputBillingForm {
        billingId?: string;
        senderAccount?: any;
        senderAccountNumber: string;
        senderAccountName: string;
        senderAccountAlias: string;
        senderAccountUpdatedAt: string;
        senderAccountBallance: string;
        senderAccountCurrency: string;
        notificationEmails: string[];
        scheduleType?: string;
        scheduledDate?: Date;
        scheduledTime?: string;
        isDraft?: boolean;
        passCode?: string;
        success?: boolean;
        next1?: boolean;
        next2?: boolean;
    }
    interface Payload {
        taskId?: string;
        fileName: string;
        transactionType: string;
        transactionSchedule: string;
        scheduledAt: string;
        isDraft: boolean;
    }
    interface Upload {
        fileDescription: string;
        transactionSchedule: string;
        scheduledAt: string | null;
        fileName: string;
        isDraft: boolean;
        transactionType: number;
    }
}
export type { MPNTaxType };
