import { t } from 'i18next'
import { Form, Button, Space } from "antd";

import { MODE } from "/@/utils";
import { BasicPageWrapper } from "/@/components/Page";
import { ButtonClose } from "/@/views/components/form-actions";
import { useStudentApi } from "/@/apis";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function CreateStudent() {

    const { goDetailStatus, goListStatus } = useRedirect()
    const [form] = Form.useForm();
    const {studentApi}= useStudentApi()

    const handleAdd = async () => {
        try {
            await form.validateFields()
            const dataForm = await form.getFieldsValue()
            console.log("🚀 ~ file: create.tsx:22 ~ handleAdd ~ dataForm:", dataForm)
            // const linkImages = dataForm.images.map((i: { url: string; response: string; })=> i.url ? i.url : i.response)
            const res = await studentApi.create(dataForm) as {data:{_id: string}}
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
                    domain: t('Hoc sinh')
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

export default CreateStudent