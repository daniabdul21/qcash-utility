import { CompanyType } from "./company";
import { TaskType } from "./task";
export type MappingDigitalBGType = {
    task: TaskType;
    company: CompanyType;
    data: {
        thirdPartyID: string;
        thirdPartyName: string;
        companyID: string;
        companyName: string;
        beneficiaryName: string;
        beneficiaryId: string;
    }[];
};
