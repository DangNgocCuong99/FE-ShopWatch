import { t } from 'i18next'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Space } from "antd";

import { ButtonClose } from "/@/views/components/form-actions";
import { BasicPageWrapper } from "/@/components/Page";
import { useStaffApi2 } from "/@/apis";
import { MODE } from "/@/utils";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function ViewStaff2() {

    const [form] = Form.useForm();
    const { goUpdateStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { staffApi2 } = useStaffApi2()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        try {
            const res = await staffApi2.getDataSeclectStaff2()
            form.setFieldsValue({
                ...res.data
            })
            
            form.setFieldValue("age" ,new Date().getFullYear() - res.data.dob)
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

export default ViewStaff2