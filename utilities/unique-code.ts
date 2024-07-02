/**
 * It takes a prefix and a separator and returns a unique code.
 * @param {string} prefix - The prefix of the code.
 * @param [separator=-] - The separator to use between the prefix and the timestamp and random string.
 * @example const code = uniqueCode("NT");
 * console.log(code) // NT-1672579690-Q6O8PH
 */
export const uniqueCode = (prefix: string, separator = "-") => {
  const randomString = Math.random().toString(36).substring(2, 8);
  const code = prefix + separator + Math.floor(Date.now() / 1000) + separator + randomString.toUpperCase();
  return code;
};
