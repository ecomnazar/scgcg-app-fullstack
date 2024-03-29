import { Container } from '../container'
import { LuFacebook } from "react-icons/lu"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { AiOutlineYoutube } from "react-icons/ai"

export const Footer = () => {
    return (
        <footer className='py-12 bg-primary'>
            <Container>
                <div className="">
                    <div>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li>
                                <a target="_blank"
                                    className="text-dark"
                                    href={"https://www.undp.org/turkmenistan/press-releases/undp-and-partners-enhance-national-capacity-providing-community-based-mental-health-and-psychosocial-support-vulnerable"} >
                                    The SCGCG course was developed and digitalized within the framework of the project on “Assistance in the realization of the National Action Plan of Turkmenistan in the field of human rights for 2021-2025”.
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-col-1 mt-12 gap-y-4 sm:grid-cols-2">
                    <div className="flex items-center gap-x-4">
                        <a target="_blank" href="https://www.facebook.com/undptm/">
                            <LuFacebook size={26} />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/undp_turkmenistan">
                            <FaInstagram size={25} />
                        </a>
                        <a target="_blank" href="https://twitter.com/undptm">
                            <FaXTwitter size={23} />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@undpinturkmenistan6160">
                            <AiOutlineYoutube size={28} />
                        </a>
                    </div>
                    <div className="sm:text-right">
                        <p className="text-dark">© 2024, All rights reserved</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
