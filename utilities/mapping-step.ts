import { TaskStep } from "./types";

export const mappingStep = (step?: string): TaskStep => {
  switch (step) {
    case "maker":
      return TaskStep.Maker;
    case "checker":
      return TaskStep.Checker;
    case "signer":
      return TaskStep.Signer;
    case "releaser":
      return TaskStep.Releaser;
    default:
      return TaskStep.All;
  }
};
