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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalConfig = exports.apiClient = void 0;
var axios_1 = __importDefault(require("axios"));
var globalConfig = {
    retry: 2,
    retryDelay: 1000,
};
exports.globalConfig = globalConfig;
var ACCESS_TOKEN = "access-token";
var REFRESH_TOKEN = "refresh-token";
var AUTH_PAGE = "/main-page";
/**
 * Axios Instance.
 */
var apiClient = axios_1.default.create({
    baseURL: process.env["NEXT_PUBLIC_API_URL"],
    headers: {
        "Content-Type": "application/json",
    },
});
exports.apiClient = apiClient;
/**
 * Request Interceptor.
 */
apiClient.interceptors.request.use(function (config) {
    var accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
        config.headers = __assign(__assign({}, config.headers), { Authorization: "Bearer ".concat(accessToken) });
    }
    return config;
}, function (error) { return Promise.reject(error); });
/**
 * Response Interceptor.
 */
apiClient.interceptors.response.use(function (response) { return response; }, function (error) {
    var _a, _b;
    if (!error.response) {
        return Promise.reject(__assign(__assign({}, error), { response: { data: { error: true, code: 504, message: "Connection Timeout" } } }));
    }
    if (typeof window !== "undefined" &&
        typeof ((_a = error.response.data) === null || _a === void 0 ? void 0 : _a.message) == "string" &&
        error.response.status === 401 &&
        ["session invalid", "session expired"].includes((_b = error.response.data) === null || _b === void 0 ? void 0 : _b.message.toLowerCase()) &&
        window.location.pathname !== AUTH_PAGE) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        window.location.href = "".concat(AUTH_PAGE, "?logout=true");
    }
    return Promise.reject(error);
});
//# sourceMappingURL=api-service.js.map