import { Button, Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IUserInfo } from "./types";

const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + "asd"}>
      <div>{value}</div>
    </Tooltip>
  );
};

export const columns: BasicColumnModel<IUserInfo>[] = [
  {
    title: "Name",
    dataIndex: "username",
    key: "username",
    render: (value: any) => {
      return tranformToolTip(value);
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (value: any) => {
      return tranformToolTip(value);
    },
  },
  // {
  //   title: "Img",
  //   dataIndex: "img",
  //   key: "title",
  //   render: (value: any) => {
  //     return tranformToolTip(value)
  //   }
  // },
  {
    title: "role",
    dataIndex: "role",
    key: "role",
    render: (value: any) => {
      return tranformToolTip(value);
    },
  },
  {
    title: "Status OTP",
    dataIndex: "status",
    key: "status",
    render: (value: any) => {
      return (
        <Button
          type={value === "active" ? "primary" : undefined}
          className={value === "active" ? "tag-primary" : "tag-badge"}
        >
          {value}
        </Button>
      );
    },
  },
  {
    title: "Is Active",
    dataIndex: "isActive",
    key: "isActive"
  },
];
