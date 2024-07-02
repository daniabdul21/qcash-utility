/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Copyright © 2023 PT Orde Digital. All right reserved
 * @author Puji Ermanto <pujiermanto@ordent.co>
 * @license Proprietary
 * @package utils/helpers
 */

import { UAParser } from "ua-parser-js";

export const UA = new UAParser();
export const browser = UA.getBrowser();
export const cpu = UA.getCPU();
export const device = UA.getDevice();
export const engine = UA.getEngine();
export const os = UA.getOS();
export const ua = UA.getUA();
export const setUA = (uaStr: any) => UA.setUA(uaStr);
export const isMobile = device.type === "mobile" ? true : false;
