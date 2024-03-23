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
