"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalesFromCurrency = void 0;
var getLocalesFromCurrency = function (currency) {
    switch (currency) {
        case "IDR":
            return "id-ID";
        case "USD":
            return "en-US";
        case "JPY":
            return "ja-JP";
        case "SGD":
            return "en-SG";
        case "SAR":
            return "en-SA";
        case "HKD":
            return "en-HK";
        case "GBP":
            return "en-GB";
        case "CNY":
            return "zh-CN";
        case "NZD":
            return "en-NZ";
        case "SEK":
            return "en-SE";
        case "AED":
            return "en-AE";
        case "NOK":
            return "nb-NO";
        case "EUR":
            return "es-ES";
        case "CHF":
            return "fr-CH";
        case "CAD":
            return "en-CA";
        case "AUD":
            return "en-AU";
        default:
            return "";
    }
};
exports.getLocalesFromCurrency = getLocalesFromCurrency;
//# sourceMappingURL=get-locales-from-currency.js.map