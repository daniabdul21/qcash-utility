import { ENV } from "@/types";
import type { Axios, AxiosRequestConfig } from "axios";
declare const ApiService: {
    createApiClient: (config: AxiosRequestConfig, env?: ENV) => Axios;
    constructHeaders: (token: string | null) => any;
};
export default ApiService;
