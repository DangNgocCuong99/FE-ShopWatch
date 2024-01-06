import { useParams } from "react-router-dom";
import { t } from 'i18next'
import { useEffect } from "react";
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import { useProductApi } from "/@/apis";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function EditProduct() {

    const { goDetailStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { productApi } = useProductApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        const dataForm = await productApi.getById(id)
        form.setFieldsValue(dataForm.data)
        form.setFieldValue('images',  dataForm.data.images.map((i,key)=>({
            uid: key,
            name: i!.substring(i!.lastIndexOf("/") + 25),
            status: 'done',
            url: i,
            thumbUrl: i,
          }))) 
          form.setFieldValue('trademark', dataForm.data.trademark._id)

    }

    const [form] = Form.useForm();
    const handleSave = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            await productApi.updateById(id, dataForm)
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

export default EditProduct