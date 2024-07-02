import { TaskStatus } from "./types";

const statusToIntMaker = (status: TaskStatus): number => {
  const statusToIntMap = {
    [TaskStatus.Draft]: 1,
    [TaskStatus.Returned]: 2,
    [TaskStatus.Pending]: 3,
    [TaskStatus.DeleteRequest]: 4,
    [TaskStatus.Approved]: 5,
    [TaskStatus.Rejected]: 6,
  };
  // @ts-ignore
  return statusToIntMap[status] ?? 0;
};

const statusToIntSigner = (status: TaskStatus): number => {
  const statusToIntMap = {
    [TaskStatus.Pending]: 1,
    [TaskStatus.DeleteRequest]: 2,
    [TaskStatus.Approved]: 3,
    [TaskStatus.Rejected]: 4,
    [TaskStatus.Draft]: 5,
    [TaskStatus.Returned]: 6,
  };
  // @ts-ignore
  return statusToIntMap[status] ?? 0;
};

export { statusToIntMaker, statusToIntSigner };
