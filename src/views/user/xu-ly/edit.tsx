import { useParams } from "react-router-dom";
import { t } from 'i18next'
import { useEffect } from "react";
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import { useUserApi } from "/@/apis";

import { UserForm } from './form-user'
import { useRedirect } from "../useRedirect";

function UserEdit() {

    const { goDetailUser, goListUser } = useRedirect()
    const { id } = useParams() as { id: string }
    const { userApi } = useUserApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        const dataForm = await userApi.getById(id)
        form.setFieldsValue(dataForm.data)
    }

    const [form] = Form.useForm();
    const handleSave = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            await userApi.updateById(id, dataForm)
            handleGoDetail()
        } catch (error) {

        }
    }

    const handleGoDetail = () => {
        goDetailUser(id);
    };

    return (
        <div>
            <BasicPageWrapper header={t('common.edit_text', {
                domain: t('domain.User.main')
            })} body={<UserForm form={form} mode={MODE.EDIT} />} footer={
                <Space>
                    <Button type="primary" onClick={handleSave}>{t("common.save_text")}</Button>
                    <ButtonClose onCancel={handleGoDetail} onConfirm={handleSave} showConfirm />
                </Space>
            } />

        </div>
    )
}

export default UserEdit