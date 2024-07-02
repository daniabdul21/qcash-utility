/**
 * It takes a promise and returns a promise that resolves to an array of two elements, the first
 * element being the error and the second element being the data
 * @param promise - Promise<T>
 * @param improved - Record<string, unknown>
 * @returns An array with two elements. The first element is either null or an error. The second
 * element is either the data or undefined.
 */
export declare const asyncFn: <T>(promise: Promise<T>, improved?: Record<string, unknown>) => Promise<any[] | (T | null)[]>;
