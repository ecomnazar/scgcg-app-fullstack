import { MainTitle } from '../../main-title'
import { Paragraph } from '../../paragraph'
import { Flex } from '../../flex'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'
import { Image } from '../../image'

export const Session5 = () => {
  const source = '/lessons/day-5/session-1/en/'
  return (
    <>
      <MainTitle>Gender data</MainTitle>
      <FlexWrapper>
        <Paragraph>Generally, data is disaggregated by sex</Paragraph>
        <Paragraph>Sex-disaggregated statistics are part of gender statistics, but gender statistics are much broader</Paragraph>
        <Paragraph>1. SEX refers to the biological differences between women and men</Paragraph>
        <Paragraph>2. GENDER refers to the role of a woman or man in society, it is constructed over time</Paragraph>


        <MainTitle>Sex or gender ?</MainTitle>
        <Paragraph>1. After delivery the doctor will reveal to the mother the ____ of the child</Paragraph>
        <Paragraph>2. In order to understand the differences in enrolment rates between girls and boys, the data must be disaggregated by ____</Paragraph>
        <Paragraph>3. Women and men’s ______ roles in society determine how much time they spend doing domestic work</Paragraph>
        <Paragraph>4. ______ statistics include _____ disaggregated statistics and other ______ specific indicators that capture the realities and the differences in the lives of women and men</Paragraph>

        <MainTitle>Gender statistics</MainTitle>
        <Paragraph>Gender Statistics capture the specific realities in the lives of women and men Gender statistics go well beyond sex-disaggregation</Paragraph>
        <Paragraph>Gender statistics comprise:</Paragraph>
        <Paragraph>1. Sex-disaggregated data</Paragraph>
        <Paragraph>2. Data pertaining specifically to women or to men</Paragraph>
        <Paragraph>3. Data that captures specific gender issues (even when non explicit)</Paragraph>
        <Paragraph>Gender data cuts across all areas of sustainable development</Paragraph>

        <MainTitle>Are these gender statistics ?</MainTitle>
        <Paragraph>Proportion of population living in slums, by sex</Paragraph>
        <Paragraph>Maternal mortality ratios, per 100,000 live births</Paragraph>
        <Paragraph>Incidence of prostate cancer</Paragraph>
        <Paragraph>Tobacco use rates in China</Paragraph>
        <Paragraph>Proportion of households using clean fuels for cooking and heating</Paragraph>
        <Paragraph>Total value of inward and outward illicit financial flows, in USD</Paragraph>


        <MainTitle>Gender data Vs Gender statistics </MainTitle>
        <Flex left={<FadeFromSide left><Image source={source + '1.png'} /></FadeFromSide>} right={<div>
          <Paragraph>Gender data are data points for men, women or for issues that affect women or men particularly.</Paragraph>
          <Paragraph>Gender statistics are the estimates calculated utilizing gender data.</Paragraph>
          <Paragraph>In practice  both words are often used interchangeably.</Paragraph>
        </div>} />

        <MainTitle>The 2030 Agenda for Sustainable Development</MainTitle>
        <Flex left={<FadeFromSide left><Image source={source + '2.png'} /></FadeFromSide>} right={<div>
          <Paragraph>Adopted by all UN Member States in 2015</Paragraph>
          <Paragraph>Provides a shared blueprint for peace & prosperity for people and the planet.</Paragraph>
          <Paragraph>At its heart are the 17 Sustainable Development Goals (SDGs)</Paragraph>
          <Paragraph>Each of the 17 Goals include a series of targets</Paragraph>
          <Paragraph>To measure progress towards the targets we use more than 200 indicators</Paragraph>
          <Paragraph>The SDGs are a follow-up to the MDGs, but apply for developed and developing countries</Paragraph>
        </div>} />

        <MainTitle>Gender statitistcs and SDGs</MainTitle>
        <Flex left={<div>
          <Paragraph>Gender indicators are present across many SDG goals. Well beyond goal 5.</Paragraph>
          <Paragraph>Without gender equality the SDGs cannot be achieved</Paragraph>
          <Paragraph>Without gender statistics, inclusive progress towards the SDGs cannot be measured</Paragraph>
        </div>} right={<FadeFromSide><Image source={source + '3.png'} /></FadeFromSide>} />

        <NextButton />
      </FlexWrapper>

    </>
  )
}











