import { DownloadTransactionTableProps, TaskParams, listGraphParams } from "@/types";
export interface Params {
    limit?: number;
    page?: number;
    sort?: string;
    dir?: "DESC" | "ASC";
    filter?: string;
    filterOr?: string;
    query?: string;
    step?: number | string;
    status?: string;
}
declare const OnlineBGServiceAmendment: (baseURL?: string, token?: string | null) => {
    checkAmendAndCancel: (params: any) => Promise<any>;
    getTransaction: (params: any) => Promise<any>;
    saveTaskTransaction: (params: any) => Promise<any>;
    getDataCurrency: () => Promise<{
        data: any;
        pagination: any;
    }>;
    getlistTaskGraphAmandement: (params?: listGraphParams | any) => Promise<any>;
    getDataBGAmendment: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataBGAmendmentHistory: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    }>;
    fetchFilterBGAmendment: (params: TaskParams & Record<string, string>) => Promise<any>;
    bulkUpdateTaskAemendment: (payload: any) => Promise<{
        error: boolean;
        message: string;
        data: any;
    }>;
    checkTransactionBgAmendment: (payload: Record<string, string>) => Promise<any>;
    getViewDetail: (params: any) => Promise<any>;
    getInsuranceLimit: () => Promise<any>;
    downloadTableAmendment: (props: DownloadTransactionTableProps & {
        tab: string;
    }) => Promise<void>;
};
export default OnlineBGServiceAmendment;
