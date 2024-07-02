"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var ProductService = function (baseURL, token) {
    var getProducts = function (infinite, userType) {
        if (infinite === void 0) { infinite = false; }
        if (infinite) {
            return custom_axios_1.default
                .get("/product", {
                params: {
                    page: 0,
                    limit: 0,
                    "product.IsBa": userType === "bank-admin",
                    "product.IsCa": userType === "customer-admin",
                    "product.IsCu": userType === "customer-user",
                },
            })
                .then(function (response) {
                if (response.status !== 200) {
                    throw new Error("Error");
                }
                return {
                    data: response.data.data,
                    pagination: response.data.pagination,
                };
            });
        }
        return custom_axios_1.default.get("/product").then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        });
    };
    var getDataByProductID = function (productID) {
        return custom_axios_1.default
            .get("/product/".concat(productID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    return {
        getProducts: getProducts,
        getDataByProductID: getDataByProductID,
    };
};
exports.default = ProductService;
//# sourceMappingURL=products.js.map