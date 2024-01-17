import { Button, Form, Space } from "antd";
import { useRedirect } from "../useRedirect";
import { useStaffApi2 } from "/@/apis";
import { BasicPageWrapper } from "/@/components/Page";
import { StatusForm } from "./form-status";
import { t } from "i18next";
import { MODE } from "/@/utils";
import { ButtonClose } from "../../components/form-actions";



function CreateStaff2(){
    const {goDetailStatus, goListStatus}=useRedirect()
    const [form] = Form.useForm();
    const {staffApi2}=useStaffApi2()
    const handleAdd =async () => {
        try {
            await form.validateFields()
            const dataForm=await form.getFieldsValue()
            console.log("🚀 ~ file: create.tsx:22 ~ handleAdd ~ dataForm:",dataForm )
            // const res = await staffApi2.create({...dataForm}) as {data:{_id:string}}
            // goDetailStatus(res.data._id)
           
        console.log({...dataForm,birthday:dataForm.birthday.unix()*1000})
        } catch (error) {
            
        }
        
    }
    return(
        <div>
            <BasicPageWrapper body={
                <StatusForm form={form} mode ={MODE.ADD}/>
            }
                header={t('common.add_text',{
                    domain: t('Nhân viên')
                })}
                footer={
                    <Space>
                        <Button type="primary" onClick={handleAdd}>{t('common.save_text')}</Button>
                        <ButtonClose onCancel={goListStatus} onConfirm={handleAdd} showConfirm/>
                    </Space>
                }
            />
        </div>
    )
}
export default CreateStaff2