import { TaskActionEnum } from "@/types";
declare const Tradefinance: (baseURL: string, token: string | null) => {
    getDataMdBranch: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDownloadFile: (fileName: string, id: number, action: "inline" | "attachment") => Promise<void>;
    getBranch: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getCountry: () => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataSwiftCode: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataCurrency: () => Promise<{
        data: any;
        pagination: any;
    }>;
    getAccountData: (params: any) => Promise<any>;
    getCheckBalance: (params: any, companyID: any, userID: any, key: any) => Promise<any>;
    getListIssuedLc: (data: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getAmountToWord: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getListAccountWithImportLine: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getSaveIssuedLc: (data: any, companyID: any, userID: any, key: any) => Promise<any>;
    getListMasterDataByTypeId: () => Promise<{
        data: any;
        pagination: any;
    }>;
    getCustomer: (data: any) => Promise<any>;
    uploadFileListener: (payload: any) => Promise<any>;
    getSummaryLC: (data: any, companyID: any, userID: any, key: any) => Promise<import("axios").AxiosResponse<any, any>>;
    getDetailById: (transactionId: string, req: string) => Promise<any>;
    putTask: (transactionEventId: string, action: TaskActionEnum, reasons?: string, comment?: string, personalNumber?: string) => Promise<any>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
    getSaveCreateTemplate: (data: any) => Promise<any>;
    getAllTemplate: (userID: any) => Promise<{
        data: any;
    }>;
    getTemplatebyID: (templateID: any) => Promise<{
        data: any;
    }>;
    deleteTemplatebyId: (templateID: any) => Promise<{
        data: any;
    }>;
    editTemplatebyId: (templateID: any, templateName: any) => Promise<{
        data: any;
    }>;
    getWorkflowStatus: (transactionEventId: string) => Promise<import("axios").AxiosResponse<any, any> | undefined>;
    downloadMT700: (eventID: string, companyID: string, userID: string, key: any) => Promise<import("axios").AxiosResponse<any, any>>;
    refreshSession: () => Promise<void>;
    getListHSCode: (data: any, companyID: any, userID: any) => Promise<any>;
};
export default Tradefinance;
