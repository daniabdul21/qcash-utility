import { SummaryListDataResponse, SummaryListRequestBody, checkStatusRDNSummaryBody, generateRDNSummaryDataResponse, inquiryReportRDNSummaryBody, inquiryReportRDNSummaryDataResponse } from "@/types";
declare const RDNService: () => {
    getRDNSummaryDataList: (body: SummaryListRequestBody) => Promise<SummaryListDataResponse>;
    postRDNSummaryInquiryReport: (body: inquiryReportRDNSummaryBody) => Promise<inquiryReportRDNSummaryDataResponse>;
    postCheckStatusRDNSummary: (body: checkStatusRDNSummaryBody) => Promise<generateRDNSummaryDataResponse>;
    downloadRDNSummary: (param: any) => Promise<void>;
};
export default RDNService;
