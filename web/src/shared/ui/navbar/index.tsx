import { Container } from '../container'
import { Button } from '../button'
import { LanguageSelector } from '../language-selector'
import { ProfileMenu } from '../profile-menu'
import { MobileMenu } from './mobile-menu'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (
        <section>
            <Container>
                <nav className="flex items-center justify-between py-2 md:py-8 gap-x-4">
                    <Link to={'/'} className="flex gap-x-4 md:gap-x-12 items-center justify-between">
                        <img className="w-[50px] md:w-[80px]" src="/logo/tugra-logo.svg" />
                        <img className="w-[100px] md:w-[150px]" src="/logo/canada-logo.svg" />
                        <img className="w-[28px] md:w-[40px]" src="/logo/undp-logo.svg" />
                    </Link>
                    <div className="items-center gap-x-6 hidden md:flex">
                        <Button onClick={() => navigate('/view')} title={t('mainPage.view')} />
                        <LanguageSelector />
                        <ProfileMenu />
                    </div >
                    <MobileMenu />
                </nav >
            </Container >
        </section>
    )
}
