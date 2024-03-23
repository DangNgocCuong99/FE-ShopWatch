import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<ITrademark>[] => [
    {
        field: 'name',
        label: 'Tên thương hiệu',
    },
    {
        field: 'images',
        label: 'Hình ảnh',
        component:"SelectImg",
    },
    {
        field: 'moTa',
        label: 'Mô tả',
    },

]