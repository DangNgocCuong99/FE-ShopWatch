import { BaseApi, apiCommon } from "../baseApi";
import { ICart } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";

export class PaymentApi extends BaseApi<any> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.payment}`);
  }

}
