import { t } from 'i18next'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Space } from "antd";

import { ButtonClose } from "/@/views/components/form-actions";
import { BasicPageWrapper } from "/@/components/Page";
import { useProductApi } from "/@/apis";
import { MODE } from "/@/utils";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function ViewProduct() {

    const [form] = Form.useForm();
    const { goUpdateStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { productApi } = useProductApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        try {
            const dataForm = await productApi.getDetailByManage(id)
            form.setFieldsValue(dataForm.data)
            form.setFieldValue('images',  dataForm.data.images.map((i,key)=>({
                uid: key,
                name: i!.substring(i!.lastIndexOf("/") + 25),
                status: 'done',
                url: i,
                thumbUrl: i,
              }))) 
            form.setFieldValue('trademark', dataForm.data.trademark._id)
        } catch (error) {

        }
    }

    return (
        <div>
            <BasicPageWrapper body={
                <StatusForm form={form} mode={MODE.VIEW} />
            }
                header={t('common.detail_text', {
                    domain: t('domain.status.main')
                })}
                footer={
                    <Space>
                        <Button type="primary" onClick={() => goUpdateStatus(id)}>{t('common.edit')}</Button>
                        <ButtonClose onCancel={goListStatus} />
                    </Space>
                } />
        </div>
    )
}

export default ViewProduct