import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListUser = () => {
        handleCloseTab()
        handleNavigation("/manage/user")
    }
    const goCreateUser = () => {
        handleCloseTab()
        handleNavigation("/manage/user/add")
    }
    const goDetailUser = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/user/view/${id}`)
    }
    const goUpdateUser = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/user/edit/${id}`)
    }

    return {
        goListUser,
        goCreateUser,
        goDetailUser,
        goUpdateUser
    }
}