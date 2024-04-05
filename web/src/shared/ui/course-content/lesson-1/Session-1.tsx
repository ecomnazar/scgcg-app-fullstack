import { MainTitle } from '../../main-title'
import { Paragraph } from '../../paragraph'
import { Flex } from '../../flex'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'
import { useTranslation } from 'react-i18next'

export const Session1 = () => {
  const { t } = useTranslation()
  return (
    <>
      <MainTitle>{t('firstLesson.1')}</MainTitle>
      <FlexWrapper>
        <Flex
          left={
            <Paragraph>{t('firstLesson.2')}</Paragraph>
          }
          right={
            <FadeFromSide>
              <img className='rounded-[8px]' src='/lessons/day-1/session-1/1.png' />
            </FadeFromSide>
          }
        />
        <Flex left={
          <FadeFromSide left>
            <img className='rounded-[8px]' src='/lessons/day-1/session-1/2.png' />
          </FadeFromSide>
        } right={<div>
          <Paragraph>{t('firstLesson.3')}</Paragraph>
          <Paragraph>{t('firstLesson.4')}</Paragraph>
        </div>} />
        <Flex
          left={
            <Paragraph>{t('firstLesson.5')}</Paragraph>
          }
          right={
            <FadeFromSide>
              <img className='rounded-[8px]' src='/lessons/day-1/session-1/3.png' />
            </FadeFromSide>
          }
        />
        <FadeFromSide left>
          <img className='rounded-[8px]' src='/lessons/day-1/session-1/4.png' />
        </FadeFromSide>
        <MainTitle>{t('firstLesson.6')}</MainTitle>
        <Flex
          left={
            <div className='space-y-4'>
              <div>
                <Paragraph className='mb-0'>{t('firstLesson.7')}</Paragraph>
                <ul>
                  <li>- {t('firstLesson.8')}</li>
                  <li>- {t('firstLesson.9')}</li>
                  <li>- {t('firstLesson.10')}</li>
                </ul>
              </div>
              <div>
                <Paragraph className='mb-0'>{t('firstLesson.11')}</Paragraph>
                <ul>
                  <li>- {t('firstLesson.12')}</li>
                  <li>- {t('firstLesson.13')}</li>
                  <li>- {t('firstLesson.14')}</li>
                </ul>
              </div>
            </div>
          }
          right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/5.png' /></FadeFromSide>}
        />
        <Paragraph>{t('firstLesson.15')}</Paragraph>
        <Paragraph>{t('firstLesson.16')}</Paragraph>
        <MainTitle>{t('firstLesson.17')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/6.png' /></FadeFromSide>} right={<Paragraph>{t('firstLesson.18')}</Paragraph>} />
        <MainTitle>{t('firstLesson.19')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/7.png' /></FadeFromSide>} right={<FadeFromSide> <img className='rounded-[8px]' src='/lessons/day-1/session-1/8.png' /></FadeFromSide>} />
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/9.png' /></FadeFromSide>} right={<FadeFromSide> <img className='rounded-[8px]' src='/lessons/day-1/session-1/10.png' /></FadeFromSide>} />
        <MainTitle>{t('firstLesson.20')}</MainTitle>
        <Flex left={<FadeFromSide left ><img className='rounded-[8px]' src='/lessons/day-1/session-1/11.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/12.png' /></FadeFromSide>} />
        <Flex left={<FadeFromSide left ><img className='rounded-[8px]' src='/lessons/day-1/session-1/13.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/14.png' /></FadeFromSide>} />
        <MainTitle>{t('firstLesson.21')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/15.png' /></FadeFromSide>} right={<div className='space-y-2'><FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/16.png' /></FadeFromSide><FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/17.png' /></FadeFromSide></div>} />
        <Paragraph>{t('firstLesson.22')}</Paragraph>
        <Paragraph>{t('firstLesson.23')}</Paragraph>
        <MainTitle>{t('firstLesson.24')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/18.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/19.png' /></FadeFromSide>} />
        <MainTitle>{t('firstLesson.25')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/20.png' /></FadeFromSide>} right={<div><Paragraph className='mb-0'>{t('firstLesson.26')}</Paragraph>
          <ul>
            <li>- {t('firstLesson.27')}</li>
            <li>- {t('firstLesson.28')}</li>
            <li>- {t('firstLesson.29')}</li>
          </ul>
        </div>} />
        <MainTitle>{t('firstLesson.30')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/21.png' /></FadeFromSide>} right={<div>
          <Paragraph dangerouslySetInnerHTML={{ __html: t('firstLesson.31') }} />
          <Paragraph dangerouslySetInnerHTML={{ __html: t('firstLesson.32') }} />
          <Paragraph dangerouslySetInnerHTML={{ __html: t('firstLesson.33') }} />
        </div>} />
        <MainTitle>{t('firstLesson.34')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/22.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/23.png' /></FadeFromSide>} />
        <MainTitle>{t('firstLesson.35')}</MainTitle>
        <Paragraph>{t('firstLesson.36')}</Paragraph>
        <Paragraph>{t('firstLesson.37')}</Paragraph>
        <ul>
          <li>- {t('firstLesson.38')}</li>
          <li>- {t('firstLesson.39')}</li>
        </ul>
        <MainTitle>{t('firstLesson.40')}</MainTitle>
        <Paragraph>{t('firstLesson.41')}</Paragraph>
        <ul>
          <li>- {t('firstLesson.42')}</li>
          <li>- {t('firstLesson.43')}</li>
        </ul>
        <MainTitle>{t('firstLesson.44')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/24.png' /></FadeFromSide>} right={
          <ul>
            <li>- {t('firstLesson.45')}</li>
            <li>- {t('firstLesson.46')}</li>
            <li>- {t('firstLesson.47')}</li>
            <li>- {t('firstLesson.48')}</li>
            <li>- {t('firstLesson.49')}</li>
          </ul>
        } />
        <MainTitle>{t('firstLesson.50')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/23.png' /></FadeFromSide>} right={<Paragraph>{t('firstLesson.51')}</Paragraph>} />
        <MainTitle>{t('firstLesson.52')}</MainTitle>
        <Paragraph>{t('firstLesson.53')}</Paragraph>
        <ul>
          <li>- {t('firstLesson.54')}</li>
          <li>- {t('firstLesson.55')}</li>
          <li>- {t('firstLesson.56')}</li>
          <li>- {t('firstLesson.57')}</li>
          <li>- {t('firstLesson.58')}</li>
          <li>- {t('firstLesson.59')}</li>
        </ul>
        <MainTitle>{t('firstLesson.60')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/26.png' /></FadeFromSide>} right={
          <ul>
            <li>- {t('firstLesson.61')}</li>
            <li>- {t('firstLesson.62')}</li>
          </ul>
        } />
        <MainTitle>{t('firstLesson.63')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/27.png' /></FadeFromSide>} right={
          <ul>
            <li>- {t('firstLesson.64')}</li>
            <li>- {t('firstLesson.65')}</li>
          </ul>
        } />
        {/* <MainTitle>{t('firstLesson.66')}</MainTitle>
        <Paragraph dangerouslySetInnerHTML={{ __html: t('firstLesson.67') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('firstLesson.68') }} /> */}
        <MainTitle>{t('firstLesson.69')}</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/28.png' /> </FadeFromSide>} right={
          <div>
            <Paragraph>{t('firstLesson.70')}</Paragraph>
            <Paragraph>{t('firstLesson.71')}</Paragraph>
          </div>
        } />
        <MainTitle>{t('firstLesson.72')}</MainTitle>
        <Paragraph>{t('firstLesson.73')}</Paragraph>
        <Paragraph>{t('firstLesson.74')}</Paragraph>
        <Paragraph>{t('firstLesson.75')}</Paragraph>
        <Paragraph>{t('firstLesson.76')}</Paragraph>
        <Paragraph>{t('firstLesson.77')}</Paragraph>
        <NextButton />
      </FlexWrapper>

    </>
  )
}
