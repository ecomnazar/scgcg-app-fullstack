import { useContext } from 'react'
import { Button } from '.'
import { BaseContext } from '@/app/providers/useContextProvider'
import { courses } from '../course-content'
import { useNavigate } from 'react-router-dom'
import { getActiveCourse, setActiveCourseLS } from '@/shared/lib/localStorage'

export const NextButton = () => {
    const { activeCourse, setActiveCourse } = useContext(BaseContext)
    const activeCourseLS = getActiveCourse()

    const navigate = useNavigate()
    console.log(activeCourseLS[0]);


    const handleNext = () => {
        // it is for first navigation
        // if (activeCourse[0] === 0) {
        //     setActiveCourse([1, 0])
        //     if (activeCourseLS[0] === 0) {
        //         setActiveCourseLS(JSON.stringify([1, 0])) // set to localstorage first navigation
        //     }
        //     return
        // }

        // it is for last navigation
        if (activeCourse[0] + 1 === courses.length && activeCourse[1] === 1) {
            navigate('/certificate')
            return
        }

        if (activeCourse[1] === 1) {
            setActiveCourse([activeCourse[0] + 1, 0])
        } else {
            setActiveCourse([activeCourse[0], activeCourse[1] + 1])
        }

        // to change lesson in localstorage
        if (activeCourseLS[0] <= activeCourse[0] && activeCourse[1] === 1) {
            setActiveCourseLS(JSON.stringify([activeCourse[0] + 1, 0]))
        }

        if (activeCourseLS[0] <= activeCourse[0]) {
            // setActiveCourseLS(JSON.stringify([activeCourseLS[0], activeCourse[1]]))
        }

    }

    return (
        <Button onClick={handleNext} className='float-right' title={'Next'} />
    )
}
