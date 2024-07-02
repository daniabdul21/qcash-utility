"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusToIntSigner = exports.statusToIntMaker = void 0;
var types_1 = require("./types");
var statusToIntMaker = function (status) {
    var _a;
    var _b;
    var statusToIntMap = (_a = {},
        _a[types_1.TaskStatus.Draft] = 1,
        _a[types_1.TaskStatus.Returned] = 2,
        _a[types_1.TaskStatus.Pending] = 3,
        _a[types_1.TaskStatus.DeleteRequest] = 4,
        _a[types_1.TaskStatus.Approved] = 5,
        _a[types_1.TaskStatus.Rejected] = 6,
        _a);
    // @ts-ignore
    return (_b = statusToIntMap[status]) !== null && _b !== void 0 ? _b : 0;
};
exports.statusToIntMaker = statusToIntMaker;
var statusToIntSigner = function (status) {
    var _a;
    var _b;
    var statusToIntMap = (_a = {},
        _a[types_1.TaskStatus.Pending] = 1,
        _a[types_1.TaskStatus.DeleteRequest] = 2,
        _a[types_1.TaskStatus.Approved] = 3,
        _a[types_1.TaskStatus.Rejected] = 4,
        _a[types_1.TaskStatus.Draft] = 5,
        _a[types_1.TaskStatus.Returned] = 6,
        _a);
    // @ts-ignore
    return (_b = statusToIntMap[status]) !== null && _b !== void 0 ? _b : 0;
};
exports.statusToIntSigner = statusToIntSigner;
//# sourceMappingURL=status-to-int.js.map