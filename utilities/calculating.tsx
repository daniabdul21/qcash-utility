import CurrencyValue from "./currency";

export const calculating = (value: Array<any>) => {
  let exchangeRate = "";
  if (value?.length > 1) {
    if (value[1]?.length === 1) {
      exchangeRate = CurrencyValue(parseInt(value[0]), "USD") + "." + value[1]?.substring(0, 2) + "0";
    } else {
      exchangeRate =
        CurrencyValue(parseInt(value[0]), "USD") +
        "." +
        value[1]?.substring(0, 2);
    }
  } else if (value?.length === 1) {
    exchangeRate = CurrencyValue(parseInt(value[0]), "USD") + "." + "00";
  } else {
    exchangeRate = "0";
  }
  return exchangeRate;
};
