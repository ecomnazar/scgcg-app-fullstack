import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { languages } from '@/shared/lib/constants/languages'
import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick'
import { Icon } from '../../icon'
import { getAccessToken } from '@/shared/lib/token'
import { BaseContext } from '@/app/providers/useContextProvider'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const { i18n } = useTranslation()
    const divRef = useOutsideClick(() => setIsOpen(false))
    const token = getAccessToken()
    const { setAuthModal, setLogoutModal } = React.useContext(BaseContext)

    const changeLanguage = (lng: string) => i18n.changeLanguage(lng)

    const handleRegister = () => {
        setAuthModal(true)
        setIsOpen(false)
    }

    const handleLogout = () => {
        setIsOpen(false)
        setLogoutModal(true)
    }

    return (
        <>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(true)}>
                    <Icon className='w-[24px]' type='menu' />
                </button>
            </div>
            <div className={clsx('fixed flex justify-end top-0 left-0 h-screen w-screen bg-white/10 backdrop-blur-sm z-[999] transition-all duration-500', {
                'opacity-1 visible': isOpen,
                'opacity-0 invisible': !isOpen
            })}>
                <div ref={divRef} className={clsx('flex flex-col h-screen w-[330px] bg-white p-4 transition-all duration-500', {
                    'translate-x-0': isOpen,
                    'translate-x-[330px]': !isOpen
                })}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <img className="w-[50px] md:w-[80px]" src="/logo/tugra-logo.svg" />
                            <img className="w-[100px] md:w-[150px]" src="/logo/canada-logo.svg" />
                            <img className="w-[28px] md:w-[40px]" src="/logo/undp-logo.svg" />
                        </div>
                        <button onClick={() => setIsOpen(false)}>
                            <Icon type='close' />
                        </button>
                    </div>
                    <div className="flex flex-col flex-1 gap-y-4 mt-8">
                        <button onClick={() => { }} className="bg-[#EDEDED] text-left p-4 rounded-md flex items-center justify-between">
                            {/* <p>{t('courseFeaturesBenefits')}</p> */}
                            <p>View course</p>
                            <Icon type='arrow-right' />
                        </button>
                        {token ? <>
                            <button onClick={() => { }} className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-between">
                                <p>Profile</p>
                                <Icon type='arrow-right' />
                            </button>
                            <button onClick={handleLogout} className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-between">
                                <p>Logout</p>
                                <Icon type='arrow-right' />
                            </button>
                        </> : <button onClick={handleRegister} className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-between">
                            <p>Register</p>
                            <Icon type='arrow-right' />
                        </button>}
                    </div>
                    <div className="flex items-center justify-between">
                        {/* {email && <Button title={t('signout')} onClick={onLogout} className="bg-red-400" />} */}
                        <ul className="ml-auto flex space-x-2">
                            {languages.map((lng) => {
                                return (
                                    <li key={lng}><button onClick={() => changeLanguage(lng)} className={clsx("py-2.5 px-4 rounded-md text-sm text-black", {
                                        ['bg-primary text-white']: i18n.language.includes(lng)
                                    })}>{lng.toUpperCase()}</button></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
