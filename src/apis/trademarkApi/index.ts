import { BaseApi, apiCommon } from "../baseApi";
import { ITrademark } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";

export class TrademarkApi extends BaseApi<ITrademark> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.trademark}`);
  }
  async getDataSelectTrademark(): Promise<BaseInfo<ITrademark[]>> {
    return apiCommon({ url:  `${this.configUrl}?isFetchAll=true`, method: HTTP_METHOD.GET});
  }
}
