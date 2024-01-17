
import { IStaff } from "/@/apis/staffApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IStaff>[] => [
        {
            field: "name",
            label: "Tên nhan vien",
        },
    ];
