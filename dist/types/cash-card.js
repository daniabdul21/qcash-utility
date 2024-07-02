"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashCardUploadStatusStrEnum = exports.CACStatusStrEnum = exports.CACStatusEnum = exports.CashcardRequestType = exports.CashcardManagementMapStatuses = void 0;
// CASH-CARD MANAGEMENT
var CashcardManagementMapStatuses;
(function (CashcardManagementMapStatuses) {
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["UNKNOWN_STATUS_MAP"] = 0] = "UNKNOWN_STATUS_MAP";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["ACTIVE"] = 1] = "ACTIVE";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["DRAFT"] = 2] = "DRAFT";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["RETURNED"] = 3] = "RETURNED";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["APPROVED"] = 4] = "APPROVED";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["REJECTED"] = 5] = "REJECTED";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["DELETE_REQUEST"] = 6] = "DELETE_REQUEST";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["DELETED"] = 7] = "DELETED";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["CANCELLED"] = 8] = "CANCELLED";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["SUCCESS"] = 9] = "SUCCESS";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["FAILED"] = 10] = "FAILED";
    CashcardManagementMapStatuses[CashcardManagementMapStatuses["APPROVAL_REQUEST"] = 11] = "APPROVAL_REQUEST";
})(CashcardManagementMapStatuses || (exports.CashcardManagementMapStatuses = CashcardManagementMapStatuses = {}));
var CashcardRequestType;
(function (CashcardRequestType) {
    CashcardRequestType[CashcardRequestType["REGULAR"] = 1] = "REGULAR";
    CashcardRequestType[CashcardRequestType["TOPUP"] = 2] = "TOPUP";
    CashcardRequestType[CashcardRequestType["BLOCK"] = 3] = "BLOCK";
    CashcardRequestType[CashcardRequestType["UNBLOCK"] = 4] = "UNBLOCK";
    CashcardRequestType[CashcardRequestType["MATURITY_ACTIVITY"] = 5] = "MATURITY_ACTIVITY";
    CashcardRequestType[CashcardRequestType["LIFECYCLE_DAYS"] = 6] = "LIFECYCLE_DAYS";
    CashcardRequestType[CashcardRequestType["LIFECYCLE_POINT_TO_POINT"] = 7] = "LIFECYCLE_POINT_TO_POINT";
})(CashcardRequestType || (exports.CashcardRequestType = CashcardRequestType = {}));
//
var CACStatusEnum;
(function (CACStatusEnum) {
    CACStatusEnum[CACStatusEnum["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
    CACStatusEnum[CACStatusEnum["ON_CHECKER"] = 1] = "ON_CHECKER";
    CACStatusEnum[CACStatusEnum["ON_SIGNER"] = 2] = "ON_SIGNER";
    CACStatusEnum[CACStatusEnum["ON_RELEASER"] = 3] = "ON_RELEASER";
    CACStatusEnum[CACStatusEnum["REJECTED"] = 4] = "REJECTED";
    CACStatusEnum[CACStatusEnum["APPROVED"] = 5] = "APPROVED";
    CACStatusEnum[CACStatusEnum["DELETED"] = 6] = "DELETED";
})(CACStatusEnum || (exports.CACStatusEnum = CACStatusEnum = {}));
var CACStatusStrEnum;
(function (CACStatusStrEnum) {
    CACStatusStrEnum[CACStatusStrEnum["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
    CACStatusStrEnum["ON_CHECKER"] = "On Checker";
    CACStatusStrEnum["ON_SIGNER"] = "On Signer";
    CACStatusStrEnum["ON_RELEASER"] = "On Releaser";
    CACStatusStrEnum["REJECTED"] = "Rejected";
    CACStatusStrEnum["APPROVED"] = "Approved";
    CACStatusStrEnum["DELETED"] = "Deleted";
})(CACStatusStrEnum || (exports.CACStatusStrEnum = CACStatusStrEnum = {}));
var CashCardUploadStatusStrEnum;
(function (CashCardUploadStatusStrEnum) {
    CashCardUploadStatusStrEnum["FILE_IN_PROCESS"] = "File In Process";
    CashCardUploadStatusStrEnum["INVALID_FILE_FORMAT"] = "Invalid File Format";
    CashCardUploadStatusStrEnum["INVALID_DATA"] = "Invalid Data";
    CashCardUploadStatusStrEnum["ON_CHECKER"] = "On Checker";
    CashCardUploadStatusStrEnum["ON_SIGNER"] = "On Signer";
    CashCardUploadStatusStrEnum["ON_RELEASER"] = "On Releaser";
    CashCardUploadStatusStrEnum["REJECTED"] = "Rejected";
    CashCardUploadStatusStrEnum["APPROVED"] = "Approved";
})(CashCardUploadStatusStrEnum || (exports.CashCardUploadStatusStrEnum = CashCardUploadStatusStrEnum = {}));
//# sourceMappingURL=cash-card.js.map