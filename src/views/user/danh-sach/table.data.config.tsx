import { Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IUserInfo } from "./types";

const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + 'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<IUserInfo>[] = [
  {
    title: "Name",
    dataIndex: "username",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Img",
    dataIndex: "img",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "role",
    dataIndex: "role",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  }
];
