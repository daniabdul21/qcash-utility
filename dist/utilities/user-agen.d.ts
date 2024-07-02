/**
 * Copyright © 2023 PT Orde Digital. All right reserved
 * @author Puji Ermanto <pujiermanto@ordent.co>
 * @license Proprietary
 * @package utils/helpers
 */
export declare const UA: import("ua-parser-js").UAParserInstance;
export declare const browser: import("ua-parser-js").IBrowser;
export declare const cpu: import("ua-parser-js").ICPU;
export declare const device: import("ua-parser-js").IDevice;
export declare const engine: import("ua-parser-js").IEngine;
export declare const os: import("ua-parser-js").IOS;
export declare const ua: string;
export declare const setUA: (uaStr: any) => import("ua-parser-js").UAParserInstance;
export declare const isMobile: boolean;
