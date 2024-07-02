import { Accounts, AccountsParams, ActivityLogResponse, ApiResponse, Company, DownloadTransactionTableProps, LiquidityTypes, MenuLicenseParams, MenuLicenseResponse, MenuType, QueryParams, TaskActionEnum, UserBricamsDetail } from "@/types";
export default function LiquidityService(): {
    getTransactionsHistoryDetail: any;
    getLiquiditiesTask: (params: Partial<LiquidityTypes.CashPoolingParams>) => Promise<ApiResponse<LiquidityTypes.CashPoolingTask[]>>;
    createLiquidityTask: (body: any) => Promise<LiquidityTypes.CreateTaskResponse>;
    deactivateTask: (taskID: string, payload: "suspend" | "cancel", passCode: string) => Promise<Omit<ApiResponse<any>, "data" | "pagination">>;
    deleteLiquidityTask: (taskID: string) => Promise<ApiResponse<any>>;
    getLiquidityTask: (taskID: string) => Promise<ApiResponse<LiquidityTypes.CashPoolingTask>>;
    editLiquidityTask: (taskID: string, body: any) => Promise<ApiResponse<any>>;
    reactivateTask: (taskID: string, payload: "activate", passCode: string) => Promise<Omit<ApiResponse<any>, "data" | "pagination">>;
    getTransactionsHistory: (taskId: string) => Promise<ApiResponse<any>>;
    downloadLiquiditiesTask: (props: DownloadTransactionTableProps) => Promise<void>;
    getListTBAValue: () => Promise<ApiResponse<LiquidityTypes.TBAValue[]>>;
    validateDate: (params: {
        startDate: string;
        endDate: string;
        periodType: string;
        periodRange: string;
    }) => Promise<ApiResponse<LiquidityTypes.ValidateDate>>;
    updateTask: (taskID: string, action: TaskActionEnum, reasons?: string, comment?: string, passCode?: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    updateTaskBulkAction: (taskID: string, payload: LiquidityTypes.UpdateTaskPayload) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    getActivityLogs: (params: Partial<QueryParams>) => Promise<ApiResponse<ActivityLogResponse[]>>;
    getLiquidityPendingTask: (params: Partial<QueryParams & {
        services: string;
    }>) => Promise<{
        data: any;
        pagination: import("@/types").IPagination;
    }>;
    getCompanies: (companyName?: string) => Promise<ApiResponse<Company[]>>;
    getCompanyWithQuery: (query: string) => Promise<ApiResponse<Company[]>>;
    getMenuLicenseTasks: (params: Partial<MenuLicenseParams>) => Promise<ApiResponse<MenuLicenseResponse[]>>;
    getDataQueueBA: (params: {
        date: string;
        Search: string;
        code?: string;
    }) => Promise<ApiResponse<{
        time: string;
        schemes: LiquidityTypes.QueueBA[];
    }[]>>;
    getAccounts: (params: Partial<AccountsParams>) => Promise<ApiResponse<Accounts[]>>;
    postDataQueueBA: (params: {
        time: string;
        data: {
            scheduleID: string;
            priority: number;
        }[];
    }) => Promise<any>;
    getCurrencies: (params: Partial<Omit<MenuLicenseParams, "status" | "step">>) => Promise<ApiResponse<MenuType[]>>;
    getUserBricamsDetail: (username: string) => Promise<UserBricamsDetail>;
    downloadTrxHistory: (props: {
        search: string;
        format: "pdf" | "xls" | "csv";
        taskID: string;
        sort: string;
        dir: string;
    }) => Promise<void>;
};
