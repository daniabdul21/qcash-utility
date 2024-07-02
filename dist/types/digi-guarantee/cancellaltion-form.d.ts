import { Dispatch, SetStateAction } from "react";
import { UserBricamsDetail } from "../user";
export interface ClaimBgMonitoringProps {
    test?: string;
}
export interface ClaimBgMonitoringContainerProps {
    bricamUser?: UserBricamsDetail;
    allValue: GetFormBgClaimProps;
    taskId?: string;
    isEdit?: boolean;
    companyID?: string;
    checkToken?: () => void;
    isLoadingToken?: boolean;
}
export interface LoadingProps {
    draft?: boolean;
    submit?: boolean;
    getData?: boolean;
    upload?: boolean;
}
export interface AccountInfoProps {
    error?: boolean;
    data?: any;
    translation: any;
    getValues: any;
}
export interface StepOneBgClaimProps {
    test?: string;
    translation: any;
    errors: any;
    control: any;
    getValues: any;
}
export interface StepTwoBgClaimProps {
    test?: string;
    translation: any;
    debounceAccount: any;
    control: any;
    errors: any;
    setValue: any;
    getValues: any;
    watch: any;
    validateRecipent: () => Promise<any>;
    isLoading: Record<string, boolean>;
    handleValidateFile: (file: File[]) => Promise<any>;
    handleActionConfirm: (key: string) => Promise<any>;
}
export interface StepThreeBgClaimProps {
    translation: any;
    getValues: any;
}
export interface GetFormBgClaimProps {
    reffNumber: string;
    amount: string;
    amountWord: string;
    fileName: string;
    fileDescription: string;
    workflow?: any;
    recipient: RecipentData;
    uploadData: UploadDataCancellation;
    uploadArchive: UploadArchive;
    transaction: TransactionProps;
    transactionID: string;
    status: string;
}
export interface TransactionProps {
    transactionID: string;
    thirdPartyID: string;
    thirdPartyName: string;
    referenceNo: string;
    registrationNo: string;
    applicantName: string;
    beneficiaryID: string;
    beneficiaryName: string;
    issueDate: string;
    effectiveDate: string;
    expiryDate: string;
    claimPeriod: number | string;
    closingDate: string;
    currency: string;
    amount: number | string;
    createdDate: string;
    modifiedDate: string;
    remark: string;
    status: string;
    channelID: string;
    channelName: string;
    transactionTypeID: string;
    issuingBranch: string;
}
export interface UploadDataCancellation {
    fileName: string;
    documentPath: string;
    uploadDate: string;
    uploadedFileUrl: string;
    fileSize: string;
}
export interface RecipentData {
    accountNumber: string;
    accountName: string;
    accountAlias: string;
    accountBalance: number | string;
    accountType: string;
    error?: string | null;
}
export interface UploadArchive {
    fileID: string;
    fileName?: string;
    fileExtension?: string | null;
    companyID?: string | null;
    uploadedByID?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export interface FormBgClaimProps {
    reffNumber: string;
    amount: string;
    amountWord: string;
    file: File[] | null;
    fileName: string;
    fileDescription: string;
    workflow?: any;
    uploadData: UploadDataCancellation | null;
    uploadArchive: UploadArchive | null;
    recipient: RecipentData | null;
    transaction: TransactionProps;
}
export interface PayloadGetData {
    reffNumber: string;
    isEdit?: boolean;
}
export interface DataViewBGClaim {
    data: GetFormBgClaimProps;
    task: any;
    workflow: any;
}
export interface ViewClaimBgMonitoringContainerProps {
    taskId: string;
    isLoadingBy: Record<string, boolean>;
    setIsLoadingBy: Dispatch<SetStateAction<Record<string, boolean>>>;
    dataViewBg: DataViewBGClaim;
    push: (props: string) => void;
    reload: () => void;
}
