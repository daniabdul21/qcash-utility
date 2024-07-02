"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipaymentMethods = exports.MultipaymentAuthorityEnum = exports.FormatEnum = void 0;
var FormatEnum;
(function (FormatEnum) {
    FormatEnum[FormatEnum["csv"] = 1] = "csv";
    FormatEnum[FormatEnum["pdf"] = 4] = "pdf";
    FormatEnum[FormatEnum["xls"] = 2] = "xls";
    FormatEnum[FormatEnum["zip"] = 3] = "zip";
})(FormatEnum || (exports.FormatEnum = FormatEnum = {}));
var MultipaymentAuthorityEnum;
(function (MultipaymentAuthorityEnum) {
    MultipaymentAuthorityEnum["create"] = "Multipayment Create";
    MultipaymentAuthorityEnum["history"] = "Multipayment History";
})(MultipaymentAuthorityEnum || (exports.MultipaymentAuthorityEnum = MultipaymentAuthorityEnum = {}));
exports.MultipaymentMethods = ["One to One", "Mass"];
//# sourceMappingURL=enum.ts.js.map
