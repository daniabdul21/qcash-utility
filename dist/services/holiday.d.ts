import { DownloadTransactionTableProps, TaskAction, TaskStatus, TaskStep } from "@/types";
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
export interface Params {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
    step?: number | string;
    status?: string;
}
declare const HolidayService: (baseURL?: string, token?: string | null) => {
    getPattern: () => Promise<any>;
    getWeekendDays: () => Promise<any>;
    getHolidayData: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getHolidayTask: (params: any) => Promise<any>;
    getHolidaySchedule: (params: any) => Promise<any>;
    getHolidayTaskById: (taskID: string) => Promise<any>;
    postHolidayTask: (params: any) => Promise<any>;
    editTask: (taskID: string, params: any) => Promise<any>;
    deleteHolidayTask: (taskID: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getActivityLogs: (params: any) => Promise<any>;
    putTaskHoliday: (taskID: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    getProduct: (isUKLN: boolean) => Promise<any>;
    getHolidayCreatedBy: () => Promise<any>;
    getHolidayReviewedBy: () => Promise<any>;
    downloadTableHoliday: (props: DownloadTransactionTableProps) => Promise<void>;
};
export default HolidayService;
