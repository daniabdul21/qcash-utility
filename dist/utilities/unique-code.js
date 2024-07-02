"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueCode = void 0;
/**
 * It takes a prefix and a separator and returns a unique code.
 * @param {string} prefix - The prefix of the code.
 * @param [separator=-] - The separator to use between the prefix and the timestamp and random string.
 * @example const code = uniqueCode("NT");
 * console.log(code) // NT-1672579690-Q6O8PH
 */
var uniqueCode = function (prefix, separator) {
    if (separator === void 0) { separator = "-"; }
    var randomString = Math.random().toString(36).substring(2, 8);
    var code = prefix + separator + Math.floor(Date.now() / 1000) + separator + randomString.toUpperCase();
    return code;
};
exports.uniqueCode = uniqueCode;
//# sourceMappingURL=unique-code.js.map