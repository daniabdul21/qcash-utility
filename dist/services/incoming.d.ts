declare const Incoming: (token: string | null, companyID: any, userID: any) => {
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getDetailIncoming: (data: any, key: any) => Promise<any>;
    getListIncoming: (data: any) => Promise<any>;
    downloadMT707: (eventID: string, key: any) => Promise<import("axios").AxiosResponse<any, any>>;
    saveIncomingDoc: (data: any, key: any) => Promise<any>;
    approveIncomingDoc: (data: any, key: any) => Promise<any>;
    getWorkflow: (data: any, key: any) => Promise<any>;
    getListDocumentRequired: (data: any) => Promise<any>;
};
export default Incoming;
