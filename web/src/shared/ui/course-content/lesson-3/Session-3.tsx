import { MainTitle } from '../../main-title'
import { Paragraph } from '../../paragraph'
import { Flex } from '../../flex'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'
import { Image } from '../../image'

export const Session3 = () => {
    const source = '/lessons/day-3/session-1/en/'
    return (
        <>
            <MainTitle>STRATEGIES TO ACHIEVE GENDER EQUALITY</MainTitle>
            <audio src='/sounds/en/lesson-3/1.wav' controls />
            <FlexWrapper>
                <FadeFromSide><Image source={source + '1.png'} /> </FadeFromSide>
                <MainTitle>Equality in law</MainTitle>
                <audio src='/sounds/en/lesson-3/2.wav' controls />
                <Paragraph>The oldest strategy, The longest fight Did not meet expetations Condicio sine qua non Necessary and important , but not sufficient</Paragraph>
                <Paragraph>1. Constitution</Paragraph>
                <Paragraph>2. Law on Gender Equality</Paragraph>
                <Paragraph>3. National Strategy for Gender Equality</Paragraph>
                <Paragraph>4. Various laws and policies with an integratet gender perspecitve</Paragraph>
                <MainTitle>Equal opportunities</MainTitle>
                <audio src='/sounds/en/lesson-3/3.wav' controls />
                <Flex left={<div>
                    <Paragraph>1. Response to unequal starting positions in society</Paragraph>
                    <Paragraph>2. They can be incorporated into laws</Paragraph>
                    <Paragraph>3. affirmative measures (quotas, policies for certain groups of people, people with disabilities, young, old, rural areas</Paragraph>
                    <Paragraph>4. Social justice matter</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '2.png'} /></FadeFromSide>} />
                <MainTitle>Gender mainstreaming</MainTitle>
                <audio src='/sounds/en/lesson-3/4.wav' controls />
                <Paragraph>„In addressing unequal access to
                    and inadequate educational
                    opportunities,
                    Governments and other actors
                    should promote an active and
                    visible policy of
                    mainstreaming a gender
                    perspective into all policies and
                    programmes, so that,
                    before decisions are taken, an
                    analysis is made of the effects on
                    women and men, respectively.“

                    Bejing Declararion and Platform for Action, 1995
                    paragraf 79.</Paragraph>
                <Paragraph>Gender equality is the goal, gender mainstreaming is the means to achieve this goal!</Paragraph>
                <Paragraph>Established as the main global strategy for promoting gender equality in the Beijing Platform for Action at the IV World Conference on Women (Beijing, 1995)</Paragraph>

                <MainTitle>Gender Mainstreaming</MainTitle>
                <audio src='/sounds/en/lesson-3/5.wav' controls />

                <Paragraph>One of the strategies to
                    support the goal of
                    gender equality.
                    Globally accepted by
                    governments and
                    international
                    organisations, promoted
                    by the UN and other
                    bilateral donors.</Paragraph>
                <Paragraph>It has two general approaches:</Paragraph>
                <Paragraph>1. the integration of gender
                    equality concerns into the
                    analyses and formulation of
                    all policies, programs and
                    projects; and</Paragraph>
                <Paragraph>2. the integration of gender
                    equality concerns into the
                    analyses and formulation of
                    all policies, programs and
                    projects; and</Paragraph>


                <MainTitle>TWIN TRACK APPROACH</MainTitle>
                <audio src='/sounds/en/lesson-3/6.wav' controls />
                <FadeFromSide><Image source={source + '3.png'} /></FadeFromSide>

                <MainTitle>Why is it so important ?</MainTitle>
                <audio src='/sounds/en/lesson-3/7.wav' controls />

                <Paragraph>1. Promotes social justice.</Paragraph>
                <Paragraph>2. Takes into account the diversity and different forms of mulitple discrimination</Paragraph>
                <Paragraph>3. Lead to gender equity</Paragraph>
                <Paragraph>4. Puts people at the heart of policy-making by highlighting the effects of policies on citizens’ lives.</Paragraph>
                <Paragraph>5. Leads to better governance and better-informed policy-making.</Paragraph>
                <Paragraph>6. Makes full use of human resources.</Paragraph>
                <Paragraph>7. Makes gender equality visible in the mainstream of society: gender equality is an essential development issue with implications and not a “luxury”.</Paragraph>

                <MainTitle>GENDER EQUITY</MainTitle>
                <audio src='/sounds/en/lesson-3/8.wav' controls />
                <FadeFromSide left><Image source={source + '4.png'} /></FadeFromSide>

                <MainTitle>What is required for successful gender mainstreaming ?</MainTitle>
                <audio src='/sounds/en/lesson-3/9.wav' controls />

                <Flex left={<FadeFromSide left><Image source={source + '5.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. Gender disaggregated statistics; data on the position of women and men.</Paragraph>
                    <Paragraph>2. Full gender analysis.</Paragraph>
                    <Paragraph>3. Clear objectives, targets and indicators that are gender sensitive.</Paragraph>
                    <Paragraph>4. Monitoring and reporting on change.</Paragraph>
                    <Paragraph>5. Dialogue with all and their ownership.</Paragraph>
                    <Paragraph>6. Resources, capacity and commitment (time allocation, resources, and expertise)</Paragraph>
                </div>} />

                <MainTitle>Gender transformative approaches</MainTitle>
                <audio src='/sounds/en/lesson-3/10.wav' controls />
                <Paragraph>1. Human rights based approach</Paragraph>
                <Paragraph>2. Power (take in consideration)</Paragraph>
                <Paragraph>3. Norms and values in sociaty (cose of discrimination)</Paragraph>
                <Paragraph>4. Gender and diversity (age, disability, expresion, sex characteristcs...)</Paragraph>
                <Paragraph>5. Empoverment of women and girls</Paragraph>
                <Paragraph>6. Engaging man and boys</Paragraph>

                <NextButton />
            </FlexWrapper>
        </>
    )
}
