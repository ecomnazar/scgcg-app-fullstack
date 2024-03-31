import { Navbar } from '@/shared/ui/navbar'
import { CourseSelectorBar } from './ui/CourseSelectorBar'
import { courses } from '@/shared/ui/course-content'

export const CoursePage = () => {
    const active = [1, 0]
    return (
        <>
            <Navbar />
            <div className='flex'>
                <div className='h-screen w-[calc(100vw-400px)] text-dark flex items-center border border-dark justify-center'>
                    <div className='border border-dark py-12 px-8 h-[80%] w-[80%] overflow-scroll rounded-[8px]'>
                        {courses[active[0]].sessions[active[1]]}
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