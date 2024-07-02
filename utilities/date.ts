import { has, includes, isObject, replace } from "lodash";
import moment from "moment";

export const getTimesAgo = (date: any, translation: any) => {
  let time = moment(date).fromNow();
  if (translation) {
    const aDayAgo = "a day ago";
    const aFewSecondsAgo = "a few seconds ago";
    const aMinuteAgo = "a minute ago";
    const aMonthAgo = "a month ago";
    const daysAgo = "days ago";
    const hoursAgo = "hours ago";
    const minutesAgo = "minutes ago";
    const monthsAgo = "months ago";
    if (includes(time, aDayAgo)) time = translation(aDayAgo);
    if (includes(time, aFewSecondsAgo)) time = translation(aFewSecondsAgo);
    if (includes(time, aMinuteAgo)) time = translation(aMinuteAgo);
    if (includes(time, aMonthAgo)) time = translation(aMonthAgo);
    if (includes(time, daysAgo)) time = replace(time, daysAgo, "") + translation(daysAgo);
    if (includes(time, hoursAgo)) time = replace(time, hoursAgo, "") + translation(hoursAgo);
    if (includes(time, minutesAgo)) time = replace(time, minutesAgo, "") + translation(minutesAgo);
    if (includes(time, monthsAgo)) time = replace(time, monthsAgo, "") + translation(monthsAgo);
  }
  return time;
};

export const formatDate = (date: moment.MomentInput, format = "DD/MM/YYYY HH:mm:ss") => {
  if (isObject(date) && has(date, "seconds")) {
    //@ts-ignore
    return moment.unix(date.seconds).format(format);
  }
  return moment(date).format(format);
};

export const getDayAfter = (date: Date) => {
  const thatDate = new Date(date);
  thatDate.setDate(thatDate.getDate() + 1);
  return thatDate;
};

export const createDate = (d: string) => {
  if (Date.parse(d)) return new Date(d);
  return "";
};

export const stringToDate = (str: string) => {
  const dateStr = str.split(" ");
  const pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
  const newStr = dateStr[0].replace(pattern, "$3-$2-$1").concat("T").concat(dateStr[1]);
  const newDate = new Date(newStr);
  return newDate;
};

export const getYearAfter = (date: Date, range = 1): Date => {
  const yearAfter = new Date(date);
  if (Date.parse(String(date))) {
    yearAfter.setFullYear(yearAfter.getFullYear() + range);
    return yearAfter;
  }
  return new Date();
};
