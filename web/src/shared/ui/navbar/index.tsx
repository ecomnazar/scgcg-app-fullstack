import { Container } from '../container'
import { Button } from '../button'
import { LanguageSelector } from '../language-selector'
import { ProfileMenu } from '../profile-menu'

export const Navbar = () => {
    return (
        <section>
            <Container>
                <nav className="flex items-center justify-between py-8 gap-x-4">
                    <div className="flex gap-x-12 items-center justify-between">
                        <img className="w-[80px]" src="/logo/tugra-logo.svg" />
                        <img className="w-[150px]" src="/logo/canada-logo.svg" />
                        <img className="w-[40px]" src="/logo/undp-logo.svg" />
                    </div>
                    <div className="flex items-center gap-x-6">
                        <Button title={"View course"} />
                        {/* <button className="h-[48px] px-[22px] bg-primary rounded-sm text-white">View course</button> */}
                        <LanguageSelector />
                        <ProfileMenu />
                    </div >
                </nav >
            </Container >
        </section>
    )
}
