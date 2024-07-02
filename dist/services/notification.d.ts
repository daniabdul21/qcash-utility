import { DownloadTransactionTableProps, Task, TaskAction, TaskParams } from "@/types";
export interface Module {
    moduleID: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    moduleEvents: Array<Event>;
}
export interface Event {
    eventID: string;
    module: Module;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    eventVariables: Array<EventVariable>;
}
export interface EventVariable {
    variableID: string;
    name: string;
    table: string;
    columnName: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
export interface NotificationSms {
    smsDeliveryID?: string;
    rekening: string;
    produk: string;
    phoneNumber: string;
    content: string;
    createdByID?: string;
    updatedByID?: string;
    deletedByID?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
export interface NotificationEmail {
    emailDeliveryID?: string;
    produk: string;
    emailTo: string;
    emailCc: string;
    subject: string;
    body: string;
    createdByID?: string;
    updatedByID?: string;
    deletedByID?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
export interface Client {
    clientID: string;
    name: string;
    email: string;
    phone: string;
}
export interface NotificationData {
    notificationID: string;
    companyID: string;
    event: Event;
    code: string;
    description: string;
    createdAt: string;
    createdByID: string;
    updatedAt: string;
    updatedByID: string;
    deletedAt: string;
    deletedByID: string;
    startFrom: string;
    endTo: string;
    startAt: string;
    endAt: string;
    notificationSms: NotificationSms;
    notificationEmail: NotificationEmail;
}
export interface NotificationClient {
    notification: NotificationData;
    eventID: string;
    notificationEmail: NotificationEmail;
    notificationSMS: NotificationSms;
    company: Array<{
        companyID: string;
        name: string;
    }>;
    companyIDs: Array<{
        value: string;
        label: string;
    }>;
    taskID: 0;
    event: Event;
    client: Client;
}
export interface NotificationTask {
    notification: NotificationClient;
    task: Task;
}
export interface NotificationDataList {
    data: Array<NotificationData>;
    pagination: {
        limit: number;
        page: number;
        totalRows: string;
        totalPages: number;
    };
}
export interface NotificationTaskList {
    data: Array<NotificationTask>;
    pagination: {
        limit: number;
        page: number;
        totalRows: string;
        totalPages: number;
    };
}
export interface NotificationTaskList {
    data: Array<NotificationTask>;
    pagination: {
        limit: number;
        page: number;
        totalRows: string;
        totalPages: number;
    };
}
export interface NotificationIndexParams {
    notificationID?: string;
    companyID?: string;
    code?: string;
    description?: string;
}
export interface NotificationParams {
    notification: {
        companyID: string;
        code: string;
        description: string;
    };
    eventID: string;
    notificationEmail: NotificationEmail;
    notificationSMS: NotificationSms;
}
export interface EventVariableParams {
    event: {
        module: {
            name: string;
            moduleEvents: [null];
        };
        name: string;
        eventVariables: [null];
    };
    name: string;
    table: string;
    columnName: string;
}
export interface ClientParams {
    name: string;
    email: string;
    phone: string;
}
export interface PaginationResponse {
    data: Array<Record<string, any>>;
    pagination: {
        limit: number;
        page: number;
        totalRows: string;
        totalPages: number;
    };
}
export interface PaginationParams {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    query?: string;
}
export interface NotificationModuleVariable {
    module: {
        moduleId: string;
        name: string;
    };
    name: string;
    variableID: string;
}
declare const NotificationService: (token?: string | null, url?: string) => {
    getNotificationList: (params: any) => Promise<{
        data: any;
    } | undefined>;
    getActivityLogs: (params: any) => Promise<any>;
    getNotifications: (params?: NotificationIndexParams | null, pagination?: PaginationParams) => Promise<any>;
    getNotificationTask: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getNotification: (TaskID: string) => Promise<any>;
    getClients: () => Promise<any>;
    getNotificationModules: (countryName: string) => Promise<any>;
    getNotificationModuleEvents: (moduleID: any) => Promise<any>;
    getNotificationEvents: () => Promise<any>;
    storeNotification: (params: NotificationParams, isDraft: boolean) => Promise<any>;
    updateNotification: (TaskID: string, isDraft: any, params: NotificationParams) => Promise<any>;
    deleteTaskById: (taskID: string) => Promise<any>;
    getNotificationModuleVariable: (moduleId: any) => Promise<NotificationModuleVariable[]>;
    putTask: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    downloadTableNotification: (props: DownloadTransactionTableProps) => Promise<void>;
    getNotificationTaskV2: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    downloadTableNotificationv2: (props: DownloadTransactionTableProps) => Promise<void>;
    deactivateNotification: (taskID: string) => Promise<any>;
};
export default NotificationService;
