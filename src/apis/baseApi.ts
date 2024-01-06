import Axios from "axios";
import { AxiosRequestConfig } from "axios";

import { BaseInfo, BasePagination, IBaseSearchListQueryParams } from "./types";
import { ContentTypeEnum, HTTP_METHOD } from "./apiConst";

const token = localStorage.getItem("token");

export async function apiCommon<T>(params: AxiosRequestConfig) {
  return Axios<T>({
    headers: { Authorization: `Bearer ${token}`, "Content-type": ContentTypeEnum.JSON ,},
    ...params,
  })
    .then((res) => res.data)
    .catch((res) => res.error);
}
export abstract class BaseApi<A> {
  constructor(protected configUrl: string) {}

  async getAll<R, P>(
    queries = {} as IBaseSearchListQueryParams & R
  ): Promise<BasePagination<P>> {
    return apiCommon<BasePagination<P>>({ url: this.configUrl, method: HTTP_METHOD.GET ,params:queries});
  }

  async getById<T = BaseInfo<A>>(id: String): Promise<T> {
    const url = `${this.configUrl}/${id}`;
    return apiCommon<T>({ url: url, method: HTTP_METHOD.GET });
  }

  async updateById<T, R>(id: String, body: R): Promise<T> {
    const url = `${this.configUrl}/${id}`;
    return apiCommon<T>({ url: url, method: HTTP_METHOD.PUT,data:body});
  }

  async create<T, R>(body: R): Promise<T> {
    return apiCommon<T>({ url:  this.configUrl, method: HTTP_METHOD.POST,data:body});
  }

  async deleteById<T>(id: String): Promise<T> {
    const url = `${this.configUrl}/${id}`;
    return apiCommon<T>({ url: url, method: HTTP_METHOD.DELETE});
  }
}
