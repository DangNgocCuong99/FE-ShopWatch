import {t} from "i18next"
import { Button, Popconfirm } from "antd"

function ButtonClose({ onCancel, onConfirm, showConfirm }: { onCancel: () => void, onConfirm?: () => void, showConfirm?: boolean }) {
    const getButton = () => (
        !!showConfirm ? <Popconfirm
            onConfirm={onConfirm}
            onCancel={onCancel}
            title={
                t('common.confirm_close')
            }
            okText={t('common.ok_text')}
            cancelText={t('common.cancel_text')}
        >
            <Button danger >{t('common.close_text')}</Button>
        </Popconfirm>
            : <Button danger onClick={onCancel}>{t('common.close_text')}</Button>
    )


    return (
        <div>
            {getButton()}
        </div>


    )
}
export default ButtonClose