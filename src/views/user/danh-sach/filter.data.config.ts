import { IUserInfo } from "../../user/danh-sach/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IUserInfo>[] => [
        {
            field: "username",
            label: "Tên ",
        },
        {
            field: "email",
            label: "email",
        },
        {
            field: "role",
            label: "role",
        },
    ];
