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
var axios_1 = __importDefault(require("axios"));
var requestInterceptor = function (config) {
    config.headers = __assign({}, config.headers);
    config.validateStatus = function () { return true; };
    return config;
};
/**
 * Interceptor for logging request.
 */
var requestLoggerInterceptor = function (env) { return function (request) {
    // if (env !== "production") {
    //   console.info("%cREQ", "color: #17B5E2;font-weight: bold;", request);
    // }
    return request;
}; };
/**
 * Interceptor for logging response.
 */
var responseLoggerInterceptor = function (env) { return function (response) {
    var _a;
    // if (env !== "production") {
    //   console.info("%cRES", "color: #42AD3E;font-weight: bold;", response);
    // }
    if (response.status && response.status === 401) {
        localStorage.removeItem("access-token");
        window.location.href = "/landing-page?logout=true";
    }
    if (response.status && response.status === 403 && ((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) === "This token has been Logout") {
        localStorage.removeItem("access-token");
        window.location.href = "/landing-page?logout=true";
    }
    return response;
}; };
/**
 * Interceptor for logging error response.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var errorLoggerInterceptor = function (env) { return function (error) {
    var _a;
    if (env !== "production") {
        console.info("%cRES", "color: #E35F5F;font-weight: bold;", error.response);
    }
    if (error.status && error.status === 401) {
        localStorage.removeItem("access-token");
        window.location.href = "/landing-page?logout=true";
    }
    if (error.status && error.status === 403 && ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message) === "This token has been Logout") {
        localStorage.removeItem("access-token");
        window.location.href = "/landing-page?logout=true";
    }
    return Promise.reject(error);
}; };
/**
 * Create axios instance with preset config and interceptors.
 */
var createApiClient = function (config, env) {
    if (env === void 0) { env = "development"; }
    var apiClient = axios_1.default.create(config);
    apiClient.defaults.timeout = 60000;
    apiClient.interceptors.request.use(requestInterceptor);
    apiClient.interceptors.request.use(requestLoggerInterceptor(env), errorLoggerInterceptor(env));
    apiClient.interceptors.response.use(responseLoggerInterceptor(env), errorLoggerInterceptor(env));
    return apiClient;
};
var constructHeaders = function (token) {
    var _a;
    return ({
        Authorization: (_a = "Bearer ".concat(token)) !== null && _a !== void 0 ? _a : "",
    });
};
var ApiService = {
    createApiClient: createApiClient,
    constructHeaders: constructHeaders,
};
exports.default = ApiService;
//# sourceMappingURL=api.js.map