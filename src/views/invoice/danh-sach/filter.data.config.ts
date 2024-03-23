import { IInvoice } from "/@/apis/invoiceApi/types";
import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IInvoice>[] => [
        {
            field: "_id",
            label: "ID",
        },
        {
            field:"userId",
            label:"trang thai"
        },

    ];
