import { TaskStatus } from "./types";
declare const statusToIntMaker: (status: TaskStatus) => number;
declare const statusToIntSigner: (status: TaskStatus) => number;
export { statusToIntMaker, statusToIntSigner };
