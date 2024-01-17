import { DOMAIN_DEVELOPMENT, EndPoint, HTTP_METHOD } from "../apiConst";
import { BaseApi, apiCommon } from "../baseApi";
import { BaseInfo } from "../types";
import { IStaff2 } from "./types";


export class StaffApi2 extends BaseApi<IStaff2>{
    constructor(){
        super(`${DOMAIN_DEVELOPMENT}/${EndPoint.staff2}`);
    }
    async getDataSeclectStaff2():Promise<BaseInfo<IStaff2[]>>{
        return apiCommon({url: `${this.configUrl}/filrerAge`,method: HTTP_METHOD.GET});
        
    }
}