import React from 'react'
import { Icon } from '../icon'
import clsx from 'clsx'
import { isUserRegistered } from '@/shared/lib/is-user-registed'
import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick'

export const ProfileMenu = () => {
    const [showMenu, setShowMenu] = React.useState(true)
    const menuRef = useOutsideClick(() => setShowMenu(false))

    const handleShowMenu = () => {
        if (isUserRegistered()) {
            setShowMenu(true)
        } else {
            console.log('not registered')
        }
    }

    return (
        <div className='relative'>
            <button onClick={handleShowMenu} className="p-3 rounded-sm">
                <Icon type={"person"} />
            </button>
            <div ref={menuRef} className={clsx('bg-white p-6 rounded-sm min-w-[300px] absolute top-[150%] right-0 transition-all duration-500', {
                'translate-y-[20px] visible opacity-100': showMenu,
                'invisible opacity-0': !showMenu
            })}>
                <h4 className='mb-8'>Nazar Jumayew</h4>
                <ul className='cursor-default space-y-4'>
                    <li className='flex items-center gap-x-2'>
                        <Icon type={'mail'} />
                        <p className='text-secondary text-[14px]'>nazar.se7en@gmail.com</p>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <Icon type={'location'} />
                        <p className='text-secondary text-[14px]'>Turkmenistan</p>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <Icon type={'humans'} />
                        <p className='text-secondary text-[14px]'>Female</p>
                    </li>
                </ul>
                <hr className='border-secondary my-4' />
                <ul className='space-y-4'>
                    <li className='flex items-center gap-x-2 cursor-pointer'>
                        <Icon type={'edit-profile'} />
                        <p className='text-secondary text-[14px]'>Edit profile</p>
                    </li>
                    <li className='flex items-center gap-x-2 cursor-pointer'>
                        <Icon type={'signout'} className='w-[22px]' />
                        <p className='text-[#F04438] text-[14px]'>Signout</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
