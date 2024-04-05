import { Flex } from '../../flex'
import { Paragraph } from '../../paragraph'
import { MainTitle } from '../../main-title'
import { FlexWrapper } from '../../flex-wrapper'
import { NextButton } from '../../button/nextButton'
import { FadeFromSide } from '../../animation/fadeFromSide'
import { Image } from '../../image'

export const Session2 = () => {
    const source = '/lessons/day-2/session-1/'
    return (
        <>
            <MainTitle>Equality</MainTitle>
            <FlexWrapper>
                <FadeFromSide left><Image source={source + '1.png'} /></FadeFromSide>
                <MainTitle>EQUALITY  Vs DISCRIMINATION</MainTitle>
                <Flex left={<FadeFromSide left><Image source={source + '3.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>What is  discrimination ?</Paragraph>
                    <Paragraph>lat. discriminare – to separate,  make a difference </Paragraph>
                    <Paragraph>"Discriminate", "separate", "make a difference“ , means  impermissible  distinction between people </Paragraph>
                    <Paragraph>Unequal (less favorable treatment) of individuals and groups, based on their personal characteristics</Paragraph>
                </div>} />
                <MainTitle>Identity, uniqe personality</MainTitle>
                <Flex left={<div>
                    <Paragraph>Identity - what defines us as individuals and makes us unique personalities
                        Identity is like an onion - each layer represents a part of the identity
                    </Paragraph>
                    <Paragraph className='mb-0'>Elements of identity</Paragraph>
                    <ul>
                        <li>1. Elements of identity </li>
                        <li>2. The influence of eenvironment - citizenship, place of residence, gender role... </li>
                        <li>3. Own choices - marital and family status, political conviction, union membership...</li>
                    </ul>
                    <Paragraph>Changeable and unchangeable parts of identity. Each person is a complex, unique and irreplaceable individual.</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '4.png'} /></FadeFromSide>} />
                <MainTitle> What drive discrimination?</MainTitle>
                <FadeFromSide><Image source={source + '5.png'} /></FadeFromSide>
                <MainTitle>Gender stereotypes</MainTitle>
                <Flex left={<FadeFromSide left><Image source={source + '6.png'} /></FadeFromSide>} right={<FadeFromSide><Image source={source + '7.png'} /></FadeFromSide>} />
                <MainTitle>Stereotypes:</MainTitle>
                <Flex left={<ul>
                    <Paragraph>1. perpetuate inequality</Paragraph>
                    <Paragraph>2. maintain gender roles</Paragraph>
                    <Paragraph>3. reduce the understanding of the concept of human rights</Paragraph>
                    <Paragraph>4. It is not easy to recognize or reduce them</Paragraph>
                </ul>} right={<FadeFromSide><Image source={source + '8.png'} /></FadeFromSide>} />
                <MainTitle>Prejudices</MainTitle>
                <Flex left={<div>
                    <Paragraph>Prejudice - a hostile or negative attitude towards a recognizable group of people, which is based solely on their belonging to that group </Paragraph>
                    <Paragraph>Praejudicium - prae (in advance) and judicium (to judge) - judging in advance </Paragraph>
                    <Paragraph>A preconceived opinion not based on any reasonable ground or actual state of affairs</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '9.png'} /></FadeFromSide>} />
                <MainTitle>Prejudices, emotional  part</MainTitle>
                <Paragraph>People with prejudices direct their prejudices towards members of the group as a whole, ignoring the personal characteristics that make these people different from each other.</Paragraph>
                <Paragraph>1. Negative feeling, discomfort, fear ...</Paragraph>
                <Paragraph>2. They make us to  interpret other people and situations as threatening to ourselves.</Paragraph>
                <Paragraph>3. We act like we have  to protect ourselves, which leads to discriminatory behevior.</Paragraph>
                <MainTitle>Causes of sterotypes and prejudice</MainTitle>
                <Flex left={<FadeFromSide left><Image source={source + '10.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. Thinking processes</Paragraph>
                    <Paragraph>2. Biases towards own and other groups</Paragraph>
                    <Paragraph>3. Conformism</Paragraph>
                    <Paragraph>4. Allocation of resources</Paragraph>
                </div>} />
                <MainTitle>Thinking processes</MainTitle>
                <Flex left={<FadeFromSide left><Image source={source + '11.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. Stereotypes and prejudice – accompanying process of interpretaion of information</Paragraph>
                    <Paragraph>2. Large amount of information</Paragraph>
                    <Paragraph>3. Limited cognitive capacity</Paragraph>
                    <Paragraph>4. Social categorization (we and them)</Paragraph>
                </div>} />
                <MainTitle>Social categorization “US and Them"</MainTitle>
                <Flex left={<FadeFromSide left><Image source={source + '12.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. We put information about group members into categories </Paragraph>
                    <Paragraph>2. We reduce the differences between the members of those groups </Paragraph>
                    <Paragraph>3. And overestimate the differences between the groups</Paragraph>
                </div>} />
                <MainTitle>Conformity</MainTitle>
                <Flex left={<div>
                    <Paragraph>1. Compliance with social norms For our society, a certain belief is common</Paragraph>
                    <Paragraph>2. Throughout our childhood, we adopted beliefs through socialization processes - for example. our parents passed on to us stereotypes about women and men</Paragraph>
                    <Paragraph>3.  If we want to meet the expectations of the group and get approval from the group - we behave in accordance with social norms</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '13.png'} /></FadeFromSide>} />
                <MainTitle>Allocation of  resources</MainTitle>
                <Flex left={<div>
                    <Paragraph>1. Bidding for gaining a greater share of limited resources</Paragraph>
                    <Paragraph>2. Political position</Paragraph>
                    <Paragraph>3. Social power</Paragraph>
                    <Paragraph>3. Achieving a goal</Paragraph>
                    <Paragraph>3. Scarce resources have been found to lead to conflict between groups and result in increased prejudice and discrimination</Paragraph>
                </div>} right={<FadeFromSide><Image source={source + '14.png'} /></FadeFromSide>} />
                <MainTitle> What drive discrimination?</MainTitle>
                <FadeFromSide left><Image source={source + '15.png'} /></FadeFromSide>
                <MainTitle>The consequences of stereotypes and prejudices</MainTitle>
                <Flex left={<FadeFromSide left><Image source={source + '16.png'} /></FadeFromSide>} right={<div>
                    <Paragraph>1. We rationalize discrimination</Paragraph>
                    <Paragraph>2. We are spinning in a vicious circle of self-fulfilling prophecy </Paragraph>
                    <Paragraph>3. Members of groups that are the target of stereotypes have lowered self-esteem and lower sense of self-efficacy </Paragraph>
                    <Paragraph>4. Weaker mental health</Paragraph>
                    <Paragraph>5. Less work efficiency, more absenteeism, more resignations, less promotion </Paragraph>
                    <Paragraph>6. We unconsciously confirm stereotypes</Paragraph>
                    <Paragraph>7. Stigmatization and marginalization</Paragraph>
                </div>} />
                <MainTitle>Modern prejudices</MainTitle>
                <Paragraph>Due to the insistence on political correctness, most people avoid clearly expressing their stereotypes and prejudices, but when we ask more subtle questions, we recognize  the so-called modern prejudices</Paragraph>
                <Paragraph>1. The discrimination against a certain group is denied</Paragraph>
                <Paragraph>2. The group  claim too many rights</Paragraph>
                <Paragraph>3. The state pays too much attention to their rights</Paragraph>
                <Paragraph>4. The attitude that  existing state of society should be maintained</Paragraph>
                <NextButton />
            </FlexWrapper>
        </>
    )
}
