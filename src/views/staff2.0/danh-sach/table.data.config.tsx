import { Tooltip } from "antd"
import { BasicColumnModel } from "/@/components/Table/src/types/table"
import { IStaff2 } from "/@/apis/staffApi2.0/types"


const tranformToolTip = (value:any)=>{
  return (
    <Tooltip title={value+'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<IStaff2>[]=[
    {
        title: "Tên",
        dataIndex: "name",
        key: "title",
        render: (value: any) => {
          return tranformToolTip(value)
        }
      },
      {
        title: "Tuổi",
        dataIndex: "age",  
      },
      {
        title: "Quê quán",
        dataIndex: "country",
      },
      {
        title: "Ngày sinh",
        dataIndex: "birthday",
      },
      {
        title: "Căn cước công dân",
        dataIndex: "id_card",
      },
      {
        title: "Số điện thoại",
        dataIndex: "phone_number",
      },
];