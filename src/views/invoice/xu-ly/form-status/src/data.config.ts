import { IInvoice } from "/@/apis/invoiceApi/types";
import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE, statusInvoice, statusPayment } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IInvoice>[] => [
    {
        field: 'userName',
        label: 'Tên người dùng',
    },
    {
        field: 'address',
        label: 'Địa chỉ',
    },
    {
        field: 'phone',
        label: 'Số điện thoại',
    },
    {
        field: 'statusInvoice',
        label: 'Trạng thái đơn hàng',
        component:'SelectStatusInvoice'
    },
    {
        field: 'statusPayment',
        label: 'Trạng thái thanh toán',
        component:'Select',
        componentProps:{
            options:[
                { value: statusPayment.cash, label: "Thanh toán khi nhận hàng (cod)" },
                { value: statusPayment.paid , label: 'Đã thanh toán (bank)' },
                { value: statusPayment.unpaid, label: 'Chưa thanh toán (bank)' },
            ]
        }
    },
    {
        field: 'transportFee',
        label: 'Phí ship',
        disabled: true
    },
    {
        field: 'discount',
        label: 'Giảm giá',
        disabled: true
    },
    {
        field: 'totalAmount',
        label: 'Tổng tiền hàng',
        disabled:true
    },
    {
        field: 'items',
        label: 'Sản phẩm mua',
        component:'TableInvoice',
        colProps:{
            lg:24,md:24,sm:24,xl:24,xs:24,xxl:24
        }
    },


]