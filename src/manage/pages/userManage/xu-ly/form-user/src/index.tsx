import { FormInstance, InputNumber } from "antd";

import { BasicForm } from "/@/components/Form";
import { MODE } from "/@/utils";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";

import { dataConfig } from "./data.config";
import SelectStatus from "./select";
import InputStatus from "./input";

function UserForm({ mode, form }: { mode: MODE, form: FormInstance }) {
    useComponentRegister("SelectStatus", <SelectStatus />)
    useComponentRegister("InputNumber", <InputNumber />)
    useComponentRegister("InputStatus", <InputStatus />)
    return (
        <div>
            <BasicForm dataForm={dataConfig(mode)} formSchema={form} mode={mode} />
        </div>
    )
}

export default UserForm