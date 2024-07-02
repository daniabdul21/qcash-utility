import { DownloadListDetailParams, SendApprovalVAProps, VAInfoForm, QueryParams, VAInfoParams, SBFileUploadRequestBody } from "@/types";
declare const SmartBillingService: (token?: string | null, baseURL?: string) => {
    searchVAInfo: (params: VAInfoForm) => Promise<{
        code: any;
        error: boolean;
        data: any;
        message: any;
    } | {
        error: any;
        code: any;
        data: null;
        message: any;
    }>;
    SendApprovalVA: (payload: SendApprovalVAProps) => Promise<{
        code: any;
        error: boolean;
        data: any;
        message: any;
    } | {
        error: any;
        code: any;
        data: null;
        message: any;
    }>;
    downloadVAList: (params: DownloadListDetailParams, type: string) => Promise<void>;
    getFilterList: (name: string, type: string, query?: string) => Promise<any>;
    getListTaskVA: (params: Partial<QueryParams & VAInfoParams>) => Promise<any>;
    getListTaskVAByMapId: (mapId: string, type: string) => Promise<any>;
    getRecentTaskVA: (params: Partial<QueryParams & VAInfoParams>) => Promise<any>;
    updateStatusVA: (mapId: number[], type: number, remark?: string, reason?: string) => Promise<import("axios").AxiosResponse<any, any>>;
    downloadMasterFile: (name: string, extension: string) => Promise<import("axios").AxiosResponse<any, any>>;
    submitUpload: (payload: SBFileUploadRequestBody) => Promise<any>;
    downloadListTask: (params: DownloadListDetailParams, type: string) => Promise<void>;
    getBrivaUploadHistory: (params: any) => Promise<any>;
    updateStatusTask: (taskId: string | string[], action: string, comment?: string, reasons?: string, passCode?: string) => Promise<import("axios").AxiosResponse<any, any>>;
    downloadDetailBillingManagement: (params: DownloadListDetailParams) => Promise<void>;
    downloadFilePreviewByTaskId: (params: DownloadListDetailParams, taskId: string, type: string) => Promise<void>;
    getFilePreviewByTaskId: (taskId: string, params: any) => Promise<{
        data: any;
    }>;
    getInvalidBrivaUploadDetail: (taskID: string, params: any) => Promise<{
        data: any;
    }>;
    getListDetailBillingManagement: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    getUploadHistoryByTaskId: (taskID: string, type: string) => Promise<any>;
    sendEmailInvoice: (taskIds: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    checkStatusInvoice: (taskId: number) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    downloadInvoice: (taskId: string, brivaNo: string) => Promise<boolean | XMLHttpRequest>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getSBUserList: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    getPendingTaskHistoryUploadVA: (params: any) => Promise<any>;
};
export default SmartBillingService;
