import { t } from 'i18next'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Space } from "antd";

import { ButtonClose } from "/@/views/components/form-actions";
import { BasicPageWrapper } from "/@/components/Page";
import {  useUserApi } from "/@/apis";
import { MODE } from "/@/utils";

import { UserForm } from './form-user'
import { useRedirect } from "../useRedirect";

function UserView() {

    const [form] = Form.useForm();
    const { goUpdateUser, goListUser } = useRedirect()
    const { id } = useParams() as { id: string }
    const { userApi } = useUserApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        try {
            const dataForm = await userApi.getById(id)
            console.log("🚀 ~ file: view.tsx:28 ~ handleFetchDetail ~ dataForm:", dataForm)
            form.setFieldsValue(dataForm.data)
        } catch (error) {

        }
    }

    return (
        <div>
            <BasicPageWrapper body={
                <UserForm form={form} mode={MODE.VIEW} />
            }
                header={t('common.detail_text', {
                    domain: t('domain.user.main')
                })}
                footer={
                    <Space>
                        <Button type="primary" onClick={() => goUpdateUser(id)}>{t('common.edit')}</Button>
                        <ButtonClose onCancel={goListUser} />
                    </Space>
                } />
        </div>
    )
}

export default UserView