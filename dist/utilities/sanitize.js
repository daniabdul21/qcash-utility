"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAlphanumeric = exports.decodeObject = exports.encodeObject = exports.unescapeString = exports.cleanString = exports.escapeString = exports.allSpecialRegex = exports.wafRegex = void 0;
// const specialCharacterMap = new Map<string, string>([
//   ['"', "&quot;"],
//   ["$", "&#36;"],
//   ["]", "&#93;"],
//   ["[", "&#91;"],
//   ["`", "&#96;"],
//   ["|", "&#124;"],
//   ["{", "&#123;"],
//   ["}", "&#125;"],
//   ["<", "&lt;"],
//   [">", "&gt;"],
//   ["/", "&#47;"],
//   ["\\", "&#92;"],
// ]);
exports.wafRegex = /["'$[\]{}|\\<>]/g;
exports.allSpecialRegex = /["$\'\]\[`/\\{|}!@#$%^&*()=+<>;:'"?]/g;
var escapeString = function (unsafe) {
    if (unsafe === void 0) { unsafe = ""; }
    return "".concat(unsafe).replace(exports.wafRegex, function (m) {
        return "&#".concat(m.charCodeAt(0), ";");
    });
};
exports.escapeString = escapeString;
var cleanString = function (unsafe, regex) {
    if (unsafe === void 0) { unsafe = ""; }
    if (regex === void 0) { regex = exports.wafRegex; }
    return "".concat(unsafe).replace(regex, "");
};
exports.cleanString = cleanString;
var unescapeString = function (input) {
    var string = input === null || input === void 0 ? void 0 : input.replace(/&#(\d+);/g, function (_match, charCode) {
        return String.fromCharCode(charCode);
    });
    return string;
};
exports.unescapeString = unescapeString;
var encodeObject = function (obj, exclusion) {
    if (exclusion === void 0) { exclusion = []; }
    var newObj = {};
    Object.keys(obj).forEach(function (key) {
        if (exclusion.includes(key)) {
            newObj[key] = obj[key];
        }
        else {
            newObj[key] = obj[key] && typeof obj[key] === "string" ? (0, exports.escapeString)(obj[key]) : obj[key] || null;
        }
    });
    return newObj;
};
exports.encodeObject = encodeObject;
var decodeObject = function (obj) {
    var newObj = {};
    Object.keys(obj).forEach(function (key) {
        newObj[key] = typeof obj[key] === "string" ? (0, exports.unescapeString)(obj[key]) : obj[key] || null;
    });
    return newObj;
};
exports.decodeObject = decodeObject;
var isAlphanumeric = function (input) {
    var alphaNumericRegex = /^[a-zA-Z0-9]+$/;
    return alphaNumericRegex.test(input);
};
exports.isAlphanumeric = isAlphanumeric;
//# sourceMappingURL=sanitize.js.map