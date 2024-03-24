import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/voucher")
    }
    const goCreateStatus = () => {
        handleCloseTab()
        handleNavigation("/manage/voucher/add")
    }
    const goDetailStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/voucher/view/${id}`)
    }
    const goUpdateStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/voucher/edit/${id}`)
    }

    return {
        goListStatus,
        goCreateStatus,
        goDetailStatus,
        goUpdateStatus
    }
}