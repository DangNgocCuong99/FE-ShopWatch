import { BaseApi, apiCommon } from "../baseApi";
import { IUser } from "./types";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";

export class UserApi extends BaseApi<IUser> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.user}`);
  }

  async changeActiveUser(id:string): Promise<{
    status:boolean,
    message:string ,
    data:string,
  }> {
    return apiCommon({ url:  `${this.configUrl}/${id}`, method: HTTP_METHOD.PATCH});
  }
  async getCurrentUser(): Promise<{
    status:boolean,
    message:string ,
    data:IUser
  }> {
    return apiCommon({ url:  `${this.configUrl}/current`, method: HTTP_METHOD.GET});
  }

  async updateUser( dataUpdate:any ): Promise<{
    status:boolean,
    message:string ,
    data:IUser
  }> {
    console.log(dataUpdate);
    
    return apiCommon({ url:  `${this.configUrl}/current`, method: HTTP_METHOD.PUT,data:dataUpdate});
  }


}
