import { useParams } from "react-router-dom";
import { t } from 'i18next'
import { useEffect } from "react";
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import {  useTrademarkApi } from "/@/apis";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function EditTrademark() {

    const { goDetailStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { trademarkApi } = useTrademarkApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        const res = await trademarkApi.getById(id)
            form.setFieldsValue(res.data)
            form.setFieldValue('images',  res.data.images.map((i,key)=>({
                uid: key,
                name: i!.substring(i!.lastIndexOf("/") + 25),
                status: 'done',
                url: i,
                thumbUrl: i,
              }))) 
    }

    const [form] = Form.useForm();
    const handleSave = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            const linkImages = dataForm.images.map((i: { url: string; response: string; })=> i.url ? i.url : i.response)
            const tranformData = {...dataForm, images: linkImages}
            await trademarkApi.updateById(id, tranformData)
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
                domain: "thương hiệu"
            })} body={<StatusForm form={form} mode={MODE.EDIT} />} footer={
                <Space>
                    <Button type="primary" onClick={handleSave}>{t("common.save_text")}</Button>
                    <ButtonClose onCancel={handleGoDetail} onConfirm={handleSave} showConfirm />
                </Space>
            } />

        </div>
    )
}

export default EditTrademark