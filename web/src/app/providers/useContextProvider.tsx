import React from 'react'

interface Props {
    children: React.ReactNode
}

interface ContextProps {
    authModal: boolean
    setAuthModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const BaseContext = React.createContext({} as ContextProps)
export const UseContextProvider: React.FC<Props> = ({ children }) => {
    const [authModal, setAuthModal] = React.useState(false)
    return (
        <BaseContext.Provider value={{ authModal, setAuthModal }}>
            {children}
        </BaseContext.Provider>
    )
}
