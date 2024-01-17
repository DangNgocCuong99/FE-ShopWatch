import { Button } from "antd";
import { useRedirect } from "../../staff2.0/useRedirect";
import { dataConfig } from "./filter.data.config";
import { useStaffApi2 } from "/@/apis";
import { IStaff2 } from "/@/apis/staffApi2.0/types";
import { useReload } from "/@/components/Table/src/hook/useTable";
import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { t } from "i18next";
import { columns } from "./table.data.config";
import { BasicTable } from "/@/components/Table";

interface IValue{
    birthday:number
}

function ManageStaff2(){
    const {goDetailStatus,goUpdateStatus,goCreateStatus}=useRedirect();
    const {reload,handleReload}=useReload()
    const {staffApi2}=useStaffApi2()

    const handleDelete = async (id:string)=>{
        try {
            await staffApi2.deleteById(id);
            handleReload()
        } catch (error) {
            
        }
    }
    const actionColum={
        actions:(record:IStaff2)=>{
            const [builder] = useTableActionsBuilder();
            const action = builder
                .addView({
                    onClick: ()=> goDetailStatus(record._id)
                })
                .addEdit({onClick:()=>goUpdateStatus(record._id)})
                .addRemove(()=>handleDelete(record._id))
                .build();
            return action;
        }
    }
    const handleAdd = async ()=>{
        goCreateStatus();
    }
    const tinhTuoi=(timestamp:number) =>{       
        var dob = new Date(timestamp);
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        if (
          today.getMonth() < dob.getMonth() ||
          (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
        ) {
          age--;
        }
        return age;
      }
    const handeApi =async(params:any)=>{
        const {data}=await staffApi2.getAll(params) as unknown as {data:{items:[IValue],total:number}}
        return{
            items: data.items.map((value)=>{
                return { ...value,
                    age:tinhTuoi(value.birthday)}
            }),
            total:data.total,
        }
    }

    return (
        <div>
            <BasicTable
                dataForm={dataConfig()}
                columns={columns}
                actionColum={actionColum}
                api={handeApi}
                reload={reload}
                toolbar={
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <h2>Danh sách nhân viên</h2>
                        <Button onClick={()=>handleAdd()}>
                            {t("common.add_text")}
                        </Button>
                        
                    </div>
                }
            />
                

            
        </div>
    );

}
export default ManageStaff2;