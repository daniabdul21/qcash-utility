"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyType = exports.FeeTypeEnum = exports.FrequencyTypeEnum = exports.ScheduleTypeEnum = void 0;
var ScheduleTypeEnum;
(function (ScheduleTypeEnum) {
    ScheduleTypeEnum["Immediate"] = "Immediate";
    ScheduleTypeEnum["Scheduled"] = "Scheduled";
    ScheduleTypeEnum["Recurring"] = "Recurring";
})(ScheduleTypeEnum || (exports.ScheduleTypeEnum = ScheduleTypeEnum = {}));
var FrequencyTypeEnum;
(function (FrequencyTypeEnum) {
    FrequencyTypeEnum["Daily"] = "Daily";
    FrequencyTypeEnum["Weekly"] = "Weekly";
    FrequencyTypeEnum["Monthly"] = "Monthly";
})(FrequencyTypeEnum || (exports.FrequencyTypeEnum = FrequencyTypeEnum = {}));
var FeeTypeEnum;
(function (FeeTypeEnum) {
    FeeTypeEnum["Our"] = "OUR";
    FeeTypeEnum["Ben"] = "BEN";
})(FeeTypeEnum || (exports.FeeTypeEnum = FeeTypeEnum = {}));
var CurrencyType;
(function (CurrencyType) {
    CurrencyType["Debit"] = "DebitCurrencyType";
    CurrencyType["Credit"] = "CreditCurrencyType";
})(CurrencyType || (exports.CurrencyType = CurrencyType = {}));
//# sourceMappingURL=enum.ts.js.map
