import { Button } from "antd";

import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { BasicTable } from "/@/components/Table";
import { BasePagination } from "/@/apis/types";

import { dataConfig } from "./filter.data.config";
import { columns } from "./table.data.config";
import { useRedirect } from "../useRedirect";
import { t } from "i18next";
import { useTrademarkApi} from "/@/apis";
import { useReload } from "/@/components/Table/src/hook/useTable";
import { ITrademark } from "/@/apis/trademarkApi/types";


function ManageTrademark() {
    const { goDetailStatus, goUpdateStatus, goCreateStatus } = useRedirect();
    const { reload, handleReload } = useReload()
    const {trademarkApi} = useTrademarkApi()

    const handleDelete = async (id: string) => {
        try {
            await trademarkApi.deleteById(id);
            handleReload()
        } catch (error) { }
    };

    const actionColum = {
        actions: (record: ITrademark) => {
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
        const {data} = await trademarkApi.getAll(params);
        return {
            items: data.items,
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
                        <h2>Danh Sách Thương hiệu</h2>
                        <Button onClick={() => handleAdd()}>
                            {t("common.add_text")}
                        </Button>
                    </div>
                }
            />
        </div>
    );
}

export default ManageTrademark;
