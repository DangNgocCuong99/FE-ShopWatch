import { Input, DatePicker, Select } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { ComponentType } from "./types";

const componentMap = new Map<ComponentType, JSX.Element>();

componentMap.set("Input", <Input />);
componentMap.set("Select", <Select />);
componentMap.set("InputPassword", <Input.Password />);
componentMap.set("DatePicker", <DatePicker />);
componentMap.set("ant-design:eye-outlined", <EyeOutlined />);
componentMap.set("ant-design:edit-outlined", <EditOutlined />);
componentMap.set("ant-design:delete-outlined", <DeleteOutlined />);


export function add(compName: ComponentType, component: JSX.Element) {
    componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
    componentMap.delete(compName);
}

export function has(compName: ComponentType) {
    return componentMap.has(compName);
}

export { componentMap };
