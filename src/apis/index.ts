import {XuLyStatusApi} from './statusApi'
import {XuLyUserApi} from './userApi'
import {XuLyAuthApi} from './authApi'
import { XuLyTrademarkApi } from './trademark';
import { XuLyProductApi } from './product';
import { XuLyCartApi } from './cart';
import { XuLyInvoiceApi } from './invoice';
import { XuLyPaymentApi } from './payment';
import { XuLyFavoriteApi } from './favorite';
import { XuLyVoucherApi } from './voucher';
let apiStatusInstance: InstanceType<typeof XuLyStatusApi>;
let apiUserInstance: InstanceType<typeof XuLyUserApi>;
let apiAuthInstance: InstanceType<typeof XuLyAuthApi>;
let apiTrademarkInstance: InstanceType<typeof XuLyTrademarkApi>
let apiProductInstance: InstanceType<typeof XuLyProductApi>
let apiCartInstance: InstanceType<typeof XuLyCartApi>
let appInvoiceInstance: InstanceType<typeof XuLyInvoiceApi>
let appPaymentInstance: InstanceType<typeof XuLyPaymentApi>
let appFavoriteInstance: InstanceType<typeof XuLyFavoriteApi>
let appVoucherInstance: InstanceType<typeof XuLyVoucherApi>

export const useStatusApi = (): XuLyStatusApi => {
    if (!apiStatusInstance) {
        apiStatusInstance = new XuLyStatusApi();
    }
    return apiStatusInstance;
  };
  

  export const useUserApi = (): XuLyUserApi => {
    if (!apiUserInstance) {
        apiUserInstance = new XuLyUserApi();
    }
    return apiUserInstance;
  };
  

  export const useAuthApi = (): XuLyAuthApi => {
    if (!apiAuthInstance) {
        apiAuthInstance = new XuLyAuthApi();
    }
    return apiAuthInstance;
  };
  
  export const useTrademarkApi = (): XuLyTrademarkApi => {
    if (!apiTrademarkInstance) {
        apiTrademarkInstance = new XuLyTrademarkApi();
    }
    return apiTrademarkInstance;
  };
  
  export const useProductApi = (): XuLyProductApi => {
    if (!apiProductInstance) {
        apiProductInstance = new XuLyProductApi();
    }
    return apiProductInstance;
  };
  
  export const useCartApi = (): XuLyCartApi => {
    if (!apiCartInstance){
      apiCartInstance = new XuLyCartApi();
    }
    return apiCartInstance
  }

  export const useInvoiceApi = (): XuLyInvoiceApi => {
    if (!appInvoiceInstance){
      appInvoiceInstance = new XuLyInvoiceApi();
    }
    return appInvoiceInstance
  }

  export const usePaymentApi = (): XuLyPaymentApi => {
    if (!appPaymentInstance){
      appPaymentInstance = new XuLyPaymentApi();
    }
    return appPaymentInstance
  }

  export const useFavoriteApi = (): XuLyFavoriteApi => {
    if (!appFavoriteInstance){
      appFavoriteInstance = new XuLyFavoriteApi();
    }
    return appFavoriteInstance
  }

  export const useVoucherApi = (): XuLyVoucherApi => {
    if (!appVoucherInstance){
      appVoucherInstance = new XuLyVoucherApi();
    }
    return appVoucherInstance
  }