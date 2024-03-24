import { BaseApi, apiCommon } from "../baseApi";
import { ICart } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";

export class CartApi extends BaseApi<ICart> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.cart}`);
  }
  async removeOneProduct(id:string): Promise<BaseInfo<ICart>> {
    return apiCommon({ url:  `${this.configUrl}/delete-one/${id}`, method: HTTP_METHOD.DELETE});
  }

  async removeAllProduct(id:string): Promise<BaseInfo<ICart>> {
    return apiCommon({ url:  `${this.configUrl}/delete-all/${id}`, method: HTTP_METHOD.DELETE});
  }

}
