import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/trademark")
    }
    const goCreateStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/trademark/add")
    }
    const goDetailStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/trademark/view/${id}`)
    }
    const goUpdateStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/trademark/edit/${id}`)
    }

    return {
        goListStatus,
        goCreateStatus,
        goDetailStatus,
        goUpdateStatus
    }
}