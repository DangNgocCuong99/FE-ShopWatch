import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { BasicTable } from "/@/components/Table";

import { dataConfig } from "./filter.data.config";
import { columns } from "./table.data.config";
import { useRedirect } from "../useRedirect";
import { IUserInfo } from "./types";
import { useUserApi } from "/@/apis";
import { useReload } from "/@/components/Table/src/hook/useTable";

function User() {
  const { goDetailUser, goUpdateUser, goCreateUser } = useRedirect();
  const { userApi } = useUserApi();
  const { reload, handleReload } = useReload();

  const handleChangeActiveUser = async (id: string) => {
    try {
      await userApi.changeActiveUser(id);
      handleReload();
    } catch (error) {}
  };

  const actionColum = {
    actions: (record: IUserInfo) => {
      const [builder] = useTableActionsBuilder();
      const action = builder
        .addView({
          onClick: () => goDetailUser(record._id),
        })
        .addEdit({ onClick: () => goUpdateUser(record._id) })
        .addRemove(
          () => handleChangeActiveUser(record._id),
          !record.isActive
            ? {
                icon: "ant-design:rollback-outlined",
                color: "danger",
                tooltip: "Khoi phuc",
                popConfirm: {
                  title: "Xac Nhan",
                  description: "ban co chac muon khoi phuc",
                  placement: "bottomRight"
                },
              }
            : {}
        )
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
    <div>
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
    </div>
  );
}

export default User;
