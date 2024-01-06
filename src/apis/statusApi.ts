import { StatusApi } from "./statusApi/index";

export class XuLyStatusApi {
  statusApi: StatusApi;
  constructor() {
    this.statusApi = new StatusApi();
  }
}
