import { get, includes, map, mergeWith, snakeCase, toLower, toUpper } from "lodash";
import { isJsonString } from "./is-json-string";
// TODO: need to get from service endpoint multi-payment/products
const multipaymentProducts = [
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

const corporateCode = ["88888", "88881"];

const getAuthorityFromAllProducts = (productAuthorities: any, products: any) => {
  let authority: any = null;
  map(products, (item) => {
    // @ts-ignore
    authority = mergeWith(
      authority,
      productAuthorities[toUpper(snakeCase(item))],
      (objValue, srcValue) => objValue || srcValue
    );
  });
  return authority;
};

const getIsFromMultipaymentBatch = (detail: any) => {
  let data = get(detail, "data", "");
  data = data && isJsonString(data) ? JSON.parse(data) : data;
  let type = get(detail, "type");
  if (!type) {
    type = get(detail, "billingType");
  }
  const batchId = get(data, "batchId");
  return includes(multipaymentProducts, toLower(type)) && !!batchId;
};

export { corporateCode, multipaymentProducts, getAuthorityFromAllProducts, getIsFromMultipaymentBatch };
