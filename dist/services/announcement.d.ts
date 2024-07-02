import { AnnouncementIndexParams, PaginationParams, TaskParams, AnnouncementParams, DownloadTransactionTableProps } from "@/types";
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
declare const AnnouncementService: (baseURL?: string, token?: string) => {
    getAnnouncements: (params?: AnnouncementIndexParams | null, pagination?: PaginationParams, isActiveOnly?: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    getAnnouncementTask: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getAnnouncementGraph: (params: {
        isActiveOnly?: boolean;
    }) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getAnnouncementTaskMeCreatedApproved: () => Promise<any>;
    postAnnouncement: (payload: any) => Promise<any>;
    putAnnouncement: (taskID: string, payload: any) => Promise<any>;
    putTaskAnnouncement: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    deleteTaskAnnouncement: (taskID: string) => Promise<any>;
    storeAnnouncement: (params: AnnouncementParams, isDraft: boolean) => Promise<any>;
    updateAnnouncement: (TaskID: string, params: AnnouncementParams, isDraft: boolean) => Promise<any>;
    getAnnouncement: (taskID: string) => Promise<any>;
    getAnnouncementEvents: () => Promise<any>;
    getDownload: (url: string, params?: AnnouncementIndexParams | null, pagination?: PaginationParams, isActiveOnly?: boolean) => Promise<void>;
    getTaskFromAnnouncement: (announcementID: string) => Promise<any>;
    getAnnouncementData: (params: any) => Promise<any>;
    getAnnouncementTaskV2: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    downloadTableAnnouncement: (props: DownloadTransactionTableProps) => Promise<void>;
    getActivityLogs: (params: any) => Promise<any>;
    changeStatusAnnouncement: (taskID: string) => Promise<any>;
    bulkUpdateTaskAnnouncement: (payload: any) => Promise<{
        error: boolean;
        message: string;
        data: any;
    }>;
};
export default AnnouncementService;
