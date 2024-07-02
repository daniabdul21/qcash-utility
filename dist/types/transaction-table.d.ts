import { IconType } from "react-icons";
import { ProductAuthorityType } from "./authority";
import { TransactionActionEnum } from "./transaction";
export interface DownloadTransactionTableProps {
    id?: string;
    format: "pdf" | "xls" | "csv";
    getFilter?: any;
    getFilterOr?: any;
    getSort?: any;
    getDir?: string;
    filter?: string;
    page?: string | number;
    pageIndex?: string | number;
    pageLimit?: string | number;
    limit?: string | number;
    typeTab?: string;
}
export interface BulkActionType {
    title: string;
    action: TransactionActionEnum;
    Icon: IconType;
    props: any;
    isActionAllowed: (authority: ProductAuthorityType, rows: any[], roleID?: string) => boolean;
    modalLabel?: {
        title: string;
        description: string;
        buttonTitle?: string;
        actionMessage?: string;
    };
}
export interface BulkActionModalColumns {
    Header: string;
    accessor?: string;
    value?: any;
    width?: string;
    Cell?: (props: any) => JSX.Element;
}
