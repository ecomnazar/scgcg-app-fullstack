import { getActiveCourse } from '@/shared/lib/localStorage'
import clsx from 'clsx'

export const ProgressLine = () => {
    const activeCourse = getActiveCourse()

    const coursePercent = 100 / 6
    const percent = Math.round((activeCourse[0] * coursePercent))

    return (
        <div className="flex items-center gap-x-3 mt-6 mb-2">
            <div className="bg-[#EDEDED] h-[10px] w-[200px] sm:w-[300px] rounded-[8px] relative">
                <div style={{ width: percent + '%' }} className={clsx(`absolute top-0 left-0 h-full bg-primary rounded-[6px]`)}></div>
            </div>
            <p>{percent}%</p>
        </div>
    )
}
