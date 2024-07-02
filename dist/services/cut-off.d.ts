import { TaskActionEnum } from "@/types";
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
declare const CutOffService: (baseURL: string, token: string | null) => {
    getMenuLicence: (params: any) => Promise<any>;
    getCutOffTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getActivityLogs: (params: any) => Promise<any>;
    createNewTask: (isDraft: boolean, params: any) => Promise<any>;
    putTask: (taskId: string, action: TaskActionEnum, reasons?: string, comment?: string) => Promise<any>;
    getCutOffTaskByID: (taskID: any) => Promise<any>;
    getCutOffData: (params: any) => Promise<any>;
    getCutOffDataByID: (ScheduleID: any) => Promise<any>;
    editTask: (taskID: string, isDraft: boolean, params: any) => Promise<any>;
    getCutOffTemplate: () => Promise<any>;
    getDataCreatedBy: () => Promise<any>;
    getDataReviewedBy: () => Promise<any>;
    getDataSchedule: (params: string) => Promise<any>;
    getProduct: () => Promise<any>;
    getCurrencies: () => Promise<any>;
    getAvailableCurrency: () => Promise<any>;
    getAvailableTime: (time: string, moduleId: any) => Promise<any>;
};
export default CutOffService;
