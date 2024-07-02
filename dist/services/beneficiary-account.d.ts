declare const BeneficiaryAccountService: (token: string | null, baseURL?: string) => {
    getBeneficiaryAccountData: (params: any) => Promise<any>;
    postValidateBeneficiaryAccount: ({ accountNo, bankCode, amount, }: {
        accountNo: string;
        bankCode: string;
        amount?: string;
    }) => Promise<{
        data: any;
    }>;
    getBeneficiaryBankData: (params: any) => Promise<any>;
    getBeneficiaryAccountDataByRole: (params?: any) => Promise<any>;
    postValidateBeneficiaryAccountProxy: (body: any) => Promise<{
        data: any;
    }>;
    getDataBeneficiary: (params?: any) => Promise<any>;
    postValidateEnquiry: (body: any) => Promise<{
        data: any;
    }>;
    beneficiaryFavorite: (params: any) => Promise<any>;
    beneficiaryFavoriteMethod: (params: any) => Promise<any>;
    postValidateBeneficiaryAccountPaymentHub: (payload: any) => Promise<any>;
};
export default BeneficiaryAccountService;
