import clsx from 'clsx';
import React from 'react'
import { Loading } from '../loading';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string;
    type?: 'button' | 'submit'
    loading?: boolean
    size?: 'small' | 'medium' | 'large'
}

export const Button: React.FC<Props> = ({ title, className, type = 'button', loading = false, size = 'medium', ...props }) => {
    return (
        <button {...props} type={type} className={clsx("relative hover:opacity-90 transition-all px-[22px] bg-primary rounded-[8px] text-white", className, {
            'text-[14px] h-[42px]': size === 'small',
            'h-[48px]': size === 'medium',
            'opacity-80': loading
        })}>{
                loading ? <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><Loading /></div> : title
            }</button>
    )
}
