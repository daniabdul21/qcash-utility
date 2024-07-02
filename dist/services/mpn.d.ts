import { DownloadTransactionTableProps, TransactionActionPayload } from "@/types";
declare const MPNService: (companyID?: string, userID?: string) => {
    getMenus: (props: {
        filter: string;
    }) => Promise<{
        data: any;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getMPNPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    checkCutOffHoliday: (time: string, moduleId: string) => Promise<{
        data: any;
    }>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
    getLimitFile: () => Promise<import("axios").AxiosResponse<any, any>>;
    getListTaxMPN: (body: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getListInquiryRecord: (id: any, body: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getListFailedInquiryRecord: (id: any, body: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    inquiryTaxMPN: (body: any) => Promise<any>;
    inquiryTaxMPNV3: (body: any) => Promise<any>;
    createSingleTaxMPN: (body: any, rCode: string) => Promise<any>;
    createSingleTaxMPNV3: (body: any, rCode: string) => Promise<any>;
    createUploadTaxMPN: (body: any, rCode: string) => Promise<any>;
    createUploadTaxMPNV3: (body: any, rCode: string) => Promise<any>;
    inputUploadTaxMPN: (body: any, rCode: string) => Promise<any>;
    inputUploadTaxMPNV3: (body: any, rCode: string) => Promise<any>;
    getListSingleMPN: (params: any) => Promise<{
        data: any;
        pagination: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getListSingleMPNV3: (params: any) => Promise<{
        data: any;
        pagination: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getListUploadMPN: (params: any) => Promise<{
        data: any;
        pagination: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getListUploadMPNV3: (params: any) => Promise<{
        data: any;
        pagination: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    inquiryBPNMPN: (body: any) => Promise<any>;
    inquiryBPNMPNV3: (body: any) => Promise<any>;
    inquirySSPMPN: (body: any) => Promise<any>;
    inquirySSPMPNV3: (body: any) => Promise<any>;
    inquiryReceiptMPN: (body: any) => Promise<any>;
    inquiryReinquirySingle: (body: any) => Promise<any>;
    inquiryReinquirySingleMPNV3: (body: any) => Promise<any>;
    inquiryReinquiryUpload: (body: any) => Promise<any>;
    inquiryReinquiryUploadV3: (body: any) => Promise<any>;
    bulkInquiryReinquiryUpload: (body: any) => Promise<any>;
    bulkInquiryReinquiryUploadV3: (body: any) => Promise<any>;
    inputSingleTaxMPN: (body: any, rCode: string) => Promise<any>;
    inquiryBillingMPN: (body: any) => Promise<any>;
    getSingleMPN: (taskID: string, body: any) => Promise<any>;
    getSingleMPNV3: (taskID: string, body: any) => Promise<any>;
    getUploadMPN: (taskID: string, params: any) => Promise<{
        data: any;
    }>;
    getUploadMPNV3: (taskID: string, params: any) => Promise<{
        data: any;
    }>;
    getBillingMPN: (taskId: string, rowId: string, body: any) => Promise<any>;
    getBillingMPNV3: (taskId: string, rowId: string, body: any) => Promise<any>;
    updateMPNStatus: (taskId: string, action: TransactionActionPayload["action"], reasons?: string, comment?: string, passCode?: string) => Promise<any>;
    updateTask: (id: string, payload: TransactionActionPayload) => any;
    submitSingleMPN: (taskId: string | number, passCode?: string) => Promise<{
        data: any;
    }>;
    submitCreateUploadMPN: (taskId: string | number, passCode?: string, rCode?: string) => Promise<{
        data: any;
    }>;
    submitInputUploadMPN: (taskId: string | number, passCode?: string, rCode?: string) => Promise<{
        data: any;
    }>;
    downloadSingleDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadSingleDataTableV3: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadUploadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadUploadDataTableV3: (props: DownloadTransactionTableProps) => Promise<void>;
    createCacheMPN: (rcode: string) => Promise<import("axios").AxiosResponse<any, any>>;
    downloadFilePreview: (props: DownloadTransactionTableProps, taskID: string) => Promise<void>;
    downloadFilePreviewV3: (props: DownloadTransactionTableProps, taskID: string) => Promise<void>;
    downloadFailedInquiry: (taskID: string, format: string) => Promise<void>;
    downloadFailedInquiryV3: (taskID: string, format: string) => Promise<void>;
    getIdentifyTypeMPN: (taskID: any) => Promise<any>;
    getIdentifyTypeMPNV3: (taskID: any, itemId: any) => Promise<any>;
    getListCreatedBy: () => Promise<any>;
    getListApprovedBy: () => Promise<any>;
    getListTaxNumber: (body: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    addTaxNumberToFavorite: (body: any) => Promise<any>;
    inquiryBillingMPNV3: (body: any) => Promise<any>;
    inputSingleTaxMPNV3: (body: any, rCode: string) => Promise<any>;
    deleteTaxPayerMPNV3: (body: any) => Promise<any>;
    createFileUpload: (body: any) => Promise<any>;
    createFileUploadV3: (body: any) => Promise<any>;
    inputFileUpload: (body: any) => Promise<any>;
    inputFileUploadV3: (body: any) => Promise<any>;
    downloadTemplate: (body: any) => Promise<void>;
    generateTaxReport: (params: any) => Promise<any>;
    downloadReport: (body: any) => Promise<any>;
    getDownloadReport: (params: any) => Promise<any>;
};
export default MPNService;
