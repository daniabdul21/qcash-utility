export interface DownloadAdvancedTableProps {
    format: "pdf" | "xls" | "csv";
    filter?: string;
    sort?: string;
    dir?: string;
    fileName: string;
}
export interface FilterDataProps {
    key: string;
    value: string;
    label: string;
    [key: string]: string;
}
export declare enum NewVariantButton {
    Approve = "blue-new",
    Reject = "ghost-danger",
    "Send for Rework" = "ghost-primary-new",
    Delete = "ghost-danger",
    Download = "ghost-primary-new"
}
