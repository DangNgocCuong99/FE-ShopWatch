import { IProductInfo } from "../../../danh-sach/types";
import { IProduct } from "/@/apis/productApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IProduct>[] => [
    {
        field: 'name',
        label: 'ten san pham',
    },
    {
        field: 'originalPrice',
        label: 'gia goc',
    },
    {
        field: 'discountedPrice',
        label: 'gia ban',
    },
    {
        field: 'trademark',
        label: 'hang dongho',
        component:"SelectTrademark"
    },
    {
        field: 'images',
        label: 'hinh anh ',
        component:"InputImg",
    },
    // {
    //     field: 'select',
    //     label: 'compoent custom',
    //     component:'SelectStatus',
    // },
    // {
    //     field: 'inputNumber',
    //     label: 'inputNumber',
    //     component: 'InputNumber'
    // },
    // {
    //     field: 'status',
    //     label: 'select Status',
    //     component: "Select",
    //     componentProps:{
    //         options: [
    //             { value: 'jack', label: 'Jack' },
    //             { value: 'lucy', label: 'Lucy' },
    //             { value: 'Yiminghe', label: 'yiminghe' },
    //             { value: 'disabled', label: 'Disabled', disabled: true },
    //         ],
    //     },
    // },
]