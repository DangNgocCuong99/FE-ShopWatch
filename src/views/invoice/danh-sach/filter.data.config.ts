import { IInvoice } from "/@/apis/invoiceApi/types";
import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { statusInvoice } from "/@/utils";

export const dataConfig = (): FormSchemaModel<IInvoice>[] => [
        {
            field:"statusInvoice",
            label:"Trạng thái",
            component:"Select",
            componentProps:{
                options: [
                    { value: statusInvoice.cancelled, label: "huy don" },
                    { value: statusInvoice.completed , label: 'hoan thanh' },
                    { value: statusInvoice.processing, label: 'dang xu ly' },
                    { value: statusInvoice.todo, label: 'cho xac nhan'},
                ]
            }
        },

    ];
