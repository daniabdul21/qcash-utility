import { ReactElement } from "react";
import { IconType } from "react-icons";
export interface IFormBase extends IFormWrapperProps {
    label?: string | ReactElement;
    desc?: string;
    variant?: "normal" | "success" | "danger";
}
export interface IFormWrapperProps {
    wrapperProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}
export interface ISideMenu {
    text: string;
    path: string;
    icon?: IconType;
    children?: ISideMenu[];
}
export interface IBreadcrumbItem {
    text: string;
    path: string;
}
export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
