import { TaskParams } from "@/types";
export interface PartnerIndexParams {
    announcementID?: string;
    eventTypeID?: string;
    companyID?: string;
    description?: string;
    code?: string;
    title?: string;
    content?: string;
    statusLevel?: string;
    isAutoClose?: boolean;
    isEnabled?: boolean;
    startFrom?: Date;
    endTo?: Date;
}
export interface tokenTableau {
    url: string;
}
declare const SSOService: (token?: string | null) => {
    loginSSO: (clientName: string, redirect: (url: string) => void, errorCallback?: (errorMessage?: any) => void, statusLoading?: (validation: boolean) => void) => Promise<void>;
    loginSSOV2: (params: {
        clientName: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    getClients: () => Promise<import("axios").AxiosResponse<any, any>>;
    getIntegrationConfigs: (params: any) => any;
    upsertClientConfig: (data: any, taskID: any) => Promise<any>;
    getClientTask: (taskID: any) => Promise<any>;
    getClientUserTypes: (clientCode: string) => Promise<any>;
    getClientUsers: (clientCode: string) => (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getClientUserDetail: (clientCode: string, userID: string) => Promise<any>;
    syncUser: (data: any, taskID: any) => Promise<any>;
    approveSyncUser: (taskID: any) => Promise<any> | undefined;
    getClientCompanies: (clientCode: string) => (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getClientCompanyDetail: (clientCode: string, companyID: string) => Promise<any>;
    syncCompany: (data: any, taskID: any) => Promise<any>;
    approveSyncCompany: (taskID: any) => Promise<any> | undefined;
    logoutSSO: (clientName: string) => Promise<void>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getTokenTableau: () => Promise<string | void>;
};
export default SSOService;
