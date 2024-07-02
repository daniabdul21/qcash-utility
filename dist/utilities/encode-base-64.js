"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBase64 = void 0;
var encodeBase64 = function (value) {
    var encodedText = Buffer.from(value).toString('base64');
    return encodedText.replace(/=/g, '');
};
exports.encodeBase64 = encodeBase64;
//# sourceMappingURL=encode-base-64.js.map