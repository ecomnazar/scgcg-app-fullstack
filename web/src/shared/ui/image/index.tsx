import React from 'react'

interface Props {
    source: string;
}

export const Image: React.FC<Props> = ({ source }) => {
    return (
        <img className='rounded-[8px] object-cover' src={source} />
    )
}
