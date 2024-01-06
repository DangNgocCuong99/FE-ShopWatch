import { t } from 'i18next'
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import { useProductApi } from "/@/apis";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function CreateProduct() {

    const { goDetailStatus, goListStatus } = useRedirect()
    const [form] = Form.useForm();
    const { productApi } = useProductApi()

    const handleAdd = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            const linkImages = dataForm.images.map((i: { url: string; response: string; })=> i.url ? i.url : i.response)
            const res = await productApi.create({...dataForm,images:linkImages}) as {data:{_id: string}}
            console.log(res);
            
            // const res = await statusApi.create<{ id: string, nameStatus: string }, { nameStatus: string }>(dataForm)
            goDetailStatus(res.data._id)
        } catch (error) {
        }
    }

    return (
        <div>
            <BasicPageWrapper body={
                <StatusForm form={form} mode={MODE.ADD} />
            }
                header={t('common.add_text', {
                    domain: t('domain.status.main')
                })}
                footer={
                    <Space>
                        <Button type="primary" onClick={handleAdd}>{t("common.save_text")}</Button>
                        <ButtonClose onCancel={goListStatus} onConfirm={handleAdd} showConfirm />
                    </Space>
                } />
        </div>
    )
}

export default CreateProduct