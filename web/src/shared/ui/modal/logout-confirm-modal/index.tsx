import React from 'react'
import { Modal } from '..'
import { Button } from '../../button'
import { removeAccessToken } from '@/shared/lib/token'
import { removeUserLocalStorage } from '@/shared/lib/localStorage'
import toast from 'react-hot-toast'

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const LogoutConfirmModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const onSignOut = () => {
        removeAccessToken()
        removeUserLocalStorage()
        setIsOpen(false)
        toast.success('Sign out successfully')
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle='Are you sure you want to sign out?'>
            <div className='flex justify-start gap-x-4 mt-8'>
                <Button onClick={() => setIsOpen(false)} title='Cancel' size='small' className='bg-red-500 w-fit' />
                <Button onClick={onSignOut} title='Yes, sign out' size='small' className='bg-transparent w-fit !text-dark border border-dark' />
            </div>
        </Modal>
    )
}