import React from 'react'
import { Modal } from '..'
import { BaseContext } from '@/app/providers/useContextProvider'
import { SignUpForm } from './signup-form'
import { SignInForm } from './signin-form'
import { useTranslation } from 'react-i18next'

export const AuthModal = () => {
    const { authModal, setAuthModal } = React.useContext(BaseContext)
    const [authectionType, setAuthectionType] = React.useState<'signin' | 'signup'>('signup')
    const { t } = useTranslation()


    return (
        <>
            <Modal isOpen={authModal} setIsOpen={setAuthModal} modalTitle={authectionType === 'signup' ? t('signup') : t('signin')}>
                {authectionType === 'signup' ?
                    <SignUpForm setAuthectionType={setAuthectionType} /> : <SignInForm setAuthectionType={setAuthectionType} />
                }
            </Modal>
        </>
    )
}
