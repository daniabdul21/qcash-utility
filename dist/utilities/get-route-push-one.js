"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutePushOne = void 0;
var lodash_1 = require("lodash");
var getRoutePushOne = function (router, value) {
    var pathWithoutQuery = router.asPath.split("?")[0];
    var splitted = (0, lodash_1.split)(pathWithoutQuery, "/");
    splitted.push(value);
    return (0, lodash_1.join)(splitted, "/");
};
exports.getRoutePushOne = getRoutePushOne;
//# sourceMappingURL=get-route-push-one.js.map