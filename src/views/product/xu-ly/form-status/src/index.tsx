import { FormInstance, InputNumber } from "antd";

import { BasicForm } from "/@/components/Form";
import { MODE } from "/@/utils";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";

import { dataConfig } from "./data.config";
import SelectTrademark from "./selectTrademark";
import InputImg from "./inputImg";

function StatusForm({ mode, form }: { mode: MODE, form: FormInstance }) {
    useComponentRegister("SelectTrademark", <SelectTrademark />)
    useComponentRegister("InputImg", <InputImg />)
    return (
        <div>
            <BasicForm dataForm={dataConfig()} formSchema={form} mode={mode} />
        </div>
    )
}

export default StatusForm