/**
 * @author: pujiermanto@ordent.co
 */
import { MultipleKliringTransferType } from "@/types";
declare const KliringTransferService: (token: string | null, baseURL?: string) => {
    getCompanyLimitSummaryKliring: (companyId: string, holdingId: string, currencyCode: string) => Promise<any>;
    createMultipleCache: (rcode: string) => Promise<any>;
    getKliringTransactions: (params: any) => Promise<any>;
    getMenuLicense: (companyId: string, moduleId: string | number) => Promise<any>;
    getCompanyLimit: (companyId: string) => Promise<any>;
    getWorkflow: (companyId: string, moduleId: string | number, currency: string) => Promise<any>;
    getBankList: () => Promise<any>;
    createMultipleKliringTransfer: (body: MultipleKliringTransferType.Payload, rCode: string, companyID?: string, userID?: string) => Promise<{
        data: any;
    }>;
};
export default KliringTransferService;
