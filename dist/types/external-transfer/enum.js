"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOptions = exports.ExternalTransferMethodLabelEnum = exports.ExternalTransferMethodEnum = void 0;
var ExternalTransferMethodEnum;
(function (ExternalTransferMethodEnum) {
    ExternalTransferMethodEnum["RTGS"] = "RTGS";
    ExternalTransferMethodEnum["Kliring"] = "Kliring";
    ExternalTransferMethodEnum["BIFast"] = "BIFast";
    ExternalTransferMethodEnum["OnlineTransfer"] = "OnlineTransfer";
    ExternalTransferMethodEnum["RemittanceTransfer"] = "Remmitence";
})(ExternalTransferMethodEnum || (exports.ExternalTransferMethodEnum = ExternalTransferMethodEnum = {}));
exports.ExternalTransferMethodLabelEnum = new Map([
    [ExternalTransferMethodEnum.RTGS, "RTGS"],
    [ExternalTransferMethodEnum.Kliring, "Kliring"],
    [ExternalTransferMethodEnum.BIFast, "BI-Fast"],
    [ExternalTransferMethodEnum.OnlineTransfer, "Online Transfer"],
    [ExternalTransferMethodEnum.RemittanceTransfer, "Remittance Transfer"],
]);
exports.dayOptions = [
    { value: "1", label: "Monday" },
    { value: "2", label: "Tuesday" },
    { value: "3", label: "Wednesday" },
    { value: "4", label: "Thursday" },
    { value: "5", label: "Friday" },
    { value: "6", label: "Saturday" },
    { value: "7", label: "Sunday" },
];
//# sourceMappingURL=enum.ts.js.map
