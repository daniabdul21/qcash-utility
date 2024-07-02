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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptionCountry = exports.companyAccountScheme = exports.packageLicenseScheme = exports.companyTransactionScheme = exports.companyAdminScheme = exports.companyInfoScheme = exports.ItemStatus = exports.DETAILS = void 0;
var task_1 = require("./task");
var Yup = __importStar(require("yup"));
var DETAILS;
(function (DETAILS) {
    DETAILS["ID_NAME"] = "ID Name";
    DETAILS["MOTHER_ORIGIN_NAME"] = "Mother Origin Name";
    DETAILS["ADDRESS"] = "Address";
    DETAILS["ZIP_CODE"] = "ZIP Code";
    DETAILS["EMAIL_ADDRESS"] = "Email Address";
    DETAILS["PHONE_NUMBER"] = "Phone Number";
    DETAILS["MOBILE_NUMBER"] = "Mobile Number";
    DETAILS["TAX_ID"] = "Tax ID";
    DETAILS["TOKEN_ID"] = "Token ID";
})(DETAILS || (exports.DETAILS = DETAILS = {}));
var ItemStatus = function (status, isMaker, isSigner) {
    switch (status) {
        case task_1.TaskStatus.Approved:
        case task_1.TaskStatus.Draft:
        case task_1.TaskStatus.Returned:
            if (isMaker) {
                status = "Can edit";
            }
            break;
        case task_1.TaskStatus.Pending:
            if (isSigner) {
                status = "Need signing";
            }
            break;
        case task_1.TaskStatus.DeleteRequest:
            if (isSigner) {
                status = "Need deleting";
            }
            break;
        default:
            status = "-";
            break;
    }
    return status;
};
exports.ItemStatus = ItemStatus;
Yup.addMethod(Yup.array, "unique", function (message, mapper) {
    if (mapper === void 0) { mapper = function (a) { return a; }; }
    return this.test("unique", message, function (list) {
        return list.length === new Set(list.map(mapper)).size;
    });
});
exports.companyInfoScheme = Yup.object().shape({
    company: Yup.object().shape({
        companyLoginCode: Yup.string().min(1, "Enter at least 1 characters").max(150).required("Please Insert Login Code"),
        companyName: Yup.string().max(250).required("Please Insert Company Name"),
        countryName: Yup.string().required("Please Insert Company Country"),
        companyType: Yup.object().shape({
            value: Yup.string().required("Please Insert Company Type"),
        }),
        businessEntity: Yup.object().shape({
            value: Yup.string().required("Please Insert Business Entity"),
        }),
        registrationID: Yup.string().required("Please Insert Registration ID"),
        taxID: Yup.string().max(25).required("Please Insert Tax ID"),
        branchID: Yup.object().shape({
            value: Yup.string().required("Please Insert Branch ID"),
        }),
        address: Yup.string().max(250).required("Please Insert Address"),
        phoneNumber: Yup.string().max(25).required("Please Insert Phone Number"),
    }),
    accountNumberCompany: Yup.string().when("isManual", {
        is: "false",
        then: Yup.string()
            .required("Please Insert Account Number")
            .test("accountNumberCompany", "Account Number must be Validate", function (val, ctx) {
            var cek = ctx.parent;
            if (cek.isManual === "false" && !cek.company.validationSuccess) {
                return false;
            }
            return true;
        }),
        otherwise: Yup.string(),
    }),
    usersLimit: Yup.string().test("check-limit", function (value, _a) {
        var createError = _a.createError, path = _a.path, options = _a.options;
        if (!value || Number(value) === 0)
            return createError({
                path: path,
                message: "Please Insert User Limit",
            });
        if (Number(value) > 5000)
            return createError({
                path: path,
                message: "Max Users Limit is 5000",
            });
        return true;
    }),
});
exports.companyAdminScheme = Yup.object().shape({
    admin: Yup.object().shape({
        SystemAdmin: Yup.object().shape({
            idType: Yup.object().shape({
                value: Yup.string().required("Please Select ID Type"),
            }),
            idNumber: Yup.string()
                .required("Please Insert ID Number")
                .test("check-length", function (value, _a) {
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                var createError = _a.createError, path = _a.path, options = _a.options;
                //@ts-ignore
                if (((_d = (_c = (_b = options === null || options === void 0 ? void 0 : options.from[0]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.idType) === null || _d === void 0 ? void 0 : _d.value) === 1 && (value === null || value === void 0 ? void 0 : value.length) < 16)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 16 digits",
                    });
                //@ts-ignore
                if (((_g = (_f = (_e = options === null || options === void 0 ? void 0 : options.from[0]) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.idType) === null || _g === void 0 ? void 0 : _g.value) === 2 && (value === null || value === void 0 ? void 0 : value.length) < 14)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 14 digits",
                    });
                //@ts-ignore
                if (((_k = (_j = (_h = options === null || options === void 0 ? void 0 : options.from[0]) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.idType) === null || _k === void 0 ? void 0 : _k.value) === 3 && (value === null || value === void 0 ? void 0 : value.length) < 9)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 9 digits",
                    });
                //@ts-ignore
                if (((_o = (_m = (_l = options === null || options === void 0 ? void 0 : options.from[0]) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.idType) === null || _o === void 0 ? void 0 : _o.value) === 4 && (value === null || value === void 0 ? void 0 : value.length) < 9)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 9 digits",
                    });
                //@ts-ignore
                if (((_r = (_q = (_p = options === null || options === void 0 ? void 0 : options.from[0]) === null || _p === void 0 ? void 0 : _p.value) === null || _q === void 0 ? void 0 : _q.idType) === null || _r === void 0 ? void 0 : _r.value) === 5 && (value === null || value === void 0 ? void 0 : value.length) < 11)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 11 digits",
                    });
                return true;
            }),
            EmailAddress: Yup.string()
                .required("Please Insert Your Email")
                .test("duplicate", "Duplicate E-mail Address", function (val, ctx) {
                var cek = ctx.from[1].value.Admin.EmailAddress;
                var current = ctx.parent.EmailAddress;
                if (current === cek) {
                    return false;
                }
                return true;
            })
                .email("Email Is Invalid"),
            IdName: Yup.string().required("Please Insert ID Name"),
        }),
        Admin: Yup.object().shape({
            idType: Yup.object().shape({
                value: Yup.string().required("Please Select ID Type"),
            }),
            idNumber: Yup.string()
                .required("Please Insert ID Number")
                .test("check-length", function (value, _a) {
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                var createError = _a.createError, path = _a.path, options = _a.options;
                //@ts-ignore
                if (((_d = (_c = (_b = options === null || options === void 0 ? void 0 : options.from[0]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.idType) === null || _d === void 0 ? void 0 : _d.value) === 1 && (value === null || value === void 0 ? void 0 : value.length) < 16)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 16 digits",
                    });
                //@ts-ignore
                if (((_g = (_f = (_e = options === null || options === void 0 ? void 0 : options.from[0]) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.idType) === null || _g === void 0 ? void 0 : _g.value) === 2 && (value === null || value === void 0 ? void 0 : value.length) < 14)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 14 digits",
                    });
                //@ts-ignore
                if (((_k = (_j = (_h = options === null || options === void 0 ? void 0 : options.from[0]) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.idType) === null || _k === void 0 ? void 0 : _k.value) === 3 && (value === null || value === void 0 ? void 0 : value.length) < 9)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 9 digits",
                    });
                //@ts-ignore
                if (((_o = (_m = (_l = options === null || options === void 0 ? void 0 : options.from[0]) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.idType) === null || _o === void 0 ? void 0 : _o.value) === 4 && (value === null || value === void 0 ? void 0 : value.length) < 9)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 9 digits",
                    });
                //@ts-ignore
                if (((_r = (_q = (_p = options === null || options === void 0 ? void 0 : options.from[0]) === null || _p === void 0 ? void 0 : _p.value) === null || _q === void 0 ? void 0 : _q.idType) === null || _r === void 0 ? void 0 : _r.value) === 5 && (value === null || value === void 0 ? void 0 : value.length) < 11)
                    return createError({
                        path: path,
                        message: "ID Number must be at least 11 digits",
                    });
                return true;
            }),
            EmailAddress: Yup.string()
                .required("Please Insert Your Email")
                .test("duplicate", "Duplicate E-mail Address", function (val, ctx) {
                var cek = ctx.from[1].value.SystemAdmin.EmailAddress;
                var current = ctx.parent.EmailAddress;
                if (current === cek) {
                    return false;
                }
                return true;
            })
                .email("Email Is Invalid"),
            IdName: Yup.string().required("Please Insert ID Name"),
        }),
    }),
});
exports.companyTransactionScheme = Yup.object().shape({
    company: Yup.object().shape({
        companyLimits: Yup.array().of(Yup.object().shape({
            currency: Yup.object().shape({
                value: Yup.string().required("Please Select Currency"),
            }),
            limit: Yup.string().test("check-limit", function (value, _a) {
                var _b, _c, _d, _e, _f, _g, _h;
                var createError = _a.createError, path = _a.path, options = _a.options;
                //@ts-ignore
                var currencyID = (_d = (_c = (_b = options === null || options === void 0 ? void 0 : options.from[0]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.currency) === null || _d === void 0 ? void 0 : _d.currencyID;
                //@ts-ignore
                var companyLimits = (_h = (_g = (_f = (_e = options === null || options === void 0 ? void 0 : options.from[1]) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.companyLimitsTmp) === null || _g === void 0 ? void 0 : _g.find(function (item) { return (item === null || item === void 0 ? void 0 : item.currencyID) === currencyID; })) === null || _h === void 0 ? void 0 : _h.limit;
                if (!value)
                    return createError({
                        path: path,
                        message: "Please Insert Transaction Limit",
                    });
                if (Number(value) > 1000000000000000)
                    return createError({
                        path: path,
                        message: "Maximum limit is 1,000,000,000,000,000",
                    });
                if (Number(value) < Number(companyLimits))
                    return createError({
                        path: path,
                        message: "Your current daily limit is lower than the previous limit ".concat(Intl.NumberFormat("en-US").format(companyLimits)),
                    });
                return true;
            }),
        })),
    }),
});
exports.packageLicenseScheme = Yup.object().shape({
    company: Yup.object().shape({
        packageID: Yup.number().required(),
    }),
});
exports.companyAccountScheme = Yup.object().shape({
    // account: Yup.array().of()
    accountLength: Yup.string().test("validate", "Please Insert Account Min 1", function (val, ctx) {
        var cek = ctx.parent;
        if (cek.account.length < 1) {
            return false;
        }
        return true;
    }),
    account: Yup.array()
        .test("validator-custom-name", function (value, _a) {
        var createError = _a.createError, path = _a.path;
        if (!(value === null || value === void 0 ? void 0 : value.length)) {
            return false;
        }
        return true;
    })
        .of(Yup.object().shape({
        cif: Yup.string().test("validator-custom-name", function (value, _a) {
            var createError = _a.createError, path = _a.path, options = _a.options;
            // @ts-ignore
            var account = options.from[1].value.account.slice(0);
            // @ts-ignore
            var isAccountManual = options.parent.manual;
            var cifNumb = account.map(function (_a) {
                var cif = _a.cif;
                return cif;
            });
            //find cif number that can be duplicated
            var findUnique = function (account) { return account.filter(function (as, index) { return account.indexOf(as) !== index; }); };
            if (!value && !isAccountManual)
                return createError({
                    path: path,
                    message: "Please Insert CIF Number",
                });
            if (!isAccountManual && value.length < 1)
                return createError({
                    path: path,
                    message: "Min CIF Number is 1 digit",
                });
            if (!isAccountManual && findUnique(cifNumb).includes(value))
                return createError({
                    path: path,
                    message: "Duplicate CIF Number",
                });
            return true;
        }),
        accounts: Yup.array()
            .test("validator-custom-name", function (value, _a) {
            var _b;
            var createError = _a.createError, path = _a.path, options = _a.options;
            // @ts-ignore
            var isAccountManual = options.parent;
            if (!isAccountManual.manual && ((_b = isAccountManual.cif) === null || _b === void 0 ? void 0 : _b.length) >= 7 && !(value === null || value === void 0 ? void 0 : value.length))
                return createError({
                    path: path,
                    message: "CIF Number must be Validate",
                });
            return true;
        })
            .of(Yup.object().shape({
            AccountNumber: Yup.string().test("validator-custom-name", function (value, _a) {
                var createError = _a.createError, path = _a.path, options = _a.options;
                // @ts-ignore
                var account = options.from[2].value.account;
                var moreAccounts = account
                    .map(function (as) { return as.accounts.map(function (_a) {
                    var AccountNumber = _a.AccountNumber;
                    return AccountNumber;
                }); })
                    .flat(1);
                // @ts-ignore
                var isAccountManual = options.from[1].value.manual;
                //find account number that can be duplicated
                var findUnique = function (account) { return account.filter(function (as, index) { return account.indexOf(as) !== index; }); };
                if (!value && isAccountManual)
                    return createError({
                        path: path,
                        message: "Please Insert Account Number",
                    });
                if (isAccountManual && value.length < 1)
                    return createError({
                        path: path,
                        message: "Min Account Number is 1 digit",
                    });
                if (isAccountManual && findUnique(moreAccounts).includes(value))
                    return createError({
                        path: path,
                        message: "Duplicate Account Number",
                    });
                return true;
            }),
            AccountHolderName: Yup.string().required("Please Insert Account Holder Name"),
            AccountAlias: Yup.array().of(Yup.string().test("validator-custom-name", function (value, _a) {
                var createError = _a.createError, path = _a.path, options = _a.options;
                //find account alias that can be duplicated
                var findUnique = function (account) { return account.filter(function (as, index) { return account.indexOf(as) !== index; }); };
                // @ts-ignore
                var parentAlias = options.parent;
                if (!value)
                    return createError({
                        path: path,
                        message: "Please Insert Account Alias",
                    });
                if (value && findUnique(parentAlias).includes(value))
                    return createError({
                        path: path,
                        message: "Duplicate Account Alias",
                    });
                return true;
            })),
            AccessLevel: Yup.object().shape({
                value: Yup.string().required("Please Select Access Level"),
            }),
            AccountOwner: Yup.object().shape({
                value: Yup.string().required("Please Select Account Owner"),
            }),
            CheckedAccount: Yup.boolean().test("validator-custom-name", function (value, _a) {
                var createError = _a.createError, path = _a.path, options = _a.options;
                // @ts-ignore
                var parent = options.from[2].value.account;
                var checked = parent
                    .map(function (as) { return as.accounts.map(function (_a) {
                    var CheckedAccount = _a.CheckedAccount;
                    return CheckedAccount;
                }); })
                    .flat(1);
                if (!checked.includes(true))
                    return createError({
                        path: path,
                        message: "One of Account have to be Checked",
                    });
                return true;
            }),
        })),
    })),
});
exports.defaultOptionCountry = [
    {
        value: "ID",
        label: "Indonesia",
        currencyCode: "IDR",
    },
    {
        value: "TL",
        label: "Timor-Leste (East Timor)",
        currencyCode: "USD",
    },
    {
        value: "SG",
        label: "Singapore",
        currencyCode: "SGD",
    },
    {
        value: "TW",
        label: "Taiwan",
        currencyCode: "TWD",
    },
    {
        value: "HK",
        label: "Hong Kong",
        currencyCode: "HKD",
    },
    {
        value: "KY",
        label: "Cayman Islands",
        currencyCode: "CYM",
    },
];
//# sourceMappingURL=company.js.map