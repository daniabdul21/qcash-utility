import { DownloadActivityLogProps } from "./activity-log";
import { DownloadTransactionTableProps } from "./transaction-table";
import { TaskActionEnum } from "@/types";
export interface GetProps {
    path: string;
    params: any;
    isPaginate?: boolean;
}
export interface PostProps {
    path: string;
    payload: any;
}
export interface CompanyBriva {
    companyID: string;
    companyName: string;
}
export interface ListObj {
    name: string;
    value: string;
}
export type updateVAStatusHandler = (taskID: number, status: number, taskAction: TaskActionEnum, reason?: string, remark?: string) => void;
export declare enum FileUploadVAStatus {
    STATUS_CHECKING = "Checking",
    STATUS_FILE_COMPLETE = "File Complete",
    STATUS_INVALID_FILE_FORMAT = "Invalid File Format",
    STATUS_INVALID_DATA = "Invalid Data",
    STATUS_READY_TO_SUBMIT = "Ready to Submit",
    STATUS_ON_CHECKER = "On Checker",
    STATUS_ON_SIGNER = "On Signer",
    STATUS_ON_RELEASER = "On Releaser",
    STATUS_REJECTED = "Rejected",
    STATUS_INQUIRY_FAILED = "Inquiry Failed",
    STATUS_FAILED = "Failed",
    STATUS_SUCCESS = "Success"
}
export interface DownloadTemplateSBOptions {
    extension: string;
    value: string;
}
export type DownloadTemplateSBHandler = (options: DownloadTemplateSBOptions) => void;
export interface VAInfoForm {
    companyId: string;
    corporateCode: string;
}
export interface VAInfo {
    billingType: string;
    corpCodeVA: string;
    companyId: string;
    companyName: string;
    corporateName: string;
    institutionCode: string;
    paymentType: string;
    realAccount: string;
}
export interface SaveVAModalState {
    isOpen: boolean;
    data: VAInfo;
}
export interface SendApprovalVAProps {
    companyId: string;
    brivaCorp: string;
    companyName: string;
    corporateName: string;
    realAccount: string;
    flagOpen: string;
    flagBilling: string;
    institutionCode: string;
}
export interface VAInfoParams {
    type: string;
}
export type FormUploadSB = {
    fileDescription: string;
    file: File | null;
    key: string;
};
export type SBUpdateStatusTask = (taskID: string, action: TaskActionEnum, remark?: string, reasons?: string) => void;
export interface SBFileUploadRequestBody {
    uploadKey: string;
    fileFormatId: string;
    description: string;
}
export interface DownloadListDetailParams extends DownloadTransactionTableProps {
    getSearch: string;
}
export interface downloadActivyLogsParams extends DownloadActivityLogProps {
    getSearch: string;
}
export interface ListUploadHistoryParams {
    type: string;
}
