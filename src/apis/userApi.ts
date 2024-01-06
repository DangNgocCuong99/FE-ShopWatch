import { UserApi } from "./userApi/index";

export class XuLyUserApi {
  userApi: UserApi;
  constructor() {
    this.userApi = new UserApi();
  }
}
