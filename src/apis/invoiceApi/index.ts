import { BaseApi, apiCommon } from "../baseApi";
import { DOMAIN_DEVELOPMENT, HTTP_METHOD } from "../apiConst";
import { EndPoint } from "../apiConst";
import { BaseInfo } from "../types";
import { IInvoice } from "./types";

export class InvoiceApi extends BaseApi<IInvoice> {
  constructor() {
    super(`${DOMAIN_DEVELOPMENT}/${EndPoint.invoice}`);
  }

  async createInvoice<T, R>(body: R): Promise<T> {
    return apiCommon<T>({ url:  this.configUrl, method: HTTP_METHOD.POST,data:body});
  }

  async getDashboard(): Promise<{
    status:boolean,
    message:string ,
    data:{
      amount:{
        totalAmount:number,
        growth:number
      },
      view:{
        totalView:number,
        growth:number
      },
      invoice:{
        totalInvoice:number,
        growth:number
      },
      user:{
        newUser:number,
        growth:number
      }
    },
  }> {
    return apiCommon({ url:  `${this.configUrl}/dashboard`, method: HTTP_METHOD.GET});
  }

  async getDashboardChart(): Promise<{
    status:boolean,
    message:string ,
    data:{
      amount:{
        totalAmount:number,
        growth:number
      },
      chart:{
        dataCurrent:number[],
        dataPrevious:number[]
      },
      viewYear:number,
      totalQuantity:number,
      totalUser:number
    },
  }> {
    return apiCommon({ url: `${this.configUrl}/chart`, method: HTTP_METHOD.GET});
  }

}
