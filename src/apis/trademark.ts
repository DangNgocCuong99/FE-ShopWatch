import { TrademarkApi } from "./trademarkApi/index";

export class XuLyTrademarkApi {
  trademarkApi: TrademarkApi;
  constructor() {
    this.trademarkApi = new TrademarkApi();
  }
}
