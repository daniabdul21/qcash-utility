export const localeConfigList = [
  {
    currencyCode: "NZD",
    currencySymbol: "NZ$",
    locale: "en-NZ",
  },
  {
    currencyCode: "AUD",
    currencySymbol: "A$",
    locale: "en-AU",
  },
  {
    currencyCode: "EUR",
    currencySymbol: "€",
    locale: "es",
  },
  {
    currencyCode: "GBP",
    currencySymbol: "£",
    locale: "en-UK",
  },
  {
    currencyCode: "USD",
    currencySymbol: "$",
    locale: "en-US",
  },
  {
    currencyCode: "CAD",
    currencySymbol: "C$",
    locale: "en-CA",
  },
  {
    currencyCode: "CHF",
    currencySymbol: "CHF",
    locale: "de-CH",
  },
  {
    currencyCode: "CNY",
    currencySymbol: "¥",
    locale: "zh",
  },
  {
    currencyCode: "HKD",
    currencySymbol: "$",
    locale: "en-HK",
  },
  {
    currencyCode: "JPY",
    currencySymbol: "¥",
    locale: "ja",
  },
  {
    currencyCode: "MYR",
    currencySymbol: "RM",
    locale: "en-MY",
  },
  {
    currencyCode: "NOK",
    currencySymbol: "kr",
    locale: "sv-SE",
  },
  {
    currencyCode: "SAR",
    currencySymbol: "﷼",
    locale: "ar",
  },
  {
    currencyCode: "SEK",
    currencySymbol: "kr",
    locale: "sv",
  },
  {
    currencyCode: "SGD",
    currencySymbol: "S$",
    locale: "en-SG",
  },
  {
    currencyCode: "THB",
    currencySymbol: "฿",
    locale: "th",
  },
  {
    currencyCode: "AED",
    currencySymbol: "د.إ",
    locale: "ar",
  },
  {
    currencyCode: "IDR",
    currencySymbol: "Rp",
    locale: "id-ID",
  },
  {
    currencyCode: "TWD",
    currencySymbol: "NT$",
    locale: "zh"
  }
  
];

const defaultLocale = {
  currencyCode: "USD",
  currencySymbol: "$",
  locale: "en-US",
};

export const getLocaleByCurrency = (currency: string) => {
  let locale = localeConfigList.find((l) => l.currencyCode === currency);
  locale ??= defaultLocale;
  return locale;
};

