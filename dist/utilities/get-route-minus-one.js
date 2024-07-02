"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouteMinusOne = void 0;
var lodash_1 = require("lodash");
var getRouteMinusOne = function (router) {
    var splitted = (0, lodash_1.split)(router.asPath, "/");
    (0, lodash_1.pull)(splitted, (0, lodash_1.last)(splitted));
    return (0, lodash_1.join)(splitted, "/");
};
exports.getRouteMinusOne = getRouteMinusOne;
//# sourceMappingURL=get-route-minus-one.js.map