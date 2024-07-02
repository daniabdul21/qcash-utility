import { TaskStep } from "../types";
import toLower from "lodash/toLower";

// TODO: merge with logic status from task, and replace all render description from task status!
// FIXME: get currentStep from WORKFLOW!!!
export const getDescription = (currentStep: TaskStep) => {
  let description = "-";
  if (toLower(currentStep) === toLower(TaskStep.Checker)) description = "Need checking";
  if (toLower(currentStep) === toLower(TaskStep.Maker)) description = "Can edit";
  if (toLower(currentStep) === toLower(TaskStep.Releaser)) description = "Need releasing";
  if (toLower(currentStep) === toLower(TaskStep.Signer)) description = "Need signing";

  return description;
};
