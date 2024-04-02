import { BaseContext } from '@/app/providers/useContextProvider';
import { getActiveCourse } from '@/shared/lib/localStorage';
import clsx from 'clsx';
import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  item: {
    courseTitle: string;
    subCourses: string[];
  }
  index: number
}

export const CourseTitle: React.FC<Props> = ({ item, index }) => {
  const { activeCourse } = useContext(BaseContext)
  const [isOpen, setIsOpen] = React.useState(false)
  // const activeCourse = getActiveCourse()


  return <div className='cursor-default px-4 border-b border-t bg-[#f7f9fa]'>
    <div onClick={() => setIsOpen((prev) => !prev)} className='py-3 cursor-pointer flex items-center justify-between space-x-6'>
      <h3>{item.courseTitle}</h3>
      <button><IoIosArrowForward size={20} /></button>
    </div>
    <div>
      {isOpen && item.subCourses.map((sub, idx) => {
        const themeIndex = index
        const themeContentIndex = idx

        return <div key={idx} className='pl-2 py-4 flex items-start space-x-4 justify-between'>
          <div className='h-[20px] w-[20px] border-[2px] border-dark rounded-[8px] flex items-center justify-center'>
            <div className={clsx('w-2 h-2 rounded-full', {
              'bg-primary': themeIndex === activeCourse[0] && themeContentIndex === activeCourse[1]
            })} />
          </div>
          <h4 className='text-[15px] w-[90%]'>{sub}</h4>
        </div>
      })}
    </div>
  </div>

}

