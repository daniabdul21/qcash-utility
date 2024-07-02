"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMoney = void 0;
var lodash_1 = require("lodash");
var locale_1 = require("./locale");
var formatMoney = function (value, currency, currencyDisplay, minDecimal, maxDecimal, position) {
    if (currency === void 0) { currency = ""; }
    if (currencyDisplay === void 0) { currencyDisplay = "symbol"; }
    if (minDecimal === void 0) { minDecimal = 0; }
    if (maxDecimal === void 0) { maxDecimal = 2; }
    if (position === void 0) { position = "mix"; }
    var newCurrencyDisplay = currencyDisplay;
    if (currency === "" || (0, lodash_1.isUndefined)(currency))
        newCurrencyDisplay = "none";
    var num = Number(value);
    var locale = (0, locale_1.getLocaleByCurrency)(currency);
    var formatter = new Intl.NumberFormat('en-US', locale
        ? {
            style: "currency",
            currency: locale.currencyCode,
            currencyDisplay: newCurrencyDisplay === "none" ? "code" : newCurrencyDisplay,
            minimumFractionDigits: minDecimal,
            maximumFractionDigits: maxDecimal,
        }
        : undefined);
    var money = formatter.format(num);
    if (position === "left") {
        var m = "".concat(newCurrencyDisplay === "narrowSymbol" ? locale.currencySymbol : locale.currencyCode, " ").concat("".concat(money).replace(/[^\d.,]/g, ""));
        return newCurrencyDisplay === "none" ? "".concat(money).replace(locale.currencyCode, "").trim() : m.trim();
    }
    if (position === "right") {
        var m = "".concat("".concat(money).replace(/[^\d.,]/g, ""), " ").concat(newCurrencyDisplay === "narrowSymbol" ? locale.currencySymbol : locale.currencyCode);
        return newCurrencyDisplay === "none" ? "".concat(money).replace(locale.currencyCode, "").trim() : m.trim();
    }
    return newCurrencyDisplay === "none" ? "".concat(money).replace(locale.currencyCode, "").trim() : "".concat(money).trim();
};
exports.formatMoney = formatMoney;
//# sourceMappingURL=money.js.map