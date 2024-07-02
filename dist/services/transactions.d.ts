import { CalculateRatePayload, CalculatorValasPayload, TaskStatus, TaskStep, TransactionLimit, TransactionLimitParams } from "@/types";
interface PaginationResponse {
    limit: number;
    page: number;
    totalPages: number;
    totalRows: string;
}
interface APIResponse<T> {
    error: boolean;
    code: number;
    message: string;
    data: T;
    pagination?: PaginationResponse;
}
export interface PaginationParams {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
}
export interface TaskParams extends PaginationParams {
    status?: TaskStatus | string;
    step?: TaskStep | string;
}
declare const TransactionsService: (token?: string | null, baseURL?: string) => {
    getDataTransactions: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getTransactionLimit: (params: Partial<TransactionLimitParams>) => Promise<APIResponse<TransactionLimit[]>>;
    getLimitModule: (params: any) => Promise<{
        data: any;
    }>;
    getLimitSummary: (companyId: string, holdingId: string, currencyCode: string) => Promise<{
        status: number;
        data?: undefined;
    } | {
        data: any;
        status?: undefined;
    } | {
        status: number;
        data: never[];
    }>;
    getDataTransaction: (id: string) => Promise<{
        data: any;
    }>;
    validateOtp: (idToken: string, otpToken: string) => Promise<{
        data: any;
    }>;
    updateTask: (id: string, payload: any) => Promise<{
        error: boolean;
        message: any;
        data?: undefined;
    } | {
        error: boolean;
        message: string;
        data: any;
    } | {
        error: boolean;
        message: any;
    }>;
    calculateRate: (payload: CalculateRatePayload) => Promise<any>;
    getDataAllTransaction: (params: any) => Promise<any>;
    bulkUpdateTask: (payload: any) => Promise<{
        error: boolean;
        message: string;
        data: any;
    }>;
    createCacheTaskBulk: (rcode: string) => Promise<import("axios").AxiosResponse<any, any>>;
    calculatorValas: (payload: CalculatorValasPayload) => Promise<any>;
};
export default TransactionsService;
