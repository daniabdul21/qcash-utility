"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFn = void 0;
/**
 * It takes a promise and returns a promise that resolves to an array of two elements, the first
 * element being the error and the second element being the data
 * @param promise - Promise<T>
 * @param improved - Record<string, unknown>
 * @returns An array with two elements. The first element is either null or an error. The second
 * element is either the data or undefined.
 */
var asyncFn = function (promise, improved) {
    return promise
        .then(function (data) { return [null, data]; })
        .catch(function (err) {
        if (improved) {
            Object.assign(err, improved);
        }
        return [err]; // which is same as [err, undefined];
    });
};
exports.asyncFn = asyncFn;
//# sourceMappingURL=async-fn.js.map