"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowObjEqual = exports.prefixObj = void 0;
/* eslint-disable @typescript-eslint/ban-types */
var prefixObj = function (obj, prefix) {
    if (obj === null) {
        return {};
    }
    return Object.fromEntries(Object.entries(obj).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [
            "".concat(prefix).concat(key),
            typeof value === "object" ? (0, exports.prefixObj)(value, prefix) : value,
        ];
    }));
};
exports.prefixObj = prefixObj;
var shallowObjEqual = function (object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var key = keys1_1[_i];
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};
exports.shallowObjEqual = shallowObjEqual;
//# sourceMappingURL=object.js.map