import { PaginationParams } from "./api";

export enum TaskStatus {
  All = "All",
  Approved = "Approved",
  Deleted = "Deleted",
  DeleteRequest = "DeleteRequest",
  Draft = "Draft",
  Pending = "Pending",
  Ready = "Ready",
  Rejected = "Rejected",
  Returned = "Returned",
  Checking = "Checking",
}

export enum TaskStatusID {
  All = "0",
  Approved = "4",
  Deleted = "7",
  DeleteRequest = "6",
  Draft = "2",
  Pending = "1",
  Rejected = "5",
  Returned = "3",
}

export enum TaskStepID {
  All = "0",
  Checker = "2",
  Maker = "1",
  Releaser = "4",
  Signer = "3",
}

export enum TaskAction {
  Approve = "approve",
  Reject = "reject",
  Rework = "rework",
  Cancel = "cancel",
  Delete = "delete",
  Submit = "submit",
  All = "All",
}

export enum TaskStep {
  All = "All",
  Maker = "Maker",
  Checker = "Checker",
  Signer = "Signer",
  Releaser = "Releaser",
}

export enum Product {
  Announcement = "Announcement",
  Company = "Company",
  Account = "Account",
  Notification = "Notification",
  All = "All",
}

export enum MenuTask {
  Masters = "Masters",
}

export interface TaskParams extends PaginationParams {
  status?: TaskStatus | string;
  step?: TaskStep | string;
}
export interface Task {
  comment?: string;
  createdAt?: string;
  featureID: string;
  isValidFeatureID: boolean;
  reasons?: string;
  status: TaskStatus;
  step: TaskStep;
  taskID: string;
  type: string;
  updatedAt?: string;
}

export interface TaskGraphStepData {
  step: TaskStep;
  total: number;
  type: Product;
}

export interface TaskGraphStep {
  data: Array<TaskGraphStepData>;
  total: number;
}

export interface TaskData {
  createdAt?: string;
  createdByID?: number;
  createdByName?: string;
  data?: string;
  lastApprovedByID?: number;
  lastApprovedByName?: string;
  lastRejectedByID?: number;
  lastRejectedByName?: string;
  status?: TaskStatus;
  step?: TaskStep;
  taskID?: string;
  type?: string;
  updatedAt?: string;
  reasons?: string;
  comment?: string;
}

export interface ParamsGraphStep {
  isIncludeApprove: boolean;
  isIncludeReject: boolean;
  service: Product;
  status: TaskStatus;
  step: TaskStep;
}

export interface ChildLog {}

export interface ActivityLogData {
  command: string;
  type: string;
  action: string;
  description: string;
  username: string;
  companyName: string;
  task: {
    TaskID: 0;
    type: string;
    status: TaskStatus;
    step: TaskStep;
    createdByID: number;
    lastApprovedByID: number;
    lastRejectedByID: number;
    data: string;
    comment: string;
    featureID: string;
    childs: Array<ChildLog>;
    isParentActive: boolean;
    reasons: string;
    lastApprovedByName: string;
    lastRejectedByName: string;
    updatedByID: number;
    updatedByName: string;
    createdByName: string;
    dataBak: string;
    childBak: string;
    workflowDoc: string;
    companyID: number;
    holdingID: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    approvedAt: Date;
    rejectedAt: Date;
  };
  createdAt: Date;
  taskID: string;
  key: string;
}
