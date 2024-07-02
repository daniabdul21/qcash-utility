import { ApiResponse, QueryParams, TransferOverviewType } from "@/types";
declare const TransferOverviewService: (token: string | null, baseURL?: string) => {
    getOverview: (params: TransferOverviewType.TransferOverviewParams) => Promise<TransferOverviewType.TransactionSummary>;
    getOverviewReHit: (params: any) => Promise<any>;
    getAmountTransaction: (params: any) => Promise<TransferOverviewType.TransactionSummary>;
    getRecentTransaction: (params: Partial<QueryParams & TransferOverviewType.TransferOverviewParams>) => Promise<ApiResponse<Array<TransferOverviewType.RecentTransfer>>>;
};
export default TransferOverviewService;
