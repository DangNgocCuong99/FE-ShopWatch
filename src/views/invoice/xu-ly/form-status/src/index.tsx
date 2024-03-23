import { FormInstance, InputNumber } from "antd";

import { BasicForm } from "/@/components/Form";
import { MODE } from "/@/utils";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";

import { dataConfig } from "./data.config";
import SelectStatusInvoice from "./selectStatusInvoice";
import TableInvoice from "./tableInvoice";

function InvoiceForm({ mode, form }: { mode: MODE, form: FormInstance }) {
    useComponentRegister("SelectStatusInvoice", <SelectStatusInvoice />)
    useComponentRegister("TableInvoice", <TableInvoice />)
    return (
        <div>
            <BasicForm dataForm={dataConfig()} formSchema={form} mode={mode} />
        </div>
    )
}

export default InvoiceForm