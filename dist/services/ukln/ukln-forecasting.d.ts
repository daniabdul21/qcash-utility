import { ApiResponse, GlobalAccountStatementInquiryPayload, GlobalAccountStatementInquiryResponse, GlobalAccountStatementListResponse, GlobalDownloadAccountStatementPayload, QueryParams } from "@/types";
declare const UKLNForecastingService: () => {
    getAccountStatementDownloadList: (params: Partial<QueryParams>) => Promise<ApiResponse<Array<GlobalAccountStatementListResponse>>>;
    postDownloadFileAccountStatement: (params: GlobalDownloadAccountStatementPayload) => Promise<void>;
    postInquiryGlobalAccountStatement: (props: GlobalAccountStatementInquiryPayload) => Promise<ApiResponse<Array<GlobalAccountStatementInquiryResponse>>>;
};
export default UKLNForecastingService;
