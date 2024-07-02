"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJsonString = void 0;
var isJsonString = function (str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
};
exports.isJsonString = isJsonString;
//# sourceMappingURL=is-json-string.js.map