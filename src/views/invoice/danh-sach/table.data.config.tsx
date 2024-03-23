import { Image, Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { ITrademark } from "/@/apis/trademarkApi/types";
import { IInvoice } from "/@/apis/invoiceApi/types";
import { statusPayment } from "/@/utils";

const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + 'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<IInvoice>[] = [
  {
    title: "id",
    dataIndex: "_id",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Tong tien",
    dataIndex: "totalAmount",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "dia chi",
    dataIndex: "address",
    key: "title",
  },
  {
    title: "trang thai thanh toan",
    dataIndex: "statusPayment",
    key: "title",
    render: (value: any) => { //lay ra gia tri cua mot truong trong ban ghi
      switch (value) {
        case statusPayment.cash:
          return  "Thanh toan khi nhan hang (cod)"
          case statusPayment.unpaid:
            return  "chua thanh toan"
            case statusPayment.paid:
          return  "da thanh toan"
      
        default:
          break;
      }
    }
  }
];
