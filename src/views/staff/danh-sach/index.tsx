import { Button } from "antd";

import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { BasicTable } from "/@/components/Table";
import { BasePagination } from "/@/apis/types";

import { dataConfig } from "./filter.data.config";
import { columns } from "./table.data.config";
import { useRedirect } from "../useRedirect";
import { t } from "i18next";
import { useStaffApi, useTrademarkApi} from "/@/apis";
import { useReload } from "/@/components/Table/src/hook/useTable";
import { IStaff } from "/@/apis/staffApi/types";



function ManageStaff() {
    const { goDetailStatus, goUpdateStatus, goCreateStatus } = useRedirect();
    const { reload, handleReload } = useReload()
    const {staffApi} = useStaffApi()

    const handleDelete = async (id: string) => {
        try {
            await staffApi.deleteById(id);
            handleReload()
        } catch (error) { }
    };

    const actionColum = {
        actions: (record: IStaff) => {
            const [builder] = useTableActionsBuilder();
            const action = builder
                .addView({
                    onClick: () => goDetailStatus(record._id)
                })
                .addEdit({ onClick: () => goUpdateStatus(record._id) })
                .addRemove(() => handleDelete(record._id))
                .build();
            return action;
        },
    };

    const handleAdd = async () => {
        goCreateStatus();
    };

    const handleApi = async (params:any)=> {
        const {data} = await staffApi.getAll(params);
        
        return {
            items: data.items.map((value)=>{
                return { ...value ,
                age: new Date().getFullYear() - value.date_of_birth}
            }),
            total:data.total,
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
                        <h2>Danh Sach Nhan Vien</h2>
                        <Button onClick={() => handleAdd()}>
                            {t("common.add_text")}
                        </Button>
                    </div>
                }
            />
        </div>
    );
}

export default ManageStaff;
