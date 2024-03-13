import { t } from 'i18next'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Space } from "antd";

import { ButtonClose } from "/@/views/components/form-actions";
import { BasicPageWrapper } from "/@/components/Page";
import { useStatusApi,useTrademarkApi } from "/@/apis";
import { MODE } from "/@/utils";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function ViewTrademark() {

    const [form] = Form.useForm();
    const { goUpdateStatus, goListStatus } = useRedirect()
    const { id } = useParams() as { id: string }
    const { trademarkApi } = useTrademarkApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        try {
            const res = await trademarkApi.getById(id)
            form.setFieldsValue(res.data)
            form.setFieldValue('images',  res.data.images.map((i,key)=>({
                uid: key,
                name: i!.substring(i!.lastIndexOf("/") + 25),
                status: 'done',
                url: i,
                thumbUrl: i,
              }))) 
        } catch (error) {

        }
    }

    return (
        <div>
            <BasicPageWrapper body={
                <StatusForm form={form} mode={MODE.VIEW} />
            }
                header={t('common.detail_text', {
                    domain: "thương hiệu"
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

export default ViewTrademark