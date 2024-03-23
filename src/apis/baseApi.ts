import axios from "axios";
import Axios from "axios";
import { AxiosRequestConfig } from "axios";

import { BaseInfo, BasePagination, IBaseSearchListQueryParams } from "./types";
import {
  ContentTypeEnum,
  DOMAIN_DEVELOPMENT,
  EndPoint,
  HTTP_METHOD,
} from "./apiConst";
import { jwtDecode } from "jwt-decode";
import { message } from "antd";

const token = () => localStorage.getItem("token");

const axiosClient = axios.create({
  headers: {
  Authorization: `Bearer ${token()}`,
  "Content-type": ContentTypeEnum.JSON,
},
withCredentials: true,}); //cho phép be thao tắc với cookie của fe
//@overwrite lại axios
axiosClient.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("token");
  console.log("abc");
  
  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);

    if (decodedToken.exp && decodedToken.exp * 1000 < new Date().getTime()) {
      const resAccessToken = await refreshToken();
      if (resAccessToken){
        localStorage.setItem("token", resAccessToken);
      } else{
        message.info("vui long dang nhap lai")
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        window.location.href = "/"
      }
    }
    config.headers.Authorization = "Bearer " + accessToken;
  }

  return config;
});

const refreshToken = async () => {
  try {
    const response = await axios.post(
      `${DOMAIN_DEVELOPMENT}/${EndPoint.auth}/refreshToken`,
      undefined,
      {
        withCredentials: true,
      }
    );
    return response.data.accessToken;
  } catch (error) {
    console.error("Lỗi khi làm mới JWT:", error);
    throw error; // Ném lỗi để xử lý ở các thành phần khác
  }
};

export async function apiCommon<T>(params: AxiosRequestConfig) {
  return axiosClient<T>({
    ...params,
  })
    .then((res) => res.data)
    .catch((res) => res.error);
}

export async function apiNotRefresh<T>(params: AxiosRequestConfig) {
  return Axios<T>({
    ...params,
    headers: {
      "Content-type": ContentTypeEnum.JSON,
    },
    withCredentials: true
  })
    .then((res) => res.data)
    .catch((res) => res.error);
}
export abstract class BaseApi<A> {
  constructor(protected configUrl: string) {}

  async getAll<R, P>(
    queries = {} as IBaseSearchListQueryParams & R
  ): Promise<BasePagination<P>> {
    return apiCommon<BasePagination<P>>({
      url: this.configUrl,
      method: HTTP_METHOD.GET,
      params: queries,
    });
  }

  async getById<T = BaseInfo<A>>(id: String): Promise<T> {
    const url = `${this.configUrl}/${id}`;
    return apiCommon<T>({ url: url, method: HTTP_METHOD.GET });
  }

  async updateById<T, R>(id: String, body: R): Promise<T> {
    const url = `${this.configUrl}/${id}`;
    return apiCommon<T>({ url: url, method: HTTP_METHOD.PUT, data: body });
  }

  async create<T, R>(body: R): Promise<T> {
    return apiCommon<T>({
      url: this.configUrl,
      method: HTTP_METHOD.POST,
      data: body,
    });
  }

  async deleteById<T>(id: String): Promise<T> {
    const url = `${this.configUrl}/${id}`;
    return apiCommon<T>({ url: url, method: HTTP_METHOD.DELETE });
  }
}
