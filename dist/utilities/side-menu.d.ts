import { NavigationMenuSidebar, ProductSidebarType } from "./types";
import { ProductAuthorityType } from "@ordentco/addons-auth-provider/types";
export declare const mappingSidebar: (menu: any, product: ProductSidebarType, THIRD_PARTY?: Record<string, unknown> | any, productAuthorities?: Record<string, ProductAuthorityType>, translateTo?: (key: string) => void) => Array<NavigationMenuSidebar>;
