"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScheduledTimeOptions = exports.getOptions = void 0;
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var getOptions = function (array, translation) {
    return (0, lodash_1.map)(array, function (item) { return ({
        label: translation ? ((0, lodash_1.includes)(["00", "30"], translation(item)) ? item : translation(item)) : item,
        value: item,
    }); });
};
exports.getOptions = getOptions;
var getScheduledTimeOptions = function (isThirty, isToday, translation) {
    if (isThirty === void 0) { isThirty = false; }
    if (isToday === void 0) { isToday = false; }
    var getHour = 0;
    var getMinutes = (0, moment_1.default)().minutes();
    if (isToday)
        getHour = (0, moment_1.default)().hours() + 1;
    if (isToday && isThirty)
        getHour = ((0, moment_1.default)().hours() + 1) * 2;
    var arrayTime = Array.from({ length: (isThirty ? 48 : 24) - getHour }, function (_i, hour) {
        return (0, moment_1.default)({
            hour: Math.floor(isThirty ? (hour + getHour) / 2 : hour + getHour),
            minutes: isThirty ? ((hour + getHour) % 2 === 0 ? 0 : 30) : 0,
        }).format("HH:mm");
    });
    if (getMinutes < 30 && isThirty)
        arrayTime.unshift((0, moment_1.default)({
            hour: (0, moment_1.default)().hours(),
            minutes: 30,
        }).format("HH:mm"));
    return (0, exports.getOptions)(arrayTime, translation);
};
exports.getScheduledTimeOptions = getScheduledTimeOptions;
//# sourceMappingURL=options.js.map