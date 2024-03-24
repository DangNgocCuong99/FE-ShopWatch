import { VoucherApi } from "./voucherApi";

export class XuLyVoucherApi {
  voucherApi: VoucherApi;
  constructor() {
    this.voucherApi = new VoucherApi();
  }
}
