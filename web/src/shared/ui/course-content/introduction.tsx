import { MainTitle } from '../main-title'
import { Paragraph } from '../paragraph'
import { NextButton } from '../button/nextButton'
import { useTranslation } from 'react-i18next'

export const Introduction = () => {
    const { t } = useTranslation()
    return (
        <>
            <MainTitle className='mb-8'>{t('introduction.1')}<br /><span>UNDP Turkmenistan</span></MainTitle>
            <Paragraph className='text-[21px] font-semibold'>{t('introduction.introduction')} </Paragraph>
            <Paragraph>{t('introduction.2')}</Paragraph>
            <Paragraph>{t('introduction.3')}</Paragraph>
            <Paragraph>{t('introduction.4')}</Paragraph>
            <Paragraph>{t('introduction.5')}</Paragraph>
            <Paragraph>{t('introduction.6')}</Paragraph>
            <Paragraph>{t('introduction.7')}</Paragraph>
            <Paragraph>{t('introduction.8')}</Paragraph>
            <Paragraph>{t('introduction.9')}</Paragraph>
            <NextButton />
        </>
    )
}
