import React from 'react'

interface Props {
    type: 'arrow-down' | 'arrow-up' | 'arrow-right' | 'close' | 'edit-profile' | 'eye' | 'humans' | 'language' | 'location' | 'mail' | 'person' | 'signout' | 'tick'
}

export const Icon: React.FC<Props> = ({ type }) => {
    return (
        <>
            {type === 'arrow-down' && <img src='/icon/arrow-down-icon.svg' />}
            {type === 'arrow-up' && <img src='/icon/arrow-up-icon.svg' />}
            {type === 'arrow-right' && <img src='/icon/arrow-right-icon.svg' />}
            {type === 'close' && <img src='/icon/arrow-right-icon.svg' />}
            {type === 'edit-profile' && <img src='/icon/edit-profile-icon.svg' />}
            {type === 'eye' && <img src='/icon/eye-icon.svg' />}
            {type === 'humans' && <img src='/icon/humans-icon.svg' />}
            {type === 'language' && <img src='/icon/language-icon.svg' />}
            {type === 'location' && <img src='/icon/location-icon.svg' />}
            {type === 'mail' && <img src='/icon/mail-icon.svg' />}
            {type === 'person' && <img src='/icon/person-icon.svg' />}
            {type === 'signout' && <img src='/icon/signout-icon.svg' />}
            {type === 'tick' && <img src='/icon/tick-icon.svg' />}
        </>
    )
}
