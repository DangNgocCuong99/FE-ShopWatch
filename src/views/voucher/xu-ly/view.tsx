import { t } from 'i18next'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Space } from "antd";

import { ButtonClose } from "/@/views/components/form-actions";
import { BasicPageWrapper } from "/@/components/Page";
import { useVoucherApi } from "/@/apis";
import { MODE } from "/@/utils";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function ViewVoucher() {

    const [form] = Form.useForm();
    const { goUpdateStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { voucherApi } = useVoucherApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        try {
            const res = await voucherApi.getById(id)
            form.setFieldsValue(res.data)
        } catch (error) {

        }
    }

    return (
        <div>
            <BasicPageWrapper body={
                <StatusForm form={form} mode={MODE.VIEW} />
            }
                header={t('common.detail_text', {
                    domain: "mã giảm giá"
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

export default ViewVoucher