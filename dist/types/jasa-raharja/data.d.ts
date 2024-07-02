import { TaskStatus } from "../index";
interface ISenderJasaRaharja {
    accountNumber: string;
    currency: string;
    name: string;
    alias: string;
    accountId: string;
    accountType: string;
    accountLevel: string;
    accountStatus: string;
    accessLevel: string;
    productCode: string;
    statusCode: string;
}
interface IBenefJasaRaharja {
    accountNumber: string;
    currency: string;
    name: string;
    alias: string;
    accountId: string;
    accountType: string;
    accountLevel: string;
    accountStatus: string;
    accountAddress: string;
    accountBank: string;
    accessLevel: string;
    productCode: string;
    statusCode: string;
}
interface IWorkflowParticipantJasaRaharja {
    userID: string;
    userName: string;
    roleID: string;
    isReject: boolean;
    approvedAt: string | null;
    step: string;
}
export interface IWorkflowFlowJasaRaharja {
    workflowLogicID: string;
    verifier: {
        approvedCount: number;
        rejectedCount: number;
        Requirement: number;
        participants: IWorkflowParticipantJasaRaharja[];
    };
    approver: {
        approvedCount: number;
        rejectedCount: number;
        Requirement: number;
        participants: IWorkflowParticipantJasaRaharja[];
    };
    releaser: {
        approvedCount: number;
        rejectedCount: number;
        Requirement: number;
        participants: IWorkflowParticipantJasaRaharja[];
    };
    isRejected: boolean;
    completedAt: string | null;
}
interface IWorkflowRecordsJasaRaharja {
    lastUpdatedAt: string;
    topRange: string;
    bottomRange: string;
    flows: IWorkflowFlowJasaRaharja[];
}
interface IWorkflowCreatedByJasaRaharja {
    userID: string;
    username: string;
}
interface IWorkflowHeaderJasaRaharja {
    productID: string;
    productName: string;
    currencyID: string;
    currencyName: string;
    companyID: string;
    companyName: string;
    transactionalNumber: string;
    workflowID: string;
    uaID: string;
}
interface ITaskWorkflowJaRaharja {
    header: IWorkflowHeaderJasaRaharja;
    records: IWorkflowRecordsJasaRaharja;
    createdBy: IWorkflowCreatedByJasaRaharja;
    createdAt: string;
    isDefault: boolean;
    isTransactional: boolean;
    currentRoleIDs: string[];
    currentStep: string;
    participantUserIDs: string[];
}
export interface ITaskJasaRaharja {
    taskID: string;
    type: string;
    status: TaskStatus;
    step: string;
    featureID: string;
    lastApprovedByID: string;
    lastRejectedByID: string;
    lastApprovedByName: string;
    lastRejectedByName: string;
    createdByName: string;
    updatedByName: string;
    reasons: string;
    comment: string;
    companyID: string;
    holdingID: string;
    createdAt: string;
    updatedAt: string;
}
export interface IDataJasaRaharja {
    transactionId: string;
    transactionReference: string;
    sender: ISenderJasaRaharja;
    beneficiery: IBenefJasaRaharja;
    status: string;
    amount: number;
    statusMessage: string;
    isScheduled: boolean;
    scheduleAt: string;
    transactionServiceId: string;
    type: string;
    productId: string;
    companyName: string;
    responseCode: string;
    remark: string;
    trxRemark: string;
    transactionProcess: string;
    statusCode: string;
    requestData: string;
    responseData: string;
    provisionFee: string | number;
    fee: string | number;
}
export interface IWorkflowJasaRaharja {
    workflow: ITaskWorkflowJaRaharja;
    nextStatus: string;
    nextStep: string;
}
export interface ITaskDataJasaRaharja {
    task: ITaskJasaRaharja;
    data: IDataJasaRaharja;
    workflow: IWorkflowJasaRaharja;
}
export {};
