export declare const wafRegex: RegExp;
export declare const allSpecialRegex: RegExp;
export declare const escapeString: (unsafe?: string) => string;
export declare const cleanString: (unsafe?: string, regex?: RegExp) => string;
export declare const unescapeString: (input: string) => string;
export declare const encodeObject: (obj: any, exclusion?: any[]) => any;
export declare const decodeObject: (obj: any) => any;
export declare const isAlphanumeric: (input: string) => boolean;
