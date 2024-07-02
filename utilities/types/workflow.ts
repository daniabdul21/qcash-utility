/* eslint-disable @typescript-eslint/no-namespace */
import { ReactNode } from "react";
import { TaskData } from "./task";

export interface WorkflowParams {
  accountID: string;
  companyID: string;
  description: string;
  moduleID: string;
  workflowCode: string;
}

export interface Workflow extends WorkflowParams {
  // accountID: string;
  // companyID: string;
  // description: string;
  // moduleID: string;
  // workflowCode: string;
  // workflowID: string;
  accountAlias: string;
  createdAt: Date;
  createdByID: string;
  deletedAt: Date;
  deletedByID: string;
  updatedAt: Date;
  updatedByID: string;
}

export interface WorkflowCompany {
  branchCode: string;
  id: string;
  name: string;
}

export type WorkflowWithTask = {
  workflow: any;
  company: any;
} & {
  task: TaskData;
};

export enum StepType {
  Checker = "checker",
  Releaser = "releaser",
  Signer = "signer",
  Verifier = "verifier",
}

export interface Record {
  actionBy?: TransactionWorkflow.Participant[];
  rejectedBy: string;
  reviewedBy: string;
  reason: string;
  description: string;
  lastApprovedAt: string;
}

export interface StepperItem {
  createdBy?: string;
  key: string | number;
  title: string;
  subtitle?: string;
  content?: ReactNode;
  status?:
    | "default"
    | "pending"
    | "success"
    | "info"
    | "failed"
    | "successNew"
    | "pendingNew"
    | "failedNew"
    | "defaultNew";
  current?: boolean;
  record?: Record;
}

declare namespace TransactionWorkflow {
  export interface Header {
    companyID: string;
    companyName: string;
    currencyID: string;
    currencyName: string;
    productID: string;
    productName: string;
    transactionalNumber: string;
    workflowID: string;
  }

  export interface Verifier {
    approvedCount: number;
    participants: any[];
    rejectedCount: number;
    Requirement: number;
  }

  export interface Participant {
    approvedAt?: any;
    isReject: boolean;
    roleID: string;
    step: string;
    userID: string;
    userName: string;
  }

  export interface Approver {
    approvedCount: number;
    participants: Participant[];
    rejectedCount: number;
    Requirement: number;
  }

  export interface Releaser {
    approvedCount: number;
    participants: any[];
    rejectedCount: number;
    Requirement: number;
  }

  export interface Flow {
    approver: Approver;
    completedAt?: any;
    isRejected: boolean;
    releaser: Releaser;
    verifier: Verifier;
    workflowLogicID: string;
  }

  export interface Records {
    bottomRange: string;
    flows: Flow[];
    lastUpdatedAt: string;
    topRange: string;
  }

  export interface CreatedBy {
    userID: string;
    username: string;
  }

  export interface Workflow {
    createdAt: string;
    createdBy: CreatedBy;
    currentRoleIDs: string[];
    currentStep: string;
    header: Header;
    isDefault: boolean;
    isTransactional: boolean;
    participantUserIDs?: string[];
    records: Records;
  }

  export interface Root {
    nextStatus: string;
    nextStep: string;
    workflow: Workflow;
  }
}

export type WorkflowLogics = {
  bottomRange: string | number;
  topRange: string | number;
  type: number;
  verifiers: any[];
  approvers: any[];
  releasers: any[];
  countVerifier: string;
  countApprover: string;
  countReleaser: string;
};

export type { TransactionWorkflow };
