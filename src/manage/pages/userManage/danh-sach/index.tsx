/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../../../assets/images/logo-shopify.svg";
import ava2 from "../../../assets/images/logo-atlassian.svg";
import ava3 from "../../../assets/images/logo-slack.svg";
import ava5 from "../../../assets/images/logo-jira.svg";
import ava6 from "../../../assets/images/logo-invision.svg";
import face from "../../../assets/images/face-1.jpg";
import face2 from "../../../assets/images/face-2.jpg";
import face3 from "../../../assets/images/face-3.jpg";
import face4 from "../../../assets/images/face-4.jpg";
import face5 from "../../../assets/images/face-5.jpeg";
import face6 from "../../../assets/images/face-6.jpeg";
import pencil from "../../../assets/images/pencil.svg";
import { useRedirect } from "../useRedirect";
import { useUserApi } from "/@/apis";
import { useReload } from "/@/components/Table/src/hook/useTable";
import { IUserInfo } from "./types";
import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { BasicTable } from "/@/components/Table";
import { dataConfig } from "./filter.data.config";
import { columns } from "./table.data.config";

function Tables2() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const { goDetailUser, goUpdateUser, goCreateUser } = useRedirect();
  const { userApi } = useUserApi();
  const { reload, handleReload } = useReload()

  const handleDelete = async (id: string) => {
      try {
          await userApi.deleteById(id);
          handleReload()
      } catch (error) { }
  };

  const actionColum = {
      actions: (record: IUserInfo) => {
          const [builder] = useTableActionsBuilder();
          const action = builder
              .addView({
                  onClick: () => goDetailUser(record._id)
              })
              .addEdit({ onClick: () => goUpdateUser(record._id) })
              .addRemove(() => handleDelete(record._id))
              .build();
          return action;
      },
  };

  const handleAdd = async () => {
      goCreateUser();
  };

  const handleApi = async (params: {
      nameUser: string;
      page: number;
      pageSize: number;
  }) => {
      const res = await userApi.getAll(params);
      return {
          items: res.data.items,
          total: res.data.total,
      };
  };

  return (
    <>
              <BasicTable
                dataForm={dataConfig()}
                columns={columns}
                actionColum={actionColum}
                api={handleApi}
                reload={reload}
                toolbar={
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <h2>Danh Sach User</h2>
                    </div>
                }
            />
    </>
  );
}

export default Tables2;
