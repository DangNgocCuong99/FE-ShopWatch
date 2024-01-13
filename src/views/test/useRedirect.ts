import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/student")
    }
    const goCreateStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/student/add")
    }
    const goDetailStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/student/view/${id}`)
    }
    const goUpdateStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/student/edit/${id}`)
    }

    return {
        goListStatus,
        goCreateStatus,
        goDetailStatus,
        goUpdateStatus
    }
}