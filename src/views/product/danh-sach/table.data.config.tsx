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
    title: "hinh anh",
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
    title: "hang dong ho",
    dataIndex: "trademark",
    key: "title",
    render: (value: IProductInfo["trademark"]) => {
      return value?.name
    }
  }
];
