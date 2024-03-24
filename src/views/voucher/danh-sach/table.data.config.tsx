import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IVoucher } from "/@/apis/voucherApi/types";


export const columns: BasicColumnModel<IVoucher>[] = [
  {
    title: "Mã giảm giá",
    dataIndex: "code",
    key: "title",
  },

  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "title",
  },
  
];
