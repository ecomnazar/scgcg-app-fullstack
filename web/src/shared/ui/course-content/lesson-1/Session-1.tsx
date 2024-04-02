import { MainTitle } from '../../main-title'
import { Paragraph } from '../../paragraph'
import { Flex } from '../../flex'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'

export const Session1 = () => {
  return (
    <>
      <MainTitle>Gender, GENDER NORMS And Gender  Equality</MainTitle>
      <FlexWrapper>
        <Flex
          left={
            <Paragraph>„Parents of the first children born on Ashgabat’s anniversary receive gifts on behalf of the head of the state“ Published 25.05.2021</Paragraph>
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
          <Paragraph>What is the sex of the children ? </Paragraph>
          <Paragraph>How do you know ?</Paragraph>
        </div>} />
        <Flex
          left={
            <Paragraph>Dresses end uniforms Girls and boys </Paragraph>
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
          right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/5.png' /></FadeFromSide>}
        />
        <Paragraph>Sex – biological , anatomical, physiological characteristic that  distinguish women and man </Paragraph>
        <Paragraph>Gender – set of socialy determent characteristics of one sex, probably created with origin devison of labor (prehistory),survived even when it lost its original function as instrument of sex politics in sociaty; it is renewed in each individual in the process of growing up and education thanks to its apparent naturalness </Paragraph>
        <MainTitle>Gender norms and regime in sociaty </MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/6.png' /></FadeFromSide>} right={<Paragraph>In every society, in every community, there are gender regimes. They determine how women and man participate in diferent  spheres of society (public and private); within them all our relationships are established, including  our family life  and partner relationships.</Paragraph>} />
        <MainTitle>Gender regime (system)</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/7.png' /></FadeFromSide>} right={<FadeFromSide> <img className='rounded-[8px]' src='/lessons/day-1/session-1/8.png' /></FadeFromSide>} />
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/9.png' /></FadeFromSide>} right={<FadeFromSide> <img className='rounded-[8px]' src='/lessons/day-1/session-1/10.png' /></FadeFromSide>} />
        <MainTitle>Gender norms and gender regime </MainTitle>
        <Flex left={<FadeFromSide left ><img className='rounded-[8px]' src='/lessons/day-1/session-1/11.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/12.png' /></FadeFromSide>} />
        <Flex left={<FadeFromSide left ><img className='rounded-[8px]' src='/lessons/day-1/session-1/13.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/14.png' /></FadeFromSide>} />
        <MainTitle>Gender roles</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/15.png' /></FadeFromSide>} right={<div className='space-y-2'><FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/16.png' /></FadeFromSide><FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/17.png' /></FadeFromSide></div>} />
        <Paragraph>Gender roles are learned in the processes of socialization and growing up; gender rules are adopted from culture, parents, peers, school, media, customs, religion, market, art...Gender roles are learned in the processes of socialization and growing up; gender rules are adopted from culture, parents, peers, school, media, customs, religion, market, art...</Paragraph>
        <Paragraph>Gender roles are  the sum of characteristics, ways of behaving, attitudes, activities, norms, obligations and expectations that a certain society or culture assigns and demands from people bering in mind  their sex</Paragraph>
        <NextButton />

      </FlexWrapper>

    </>
  )
}
