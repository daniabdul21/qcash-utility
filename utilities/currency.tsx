const CurrencyValue = (value: number, currency: string) => {
  switch (currency) {
    case "IDR":
      return new Intl.NumberFormat("id-ID").format(value);
    case "NZD":
      return new Intl.NumberFormat("en-NZ").format(value);
    case "AUD":
      return new Intl.NumberFormat("en-AU").format(value);
    case "EUR":
      return new Intl.NumberFormat("en-US").format(value);
    case "GBP":
      return new Intl.NumberFormat("en-GB").format(value);
    case "USD":
      return new Intl.NumberFormat("en-US").format(value);
    case "CAD":
      return new Intl.NumberFormat("en-CA").format(value);
    case "CHF":
      return new Intl.NumberFormat("fr-CH").format(value);
    case "CNY":
      return new Intl.NumberFormat("zh-CN").format(value);
    case "HKD":
      return new Intl.NumberFormat("zh-HK").format(value);
    case "JPY":
      return new Intl.NumberFormat("jp-JP").format(value);
    case "NOK":
      return new Intl.NumberFormat("no-NO").format(value);
    case "SAR":
      return new Intl.NumberFormat("ar-SA").format(value);
    case "SEK":
      return new Intl.NumberFormat("en-US").format(value);
    case "SGD":
      return new Intl.NumberFormat("en-US").format(value);
    case "AED":
      return new Intl.NumberFormat("en-US").format(value);
    default:
      return new Intl.NumberFormat("en-US").format(value);
  }
};

export default CurrencyValue;
