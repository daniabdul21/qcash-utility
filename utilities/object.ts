/* eslint-disable @typescript-eslint/ban-types */
export const prefixObj = (obj: Object | null, prefix: string): Object => {
  if (obj === null) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [
        `${prefix}${key}`,
        typeof value === "object" ? prefixObj(value, prefix) : value,
      ];
    })
  );
};

export const shallowObjEqual = (object1: any, object2: any) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}