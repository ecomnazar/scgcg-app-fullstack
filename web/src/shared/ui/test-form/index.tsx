import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import React, { useContext } from 'react';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { setActiveCourseLS } from '@/shared/lib/localStorage';
import { BaseContext } from '@/app/providers/useContextProvider';
import 'swiper/css';
import { Button } from '../button';
import { FadeIn } from '../animation/fadeIn';

interface Props {
    questions: {
        trueAnswer: number;
        question: string;
        answers: string[];
    }[]
}

export const TestForm: React.FC<Props> = ({ questions }) => {
    const { activeCourse, setActiveCourse } = useContext(BaseContext)
    const swiperRef = React.useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [answerIndex, setAnswerIndex] = React.useState(0)

    const handleClick = (trueAnswerIndex: number) => {
        if (answerIndex === trueAnswerIndex) {
            setAnswerIndex(0)
            toast.success('True')
            if (activeIndex === questions.length - 1) {
                setActiveCourseLS(JSON.stringify([activeCourse[0] + 1, 0]))
                setActiveCourse([activeCourse[0] + 1, 0])
                return
            }
            swiperRef.current?.swiper.slideNext()
            return
        }
        toast.error('Not true')
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
                                    <h2 className='mb-4'>{item.question}</h2>
                                    <div className='space-y-4 mb-4'>
                                        {item.answers.map((answer, idx2) => {
                                            return (<div onClick={() => {
                                                setAnswerIndex(idx2)
                                            }} key={idx2} className="relative border-primary border rounded-md p-3 w-full pr-12">
                                                {answer}
                                                <div className="absolute top-1/2 -translate-y-1/2 right-[10px] p-[5px] border border-primary rounded-md w-[20px] h-[20px]">
                                                    <div className={clsx(" rounded-full w-full h-full", {
                                                        ['bg-primary/50']: idx2 === answerIndex
                                                    })}></div>
                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                    <Button onClick={() => handleClick(item.trueAnswer)} title={'Submit'} />
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
