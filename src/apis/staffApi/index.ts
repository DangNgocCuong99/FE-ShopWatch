import { BaseApi, apiCommon } from "../baseApi";
import { IStaff } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";

export class StaffApi extends BaseApi<IStaff> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.staff}`);
  }
  async getDataSelectStaff(): Promise<BaseInfo<IStaff[]>> {
    return apiCommon({ url:  `${this.configUrl}/filterAge`, method: HTTP_METHOD.GET});
  }
}
