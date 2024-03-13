import { Select } from "antd";

import { Recordable } from "/@/utils";

function SelectStatus(attrs:Recordable) {
    const getAtrr = () => {
        return {
            ...attrs
        }
    }
    return (
        <Select
            {...getAtrr()}
            options= {[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
        />
    )
}
export default SelectStatus
