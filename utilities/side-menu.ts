import { CUSTOM_ACTION, CUSTOM_LINKS, ICON_MAP } from "@/utilities";
import { IconType } from "react-icons";
import { NavigationMenuSidebar, ProductSidebarType } from "./types";
import { ProductAuthorityType } from "@ordentco/addons-auth-provider/types";
import { get, toUpper } from "lodash";

export const mappingSidebar = (
  menu: any,
  product: ProductSidebarType,
  THIRD_PARTY?: Record<string, unknown> | any,
  productAuthorities?: Record<string, ProductAuthorityType>,
  translateTo?: (key: string) => void
): Array<NavigationMenuSidebar> => {
  return !menu || !product
    ? []
    : menu
        .filter((items: NavigationMenuSidebar) => {
          //  TODO: filter menu to handle render make a payment for multipayment & make recursive func
          const productNameMultipayment = "multipayment";
          const productIDMultipayment = "244";
          if (`${items.productID}` === productIDMultipayment) {
            const productAuthority = productAuthorities?.[toUpper(productNameMultipayment)];
            const isMaker = get(productAuthority, "dataEntry") || get(productAuthority, "uploadFile");
            if (!isMaker) {
              return items.productID !== productIDMultipayment;
            }
          }
          return items;
        })
        .map((items: NavigationMenuSidebar) => {
          const products = product.data.find(({ productID }) => `${productID}` === `${items.productID}`);
          return {
            name: translateTo?.(items.label || ("No Title" as string)),
            menuID: items.menuID,
            parentID: items.parentID,
            href:
              CUSTOM_ACTION[products?.name as string] ??
              (products?.BaseHreff as string) ??
              CUSTOM_LINKS[items.name as string] ??
              "#",
            icon: items.iconURI ? ICON_MAP[items.iconURI as keyof IconType] ?? null : null,
            enable: items.isEnable,
            current: false,
            isOpen: false,
            isModule: Object.keys(CUSTOM_LINKS).includes(items.name as string) ? true : items.isModule,
            onClick: products?.is3rdParty ?? false ? THIRD_PARTY[products?.name as string] : null,
            children: items.children
              ? mappingSidebar(items.children, product, THIRD_PARTY, productAuthorities, translateTo)
              : [],
          };
        });
};

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
