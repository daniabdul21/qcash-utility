"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappingStep = void 0;
var types_1 = require("./types");
var mappingStep = function (step) {
    switch (step) {
        case "maker":
            return types_1.TaskStep.Maker;
        case "checker":
            return types_1.TaskStep.Checker;
        case "signer":
            return types_1.TaskStep.Signer;
        case "releaser":
            return types_1.TaskStep.Releaser;
        default:
            return types_1.TaskStep.All;
    }
};
exports.mappingStep = mappingStep;
//# sourceMappingURL=mapping-step.js.map