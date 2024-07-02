"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuForFilterValue = exports.MenuForFilterName = exports.MassTransferFilterEnum = exports.ValidationFormCreateMassTransfer = exports.InitialValueCreateMassTransfer = void 0;
var Yup = __importStar(require("yup"));
exports.InitialValueCreateMassTransfer = {
    fileFormat: null,
    fileType: null,
    beneficiaryValidation: null,
    fileDescription: "",
    file: "",
};
exports.ValidationFormCreateMassTransfer = Yup.object().shape({
    fileFormat: Yup.object()
        .nullable()
        .test({
        name: "fileFormat",
        test: function (val, ctx) {
            if (!ctx.parent.fileFormat) {
                return ctx.createError({
                    message: "File Format is Required!",
                });
            }
            return true;
        },
    }),
    beneficiaryValidation: Yup.string().nullable().required("Beneficiary Validation is Required!"),
    fileType: Yup.string().nullable().required("File Type is Required!"),
    file: Yup.string().test({
        name: "file",
        test: function (val, ctx) {
            if (!ctx.parent.file) {
                return ctx.createError({
                    message: "Upload File is Required!",
                });
            }
            return true;
        },
    }),
    fileDescription: Yup.string()
        .notRequired()
        .matches(/^[a-zA-Z0-9\s.,/\-_%@&]+$/, "Invalid input!"),
});
var MassTransferFilterEnum;
(function (MassTransferFilterEnum) {
    MassTransferFilterEnum["ALL_TRANSACTION_FILTER"] = "ALL_TRANSACTION_FILTER";
    MassTransferFilterEnum["FILTER_TRANSACTION_ACTION"] = "FILTER_TRANSACTION_ACTION";
    MassTransferFilterEnum["FILTER_TAB_ON_PROCESS"] = "FILTER_TAB_ON_PROCESS";
    MassTransferFilterEnum["FILTER_TAB_HISTORY"] = "FILTER_TAB_HISTORY";
})(MassTransferFilterEnum || (exports.MassTransferFilterEnum = MassTransferFilterEnum = {}));
exports.MenuForFilterName = {
    0: MassTransferFilterEnum.ALL_TRANSACTION_FILTER,
    1: MassTransferFilterEnum.FILTER_TRANSACTION_ACTION,
    2: MassTransferFilterEnum.FILTER_TAB_ON_PROCESS,
    3: MassTransferFilterEnum.FILTER_TAB_HISTORY,
};
exports.MenuForFilterValue = (_a = {},
    _a[MassTransferFilterEnum.ALL_TRANSACTION_FILTER] = 0,
    _a[MassTransferFilterEnum.FILTER_TRANSACTION_ACTION] = 1,
    _a[MassTransferFilterEnum.FILTER_TAB_ON_PROCESS] = 2,
    _a[MassTransferFilterEnum.FILTER_TAB_HISTORY] = 3,
    _a);
//# sourceMappingURL=mass-transfer.js.map