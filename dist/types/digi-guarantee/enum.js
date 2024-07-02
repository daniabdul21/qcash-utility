"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CooperationType = exports.ContractType = exports.ThirdpartyTypeEnum = exports.TransactionStatusType = exports.TaskActionEnum = exports.BGTypeInt = exports.BGStatusInt = exports.BGType = exports.BGStatus = void 0;
var BGStatus;
(function (BGStatus) {
    BGStatus["Cancelled"] = "Cancelled";
    BGStatus["Active"] = "Active";
    BGStatus["ClaimPeriod"] = "Claim Period";
    BGStatus["ClosingPeriod"] = "Closing Period";
    BGStatus["Closed"] = "Closed";
})(BGStatus || (exports.BGStatus = BGStatus = {}));
var BGType;
(function (BGType) {
    BGType["BidBond"] = "BidBond";
    BGType["AdvancePayment"] = "AdvancePayment";
    BGType["PerformanceBond"] = "PerformanceBond";
    BGType["GovernmentPaymentGuarantee"] = "GovernmentPaymentGuarantee";
    BGType["MaintenanceBond"] = "MaintenanceBond";
    BGType["ProcurementBond"] = "ProcurementBond";
    BGType["TransactionRiskBond"] = "TransactionRiskBond";
    BGType["CustomsBond"] = "CustomsBond";
})(BGType || (exports.BGType = BGType = {}));
var BGStatusInt;
(function (BGStatusInt) {
    BGStatusInt["Cancelled"] = "0";
    BGStatusInt["Active"] = "1";
    BGStatusInt["ClaimPeriod"] = "2";
    BGStatusInt["ClosingPeriod"] = "3";
    BGStatusInt["Closed"] = "4";
})(BGStatusInt || (exports.BGStatusInt = BGStatusInt = {}));
var BGTypeInt;
(function (BGTypeInt) {
    BGTypeInt["BidBond"] = "1";
    BGTypeInt["AdvancePayment"] = "2";
    BGTypeInt["PerformanceBond"] = "3";
    BGTypeInt["GovernmentPaymentGuarantee"] = "4";
    BGTypeInt["MaintenanceBond"] = "5";
    BGTypeInt["ProcurementBond"] = "6";
    BGTypeInt["TransactionRiskBond"] = "7";
    BGTypeInt["CustomsBond"] = "8";
})(BGTypeInt || (exports.BGTypeInt = BGTypeInt = {}));
var TaskActionEnum;
(function (TaskActionEnum) {
    TaskActionEnum["Approve"] = "approve";
    TaskActionEnum["Reject"] = "reject";
    TaskActionEnum["Rework"] = "rework";
    TaskActionEnum["Cancel"] = "cancel";
    TaskActionEnum["Delete"] = "delete";
    TaskActionEnum["Submit"] = "submit";
    TaskActionEnum["All"] = "All";
})(TaskActionEnum || (exports.TaskActionEnum = TaskActionEnum = {}));
var TransactionStatusType;
(function (TransactionStatusType) {
    TransactionStatusType["MappingDigital"] = "MappingDigital";
    TransactionStatusType["PendingForIssuing"] = "PendingForIssuing";
})(TransactionStatusType || (exports.TransactionStatusType = TransactionStatusType = {}));
var ThirdpartyTypeEnum;
(function (ThirdpartyTypeEnum) {
    ThirdpartyTypeEnum["All"] = "All";
    ThirdpartyTypeEnum["NeedMapping"] = "NeedMapping";
    ThirdpartyTypeEnum["IsMapped"] = "IsMapped";
    ThirdpartyTypeEnum["AllMapping"] = "AllMapping";
})(ThirdpartyTypeEnum || (exports.ThirdpartyTypeEnum = ThirdpartyTypeEnum = {}));
var ContractType;
(function (ContractType) {
    ContractType["Insurance"] = "Insurance";
    ContractType["Cash"] = "Cash";
    ContractType["NonCashLoan"] = "NonCashLoan";
    ContractType["Combination"] = "Combination";
    ContractType["CounterGuarantee"] = "CounterGuarantee";
})(ContractType || (exports.ContractType = ContractType = {}));
var CooperationType;
(function (CooperationType) {
    CooperationType["Cooperation"] = "Cooperation";
    CooperationType["NonCooperation"] = "NonCooperation";
})(CooperationType || (exports.CooperationType = CooperationType = {}));
//# sourceMappingURL=enum.ts.js.map
