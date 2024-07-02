interface Account {
    errorMessage: string;
    validate: boolean;
    account: string;
    accountStatus: string;
    accountType: string;
    currency: string;
    shortName: string;
}
interface Members {
    interest_payment_type: string;
    companyAccounts: string;
    accounts: Account[];
}
export interface InitialValue {
    companyID: string;
    shortName: string;
    companyName: string;
    groupName: string;
    branchCode: string;
    branchName: string;
    currency: string;
    minimumGroupBalance: string;
    groupOverdraftLimit: string;
    debitRate: string;
    creditRate: string;
    members: Members;
}
export {};
