export type ENV = "development" | "production";
/**
 * If you want a type meaning "any object", you probably want `AnyObject` instead of `{}`.
 */
export type AnyObject = Record<string, unknown>;
/**
 * Options type for react-select.
 */
export interface Options<T> {
    label: string;
    value: T;
}
/**
 * Sort type for react-table.
 */
export type SortType = {
    id: string;
    desc: boolean;
};
/**
 * API Query Parameters.
 */
export interface QueryParams {
    /**
     * Current page.
     */
    page: number;
    /**
     * Limit per page.
     */
    limit: number;
    /**
     * Create `OR` database queries.
     * @tutorial [key1,key2,key3:value]
     * @example query=name,type:Announcement => Where name = ‘Announcement’ OR type = ‘Announcement’
     * @see http://gym-master.apps.ocp-dev.bri.co.id/api/liquidity/docs/#/ApiService/ApiService_GetListData
     */
    query: string;
    /**
     * Create `AND` database queries.
     * @tutorial [key:value,key:value]
     * @example filter=task_id:1,type:Announcement => Where task_id = 1 AND type = ‘Announcement’
     * @see http://gym-master.apps.ocp-dev.bri.co.id/api/liquidity/docs/#/ApiService/ApiService_GetListData
     */
    filter: string;
    filterOr?: string;
    /**
     * Sort by field.
     */
    sort: string;
    /**
     * Sort direction. Ascending or Descending.
     */
    dir: "ASC" | "DESC";
    time?: string;
}
export interface ApiResponse<Data = any> {
    /**
     * Error state.
     */
    error: boolean;
    /**
     * HTTP status code.
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
    /**
     * Response data from server.
     */
    data: Data;
    /**
     * Pagination.
     */
    pagination?: IPagination;
}
export interface IPagination {
    limit: number;
    page: number;
    recordsOnPage?: number;
    totalPages: number;
    totalRows: string;
}
export type ErrorResponse = Omit<ApiResponse, "data" | "pagination">;
/**
 * Service data type for usePagination custom hooks.
 */
export type ServiceDataFn<ReturnType, Params = QueryParams> = (params: Partial<Params>) => Promise<ApiResponse<ReturnType>>;
export type MapDataFn<D, R = any> = (item: D) => R;
/**
 * Activity Log Response.
 */
export interface ActivityLogResponse {
    action: string;
    command: string;
    companyName: string;
    createdAt: Date;
    description: string;
    key: string;
    task: null;
    taskID: string;
    type: string;
    username: string;
}
/**
 * Get Activity Log Function Types.
 */
export type GetActivityLogFn = (params: Partial<QueryParams>) => Promise<ApiResponse<ActivityLogResponse[]>>;
/**
 * Alias of `keyof A` to maintain parity with `ValueOf`
 * @example
 * ```
 * type Ex = KeyOf<{ a: string, b: number }> // 'a' | 'b'
 * ```
 */
export type KeyOf<A extends object> = keyof A;
/**
 * Return the union of all values in `A`
 * @example
 * ```
 * type Ex = ValueOf<{ a: string, b: number }> // string | number
 * ```
 */
export type ValueOf<A extends object> = A[KeyOf<A>];
