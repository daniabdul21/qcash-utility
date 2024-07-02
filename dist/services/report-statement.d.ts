declare const ReportStatementService: () => {
    getAllReportStatementSetting: (body: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getReportStatementSetting: (taskID: string, body: any) => Promise<any>;
    getAllReportStatementModule: (body: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    createReportStatementSetting: (body: any) => Promise<any>;
    updateReportStatementSetting: (taskID: any, body: any) => Promise<any>;
    downloadReportStatementSetting: (props: any) => Promise<void>;
    deleteReportStatementSetting: (body: any) => Promise<any>;
    resendReportStatementSetting: (body: any) => Promise<any>;
    createCacheTaskBulk: (rcode: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
};
export default ReportStatementService;
