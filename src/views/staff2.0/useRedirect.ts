import { useMenuNavigation } from "/@/components/MenuSileBar/useHook"
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect=()=>{
    const{handleNavigation}=useMenuNavigation();
    const{handleCloseTab}=useMenuTab()

    const goListStatus=()=>{
        handleCloseTab()
        handleNavigation("/manage/staff2")
    }
    const goCreateStatus=()=>{
        handleCloseTab()
        handleNavigation("/manage/staff2/add")
    }
    const goDetailStatus=(id :string)=>{
        handleCloseTab()
        handleNavigation(`/manage/staff2/view/${id}`)
    }
    const goUpdateStatus=(id :string)=>{
        handleCloseTab()
        handleNavigation(`/manage/staff2/edit/${id}`)
    }
    return{
        goCreateStatus,
        goDetailStatus,
        goListStatus,
        goUpdateStatus
    }
}