import { DownloadTransactionTableProps, TaskAction, TaskStatus, TaskStep, UserPayload, UserTaskParams } from "@/types";
export interface PaginationParams {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
}
export interface TaskParams extends PaginationParams {
    status?: TaskStatus | string;
    step?: TaskStep | string;
}
declare const UserService: (baseURL?: string, token?: string | null) => {
    getActivityLogs: (params: any) => Promise<any>;
    getActivityLogsV2: (params: any) => Promise<any>;
    getCompanyUsersLimit: () => Promise<any>;
    getRoleData: (userTypeID: string, idCompany: any) => Promise<any>;
    getRoleUserType: () => Promise<any>;
    getTaskFromUser: (TaskID: string) => Promise<any>;
    getUserByTaskID: (taskID: string) => Promise<any>;
    getUserDetailV2: (companyID: string, username: string) => Promise<any>;
    getUserPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getUserRole: () => Promise<any>;
    getUserTask: (taskID: string) => Promise<any>;
    getUserTaskMeApprovedBy: () => Promise<any>;
    getUserTaskMeCreatedApproved: (currentTable: "activeTask" | "done") => Promise<any>;
    getUserTaskMeCreatedUpdatedBy: (params: any) => Promise<any>;
    getUserTaskMeCreatedBy: () => Promise<any>;
    getUserTasks: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    }>;
    getUserTasksFilter: (params: TaskParams) => Promise<any>;
    getUserTasksHistory: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getUserTasksHistoryV3: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getUserTasksHistoryFilter: (params: TaskParams) => Promise<any>;
    getUserTasksV2: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getUserTasksV3: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getUsers: () => Promise<any>;
    getUsersBricamsDetail: (username: string) => Promise<any>;
    getUsersBricamsDetailv2: (username: string) => Promise<any>;
    getUsersData: (idType: string, dir?: "DESC" | "ASC") => Promise<any>;
    postUserTask: (params: UserTaskParams, isDraft: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    postUserTaskV2: (data: UserPayload) => Promise<import("axios").AxiosResponse<any, any>>;
    putTaskUser: (taskId: string, action: TaskAction, reasons?: any, comment?: any) => Promise<any>;
    putTaskUserV2: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    putUserTask: (taskID: string, params: UserTaskParams, isDraft: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    putUserTaskV2: (taskID: string, data: UserPayload) => Promise<import("axios").AxiosResponse<any, any>>;
    resetPassword: (props: any) => Promise<import("axios").AxiosResponse<any, any>>;
    deleteUserTask: (taskID: string) => Promise<any>;
    deleteUserTaskV2: (taskID: string) => Promise<any>;
    downloadTableUser: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadTableUserV3: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadTableUserApproved: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadTableUserApprovedV3: (props: DownloadTransactionTableProps) => Promise<void>;
    changeStatusUser: (username: string, props: any) => Promise<import("axios").AxiosResponse<any, any>>;
    validateUserNik: (params: any) => Promise<any>;
    getUsersAuthority: (body: any) => Promise<any>;
};
export default UserService;
