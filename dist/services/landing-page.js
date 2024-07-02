"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var MainPageService = function () {
    var getLandingInfo = function (typeID) {
        return custom_axios_1.default.get("/landing-page/".concat(typeID))
            .then(function (res) {
            var _a;
            if (res.status !== 200)
                throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return res;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    var getMainPageTypeInfo = function () {
        return custom_axios_1.default.get("/landing-page/type")
            .then(function (res) {
            var _a;
            if (res.status !== 200)
                throw new Error(((_a = res.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            return res;
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    return { getLandingInfo: getLandingInfo, getMainPageTypeInfo: getMainPageTypeInfo };
};
exports.default = MainPageService;
//# sourceMappingURL=landing-page.js.map