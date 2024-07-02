import { CompanyType } from "./company";
import { ContractType } from "./enum";
declare namespace BGIssuingType {
    interface Task {
        taskID: string;
        type: string;
        status: string;
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
    interface Publishing {
        publishingType: string;
        thirdPartyID: string;
        thirdPartyName: string;
        bgType: string;
        effectiveDate: string;
        expiryDate: string;
        remark: string;
        claimPeriod: string;
        lawArticle: string;
        openingBranchId: string;
        openingBranchName: string;
        publishingBranchId: string;
        publishingBranchName: string;
    }
    interface Account {
        cif: string;
        name: string;
        accountNumber: string;
    }
    interface Applicant {
        applicantType: string;
        name: string;
        birthDate?: string | null;
        dateEstablished?: string | null;
        companyType: string;
        gender?: string;
        address: string;
        contactPerson: string;
        beneficiaryName: string;
        beneficiaryAddress: string;
        phoneNumber: string;
        email: string;
        npwpNo: string;
        nik?: string;
    }
    interface Project {
        contractNumber: string;
        name: string;
        projectDate: string;
        nrkNumber?: string;
        projectCurrency: string;
        projectAmount: number;
        projectAmountText: string;
        bgCurrency: string;
        bgAmount: number;
        bgAmountText: string;
        contractGuaranteeType: ContractType;
        cashAccountNo: string;
        cashAccountAmount: number;
        nonCashAccountNo: string;
        nonCashAccountAmount: number;
        counterGuaranteeAmount: number;
        insuranceLimitId: string;
        sp3No: string;
    }
    interface Document {
        businessLegal: string;
        fileBusinessLegal: string;
        tender: string;
        fileTender: string;
        sp: string;
        fileSp: string;
        bg?: string;
        fileBg?: string;
        other: string;
        fileOther: string;
    }
    interface Data {
        step: string;
        referenceNo?: string;
        registrationNo?: string;
        transactionID?: string;
        publishing: Publishing;
        account: Account;
        applicant: Applicant;
        project: Project;
        document: Document;
    }
    interface Response {
        task: BGIssuingType.Task;
        company: CompanyType;
        data: BGIssuingType.Data;
        workflow: BGIssuingType.Workflow;
    }
    interface Payload {
        taskID?: string;
        data: BGIssuingType.Data;
        isDraft: boolean;
        userName: string;
        passCode: string;
    }
    interface Workflow {
        workflow: {
            header: {
                productID: string;
                productName: string;
                currencyID: string;
                currencyName: string;
                companyID: string;
                companyName: string;
                transactionalNumber: string;
                workflowID: string;
            };
            records: {
                lastUpdatedAt: string;
                topRange: string;
                bottomRange: string;
                flows: {
                    workflowLogicID: string;
                    verifier: {
                        approvedCount: number;
                        rejectedCount: number;
                        Requirement: number;
                        participants: {
                            userID: string;
                            userName: string;
                            roleID: string;
                            isReject: boolean;
                            approvedAt: string;
                            step: string;
                        }[];
                    };
                    approver: {
                        approvedCount: number;
                        rejectedCount: number;
                        Requirement: number;
                        participants: {
                            userID: string;
                            userName: string;
                            roleID: string;
                            isReject: boolean;
                            approvedAt: string;
                            step: string;
                        }[];
                    };
                    releaser: {
                        approvedCount: number;
                        rejectedCount: number;
                        Requirement: number;
                        participants: {
                            userID: string;
                            userName: string;
                            roleID: string;
                            isReject: boolean;
                            approvedAt: string;
                            step: string;
                        }[];
                    };
                    isRejected: boolean;
                    completedAt: string;
                }[];
            };
            createdBy: {
                userID: string;
                username: string;
            };
            createdAt: string;
            isDefault: boolean;
            isTransactional: boolean;
            currentRoleIDs: string[];
            currentStep: string;
        };
        nextStatus: string;
        nextStep: string;
    }
}
export type { BGIssuingType };
