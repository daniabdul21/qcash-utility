import { mappingStep } from "./mapping-step";
import { TaskStep } from "./types";

export const hasAccessMaker = (
  authorities: Map<string, string[]>,
  module: string
) => {
  const hasAccessToModule = authorities.has(module);
  const hasRightAuthorities =
    mappingStep(
      authorities
        .get(module)
        ?.map((a) => a.split(":")[1])
        .filter((a) => a !== "-")[0]
    ) === TaskStep.Maker;
  return hasAccessToModule && hasRightAuthorities;
};
