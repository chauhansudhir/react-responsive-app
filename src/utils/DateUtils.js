import { LOCALE_EN_US } from "../conf/app-conf";

export const DATE_FMT_OPTION_1 = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const localCurrencyFmt = (
  number,
  locale = LOCALE_EN_US,
  options = {}
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    ...options,
  }).format(number);
};

export const dateLocalFmt = (
  dtString,
  locale = LOCALE_EN_US,
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) => {
  const date = new Date(dtString);

  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const dateLocalFmtShortM = (dtString) => {
  return dateLocalFmt(dtString, LOCALE_EN_US, DATE_FMT_OPTION_1);
};
