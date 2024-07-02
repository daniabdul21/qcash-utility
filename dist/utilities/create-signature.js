"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSignature = void 0;
var crypto_js_1 = __importDefault(require("crypto-js"));
var createSignature = function (params, companyID, userID) {
    var signature = process.env["NEXT_PUBLIC_SIGNATURE"];
    if (typeof window === "undefined" || !signature)
        return null;
    var token = localStorage.getItem("access-token");
    if (!token)
        return null;
    var hash = crypto_js_1.default.HmacSHA256("bodydata:" + JSON.stringify(params) + "&bearer:".concat(token, "&companyid:") + companyID + "&userid:" + userID, signature);
    return hash.toString(crypto_js_1.default.enc.Hex);
};
exports.createSignature = createSignature;
//# sourceMappingURL=create-signature.js.map