import { BaseApi } from "../baseApi";
import { IUser } from "./types";
import { DOMAIN_DEVELOPMENT } from "../apiConst";
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

export class UserApi extends BaseApi<IUser> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.user}`);
  }

}
