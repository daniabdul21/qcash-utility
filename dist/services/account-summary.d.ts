import { FinancialForecastTypes } from "@/types";
declare const AccountSummaryService: () => {
    getTrustedToken: () => Promise<import("axios").AxiosResponse<any, any>>;
    getFinancialReport: (params: FinancialForecastTypes.PayloadRequestAccountSummary) => Promise<import("axios").AxiosResponse<any, any>>;
    downloadTable: (format: string, data: any, username: string) => Promise<void>;
};
export default AccountSummaryService;
