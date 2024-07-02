import { ITaskDataJasaRaharja } from "@/types";
import { ProductIdByTypeEnum, ProductTypeNameEnum } from "@ordentco/addons-auth-provider/dist/types";
export interface IDetailJasaRaharja {
    data: ITaskDataJasaRaharja;
    productID: ProductIdByTypeEnum;
    productName: ProductTypeNameEnum;
    taskId: string;
}
export declare enum FormatEnumJasaRaharja {
    csv = "csv",
    pdf = "pdf",
    xls = "xlsx"
}
