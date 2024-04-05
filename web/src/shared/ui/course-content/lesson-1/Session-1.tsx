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
                <ul>
                  <li>- Biological differences</li>
                  <li>- Mostly unchangeable</li>
                  <li>- The same in all times and at all places in the world</li>
                </ul>
              </div>
              <div>
                <Paragraph className='mb-0'>Gender</Paragraph>
                <ul>
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
        <MainTitle>Gender roles  and gender norms</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/18.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/19.png' /></FadeFromSide>} />
        <MainTitle>Social  context</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/20.png' /></FadeFromSide>} right={<div><Paragraph className='mb-0'>Sex</Paragraph>
          <ul>
            <li>- Biological differences</li>
            <li>- Mostly unchangeable</li>
            <li>- The same in all times and at all places in the world</li>
          </ul>
        </div>} />
        <MainTitle>Triple  gender roles</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/21.png' /></FadeFromSide>} right={<div>
          <Paragraph>REPRODUCTIVE ROLE<br />Giving birth and raising children Domestic work (unpaid work) </Paragraph>
          <Paragraph>PRODUCTIVE ROLE<br />Paid job (labor market) They are seen through the gender segregation of occupations </Paragraph>
          <Paragraph>COMMUNITY ROLE<br />Which are created and maintained in the public sphere, outside the household </Paragraph>
        </div>} />
        <MainTitle>Political  context</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/22.png' /></FadeFromSide>} right={<FadeFromSide><img className='rounded-[8px]' src='/lessons/day-1/session-1/23.png' /></FadeFromSide>} />
        <MainTitle>Political  context</MainTitle>
        <Paragraph>Women do not constitute  majority at any level of goverment</Paragraph>
        <Paragraph>Differences in the ways women and men obtain and share power and authority: </Paragraph>
        <ul>
          <li>- Men are dominnat  in national and high-ranking politics</li>
          <li>- Women are more present at the local level and in local activities related to their roles in the household (but not in majority)</li>
        </ul>
        <MainTitle>Educational  context </MainTitle>
        <Paragraph>Differences in educational opportunities and different expectations from girls and boys: </Paragraph>
        <ul>
          <li>- the family directs the education of boys before girls; </li>
          <li>- girls mostly go to less prestigious courses and and choose a profession close to their gender role</li>
        </ul>
        <MainTitle>Economic context</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/24.png' /></FadeFromSide>} right={
          <ul>
            <li>- Differences in career opportunities,  </li>
            <li>- Equal pay for equal work and work of equal value,</li>
            <li>- Control over finances,</li>
            <li>- Obtaining credit and loans, </li>
            <li>- Ownership of land...</li>
          </ul>
        } />
        <MainTitle>Gender and security</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/23.png' /></FadeFromSide>} right={<Paragraph>Gender differences are also noticeable when taking into account the sense of security of the surveyed citizens of both sexes in their country, region or house/apartment</Paragraph>} />
        <MainTitle>Why is gender our question ?</MainTitle>
        <Paragraph>Unequal positions of women and men in the society</Paragraph>
        <ul>
          <li>- Differently distributed political power (decision-making, representation)  </li>
          <li>- Inequalities in private sphere (in domestic, unpaid work)</li>
          <li>- Differences in legal status (inheriting, property ownership...)</li>
          <li>- Gender distribution of work within economy</li>
          <li>- Violence against women, as the most prevalent form of human rights violations</li>
          <li>- Discriminatory attitudes and practice</li>
        </ul>
        <MainTitle>Gender equality</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/26.png' /></FadeFromSide>} right={
          <ul>
            <li>- Gender equality implies equal representation, power and participation of both sexes in all spheres of public and private life.</li>
            <li>- Gender equality aims to promote the full participation of women and men in society</li>
          </ul>
        } />
        <MainTitle>Women’s Human Rights </MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/27.png' /></FadeFromSide>} right={
          <ul>
            <li>- Specific violation or non-implementation of women's rights because they are women. </li>
            <li>- They are not  new generation of  human rights, but request  for the  series of measures/actions that the state should take to ensure equal enjoyment/respect of human rights for women</li>
          </ul>
        } />
        <MainTitle>Feminism and/or Gender equality</MainTitle>
        <Paragraph>Women's Rights Movement<br />
          Founded and led by women<br />
          It demands women's rights, equal opportunities, equal participation<br />
          Key words WOMEN'S RIGHTS<br />
          Theory and practice<br />
          Activists and scientists</Paragraph>
        <Paragraph>
          A policy that advocates equality under the law, equal opportunities and equal outcomes<br />
          Key word  EQUALITY<br />
          It requires changing the roles of women and men Women (dominantly) and men participate<br />
          The huge role of international organizations, the state, experts and activists<br />
          It is not possible without feminism
        </Paragraph>
        <MainTitle>Gender equality & gender equity</MainTitle>
        <Flex left={<FadeFromSide left><img className='rounded-[8px]' src='/lessons/day-1/session-1/28.png' /> </FadeFromSide>} right={
          <div>
            <Paragraph>Gender equality means the absence of discrimination based on sex/gender. It means equal rights in social, economic and political life </Paragraph>
            <Paragraph>Gender equity (equal chances) to be fair, just and provide equal rights to men and women. It includes fairness (fair relations) and justice between men and women in the distribution of responsibilities, access and control over resources and welfare</Paragraph>
          </div>
        } />
        <MainTitle>Terminology</MainTitle>
        <Paragraph>Gender awareness is the understanding that there are socially determined differences between women and men, based on learned behavior. This affects their ability to access and control resources. This awareness should be applied through gender analysis in projects, programs and policies.</Paragraph>
        <Paragraph>Gender mainstreaming is the process of ensuring that men and women have equal access to and control over resources, benefits from development and decision-making at all levels of development processes, programs and policies</Paragraph>
        <Paragraph>Gender sensitivity  implies the possibility to accept and highlight existing gender differences, issues and inequalities and to include them in strategies and activities</Paragraph>
        <Paragraph>Gender equity means enabling fairness and justice in the distribution of benefits and obligations between men and women. This concept recognizes that women and men have different needs and power and that these differences should be identified and addressed in a way that recognize the lack of gender balance.</Paragraph>
        <Paragraph>Gender glassesis the concept of putting on a pair of glasses through which we view our community. Through one glass we see the participation, needs and realities of women. With the other, we see the participation, needs and realities of men. Our view, or what we see, is a combination of both. It is necessary to see through both glasses (eyes), because looking through only one eye does not give us the true picture of things. Just as we need both eyes to see best, so we need partnerships and relationships between men and women in our communities, based on equality in order to have a fairer society</Paragraph>
        <NextButton />
      </FlexWrapper>

    </>
  )
}
