export interface SelectAllType {
    successFiles: DetailFileSuccess[];
}
export interface DetailFileSuccess {
    id: string;
    userId: string;
    companyId: string;
    accountId: string;
    accountNumber: string;
    status: string;
    detail: string[];
    fileType: string;
    fileName: string;
    startDate: string;
    endDate: string;
}
declare const InquiryDJBCService: () => {
    getInquiryBilling: (params: any) => Promise<{
        data: any;
    }>;
    getInquiryNPWP: (params: any) => Promise<{
        data: any;
    }>;
    getListInquiry: (params: any) => Promise<any>;
    getInquiryDownload: (body: any) => Promise<void>;
};
export default InquiryDJBCService;
