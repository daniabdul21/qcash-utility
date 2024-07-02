import { IconType } from "react-icons";
import { QueryParams } from "./app";

export enum MenuLicenseTaskStatus {
  AllStatus = "AllStatus",
  Approved = "Approved",
  Draft = "Draft",
  Pending = "Pending",
  Rejected = "Rejected",
  Returned = "Returned",
}

export enum MenuLicenseTaskStep {
  AllStep = "AllStep",
  Maker = "Maker",
  Checker = "Checker",
  Signer = "Signer",
  Releaser = "Releaser",
}

export interface MenuLicenseParams extends QueryParams {
  status: keyof typeof MenuLicenseTaskStatus;
  step: keyof typeof MenuLicenseTaskStep;
  in: string;
  menuLicenseID?: string;
}

interface Task {
  taskID: string;
  type: string;
  status: keyof typeof MenuLicenseTaskStatus;
  step: keyof typeof MenuLicenseTaskStep;
  featureID: string;
  lastApprovedByID: string;
  lastRejectedByID: string;
  lastApprovedByName: string;
  lastRejectedByName: string;
  // createdByID: string;
  createdByName: string;
  comment: string;
  updatedByName: string;
  reasons: string;
  // companyID: string;
  // holdingID: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TransactionLimit {
  limit: string;
  currencyID: string;
  currency: string;
}

export interface MenuType {
  menuLicenseID: string;
  menuID: string;
  parentID: string;
  label: string;
  isModule: boolean;
  companyID: string;
  isAllowed: boolean;
  fee: string;
  feeCurrency: string;
  feeType: string;
  transactionLimit: TransactionLimit[];
  productID: string;
  productName: string;
  orderNumber: string;
  Company: null;
  chargeDate: any[];
  createdAt: Date;
  createdByID: string;
  updatedAt: Date;
  updatedByID: string;
  name: string;
  isEnable: boolean;
  accountID: string;
  accountNumber: string;
  accountName: string;
  accountAlias: string;
  taskID: string;
  isTransactional: boolean;
  moduleID: string;
  penalty: string;
  feeMultiple: string;
}

export interface MenuLicenseResponse {
  menus: any[];
  task: Task;
  detail: {
    isParent: boolean;
    name: string;
    changelog: string;
    companyID: string;
    companyName: string;
    userTypeName: string;
    menus: MenuType[];
  };
  hidedMenus: any[];
}

//here type for menu sidebar
export type NavigationMenuSidebar = {
  parentID: string;
  productID?: string | number;
  label?: string;
  menuID: string;
  isEnable?: boolean;
  iconURI?: IconType;
  name?: string;
  href: string;
  icon?: any | null;
  enable?: boolean;
  current?: boolean;
  children?: Array<NavigationMenuSidebar>;
  onClick?: () => void;
  isModule?: boolean;
};

export type MenuSidebarDetailTask = {
  changelog: string;
  companyID: string;
  isParent: boolean;
  name: string;
  userTypeName?: string;
  companyName?: string;
};

export type MenuSidebarType = {
  children?: Array<MenuSidebarType>;
  disableList?: Array<any>;
  href?: string;
  icon?: () => void | null;
  iconURI?: string;
  id?: number;
  isModule?: boolean;
  isEnable?: boolean;
  label?: string;
  menuID?: string;
  name?: string;
  orderNumber?: string;
  parentID?: string;
  productID?: string;
  productName?: string;
  rootPath?: string;
  taskID?: string;
  userType?: string;
  task?: Task;
  detail?: MenuSidebarDetailTask;
};

export type ProductSidebarType = {
  data: {
    productID: string | number;
    name: string;
    is3rdParty: boolean;
    IsTransactional: boolean;
    IsBa: boolean;
    IsCa: boolean;
    IsCu: boolean;
    RefByTask: true;
    ParentID: string | number;
    BaseHreff: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
  }[];
};
