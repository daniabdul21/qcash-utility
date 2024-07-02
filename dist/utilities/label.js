"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderLabelTransactionStatus = exports.renderLabelSync = exports.renderLabelStatus = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-duplicate-case */
var types_1 = require("./types");
var renderLabelStatus = function (status) {
    if (!status || status === "NullStatus") {
        return (0, jsx_runtime_1.jsx)("div", {});
    }
    switch (status) {
        case types_1.TaskStatus.Returned:
        case "Retur":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-info-80 bg-info-99 py-1 text-center text-info-40", children: status }));
        case types_1.TaskStatus.DeleteRequest:
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-32 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Request for Delete" }));
        case "RequestInactive":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-32 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Request Inactive" }));
        case types_1.TaskStatus.Deleted:
        case types_1.TaskStatus.Rejected:
        case "Rejected":
        case "Inactive":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: status }));
        case types_1.TaskStatus.Draft:
        case types_1.TaskStatus.Pending:
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: status }));
        case types_1.TaskStatus.Approved:
        case "Success":
        case "Active":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40", children: status }));
        case "On Signer":
        case "On Checker":
        case "On Releaser":
        case "Waiting":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: status }));
        case "Pending Maker Confirmation":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-40 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: status }));
        case "On Cancelled":
        case "Cancelled":
        case "Failed":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Cancelled" }));
        case "scheduled":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: "Scheduled" }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Unknown" }));
};
exports.renderLabelStatus = renderLabelStatus;
var renderLabelSync = function (status) {
    if (!status) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto w-32 rounded-full border border-danger-60 bg-danger-90 py-1 text-center text-danger-40", children: "Not Synced" }));
    }
    switch (status) {
        case "Sync":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto w-24 rounded-full border border-success-60 bg-success-90 py-1 text-center text-success-40", children: "Synced" }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto w-32 rounded-full border border-danger-60 bg-danger-90 py-1 text-center text-danger-40", children: "Not Synced" }));
};
exports.renderLabelSync = renderLabelSync;
var renderLabelTransactionStatus = function (status) {
    switch (status) {
        case "Pending":
        case "Process":
        case "Processing":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: status }));
        case "Approved":
        case "Success":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40", children: status }));
        case "Timeout":
        case "Error":
        case "Failed":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Failed" }));
        case "Suspend":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Suspend" }));
        case "Rejected":
        case "Reject":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: "Rejected" }));
        case "Delayed":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: "Waiting" }));
        case "Sent to Swift":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto w-[100px] rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40", children: status }));
        case "Approved":
        case "Sent to RTGS":
        case "Sent to BI":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto w-[100px] rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40", children: status }));
        case "Cancelled":
        case "Canceled":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40", children: status }));
        case "Scheduled":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: status }));
        case "Retur":
            return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-info-99 bg-info-90 py-1 text-center text-info-20", children: status }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40", children: "Waiting" }));
};
exports.renderLabelTransactionStatus = renderLabelTransactionStatus;
//# sourceMappingURL=label.js.map