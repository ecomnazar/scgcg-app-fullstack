import React from 'react'
import { Modal } from '..'
import { Button } from '../../button'
import { removeAccessToken } from '@/shared/lib/token'
import { removeUserLocalStorage } from '@/shared/lib/localStorage'
import { BaseContext } from '@/app/providers/useContextProvider'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'


export const LogoutConfirmModal = () => {
    const { logoutModal, setLogoutModal } = React.useContext(BaseContext)
    const { t } = useTranslation()

    const onSignOut = () => {
        removeAccessToken()
        removeUserLocalStorage()
        setLogoutModal(false)
        toast.success(t('signoutSuccessfully'))
    }

    return (
        <Modal isOpen={logoutModal} setIsOpen={setLogoutModal} modalTitle={t('areYouSureSignout')}>
            <div className='flex justify-start gap-x-4 mt-8'>
                <Button onClick={() => setLogoutModal(false)} title={t('cancel')} size='small' className='bg-red-500 w-fit' />
                <Button onClick={onSignOut} title={t('yes')} size='small' className='bg-transparent w-fit !text-dark border border-dark' />
            </div>
        </Modal>
    )
}