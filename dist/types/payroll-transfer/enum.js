"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassStatusEnum = exports.PayrollTransactionEnumType = exports.PayrollTransactionType = void 0;
var PayrollTransactionType;
(function (PayrollTransactionType) {
    PayrollTransactionType["InternalTransfer"] = "Internal Transfer";
    PayrollTransactionType["ExternalTransfer"] = "External Transfer";
})(PayrollTransactionType || (exports.PayrollTransactionType = PayrollTransactionType = {}));
var PayrollTransactionEnumType;
(function (PayrollTransactionEnumType) {
    PayrollTransactionEnumType["InternalTransfer"] = "InternalTransfer";
    PayrollTransactionEnumType["ExternalTransfer"] = "ExternalTransfer";
})(PayrollTransactionEnumType || (exports.PayrollTransactionEnumType = PayrollTransactionEnumType = {}));
var MassStatusEnum;
(function (MassStatusEnum) {
    MassStatusEnum["NullStatus"] = "NullStatus";
    MassStatusEnum["Success"] = "Success";
    MassStatusEnum["Failed"] = "Failed";
    MassStatusEnum["Checking"] = "Checking";
})(MassStatusEnum || (exports.MassStatusEnum = MassStatusEnum = {}));
//# sourceMappingURL=enum.ts.js.map
