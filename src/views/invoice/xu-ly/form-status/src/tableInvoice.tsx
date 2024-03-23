import { Table } from "antd";
import { Recordable } from "/@/utils";
import { useEffect, useState } from "react";
import { IProduct } from "/@/apis/productApi/types";
import { ColumnsType } from "antd/es/table";

const TableInvoice = (attrs: Recordable) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    if (attrs.value) {
      setData(
        attrs?.value?.map((val: { quantity: any; productDetails: IProduct }) => ({
          ...val?.productDetails,
          quantitySales: val.quantity,
          totalAmount: val.quantity * val.productDetails.discountedPrice
        }))
      );
    }
  }, [attrs]);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns: ColumnsType<Recordable>= [
    {
      title: "Ảnh",
      dataIndex: "images",
      key: "images",
      render:(val)=>{
        return (
          <img src={val} width={100}/>
        )
      }
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượng",
      dataIndex: "quantitySales",
      key: "quantitySales",
    },
    {
      title: "Đơn giá",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
  ];
  return <Table dataSource={data} columns={columns} />;
};
export default TableInvoice;
