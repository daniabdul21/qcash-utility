"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculating = void 0;
var currency_1 = __importDefault(require("./currency"));
var calculating = function (value) {
    var _a, _b, _c;
    var exchangeRate = "";
    if ((value === null || value === void 0 ? void 0 : value.length) > 1) {
        if (((_a = value[1]) === null || _a === void 0 ? void 0 : _a.length) === 1) {
            exchangeRate = (0, currency_1.default)(parseInt(value[0]), "USD") + "." + ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.substring(0, 2)) + "0";
        }
        else {
            exchangeRate =
                (0, currency_1.default)(parseInt(value[0]), "USD") +
                    "." +
                    ((_c = value[1]) === null || _c === void 0 ? void 0 : _c.substring(0, 2));
        }
    }
    else if ((value === null || value === void 0 ? void 0 : value.length) === 1) {
        exchangeRate = (0, currency_1.default)(parseInt(value[0]), "USD") + "." + "00";
    }
    else {
        exchangeRate = "0";
    }
    return exchangeRate;
};
exports.calculating = calculating;
//# sourceMappingURL=calculating.js.map