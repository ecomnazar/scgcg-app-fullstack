import { MainTitle } from '../../main-title'
import { Paragraph } from '../../paragraph'
import { FadeIn } from '../../animation/fadeIn'
import { Flex } from '../../flex'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'

export const Session5 = () => {
  return (
    <>
      <MainTitle>5</MainTitle>
      <FlexWrapper>
        <Flex
          left={
            <Paragraph>„Parents of the first children born on Ashgabat’s anniversary receive gifts on behalf of the head of the state“ Published 25.05.2021</Paragraph>
          }
          right={
            <FadeIn><img className='rounded-[8px]' src='/lessons/day-1/session-1/1.png' /></FadeIn>
          }
        />
        <Flex left={<FadeIn><img className='rounded-[8px]' src='/lessons/day-1/session-1/2.png' /></FadeIn>} right={<div>
          <Paragraph>What is the sex of the children ? </Paragraph>
          <Paragraph>How do you know ?</Paragraph>
        </div>} />
        <Flex
          left={
            <Paragraph>Dresses end uniforms Girls and boys </Paragraph>
          }
          right={
            <FadeIn><img className='rounded-[8px]' src='/lessons/day-1/session-1/3.png' /></FadeIn>
          }
        />
        <FadeIn><img className='rounded-[8px]' src='/lessons/day-1/session-1/4.png' /></FadeIn>
        <MainTitle>Sex & Gender</MainTitle>
        <Flex
          left={
            <div className='space-y-4'>
              <div>
                <Paragraph className='mb-0'>Sex</Paragraph>
                <ul className='translate-x-2'>
                  <li>- Biological differences</li>
                  <li>- Mostly unchangeable</li>
                  <li>- The same in all times and at all places in the world</li>
                </ul>
              </div>
              <div>
                <Paragraph className='mb-0'>Gender</Paragraph>
                <ul className='translate-x-2'>
                  <li>- Socialy constructed differences among women and man</li>
                  <li>- They are changable</li>
                  <li>- They are shape in time and space (different in different places)</li>
                </ul>
              </div>
            </div>
          }
          right={
            <FadeIn><img className='rounded-[8px]' src='/lessons/day-1/session-1/5.png' /></FadeIn>
          }
        />
        <Paragraph>Sex – biological , anatomical, physiological characteristic that  distinguish women and man </Paragraph>
        <Paragraph>Gender – set of socialy determent characteristics of one sex, probably created with origin devison of labor (prehistory),survived even when it lost its original function as instrument of sex politics in sociaty; it is renewed in each individual in the process of growing up and education thanks to its apparent naturalness </Paragraph>
        <MainTitle>Gender norms and regime in sociaty </MainTitle>
        <Flex left={<FadeIn><img className='rounded-[8px]' src='/lessons/day-1/session-1/6.png' /></FadeIn>} right={<Paragraph>In every society, in every community, there are gender regimes. They determine how women and man participate in diferent  spheres of society (public and private); within them all our relationships are established, including  our family life  and partner relationships.</Paragraph>} />
        <MainTitle>Gender  regime (system)</MainTitle>
        <Flex left={<img className='rounded-[8px]' src='/lessons/day-1/session-1/7.png' />} right={<img className='rounded-[8px]' src='/lessons/day-1/session-1/8.png' />} />
        <Flex left={<img className='rounded-[8px]' src='/lessons/day-1/session-1/9.png' />} right={<img className='rounded-[8px]' src='/lessons/day-1/session-1/10.png' />} />
        <MainTitle>Gender norms and gender regime </MainTitle>
        <Flex left={<img className='rounded-[8px]' src='/lessons/day-1/session-1/11.png' />} right={<img className='rounded-[8px]' src='/lessons/day-1/session-1/12.png' />} />
        <Flex left={<img className='rounded-[8px]' src='/lessons/day-1/session-1/13.png' />} right={<img className='rounded-[8px]' src='/lessons/day-1/session-1/14.png' />} />
        <MainTitle>Gender roles</MainTitle>
        <Flex left={<img className='rounded-[8px]' src='/lessons/day-1/session-1/15.png' />} right={<div className='space-y-2'><img className='rounded-[8px]' src='/lessons/day-1/session-1/16.png' /><img className='rounded-[8px]' src='/lessons/day-1/session-1/17.png' /></div>} />
        <Paragraph>Gender roles are learned in the processes of socialization and growing up; gender rules are adopted from culture, parents, peers, school, media, customs, religion, market, art...Gender roles are learned in the processes of socialization and growing up; gender rules are adopted from culture, parents, peers, school, media, customs, religion, market, art...</Paragraph>
        <Paragraph>Gender roles are  the sum of characteristics, ways of behaving, attitudes, activities, norms, obligations and expectations that a certain society or culture assigns and demands from people bering in mind  their sex</Paragraph>
        <NextButton />
      </FlexWrapper>

    </>
  )
}
