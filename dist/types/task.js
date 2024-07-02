"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuTask = exports.Product = exports.TaskStep = exports.TaskAction = exports.TaskStepID = exports.TaskStatusID = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["All"] = "All";
    TaskStatus["Approved"] = "Approved";
    TaskStatus["Deleted"] = "Deleted";
    TaskStatus["DeleteRequest"] = "DeleteRequest";
    TaskStatus["Draft"] = "Draft";
    TaskStatus["Pending"] = "Pending";
    TaskStatus["Ready"] = "Ready";
    TaskStatus["Rejected"] = "Rejected";
    TaskStatus["Returned"] = "Returned";
    TaskStatus["Checking"] = "Checking";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var TaskStatusID;
(function (TaskStatusID) {
    TaskStatusID["All"] = "0";
    TaskStatusID["Approved"] = "4";
    TaskStatusID["Deleted"] = "7";
    TaskStatusID["DeleteRequest"] = "6";
    TaskStatusID["Draft"] = "2";
    TaskStatusID["Pending"] = "1";
    TaskStatusID["Rejected"] = "5";
    TaskStatusID["Returned"] = "3";
})(TaskStatusID || (exports.TaskStatusID = TaskStatusID = {}));
var TaskStepID;
(function (TaskStepID) {
    TaskStepID["All"] = "0";
    TaskStepID["Checker"] = "2";
    TaskStepID["Maker"] = "1";
    TaskStepID["Releaser"] = "4";
    TaskStepID["Signer"] = "3";
})(TaskStepID || (exports.TaskStepID = TaskStepID = {}));
var TaskAction;
(function (TaskAction) {
    TaskAction["Approve"] = "approve";
    TaskAction["Reject"] = "reject";
    TaskAction["Rework"] = "rework";
    TaskAction["Cancel"] = "cancel";
    TaskAction["Delete"] = "delete";
    TaskAction["Submit"] = "submit";
    TaskAction["All"] = "All";
})(TaskAction || (exports.TaskAction = TaskAction = {}));
var TaskStep;
(function (TaskStep) {
    TaskStep["All"] = "All";
    TaskStep["Maker"] = "Maker";
    TaskStep["Checker"] = "Checker";
    TaskStep["Signer"] = "Signer";
    TaskStep["Releaser"] = "Releaser";
})(TaskStep || (exports.TaskStep = TaskStep = {}));
var Product;
(function (Product) {
    Product["Announcement"] = "Announcement";
    Product["Company"] = "Company";
    Product["Account"] = "Account";
    Product["Notification"] = "Notification";
    Product["All"] = "All";
})(Product || (exports.Product = Product = {}));
var MenuTask;
(function (MenuTask) {
    MenuTask["Masters"] = "Masters";
})(MenuTask || (exports.MenuTask = MenuTask = {}));
//# sourceMappingURL=task.js.map