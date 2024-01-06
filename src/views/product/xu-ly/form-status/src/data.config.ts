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
    {
        field: 'soHieu',
        label: 'soHieu',
    },
    {
        field: 'xuatXu',
        label: 'xuatXu',
    },
    {
        field: 'gioiTinh',
        label: 'gioiTinh',
    },
    {
        field: 'kinh',
        label: 'kinh',
    },
    {
        field: 'may',
        label: 'may',
    },
    {
        field: 'baoHanhQuocTe',
        label: 'baoHanhQuocTe',
    },
    {
        field: 'baoHanhTrongNuoc',
        label: 'baoHanhTrongNuoc',
    },
    {
        field: 'duongKinhMatSo',
        label: 'duongKinhMatSo',
    },
    {
        field: 'beDayMatSo',
        label: 'beDayMatSo',
    },
    {
        field: 'nieng',
        label: 'nieng',
    },
    {
        field: 'dayDeo',
        label: 'dayDeo',
    },
    {
        field: 'mauMatSo',
        label: 'mauMatSo',
    },
    {
        field: 'chongNuoc',
        label: 'chongNuoc',
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