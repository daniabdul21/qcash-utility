import { InquirySPBRequestBody, SPBDetailRequestBody, InquirySPBDataResponse, InquirySPBDataDetailResponse, BenefInfoTableFilter, BenefInfoTableFilterResponse, EntityCodeTableFilter, EntityCodeTableFilterResponse, SenderInfoFilter, SenderInfoTableResponse, SPBNoFilter, SPBNoTableFilterResponse, StatusFilter, StatusFilterResponse, TransactionIdFilter, TransactionIdTableFilterResponse, ApprovalTaskBulogBody, InquiryApprovalDataResponse, DownloadRecieptBody, DownloadListRequestBody } from "@/types";
declare const PencairanBulogService: (token?: string) => {
    getInquirySPBData: (body: InquirySPBRequestBody) => Promise<InquirySPBDataResponse>;
    getSPBDataDetail: (body: SPBDetailRequestBody) => Promise<InquirySPBDataDetailResponse>;
    getBenefInfoFilter: (body: BenefInfoTableFilter) => Promise<BenefInfoTableFilterResponse>;
    getEntityCodeFilter: (body: EntityCodeTableFilter) => Promise<EntityCodeTableFilterResponse>;
    getSenderInfoFilter: (body: SenderInfoFilter) => Promise<SenderInfoTableResponse>;
    getSPBNoFilter: (body: SPBNoFilter) => Promise<SPBNoTableFilterResponse>;
    getStatusFilter: (body: StatusFilter) => Promise<StatusFilterResponse>;
    getTransactionIdFilter: (body: TransactionIdFilter) => Promise<TransactionIdTableFilterResponse>;
    postApprovalTaskBulog: (body: ApprovalTaskBulogBody) => Promise<InquiryApprovalDataResponse>;
    downloadReceipt: (body: DownloadRecieptBody) => Promise<void>;
    downloadList: (body: DownloadListRequestBody) => Promise<void>;
};
export default PencairanBulogService;
