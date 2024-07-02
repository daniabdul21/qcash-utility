import { ApiResponse, IPagination } from "./app";
import { Task } from "./task";
import { TransactionWorkflow } from "./workflow";
export type ProxyAccountType = 'IA' | 'SA' | 'CA';
export type ProxyAccountStatus = 'Active';
export type ProxyAccountCurrency = 'IDR';
export type ProxyType = 'Email' | 'MobileNumber';
export type ProxyStatus = 'ProxyActive' | 'ProxySuspended';
export type ProxyOperation = 'NEWR' | 'AMND' | 'ACTV' | 'DEAC' | 'SUSP';
export interface ProxyRegistrationType {
    accountNumber: string;
    accountName: string;
    accountType: ProxyAccountType | "";
    accountStatus: ProxyAccountStatus | "";
    currency?: ProxyAccountCurrency | "";
    email: string;
    phoneNumber?: string;
    accountAlias?: string;
    accountCurrency: ProxyAccountCurrency | "";
    proxyType: ProxyType;
    updatedAt?: string;
    mobileNumber: string;
    referenceNumber?: string;
    registrationId?: string;
    operation?: ProxyOperation | "";
    accountSecondaryId?: string;
    accountBalance?: any;
    mode?: string;
}
export interface ProxyData {
    "referenceNumber": string;
    "registrationId": string;
    "accountNumber": string;
    "accountSecondaryId": string;
    "accountType": ProxyAccountType;
    "accountName": string;
    "accountStatus": ProxyAccountStatus;
    "accountCurrency": ProxyAccountCurrency;
    "email": string;
    "mobileNumber": string;
    "proxyType": ProxyType;
    "proxyStatus": ProxyStatus;
    "operation": ProxyOperation;
}
export interface ProxyManagementData {
    data: ProxyData;
    task: Task;
    workflow: TransactionWorkflow.Root;
}
export interface ProxyManagementResponse extends ApiResponse<ProxyManagementData> {
    pagination: IPagination;
}
