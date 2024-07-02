import { DownloadTransactionTableProps, QueryParams, TransactionActionPayload, ProxyManagementResponse } from "@/types";
declare const ProxyRegistrationService: (token?: string | null, baseURL?: string) => {
    postProxyRegistration: (body: any) => Promise<{
        data: any;
    }>;
    putProxyRegistration: (taskId: string | number, body: any) => Promise<{
        data: any;
    }>;
    updateProxyRegistrationStatus: (taskId: string, action: TransactionActionPayload["action"], reasons?: string, comment?: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    updateProxyStatus: (taskId: string) => Promise<{
        data: any;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getProxyRegistrationPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getProxyRegistration: (taskID: string, params?: any) => Promise<{
        data: any;
    }>;
    getListProxyRegistration: (params: QueryParams) => Promise<{
        data: import("@/types").ProxyManagementData;
        response: import("axios").AxiosResponse<ProxyManagementResponse, any>;
        pagination: import("@/types").IPagination;
    }>;
    updateTask: (id: string, payload: TransactionActionPayload) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
};
export default ProxyRegistrationService;
