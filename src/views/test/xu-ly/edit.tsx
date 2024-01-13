import { useParams } from "react-router-dom";
import { t } from 'i18next'
import { useEffect } from "react";
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import {  useStudentApi } from "/@/apis";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";
import { StudentApi } from "/@/apis/trademarkApi copy";

function EditStudent() {

    const { goDetailStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { studentApi } = useStudentApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        const res = await studentApi.getById(id)
            form.setFieldsValue(res.data)
            
              
    }

    const [form] = Form.useForm();
    const handleSave = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()

            await studentApi.updateById(id, dataForm)
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

export default EditStudent