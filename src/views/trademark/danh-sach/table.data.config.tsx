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
    title: "Name",
    dataIndex: "name",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  // {
  //   title: "Email",
  //   dataIndex: "email",
  //   key: "title",
  //   render: (value: any) => {
  //     return tranformToolTip(value)
  //   }
  // },
  {
    title: "Img",
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
  // {
  //   title: "role",
  //   dataIndex: "role",
  //   key: "title",
  //   render: (value: any) => {
  //     return tranformToolTip(value)
  //   }
  // }
];
