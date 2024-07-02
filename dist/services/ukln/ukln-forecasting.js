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
var axios_1 = require("axios");
var downloadjs_1 = __importDefault(require("downloadjs"));
var lodash_1 = require("lodash");
var custom_axios_1 = __importDefault(require("../custom-axios"));
var API_PREFIX = "/ukln-forecasting";
var UKLNForecastingService = function () {
    var getAccountStatementDownloadList = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.get("".concat(API_PREFIX, "/list"), {
                            params: (0, lodash_1.pickBy)(params, function (value) { return value !== undefined && value !== ""; }),
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_1 = _a.sent();
                    if (err_1 instanceof axios_1.AxiosError && err_1.response) {
                        throw new Error(err_1.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var postDownloadFileAccountStatement = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var filename, requestCodes, res, err_2, errorRes, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    filename = params.filename, requestCodes = params.requestCodes;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/download-file"), { requestCodes: requestCodes }, {
                            responseType: "blob",
                        })];
                case 2:
                    res = _c.sent();
                    (0, downloadjs_1.default)(res.data, "".concat(filename), res.headers["content-type"]);
                    return [3 /*break*/, 6];
                case 3:
                    err_2 = _c.sent();
                    if (!(err_2 instanceof axios_1.AxiosError && err_2.response)) return [3 /*break*/, 5];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, err_2.response.data.text()];
                case 4:
                    errorRes = _b.apply(_a, [_c.sent()]);
                    throw new Error(errorRes.message);
                case 5: throw new Error("Server Error");
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var postInquiryGlobalAccountStatement = function (props) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, custom_axios_1.default.post("".concat(API_PREFIX, "/inquiry"), props)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    if (err_3 instanceof axios_1.AxiosError && err_3.response) {
                        throw new Error(err_3.response.data.message);
                    }
                    throw new Error("Server Error");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return {
        getAccountStatementDownloadList: getAccountStatementDownloadList,
        postDownloadFileAccountStatement: postDownloadFileAccountStatement,
        postInquiryGlobalAccountStatement: postInquiryGlobalAccountStatement,
    };
};
exports.default = UKLNForecastingService;
//# sourceMappingURL=ukln-forecasting.js.map