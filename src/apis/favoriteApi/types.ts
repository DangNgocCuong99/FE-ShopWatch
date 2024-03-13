import { BaseInfo } from "../types";

export interface IProduct {
  _id: string;
  images: string[];
  name: string;
  originalPrice: number;
  discountedPrice: number;
  trademark: {
    name: string;
    images: string[];
    _id: string;
  };
  soHieu: string;
  xuatXu: string;
  gioiTinh: string;
  kinh: string;
  may: string;
  baoHanhQuocTe: string;
  baoHanhTrongNuoc: string;
  duongKinhMatSo: string;
  beDayMatSo: string;
  nieng: string;
  dayDeo: string;
  mauMatSo: string;
  chongNuoc: string;
}
