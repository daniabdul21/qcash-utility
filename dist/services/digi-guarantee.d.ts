import { DownloadTransactionTableProps, PayloadGetData, TaskActionEnum, ThirdpartyTypeEnum, TransactionActionPayload, TransactionFunctionEnum } from "@/types";
export interface Params {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
    step?: number | string;
    status?: string;
}
declare const OnlineBGService: (baseURL?: string, token?: string | null) => {
    getDataMonitoring: (params: Params, paramsTwo: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataThirdParty: (type?: ThirdpartyTypeEnum) => Promise<{
        data: any;
    }>;
    createBGMapping: (data: any) => Promise<{
        data: any;
    }>;
    getDataBGMapping: (params: Params) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDetailBGMapping: (id: string | string[]) => Promise<{
        data: any;
    }>;
    updateBGMapping: (id: string, data: any) => Promise<{
        data: any;
    }>;
    putTask: (taskId: string, action: TaskActionEnum, reasons?: string, comment?: string) => Promise<any>;
    getApplicantName: (thirdPartyID: string) => Promise<{
        data: any;
    }>;
    getDataMappingDigitalBG: (params: Params) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDetailMappingDigitalBG: (id: string | string[]) => Promise<{
        data: any;
    }>;
    createMappingDigitalBG: (data: any) => Promise<{
        data: any;
    }>;
    updateMappingDigitalBG: (id: string, data: any) => Promise<{
        data: any;
    }>;
    getDataBeneficiary: (thirdPartyID: string, type?: string) => Promise<{
        data: any;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getMappingPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getMappingDigitalBGPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    uploadEncode: (data: any) => Promise<{
        data: any;
    }>;
    downloadAttachment: (objectName: string, action: "inline" | "attachment") => Promise<void>;
    putBGIssuing: (data: any, taskId: string) => Promise<{
        data: any;
    }>;
    getDataPublisherBranch: () => Promise<{
        data: any;
    }>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
    checkStatusIssuing: (taskID: string | number) => Promise<{
        data: any;
    }>;
    getDataBranch: (unit: string) => Promise<{
        data: any;
    }>;
    getDataBGIssuing: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataBGIssuingDetail: (taskID: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getDataOpeningBranch: () => Promise<{
        data: any;
    }>;
    getIssuingPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getMappingFilterCompany: () => Promise<{
        data: any;
    }>;
    postBGIssuing: (data: any) => Promise<{
        data: any;
    }>;
    updateBgIssuingStatus: (taskId: string[], action: TransactionFunctionEnum, reasons?: string, comment?: string, passCode?: string, productID?: string) => Promise<{
        data: any;
    }>;
    getCurrencies: () => Promise<any>;
    checkIdividualLimit: (cif: string) => Promise<import("axios").AxiosResponse<any, any>>;
    postValidateAccount: ({ accountNo, remark }: {
        accountNo: string;
        remark?: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    updateTask: (id: string[], payload: TransactionActionPayload) => Promise<{
        data: any;
    }>;
    CheckThirdParty: (company_id: string | number) => Promise<import("axios").AxiosResponse<any, any>>;
    getDefaultMaxLengthBGMapping: () => Promise<import("axios").AxiosResponse<any, any>>;
    getDefaultMaxLengthBGMappingDigital: () => Promise<import("axios").AxiosResponse<any, any>>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    getDataMonitoringNew: (params?: any, type?: boolean) => Promise<any>;
    getDataMonitoringNewFilter: (params?: any) => Promise<any>;
    getURIDownloadBGMonitoring: (param: string) => Promise<{
        data: any;
    }>;
    getDataClaimBG: (payload: PayloadGetData) => Promise<any>;
    uploadBgCancellation: (data: FormData) => Promise<any>;
    uploadFileBgCancellation: (data: FormData) => Promise<any>;
    saveBgCancellationTask: (payload: any, isEdit: boolean) => Promise<any>;
    getWorkflow: (companyId: string, currency: string) => Promise<any>;
    getCancellationTask: (params?: any) => Promise<any>;
    getCancellationTask2: (params?: any) => Promise<any>;
    checkTransactionBGCancellation: (payload: Record<string, string>) => Promise<any>;
    downloadTable: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadTableCancellation: (props: DownloadTransactionTableProps) => Promise<void>;
    getlistTaskGraphCancellation: () => Promise<any>;
};
export default OnlineBGService;
