import { InvoiceApi } from './invoiceApi/index';

export class XuLyInvoiceApi {
  invoiceApi: InvoiceApi;
  constructor() {
    this.invoiceApi = new InvoiceApi();
  }
}
