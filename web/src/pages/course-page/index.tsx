import { Navbar } from '@/shared/ui/navbar'
import { CourseSelectorBar } from './ui/CourseSelectorBar'
import { courses } from '@/shared/ui/course-content'
import React, { useContext } from 'react'
import { getActiveCourse } from '@/shared/lib/localStorage'
import { BaseContext } from '@/app/providers/useContextProvider'

export const CoursePage = () => {
    const { activeCourse, setActiveCourse } = useContext(BaseContext)
    const activeCourseLS = getActiveCourse()

    const divRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        setActiveCourse(activeCourseLS)
    }, [])

    React.useEffect(() => {
        divRef.current?.scroll({
            top: 0
        })
    }, [activeCourse])


    return (
        <div className='pb-8'>
            <Navbar />
            <div className='flex flex-col lg:flex-row'>
                <div className='h-screen lg:h-[calc(100vh-145px)] w-screen lg:w-[calc(100vw-400px)] text-dark flex items-center border border-dark justify-center'>
                    <div ref={divRef} className='border border-dark py-12 px-8 w-[95%] h-[95%] lg:h-[80%] lg:w-[80%] overflow-scroll rounded-[8px]'>
                        {courses[activeCourse[0]][activeCourse[1]]}
                    </div>
                </div>
                <div className='w-full lg:w-[400px] lg:fixed right-0 z-[999]'>
                    <div className='sticky top-0'>
                        <CourseSelectorBar />
                    </div>
                </div>
            </div>
        </div>
    )
}