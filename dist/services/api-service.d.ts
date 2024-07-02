import { AxiosRequestConfig } from "axios";
interface RetryConfig {
    /**
     * Retry times.
     */
    retry: number;
    /**
     * Retry delay in milliseconds.
     */
    retryDelay: number;
}
type AxiosRequestConfigWithRetry = RetryConfig & AxiosRequestConfig;
declare const globalConfig: AxiosRequestConfigWithRetry;
/**
 * Axios Instance.
 */
declare const apiClient: import("axios").AxiosInstance;
export { apiClient, globalConfig };
