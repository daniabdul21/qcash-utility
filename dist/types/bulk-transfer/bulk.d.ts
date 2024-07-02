declare namespace BulkTransferType {
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
        fileName: string;
        isDraft: boolean;
        transactionType: string;
    }
    interface Payload {
        taskId?: string;
        fileName: string;
        transactionType: string;
        transactionSchedule: string;
        scheduledAt: string;
        isDraft: boolean;
    }
}
export type { BulkTransferType };
