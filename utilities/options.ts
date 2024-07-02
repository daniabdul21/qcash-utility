import { map, includes } from "lodash";
import moment from "moment";

export const getOptions = (array: any, translation: any) =>
  map(array, (item: string) => ({
    label: translation ? (includes(["00", "30"], translation(item)) ? item : translation(item)) : item,
    value: item,
  }));

export const getScheduledTimeOptions = (isThirty = false, isToday = false, translation?: any) => {
  let getHour = 0;
  const getMinutes = moment().minutes();

  if (isToday) getHour = moment().hours() + 1;
  if (isToday && isThirty) getHour = (moment().hours() + 1) * 2;

  const arrayTime = Array.from({ length: (isThirty ? 48 : 24) - getHour }, (_i, hour) =>
    moment({
      hour: Math.floor(isThirty ? (hour + getHour) / 2 : hour + getHour),
      minutes: isThirty ? ((hour + getHour) % 2 === 0 ? 0 : 30) : 0,
    }).format("HH:mm")
  );

  if (getMinutes < 30 && isThirty)
    arrayTime.unshift(
      moment({
        hour: moment().hours(),
        minutes: 30,
      }).format("HH:mm")
    );

  return getOptions(arrayTime, translation);
};
