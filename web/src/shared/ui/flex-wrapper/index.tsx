import clsx from 'clsx';
import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const FlexWrapper: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={clsx('space-y-8 pb-12', className)}>
            {children}
        </div>
    )
}
