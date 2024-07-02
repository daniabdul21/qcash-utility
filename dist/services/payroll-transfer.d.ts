import { DownloadTransactionTableProps, PayrollTransferType, TransactionActionPayload } from "@/types";
declare const PayrollTransferService: () => {
    postPayrollTransfer: (body: PayrollTransferType.Data, config?: any) => Promise<{
        data: any;
    }>;
    updatePayrollTransferStatus: (taskId: string, action: TransactionActionPayload["action"], reasons?: string, comment?: string, passCode?: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getPayrollTransferPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getPayrollTransfer: (taskID: string, params: any) => Promise<{
        data: any;
    }>;
    getListPayrollTransfer: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    submitPayroll: (taskId: string | number, passCode?: string) => Promise<{
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
    downloadDataTableDetail: (taskID: string, props: DownloadTransactionTableProps & PayrollTransferType.AdditionalDownloadTransactionTableProps) => Promise<void>;
    downloadReceiptPayroll: (props: Record<string, any>) => Promise<void>;
    checkDuplicateFilename: (params: PayrollTransferType.CheckDuplicateFilenameRequest) => Promise<PayrollTransferType.CheckDuplicateFilenameResponse>;
};
export default PayrollTransferService;
