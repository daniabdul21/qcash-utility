import { ApiResponse, FinancialForecastTypes, QueryParams } from "@/types";
import { AxiosResponse } from "axios";
import jsPDF from "jspdf";
import { Dispatch, SetStateAction } from "react";
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
export interface DetailTransactionBalanceSummary {
    trxReff: string;
    tanggalAwalDateTime: string;
    tanggalAkhirDateTime: string;
    glsign: string;
    amount: string;
}
interface reportSummaryType {
    norekVarchar: string;
    tanggalAwalDateTime: string;
    tanggalAkhirDateTime: string;
}
interface ISummaryDownload extends reportSummaryType {
    file_format: jsPDF;
}
interface IDownloadDetailTransaction {
    transaction_refference: string[];
}
interface ICreateEmailStatement {
    accountNumber: string[];
    scheduleType: string;
    scheduleStartDate: string;
    scheduleEndDate: string;
    scheduleDay: string;
    scheduleDate: string;
    scheduleTimes: string[];
    emails: string[];
    fileType: string;
}
interface IUpdateEmailStatement {
    accountNumber: string[];
    scheduleType: string;
    scheduleStartDate: string;
    scheduleEndDate: string;
    scheduleDay: string;
    scheduleDate: string;
    scheduleTimes: string[];
    emails: string[];
    fileType: string;
}
interface IDeleteEmailStatement {
    taskId: string[];
}
interface IResendEmailStatement {
    taskId: string[];
}
interface IDownloadTransaction {
    setLoading: Dispatch<SetStateAction<boolean>>;
    dataTmp: any[];
    token?: string;
    setShowModalErr?: () => void;
    companyCode?: string;
    tanggal_awal_date_time: String;
    tanggal_akhir_date_time: String;
}
interface IDownloadDetail {
    setLoading: Dispatch<SetStateAction<boolean>>;
    getDownload?: string;
    norekVarchar: string;
    tanggalAkhirDateTime: string;
    tanggalAwalDateTime: string;
    token?: string;
    downloadFileName?: string;
    fileFormat: string;
    companyCode?: string;
}
interface ISingleDownload {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    transaction_reference: string;
    tanggal_akhir_date_time: string;
    tanggal_awal_date_time: string;
    token?: string;
    companyCode?: string;
    amount?: string;
    glsign?: string;
}
declare const FinancialForecastService: () => {
    getRequest: (props: FinancialForecastTypes.Request) => Promise<{
        data: ApiResponse<FinancialForecastTypes.Response>;
    }>;
    createEmailStatement: (body: ICreateEmailStatement) => Promise<ApiResponse<any>>;
    getEmailStatement: (params: any) => Promise<ApiResponse<any>>;
    downloadEmailStatement: (fileFormat: string) => Promise<void>;
    updateEmailStatement: (taskId: string, body: IUpdateEmailStatement) => Promise<ApiResponse<any>>;
    deleteEmailStatement: (body: IDeleteEmailStatement) => Promise<ApiResponse<any>>;
    resendEmailStatement: (body: IResendEmailStatement) => Promise<ApiResponse<any>>;
    getCheckInquiryAccount: (props: {
        requestCode: string | string[];
    }) => Promise<{
        data: ApiResponse<FinancialForecastTypes.Response>;
    }>;
    cancelInquiryAccount: (props: any) => Promise<{
        data: any;
    }>;
    getMenus: (props: {
        filter: string;
    }) => Promise<{
        data: ApiResponse<FinancialForecastTypes.MenuResponse[]>;
    }>;
    getFileMT: (id: string) => Promise<{
        data: AxiosResponse<any, any>;
    }>;
    getFileNonMT: (id: string) => Promise<{
        data: AxiosResponse<any, any>;
    }>;
    getDataAccountStatement: () => Promise<{
        data: any;
    }>;
    getDataAccountStatement2: (params?: Partial<QueryParams>) => Promise<SelectAllType & ApiResponse<FinancialForecastTypes.Response[]>>;
    getFileZip: (request: Array<{
        id: string;
        fileName: string;
        fileType: string;
    }>) => Promise<AxiosResponse<any, any>>;
    getTrustedToken: () => Promise<AxiosResponse<any, any>>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getSummaryAccount: () => Promise<any>;
    reportSummary: ({ norekVarchar, tanggalAwalDateTime, tanggalAkhirDateTime }: reportSummaryType) => Promise<any>;
    getListTransaction: (body: reportSummaryType) => Promise<any>;
    getDetailTransaction: ({ trxReff, tanggalAwalDateTime, tanggalAkhirDateTime, glsign, amount, }: DetailTransactionBalanceSummary) => Promise<any>;
    downloadListSummary: (body: ISummaryDownload) => Promise<any>;
    downloadDetailTransaction: (body: IDownloadDetailTransaction) => Promise<any>;
    handleDownloadTransaction: ({ setLoading, dataTmp, token, setShowModalErr, companyCode, tanggal_akhir_date_time, tanggal_awal_date_time }: IDownloadTransaction) => Promise<void>;
    handleDownloadDetails: ({ setLoading, getDownload, norekVarchar, tanggalAkhirDateTime, tanggalAwalDateTime, token, downloadFileName, fileFormat, companyCode, }: IDownloadDetail) => Promise<void>;
    handleSingleDownload: ({ setIsLoading, transaction_reference, token, companyCode, tanggal_akhir_date_time, tanggal_awal_date_time, amount, glsign }: ISingleDownload) => Promise<void>;
    getCompanyAccount: (companyCode: string) => Promise<AxiosResponse<any, any>>;
};
export default FinancialForecastService;
