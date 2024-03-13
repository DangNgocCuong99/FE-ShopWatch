import { Input } from "antd";

import { Recordable } from "/@/utils";

function InputStatus(attrs:Recordable) {
    const getAtrr = () => {
        return {
            ...attrs
        }
    }
    return (
        <Input
        {...getAtrr()}
        />
    )
}
export default InputStatus