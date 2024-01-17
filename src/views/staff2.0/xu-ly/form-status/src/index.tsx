import { FormInstance } from "antd";
import { MODE } from "/@/utils";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";
import { BasicForm } from "/@/components/Form";
import { dataConfig } from "./data.config";

 function StatusForm({mode,form}:{mode:MODE, form:FormInstance}){
    return(
      <div>
         <BasicForm dataForm={dataConfig()} formSchema={form} mode={mode}/>
      </div>
    )
 }
 export default StatusForm