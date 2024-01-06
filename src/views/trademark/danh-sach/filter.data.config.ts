import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<ITrademark>[] => [
        {
            field: "name",
            label: "Tên san pham",
        },
        {
            field:"moTa",
            label:"mo ta"
        },

    ];
