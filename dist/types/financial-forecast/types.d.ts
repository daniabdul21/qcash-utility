declare namespace FinancialForecastTypes {
    interface Account {
        label: string;
        value: string;
        accountNumber: string;
        accountName: string;
        accountAlias: string;
        accountCurrency: string;
        accountID: string;
        accountType?: string;
    }
    type SelectedAccountList = {
        accountName: string;
        accountNumber: string;
        bankName: string;
        accountCurrency: string;
        accountAlias: string;
        accountID: string;
        accountType?: string;
    };
    type PayloadAccountStatement = {
        format: {
            value: string;
            label: string;
        };
        startDate: string;
        endDate: string;
        accounts: SelectedAccountList[];
    };
    type PayloadAccountSummary = {
        period: {
            value: string;
            label: string;
        };
        bank: string[];
        accountCategory: string;
        account: {
            value: {
                cif_no: string;
                corporate_code: string;
                norek_varchar: string;
            };
            label: string;
        };
        month: Date;
        last: Date;
    };
    type PayloadRequestAccountSummary = {
        cif_no: string;
        bank?: string[];
        norek_varchar: string;
        corporate_code: string;
        start_date: string;
        end_date: string;
    };
    interface AccountBalanceType {
        no: number;
        image: string;
        country: string;
        amount: number;
        detail: HeadDetailAccountBalanceType[];
        error: string;
        message: string;
    }
    interface HeadDetailAccountBalanceType {
        bankName: string;
        data: DetailAccountBalanceType[];
        subtotal: number;
        debitTotal: number;
        creditTotal: number;
        endingBalanceTotal: number;
    }
    interface DetailAccountBalanceType {
        accountNumber: number;
        accountName: string;
        debit: number;
        credit: number;
        endingBalance: number;
    }
    interface QuickStatType {
        label: string;
        total: number;
        image: string;
    }
    type Response = {
        id: string;
        userId: string;
        companyId: string;
        accountId: string;
        accountNumber: string;
        status: string;
        detail: string;
        fileType: string;
        fileName: string;
        startDate: Date;
        endDate: Date;
        createdAt: Date;
        updatedAt: Date;
    };
    type Request = {
        accountNumber: string[];
        startDate: string;
        endDate: string;
        fileType: string;
    };
    type MenuResponse = {
        menuLicenseID: string;
        menuID: string;
        parentID: string;
        label: string;
        isModule: boolean;
        companyID: string;
        isAllowed: boolean;
        fee: string;
        feeCurrency: string;
        feeType: string;
        transactionLimit: [
            {
                limit: string;
                currencyID: string;
                currency: string;
            }
        ];
        productID: string;
        productName: string;
        orderNumber: string;
        Company: {
            companyID: string;
            companyName: string;
        };
        chargeDate: Date[];
        createdAt: Date;
        createdByID: string;
        updatedAt: Date;
        updatedByID: string;
        name: string;
        isEnable: boolean;
        accountID: string;
        accountNumber: string;
        accountName: string;
        accountAlias: string;
        taskID: string;
        isTransactional: boolean;
        moduleID: string;
        penalty: string;
        feeMultiple: string;
        hostToHost: {
            enabled: boolean;
            stp: boolean;
            sharedFolderLocation: string;
            userAlias: string;
            serverUsername: string;
            serverPassword: string;
        };
        isBiRtgs: boolean;
        isMTEnable: boolean;
        enableDecryption: boolean;
        encryptionType: string;
        encryptionKey: string;
    };
    type AccountOptions = {
        value: string;
        label: string;
        accountAlias: string;
        accountNumber: string;
    };
    interface IEmailStatement {
        taskId: string;
        accountNumber: string;
        description: string;
        emails: string;
        scheduleEndDate: string;
        sehceduleTimes: string;
        scheduleType: string;
        scheduleStartDate: string;
        scheduleDay: string;
        scheduleDate: string;
        status: string;
        fileFormat: string;
    }
}
export type { FinancialForecastTypes };
