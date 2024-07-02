import type { Task } from "../task";
import type { TransactionWorkflow } from "../workflow";
declare namespace TransferOverviewType {
    type StatusName = "Success" | "Pending" | "Rejected";
    interface TabItem {
        baseHref: string;
        title: string;
        href: string;
        viewHref: string;
        value: string;
        type: string;
        products: string;
    }
    interface StatisticType {
        title: string;
        key: keyof TransactionSummary;
        status: string | StatusName;
    }
    interface TransactionSummary {
        data: any;
        inProgress: string;
        successful: string;
        scheduled: string;
        total: string;
        totalBatch: string;
        unsuccessful: string;
    }
    interface RecentTransaction {
        transactionID: string;
        taskID: string;
        amount: string;
        currency: string;
        status: StatusName;
        timestamp: string;
    }
    interface TransferData {
        transactionId: string;
        currency: string;
        amount: number;
        status: string;
        date: string;
    }
    interface DataMassTransfer extends TransferData {
        batchReffNumber: string;
        customerReffNumber: string;
        id: string;
    }
    interface RecentTransfer {
        task: Task;
        data: TransferData;
        workflow: TransactionWorkflow.Root;
        dataMassTransfer?: DataMassTransfer;
    }
    interface TransferOverviewParams {
        feature: string;
        filter: string;
    }
    interface TransactionSummaryResponse {
        data: TransactionSummary;
    }
}
export type { TransferOverviewType };
