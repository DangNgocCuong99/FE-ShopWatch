import { BaseApi, apiCommon, apiNotRefresh } from "../baseApi";
import { IProduct } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";

export class ProductApi extends BaseApi<IProduct> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.product}`);
  }

  async getDetailByShop(id:string): Promise<{
    status:boolean,
    message:string ,
    data:IProduct,
  }> {
    return apiNotRefresh({ url:  `${this.configUrl}/shop/${id}`, method: HTTP_METHOD.GET});
  }

  async getDetailByManage(id:string): Promise<{
    status:boolean,
    message:string ,
    data:IProduct,
  }> {
    return apiCommon({ url:  `${this.configUrl}/manage/${id}`, method: HTTP_METHOD.GET});
  }

}
