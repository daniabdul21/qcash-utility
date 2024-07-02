import { DownloadTransactionTableProps, TaskParams } from "@/types";
export declare enum TaskAction {
    Approve = "approve",
    Reject = "reject",
    Rework = "rework",
    Cancel = "cancel",
    Delete = "delete",
    DeleteRequest = "delete",
    Submit = "submit",
    All = "All"
}
declare const RoleService: () => {
    getAuthorityLevel: () => Promise<any>;
    getProduct: () => Promise<any>;
    getMenuLicenses: (companyID: string) => Promise<any>;
    getProductAuth: () => Promise<any>;
    getAccountData: (companyID?: string) => Promise<any>;
    getBeneficiaryAccountData: (companyID?: string) => Promise<any>;
    getDepositoAccountData: (companyID?: string) => Promise<any>;
    getRoleTaskById: (taskID?: string) => Promise<any>;
    postRoleTask: (payload: any) => Promise<any>;
    postEditRoleTask: (taskID: string, payload: any) => Promise<any>;
    putTaskRole: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    deleteTaskRole: (taskID: string) => Promise<any>;
    getRoleTasksV2: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    downloadTableRole: (props: DownloadTransactionTableProps) => Promise<void>;
    getRoleTaskMeCreatedApproved: () => Promise<any>;
    getUserCounts: () => Promise<any>;
    getRoleRoleAuthorityLevel: () => Promise<any>;
    getUserRolesV2: (roleID: string) => Promise<any>;
    getActivityLogs: (params: any) => Promise<any>;
    getRdnAccountAccess: (body?: any) => Promise<any>;
};
export default RoleService;
