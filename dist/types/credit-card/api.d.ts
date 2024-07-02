export interface BankIssuerList {
    parameterId: string;
    type: string;
    code: string;
    name: string;
    description: string;
    isActive: boolean;
}
export interface UpdateTask {
    taskId?: any;
    taskIds?: string[];
    action: string;
    reasons: string | undefined;
    comment: string | undefined;
    passCode: string | undefined;
}
export interface DownloadDetailTable {
    format: "pdf" | "xls" | "csv";
    type: boolean;
    taskId: string;
    itemIds: string[];
}
export interface DownloadDetailReceipt {
    taskId?: string;
    itemId?: string[] | string;
    taskIds?: string[];
}
