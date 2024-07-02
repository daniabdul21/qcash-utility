import { ApiResponse } from "./app";
import { OmitProperties } from "./helper";
export interface FileDownloadRequestBody {
    objectName: string;
    contentDisposition?: string;
}
export interface FileUploadData {
    fileID: string;
}
export type FileUploadResponse = OmitProperties<ApiResponse & FileUploadData, "pagination" | "data" | "error">;
