import { HeaderGroup, Row } from "react-table";
export interface ModalProps {
    open: boolean;
    title: string;
    headerGroups: HeaderGroup<{}>[];
    rows: Row<{}>[];
}
