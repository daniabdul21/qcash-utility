"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var BIFASTTransferService = function (token, baseURL) {
    var getMenuLicense = function (companyId, moduleId) {
        return (custom_axios_1.default
            // .get(`/menu/license/data2?page=1&limit=10&filter=company_id:${companyId},product_id:${moduleId}`)
            .post("/menu/license/data2", {
            page: 1,
            limit: 10,
            filter: "company_id:".concat(companyId, ",product_id:").concat(moduleId),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        }));
    };
    var getCompanyLimit = function (companyId) {
        return custom_axios_1.default
            .get("/company/limit?companyID=".concat(companyId))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        });
    };
    var getWorkflow = function (companyId, moduleId) {
        return (custom_axios_1.default
            // .get(`/workflow/data?page=1&limit=10&dir=ASC&workflow.moduleID=${moduleId}&workflow.companyID=${companyId}`)
            .post("/workflow/data", {
            page: 1,
            limit: 10,
            dir: "ASC",
            "workflow.moduleID": moduleId,
            "workflow.companyID": companyId,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        }));
    };
    var getBankList = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("/system/master-data/MdBankKliring?dir=DESC")
                    .then(function (res) {
                    if (res.status !== 200) {
                        return [];
                    }
                    return res.data.data;
                })
                    .catch(function (_) { return []; })];
        });
    }); };
    var createMultipleBIFASTTransfer = function (body) {
        return custom_axios_1.default
            .post("/bifast/multiple/task", body)
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
            return Promise.reject(error.response.data);
        });
    };
    var postTransactionStatus = function (body) {
        return custom_axios_1.default
            .post("/bifast/status/inquiry", body)
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
            return Promise.reject(e.response.data);
        });
    };
    return {
        postTransactionStatus: postTransactionStatus,
        getMenuLicense: getMenuLicense,
        getCompanyLimit: getCompanyLimit,
        getWorkflow: getWorkflow,
        getBankList: getBankList,
        createMultipleBIFASTTransfer: createMultipleBIFASTTransfer,
    };
};
exports.default = BIFASTTransferService;
//# sourceMappingURL=bi-fast-transfer.js.map