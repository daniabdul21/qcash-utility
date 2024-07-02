import { CompanyLimit } from "@/types";
declare const CompanyService: (baseURL?: string, token?: string | null) => {
    getAccountData: () => Promise<any>;
    getCompanies: (query?: string) => Promise<any>;
    getCompaniesBricams: () => Promise<any>;
    getCompaniesBricamsCustomer: () => Promise<any>;
    getCompaniesBricamsCustomerDetail: (id: string) => Promise<any>;
    getCompaniesData: (params: any) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getCompanyGroups: () => Promise<any>;
    getCompanyGroupTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getCompanyLimit: (params: any) => Promise<CompanyLimit[]>;
    getCurrencies: () => Promise<any>;
    getDataCompanies: () => Promise<any>;
    getTask: (taskId: string) => Promise<any>;
    putCompanyGroupTask: (taskId: string, params: any) => Promise<any>;
    storeCompanyGroupTask: (params: any) => Promise<any>;
};
export default CompanyService;
