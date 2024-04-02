import { Navbar } from '@/shared/ui/navbar'
import { CourseSelectorBar } from './ui/CourseSelectorBar'
import { courses } from '@/shared/ui/course-content'
import React, { useContext } from 'react'
import { getActiveCourse } from '@/shared/lib/localStorage'
import { BaseContext } from '@/app/providers/useContextProvider'

export const CoursePage = () => {
    const { activeCourse, setActiveCourse } = useContext(BaseContext)
    const activeCourseLS = getActiveCourse()

    React.useEffect(() => {
        setActiveCourse(activeCourseLS)
    }, [])

    return (
        <>
            <Navbar />
            <div className='flex'>
                <div className='h-screen w-[calc(100vw-400px)] text-dark flex items-center border border-dark justify-center'>
                    <div className='border border-dark py-12 px-8 h-[80%] w-[80%] overflow-scroll rounded-[8px]'>
                        {courses[activeCourse[0]][activeCourse[1]]}
                    </div>
                </div>
                <div className='w-[400px] fixed right-0 z-[999]'>
                    <div className='sticky top-0'>
                        <CourseSelectorBar />
                    </div>
                </div>
            </div>
        </>
    )
}