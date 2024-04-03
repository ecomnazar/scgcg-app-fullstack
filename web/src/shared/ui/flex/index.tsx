import clsx from 'clsx';
import React from 'react'
import { FadeIn } from '../animation/fadeIn';

interface Props {
    children?: React.ReactNode
    className?: string;
    left: JSX.Element
    right: JSX.Element
}

export const Flex: React.FC<Props> = ({ className, left, right }) => {
    return <FadeIn>
        <div className={clsx('flex items-center space-x-4 flex-col lg:flex-row', className)}>
            <div className='basis-[100%] lg:basis-[50%]'>
                {left}
            </div>
            <div className='basis-[100%] lg:basis-[50%]'>
                {right}
            </div>
        </div>
    </FadeIn>
}
