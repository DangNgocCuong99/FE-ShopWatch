import { AuthApi } from "./authApi/index";

export class XuLyAuthApi {
  AuthApi: AuthApi;
  constructor() {
    this.AuthApi = new AuthApi();
  }
}
