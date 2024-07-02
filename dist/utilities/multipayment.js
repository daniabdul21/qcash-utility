"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsFromMultipaymentBatch = exports.getAuthorityFromAllProducts = exports.multipaymentProducts = exports.corporateCode = void 0;
var lodash_1 = require("lodash");
var is_json_string_1 = require("./is-json-string");
// TODO: need to get from service endpoint multi-payment/products
var multipaymentProducts = [
    "bpdp sawit",
    "bpjs kesehatan",
    "bpjs ketenagakerjaan",
    "briva",
    "kai",
    "pelindo",
    "pln",
    "pungutan ojk",
    "telkom",
];
exports.multipaymentProducts = multipaymentProducts;
var corporateCode = ["88888", "88881"];
exports.corporateCode = corporateCode;
var getAuthorityFromAllProducts = function (productAuthorities, products) {
    var authority = null;
    (0, lodash_1.map)(products, function (item) {
        // @ts-ignore
        authority = (0, lodash_1.mergeWith)(authority, productAuthorities[(0, lodash_1.toUpper)((0, lodash_1.snakeCase)(item))], function (objValue, srcValue) { return objValue || srcValue; });
    });
    return authority;
};
exports.getAuthorityFromAllProducts = getAuthorityFromAllProducts;
var getIsFromMultipaymentBatch = function (detail) {
    var data = (0, lodash_1.get)(detail, "data", "");
    data = data && (0, is_json_string_1.isJsonString)(data) ? JSON.parse(data) : data;
    var type = (0, lodash_1.get)(detail, "type");
    if (!type) {
        type = (0, lodash_1.get)(detail, "billingType");
    }
    var batchId = (0, lodash_1.get)(data, "batchId");
    return (0, lodash_1.includes)(multipaymentProducts, (0, lodash_1.toLower)(type)) && !!batchId;
};
exports.getIsFromMultipaymentBatch = getIsFromMultipaymentBatch;
//# sourceMappingURL=multipayment.js.map