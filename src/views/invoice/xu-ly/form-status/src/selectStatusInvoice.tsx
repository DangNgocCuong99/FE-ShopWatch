import { Select } from "antd";

import { Recordable } from "/@/utils";
import { statusInvoice } from "/@/utils";

function SelectStatusInvoice(attrs:Recordable) {
    const getAtrr = () => {
        return {
            ...attrs
        }
    }
    return (
        <Select
            {...getAtrr()}
            options= {[
                { value: statusInvoice.cancelled, label: "huy don" },
                { value: statusInvoice.completed , label: 'hoan thanh' },
                { value: statusInvoice.processing, label: 'dang xu ly' },
                { value: statusInvoice.todo, label: 'cho xac nhan'},
            ]}
        />
    )
}
export default SelectStatusInvoice
