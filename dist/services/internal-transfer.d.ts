import { DownloadTransactionTableProps, MultipleInternalTransferType, SingleInternalTransferType, TaskActionEnum, TransactionActionPayload } from "@/types";
declare const InternalTransferService: (token?: string | null, baseURL?: string) => {
    getTransferExchangeRate: (dealtCurrency: string, counterCurrency: string) => Promise<{
        data: any;
    }>;
    getListTransfer: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    getInternalTransferPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getMenuLicense: (companyId: string) => Promise<any>;
    getSingleInternalTransfer: (taskID: string) => Promise<{
        data: any;
    }>;
    getListSingleTransferTemplate: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    getCompanyLimit: (companyId: string) => Promise<any>;
    getWorkflow: (companyId: string, currency: string) => Promise<any>;
    postSingleInternalTransfer: (body: SingleInternalTransferType.Payload, otpValue: string) => Promise<{
        data: any;
    }>;
    postSingleInternalTemplate: (body: any) => Promise<{
        data: any;
    }>;
    putSingleInternalTemplate: (id: string, body: any) => Promise<{
        data: any;
    }>;
    putSingleInternalTransfer: (taskId: string | number, body: SingleInternalTransferType.Payload, otpValue: string) => Promise<{
        data: any;
    }>;
    createMultipleInternalTransfer: (body: MultipleInternalTransferType.Payload, rCode: string, companyID?: string, userID?: string) => Promise<{
        data: any;
    }>;
    updateMultipleInternalTransfer: (taskId: string | number, body: MultipleInternalTransferType.Payload) => Promise<{
        data: any;
    }>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
    updateTransferStatus: (taskId: string[], action: TaskActionEnum, reasons?: string, comment?: string, passCode?: string, productID?: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    deleteSingleInternalTemplate: (id: string) => Promise<{
        data: any;
    }>;
    updateTask: (id: string, payload: TransactionActionPayload) => Promise<{
        error: boolean;
        message: any;
        data?: undefined;
    } | {
        error: boolean;
        message: string;
        data: any;
    } | {
        error: boolean;
        message: any;
    }>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    checkCutOffHoilday: (time: string, moduleId: string) => Promise<{
        data: any;
    }>;
    checkCutOffHoildayForRecurring: (params: any) => Promise<{
        data: any;
    }>;
    getNotifEmailLength: () => Promise<import("axios").AxiosResponse<any, any>>;
    createMultipleCache: (rcode: string) => Promise<import("axios").AxiosResponse<any, any>>;
    downloadReceiptIFT: (props: Record<string, string>) => Promise<void>;
    getCompanyLimitSummary: (companyId: string, holdingId: string, currencyCode: string) => Promise<any>;
    getDataCooperationCurrency: () => Promise<any>;
};
export default InternalTransferService;
