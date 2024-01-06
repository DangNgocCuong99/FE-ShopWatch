import { ProductApi } from "./productApi/index";

export class XuLyProductApi {
  productApi: ProductApi;
  constructor() {
    this.productApi = new ProductApi();
  }
}
