import { ProductAuthorityType } from "./authority";
export interface DOPupukComponentProps {
    authority: ProductAuthorityType;
    isMaker: boolean;
}
export interface DOPupukCreateEditProps {
    isEdit: boolean;
}
export interface AccountItem {
    value: string;
    name: string;
    label: string;
}
export interface ProductItem {
    no: number;
    name: string;
}
export interface DOPupukSubmitPayload {
    isDraft: boolean;
    taskId: string;
    orderRequest: any;
}
export interface DOPupukProductDetailProps {
    open?: any;
    onClose: any;
    title?: string;
    variant?: "default" | "qcash";
    productList?: any[];
}
export interface DOPupukAlertMessage {
    message: string;
    variant: "warning" | "info" | "danger" | "info-2";
}
