"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = void 0;
var types_1 = require("../types");
var toLower_1 = __importDefault(require("lodash/toLower"));
// TODO: merge with logic status from task, and replace all render description from task status!
// FIXME: get currentStep from WORKFLOW!!!
var getDescription = function (currentStep) {
    var description = "-";
    if ((0, toLower_1.default)(currentStep) === (0, toLower_1.default)(types_1.TaskStep.Checker))
        description = "Need checking";
    if ((0, toLower_1.default)(currentStep) === (0, toLower_1.default)(types_1.TaskStep.Maker))
        description = "Can edit";
    if ((0, toLower_1.default)(currentStep) === (0, toLower_1.default)(types_1.TaskStep.Releaser))
        description = "Need releasing";
    if ((0, toLower_1.default)(currentStep) === (0, toLower_1.default)(types_1.TaskStep.Signer))
        description = "Need signing";
    return description;
};
exports.getDescription = getDescription;
//# sourceMappingURL=get-description.js.map