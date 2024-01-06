import { ActionItem } from "./tableAction";
import { ColumnProps } from "antd/es/table";

declare type Recordable<T = any> = Record<string, T>;

export interface BasicColumn extends ColumnProps<Recordable> {
    customTitle?: JSX.Element;
    ifShow?: boolean | ((column: BasicColumn) => boolean);
    actions?: (record: Recordable) => ActionItem[];
}

export interface BasicColumnModel<T> extends BasicColumn {
    dataIndex?: Extract<keyof T, string>;
}