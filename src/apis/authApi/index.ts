import { BaseApi, apiCommon } from "../baseApi";
import { IAuth } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";

// const api = BaseApi(Domain.ITEM)

// export function statusApi() {
//     function getAll<T, R = any>(data: T, queries?: IBaseSearchListQueryParams & R): Promise<BasePagination<any>> {
//         return api.getAll<T, R, any>(data, queries)
//     }
//     return {
//         getAll,
//     }
// };

export class AuthApi extends BaseApi<IAuth> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.auth}`);
  }
  async login(body:{email:string,password:string}): Promise<{
    status:boolean,
    message:string ,
    data:string,
  }> {
    return apiCommon({ url:  `${this.configUrl}/login`, method: HTTP_METHOD.POST,data:body});
  }

  async register(body:{email:string,password:string}): Promise<{
    status:boolean,
    message:string ,
    data:string,
  }> {
    return apiCommon({ url:  `${this.configUrl}/register`, method: HTTP_METHOD.POST,data:body});
  }

}
