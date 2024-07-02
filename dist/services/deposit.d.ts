import { TaskStatus, TaskStep, TaskAction, DownloadTransactionTableProps } from "@/types";
export interface PaginationParams {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
}
export interface TransactionActionPayload {
    action: TaskAction;
    reasons?: string;
    comment?: string;
    userName?: string;
    passCode?: string;
}
export declare enum TransactionStatus {
    Reworked = "Reworked",
    Approved = "Approved",
    Pending = "Pending",
    Timeout = "Timeout",
    Progress = "Progress",
    Rejected = "Rejected",
    Failed = "Failed"
}
export interface TaskParams extends PaginationParams {
    status?: TaskStatus | string;
    step?: TaskStep | string;
}
declare const DepositService: () => {
    getAccountData: (params: any) => Promise<any>;
    getDepositData: (params: TaskParams) => Promise<{
        data: any;
    } | undefined>;
    postDeposit: (params: any, isDraft: boolean, passCode?: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getDepositTaskList: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    deleteDeposit: (taskID: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getDepositById: (taskID: string) => Promise<any>;
    putDeposit: (params: any, isDraft: boolean, taskID?: string, passCode?: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getDepositByAccountNumber: (params: any) => Promise<any>;
    getActivityLogs: (params: any) => Promise<any>;
    getTaskByFeatureID: (depositoID: any) => Promise<any>;
    getListTenor: (currency: string) => Promise<any>;
    getDataSystemKey: (key: string) => Promise<any>;
    getVoucher: (voucherCode: string, amount: string, rate: string, accountNumber: string, taskID?: any) => Promise<any>;
    getInterestRate: (currency: string, currencyCode: string) => Promise<any>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    putTask: (taskId: string, payload: TransactionActionPayload) => Promise<any>;
    putManageDeposit: (params: any, isDraft: boolean, taskID: string, passCode?: string) => Promise<import("axios").AxiosResponse<any, any>>;
    postWithdrawDeposit: (taskID: string, passCode?: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getCutOffHolidaySchedule: (time: string) => Promise<any>;
    getPenalty: (params: any) => Promise<any>;
    getDataMenuLicense: (companyID: string) => Promise<any>;
    getFeeByCurrency: (receiverCurrency: string, amount: string) => Promise<any>;
    getDepositPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getWorkflowCompany: (companyID: string) => Promise<any>;
    postValidateAccount: ({ accountNo, remark }: {
        accountNo: string;
        remark?: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default DepositService;
