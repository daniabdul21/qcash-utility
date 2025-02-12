"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var BeneficiaryAccountService = function (token, baseURL) {
    var getBeneficiaryAccountData = function (params) {
        return custom_axios_1.default
            .get("/beneficiary-account/dataByRole", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getBeneficiaryBankData = function (params) {
        return custom_axios_1.default
            .get("/beneficiary-account/bank", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data;
        });
    };
    var getBeneficiaryAccountDataByRole = function (params) {
        if (params === void 0) { params = {}; }
        return custom_axios_1.default.get("/beneficiary-account/dataByRole", { params: params }).then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        });
    };
    var getDataBeneficiary = function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (params) {
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                return [2 /*return*/, custom_axios_1.default.get("/beneficiary-account/data", { params: params }).then(function (response) {
                        return response.data;
                    })];
            });
        });
    };
    var postValidateBeneficiaryAccount = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var _c = _b.accountNo, accountNo = _c === void 0 ? "" : _c, _d = _b.bankCode, bankCode = _d === void 0 ? "" : _d, _e = _b.amount, amount = _e === void 0 ? "" : _e;
        return __generator(this, function (_f) {
            return [2 /*return*/, custom_axios_1.default
                    .post("beneficiary-account/validate", {
                    accountNo: accountNo,
                    bankCode: bankCode,
                    amount: amount,
                })
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: res.data,
                    };
                })
                    .catch(function (e) {
                    return Promise.reject(e);
                })];
        });
    }); };
    var postValidateBeneficiaryAccountProxy = function (body) {
        return custom_axios_1.default
            .post("/bifast/validate/proxy", body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var postValidateEnquiry = function (body) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/beneficiary-account/validate/enquiry", body)
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return {
                        data: res.data,
                    };
                })
                    .catch(function (e) {
                    return Promise.reject(e);
                })];
        });
    }); };
    var beneficiaryFavorite = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/beneficiary-account/favorite", { params: params })
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.message) || { message: "Server Error" });
                })];
        });
    }); };
    var beneficiaryFavoriteMethod = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var action, rest;
        return __generator(this, function (_a) {
            action = params.action, rest = __rest(params, ["action"]);
            return [2 /*return*/, custom_axios_1.default
                    .post("/beneficiary-account/favorite/".concat(action), __assign({}, rest))
                    .then(function (res) {
                    var _a;
                    if (res.status !== 200) {
                        throw new Error(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    }
                    return res.data;
                })
                    .catch(function (err) {
                    var _a;
                    return Promise.reject(((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) || err || { message: "Server Error" });
                })];
        });
    }); };
    var postValidateBeneficiaryAccountPaymentHub = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .post("/beneficiary-account/validate/paymenthub-v2", __assign({}, payload))
                    .then(function (response) {
                    if (!response.data)
                        throw new Error("Failed to validate beneficiary account");
                    return response.data;
                })
                    .catch(function (err) {
                    return Promise.reject(err);
                })];
        });
    }); };
    return {
        getBeneficiaryAccountData: getBeneficiaryAccountData,
        postValidateBeneficiaryAccount: postValidateBeneficiaryAccount,
        getBeneficiaryBankData: getBeneficiaryBankData,
        getBeneficiaryAccountDataByRole: getBeneficiaryAccountDataByRole,
        postValidateBeneficiaryAccountProxy: postValidateBeneficiaryAccountProxy,
        getDataBeneficiary: getDataBeneficiary,
        postValidateEnquiry: postValidateEnquiry,
        beneficiaryFavorite: beneficiaryFavorite,
        beneficiaryFavoriteMethod: beneficiaryFavoriteMethod,
        postValidateBeneficiaryAccountPaymentHub: postValidateBeneficiaryAccountPaymentHub,
    };
};
exports.default = BeneficiaryAccountService;
//# sourceMappingURL=beneficiary-account.js.map