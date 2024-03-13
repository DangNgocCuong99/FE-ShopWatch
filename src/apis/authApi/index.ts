import { BaseApi, apiCommon, apiNotRefresh } from "../baseApi";
import { IAuth } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";

export class AuthApi extends BaseApi<IAuth> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.auth}`);
  }
  async login(body:{email:string,password:string}): Promise<{
    status:boolean,
    message:string ,
    data:string,
  }> {
    return apiNotRefresh({ url:  `${this.configUrl}/login`, method: HTTP_METHOD.POST,data:body});
  }

  async register(body:any): Promise<{
    status:boolean,
    message:string ,
    data:string,
  }> {
    return apiNotRefresh({ url:  `${this.configUrl}/register`, method: HTTP_METHOD.POST,data:body});
  }

  async otp(body:any): Promise<{
    status:boolean,
    message:string ,
    data:string,
  }> {
    return apiNotRefresh({ url:  `${this.configUrl}/otp`, method: HTTP_METHOD.POST,data:body});
  }

}
