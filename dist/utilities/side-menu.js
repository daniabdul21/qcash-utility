"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappingSidebar = void 0;
var utilities_1 = require("@/utilities");
var lodash_1 = require("lodash");
var mappingSidebar = function (menu, product, THIRD_PARTY, productAuthorities, translateTo) {
    return !menu || !product
        ? []
        : menu
            .filter(function (items) {
            //  TODO: filter menu to handle render make a payment for multipayment & make recursive func
            var productNameMultipayment = "multipayment";
            var productIDMultipayment = "244";
            if ("".concat(items.productID) === productIDMultipayment) {
                var productAuthority = productAuthorities === null || productAuthorities === void 0 ? void 0 : productAuthorities[(0, lodash_1.toUpper)(productNameMultipayment)];
                var isMaker = (0, lodash_1.get)(productAuthority, "dataEntry") || (0, lodash_1.get)(productAuthority, "uploadFile");
                if (!isMaker) {
                    return items.productID !== productIDMultipayment;
                }
            }
            return items;
        })
            .map(function (items) {
            var _a, _b, _c, _d, _e;
            var products = product.data.find(function (_a) {
                var productID = _a.productID;
                return "".concat(productID) === "".concat(items.productID);
            });
            return {
                name: translateTo === null || translateTo === void 0 ? void 0 : translateTo(items.label || "No Title"),
                menuID: items.menuID,
                parentID: items.parentID,
                href: (_c = (_b = (_a = utilities_1.CUSTOM_ACTION[products === null || products === void 0 ? void 0 : products.name]) !== null && _a !== void 0 ? _a : products === null || products === void 0 ? void 0 : products.BaseHreff) !== null && _b !== void 0 ? _b : utilities_1.CUSTOM_LINKS[items.name]) !== null && _c !== void 0 ? _c : "#",
                icon: items.iconURI ? (_d = utilities_1.ICON_MAP[items.iconURI]) !== null && _d !== void 0 ? _d : null : null,
                enable: items.isEnable,
                current: false,
                isOpen: false,
                isModule: Object.keys(utilities_1.CUSTOM_LINKS).includes(items.name) ? true : items.isModule,
                onClick: ((_e = products === null || products === void 0 ? void 0 : products.is3rdParty) !== null && _e !== void 0 ? _e : false) ? THIRD_PARTY[products === null || products === void 0 ? void 0 : products.name] : null,
                children: items.children
                    ? (0, exports.mappingSidebar)(items.children, product, THIRD_PARTY, productAuthorities, translateTo)
                    : [],
            };
        });
};
exports.mappingSidebar = mappingSidebar;
// TODO: map menu to handle render make a payment for multipayment & make recursive func
//move to side menu ts file
// map(m, (item, key) => {
//   if (!isEmpty(item.children)) {
//     map(item.children, (itemChildren, keyChildren) => {
//       // FIXME: need to change logic because this is special request
//       const productNameMultipayment = "multipayment";
//       const productName = m[key].children[keyChildren].name;
//       let productChildren = itemChildren.children;
//       if (!isEmpty(productChildren)) {
//         if (toLower(productName) === productNameMultipayment) {
//           const productAuthority = productAuthorities[toUpper(productNameMultipayment)];
//           const isMaker = get(productAuthority, "batch") || get(productAuthority, "dataEntry");
//           if (!isMaker) {
//             productChildren = filter(productChildren, (item) => !includes(item.href, "create"));
//             m[key].children[keyChildren].children = productChildren;
//           }
//         }
//         map(productChildren, (itemChildrenChildren, keyChildrenChildren) => {
//           m[key].children[keyChildren].children[keyChildrenChildren].name = translation(
//             m[key].children[keyChildren].children[keyChildrenChildren].name
//           );
//         });
//       }
//     });
//   }
// });
// const m = decoded.map<NavigationMenu>((v) => {
//   const product = resp.data.find((d) => `${d.productID}` === `${v.productID}`);
//   return {
//     name: v.label,
//     menuID: v.menuID,
//     parentID: v.parentID,
//     href: CUSTOM_ACTION[product?.name] ?? product?.BaseHreff ?? CUSTOM_LINKS[v.name] ?? "#",
//     icon: v.iconURI ? ICON_MAP[v.iconURI] ?? null : null,
//     enable: v.isEnable,
//     current: false,
//     isOpen: false,
//     isModule: Object.keys(CUSTOM_LINKS).includes(v.name) ? true : v.isModule,
//     onClick: product?.is3rdParty ?? false ? THIRD_PARTY[product.name] : null,
//     children: v.children
//       ? v.children.map((c) => {
//         const childProduct = resp.data.find((d) => `${d.productID}` === `${c.productID}`);
//         Temporary Code, while waiting BaseHreff partner/sync/CBM change to partner/sync in BE
//         if (childProduct?.BaseHreff === "/partner/sync/CBM") {
//           childProduct["BaseHreff"] = "/partner/sync";
//         }
//         Temporary Code, while waiting BaseHreff swift/swift-transfer/create change to swift/swift-transfer in BE
//         if (childProduct?.BaseHreff === "/swift/swift-transfer/create") {
//           childProduct["BaseHreff"] = "/swift/swift-transfer";
//         }
//         Temporary Code, while waiting BaseHreff upload-transfer/create change to bulk-transfer/create in BE
//         if (childProduct?.BaseHreff === "/upload-transfer/create") {
//           childProduct["BaseHreff"] = "/bulk-transfer/create";
//         }
//         Temporary Code, while waiting BaseHreff upload-transfer/history change to bulk-transfer/history in BE
//         if (childProduct?.BaseHreff === "/upload-transfer/history") {
//           childProduct["BaseHreff"] = "/bulk-transfer/history";
//         }
//         return {
//           name: c.label,
//           menuID: c.menuID,
//           parentID: c.parentID,
//           href: CUSTOM_ACTION[childProduct?.name] ?? childProduct?.BaseHreff ?? CUSTOM_LINKS[c.name] ?? "#",
//           icon: c.iconURI ? ICON_MAP[c.iconURI] ?? null : null,
//           current: false,
//           isOpen: false,
//           enable: c.isEnable,
//           isModule: Object.keys(CUSTOM_LINKS).includes(c.name) ? true : c.isModule,
//           onClick: childProduct?.is3rdParty ?? false ? THIRD_PARTY[childProduct.name] : null,
//           still find to make cleane codeable, but this is temporarty code for children level 2
//           children: c.children
//             ? c.children.map((as) => {
//               const grandChildProduct = resp.data.find((dw) => `${dw.productID}` === `${as.productID}`);
//               Temporary Code, while waiting BaseHreff partner/sync/CBM change to partner/sync in BE
//               if (grandChildProduct?.BaseHreff === "/partner/sync/CBM") {
//                 grandChildProduct["BaseHreff"] = "/partner/sync";
//               }
//               Temporary Code, while waiting BaseHreff swift/swift-transfer/create change to swift/swift-transfer in BE
//               if (grandChildProduct?.BaseHreff === "/swift/swift-transfer/create") {
//                 grandChildProduct["BaseHreff"] = "/swift/swift-transfer";
//               }
//               Temporary Code, while waiting BaseHreff upload-transfer/create change to bulk-transfer/create in BE
//               if (grandChildProduct?.BaseHreff === "/upload-transfer/create") {
//                 grandChildProduct["BaseHreff"] = "/bulk-transfer/create";
//               }
//               Temporary Code, while waiting BaseHreff upload-transfer/history change to bulk-transfer/history in BE
//               if (grandChildProduct?.BaseHreff === "/upload-transfer/history") {
//                 grandChildProduct["BaseHreff"] = "/bulk-transfer/history";
//               }
//               return {
//                 name: as.label,
//                 menuID: c.menuID,
//                 parentID: c.parentID,
//                 href:
//                   CUSTOM_ACTION[grandChildProduct?.name] ??
//                   grandChildProduct?.BaseHreff ??
//                   CUSTOM_LINKS[as.name] ??
//                   "#",
//                 icon: as.iconURI ? ICON_MAP[as.iconURI] ?? null : null,
//                 current: false,
//                 enable: as.isEnable,
//                 isModule: Object.keys(CUSTOM_LINKS).includes(as.name) ? true : as.isModule,
//                 onClick:
//                   grandChildProduct?.is3rdParty ?? false ? THIRD_PARTY[grandChildProduct.name] : null,
//                 children: [],
//               };
//             })
//             : [],
//         };
//       })
//       : [],
//   };
// });
//# sourceMappingURL=side-menu.js.map