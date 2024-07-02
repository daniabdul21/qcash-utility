import { ProductTypeEnum } from "./product";
export declare enum AuthorityLevelEnum {
    approve = "approve",
    batch = "batch",
    dataEntry = "data_entry",
    delete = "delete",
    downloadReport = "download_report",
    dummyauthoritylevel = "dummyauthoritylevel",
    modify = "modify",
    release = "release",
    template = "template",
    transferOverview = "transfer_overview",
    uploadFile = "upload_file",
    verify = "verify",
    viewOnlineActivity = "view_online_activity"
}
export type ProductAuthorityType = Record<keyof typeof AuthorityLevelEnum | "anyAuthority" | "allAuthority", boolean>;
export type ProductAuthoritiesType = Record<keyof typeof ProductTypeEnum, ProductAuthorityType>;
