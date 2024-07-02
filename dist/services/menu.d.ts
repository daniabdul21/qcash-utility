import { DownloadTransactionTableProps, TaskAction, TaskParams } from "@/types";
declare const MenuService: (token?: string | null, baseURL?: string) => {
    getMenuLicenseNew: (params: any) => Promise<any>;
    getMenuLicenseTasksV2: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    putTaskMenuLicense: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    getActivityLogs: (params: any) => Promise<any>;
    downloadTableMenuLicense: (props: DownloadTransactionTableProps) => Promise<void>;
    getMenuLicenseTaskMeCreatedApproved: () => Promise<any>;
};
export default MenuService;
