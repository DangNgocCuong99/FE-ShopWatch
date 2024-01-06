import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<ITrademark>[] => [
    {
        field: 'name',
        label: 'ten thuong hieu',
    },
    {
        field: 'images',
        label: 'role',
        component:"SelectImg",
    },
    {
        field: 'moTa',
        label: 'mo ta',
    },

]