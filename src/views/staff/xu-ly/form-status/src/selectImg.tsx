import { DatePicker, DatePickerProps, Input } from "antd"
import { Recordable } from "/@/utils"
import { useRef } from "react";
import dayjs from "dayjs";

const PickTime=(attrs: Recordable)=>{

  const getAtrr = () => {
    return {
        ...attrs
    }
}

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date?.unix());
  
    console.log(date, dateString);
  };
  return (
    <Input
    {...getAtrr()}
    />
  )
}
export default PickTime