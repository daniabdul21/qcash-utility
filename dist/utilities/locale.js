"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleByCurrency = exports.localeConfigList = void 0;
exports.localeConfigList = [
    {
        currencyCode: "NZD",
        currencySymbol: "NZ$",
        locale: "en-NZ",
    },
    {
        currencyCode: "AUD",
        currencySymbol: "A$",
        locale: "en-AU",
    },
    {
        currencyCode: "EUR",
        currencySymbol: "€",
        locale: "es",
    },
    {
        currencyCode: "GBP",
        currencySymbol: "£",
        locale: "en-UK",
    },
    {
        currencyCode: "USD",
        currencySymbol: "$",
        locale: "en-US",
    },
    {
        currencyCode: "CAD",
        currencySymbol: "C$",
        locale: "en-CA",
    },
    {
        currencyCode: "CHF",
        currencySymbol: "CHF",
        locale: "de-CH",
    },
    {
        currencyCode: "CNY",
        currencySymbol: "¥",
        locale: "zh",
    },
    {
        currencyCode: "HKD",
        currencySymbol: "$",
        locale: "en-HK",
    },
    {
        currencyCode: "JPY",
        currencySymbol: "¥",
        locale: "ja",
    },
    {
        currencyCode: "MYR",
        currencySymbol: "RM",
        locale: "en-MY",
    },
    {
        currencyCode: "NOK",
        currencySymbol: "kr",
        locale: "sv-SE",
    },
    {
        currencyCode: "SAR",
        currencySymbol: "﷼",
        locale: "ar",
    },
    {
        currencyCode: "SEK",
        currencySymbol: "kr",
        locale: "sv",
    },
    {
        currencyCode: "SGD",
        currencySymbol: "S$",
        locale: "en-SG",
    },
    {
        currencyCode: "THB",
        currencySymbol: "฿",
        locale: "th",
    },
    {
        currencyCode: "AED",
        currencySymbol: "د.إ",
        locale: "ar",
    },
    {
        currencyCode: "IDR",
        currencySymbol: "Rp",
        locale: "id-ID",
    },
    {
        currencyCode: "TWD",
        currencySymbol: "NT$",
        locale: "zh"
    }
];
var defaultLocale = {
    currencyCode: "USD",
    currencySymbol: "$",
    locale: "en-US",
};
var getLocaleByCurrency = function (currency) {
    var locale = exports.localeConfigList.find(function (l) { return l.currencyCode === currency; });
    locale !== null && locale !== void 0 ? locale : (locale = defaultLocale);
    return locale;
};
exports.getLocaleByCurrency = getLocaleByCurrency;
//# sourceMappingURL=locale.js.map