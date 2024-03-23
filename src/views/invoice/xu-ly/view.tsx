import { t } from 'i18next'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Space } from "antd";

import { ButtonClose } from "/@/views/components/form-actions";
import { BasicPageWrapper } from "/@/components/Page";
import { useInvoiceApi, useStatusApi,useTrademarkApi } from "/@/apis";
import { MODE } from "/@/utils";

import { StatusForm } from './form-status'
import { useRedirect } from "../useRedirect";

function ViewInvoice() {

    const [form] = Form.useForm();
    const { goUpdateInvoice, goListInvoice } = useRedirect()
    const { id } = useParams() as { id: string }
    const { invoiceApi } = useInvoiceApi()

    useEffect(() => {
        handleFetchDetail()
    }, [])

    const handleFetchDetail = async () => {
        try {
            console.log('sss');
            
            const res = await invoiceApi.getById(id)
            form.setFieldsValue(res.data)
            // form.setFieldValue('images',  res.data.images.map((i,key)=>({
            //     uid: key,
            //     name: i!.substring(i!.lastIndexOf("/") + 25),
            //     status: 'done',
            //     url: i,
            //     thumbUrl: i,
            //   }))) 
        } catch (error) {

        }
    }

    return (
        <div>
            <BasicPageWrapper body={
                <StatusForm form={form} mode={MODE.VIEW} />
            }
                header={t('common.detail_text', {
                    domain: "hóa đơn"
                })}
                footer={
                    <Space>
                        <Button type="primary" onClick={() => goUpdateInvoice(id)}>{t('common.edit')}</Button>
                        <ButtonClose onCancel={goListInvoice} />
                    </Space>
                } />
        </div>
    )
}

export default ViewInvoice