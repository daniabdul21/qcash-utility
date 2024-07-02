import { join, split } from "lodash";

export const getRoutePushOne = (router: any, value: string) => {
  const pathWithoutQuery = router.asPath.split("?")[0];
  const splitted = split(pathWithoutQuery, "/");

  splitted.push(value);
  return join(splitted, "/")
};
