import { isUndefined } from "lodash";
import { getLocaleByCurrency } from "./locale";

export const formatMoney = (
  value: number | string,
  currency = "",
  currencyDisplay: "symbol" | "narrowSymbol" | "code" | "name" | "none" = "symbol",
  minDecimal = 0,
  maxDecimal = 2,
  position: "left" | "right" | "mix" = "mix"
): string => {
  let newCurrencyDisplay = currencyDisplay;
  if (currency === "" || isUndefined(currency)) newCurrencyDisplay = "none";
  const num = Number(value);
  const locale = getLocaleByCurrency(currency);
  const formatter = new Intl.NumberFormat(
    'en-US',
    locale
      ? {
          style: "currency",
          currency: locale.currencyCode,
          currencyDisplay: newCurrencyDisplay === "none" ? "code" : newCurrencyDisplay,
          minimumFractionDigits: minDecimal,
          maximumFractionDigits: maxDecimal,
        }
      : undefined
  );
  const money = formatter.format(num);
  

  if (position === "left") {
    const m = `${
      newCurrencyDisplay === "narrowSymbol" ? locale.currencySymbol : locale.currencyCode
    } ${`${money}`.replace(/[^\d.,]/g, "")}`;
    return newCurrencyDisplay === "none" ? `${money}`.replace(locale.currencyCode, "").trim() : m.trim();
  }
  if (position === "right") {
    const m = `${`${money}`.replace(/[^\d.,]/g, "")} ${
      newCurrencyDisplay === "narrowSymbol" ? locale.currencySymbol : locale.currencyCode
    }`;
    return newCurrencyDisplay === "none" ? `${money}`.replace(locale.currencyCode, "").trim() : m.trim();
  }

  return newCurrencyDisplay === "none" ? `${money}`.replace(locale.currencyCode, "").trim() : `${money}`.trim();
};