"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStatusFilter = exports.removeInvalidDateFilter = void 0;
var moment_1 = __importDefault(require("moment"));
// remove invalid date filter
var removeInvalidDateFilter = function (params) {
    var filters = params.split(',');
    var valid = true;
    var startDate;
    // Loop through filters to find date filter
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        // Check if filter is date filter with greater than or equal operator
        if (filter.includes("created_at:>=")) {
            var dateValue = filter.split(">=")[1];
            var parsedDate = new Date(dateValue);
            startDate = parsedDate;
            // Check if date is valid
            if (isNaN(parsedDate.getTime())) {
                valid = false;
                filters.splice(i, 1);
                i--;
            }
        }
        // Check if filter is date filter with less than operator
        if (filter.includes("created_at:<")) {
            // Check if date is valid
            if (!valid) {
                filters.splice(i, 1);
                i--;
            }
            else {
                var dateValue = filter.split("<")[1];
                var parsedDate = new Date(dateValue);
                var endDate = isNaN(parsedDate.getTime()) ? startDate : parsedDate;
                //Default +1 Hari untuk menangani filter sesama hari ini
                filters[i] = "created_at:<" + (0, moment_1.default)(endDate).locale("id").add(1, "day").format("YYYY-MM-DD");
            }
        }
    }
    return filters.join(',');
};
exports.removeInvalidDateFilter = removeInvalidDateFilter;
// default filter for status task list or history based on active tab
var defaultStatusFilter = function (filterParams, activeTabValue) {
    var filter = activeTabValue === 'History' ? "".concat(filterParams, ",status:<>1,status:<>2,status:<>3,status:<>6,status:<>7,status:<>8") : "".concat(filterParams, ",status:<>4,status:<>5");
    var filterArr = filter.split(',');
    return Array.from(new Set(filterArr)).join(",");
};
exports.defaultStatusFilter = defaultStatusFilter;
//# sourceMappingURL=helper-filter.js.map