import clsx from "clsx"
import { Icon } from "@/shared/ui/icon"
import { Container } from "@/shared/ui/container"
import { LanguageSelector } from "@/shared/ui/language-selector"
import { Button } from "@/shared/ui/button"
import { ProfileMenu } from "@/shared/ui/profile-menu"
import { AuthModal } from "@/shared/ui/modal/auth-modal"

export const MainPage = () => {
  const percent = 50

  return (
    <>
      <AuthModal />
      <section>
        <Container>
          <nav className="flex items-center justify-between py-8 gap-x-4">
            <div className="flex gap-x-12 items-center justify-between">
              <img className="w-[40px]" src="/logo/undp-logo.svg" />
              <img className="w-[80px]" src="/logo/tugra-logo.svg" />
              <img className="w-[300px]" src="/logo/canada-text-logo.svg" />
            </div>
            <div className="flex items-center gap-x-6">
              <Button title={"View course"} />
              {/* <button className="h-[48px] px-[22px] bg-primary rounded-sm text-white">View course</button> */}
              <LanguageSelector />
              <ProfileMenu />
            </div>
          </nav>
        </Container>
      </section>
      <section className="bg-[url('/image/hands.png')] bg-opacity-0 pt-[72px] pb-[60px]">
        {/* <section> */}
        <Container>
          <div className="max-w-[1378px] text-center mx-auto text-white">
            <h2 className="capitalize font-semibold text-[50px] mb-[33px]">the specialized course on gender-centred governance for civil servants</h2>
            <p className="text-[18px] mb-[65px]">The attitude and behavior of state employees should be guided by respect for human rights and the need to safeguard the dignity and rights of citizens.</p>
            <Button className="!text-primary !bg-[#ffffff] font-semibold" title={"Start course"} />
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="flex items-center gap-x-14  text-center">
            <div>
              <p className="italic text-[20px]">“Ensuring gender equality is essential for creating a fair, peaceful, and sustainable world. In Turkmenistan, UNDP remains dedicated to promoting gender equality as a fundamental human right and a critical element of a sustainable future. Collaborating with partners, we strive to empower women by eliminating biases, combating discrimination and stigma, and fostering equal rights and respect for all.”</p>
              <h4 className="font-semibold text-[22px] max-w-[400px] mx-auto mt-8">Narine Sahakyan<br /> UNDP Resident Representative in Turkmenistan</h4>
            </div>
            <img src="/image/women-with-undp-logo.png" />
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <div className="flex items-start gap-x-14">
            <img src="/image/girl-with-boy.png" />
            <div>
              <h4 className="font-semibold text-[22px] text-left">The specialized course on gender-centred governance for civil servants</h4>
              <div className="flex items-center gap-x-3">
                <div className="bg-[#EDEDED] h-[10px] w-[300px] rounded-[8px] relative">
                  <div style={{ width: percent + '%' }} className={clsx(`absolute top-0 left-0 h-full bg-primary rounded-[6px]`)}></div>
                </div>
                <p>{percent}%</p>
              </div>
              <div className="space-y-2 mb-8">
                <div>
                  <h4 className="font-semibold mb-1">Duration:</h4>
                  <div className="flex items-center gap-x-2">
                    <Icon type="tick" />
                    <p>15 hours</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Pace:</h4>
                  <div className="flex items-center gap-x-2">
                    <Icon type="tick" />
                    <p>Self paced</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certification:</h4>
                  <div className="flex items-center gap-x-2">
                    <Icon type="tick" />
                    <p>Download a certificate of completion</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">You will learn about:</h4>
                  <div className="space-y-2">
                    <p>Gender and Gender Equality</p>
                    <p>Gender Data Turkmenistan</p>
                    <p>Gender Stereotypes</p>
                    <p>National Framework</p>
                    <p>Strategies for achieving Gender Equality</p>
                    <p>Gender Analysis</p>
                  </div>
                </div>
              </div>
              <Button title={"Start course"} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
