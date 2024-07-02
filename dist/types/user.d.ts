import { TaskData } from "./task";
export interface User extends UserParams {
    userID: string;
    userTypeName: string;
    companyID: string;
    companyName: string;
    createdByID: string;
    updatedByID: string;
    deletedByID: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export type UserWithRole = {
    user: User;
} & {
    roles: Array<RoleParams>;
};
export type UserRoleWithTask = {
    user: UserWithRole;
} & {
    task: TaskData;
};
export interface UserBricamsDetail {
    idUser: string;
    username: string;
    idCompany: string;
    phoneNumber: string;
    email: string;
    fullName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    idToken: string;
    isCompanyNeedToken: boolean;
    createdDate: Date;
}
export interface UserParams {
    username: string;
    idType: string;
    idNumber: string;
    userTypeID: string;
    isBlocked: boolean;
}
export interface RoleParams {
    roleID: string;
    roleName: string;
}
export interface UserTaskParams {
    user: UserParams;
    roles: Array<RoleParams>;
}
export interface UserTaskResponse {
    data: Array<UserRoleWithTask>;
    pagination: {
        limit: number;
        page: number;
        totalRows: string;
        totalPages: number;
    };
}
export interface UserPayload {
    isDraft: boolean;
    data: {
        user: {
            userID?: number;
            username: string;
            idType?: string;
            idNumber: string;
            userTypeID?: string;
            userTypeName: string;
            authority: string;
            isBlocked: boolean;
            companyID?: string;
            companyName: string;
            firstName: string;
            lastName: string;
            motherOriginName: string;
            address: string;
            zipCode: string;
            emailAddress: string;
            phoneNumber: string;
            mobileNumber: string;
            taxId: string;
            tokenFcm: string;
            gender: string;
            status: string;
            region: string;
        };
        roles: {
            roleID: number;
            roleName: string;
        }[];
    };
}
export interface UserFormProps {
    isDraft: boolean;
    company: {
        value: string;
        label: string;
    };
    userID: string;
    typeID: any | undefined;
    numberID: string;
    userType: any | undefined;
    isBlocked: string;
    firstName: string;
    lastName: string;
    motherName: string;
    address: string;
    zipcode: string;
    email: string;
    phoneNumber: string;
    mobileNumber: string;
    taxId: string;
    tokenId: string;
    userLoginCode: string;
    gender: string;
    status: string;
    region: {
        value: string;
        label: string;
        currencyCode: string;
        phoneCode: string;
    };
    roles: {
        selectedRoles: string[];
        selectedRoleOptions: string[];
        filterAvailable: string;
        filterSelected: string;
        filteredSelectedRoleOptions: string[];
        allSelectedRolesChecked: boolean;
        availableRoles: string[];
        availableRoleOptions: string[];
        filteredAvailableRoleOptions: string[];
        allAvailableRolesChecked: boolean;
    };
    [key: string]: any;
}
export type UserTypeDetails = {
    userTypeName: string;
    authority: string;
    userTypeID: string;
};
export type UserTypeMapping = {
    [userTypeID: string]: UserTypeDetails;
};
