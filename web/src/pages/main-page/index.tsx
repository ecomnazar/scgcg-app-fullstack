import { Icon } from "@/shared/ui/icon"
import { Container } from "@/shared/ui/container"
import { Button } from "@/shared/ui/button"
import { Footer } from "@/shared/ui/footer"
import { Navbar } from "@/shared/ui/navbar"
import { useNavigate } from "react-router-dom"
import { ProgressLine } from "@/shared/ui/progress-line"
import { useTranslation } from "react-i18next"
import { getAccessToken } from "@/shared/lib/token"
import React from "react"
import { BaseContext } from "@/app/providers/useContextProvider"

export const MainPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const token = getAccessToken()
  const { setAuthModal } = React.useContext(BaseContext)

  return (
    <>
      <Navbar />
      <section className="bg-[url('/image/hands.png')] bg-opacity-0 pt-[72px] pb-[60px]" >
        <Container >
          <div className="max-w-[1370px] text-center mx-auto text-white">
            <h2 className="capitalize font-semibold text-[30px] lg:text-[50px] mb-[33px]">{t('mainPage.headerTitle')}</h2>
            <p className="text-[15px] md:text-[16px] lg:text-[18px] mb-[65px]">{t('mainPage.headerDesc')}</p>
            <Button className="!text-primary !bg-[#ffffff] font-semibold" title={t('mainPage.startCourse')} onClick={() => {
              if (token) {
                navigate('/course')
              } else {
                setAuthModal(true)
              }
            }} />
          </div>
        </Container >
      </section >
      <section className="py-12">
        <Container>
          <div className="flex items-center justify-between flex-col-reverse lg:flex-row flex-wrap gap-x-14 text-center">
            <div className="basis-[100%] lg:basis-[40%]">
              <p className="italic text-[18px] lg:text-[20px]">{t('mainPage.section1Title')}</p>
              <h4 className="font-semibold text-[20px] lg:text-[22px] max-w-[400px] mx-auto mt-8">{t('mainPage.section1Desc')}</h4>
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
              <h4 className="font-semibold text-[20px] lg:text-[22px] text-left">{t('mainPage.section2Title')}</h4>
              <ProgressLine />
              <div className="space-y-2 mb-8">
                <div>
                  <h4 className="font-semibold mb-1">{t('mainPage.duration')}:</h4>
                  <div className="flex items-center gap-x-2">
                    <Icon type="tick" />
                    <p>15 {t('mainPage.hours')}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('mainPage.pace')}:</h4>
                  <div className="flex items-center gap-x-2">
                    <Icon type="tick" />
                    <p>{t('mainPage.paceDesc')}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('mainPage.certificate')}:</h4>
                  <div className="flex items-center gap-x-2">
                    <Icon type="tick" />
                    <p>{t('mainPage.getCertificate')}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('mainPage.youLearn')}:</h4>
                  <div className="space-y-2">
                    <p>{t('mainPage.genderList1')}</p>
                    <p>{t('mainPage.genderList2')}</p>
                    <p>{t('mainPage.genderList3')}</p>
                    <p>{t('mainPage.genderList4')}</p>
                    <p>{t('mainPage.genderList5')}</p>
                    <p>{t('mainPage.genderList6')}</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {
                if (token) {
                  navigate('/course')
                } else {
                  setAuthModal(true)
                }
              }} title={t('mainPage.startCourse')} />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}
