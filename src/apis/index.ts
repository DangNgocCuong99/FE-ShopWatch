import {XuLyStatusApi} from './statusApi'
import {XuLyUserApi} from './userApi'
import {XuLyAuthApi} from './authApi'
import { XuLyTrademarkApi } from './trademark';
import { XuLyProductApi } from './product';
import { XuLyCartApi } from './cart';
let apiStatusInstance: InstanceType<typeof XuLyStatusApi>;
let apiUserInstance: InstanceType<typeof XuLyUserApi>;
let apiAuthInstance: InstanceType<typeof XuLyAuthApi>;
let apiTrademarkInstance: InstanceType<typeof XuLyTrademarkApi>
let apiProductInstance: InstanceType<typeof XuLyProductApi>
let apiCartInstance: InstanceType<typeof XuLyCartApi>

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