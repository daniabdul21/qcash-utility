import { CashCardManagementParams, CashCardRemigratePayload, CashCardUploadPayload, DownloadFilePreviewParams, DownloadListDetailMappingParams, QueryParams } from "@/types";
declare const CashCardService: () => {
    downloadListMapping: (params: DownloadListDetailMappingParams) => Promise<boolean | XMLHttpRequest>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getListMappingCorporateCode: (params: Partial<QueryParams & CashCardManagementParams>) => Promise<any>;
    getDetailMaping: (data: any) => Promise<any>;
    getMapCorporateCode: (params: Partial<QueryParams>) => Promise<any>;
    submitMapCorporateCode: (data: any) => Promise<any>;
    updateMappingStatus: (data: any) => Promise<any>;
    getListVA: () => Promise<any>;
    getVADetail: (data: {
        virtualAccount: string;
    }) => Promise<any>;
    getTaskList: (params: Partial<QueryParams & CashCardManagementParams>) => Promise<any>;
    saveSetting: (data: any) => Promise<any>;
    updateRequestStatus: (data: any) => Promise<any>;
    getTaskById: (data: any) => Promise<any>;
    downloadListSetting: (params: DownloadListDetailMappingParams) => Promise<boolean | XMLHttpRequest>;
    getListSummary: (data: {
        companyId?: string;
        corporateCode?: string;
        startDate: string;
        endDate: string;
    }) => Promise<any>;
    getListCorpCode: (data: QueryParams) => Promise<any>;
    uploadMapping: (data: CashCardUploadPayload) => Promise<any>;
    getUploadMappingDetail: (data: any) => Promise<any>;
    uploadMappingPreview: (params: Partial<QueryParams & {
        uploadId: string;
    }>) => Promise<any>;
    downloadFilePreview: (params: DownloadFilePreviewParams) => Promise<boolean | XMLHttpRequest>;
    downloadMasterFile: (name: string, extension: string) => Promise<import("axios").AxiosResponse<any, any>>;
    uploadSetting: (data: CashCardUploadPayload) => Promise<any>;
    getUploadSettingDetail: (data: any) => Promise<any>;
    getUploadSettingFilePreview: (params: Partial<QueryParams & {
        uploadId: string;
    }>) => Promise<any>;
    remigrateVA: (data: CashCardRemigratePayload) => Promise<any>;
};
export default CashCardService;
