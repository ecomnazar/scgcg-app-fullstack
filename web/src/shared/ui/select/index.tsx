import clsx from 'clsx';
import React from 'react'
import { Icon } from '../icon';
import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick';

interface Props {
    content: string[]
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    defaultValue?: string
}

export const Select: React.FC<Props> = ({ content, selected, setSelected, defaultValue }) => {
    const ulRef = useOutsideClick(() => { })
    const [showAll, setShowAll] = React.useState(false)

    const onSelect = (item: string) => {
        setShowAll(false)
        setSelected(item)
    }

    return (
        <div className='relative'>
            <div onClick={() => setShowAll(!showAll)} className={clsx('flex items-center justify-between border border-[#D0D5DD] placeholder:text-dark/50 w-full h-[42px] px-[14px] focus:border-primary-300 focus:shadow-[0_0px_1px_3px_#eee8ff] text-[14px] rounded-[8px] cursor-pointer', {
                'text-[#101828]': selected,
                'text-[#a6aebe]': !selected
            })}>
                <span>{selected ? selected : defaultValue}</span>
                <div>
                    <>
                        <Icon type={'arrow-up'} className='w-3 translate-y-[2.5px]' />
                        <Icon type={'arrow-down'} className='w-3 -translate-y-[2.5px]' />
                    </>
                </div>
            </div>
            {showAll &&
                <div ref={ulRef} className='rounded-[8px] bg-white max-h-[200px] overflow-auto border border-[#D0D5DD] p-[8px] text-[14px] mt-2'>
                    <ul>
                        {content.map((country, idx) => {
                            return <li onClick={() => onSelect(country)} key={idx} className='hover:bg-primary-50 hover:text-primary p-3 cursor-pointer rounded-[6px]'>{country}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
