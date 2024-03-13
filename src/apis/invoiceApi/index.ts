import { BaseApi, apiCommon } from "../baseApi";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";
import { IInvoice } from "./types";

export class InvoiceApi extends BaseApi<IInvoice> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.invoice}`);
  }

  async createInvoice<T, R>(body: R): Promise<T> {
    return apiCommon<T>({ url:  this.configUrl, method: HTTP_METHOD.POST,data:body});
  }

}
