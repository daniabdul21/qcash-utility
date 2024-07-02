import { ProductAuthorityType } from "./authority";
import { TaskActionEnum } from "./digi-guarantee";
export interface DOPertaminaCreateEditProps {
    isEdit: boolean;
}
export interface DOPertaminaSubmitPayload {
    isDraft: boolean;
    isUpdate: boolean;
    taskId: number;
    orderRequest: any;
    deliveryDetails: any[];
}
export interface DOPertaminaComponentProps {
    authority: ProductAuthorityType;
    isMaker: boolean;
}
export interface SelectedDOPRows {
    delete: any[];
    approval: any[];
    download: any[];
    receipt: any[];
}
export interface CutOffData {
    isCutOff: boolean;
    fastestAvailableTime: any;
}
export interface DOPOptionsItem {
    value: string;
    label: string;
    desc?: string;
}
export interface DOPMaterialItem {
    id: string;
    deliveryDetailId?: string;
    materialId: string;
    materialDescription: string;
    deliveryDate: string | Date;
    quantity: number;
    transporter: string;
    trip: string;
}
export interface GroupProductItem {
    idGroupProduct?: string;
    idSalesOrg?: string;
    idDistributionChannel?: string;
    description: string;
}
export interface DOPDownloadState {
    list: boolean;
    receipt: boolean;
}
export interface StatusGroupItem {
    code: string;
    name: string;
    count: string;
    isPending?: boolean;
}
export interface CustomBulkUpdateValue {
    rows: any;
    action: TaskActionEnum;
    comment: string | undefined;
    reasons: string | undefined;
    passCode: string | undefined;
}
