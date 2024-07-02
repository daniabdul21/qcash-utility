import { ProductAuthorityType } from "./authority";
export interface CardMerchantProps {
    authority?: ProductAuthorityType;
    authorities?: CardMerchantAuthorities;
    token: string;
    username?: string;
    userType?: string;
    isEdit?: boolean;
}
export interface TableMap {
    cardNumber: string;
}
export interface CardMerchantAuthorities {
    "Card Request": ProductAuthorityType;
    "Card Confirmation": ProductAuthorityType;
    "Card Relation": ProductAuthorityType;
    "Generate Pin": ProductAuthorityType;
    "Card Block": ProductAuthorityType;
}
export interface ActiveTabProps {
    name: string;
    path: string;
    hidden: boolean;
    allowCreate?: boolean;
    allowDownload?: boolean;
    release?: boolean;
    authority?: any;
}
export declare enum CardMerchantStatus {
    DRAFT = 1,
    ON_CHECKER = 2,
    ON_SIGNER = 3,
    ON_RELEASER = 4,
    RETURNED = 5,
    REJECTED = 6,
    DELETED = 7,
    PENDING = 8,
    PROCESS = 9,
    SUCCESS = 10,
    FAILED = 11,
    WAITING = 12,
    FILE_IN_PROCESS = 13,
    FILE_INVALID = 14,
    READY_TO_SUBMIT = 15
}
export declare enum CardMerchantStatusText {
    DRAFT = "Draft",
    ON_CHECKER = "On Checker",
    ON_SIGNER = "On Signer",
    ON_RELEASER = "On Releaser",
    RETURNED = "Returned",
    REJECTED = "Rejected",
    DELETED = "Deleted",
    PENDING = "Pending",
    PROCESS = "Process",
    SUCCESS = "Success",
    FAILED = "Failed",
    WAITING = "Waiting",
    FILE_IN_PROCESS = "File In Process",
    FILE_INVALID = "File Invalid",
    READY_TO_SUBMIT = "Ready To Submit"
}
export interface SelectedCardMerchantRows {
    delete: any[];
    approval: any[];
    download: any[];
}
