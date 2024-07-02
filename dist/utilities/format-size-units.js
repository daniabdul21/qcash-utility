"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSizeUnits = formatSizeUnits;
function formatSizeUnits(bytes) {
    var units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var unitIndex = 0;
    var sizeInUnit = bytes;
    // Loop until the size is small enough to be in a unit before TB or if it is the last unit already
    while (sizeInUnit >= 1024 && unitIndex < units.length - 1) {
        sizeInUnit /= 1024;
        unitIndex++;
    }
    // Format the size to two decimal places if not in Bytes
    var formattedSize = unitIndex === 0 ? sizeInUnit : sizeInUnit.toFixed(2);
    return [formattedSize, units[unitIndex]];
}
//# sourceMappingURL=format-size-units.js.map