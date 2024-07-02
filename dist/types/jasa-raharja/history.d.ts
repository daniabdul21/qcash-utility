import { ProductAuthorityType, ProductTypeNameEnum } from "@ordentco/addons-auth-provider/dist/types";
export interface IHistoryJasaRaharja {
    authority: ProductAuthorityType;
    productAuthorities: any;
    token: string;
    productID: any;
    productName: ProductTypeNameEnum;
}
