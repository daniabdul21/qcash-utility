declare const PlafonPegadaianService: (companyID: string | null, userID: string | null) => {
    listPlafond: (isHistory?: boolean) => (data: any) => Promise<any> | null;
    getFilterPlafond: (data: any) => Promise<any> | null;
    createPlafond: (data: any, taskID?: string) => Promise<any>;
    detailTransaction: (data: any) => Promise<any>;
    inquiryPegadaian: (data: any) => (pagination: any) => Promise<any>;
    detailInquiryPlafond: (data: any) => Promise<any>;
    downloadListPlafond: (data: any, isHistory: boolean) => (props: any) => Promise<any>;
    downloadReceiptPlafond: ({ taskId, isHistory }: {
        taskId: number[];
        isHistory: boolean;
    }) => Promise<any>;
    actionPlafond: (data: any) => Promise<any> | null;
};
export default PlafonPegadaianService;
