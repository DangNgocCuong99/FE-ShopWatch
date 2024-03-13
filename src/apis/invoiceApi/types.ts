import { IProduct } from "../productApi/types";
import { statusInvoice, statusPayment } from "/@/utils";

export interface IInvoice {
  _id: string;
  items: {
    productId: string;
    quantity: number;
    productDetails: IProduct;
  }[];
  totalAmount: number;
  statusPayment: statusPayment;
  statusInvoice: statusInvoice;
  transportFee: number;
  discount: number;
  address: string;
  phone: string;
  createdAt: number;
}
