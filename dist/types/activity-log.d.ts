export interface DownloadActivityLogProps {
    id?: string;
    format: "pdf" | "xls" | "csv";
    getFilter?: any;
    getFilterOr?: any;
    getSearch?: any;
    getSort?: any;
    getDir?: string;
    page?: string | number;
    pageIndex?: string | number;
    pageLimit?: string | number;
    limit?: string | number;
    type?: string;
}
