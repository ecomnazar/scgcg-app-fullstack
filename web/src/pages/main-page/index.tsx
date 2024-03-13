import clsx from "clsx"
import { Icon } from "@/shared/ui/icon"
import { Container } from "@/shared/ui/container"
import { Button } from "@/shared/ui/button"
import { AuthModal } from "@/shared/ui/modal/auth-modal"
import { Footer } from "@/shared/ui/footer"
import { Navbar } from "@/shared/ui/navbar"

export const MainPage = () => {
  const percent = 50

  return (
    <>
      <AuthModal />
      <Navbar />
      <section className="bg-[url('/image/hands.png')] bg-opacity-0 pt-[72px] pb-[60px]" >
        <Container >
          <div className="max-w-[1370px] text-center mx-auto text-white">
            <h2 className="capitalize font-semibold text-[30px] lg:text-[50px] mb-[33px]">the specialized course on gender-centred governance for civil servants</h2>
            <p className="text-[15px] md:text-[16px] lg:text-[18px] mb-[65px]">The attitude and behavior of state employees should be guided by respect for human rights and the need to safeguard the dignity and rights of citizens.</p>
            <Button className="!text-primary !bg-[#ffffff] font-semibold" title={"Start course"} />
          </div>
        </Container >
      </section >
      <section className="py-12">
        <Container>
          <div className="flex items-center justify-between flex-col-reverse lg:flex-row flex-wrap gap-x-14 text-center">
            <div className="basis-[100%] lg:basis-[40%]">
              <p className="italic text-[18px] lg:text-[20px]">“Ensuring gender equality is essential for creating a fair, peaceful, and sustainable world. In Turkmenistan, UNDP remains dedicated to promoting gender equality as a fundamental human right and a critical element of a sustainable future. Collaborating with partners, we strive to empower women by eliminating biases, combating discrimination and stigma, and fostering equal rights and respect for all.”</p>
              <h4 className="font-semibold text-[20px] lg:text-[22px] max-w-[400px] mx-auto mt-8">Narine Sahakyan<br /> UNDP Resident Representative in Turkmenistan</h4>
            </div>
            <div className="basis-[100%] mb-8 lg:mt-0 lg:basis-[50%]">
              <img className="w-full" src="/image/women-with-undp-logo.png" />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-0 pb-12 lg:pt-12">
        <Container>
          <div className="flex justify-between flex-wrap items-start gap-x-14">
            <div className="basis-[100%] mb-8 lg:mt-0 lg:basis-[50%]">
              <img className="w-full" src="/image/progress-section.png" />
            </div>
            <div className="basis-[100%] lg:basis-[40%]">
              <h4 className="font-semibold text-[20px] lg:text-[22px] text-left">The specialized course on gender-centred governance for civil servants</h4>
              <div className="flex items-center gap-x-3 mt-6 mb-2">
                <div className="bg-[#EDEDED] h-[10px] w-[200px] sm:w-[300px] rounded-[8px] relative">
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
      <Footer />
    </>
  )
}
