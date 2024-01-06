import {t} from "i18next"
import { Button } from "antd"

function ButtonSave() {
    return (       
        <Button>{t('common.save_text')}</Button>
    )
}
export default ButtonSave