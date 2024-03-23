import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListInvoice = () => {
        handleCloseTab()
        handleNavigation("/manage/invoice")
    }
    const goCreateInvoice = () => {
        handleCloseTab()
        handleNavigation("/manage/invoice/add")
    }
    const goDetailInvoice = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/invoice/view/${id}`)
    }
    const goUpdateInvoice = (id: string) => {
        handleCloseTab()
        handleNavigation(`/manage/invoice/edit/${id}`)
    }

    return {
        goListInvoice,
        goCreateInvoice,
        goDetailInvoice,
        goUpdateInvoice
    }
}