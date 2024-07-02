import { Task } from "./task";
export declare enum AnnouncementLevel {
    Important = "Important",
    Warning = "Warning",
    Info = "Info"
}
export interface EventType {
    eventTypeID: string;
    name: string;
}
export interface Announcement {
    isWaitingApproval: boolean;
    announcementID: string;
    eventTypeID: string;
    companyID: string;
    title: string;
    code: string;
    description: string;
    content: string;
    statusLevel: AnnouncementLevel;
    EventType: EventType;
    startFrom: Date;
    endTo: Date;
    isEnabled: boolean;
    isAutoClose: boolean;
    updatedAt: Date;
    task?: Task;
}
export type AnnouncementWithTaskStatus = {
    announcement: Announcement;
} & {
    task: Task;
};
export interface AnnouncementParams {
    eventTypeID: string;
    companyID: string;
    description: string;
    code: string;
    title: string;
    content: string;
    statusLevel: string;
    isAutoClose: boolean;
    isEnabled: boolean;
    startFrom: Date;
    endTo: Date;
}
export interface AnnouncementIndexParams {
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
export interface AnnouncementEvent {
    eventTypeID: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
export interface AnnouncementTaskResponse {
    data: Array<AnnouncementWithTaskStatus>;
    pagination: {
        limit: number;
        page: number;
        totalRows: string;
        totalPages: number;
    };
}
