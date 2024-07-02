import moment from "moment";
export declare const getTimesAgo: (date: any, translation: any) => string;
export declare const formatDate: (date: moment.MomentInput, format?: string) => string;
export declare const getDayAfter: (date: Date) => Date;
export declare const createDate: (d: string) => Date | "";
export declare const stringToDate: (str: string) => Date;
export declare const getYearAfter: (date: Date, range?: number) => Date;
