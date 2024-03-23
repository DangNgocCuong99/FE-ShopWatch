import { Image, Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { ITrademark } from "/@/apis/trademarkApi/types";

const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + 'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<ITrademark>[] = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },

  {
    title: "Ảnh",
    dataIndex: "images",
    key: "title",
    render: (value: any[]) => {
      return value.map((i:string,key:number)=>(
        <Image
        key={key}
      width={200}
      src={i} />
        ))
    }
  },
  
];
