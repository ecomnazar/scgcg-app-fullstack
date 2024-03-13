import React from 'react'
import { Modal } from '..'
import { BaseContext } from '@/app/providers/useContextProvider'
import { SignUpForm } from './signup-form'
import { SignInForm } from './signin-form'

export const AuthModal = () => {
    const { authModal, setAuthModal } = React.useContext(BaseContext)
    const [authectionType, setAuthectionType] = React.useState<'signin' | 'signup'>('signup')

    return (
        <>
            <Modal isOpen={authModal} setIsOpen={setAuthModal} modalTitle={authectionType === 'signup' ? 'Sign up' : 'Sign in'}>
                {authectionType === 'signup' ?
                    <SignUpForm setAuthectionType={setAuthectionType} /> : <SignInForm setAuthectionType={setAuthectionType} />
                }
            </Modal>
        </>
    )
}
