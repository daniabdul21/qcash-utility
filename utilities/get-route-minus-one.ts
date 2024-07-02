import { join, last, pull, split } from "lodash";
export const getRouteMinusOne = (router: any) => {
  const splitted = split(router.asPath, "/");
  pull(splitted, last(splitted));
  return join(splitted, "/");
};
