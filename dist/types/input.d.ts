import { ReactElement } from "react";
export type OptionType = {
    label: string;
    value: string;
    [key: string]: string;
};
export type SelectOption = {
    label: string;
    value: string;
    icon: ReactElement;
};
