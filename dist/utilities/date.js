"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearAfter = exports.stringToDate = exports.createDate = exports.getDayAfter = exports.formatDate = exports.getTimesAgo = void 0;
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var getTimesAgo = function (date, translation) {
    var time = (0, moment_1.default)(date).fromNow();
    if (translation) {
        var aDayAgo = "a day ago";
        var aFewSecondsAgo = "a few seconds ago";
        var aMinuteAgo = "a minute ago";
        var aMonthAgo = "a month ago";
        var daysAgo = "days ago";
        var hoursAgo = "hours ago";
        var minutesAgo = "minutes ago";
        var monthsAgo = "months ago";
        if ((0, lodash_1.includes)(time, aDayAgo))
            time = translation(aDayAgo);
        if ((0, lodash_1.includes)(time, aFewSecondsAgo))
            time = translation(aFewSecondsAgo);
        if ((0, lodash_1.includes)(time, aMinuteAgo))
            time = translation(aMinuteAgo);
        if ((0, lodash_1.includes)(time, aMonthAgo))
            time = translation(aMonthAgo);
        if ((0, lodash_1.includes)(time, daysAgo))
            time = (0, lodash_1.replace)(time, daysAgo, "") + translation(daysAgo);
        if ((0, lodash_1.includes)(time, hoursAgo))
            time = (0, lodash_1.replace)(time, hoursAgo, "") + translation(hoursAgo);
        if ((0, lodash_1.includes)(time, minutesAgo))
            time = (0, lodash_1.replace)(time, minutesAgo, "") + translation(minutesAgo);
        if ((0, lodash_1.includes)(time, monthsAgo))
            time = (0, lodash_1.replace)(time, monthsAgo, "") + translation(monthsAgo);
    }
    return time;
};
exports.getTimesAgo = getTimesAgo;
var formatDate = function (date, format) {
    if (format === void 0) { format = "DD/MM/YYYY HH:mm:ss"; }
    if ((0, lodash_1.isObject)(date) && (0, lodash_1.has)(date, "seconds")) {
        //@ts-ignore
        return moment_1.default.unix(date.seconds).format(format);
    }
    return (0, moment_1.default)(date).format(format);
};
exports.formatDate = formatDate;
var getDayAfter = function (date) {
    var thatDate = new Date(date);
    thatDate.setDate(thatDate.getDate() + 1);
    return thatDate;
};
exports.getDayAfter = getDayAfter;
var createDate = function (d) {
    if (Date.parse(d))
        return new Date(d);
    return "";
};
exports.createDate = createDate;
var stringToDate = function (str) {
    var dateStr = str.split(" ");
    var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    var newStr = dateStr[0].replace(pattern, "$3-$2-$1").concat("T").concat(dateStr[1]);
    var newDate = new Date(newStr);
    return newDate;
};
exports.stringToDate = stringToDate;
var getYearAfter = function (date, range) {
    if (range === void 0) { range = 1; }
    var yearAfter = new Date(date);
    if (Date.parse(String(date))) {
        yearAfter.setFullYear(yearAfter.getFullYear() + range);
        return yearAfter;
    }
    return new Date();
};
exports.getYearAfter = getYearAfter;
//# sourceMappingURL=date.js.map