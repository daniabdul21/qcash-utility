import { DownloadTransactionTableProps, BulkTransferType, TransactionActionPayload } from "@/types";
declare const BulkTransferService: (token: string | null, baseURL?: string) => {
    getFileFormat: () => Promise<import("axios").AxiosResponse<any, any>>;
    postBulkTransfer: (body: BulkTransferType.Payload) => Promise<{
        data: any;
    }>;
    putBulkTransfer: (taskID: string | number, body: BulkTransferType.Payload) => Promise<{
        data: any;
    }>;
    updateBulkTransferStatus: (taskId: string, action: TransactionActionPayload["action"], reasons?: string, comment?: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getBulkTransferPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getBulkTransfer: (taskID: string, params: any) => Promise<{
        data: any;
    }>;
    getListBulkTransfer: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    submitBulk: (taskId: string | number, isDraft?: boolean) => Promise<{
        data: any;
    }>;
    updateTask: (id: string, payload: TransactionActionPayload) => Promise<{
        data: any;
    }>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    checkCutOffHoilday: (time: string, moduleId: string) => Promise<{
        data: any;
    }>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
    getLimitFile: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default BulkTransferService;
