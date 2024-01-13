import { IStatus } from "/@/apis/statusApi/types";
import { IStudent } from "/@/apis/trademarkApi copy/types";
import { ITrademark } from "/@/apis/trademarkApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IStudent>[] => [
    {
        field: 'name',
        label: 'Ten hoc sinh',
    },
    {
        field: 'age',
        label: 'Tuoi'
    },
    {
        field: 'class',
        label: 'Lop '
    },
]