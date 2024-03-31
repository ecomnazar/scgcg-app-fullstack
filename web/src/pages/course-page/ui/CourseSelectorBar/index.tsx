import { IoMdClose } from "react-icons/io";
import { CourseTitle } from './Course';

export const CourseSelectorBar = () => {
    return (
        <>
            <div className='px-4 border py-4 flex bg-white items-center justify-between'>
                <h4>Course materials</h4>
                <button><IoMdClose size={21} /></button>
            </div>
            <div>
                {courses.map((item, idx) => {
                    return <CourseTitle key={idx} item={item} />
                })}
                <div>

                </div>
            </div>
        </>
    )
}


const courses = [
    {
        courseTitle: 'Welcoming session and introduction to on line course',
        subCourses: ['To introduce participants with on-line course objectives and with agenda, duration of the course etc.']
    },
    {
        courseTitle: 'LESSON 1 Gender, gender norms  and gender equality',
        subCourses: ['What is gender equality?', 'Do we say gender and think only women?', 'Do we know difference between sex end genders? What are common understanding in society about gender? What are gender roles, gender norms and regime in society?', 'Gender or equality, what is key word and why?', 'What are differences among terms Gender Equality and Women’s Human Rights?']
    },
    {
        courseTitle: 'LESSON 2 Gender stereotypes, and prejudice',
        subCourses: ['How widespread gender stereotypes are in our society?', 'What are stereotypes, how they developed and why they are so consistent?', 'How stereotypes lead to prejudice and discrimination?', 'How to overcome stereotypes and prejudice?', 'Why gender stereotypes are so harmful?']
    },
    {
        courseTitle: 'LESSON 3 Strategies for achieving equality and gender mainstreaming',
        subCourses: ['What are strategies for achieving gender equality (equality in law, equal opportunities and gender mainstreaming);', 'Why is gender mainstreaming youngest strategy?', 'What are gender mainstreaming tools?']
    },
    {
        courseTitle: 'LESSON 4 International obligation and national framework ',
        subCourses: ['International standards for implementation of Women’s Human Rights', 'International standards for Gender Mainstreaming', 'UN Goals of Sustainable Development, why they are important for us? ']
    },
    {
        courseTitle: 'LESSON 5 Gender data',
        subCourses: ['What are gender data and gender statistic?', 'Why data matters? How to anlyse them ?', 'Where to find relevant statistic ?']
    },
    {
        courseTitle: 'LESSON 6 Gender analysis ',
        subCourses: ['What is gender analysis and how gender analysis could be aplied in your work;', 'Gender analysis in  public policies - examples from different countries']
    },
]