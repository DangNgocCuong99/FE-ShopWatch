import { useParams } from "react-router-dom"
import { useRedirect } from "../useRedirect"
import { useStaffApi2 } from "/@/apis"
import { useEffect } from "react"
import { BasicPageWrapper } from "/@/components/Page"
import { t } from "i18next"
import { StatusForm } from "./form-status"
import { Button, Form, Space } from "antd"
import { ButtonClose } from "../../components/form-actions"
import { MODE } from "/@/utils"

function EditStaff2(){
    const { goDetailStatus, goListStatus } = useRedirectdirect()
    const { id } = useParams() as { id: string }
    const { staffApi2 } = useStaffApi2()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        const res = await staffApi2.getById(id)
            form.setFieldsValue(res.data)
    }

    const [form]=Form.useForm();
    const handleSave = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            await staffApi2.updateById(id, dataForm)
            handleGoDetail()
        } catch (error) {

        }
    }

    const handleGoDetail = () => {
        goDetailStatus(id);
    };

    return (
        <div>
            <BasicPageWrapper header={t('common.edit_text', {
                domain: t('domain.status.main')
            })} body={<StatusForm form={form} mode={MODE.EDIT} />} footer={
                <Space>
                    <Button type="primary" onClick={handleSave}>{t("common.save_text")}</Button>
                    <ButtonClose onCancel={handleGoDetail} onConfirm={handleSave} showConfirm />
                </Space>
            } />

        </div>
    )
}
export default EditStaff2