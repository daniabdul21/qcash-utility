"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, Exception.prototype);
        return _this;
    }
    /**
     * It returns a string that says "Request Failed: " followed by the value of the message property
     * @returns A string that says "Request Failed: " and then the message that was passed in.
     */
    Exception.prototype.getErrorMessage = function () {
        return "Request Failed: ".concat(this.message);
    };
    return Exception;
}(Error));
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map