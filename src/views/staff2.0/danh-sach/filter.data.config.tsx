import { IStaff2 } from "/@/apis/staffApi2.0/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IStaff2>[] => [
    {
        field: "name",
        label: "Tên nhân viên"
    },
    {
        field: "age",
        label: "Tuổi"
    },
    {
        field: "country",
        label: "Quê quán"
    },
];