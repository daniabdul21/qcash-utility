import { ReactNode } from "react";
import { Row } from "react-table";
export interface BeneficiaryFavouriteProps {
    show?: boolean;
    data?: any;
    isValidate?: boolean;
    children?: ReactNode;
    onSelected?: (row?: Row) => void;
    onCheckedUseFavourite?: (checked: boolean) => void;
    onCheckedSaveFavourite?: (checked?: boolean, value?: string) => void;
}
export type TypeEditField = {
    accountAlias: string;
    accountName: string;
};
