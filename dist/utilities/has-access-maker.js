"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAccessMaker = void 0;
var mapping_step_1 = require("./mapping-step");
var types_1 = require("./types");
var hasAccessMaker = function (authorities, module) {
    var _a;
    var hasAccessToModule = authorities.has(module);
    var hasRightAuthorities = (0, mapping_step_1.mappingStep)((_a = authorities
        .get(module)) === null || _a === void 0 ? void 0 : _a.map(function (a) { return a.split(":")[1]; }).filter(function (a) { return a !== "-"; })[0]) === types_1.TaskStep.Maker;
    return hasAccessToModule && hasRightAuthorities;
};
exports.hasAccessMaker = hasAccessMaker;
//# sourceMappingURL=has-access-maker.js.map