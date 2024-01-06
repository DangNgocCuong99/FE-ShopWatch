import { useState } from "react"

export const useReload = () => {
    const [reload, setReload] = useState<boolean>(false)
    const handleReload = () => {
        setReload(!reload)
    }
    return {
        reload, handleReload
    }
}
