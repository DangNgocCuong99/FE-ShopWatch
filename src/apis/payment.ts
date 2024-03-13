import { PaymentApi } from './paymentApi/index';

export class XuLyPaymentApi {
  paymentApi: PaymentApi;
  constructor() {
    this.paymentApi = new PaymentApi();
  }
}
