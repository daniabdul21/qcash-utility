import * as Yup from "yup";
export interface Company {
    companyGroupLimits: any[];
    companyID: string;
    companyLimits: any[];
    companyName: string;
    createdAt: Date;
    createdByID: string;
    groupName: string;
    holdingCompanyName: string;
    holdingID: string;
    subsidiaryCompanies: any[];
    updatedAt: Date;
    updatedByID: string;
}
export interface CountryOptions {
    countryCode: string;
    description: string;
}
export interface Currency {
    currencyID: string;
    name: string;
    code: string;
    createdAt: Date;
    createdByID: string;
    updatedAt: Date;
    updatedByID: string;
}
export interface CompanyLimit {
    companyID: string;
    currencyID: string;
    currency: Currency;
    limit: string;
    createdAt: Date;
    createdByID: string;
    updatedAt: string;
    updatedByID: string;
}
export interface CountryOptions {
    value: string;
    label: string;
}
export declare enum DETAILS {
    ID_NAME = "ID Name",
    MOTHER_ORIGIN_NAME = "Mother Origin Name",
    ADDRESS = "Address",
    ZIP_CODE = "ZIP Code",
    EMAIL_ADDRESS = "Email Address",
    PHONE_NUMBER = "Phone Number",
    MOBILE_NUMBER = "Mobile Number",
    TAX_ID = "Tax ID",
    TOKEN_ID = "Token ID"
}
export type CompanyCreatePayloadProps = {
    company: {
        companyID: number | string;
        holdingID: number | string;
        groupName: string;
        companyName: string;
        countryName: string;
        currencyCode: string;
        countryCode: string;
        holdingCompanyName: string;
        companyType: {
            value: string;
            label: string;
        };
        registrationID: number | string;
        branchID: {
            value: string;
            label: string;
        };
        taxID: number | string;
        address: string;
        zipCode: string;
        phoneNumber: string;
        faxNumber: number | string;
        companyLoginCode: string;
        cifCompany: number | string;
        companyStatus: {
            value: string;
            label: string;
        };
        businessEntity: {
            value: string;
            label: string;
        };
        districtCompany: string;
        province: string;
        city: string;
        relationshipManager: string[];
        companyLimits: [
            {
                companyID: number | string;
                currencyID: number | string;
                currency: {
                    name: string;
                    code: string;
                } | string;
                limit: number | string;
            }
        ];
        companyGroupLimits: [
            {
                holdingCompanyID: number;
                currencyID: number;
                currency: {
                    name: string;
                    code: string;
                };
                limit: number;
            }
        ];
        subsidiaryCompanies: string[] | any;
        companyLimitsTmp?: [
            {
                currency: string;
                limit: number | string;
            }
        ];
        packageID: number;
        validationSuccess?: boolean;
    };
    admin: {
        SystemAdmin: {
            type: string;
            idType: {
                value: number;
                label: string;
            };
            idNumber: number | string;
            IdName: string;
            MotherOriginName: string;
            Address: string;
            ZipCode: string | number;
            EmailAddress: string;
            PhoneNumber: string | number;
            MobileNumber: string | number;
            TaxId: string | number;
            TokenNumber: string | number;
            loadSuccess: boolean;
        };
        Admin: {
            type: string;
            idType: {
                value: number;
                label: string;
            };
            idNumber: number | string;
            IdName: string;
            MotherOriginName: string;
            Address: string;
            ZipCode: string | number;
            EmailAddress: string;
            PhoneNumber: string | number;
            MobileNumber: string | number;
            TaxId: string | number;
            TokenNumber: string | number;
            loadSuccess: boolean;
        };
    };
    workflow: {
        isTransactionalStp: string | boolean;
        isNonTransactionalStp: string | boolean;
        transactionalStpStep: {
            verifier: boolean;
            approver: boolean;
            releaser: boolean;
        };
        nonTransactionalStpStep: {
            verifier: boolean;
            approver: boolean;
            releaser: boolean;
        };
        needToken: boolean;
    };
    account: [];
    isDraft: boolean;
    taskID: number | string;
    accountNumberCompany?: string | number;
    isManual?: boolean | string;
    usersLimit?: string | number;
    channel?: string;
    checked: [];
};
export type SelectBox = {
    value: string;
    label: string;
};
export interface CompanyGetResponse {
    company: object;
    workflow: object;
    task: object;
}
export declare const ItemStatus: (status: string, isMaker: boolean, isSigner: boolean) => string;
export declare const companyInfoScheme: Yup.ObjectSchema<{
    company: {
        address: string;
        companyLoginCode: string;
        companyName: string;
        countryName: string;
        companyType: {
            value: string;
        };
        businessEntity: {
            value: string;
        };
        registrationID: string;
        taxID: string;
        branchID: {
            value: string;
        };
        phoneNumber: string;
    };
    accountNumberCompany: string | undefined;
    usersLimit: string | undefined;
}, Yup.AnyObject, {
    company: {
        companyLoginCode: undefined;
        companyName: undefined;
        countryName: undefined;
        companyType: {
            value: undefined;
        };
        businessEntity: {
            value: undefined;
        };
        registrationID: undefined;
        taxID: undefined;
        branchID: {
            value: undefined;
        };
        address: undefined;
        phoneNumber: undefined;
    };
    accountNumberCompany: undefined;
    usersLimit: undefined;
}, "">;
export declare const companyAdminScheme: Yup.ObjectSchema<{
    admin: {
        SystemAdmin: {
            idType: {
                value: string;
            };
            idNumber: string;
            EmailAddress: string;
            IdName: string;
        };
        Admin: {
            idType: {
                value: string;
            };
            idNumber: string;
            EmailAddress: string;
            IdName: string;
        };
    };
}, Yup.AnyObject, {
    admin: {
        SystemAdmin: {
            idType: {
                value: undefined;
            };
            idNumber: undefined;
            EmailAddress: undefined;
            IdName: undefined;
        };
        Admin: {
            idType: {
                value: undefined;
            };
            idNumber: undefined;
            EmailAddress: undefined;
            IdName: undefined;
        };
    };
}, "">;
export declare const companyTransactionScheme: Yup.ObjectSchema<{
    company: {
        companyLimits?: {
            limit?: string | undefined;
            currency: {
                value: string;
            };
        }[] | undefined;
    };
}, Yup.AnyObject, {
    company: {
        companyLimits: "";
    };
}, "">;
export declare const packageLicenseScheme: Yup.ObjectSchema<{
    company: {
        packageID: number;
    };
}, Yup.AnyObject, {
    company: {
        packageID: undefined;
    };
}, "">;
export declare const companyAccountScheme: Yup.ObjectSchema<{
    accountLength: string | undefined;
    account: {
        cif?: string | undefined;
        accounts?: {
            AccountNumber?: string | undefined;
            AccountAlias?: (string | undefined)[] | undefined;
            CheckedAccount?: boolean | undefined;
            AccountHolderName: string;
            AccessLevel: {
                value: string;
            };
            AccountOwner: {
                value: string;
            };
        }[] | undefined;
    }[] | undefined;
}, Yup.AnyObject, {
    accountLength: undefined;
    account: "";
}, "">;
export declare const defaultOptionCountry: {
    value: string;
    label: string;
    currencyCode: string;
}[];
