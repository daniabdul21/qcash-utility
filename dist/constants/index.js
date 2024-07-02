"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notValidStatuses = exports.uploadStatuses = exports.transactionStatuses = exports.taskStatuses = exports.service = void 0;
var types_1 = require("@/types");
var service = "multipayment";
exports.service = service;
// FIXME: need to check if already in types or not
var taskStatuses = {
    Draft: types_1.TaskStatusID.Draft,
    Pending: types_1.TaskStatusID.Pending,
    Returned: types_1.TaskStatusID.Returned,
};
exports.taskStatuses = taskStatuses;
// FIXME: need to check if already in types or not
var transactionStatuses = {
    "On Process": "On Process",
    Failed: "Failed",
    Process: "On Process",
    Rejected: "Rejected",
    Success: "Success",
    Suspended: "Suspended",
    Waiting: "Waiting",
};
exports.transactionStatuses = transactionStatuses;
// FIXME: need to check if already in types or not
var uploadStatuses = {
    "File Completed": "File Completed",
    "File in Process": "File In Process",
    "File Processed": "File Processed",
    "On Process": "On Process",
};
exports.uploadStatuses = uploadStatuses;
var notValidStatuses = {
    "Invalid File Format": "Invalid File Format",
};
exports.notValidStatuses = notValidStatuses;
__exportStar(require("./formats"), exports);
__exportStar(require("./options"), exports);
//# sourceMappingURL=index.js.map