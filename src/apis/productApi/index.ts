import { BaseApi } from "../baseApi";
import { IProduct } from "./types";
import { DOMAIN_DEVELOPMENT } from "../apiConst";
import { EndPoint } from "../apiConst";

export class ProductApi extends BaseApi<IProduct> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.product}`);
  }

}
