import { fileDownloader } from '@/shared/lib/fileDownloader'
import { Container } from '@/shared/ui/container'
import { Footer } from '@/shared/ui/footer'
import { Icon } from '@/shared/ui/icon'
import { Navbar } from '@/shared/ui/navbar'
import { useTranslation } from 'react-i18next'

const materials = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7']
const presentations = ['presentation1', 'presentation2', 'presentation3', 'presentation4', 'presentation5', 'presentation6']

export const ViewCoursePage = () => {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language

    return (
        <>
            <Navbar />
            <Container className='mb-16'>
                <img src='/image/details-page.png' />
                <div className='mt-8 space-y-10'>
                    <h3 className='font-semibold text-[22px]'>{t('introduction.introduction')}</h3>
                    <div className='space-y-1'>
                        <p>{t('introduction.2')}</p>
                        <p>{t('introduction.3')}</p>
                    </div>
                    <div className='space-y-1'>
                        <p>{t('introduction.4')}</p>
                        <p>{t('introduction.5')}</p>
                        <p>{t('introduction.6')}</p>
                        <p>{t('introduction.7')}</p>
                    </div>
                    <div className='space-y-1'>
                        <p>{t('introduction.listTitle')}</p>
                        <ul className='ml-8'>
                            <li className='list-disc'><p>{t('introduction.list1')}</p></li>
                            <li className='list-disc'><p>{t('introduction.list2')}</p></li>
                            <li className='list-disc'><p>{t('introduction.list3')}</p></li>
                        </ul>
                    </div>
                    <div>
                        <p>{t('introduction.8')}</p>
                    </div>
                    <div>
                        <p>{t('introduction.9')}</p>
                    </div>
                    <h3 className='font-semibold text-[22px] text-dark'>{t('mainPage.materials')}</h3>
                    <div className='space-y-4'>
                        {materials.map((material, idx) => {
                            return <button onClick={() => fileDownloader(`/files/${currentLanguage}/text/${idx + 1}.docx`, `${material}.docx`)} key={idx} className='flex items-center space-x-4 cursor-pointer'>
                                <Icon type='upload' />
                                <div className='text-left'>
                                    <p className='font-semibold text-dark'>{t(`viewCourse.${material}`)}</p>
                                    <p className='text-dark text-[12px] -translate-y-[2px]'>{t('downloadFile')}</p>
                                </div>
                            </button>
                        })}
                    </div>
                    <h3 className='font-semibold text-[22px] text-dark'>{t('mainPage.presentations')}</h3>
                    <div className='space-y-4'>
                        {presentations.map((presentation, idx) => {
                            return <button onClick={() => fileDownloader(`/files/${currentLanguage}/presentation/${idx + 1}.${idx === 0 || idx === 1 ? 'pptx' : 'pptm'}`, `${presentation}.${idx === 0 || idx === 1 ? 'pptx' : 'pptm'}`)} key={idx} className='flex items-center space-x-4 cursor-pointer'>
                                <Icon type='upload' />
                                <div className='text-left'>
                                    <p className='font-semibold text-dark'>{t(`viewCourse.${presentation}`)}</p>
                                    <p className='text-dark text-[12px] -translate-y-[2px]'>{t('downloadFile')}</p>
                                </div>
                            </button>
                        })}
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
