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
                { value: statusPayment.cash, label: "thanh toan khi nhan hang (cod)" },
                { value: statusPayment.paid , label: 'da thanh toan (bank)' },
                { value: statusPayment.unpaid, label: 'chua thanh toan (bank)' },
            ]
        }
    },
    {
        field: 'transportFee',
        label: 'phi ship',
        disabled: true
    },
    {
        field: 'discount',
        label: 'giam gia',
        disabled: true
    },
    {
        field: 'totalAmount',
        label: 'tong tien hang',
        disabled:true
    },
    {
        field: 'items',
        label: 'San pham mua',
        component:'TableInvoice',
        colProps:{
            lg:24,md:24,sm:24,xl:24,xs:24,xxl:24
        }
    },


]