import { CCFileUploadRequestBody, DownloadTransactionTableProps, DownloadDetailTable, DownloadDetailReceipt, UpdateTask } from "@/types";
declare const CreditCardUploadService: () => {
    getBankIssuerList: () => Promise<any>;
    getDebitAccList: (companyID: any) => Promise<any>;
    fileDownload: (path: string, param: string) => Promise<import("axios").AxiosResponse<any, any>>;
    submitUploadCCPayment: (payload: CCFileUploadRequestBody) => Promise<import("axios").AxiosResponse<any, any>>;
    getListPaymentHistory: (params: any) => Promise<any>;
    getListCompletedPaymentHistory: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    getListMultiplePayment: (params: any) => Promise<any>;
    getCCPaymentDetail: (taskId: string, final: any, params: any) => Promise<{
        data: any;
        detail: any;
        pagination: any;
    } | {
        detail: string;
        data?: undefined;
        pagination?: undefined;
    }>;
    getCCMultipleDetail: (taskId: string, final: any, params: any) => Promise<any>;
    getFilterData: (params: any) => Promise<any>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadFinalDataTable: (props: DownloadTransactionTableProps, isMultiple?: boolean) => Promise<void>;
    downloadDetailTable: (props: DownloadDetailTable) => Promise<void>;
    downloadDetailReceipt: (props: DownloadDetailReceipt) => Promise<void>;
    downloadReceiptMultiple: (props: DownloadDetailReceipt) => Promise<void>;
    downloadOneToOneList: (props: DownloadTransactionTableProps) => Promise<boolean>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    deleteTask: (taskId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    deleteTaskMultipleCC: (taskIds: string[]) => Promise<import("axios").AxiosResponse<any, any>>;
    sendForApproval: (taskId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    updateTaskStatus: (props: UpdateTask, isMultiple: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    getUserList: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    submitMultipleTask: (payload: any) => Promise<import("axios").AxiosResponse<any, any>>;
    validateCCNumber: (params: any) => Promise<any>;
    validateDebitAcc: (params: any) => Promise<any>;
    updateMultipleTask: (payload: any) => Promise<import("axios").AxiosResponse<any, any>>;
    getSavedCcList: (params: any) => Promise<any>;
    deleteSavedCc: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
    updateSavedCc: (params: any) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default CreditCardUploadService;
