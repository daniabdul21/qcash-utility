import { ApiResponse, DownloadGlobalMassTransactionBatchTableProps, DownloadGlobalMassTransactionBatchInquiryTableProps, DownloadGlobalMassTransactionRejectionTableProps, GlobalCreateMassTransferResponse, GlobalFileFormatResponse, GlobalFileTypeParams, GlobalFileTypeResponse, GlobalMakerConfirmationDetailParams, GlobalMakerConfirmationTaskParams, GlobalMassTransactionDetailListResponse, GlobalMassTransactionListResponse, GlobalMassTransactionParams, GlobalRejectionDetailListResponse, GlobalRejectionDetailParams, GlobalTaskMassTransactionTaskResponse, GlobalTransactionActionDetailParams, GlobalTransactionActionTaskParams, QueryParams, TransactionDetailInDetailResponse, UploadGlobalMassTransferParams, GlobalMassTransactionTransactionInquiryBatchListPayload } from "@/types";
import { AxiosResponse } from "axios";
declare const UKLNMassTransactionService: () => {
    getTemplateList: (type: string, companyID: string) => Promise<any>;
    downloadTemplateByID: (fileFormatId: string) => Promise<AxiosResponse<any, any>>;
    checkDuplicateFilename: (filename: string) => Promise<ApiResponse>;
    postCreateMassTransfer: (body: UploadGlobalMassTransferParams) => Promise<ApiResponse<GlobalCreateMassTransferResponse>>;
    postMakerConfirmationTask: (params: GlobalMakerConfirmationTaskParams) => Promise<ApiResponse<Array<GlobalTaskMassTransactionTaskResponse>>>;
    postMakerConfirmationBatchList: (params: Partial<QueryParams & GlobalMassTransactionParams>) => Promise<ApiResponse<Array<GlobalMassTransactionListResponse>>>;
    postMakerConfirmationDetailList: (params: Partial<QueryParams & GlobalMakerConfirmationDetailParams>) => Promise<ApiResponse<Array<GlobalMassTransactionDetailListResponse>>>;
    getRejectionDetailList: (params: Partial<QueryParams & GlobalRejectionDetailParams>) => Promise<ApiResponse<Array<GlobalRejectionDetailListResponse>>>;
    getFileFormat: () => Promise<ApiResponse<GlobalFileFormatResponse[]>>;
    getFileType: (params?: GlobalFileTypeParams) => Promise<ApiResponse<Array<GlobalFileTypeResponse>>>;
    postDownloadBatchMakerConfirmation: (params: DownloadGlobalMassTransactionBatchTableProps) => Promise<void>;
    postDownloadDetailMakerConfirmation: (params: DownloadGlobalMassTransactionBatchTableProps) => Promise<void>;
    postTransactionActionTask: (params: GlobalTransactionActionTaskParams) => Promise<ApiResponse<Array<GlobalTaskMassTransactionTaskResponse>>>;
    postTransactionActionBatchList: (params: Partial<QueryParams & GlobalMassTransactionParams>) => Promise<ApiResponse<Array<GlobalMassTransactionListResponse>>>;
    postTransactionActionDetailList: (params: Partial<QueryParams & GlobalTransactionActionDetailParams>) => Promise<ApiResponse<Array<GlobalMassTransactionDetailListResponse>>>;
    getActionFor: (params: {
        companyId: string;
    }) => Promise<ApiResponse<Array<any>>>;
    getBatchReffNo: (params?: {
        companyId?: string;
        batchReffNo?: string;
    }) => Promise<any>;
    getDebitAccountNumber: (params: {
        companyId: string;
        debitAccountNumber?: string;
    }) => Promise<ApiResponse<Array<string>>>;
    postDownloadBatchTransactionAction: (params: DownloadGlobalMassTransactionBatchTableProps) => Promise<void>;
    postDownloadDetailTransactionAction: (params: DownloadGlobalMassTransactionBatchTableProps) => Promise<void>;
    getTransactionDetailInDetail: (batchReffNo: string, customerReffNumber: string) => Promise<ApiResponse<TransactionDetailInDetailResponse>>;
    downloadGlobalTransactionReceipt: (batchId: string, transactionId: string, processId: string, filename: string) => Promise<any>;
    postTransactionInquiryBatchList: (params: Partial<QueryParams & GlobalMassTransactionTransactionInquiryBatchListPayload>) => Promise<ApiResponse<Array<GlobalMassTransactionListResponse>>>;
    postDownloadBatchTransactionInquiry: (params: DownloadGlobalMassTransactionBatchInquiryTableProps) => Promise<void>;
    getMassTransactionRejectionDetail: (params: DownloadGlobalMassTransactionRejectionTableProps) => Promise<void>;
};
export default UKLNMassTransactionService;
