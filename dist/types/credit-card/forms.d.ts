export type FormUploadCC = {
    fileDescription: string;
    scheduleType: number;
    file: File | null;
    key: string;
};
export interface CCFileUploadRequestBody {
    description: string;
    scheduleType: number;
    uploadKey: string;
}
export interface BankIssuerObject {
    code: string;
    isActive: boolean;
    name: string;
}
export interface SubmitRequest {
    isDraft: boolean;
    orderRequest: any;
    taskId?: string;
}
