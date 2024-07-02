"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTML = void 0;
var decodeHTML = function (text) {
    var txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
};
exports.decodeHTML = decodeHTML;
//# sourceMappingURL=decode-html.js.map