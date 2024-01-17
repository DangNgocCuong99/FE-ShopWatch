
import { IStaff } from "/@/apis/staffApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";
import { DatePicker } from "antd";
export const dataConfig = (mode?: MODE): FormSchemaModel<IStaff>[] => [
    {
        field: 'name',
        label: 'ten nhan vien',
    },
    {
        field: 'date_of_birth',
        label: 'Ngay sinh',
        
    },
    {
        field: 'age',
        label: 'Tuoi',
    },
    {
        field: 'country',
        label: 'Que quan',
    },
    {
        field: 'id_card',
        label: 'Can cuoc cong dan',
    },
    {
        field: 'phone_number',
        label: 'So dien thoai',
    },

]