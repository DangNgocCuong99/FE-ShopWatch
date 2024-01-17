import { Image, Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";
import { IStaff } from "/@/apis/staffApi/types";


const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + 'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<IStaff>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Tuoi",
    dataIndex: "age",  
  },
  {
    title: "Que quan",
    dataIndex: "country",
  },
  {
    title: "Ngay sinh",
    dataIndex: "date_of_birth",
  },
  {
    title: "Can cuoc",
    dataIndex: "id_card",
  },
  {
    title: "So dien thoai",
    dataIndex: "phone_number",
  },

];
