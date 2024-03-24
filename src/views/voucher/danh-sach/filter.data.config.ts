import { IVoucher } from "/@/apis/voucherApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IVoucher>[] => [
        {
            field: "code",
            label: "Tên thương hiệu",
        },

    ];
