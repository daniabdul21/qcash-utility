import { ApiResponse, GlobalSwiftMakerParams, GlobalSwiftTransactionInquiryParams, GlobalSwiftTransactionInquiryResponse, GlobalTaskMassTransactionTaskResponse, QueryParams } from "@/types";
declare const UKLNEFTService: () => {
    getBeneficiaryFavorite: (params: any) => Promise<any>;
    postActionBeneficiaryFavorite: (params: any) => Promise<any>;
    getTransactionList: () => (params: any) => Promise<any>;
    getDataTransactionDetail: (processId: string, transactionId: string | number) => Promise<any>;
    postExchangeRateGlobalSwift: (params: any) => Promise<any>;
    postMakerSubmitGlobalSwift: (params: GlobalSwiftMakerParams) => Promise<any>;
    postTransactionActionTask: (params: any) => Promise<ApiResponse<Array<GlobalTaskMassTransactionTaskResponse>>>;
    getActionFor: (params: {
        companyId: string;
    }) => Promise<ApiResponse<Array<string>>>;
    getDebitAccountNumber: (params: {
        companyId: string;
        debitAccountNumber?: string;
    }) => Promise<ApiResponse<Array<string>>>;
    downloadTransactionActionSingleReceipt: (transactionId: string, processId: string, filename: string) => Promise<any>;
    downloadRecapTransactionAction: (params: any) => Promise<void>;
    postTransactionInquiryListGlobalSwift: (params: Partial<QueryParams & GlobalSwiftTransactionInquiryParams>) => Promise<ApiResponse<Array<GlobalSwiftTransactionInquiryResponse>>>;
    getDebitAccountNumberGlobalSwift: (params: {
        companyId: string;
        debitAccountNumber?: string;
    }) => Promise<ApiResponse<Array<string>>>;
    getStatusGlobalSwift: (params: {
        companyId: string;
    }) => Promise<ApiResponse<Array<string>>>;
    downloadRecapTransactionInquiry: (params: any) => Promise<void>;
};
export default UKLNEFTService;
