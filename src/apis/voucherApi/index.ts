import { BaseApi } from "../baseApi";
import { IVoucher } from "./types";
import { DOMAIN_DEVELOPMENT } from "../apiConst";
import { EndPoint } from "../apiConst";

export class VoucherApi extends BaseApi<IVoucher> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.voucher}`);
  }
}
