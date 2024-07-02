import { DownloadTransactionTableProps, TaskAction } from "@/types";
declare const CompaniesService: () => {
    getActivityLogsCompany: (params: any) => Promise<any>;
    downloadTableCompany: (props: DownloadTransactionTableProps) => Promise<void>;
    deleteCompanyTask: (taskID: string) => Promise<any>;
    putTaskCompany: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    getTaskCompanyView: (params: any) => Promise<any>;
    getTaskCompany: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    postCreateCompany: (params: any) => Promise<import("axios").AxiosResponse<any, any>>;
    validateCifCompany: (params: any) => Promise<any>;
    validateUserNik: (params: any) => Promise<any>;
    validateAccountCif: (params: any) => Promise<any>;
    postEditCompany: (taskID: any, payload: any) => Promise<import("axios").AxiosResponse<any, any>>;
    validateAccountNumber: (params: any) => Promise<any>;
    getCompanies: (params: any) => Promise<any>;
    getCurrencies: () => Promise<any>;
    queryBRICaMSCompany: (query?: string, country_name?: string) => Promise<any>;
    getCompaniesV2: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getCompanyDetail: (companyID: string) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
};
export default CompaniesService;
