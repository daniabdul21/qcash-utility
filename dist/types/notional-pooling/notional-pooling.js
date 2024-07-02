"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestPaymentType = exports.NotpoolCurrency = exports.DebitRate = void 0;
var DebitRate;
(function (DebitRate) {
    DebitRate["Tiering"] = "Tiering";
    DebitRate["FixRate"] = "Fix Rate";
})(DebitRate || (exports.DebitRate = DebitRate = {}));
var NotpoolCurrency;
(function (NotpoolCurrency) {
    NotpoolCurrency["IDR"] = "IDR";
    NotpoolCurrency["USD"] = "USD";
    NotpoolCurrency["SGD"] = "SGD";
    NotpoolCurrency["EUR"] = "EUR";
})(NotpoolCurrency || (exports.NotpoolCurrency = NotpoolCurrency = {}));
var InterestPaymentType;
(function (InterestPaymentType) {
    InterestPaymentType["Proporsional"] = "Proporsional";
    InterestPaymentType["Percentage"] = "Percentage";
})(InterestPaymentType || (exports.InterestPaymentType = InterestPaymentType = {}));
//# sourceMappingURL=notional-pooling.js.map