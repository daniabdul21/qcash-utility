import { AxiosResponse } from "axios";
import { FileDownloadRequestBody, FileUploadResponse } from "@/types";
declare const FileListenerService: () => {
    putObjectWithAuth: (payload: any) => Promise<any>;
    putObjectWithAuthV2: (payload: any) => Promise<any>;
    putObjectV2: (payload: any) => Promise<any>;
    putObject: (payload: any) => Promise<any>;
    fileDownload: (payload: FileDownloadRequestBody) => Promise<AxiosResponse<any, any>>;
    fileUpload: (payload: any) => Promise<FileUploadResponse>;
};
export default FileListenerService;
