"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataDownload = void 0;
var types_1 = require("@/types");
// Formating params for download recap jasa raharja
var getDataDownload = function (productName, type, dynamicQuery, props) {
    var format = props.format, getFilter = props.getFilter, getFilterOr = props.getFilterOr, getSort = props.getSort, getDir = props.getDir, getSearch = props.getSearch;
    // @ts-ignore
    var fileFormat = types_1.FormatEnumJasaRaharja["".concat(format)];
    var data = __assign({ dir: getDir, format: fileFormat, filter: "".concat(getFilter, ",").concat(type === 'history' ? "status:<>1,status:<>2,status:<>3,status:<>6,status:<>7,status:<>8" : "status:<>4,status:<>5"), filterOr: getFilterOr, search: getSearch, sort: getSort, query: getSearch, services: productName, type: type }, dynamicQuery);
    return data;
};
exports.getDataDownload = getDataDownload;
//# sourceMappingURL=get-data-download.js.map