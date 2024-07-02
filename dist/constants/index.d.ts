import { TaskStatusID } from "@/types";
declare const service = "multipayment";
declare const taskStatuses: {
    Draft: TaskStatusID;
    Pending: TaskStatusID;
    Returned: TaskStatusID;
};
declare const transactionStatuses: {
    "On Process": string;
    Failed: string;
    Process: string;
    Rejected: string;
    Success: string;
    Suspended: string;
    Waiting: string;
};
declare const uploadStatuses: {
    "File Completed": string;
    "File in Process": string;
    "File Processed": string;
    "On Process": string;
};
declare const notValidStatuses: {
    "Invalid File Format": string;
};
export { service, taskStatuses, transactionStatuses, uploadStatuses, notValidStatuses };
export * from "./formats";
export * from "./options";
