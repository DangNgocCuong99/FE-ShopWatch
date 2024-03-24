import { IProduct } from "/@/apis/productApi/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IProduct>[] => [
    {
        field: 'name',
        label: 'Tên sản phẩm',
    },
    {
        field: 'quantity',
        label: 'Số lượng',
    },
    {
        field: 'originalPrice',
        label: 'Giá gốc',
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
        component : 'Select',
        componentProps : {
            options:[
                { value: 'nam', label: "Nam" },
                { value: 'nu', label: 'Nữ' },
            ]
        }
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
   
]