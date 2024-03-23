import { Image, Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IProductInfo } from "./types";


export const columns: BasicColumnModel<IProductInfo>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "title",

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
    title: "Hình ảnh",
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
  {
    title: "Hãng đồng hồ",
    dataIndex: "trademark",
    key: "title",
    render: (value: IProductInfo["trademark"]) => {
      return value?.name
    }
  }
];
