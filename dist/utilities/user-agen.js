"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Copyright © 2023 PT Orde Digital. All right reserved
 * @author Puji Ermanto <pujiermanto@ordent.co>
 * @license Proprietary
 * @package utils/helpers
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobile = exports.setUA = exports.ua = exports.os = exports.engine = exports.device = exports.cpu = exports.browser = exports.UA = void 0;
var ua_parser_js_1 = require("ua-parser-js");
exports.UA = new ua_parser_js_1.UAParser();
exports.browser = exports.UA.getBrowser();
exports.cpu = exports.UA.getCPU();
exports.device = exports.UA.getDevice();
exports.engine = exports.UA.getEngine();
exports.os = exports.UA.getOS();
exports.ua = exports.UA.getUA();
var setUA = function (uaStr) { return exports.UA.setUA(uaStr); };
exports.setUA = setUA;
exports.isMobile = exports.device.type === "mobile" ? true : false;
//# sourceMappingURL=user-agen.js.map