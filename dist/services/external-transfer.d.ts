import { externalCalculatePayload, SingleExternalTransferType, TransactionActionPayload, TaskActionEnum, DownloadTransactionTableProps } from "@/types";
declare const ExternalTransferService: (token?: string | null, baseURL?: string) => {
    updateTask: (body: {
        taskID: string[];
        action: TaskActionEnum;
        reasons?: string;
        comment?: string;
        passCode?: string;
        productID?: string;
    }) => Promise<{
        data: any;
    }>;
    updateTaskCache: (rCode: string) => Promise<{
        data: any;
    }>;
    updateTaskOtp: (body: {
        taskID: string[];
        action: TaskActionEnum;
        reasons?: string;
        comment?: string;
        passCode: string;
        productID?: string;
    }) => Promise<{
        data: any;
    }>;
    getTransferExchangeRate: (dealtCurrency: string, counterCurrency: string) => Promise<{
        data: any;
    }>;
    getListTransfer: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    checkCutOffHoilday: (time: string, moduleId: string, currency?: string) => Promise<{
        data: any;
    }>;
    checkCutOffHoildayForRecurring: (params: any) => Promise<{
        data: any;
    }>;
    getListExternalTransfer: (params: any) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
        pagination: any;
    }>;
    getPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getExternalPendingTask: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getActivityLogs: (type: string) => (params: any) => Promise<any>;
    getMenuLicense: (companyId: string | null, productID?: string) => Promise<any>;
    getSingleTransfer: (taskID: string) => Promise<{
        data: any;
    }>;
    getSingleTransferDynamic: (taskID: string, method: string) => Promise<{
        data: any;
    }>;
    getCompanyLimit: (companyId: string) => Promise<any>;
    getCompanyLimitSummary: (companyId: string, holdingId: string, currencyCode: string) => Promise<any>;
    getWorkflow: (companyId: string, moduleId: string, currency: string) => Promise<any>;
    getListSingleTemplate: (url: string, params: any) => Promise<{
        data: any;
    }>;
    calculateTransfer: (payload: externalCalculatePayload) => Promise<any>;
    validateOtp: (params: any) => Promise<{
        data: any;
    }>;
    postSingleTemplate: (url: string, body: SingleExternalTransferType.Form | SingleExternalTransferType.TemplateKliring) => Promise<{
        data: any;
    }>;
    putSingleTemplate: (url: string, id: string, body: SingleExternalTransferType.Template) => Promise<{
        data: any;
    }>;
    postSingleTransfer: (body: SingleExternalTransferType.Payload, method: any) => Promise<{
        data: any;
    }>;
    putSingleTransfer: (taskId: string | number, body: SingleExternalTransferType.Payload, method: any) => Promise<{
        data: any;
    }>;
    updateTransaction: (id: string, payload: TransactionActionPayload, method: string) => Promise<{
        error: boolean;
        message: any;
        data?: undefined;
    } | {
        error: boolean;
        message: string;
        data: any;
    }>;
    deleteSingleTemplate: (url: string, id: string) => Promise<{
        data: any;
    }>;
    postSingleExternalTransfer: (body: any) => Promise<{
        data: any;
    }>;
    updateExternalTransferStatus: (taskId: string, action: TaskActionEnum, reasons?: string, comment?: string, product?: string, typeAction?: string, passCode?: string) => Promise<{
        data: any;
        response: import("axios").AxiosResponse<any, any>;
    }>;
    validateExternalOtp: (params: any) => Promise<{
        data: any;
    }>;
    downloadDataTableKliring: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadDataTable: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadDataTableAll: (props: DownloadTransactionTableProps) => Promise<void>;
    downloadDataTableOtf: (props: DownloadTransactionTableProps) => Promise<void>;
    getMinTransactionBiFast: () => Promise<{
        data: any;
    }>;
    getMinTransactionOnlineTransfer: () => Promise<{
        data: any;
    }>;
    getMaxTransactionOnlineTransfer: () => Promise<any>;
    getSystemKey: (param: string) => Promise<{
        data: any;
    }>;
    getEFTFilterBanks: (params?: any) => Promise<any>;
    getBankByBIC: (bankCode?: string) => Promise<any>;
    getBanks: (bankName?: string) => Promise<any>;
    getBifastBanks: () => Promise<any>;
    validateBifastBankSuspended: (body: Record<string, string>) => Promise<any>;
    downloadReceiptByMethod: (props: Record<string, string>) => Promise<void>;
    verifyTransactionBifast: (props: Record<string, string>) => Promise<any>;
};
export default ExternalTransferService;
