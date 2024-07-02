"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPayload = exports.LiquidityStatus = exports.DaysEnum = exports.TaskStausLMView = exports.TaskStatusLM = exports.TBA_UPPPER = exports.TBATypeTopping = exports.TBAType = exports.SchemesStatusID = exports.SchemeStatus = exports.CashflowPeriod = exports.CashflowType = exports.SchemeType = exports.LiquidityFileFormat = exports.LiquidityTaskStatus = exports.LiquidityTaskStep = void 0;
var LiquidityTaskStep;
(function (LiquidityTaskStep) {
    LiquidityTaskStep["AllStep"] = "AllStep";
    LiquidityTaskStep["Maker"] = "Maker";
    LiquidityTaskStep["Checker"] = "Checker";
    LiquidityTaskStep["Signer"] = "Signer";
    LiquidityTaskStep["Releaser"] = "Releaser";
})(LiquidityTaskStep || (exports.LiquidityTaskStep = LiquidityTaskStep = {}));
var LiquidityTaskStatus;
(function (LiquidityTaskStatus) {
    LiquidityTaskStatus["AllStatus"] = "AllStatus";
    LiquidityTaskStatus["Approved"] = "Approved";
    LiquidityTaskStatus["DeleteRequest"] = "DeleteRequest";
    LiquidityTaskStatus["Draft"] = "Draft";
    LiquidityTaskStatus["Pending"] = "Pending";
    LiquidityTaskStatus["Rejected"] = "Rejected";
    LiquidityTaskStatus["Returned"] = "Returned";
})(LiquidityTaskStatus || (exports.LiquidityTaskStatus = LiquidityTaskStatus = {}));
var LiquidityFileFormat;
(function (LiquidityFileFormat) {
    LiquidityFileFormat["null"] = "null";
    LiquidityFileFormat["pdf"] = "pdf";
    LiquidityFileFormat["xls"] = "xls";
    LiquidityFileFormat["csv"] = "csv";
})(LiquidityFileFormat || (exports.LiquidityFileFormat = LiquidityFileFormat = {}));
var SchemeType;
(function (SchemeType) {
    SchemeType["OneTime"] = "One-Time";
    SchemeType["Sweepback"] = "Sweepback";
    SchemeType["RollingBased"] = "rolling-based";
})(SchemeType || (exports.SchemeType = SchemeType = {}));
var CashflowType;
(function (CashflowType) {
    CashflowType["Funding"] = "Funding";
    CashflowType["Topping"] = "Topping";
    CashflowType["RollingBased"] = "Rolling Based";
})(CashflowType || (exports.CashflowType = CashflowType = {}));
var CashflowPeriod;
(function (CashflowPeriod) {
    CashflowPeriod["Daily"] = "Daily";
    CashflowPeriod["EveryFewDays"] = "Every Few Days";
    CashflowPeriod["Weekly"] = "Weekly";
    CashflowPeriod["Monthly"] = "Monthly";
})(CashflowPeriod || (exports.CashflowPeriod = CashflowPeriod = {}));
var SchemeStatus;
(function (SchemeStatus) {
    SchemeStatus["Active"] = "Active";
    SchemeStatus["Cancelled"] = "Cancelled";
    SchemeStatus["Complete"] = "Complete";
    SchemeStatus["Suspended"] = "Suspended";
    SchemeStatus["NotScheduled"] = "NotScheduled";
})(SchemeStatus || (exports.SchemeStatus = SchemeStatus = {}));
var SchemesStatusID;
(function (SchemesStatusID) {
    SchemesStatusID["AllStatus"] = "0";
    SchemesStatusID["Pending"] = "1";
    SchemesStatusID["Draft"] = "2";
    SchemesStatusID["Returned"] = "3";
    SchemesStatusID["Active"] = "4";
    SchemesStatusID["Complete"] = "5";
    SchemesStatusID["Cancelled"] = "6";
    SchemesStatusID["Suspended"] = "7";
    SchemesStatusID["NotScheduled"] = "8";
    SchemesStatusID["Rejected"] = "9";
})(SchemesStatusID || (exports.SchemesStatusID = SchemesStatusID = {}));
var TBAType;
(function (TBAType) {
    TBAType["FixAmount"] = "Fix Amount";
    TBAType["ZeroBalance"] = "Zero Balance";
    TBAType["FixedBalance"] = "Fixed Balance";
    TBAType["Percentage"] = "Percentage";
    TBAType["RangedValue"] = "Ranged Value";
    TBAType["TargetValue"] = "Target Value";
    TBAType["ToppingValue"] = "Topping Value";
    TBAType["RoundedBased"] = "Rounded Based";
})(TBAType || (exports.TBAType = TBAType = {}));
var TBATypeTopping;
(function (TBATypeTopping) {
    TBATypeTopping["FixedBalance"] = "Fixed Balance";
    TBATypeTopping["ZeroBalance"] = "Zero Balance";
})(TBATypeTopping || (exports.TBATypeTopping = TBATypeTopping = {}));
exports.TBA_UPPPER = {
    'fix-amount': 'Fix Amount',
    'fixed-balance': 'Fixed Balance',
    'zero-balance': 'Zero Balance',
};
exports.TaskStatusLM = {
    "All": '0',
    "Approved": "4",
    "Deleted": "7",
    "DeleteRequest": '6',
    "Draft": "status:2", //status draft before is 2
    "Pending": "status:1", //status pending before is 1
    "Rejected": "5",
    "Returned": "status:3", //status returned before is 3
    "Pending On Checker": 'status:pending_on_checker',
    "Pending On Signer": 'status:pending_on_signer',
    "Pending On Releaser": 'status:pending_on_releaser'
};
var TaskStausLMView;
(function (TaskStausLMView) {
    TaskStausLMView["Success"] = "1";
    TaskStausLMView["Failed"] = "2";
    TaskStausLMView["Pending"] = "0";
    TaskStausLMView["Hold"] = "5";
})(TaskStausLMView || (exports.TaskStausLMView = TaskStausLMView = {}));
var DaysEnum;
(function (DaysEnum) {
    DaysEnum["Monday"] = "monday";
    DaysEnum["Tuesday"] = "tuesday";
    DaysEnum["Wednesday"] = "wednesday";
    DaysEnum["Thursday"] = "thursday";
    DaysEnum["Friday"] = "friday";
    DaysEnum["Saturday"] = "saturday";
    DaysEnum["Sunday"] = "sunday";
})(DaysEnum || (exports.DaysEnum = DaysEnum = {}));
var LiquidityStatus;
(function (LiquidityStatus) {
    LiquidityStatus[LiquidityStatus["AllStatus"] = 0] = "AllStatus";
    LiquidityStatus[LiquidityStatus["Pending"] = 1] = "Pending";
    LiquidityStatus[LiquidityStatus["Draft"] = 2] = "Draft";
    LiquidityStatus[LiquidityStatus["Returned"] = 3] = "Returned";
    LiquidityStatus[LiquidityStatus["Active"] = 4] = "Active";
    LiquidityStatus[LiquidityStatus["Complete"] = 5] = "Complete";
    LiquidityStatus[LiquidityStatus["Cancelled"] = 6] = "Cancelled";
    LiquidityStatus[LiquidityStatus["Suspended"] = 7] = "Suspended";
    LiquidityStatus[LiquidityStatus["NotScheduled"] = 8] = "NotScheduled";
    LiquidityStatus[LiquidityStatus["Rejected"] = 9] = "Rejected";
})(LiquidityStatus || (exports.LiquidityStatus = LiquidityStatus = {}));
var KeyPayload;
(function (KeyPayload) {
    KeyPayload["CompanyGroupID"] = "company_group_id";
    KeyPayload["CompanyID"] = "company_id";
    KeyPayload["CurrencyID"] = "currency_id";
    KeyPayload["SchemeType"] = "scheme_type";
    KeyPayload["Description"] = "description";
    KeyPayload["Code"] = "code";
    KeyPayload["CashFlow"] = "cashflow";
    KeyPayload["CashFlowType"] = "cashflow_type";
    KeyPayload["Period"] = "period";
    KeyPayload["PeriodTimes"] = "period_times";
    KeyPayload["TBAType"] = "tba_type";
    KeyPayload["TBAValue"] = "tba_value";
    KeyPayload["TBATopValue"] = "tba_top_value";
    KeyPayload["TBABottomValue"] = "tba_bottom_value";
    KeyPayload["TBARoundedBase"] = "tba_rounded_base";
    KeyPayload["Recurring"] = "recurring";
    KeyPayload["RecurringValue"] = "recurring_value";
    KeyPayload["RecurringDate"] = "recurring_date";
    KeyPayload["RecurringDays"] = "recurring_days";
    KeyPayload["Source"] = "source";
    KeyPayload["AccountID"] = "account_id";
    KeyPayload["AccountAlias"] = "account_alias";
    KeyPayload["Remark"] = "remark";
    KeyPayload["TBAFillDefisit"] = "tba_fill_defisit";
    KeyPayload["TBAFIllToTop"] = "tba_fill_to_top";
    KeyPayload["Beneficiary"] = "beneficiary";
    KeyPayload["StartDate"] = "start_date";
    KeyPayload["EndDate"] = "end_date";
    KeyPayload["IsDraft"] = "is_draft";
    KeyPayload["IsActive"] = "is_active";
    KeyPayload["PassCode"] = "pass_code";
})(KeyPayload || (exports.KeyPayload = KeyPayload = {}));
//# sourceMappingURL=enum.ts.js.map
