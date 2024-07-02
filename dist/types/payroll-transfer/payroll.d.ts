declare namespace PayrollTransferType {
    interface Item {
        senderAccount: string;
        receiverAccount: string;
        receiverName: string;
        receiverEmail: string;
        currency: string;
        amount: number;
        dealCode: string;
        fee: number;
        remark: string;
    }
    interface Data {
        fileDescription: string;
        transactionSchedule: string;
        scheduledDate: string;
        scheduledTime: string;
        uploadKey: string;
        originalFileName: string;
        isDraft: boolean;
        isRestricted: "yes" | "no";
        transactionType?: string;
        scheduledAt?: string;
        taskId?: string;
    }
    interface CheckDuplicateFilenameRequest {
        filename: string;
    }
    interface AdditionalDownloadTransactionTableProps {
        encType?: string;
    }
    interface CheckDuplicateFilenameResponse {
        error: boolean;
        code: number;
        message: string;
    }
}
export type { PayrollTransferType };
