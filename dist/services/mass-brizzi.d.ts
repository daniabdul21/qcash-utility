import { MBPayloadDownloadTemplate } from "@/types";
declare const MassBrizziService: (companyID?: string | null, userID?: string | null) => {
    listBatch: (isHistory?: boolean) => (data: any) => Promise<any> | null;
    detailBatch: (batchId: string, data: any) => Promise<any> | null;
    getFilter: (data: any) => Promise<any> | null;
    downloadBatch: (data: any, isHistory: boolean) => (props: any) => Promise<any>;
    downloadTransaction: (data: any) => (props: any) => Promise<any>;
    actionMassBrizzi: (data: any) => Promise<any> | null;
    detailTransaction: (data: any) => Promise<any> | null;
    downloadMasterFile: (data: MBPayloadDownloadTemplate) => Promise<any>;
    downloadReceipt: ({ batchId, transactionId, isBatch, }: {
        batchId: string;
        transactionId: string[];
        isBatch?: boolean;
    }) => Promise<any>;
    postMassBrizzi: (data: any) => Promise<any>;
};
export default MassBrizziService;
