import { Container } from '../container'
import { Button } from '../button'
import { LanguageSelector } from '../language-selector'
import { ProfileMenu } from '../profile-menu'
import { MobileMenu } from './mobile-menu'
import { LogoutConfirmModal } from '../modal/logout-confirm-modal'
import React from 'react'
import { BaseContext } from '@/app/providers/useContextProvider'

export const Navbar = () => {
    const { logoutModal, setLogoutModal } = React.useContext(BaseContext)
    return (
        <section>
            <Container>
                <nav className="flex items-center justify-between py-2 md:py-8 gap-x-4">
                    <div className="flex gap-x-4 md:gap-x-12 items-center justify-between">
                        <img className="w-[50px] md:w-[80px]" src="/logo/tugra-logo.svg" />
                        <img className="w-[100px] md:w-[150px]" src="/logo/canada-logo.svg" />
                        <img className="w-[28px] md:w-[40px]" src="/logo/undp-logo.svg" />
                    </div>
                    <div className="items-center gap-x-6 hidden md:flex">
                        <Button title={"View course"} />
                        <LanguageSelector />
                        <ProfileMenu />
                    </div >
                    <MobileMenu />
                </nav >
            </Container >
            <LogoutConfirmModal isOpen={logoutModal} setIsOpen={setLogoutModal} />
        </section>
    )
}
