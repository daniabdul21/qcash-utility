import { AxiosRequestConfig } from "axios";
import { DownloadTransactionTableProps, TaskAction, TaskParams } from "@/types";
interface DownloadListParams extends DownloadTransactionTableProps {
    getSearch: string;
}
declare const AccountService: (token?: string | null) => {
    downloadTableNonDeposito: (props: DownloadListParams) => Promise<void>;
    massApproveTask: ({ companyId, action, batchId, reason, description, }: {
        companyId: string;
        action: string;
        batchId: string;
        reason?: string;
        description?: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    getInvalidData: (params: any) => Promise<any>;
    submitFile: (body: any) => Promise<any>;
    getListBatchTable: (params: any) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getListBatchDetail: (batchId: string) => Promise<any>;
    checkDuplicateFileName: (filename: string, companyid: string) => Promise<any>;
    deleteAccountTask: (taskID: string) => Promise<any>;
    postValidateAccountV2: ({ accountNo, remark, countryCode, type, country, }: {
        accountNo: string;
        remark?: string;
        countryCode?: string;
        type: string;
        country: any;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    postAccountTaskBulkDraft: (params: {
        accounts: {
            companyID: string;
            accountNumber: string;
            accountAlias: string[];
            accountName: string;
            accountType: string;
            accountStatus: string;
            accountCurrency: string;
            accessLevel: string;
            isOwnedByCompany: string;
            createdByID: string;
            updatedByID: string;
            deletedByID: string;
            cif: string;
            productCode: string;
            statusCode: string;
        }[];
        isDraft: boolean;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    postAccountDraft: (params: {
        data: {
            companyID: string;
            accountNumber: string;
            accountAlias: string[];
            accountName: string;
            accountType: string;
            accountStatus: string;
            accountCurrency: string;
            accessLevel: string;
            isOwnedByCompany: string;
            createdByID: string;
            updatedByID: string;
            deletedByID: string;
            cif: string;
            productCode: string;
            statusCode: string;
        };
        isDraft: boolean;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    putTask: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    getActivityLogs: (params: any) => Promise<any>;
    fetchUsedAlias: (companyID: string, accountNumber: string) => Promise<any>;
    downloadAccountDepositoTable: (props: DownloadTransactionTableProps) => Promise<void>;
    getAccountDepositoData: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getAccountTaskV2: (params: any) => Promise<any>;
    getAccountTaskData: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getAccountData: () => Promise<any>;
    getAccountDataByRole: (params?: any) => Promise<any>;
    getAccountDepositoDataByRole: (params?: any) => Promise<any>;
    getAccountTask: ({ dir, step, status, }: {
        dir?: string;
        step?: string;
        status?: string;
    }) => Promise<any>;
    getAccountTaskById: (taskID: string) => Promise<any>;
    putAccountTask: (taskID: string, params: {
        data: {
            accountID: string;
            companyID: string;
            accountNumber: string;
            accountAlias: string[];
            accountName: string;
            accountType: string;
            accountStatus: string;
            accountCurrency: string;
            accessLevel: string;
            isOwnedByCompany: string;
            createdByID: string;
            updatedByID: string;
            deletedByID: string;
            roleID: string;
            disabled: boolean;
        };
        isDraft: boolean;
        taskID: string;
    }) => Promise<any>;
    postAccountTask: (params: {
        data: {
            companyID: string;
            accountNumber: string;
            accountAlias: string[];
            accountName: string;
            accountType: string;
            accountStatus: string;
            accountCurrency: string;
            accessLevel: string;
            isOwnedByCompany: string;
            createdByID: string;
            updatedByID: string;
            deletedByID: string;
            cif: string;
            productCode: string;
            statusCode: string;
        };
        isDraft: boolean;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    postAccountTaskBulk: (params: {
        accounts: {
            companyID: string;
            accountNumber: string;
            accountAlias: string[];
            accountName: string;
            accountType: string;
            accountStatus: string;
            accountCurrency: string;
            accessLevel: string;
            isOwnedByCompany: string;
            createdByID: string;
            updatedByID: string;
            deletedByID: string;
            cif: string;
            productCode: string;
            statusCode: string;
        }[];
        isDraft: boolean;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    postValidateAccount: ({ accountNo, remark, type }: {
        accountNo: string;
        remark?: string;
        type?: string;
    }, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<any, any>>;
    getAccountData2: (params: any) => Promise<any>;
    postAvailableAccount: ({ companyID, accountNumber }: {
        companyID: string;
        accountNumber: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    postValidateAccountCIF: ({ accountNo }: {
        accountNo: string;
    }, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<any, any>>;
    validateAccountNumber: (params: any) => Promise<any>;
    getListCompany: ({ limit, page, search }: {
        limit?: string;
        page?: string;
        search?: string;
    }) => Promise<import("axios").AxiosResponse<any, any> | null>;
    postValidateAccountUKLN: ({ accountNo, countryCode, }: {
        accountNo: string;
        tellerId?: string;
        countryCode?: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    getAccountTaskDataV2: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    getAccountCreatedUpdated: () => Promise<any>;
    getRdnAccount: (body?: any) => Promise<any>;
    getListMassRegister: (params: any) => Promise<{
        data: any;
        pagination: any;
    } | undefined>;
    createTaskMassRegister: (params: {
        batchId: string;
        action: string;
        companyId: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    deleteBatchMassRegister: (params: {
        batchId: string;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default AccountService;
