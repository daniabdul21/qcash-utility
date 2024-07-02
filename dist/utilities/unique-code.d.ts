/**
 * It takes a prefix and a separator and returns a unique code.
 * @param {string} prefix - The prefix of the code.
 * @param [separator=-] - The separator to use between the prefix and the timestamp and random string.
 * @example const code = uniqueCode("NT");
 * console.log(code) // NT-1672579690-Q6O8PH
 */
export declare const uniqueCode: (prefix: string, separator?: string) => string;
