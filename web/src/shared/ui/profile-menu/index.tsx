import React from 'react'
import { Icon } from '../icon'
import clsx from 'clsx'
import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick'
import { BaseContext } from '@/app/providers/useContextProvider'
import { getAccessToken } from '@/shared/lib/token'
import { getUserLocalStorage } from '@/shared/lib/localStorage'
import { IUser } from '@/shared/api/signupApi'
import { useTranslation } from 'react-i18next'

export const ProfileMenu = () => {
    const { setAuthModal, setLogoutModal } = React.useContext(BaseContext)
    const [showMenu, setShowMenu] = React.useState(false)
    const menuRef = useOutsideClick(() => setShowMenu(false))
    const token = getAccessToken()
    const user: IUser = getUserLocalStorage()
    const { t } = useTranslation()


    const handleShowMenu = () => {
        if (token) {
            setShowMenu(true)
        } else {
            setAuthModal(true)
        }
    }

    return (
        <>
            <div className='relative'>
                <button onClick={handleShowMenu} className={clsx("p-3 rounded-sm", {
                    'pointer-events-none': showMenu
                })}>
                    <Icon type={"person"} />
                </button>
                <div ref={menuRef} className={clsx('bg-white z-[9999] p-6 rounded-sm min-w-[300px] absolute top-[150%] right-0 transition-all duration-500', {
                    'translate-y-[20px] visible opacity-100': showMenu,
                    'invisible opacity-0': !showMenu
                })}>
                    <h4 className='mb-8'>{user?.fullname}</h4>
                    <ul className='cursor-default space-y-4'>
                        <li className='flex items-center gap-x-2'>
                            <Icon type={'mail'} />
                            <p className='text-secondary text-[14px]'>{user?.email}</p>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <Icon type={'location'} />
                            <p className='text-secondary text-[14px]'>{user?.region}</p>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <Icon type={'humans'} />
                            <p className='text-secondary text-[14px]'>{t(user?.gender)}</p>
                        </li>
                    </ul>
                    <hr className='border-secondary my-4' />
                    <ul className='space-y-4'>
                        {/* <li className='flex items-center gap-x-2 cursor-pointer'>
                            <Icon type={'edit-profile'} />
                            <p className='text-secondary text-[14px]'>Edit profile</p>
                        </li> */}
                        <li onClick={() => {
                            setLogoutModal(true)
                            setShowMenu(false)
                        }} className='flex items-center gap-x-2 cursor-pointer'>
                            <Icon type={'signout'} className='w-[22px]' />
                            <p className='text-[#F04438] text-[14px]'>{t('signout')}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
