import { BaseApi, apiCommon } from "../baseApi";
import { IStudent } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";

export class StudentApi extends BaseApi<IStudent> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.student}`);
  }
  async getDataSelectStudent(): Promise<BaseInfo<IStudent[]>> {
    return apiCommon({ url:  `${this.configUrl}?isFetchAll=true`, method: HTTP_METHOD.GET});
  }
}
