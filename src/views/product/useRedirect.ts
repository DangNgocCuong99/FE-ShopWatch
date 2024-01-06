import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/product")
    }
    const goCreateStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/product/add")
    }
    const goDetailStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/product/view/${id}`)
    }
    const goUpdateStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/product/edit/${id}`)
    }

    return {
        goListStatus,
        goCreateStatus,
        goDetailStatus,
        goUpdateStatus
    }
}