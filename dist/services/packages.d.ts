import { DownloadTransactionTableProps, TaskAction, TaskParams } from "@/types";
declare const PackageManagementService: () => {
    getPackageTask: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getPackageData: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getPackgeByTaskID: (taskID: string) => Promise<any>;
    downloadTablePackages: (props: DownloadTransactionTableProps) => Promise<void>;
    getActivityLogsPackages: (params: any) => Promise<any>;
    putTaskActionPackage: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    deletePackageTask: (taskID: string) => Promise<any>;
    getListMenuPackage: (params?: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    postPackageTask: (params: any) => Promise<import("axios").AxiosResponse<any, any>>;
    postChangeStatus: (packageID: number, status: string) => Promise<import("axios").AxiosResponse<any, any>>;
    postEditPackageTask: (taskID: string, params: any) => Promise<import("axios").AxiosResponse<any, any>>;
    getMenuList: (sourceTable: string, displayColumn: string, filterColumn?: string | null, filterValue?: string | null) => Promise<{
        data: any;
        pagination: any;
    }>;
    getListMenuPackageV2: (countryName?: string, params?: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    downloadTablePackagesHistory: (props: DownloadTransactionTableProps) => Promise<void>;
    getPackageCompanyUKLN: (countryName: string) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
};
export default PackageManagementService;
