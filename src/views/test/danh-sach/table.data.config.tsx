import { Image, Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { ITrademark } from "/@/apis/trademarkApi/types";
import { IStudent } from "/@/apis/trademarkApi copy/types";

const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + 'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<IStudent>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
    {
      title:"Age",
      dataIndex:"age"
    },
    {
      title:"Class",
      dataIndex:"class"
    }
];
