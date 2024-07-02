import { TransactionActionEnum } from "../../transaction";
export interface InquirySPBSearchCriteria {
    status?: [];
    transactionId?: any;
    createdDateFrom?: "";
    createdDateTo?: "";
    spbNo?: [];
    entityCode?: [];
    senderInfo?: [];
    beneficiaryInfo?: [];
    tab: number;
}
export interface InquirySPBRequestBody {
    companyId: string;
    dir: string;
    filter: string;
    limit: number;
    page: number;
    processId: string;
    query: string;
    sort: string;
    searchCriteria: InquirySPBSearchCriteria;
}
export interface SPBDetailRequestBody {
    processId: string;
    id: string;
    companyId: string;
}
export interface ApprovalTaskBulogBody {
    taskIds: any;
    action: TransactionActionEnum;
    comment?: string;
    reasons?: string;
    passCode?: string;
}
export interface DownloadRecieptBody {
    processId: any;
    id: string;
    companyId: string;
}
export interface BenefInfoTableFilter {
}
export interface EntityCodeTableFilter {
}
export interface SenderInfoTableFilter {
}
export interface SPBNoTableFilter {
}
export interface StatusTableFilter {
}
export interface TransactionIdTableFilter {
}
export interface DownloadListRequestBody {
    companyId: string;
    dir: string;
    filter: string;
    limit: any;
    page: number;
    processId: string;
    query: string;
    sort: string;
    searchCriteria: InquirySPBSearchCriteria;
    fileTypeId: number;
}
