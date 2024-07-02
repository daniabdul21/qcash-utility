export interface SummaryListRequestBody {
    companyId: string;
    dir: string;
    filter: string;
    limit: number;
    page: number;
    processId: string;
    sort: string;
}
export interface inquiryReportRDNSummaryBody {
    participantCode: string;
    periodRequest: string;
    processId: string;
}
export interface checkStatusRDNSummaryBody {
    id: string;
    requestCode: string;
    processId: string;
}
