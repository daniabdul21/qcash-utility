"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusOptions = exports.optionAll = void 0;
var lodash_1 = require("lodash");
var optionAll = { label: "All", value: "All" };
exports.optionAll = optionAll;
var statusOptions = function (statuses) {
    return (0, lodash_1.map)(statuses, function (item, key) { return ({ label: key, value: item }); });
};
exports.statusOptions = statusOptions;
//# sourceMappingURL=options.js.map