/* eslint-disable no-duplicate-case */
import { TaskStatus } from "./types";

export const renderLabelStatus = (status?: TaskStatus | string) => {
  if (!status || status === "NullStatus") {
    return <div></div>;
  }
  switch (status) {
    case TaskStatus.Returned:
    case "Retur":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-info-80 bg-info-99 py-1 text-center text-info-40">
          {status}
        </div>
      );
    case TaskStatus.DeleteRequest:
      return (
        <div className="mx-auto h-6 w-32 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          Request for Delete
        </div>
      );
    case "RequestInactive":
      return (
        <div className="mx-auto h-6 w-32 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          Request Inactive
        </div>
      );
    case TaskStatus.Deleted:
    case TaskStatus.Rejected:
    case "Rejected":
    case "Inactive":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          {status}
        </div>
      );
    case TaskStatus.Draft:
    case TaskStatus.Pending:
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          {status}
        </div>
      );
    case TaskStatus.Approved:
    case "Success":
    case "Active":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40">
          {status}
        </div>
      );
    case "On Signer":
    case "On Checker":
    case "On Releaser":
    case "Waiting":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          {status}
        </div>
      );
    case "Pending Maker Confirmation":
      return (
        <div className="mx-auto h-6 w-40 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          {status}
        </div>
      );
    case "On Cancelled":
    case "Cancelled":
    case "Failed":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          Cancelled
        </div>
      );
    case "scheduled":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          Scheduled
        </div>
      );
  }
  return (
    <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
      Unknown
    </div>
  );
};

export const renderLabelSync = (status?: string) => {
  if (!status) {
    return (
      <div className="mx-auto w-32 rounded-full border border-danger-60 bg-danger-90 py-1 text-center text-danger-40">
        Not Synced
      </div>
    );
  }
  switch (status) {
    case "Sync":
      return (
        <div className="mx-auto w-24 rounded-full border border-success-60 bg-success-90 py-1 text-center text-success-40">
          Synced
        </div>
      );
  }
  return (
    <div className="mx-auto w-32 rounded-full border border-danger-60 bg-danger-90 py-1 text-center text-danger-40">
      Not Synced
    </div>
  );
};

export const renderLabelTransactionStatus = (status?: string) => {
  switch (status) {
    case "Pending":
    case "Process":
    case "Processing":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          {status}
        </div>
      );
    case "Approved":
    case "Success":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40">
          {status}
        </div>
      );
    case "Timeout":
    case "Error":
    case "Failed":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          Failed
        </div>
      );
    case "Suspend":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          Suspend
        </div>
      );
    case "Rejected":
    case "Reject":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          Rejected
        </div>
      );
    case "Delayed":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          Waiting
        </div>
      );
    case "Sent to Swift":
      return (
        <div className="mx-auto w-[100px] rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40">
          {status}
        </div>
      );
    case "Approved":
    case "Sent to RTGS":
    case "Sent to BI":
      return (
        <div className="mx-auto w-[100px] rounded-full border border-success-90 bg-success-99 py-1 text-center text-success-40">
          {status}
        </div>
      );
    case "Cancelled":
    case "Canceled":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-danger-80 bg-danger-99 py-1 text-center text-danger-40">
          {status}
        </div>
      );
    case "Scheduled":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
          {status}
        </div>
      );
    case "Retur":
      return (
        <div className="mx-auto h-6 w-24 rounded-full border border-info-99 bg-info-90 py-1 text-center text-info-20">
          {status}
        </div>
      );
  }
  return (
    <div className="mx-auto h-6 w-24 rounded-full border border-warning-80 bg-warning-99 py-1 text-center text-warning-40">
      Waiting
    </div>
  );
};
