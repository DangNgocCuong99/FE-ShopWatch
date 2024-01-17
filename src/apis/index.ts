import {XuLyStatusApi} from './statusApi'
import {XuLyUserApi} from './userApi'
import {XuLyAuthApi} from './authApi'
import { XuLyTrademarkApi } from './trademark';
import { XuLyProductApi } from './product';
import { XuLyCartApi } from './cart';
import { XuLyStudentApi } from './trademark copy';
import { XuLyStaffApi } from './staff';
import { XuLyStaffApi2 } from './staff2.0';
let apiStatusInstance: InstanceType<typeof XuLyStatusApi>;
let apiUserInstance: InstanceType<typeof XuLyUserApi>;
let apiAuthInstance: InstanceType<typeof XuLyAuthApi>;
let apiTrademarkInstance: InstanceType<typeof XuLyTrademarkApi>
let apiProductInstance: InstanceType<typeof XuLyProductApi>
let apiCartInstance: InstanceType<typeof XuLyCartApi>
let apiStudentInstance: InstanceType<typeof XuLyStudentApi>
let apiStaffInstance:InstanceType<typeof XuLyStaffApi>
let apiStaff2Instance:InstanceType<typeof XuLyStaffApi2>
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

//student
  export const useStudentApi = (): XuLyStudentApi => {
    if (!apiStudentInstance) {
      apiStudentInstance = new XuLyStudentApi();
    }
    return apiStudentInstance;
  };
  export const useStaffApi = (): XuLyStaffApi => {
    if (!apiStudentInstance) {
      apiStaffInstance = new XuLyStaffApi();
    }
    return apiStaffInstance;
  };
  export const useStaffApi2=():XuLyStaffApi2=>{
    if(!apiStaff2Instance) {
      apiStaff2Instance=new XuLyStaffApi2()
    }
    return apiStaff2Instance
  }