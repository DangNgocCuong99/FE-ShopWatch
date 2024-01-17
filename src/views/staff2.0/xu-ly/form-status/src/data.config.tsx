
import { IStaff2 } from "/@/apis/staffApi2.0/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";
export const dataConfig = (mode?: MODE): FormSchemaModel<IStaff2>[] => [
    {
        field: 'name',
        label: 'Tên nhân viên',
    },
    {
        field: 'birthday',
        label: 'Ngày sinh',
        component: 'DatePicker'
        
    },
    {
        field: 'age',
        label: 'Tuổi',
        disabled: mode !== 'VIEW'
    },
    {
        field: 'country',
        label: 'Quê quán',
    },
    {
        field: 'id_card',
        label: 'Căn cước công dân',
    },
    {
        field: 'phone_number',
        label: 'Số điện thoại',
    },

]