import { TaskAction, TaskStatus, TaskStep } from "@/types";
export interface PaginationParams {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
}
export declare enum TransactionStatus {
    Reworked = "Reworked",
    Approved = "Approved",
    Success = "Success",
    Pending = "Pending",
    Timeout = "Timeout",
    Progress = "Progress",
    Rejected = "Rejected",
    Failed = "Failed",
    Error = "Error"
}
export interface TaskParams extends PaginationParams {
    status?: TaskStatus | string;
    step?: TaskStep | string;
}
declare const SwiftService: (baseURL: string, token: string | null, companyID: string, userID: string) => {
    getDataSwiftTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDetailDataSwift: (id: any) => Promise<any>;
    getActivityLogs: (params: any) => Promise<any>;
    getCompany: (params: any) => Promise<any>;
    getAccountData: (params: any) => Promise<any>;
    getDataSwifts: (params: any) => Promise<any>;
    postSwiftTransfer: (params: any, dataRouterParter: any, isDraft: boolean, beneficiaryEmails?: Array<any>, validationToken?: {
        userName: string;
        passCode: string;
    }, swiftID?: string, senderData?: {
        accountNumber: string;
        accountName: string;
        accountAlias: string;
        currency: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    validationHardToken: (params: any) => Promise<any>;
    getDataRoutePartner: (params: any) => Promise<any>;
    postFileUpload: (file: any) => Promise<import("axios").AxiosResponse<any, any>>;
    getMenuLicence: (companyId: string, moduleId: string) => Promise<any>;
    getDataExchangeRate: (params: any) => Promise<any>;
    putTask: (taskID: string, action: TaskAction, reasons?: string, comment?: string, validationToken?: {
        userName: string;
        passCode: string;
    }) => Promise<any>;
    getDataCooperationCurrency: () => Promise<any>;
    getBeneficiaryAccountData: (params: TaskParams) => Promise<any>;
    getWorkflowData: (companyId: string, moduleId: string, currency: string) => any;
    getDataFIle: (body: any, action: string) => Promise<any>;
    getTransactionStatus: (taskID: string) => Promise<any>;
    getTransactionStatusMultiple: (taskID: Array<any>) => Promise<any>;
    getCheckingApprover: (param: any) => Promise<any>;
    getBeneficiaryAccountDataByRole: (params: TaskParams) => Promise<{
        data: any;
    } | undefined>;
    getAccountDataByRole: (params: any) => Promise<any>;
    getCutOffSwiftAll: (param: string) => Promise<any>;
    getUsersData: (username: string) => Promise<any>;
    deleteTask: (taskID: string) => Promise<any>;
    getTemplateData: (params: any) => Promise<any>;
    deleteTemplateData: (params: any) => Promise<any>;
    saveTemplateData: (params: any) => Promise<any>;
    updateTemplateData: (params: any) => Promise<any>;
    getCutOffHolidaySchedule: (time: string, currency: string, moduleID?: number) => Promise<any>;
    cancelTask: (taskID: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    downloadReceipSwift: (props: Record<string, string>) => Promise<void>;
    getDataRoutePartnerValidation: (params: any) => Promise<any>;
    getDataRoutePartnerValidationV2: (params: any) => Promise<any>;
};
export default SwiftService;
