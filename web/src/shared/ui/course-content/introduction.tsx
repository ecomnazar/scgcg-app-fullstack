import { MainTitle } from '../main-title'
import { Paragraph } from '../paragraph'
import { NextButton } from '../button/nextButton'

export const Introduction = () => {
    return (
        <>
            <MainTitle className='mb-8'>Gender Mainstreaming On-line Cours for Civil Servants <br /><span>UNDP Turkmenistan</span></MainTitle>
            <Paragraph className='text-[21px] font-semibold'>INTRODUCTION </Paragraph>
            <Paragraph>You are about to attend Gender Mainstreaming on line course for public servant in Turkmenistan.</Paragraph>
            <Paragraph>Gender equality is one of the greatest visions of humanity and at the same time a global strategy of the United Nations for achieving equality and implementing human rights. Through Agenda 2030, as well as through other international conventions and declarations, UN support all member states of the United Nations to their commitment to achieving gender equality.</Paragraph>
            <Paragraph> According to the Article 29 of the Сonstitution of Turkmenistan, men and women in Turkmenistan enjoy equal rights and freedoms, as well as equal opportunities to exercise them. The violation of equality on the grounds of sex is punishable by law.</Paragraph>
            <Paragraph>Also, through the Law on Equal Rights and Equal Opportunities for Women and Men, from 2015, our country is committed that achieving equal rights and opportunities for boys and girls, women and men will be one of the government priorities.</Paragraph>
            <Paragraph>However, achieving equality is not an easy task, and requires the full commitment of the entire society, especially the institutions of the government.</Paragraph>
            <Paragraph>That is why this course is intended for civil servants in order to enable them to understand their role in achieving gender equality and improve their knowledge in this area.</Paragraph>
            <Paragraph>The course is organized through six lessons. Each lesson offers definitions of terms, examples, and short videos that illustrate or further explain the lesson. At the end of each lesson there is a short test that you need to complete to show that you have mastered the knowledge.</Paragraph>
            <Paragraph>After completing the course, you will receive a certificate.</Paragraph>
            <NextButton />
        </>
    )
}
