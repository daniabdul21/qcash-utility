import { ProductAuthoritiesType, ProductAuthorityType } from "@ordentco/addons-auth-provider/dist/types";
import { Dispatch, SetStateAction } from "react";
export interface IHeaderContainerJasaRaharja {
    setIsReload: any;
    setLastUpdateTime: any;
    lastUpdateTime: any;
}
export interface ITabTableJasaRaharja {
    tabs: any;
    activeTabValue: any;
    setActiveTab: any;
    setFilterTab: Dispatch<SetStateAction<string>>;
}
export interface IButtonTabJasaRaharja {
    activeMethod: any;
    activeTabValue: any;
    setActiveMethod: any;
    methods: any;
    router: any;
}
export interface IListTableJasaRaharja {
    activeTab: any;
    authority: ProductAuthorityType;
    idToken: string;
    isReload: boolean;
    productAuthorities: ProductAuthoritiesType;
    setIsReload: any;
    filterTab: string;
    showTransactionModal: any;
    showWorkflowModal: any;
    productID: any;
    productName: any;
    setSummary: (data: any) => void;
    showResponseModal: any;
    hideResponseModal: any;
}
export interface IHistoryTableJasaRaharja {
    activeTab: any;
    authority: ProductAuthorityType;
    idToken: string;
    isReload: boolean;
    productAuthorities: ProductAuthoritiesType;
    setIsReload: any;
    showTransactionModal: any;
    showWorkflowModal: any;
    productID: any;
    productName: any;
    setSummary: (data: any) => void;
    showResponseModal: any;
    hideResponseModal: any;
}
export interface ICellActionMoreJasaRaharja {
    handleRedirect: any;
    handleWorkflow: any;
    handleDownloadSlip: any;
    status: any;
    isCanIDownload: any;
    activeTab: any;
}
export interface ICellActionApproverJasaRaharja {
    isCanIApprove: any;
    ApproverActions: any;
    showTransactionModal: any;
    newDetail: any;
}
