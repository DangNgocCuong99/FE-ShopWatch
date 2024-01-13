import { IStudent } from "/@/apis/trademarkApi copy/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
// name :string, age:number , class: string
export const dataConfig = (): FormSchemaModel<IStudent>[] => [
        {
            field: "name",
            label: "Ten hoc sinh",
        },
    ];
