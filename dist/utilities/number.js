"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinalNumber = void 0;
var ordinalNumber = function (num) {
    var j = num % 10, k = num % 100;
    if (j === 1 && k !== 11) {
        return num + "st";
    }
    if (j === 2 && k !== 12) {
        return num + "nd";
    }
    if (j === 3 && k !== 13) {
        return num + "rd";
    }
    return num + "th";
};
exports.ordinalNumber = ordinalNumber;
//# sourceMappingURL=number.js.map