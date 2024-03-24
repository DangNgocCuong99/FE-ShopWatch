import { IVoucher } from "/@/apis/voucherApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IVoucher>[] => [
    {
        field: 'code',
        label: 'Mã',
    },
    {
        field: 'moTa',
        label: 'Mô tả',
    },

]