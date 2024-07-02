import crypto from "crypto-js";

export const createSignature = (params: any, companyID: string | number, userID: string | number) => {
  const signature = process.env["NEXT_PUBLIC_SIGNATURE"];
  if (typeof window === "undefined" || !signature) return null

  const token = localStorage.getItem("access-token");
  if (!token) return null

  const hash = crypto.HmacSHA256(
    `bodydata:` + JSON.stringify(params) + `&bearer:${token}&companyid:` + companyID + `&userid:` + userID,
    signature
  );

  return hash.toString(crypto.enc.Hex);
};
