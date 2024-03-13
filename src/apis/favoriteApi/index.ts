import { BaseApi, apiCommon, apiNotRefresh } from "../baseApi";
import { IProduct } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";

export class FavoriteApi extends BaseApi<IProduct> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.favorite}`);
  }

}
