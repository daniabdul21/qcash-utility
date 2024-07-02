export interface listGraphParams {
    isHistory?: boolean;
    type?: string;
}
export interface FormValueMenu {
    refNum: string;
    AccNUm: string;
    type: string;
}
export interface ActionBy {
    index?: number;
    filter?: string;
    pageIndex?: number;
    key?: string;
}
export declare enum TaskBGAmendment {
    all = "All",
    draft = "Draft",
    pending = "Pending",
    returned = "Returned",
    rejected = "Rejected",
    deleteRequest = "Delete Request",
    onChecker = "On Checker",
    onSigner = "On Signer",
    onReleaser = "On Releaser",
    approved = "Approved",
    waitingForConfirmation = "Waiting for Confirmation",
    onProcess = "On Process",
    issued = "Issued",
    complete = "Complete",
    completed = "Completed",
    failed = "Failed"
}
export interface StatusResponse {
    status: string;
    referenceNo: string;
    registrationNo: string;
}
