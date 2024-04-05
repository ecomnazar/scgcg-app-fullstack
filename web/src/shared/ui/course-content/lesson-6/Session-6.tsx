import { MainTitle } from '../../main-title'
import { Paragraph } from '../../paragraph'
import { FadeIn } from '../../animation/fadeIn'
import { Flex } from '../../flex'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'
import { Image } from '../../image'

export const Session6 = () => {
  const source = '/lessons/day-6/session-1/en/'

  return (
    <>
      <MainTitle>6</MainTitle>
      <FlexWrapper>
        <MainTitle>Tools for Gender Mainstreaming</MainTitle>
        <FadeFromSide left><Image source={source + '1.png'} /></FadeFromSide>

        <MainTitle>Gender Analysis</MainTitle>
        <Paragraph>A gender analysis is a systematic process that identifies, understands, and describes gender differences and the relevance of gender roles and power dynamics in a particular context. It is based on sex-disaggregated data and gender information.</Paragraph>
        <Paragraph>1. To estimame an activity considering the different needs of women and man;</Paragraph>
        <Paragraph>2. To have data classified by gender (participant, user, etc.).</Paragraph>
        <Paragraph>3. The multitude of methods by which we understand the relationships between women and men, their access to resources, their activities, and the constraints they face</Paragraph>

        <MainTitle>LEVEL OF GENDER ANALYSIS</MainTitle>
        <Flex left={<div>
          <Paragraph>The national level: <br />National strategies and actionplans, public expenditure programmes/budgets, legislation, regulations and procedures, operational guidelines</Paragraph>
          <Paragraph>The sub-national level: <br />Provincial or district development plans, policies, strategies, budgets, legislations, regulations and procedures</Paragraph>
        </div>} right={<div>
          <Paragraph>The municipal/community level: <br />Municipal or community development plans, education, infrastructure, economics and any other planning process</Paragraph>
          <Paragraph>The program/project level: <br />As a standard part of a program or project planning process</Paragraph>
        </div>} />

        <MainTitle>STEPS IN GENDER ANALYSIS</MainTitle>
        <FadeFromSide left><Image source={source + '2.png'} /></FadeFromSide>
        <Paragraph>1. Who uses health services more: women or men?</Paragraph>
        <Paragraph>2. Do men and women have the same income to pay for these services ?</Paragraph>
        <Paragraph>3. Who will pay the co-payment for children and the elderly, especially in single-parent families?</Paragraph>
        <Paragraph>4. Will participation mean that people will stay shorter in hospitals? Will people stay at home for treatment? Who will take care of them?</Paragraph>
        <Paragraph>5. How will this affect women's economy, social and other aspects of life?</Paragraph>
        <Paragraph>6. How will this affect the children?</Paragraph>
        <Paragraph>There are differences between men and women in terms of:</Paragraph>
        <Paragraph>1. Information and preferred methods of information before and during an emergency situation</Paragraph>
        <Paragraph>2. Possibilities for evacuation</Paragraph>
        <Paragraph>3. Needs during accommodation in collective centers are diferent</Paragraph>
        <Paragraph>4. Difficulty returning to housing</Paragraph>
        <Paragraph>5. Difficulty in the rehabilitation period</Paragraph>

        <MainTitle>DATA COLLECTION</MainTitle>
        <Paragraph>1. Collect gender data relevant to the program/project (e.g. data from national agencies/ministries, national and international reports, reports from women’s organisations, and shadow CEDAW reports).</Paragraph>
        <Paragraph>2. Collect sex-disaggregated household, workplace, and community data (national statistical office)</Paragraph>
        <Paragraph>3. Understand the different needs, priorities, and strengths (strategic and practical needs) of different women, different men</Paragraph>
        <Paragraph>4. Understand dominant local gender relations, beliefs, and perceptions, including stereotypes about groups (e.g., minorities, migrants, and people with disabilities).</Paragraph>
        <Paragraph>5. Assess the barriers and constraints to different genders participating and benefiting equally from the program/project.</Paragraph>
        <Paragraph>6. Consider the culture and local context.</Paragraph>
        <Paragraph>7. Engage with CSOs to understand the inequalities/gender gaps that may be prevalent in the area but may not be widely referred to.</Paragraph>
        <Paragraph>8. Ensure Do No Harm.</Paragraph>

        <MainTitle>Gender based violence,</MainTitle>
        <FadeFromSide><Image source={source + '3.png'} /></FadeFromSide>

        <MainTitle>Gender based violence, data</MainTitle>
        <Flex left={<FadeFromSide left><Image source={source + '4.png'} /></FadeFromSide>} right={<FadeFromSide><Image source={source + '5.png'} /></FadeFromSide>} />

        <MainTitle>How to analyse</MainTitle>
        <Flex left={<FadeFromSide left><Image source={source + '6.png'} /> </FadeFromSide>} right={<div>
          <Paragraph>1. Young women are more dissatisfied with measures to support the family than young men.</Paragraph>
          <Paragraph>2. Men find that the state helps young married couples start a family on level 2.55 (out of 5) compared to young women (2.35).</Paragraph>
          <Paragraph>3. Outside the labour force (15-74) due to the care work, women make up 90,4%.</Paragraph>
          <Paragraph>4. The NEET population rate amounts to 66.7%, out of which 74.6% are women.</Paragraph>
          <Paragraph>5. Coverage of children (3 – 5,5 years) by preschool education in 2021 was 65,8%.</Paragraph>
        </div>} />

        <MainTitle>Gender analysis – agriculture</MainTitle>
        <FadeFromSide left><Image source={source + '7.png'} /></FadeFromSide>
        <FadeFromSide><Image source={source + '8.png'} /></FadeFromSide>

        <MainTitle>Gender analysis frameworks</MainTitle>

        <Paragraph>1. Harvard Analitical Framework (aktivites, resources, norms)</Paragraph>
        <Paragraph>2. Moser framework – Assesment of gender needs (strategic and practical needs )</Paragraph>
        <Paragraph>3. Gender analysis matrix</Paragraph>
        <Paragraph>4. Framework of women’s empverment</Paragraph>
        <Paragraph>5. Analysis of community capacities and weekneses</Paragraph>
        <Paragraph>6. Social relation analysis</Paragraph>
        <Paragraph>7. GEA model (Gender and Empowerment Impact Assessment)</Paragraph>
        <Paragraph>8. Who works in the institution</Paragraph>
        <Paragraph>9. In which jobs and in which positions </Paragraph>
        <Paragraph>10. Measures for improvement</Paragraph>
        <Paragraph>11. Internal procedures and rule books</Paragraph>
        <Paragraph>12. Internal recruitment and promotion policies</Paragraph>
        <Paragraph>13. The culture of the institution</Paragraph>
        <Paragraph>14. Who receives services - who are the benefiaries ?</Paragraph>
        <Paragraph>15. Who are the interventions intended for?</Paragraph>
        <Paragraph>16. Who has the advantage ?</Paragraph>
        <Paragraph>17. Who never came to the institution?</Paragraph>
        <Paragraph>18. Analysis of procedures, rules, programs</Paragraph>
        <Paragraph>19. Analysis of working tools and resources</Paragraph>

        <MainTitle>Gender mainstreaming in parking services</MainTitle>
        <FadeFromSide left><Image source={source + '9.png'} /></FadeFromSide>

        <Paragraph>1. Who participates in defining public policies</Paragraph>
        <Paragraph>2. How the goals were formulated</Paragraph>
        <Paragraph>3. Who implements public policies</Paragraph>
        <Paragraph>4. How the funds are distributed</Paragraph>
        <Paragraph>5. Who has access to resources</Paragraph>
        <Paragraph>6. What are the results?</Paragraph>
        <Paragraph>7. What has changed in the long run</Paragraph>

        <MainTitle>GENDER RELEVANCE</MainTitle>
        <Paragraph>1. The relevance discussion aims to identify the key entry points for the gender equality analysis.</Paragraph>
        <Paragraph>2. It is relevant to ask questions beyond the narrow policy area and identify macro-level links with other policy areas and global agendas.</Paragraph>
        <Paragraph>3. What are the relevant aspects in the country for gender equality in your sector?</Paragraph>

        <NextButton />
      </FlexWrapper>

    </>
  )
}














