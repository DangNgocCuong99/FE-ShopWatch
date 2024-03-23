import { IProductInfo } from "../../../danh-sach/types";
import { IProduct } from "/@/apis/productApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IProduct>[] => [
    {
        field: 'name',
        label: 'Tên sản phẩm',
    },
    {
        field: 'originalPrice',
        label: 'Gía gốc',
    },
    {
        field: 'discountedPrice',
        label: 'Giá bán',
    },
    {
        field: 'trademark',
        label: 'Hãng đồng hồ',
        component:"SelectTrademark"
    },
    {
        field: 'images',
        label: 'Hình ảnh ',
        component:"InputImg",
    },
    {
        field: 'soHieu',
        label: 'Số hiệu',
    },
    {
        field: 'xuatXu',
        label: 'Xuất xứ',
    },
    {
        field: 'gioiTinh',
        label: 'Giới tính',
    },
    {
        field: 'kinh',
        label: 'Kính',
    },
    {
        field: 'may',
        label: 'Máy',
    },
    {
        field: 'baoHanhQuocTe',
        label: 'Bảo hành quốc tế',
    },
    {
        field: 'baoHanhTrongNuoc',
        label: 'Bảo hành trong nước',
    },
    {
        field: 'duongKinhMatSo',
        label: 'Đường kính mắt số',
    },
    {
        field: 'beDayMatSo',
        label: 'Bề dày mặt số',
    },
    {
        field: 'nieng',
        label: 'Niềng',
    },
    {
        field: 'dayDeo',
        label: 'Dây đeo',
    },
    {
        field: 'mauMatSo',
        label: 'Mẫu mắt số',
    },
    {
        field: 'chongNuoc',
        label: 'Chống nước',
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