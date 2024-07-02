"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixType = exports.BillingType = exports.CurrencyDebitType = exports.StatusType = exports.MPNVersionType = exports.PreviewType = exports.ScheduleBillingEnumType = exports.BillingCreationMode = exports.BillingCreationType = void 0;
var BillingCreationType;
(function (BillingCreationType) {
    BillingCreationType["NPWP"] = "0";
    BillingCreationType["NON_NPWP"] = "1";
})(BillingCreationType || (exports.BillingCreationType = BillingCreationType = {}));
var BillingCreationMode;
(function (BillingCreationMode) {
    BillingCreationMode["NPWP"] = "NPWP";
    BillingCreationMode["NON_NPWP"] = "NON NPWP";
})(BillingCreationMode || (exports.BillingCreationMode = BillingCreationMode = {}));
var ScheduleBillingEnumType;
(function (ScheduleBillingEnumType) {
    ScheduleBillingEnumType["Immediate"] = "Immediate";
    ScheduleBillingEnumType["Scheduled"] = "Scheduled";
})(ScheduleBillingEnumType || (exports.ScheduleBillingEnumType = ScheduleBillingEnumType = {}));
var PreviewType;
(function (PreviewType) {
    PreviewType["Create"] = "CREATE";
    PreviewType["Input"] = "INPUT";
})(PreviewType || (exports.PreviewType = PreviewType = {}));
var MPNVersionType;
(function (MPNVersionType) {
    MPNVersionType["V3"] = "mpn-v3";
    MPNVersionType["createBilling"] = "mpn-version-create-billing";
    MPNVersionType["inputBilling"] = "mpn-version-input-billing";
})(MPNVersionType || (exports.MPNVersionType = MPNVersionType = {}));
var StatusType;
(function (StatusType) {
    StatusType["PENDING"] = "PENDING";
    StatusType["SUCCESS"] = "SUCCESS";
    StatusType["FAILED"] = "FAILED";
    StatusType["APPROVED"] = "APPROVED";
    StatusType["SCHEDULED"] = "SCHEDULED";
})(StatusType || (exports.StatusType = StatusType = {}));
var CurrencyDebitType;
(function (CurrencyDebitType) {
    CurrencyDebitType["IDR"] = "IDR";
    CurrencyDebitType["USD"] = "USD";
})(CurrencyDebitType || (exports.CurrencyDebitType = CurrencyDebitType = {}));
var BillingType;
(function (BillingType) {
    BillingType["SINGLE"] = "SINGLE";
    BillingType["UPLOAD"] = "UPLOAD";
})(BillingType || (exports.BillingType = BillingType = {}));
var PrefixType;
(function (PrefixType) {
    PrefixType["DJA"] = "DJA";
    PrefixType["DJP"] = "DJP";
    PrefixType["DJBC"] = "DJBC";
})(PrefixType || (exports.PrefixType = PrefixType = {}));
//# sourceMappingURL=enum.ts.js.map
