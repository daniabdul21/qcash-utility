import { CompanyType } from "./company";
import { TaskType } from "./task";
export type BGMappingType = {
    task: TaskType;
    company: CompanyType;
    data: {
        thirdPartyID: string;
        thirdPartyName: string;
        companyID: string;
        companyName: string;
        isAllowAllBeneficiary: boolean;
    }[];
};
