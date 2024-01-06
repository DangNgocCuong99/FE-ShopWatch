import { CartApi } from "./cartApi/index";

export class XuLyCartApi {
  cartApi: CartApi;
  constructor() {
    this.cartApi = new CartApi();
  }
}
