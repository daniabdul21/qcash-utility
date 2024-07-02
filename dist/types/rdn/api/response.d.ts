import { ApiResponse, OmitProperties } from "@/types";
export interface SummaryListData {
    id: string;
    userRequest: string;
    periodRequest: string;
    companyId: string;
    dateRequest: string;
    fileName: string;
    statusCode: string;
    statusDescription: string;
    requestCode: string;
}
export type SummaryListDataResponse = ApiResponse<SummaryListData[]>;
export type SummaryListResponse = OmitProperties<ApiResponse, "data" | "pagination">;
export interface inquiryReportRDNSummaryData {
    error: string;
    code: number;
    message: string;
    data: any;
}
export type inquiryReportRDNSummaryDataResponse = ApiResponse<inquiryReportRDNSummaryData>;
export interface generateRDNSummaryData {
    error: string;
    code: number;
    message: string;
    data: any;
}
export type generateRDNSummaryDataResponse = ApiResponse<generateRDNSummaryData>;
