import { ApiResponse, MassTransferTaskParams, PaginationParams, ParamsGraphStep, Product, TaskAction, TaskData, TaskStatus, MassTransferTaskWithWorkflowResponse } from "@/types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
declare const TaskService: (baseURL?: string, token?: string | null) => {
    getActivityLogs: (type?: string) => (params: any) => Promise<any>;
    getCreatedUpdatedTask: (type: string, column: string, table?: string) => Promise<{
        data: any;
        pagination: any;
    }>;
    getGraphStatus: (status: TaskStatus, service: Product) => Promise<AxiosResponse<any, any>>;
    getGraphStep: (params?: ParamsGraphStep | null) => Promise<any>;
    getGraphStepWorkflow: (params?: null) => Promise<any>;
    getTask: (params: TaskData | null, pagination?: PaginationParams) => Promise<AxiosResponse<any, any>>;
    getTaskNormal: (params: any, pagination?: PaginationParams) => Promise<any>;
    postMassTransferTask: (params: MassTransferTaskParams, config?: AxiosRequestConfig<any>) => Promise<ApiResponse<Array<MassTransferTaskWithWorkflowResponse>>>;
    putTask: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    putTaskAction: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    putTaskEncrypted: (taskId: string, action: TaskAction, reasons?: null, comment?: null) => Promise<any>;
    putTaskMenu: (taskId: string, action: TaskAction, reasons?: any, comment?: any) => Promise<any>;
    getActivityLogNew: (props: {
        type: string;
        [key: string]: string | number;
    }) => Promise<{
        data: any;
    }>;
    getDownloadActivityLog: (props: {
        type: string;
        action: string;
        [key: string]: string;
    }) => Promise<boolean | XMLHttpRequest>;
    getDataPendingTasks: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
};
export default TaskService;
