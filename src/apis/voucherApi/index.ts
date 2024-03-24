import { BaseApi, apiCommon } from "../baseApi";
import { IVoucher } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";

export class VoucherApi extends BaseApi<IVoucher> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.voucher}`);
  }

  async checkVoucher(code:string): Promise<{
    status:boolean,
    message:string ,
    data:IVoucher,
  }> {
    return apiCommon({ url: `${this.configUrl}/check/${code}`, method: HTTP_METHOD.GET});
  }
}
