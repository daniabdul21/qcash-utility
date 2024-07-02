declare const Amendment: (token: string | null, companyID: any, userID: any) => {
    getListAmendCancelLC: (params: any) => Promise<any>;
    getListReference: (data: any, key: any) => Promise<any>;
    saveCancellationLC: (data: any, key: any) => Promise<any>;
    getDetailAmendCancelLc: (data: any, key: any) => Promise<any>;
    getSummaryLCAndCoverageAccount: (params: any, companyID: any, userID: any, key: any) => Promise<any>;
    downloadMT707: (eventID: string, key: any) => Promise<import("axios").AxiosResponse<any, any>>;
    getLatestEventAmendCancel: (data: any, key: any) => Promise<any>;
    saveAmendment: (data: any, key: any) => Promise<import("axios").AxiosResponse<any, any>>;
    approvalAmendCancelLc: (data: any, key: any) => Promise<any>;
    getWorkflow: (data: any, key: any) => Promise<any>;
};
export default Amendment;
