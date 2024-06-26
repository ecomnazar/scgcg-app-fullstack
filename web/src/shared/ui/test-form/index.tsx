import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import React, { useContext } from 'react';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { setActiveCourseLS } from '@/shared/lib/localStorage';
import { BaseContext } from '@/app/providers/useContextProvider';
import 'swiper/css';
import { Button } from '../button';
import { FadeIn } from '../animation/fadeIn';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
    questions: {
        trueAnswer: number;
        question: string;
        successMessage: string;
        answers: string[];
        multiple?: boolean;
    }[]
    isLast?: boolean
}

export const TestForm: React.FC<Props> = ({ questions, isLast = false }) => {
    const { activeCourse, setActiveCourse } = useContext(BaseContext)
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0) // to show in which question we are
    const [answerIndex, setAnswerIndex] = React.useState([0]) // clicked answer index in each form
    const [showSubmit, setShowSubmit] = React.useState(true) // to show submit button or next button
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleSubmit = (trueAnswerIndex: number, multiple: boolean | undefined) => {
        if (multiple) {
            setShowSubmit(false)
        } else {

            if (answerIndex[0] === trueAnswerIndex) {
                setShowSubmit(false)
                // toast.success('Correct Answer')
            } else {
                toast.error(t('wrongAnswer'))
            }
        }

    }

    const handleNext = () => {
        if (activeIndex === questions.length - 1) {
            if (isLast) {
                navigate('/certificate')
                return
            }
            setActiveCourseLS(JSON.stringify([activeCourse[0] + 1, 0]))
            setActiveCourse([activeCourse[0] + 1, 0])
            return
        }
        swiperRef.current?.swiper.slideNext()
        setAnswerIndex([0])
        setShowSubmit(true)
    }

    return (
        <FadeIn>
            <div className='w-full'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    ref={swiperRef}
                    simulateTouch={false}
                    allowTouchMove={false}
                    onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className="h-full w-full"
                >
                    {questions.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className=''>
                                    <h2 className='text-[21px] mb-4'>{item.question}</h2>
                                    <div className='space-y-4 mb-4'>
                                        {item.answers.map((answer, idx2) => {
                                            return (<div onClick={() => {
                                                if (item.multiple) {
                                                    const hasEqual = answerIndex.some((ai) => ai === idx2)
                                                    if (hasEqual) {
                                                        setAnswerIndex((prev) => prev.filter((pr) => pr !== idx2))
                                                    } else {
                                                        setAnswerIndex((prev) => [...prev, idx2])
                                                    }
                                                } else {
                                                    setAnswerIndex([idx2])
                                                }
                                            }} key={idx2} className="relative border-primary border rounded-md p-3 w-full pr-12">
                                                {answer}
                                                <div className="absolute top-1/2 -translate-y-1/2 right-[10px] p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                                    <div className={clsx(" rounded-full w-full h-full", {
                                                        ['bg-primary/50']: answerIndex.some((answr) => answr === idx2)
                                                    })}></div>
                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                    {!showSubmit && <p className='mb-4'>{item.successMessage === 'true' ? `${t('correctAnswers')} 🎉` : item.successMessage}</p>}
                                    {showSubmit ?
                                        <Button onClick={() => handleSubmit(item.trueAnswer, item.multiple)} title={'Submit'} />
                                        : <Button onClick={handleNext} title={'Next'} />}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    {/* <SwiperSlide><TestForm swiperRef={swiperRef} correctAnswer={correctAnswer} questionText={questionText} answers={questionAndAnswer} isLast={true} /></SwiperSlide> */}
                </Swiper>
                <h4 className='mt-2'>{activeIndex + 1}/{questions.length}</h4>
            </div>
        </FadeIn>
    )
}
