import { IUserInfo } from "../../../danh-sach/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode: MODE): FormSchemaModel<IUserInfo>[] => [
    {
        field: 'username',
        label: 'username',
        disabled:mode !== MODE.ADD
    },
    {
        field: 'email',
        label: 'email',
        disabled:mode !== MODE.ADD
    },
    {
        field: 'role',
        label: 'role',
        component: "Select",
        componentProps:{
                    options: [
                        { value: 'admin', label: 'admin' },
                        { value: 'user', label: 'user' },
                    ],
                },
    },
]