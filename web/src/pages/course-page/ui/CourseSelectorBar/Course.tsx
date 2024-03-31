import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  item: {
    courseTitle: string;
    subCourses: string[];
  }
}

export const CourseTitle: React.FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return <div className='cursor-default px-4 border-b border-t bg-[#f7f9fa]'>
    <div onClick={() => setIsOpen((prev) => !prev)} className='py-3 cursor-pointer flex items-center justify-between space-x-6'>
      <h3>{item.courseTitle}</h3>
      <button><IoIosArrowForward size={20} /></button>
    </div>
    <div>
      {isOpen && item.subCourses.map((sub, idx) => {
        return <div key={idx} className='pl-2 py-4 flex items-start space-x-4 justify-between'>
          <div className='h-[20px] w-[20px] border-[2px] border-dark rounded-[8px]'></div>
          <h4 className='text-[15px] w-[90%]'>{sub}</h4>
        </div>
      })}
    </div>
  </div>

}

