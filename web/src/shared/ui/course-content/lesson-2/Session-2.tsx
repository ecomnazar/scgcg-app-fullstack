import { Flex } from '../../flex'
import { Paragraph } from '../../paragraph'
import { MainTitle } from '../../main-title'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'
import { Image } from '../../image'
import { useTranslation } from 'react-i18next'

export const Session2 = () => {
    const { t } = useTranslation()
    const source = '/lessons/day-2/session-1/'
    return (
        <>
            <MainTitle>{t('secondLesson.1')}</MainTitle>
            <audio src='/sounds/en/lesson-2/1.wav' controls />

            <FlexWrapper>
                <FadeFromSide left><Image source={source + '1.png'} /></FadeFromSide>
                <MainTitle>{t('secondLesson.2')}</MainTitle>
                <audio src='/sounds/en/lesson-2/2.wav' controls />
                <Flex left={<FadeFromSide left><Image source={source + '3.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>{t('secondLesson.3')}</Paragraph>
                    <Paragraph>{t('secondLesson.4')}</Paragraph>
                    <Paragraph>{t('secondLesson.5')}</Paragraph>
                    <Paragraph>{t('secondLesson.6')}</Paragraph>
                </div>} />
                <MainTitle>{t('secondLesson.7')}</MainTitle>
                <audio src='/sounds/en/lesson-2/3.wav' controls />
                <Flex left={<div>
                    <Paragraph>{t('secondLesson.8')}</Paragraph>
                    <Paragraph className='mb-0'>{t('secondLesson.9')}</Paragraph>
                    <ul>
                        <li>1. {t('secondLesson.10')}</li>
                        <li>2. {t('secondLesson.11')} </li>
                        <li>3. {t('secondLesson.12')}</li>
                    </ul>
                    <Paragraph>{t('secondLesson.13')}</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '4.png'} /></FadeFromSide>} />
                <MainTitle>{t('secondLesson.14')}</MainTitle>
                <audio src='/sounds/en/lesson-2/4.wav' controls />
                <FadeFromSide><Image source={source + '5.png'} /></FadeFromSide>
                <MainTitle>{t('secondLesson.15')}</MainTitle>
                <audio src='/sounds/en/lesson-2/5.wav' controls />
                <Flex left={<FadeFromSide left><Image source={source + '6.png'} /></FadeFromSide>} right={<FadeFromSide><Image source={source + '7.png'} /></FadeFromSide>} />
                <MainTitle>{t('secondLesson.16')}</MainTitle>
                <audio src='/sounds/en/lesson-2/6.wav' controls />
                <Flex left={<ul>
                    <Paragraph>1. {t('secondLesson.17')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.18')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.19')}</Paragraph>
                    <Paragraph>4. {t('secondLesson.20')}</Paragraph>
                </ul>} right={<FadeFromSide><Image source={source + '8.png'} /></FadeFromSide>} />
                <MainTitle>{t('secondLesson.21')}</MainTitle>
                <audio src='/sounds/en/lesson-2/7.wav' controls />
                <Flex left={<div>
                    <Paragraph>{t('secondLesson.22')}</Paragraph>
                    <Paragraph>{t('secondLesson.23')}</Paragraph>
                    <Paragraph>{t('secondLesson.24')}</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '9.png'} /></FadeFromSide>} />
                <MainTitle>{t('secondLesson.25')}</MainTitle>
                <audio src='/sounds/en/lesson-2/8.wav' controls />
                <Paragraph>{t('secondLesson.26')}</Paragraph>
                <Paragraph>1. {t('secondLesson.27')}</Paragraph>
                <Paragraph>2. {t('secondLesson.28')}</Paragraph>
                <Paragraph>3. {t('secondLesson.29')}</Paragraph>
                <MainTitle>{t('secondLesson.30')}</MainTitle>
                <audio src='/sounds/en/lesson-2/9.wav' controls />
                <Flex left={<FadeFromSide left><Image source={source + '10.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. {t('secondLesson.31')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.32')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.33')}</Paragraph>
                    <Paragraph>4. {t('secondLesson.34')}</Paragraph>
                </div>} />
                <MainTitle>{t('secondLesson.35')}</MainTitle>
                <audio src='/sounds/en/lesson-2/10.wav' controls />
                <Flex left={<FadeFromSide left><Image source={source + '11.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. {t('secondLesson.36')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.37')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.38')}</Paragraph>
                    <Paragraph>4. {t('secondLesson.39')}</Paragraph>
                </div>} />
                <MainTitle>{t('secondLesson.40')}</MainTitle>
                <audio src='/sounds/en/lesson-2/11.wav' controls />
                <Flex left={<FadeFromSide left><Image source={source + '12.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. {t('secondLesson.41')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.42')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.43')}</Paragraph>
                </div>} />
                <MainTitle>{t('secondLesson.44')}</MainTitle>
                <audio src='/sounds/en/lesson-2/12.wav' controls />
                <Flex left={<div>
                    <Paragraph>1. {t('secondLesson.45')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.46')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.47')}</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '13.png'} /></FadeFromSide>} />
                <MainTitle>{t('secondLesson.48')}</MainTitle>
                <audio src='/sounds/en/lesson-2/13.wav' controls />
                <Flex left={<div>
                    <Paragraph>1. {t('secondLesson.49')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.50')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.51')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.52')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.53')}</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '14.png'} /></FadeFromSide>} />
                <MainTitle>{t('secondLesson.54')}</MainTitle>
                <audio src='/sounds/en/lesson-2/14.wav' controls />
                <FadeFromSide left><Image source={source + '15.png'} /></FadeFromSide>
                <MainTitle>{t('secondLesson.55')}</MainTitle>
                <audio src='/sounds/en/lesson-2/15.wav' controls />
                <Flex left={<FadeFromSide left><Image source={source + '16.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. {t('secondLesson.56')}</Paragraph>
                    <Paragraph>2. {t('secondLesson.57')}</Paragraph>
                    <Paragraph>3. {t('secondLesson.58')}</Paragraph>
                    <Paragraph>4. {t('secondLesson.59')}</Paragraph>
                    <Paragraph>5. {t('secondLesson.60')}</Paragraph>
                    <Paragraph>6. {t('secondLesson.61')}</Paragraph>
                    <Paragraph>7. {t('secondLesson.62')}</Paragraph>
                </div>} />
                <MainTitle>{t('secondLesson.63')}</MainTitle>
                <audio src='/sounds/en/lesson-2/16.wav' controls />
                <Paragraph>{t('secondLesson.64')}</Paragraph>
                <Paragraph>1. {t('secondLesson.65')}</Paragraph>
                <Paragraph>2. {t('secondLesson.66')}</Paragraph>
                <Paragraph>3. {t('secondLesson.67')}</Paragraph>
                <Paragraph>4. {t('secondLesson.68')}</Paragraph>
                <NextButton />
            </FlexWrapper>
        </>
    )
}
