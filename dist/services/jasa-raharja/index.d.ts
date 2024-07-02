import { TransactionActionEnum } from "@/types";
declare const JasaRaharjaService: () => {
    getTaskList: (productName: any, activeTabValue: string) => (params: any) => Promise<any>;
    getTaskById: (taskID: string | number, service: string) => Promise<any>;
    getStatusCounter: (params: any) => Promise<any>;
    getStatusCounterAndTaskList: (productName: string, activeTabValue: string) => (params: any) => Promise<any>;
    updateTask: (taskID: string, payload: {
        productID: string;
        action: TransactionActionEnum;
        reasons?: string;
        comment?: string;
        passCode?: string;
    }) => Promise<any>;
    downloadReceipt: (taskId: string, service: string) => Promise<any>;
    downloadRecap: (productName: "SPB Jasaraharja" | "SPT Jasaraharja", type: "list" | "history", dynamicQuery: string | undefined) => (props: any) => Promise<any>;
};
export default JasaRaharjaService;
