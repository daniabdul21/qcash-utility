import { DownloadTransactionTableProps } from "@/types";
declare const DOPupukService: () => {
    deleteTask: (params: any) => Promise<any>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<boolean>;
    downloadReceipt: (params: any) => Promise<boolean>;
    getDebitAccList: (companyID: any) => Promise<any>;
    getFilterData: (params: any) => Promise<any>;
    getPupukTaskList: (params: any) => Promise<any>;
    getPupukTaskDetail: (transactionId: string, tab: any) => Promise<any>;
    getStatusGroup: (tab: string, filter?: string, query?: string) => Promise<any>;
    submitTask: (payload: any) => Promise<any>;
    updateTask: (params: any) => Promise<any>;
    validateBookingCode: (payload: any) => Promise<any>;
    validateDebitAcc: (payload: any) => Promise<any>;
    getTaskData: (transactionId: any) => Promise<any>;
    submitUpdateTask: (payload: any) => Promise<any>;
};
export default DOPupukService;
