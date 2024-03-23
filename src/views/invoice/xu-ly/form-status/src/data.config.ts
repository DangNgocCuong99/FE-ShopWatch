import { IInvoice } from "/@/apis/invoiceApi/types";
import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE, statusInvoice, statusPayment } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IInvoice>[] => [
    {
        field: 'userName',
        label: 'ten nguoi dung',
    },
    {
        field: 'address',
        label: 'dia chi',
    },
    {
        field: 'phone',
        label: 'so dien thoai',
    },
    {
        field: 'statusInvoice',
        label: 'trang thai don hang',
        component:'SelectStatusInvoice'
    },
    {
        field: 'statusPayment',
        label: 'trang thai thanh toan',
        component:'Select',
        componentProps:{
            options:[
                { value: statusPayment.cash, label: "thanh toan khi nhan hang" },
                { value: statusPayment.paid , label: 'da thanh toan' },
                { value: statusPayment.unpaid, label: 'chua thanh toan' },
            ]
        }
    },
    {
        field: 'statusInvoice',
        label: 'trang thai don hang',
        component:'SelectStatusInvoice'
    },
    {
        field: 'items',
        label: 'trang thai don hang',
        component:'TableInvoice'
    },

]