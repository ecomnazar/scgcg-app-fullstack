import { useContext } from 'react'
import { Button } from '.'
import { BaseContext } from '@/app/providers/useContextProvider'
import { courses } from '../course-content'
import { useNavigate } from 'react-router-dom'

export const NextButton = () => {
    const { activeCourse, setActiveCourse } = useContext(BaseContext)
    const navigate = useNavigate()

    const handleNext = () => {
        // it is for first navigation
        if (activeCourse[0] === 0) {
            setActiveCourse([1, 0])
            return
        }

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

    }

    return (
        <Button onClick={handleNext} className='float-right' title={'Next'} />
    )
}
