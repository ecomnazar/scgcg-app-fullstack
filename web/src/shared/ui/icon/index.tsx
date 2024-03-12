import React from 'react'

const icons = {
    'arrow-down': 'arrow-down-icon.svg',
    'arrow-up': 'arrow-up-icon.svg',
    'arrow-right': 'arrow-right-icon.svg',
    'close': 'arrow-right-icon.svg',
    'edit-profile': 'edit-profile-icon.svg',
    'eye': 'eye-icon.svg',
    'humans': 'humans-icon.svg',
    'language': 'language-icon.svg',
    'location': 'location-icon.svg',
    'mail': 'mail-icon.svg',
    'person': 'person-icon.svg',
    'signout': 'signout-icon.svg',
    'tick': 'tick-icon.svg',
}

interface Props {
    type: keyof typeof icons
    className?: string;
}

export const Icon: React.FC<Props> = ({ type, className }) => {
    return (
        <>
            {Object.keys(icons).map((item) => {
                if (item === type) {
                    return <img key={item} src={`/icon/${icons[item]}`} className={className} />
                }
            })}
        </>
    )
}
