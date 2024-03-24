import { t } from 'i18next'
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import { useVoucherApi } from "/@/apis";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function CreateVoucher() {

    const { goDetailStatus, goListStatus } = useRedirect()
    const [form] = Form.useForm();
    const {voucherApi}= useVoucherApi()

    const handleAdd = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            const res = await voucherApi.create(dataForm) as {data:{_id: string}}
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
                    domain: "mã giảm giá"
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

export default CreateVoucher