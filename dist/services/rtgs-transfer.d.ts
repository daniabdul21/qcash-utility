import { MultipleRTGSTransferType } from "@/types";
import { AxiosRequestConfig } from "axios";
declare const RTGSTransferService: (token: string | null, baseURL?: string) => {
    postRtgsAvailableBanks: () => Promise<{
        data: any;
    }>;
    getRTGSTransactions: (params: any) => Promise<any>;
    postTransactionStatus: (body: Record<string, string>) => Promise<{
        data: any;
    }>;
    getMenuLicense: (companyId: string, moduleId: string | number) => Promise<any>;
    getCompanyLimit: (companyId: string) => Promise<any>;
    getWorkflow: (companyId: string, moduleId: string | number, currency: string) => Promise<any>;
    getBankList: (params?: any) => Promise<any>;
    createMultipleRTGSTransfer: (body: MultipleRTGSTransferType.Payload, rCode: string, companyID?: string, userID?: string) => Promise<{
        data: any;
    }>;
    getCifInquiry: (cif: string, accountID: string) => Promise<any>;
    createMultipleCache: (rcode: string) => Promise<import("axios").AxiosResponse<any, any>>;
    postTransactionStatusKliring: (body: {
        remittanceAccount: string;
    }) => Promise<{
        data: any;
    }>;
    chooseRTGSTransaction: (params: any) => Promise<any>;
    postValidateAccountCIF: ({ accountNo }: {
        accountNo: string;
    }, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<any, any>>;
    postTransactionStatusHub: (params: Record<string, string>) => Promise<{
        data: any;
    }>;
    getCompanyLimitSummary: (companyId: string, holdingId: string, currencyCode: string) => Promise<any>;
};
export default RTGSTransferService;
