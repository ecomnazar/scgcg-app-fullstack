import { Container } from '../container'
import { LuFacebook } from "react-icons/lu"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { AiOutlineYoutube } from "react-icons/ai"
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className='py-12 bg-primary'>
            <Container>
                <div className="">
                    <div>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li>
                                <a target="_blank"
                                    className="text-white"
                                    href={"https://www.undp.org/turkmenistan/press-releases/undp-and-partners-enhance-national-capacity-providing-community-based-mental-health-and-psychosocial-support-vulnerable"} >
                                    {t('mainPage.courseWhy')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-col-1 mt-12 gap-y-4 sm:grid-cols-2">
                    <div className="flex items-center gap-x-4">
                        <a target="_blank" href="https://www.facebook.com/undptm/">
                            <LuFacebook color='white' size={26} />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/undp_turkmenistan">
                            <FaInstagram color='white' size={25} />
                        </a>
                        <a target="_blank" href="https://twitter.com/undptm">
                            <FaXTwitter color='white' size={23} />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@undpinturkmenistan6160">
                            <AiOutlineYoutube color='white' size={28} />
                        </a>
                    </div>
                    <div className="sm:text-right">
                        <p className="text-white">© 2024, {t('mainPage.rightReserved')}</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
