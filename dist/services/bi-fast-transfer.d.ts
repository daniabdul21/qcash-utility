import { MultipleBIFASTTransferType } from "@/types";
declare const BIFASTTransferService: (token: string | null, baseURL?: string) => {
    postTransactionStatus: (body: {
        remittanceAccount: string;
    }) => Promise<{
        data: any;
    }>;
    getMenuLicense: (companyId: string, moduleId: string | number) => Promise<any>;
    getCompanyLimit: (companyId: string) => Promise<any>;
    getWorkflow: (companyId: string, moduleId: string | number) => Promise<any>;
    getBankList: () => Promise<any>;
    createMultipleBIFASTTransfer: (body: MultipleBIFASTTransferType.Payload) => Promise<{
        data: any;
    }>;
};
export default BIFASTTransferService;
