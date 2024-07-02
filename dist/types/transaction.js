"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountPosition = exports.TransactionRejectReasons = exports.TransactionReworkReasons = exports.TransactionActionMessage = exports.TransactionFunctionEnum = exports.TransactionActionLabel = exports.TransactionActionEnum = void 0;
var TransactionActionEnum;
(function (TransactionActionEnum) {
    TransactionActionEnum["Approve"] = "Approve";
    TransactionActionEnum["ApproveDelete"] = "ApproveDelete";
    TransactionActionEnum["Cancel"] = "Cancel";
    TransactionActionEnum["Create"] = "Create";
    TransactionActionEnum["Delete"] = "Delete";
    TransactionActionEnum["DeleteRequest"] = "DeleteRequest";
    TransactionActionEnum["Download"] = "Download";
    TransactionActionEnum["DownloadReceipt"] = "DownloadReceipt";
    TransactionActionEnum["Reject"] = "Reject";
    TransactionActionEnum["RejectDelete"] = "RejectDelete";
    TransactionActionEnum["Rework"] = "Rework";
    TransactionActionEnum["Submit"] = "Submit";
    TransactionActionEnum["Confirm"] = "Confirm";
})(TransactionActionEnum || (exports.TransactionActionEnum = TransactionActionEnum = {}));
var TransactionActionLabel;
(function (TransactionActionLabel) {
    TransactionActionLabel["Approve"] = "Approve";
    TransactionActionLabel["ApproveDelete"] = "Approve Request for Delete";
    TransactionActionLabel["Cancel"] = "Cancel";
    TransactionActionLabel["Create"] = "Send for Approval";
    TransactionActionLabel["Delete"] = "Delete";
    TransactionActionLabel["DeleteRequest"] = "Request for Delete";
    TransactionActionLabel["Download"] = "Download";
    TransactionActionLabel["DownloadReceipt"] = "Download Receipt";
    TransactionActionLabel["Reject"] = "Reject";
    TransactionActionLabel["RejectDelete"] = "Reject Request for Delete";
    TransactionActionLabel["Rework"] = "Rework";
    TransactionActionLabel["Submit"] = "Send for Approval";
    TransactionActionLabel["Confirm"] = "Confirm";
})(TransactionActionLabel || (exports.TransactionActionLabel = TransactionActionLabel = {}));
var TransactionFunctionEnum;
(function (TransactionFunctionEnum) {
    TransactionFunctionEnum["Approve"] = "approve";
    TransactionFunctionEnum["ApproveDelete"] = "approve";
    TransactionFunctionEnum["Cancel"] = "cancel";
    TransactionFunctionEnum["Create"] = "create";
    TransactionFunctionEnum["Delete"] = "delete";
    TransactionFunctionEnum["DeleteRequest"] = "delete";
    TransactionFunctionEnum["Download"] = "download";
    TransactionFunctionEnum["DownloadReceipt"] = "download";
    TransactionFunctionEnum["Reject"] = "reject";
    TransactionFunctionEnum["RejectDelete"] = "reject";
    TransactionFunctionEnum["Rework"] = "rework";
    TransactionFunctionEnum["Submit"] = "submit";
    TransactionFunctionEnum["Confirm"] = "submit";
})(TransactionFunctionEnum || (exports.TransactionFunctionEnum = TransactionFunctionEnum = {}));
var TransactionActionMessage;
(function (TransactionActionMessage) {
    TransactionActionMessage["Approve"] = "has been Approved";
    TransactionActionMessage["ApproveDelete"] = "Requested for Delete has been Approved";
    TransactionActionMessage["Cancel"] = "has been Canceled";
    TransactionActionMessage["Create"] = "has been Send for Approval";
    TransactionActionMessage["Delete"] = "has been Deleted";
    TransactionActionMessage["DeleteRequest"] = "Requested for Delete has been Sent";
    TransactionActionMessage["Download"] = "has been Downloaded";
    TransactionActionMessage["DownloadReceipt"] = "has been Downloaded";
    TransactionActionMessage["Reject"] = "has been Rejected";
    TransactionActionMessage["RejectDelete"] = "Request For Delete has been Rejected";
    TransactionActionMessage["Rework"] = "has been Sent for Rework";
    TransactionActionMessage["Submit"] = "has been Submited";
    TransactionActionMessage["Confirm"] = "has been Confirmed";
})(TransactionActionMessage || (exports.TransactionActionMessage = TransactionActionMessage = {}));
exports.TransactionReworkReasons = [
    "Incomplete data and information",
    "Invalid/incorrect data",
    "Data is not configured properly",
    "Others",
];
exports.TransactionRejectReasons = [
    "Invalid/incorrect data",
    "Unnecessary action",
    "Obsolete data and/or account details",
    "Others",
];
var AmountPosition;
(function (AmountPosition) {
    AmountPosition["DEBET"] = "DEBET";
    AmountPosition["KREDIT"] = "KREDIT";
})(AmountPosition || (exports.AmountPosition = AmountPosition = {}));
//# sourceMappingURL=transaction.js.map