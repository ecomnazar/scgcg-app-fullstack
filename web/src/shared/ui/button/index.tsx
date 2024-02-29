import clsx from 'clsx';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string;
}

export const Button: React.FC<Props> = ({ title, className, ...props }) => {
    return (
        <button {...props} className={clsx("h-[48px] px-[22px] bg-primary rounded-sm text-white", className)}>{title}</button>
    )
}
