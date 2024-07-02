// const specialCharacterMap = new Map<string, string>([
//   ['"', "&quot;"],
//   ["$", "&#36;"],
//   ["]", "&#93;"],
//   ["[", "&#91;"],
//   ["`", "&#96;"],
//   ["|", "&#124;"],
//   ["{", "&#123;"],
//   ["}", "&#125;"],
//   ["<", "&lt;"],
//   [">", "&gt;"],
//   ["/", "&#47;"],
//   ["\\", "&#92;"],
// ]);
export const wafRegex = /["'$[\]{}|\\<>]/g;
export const allSpecialRegex = /["$\'\]\[`/\\{|}!@#$%^&*()=+<>;:'"?]/g;

export const escapeString = (unsafe = "") => {
  return `${unsafe}`.replace(wafRegex, (m: string) => {
    return `&#${m.charCodeAt(0)};`;
  });
};

export const cleanString = (unsafe = "", regex = wafRegex) => {
  return `${unsafe}`.replace(regex, "");
};

export const unescapeString = (input: string) => {
  const string = input?.replace(/&#(\d+);/g, function (_match, charCode) {
    return String.fromCharCode(charCode);
  });

  return string;
};

export const encodeObject = (obj: any, exclusion: any[] = []) => {
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    if (exclusion.includes(key)) {
      newObj[key] = obj[key];
    } else {
      newObj[key] = obj[key] && typeof obj[key] === "string" ? escapeString(obj[key]) : obj[key] || null;
    }
  });
  return newObj;
};

export const decodeObject = (obj: any) => {
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = typeof obj[key] === "string" ? unescapeString(obj[key]) : obj[key] || null;
  });
  return newObj;
};

export const isAlphanumeric = (input: string) => {
  const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
  return alphaNumericRegex.test(input);
};
