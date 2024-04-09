import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    children: React.ReactNode
}

interface ContextProps {
    authModal: boolean
    setAuthModal: React.Dispatch<React.SetStateAction<boolean>>
    logoutModal: boolean
    setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>
    activeCourse: number[]
    setActiveCourse: React.Dispatch<React.SetStateAction<number[]>>

}

export const BaseContext = React.createContext({} as ContextProps)
export const UseContextProvider: React.FC<Props> = ({ children }) => {
    const [authModal, setAuthModal] = React.useState(false)
    const [logoutModal, setLogoutModal] = React.useState(false)
    const [activeCourse, setActiveCourse] = React.useState([0, 0])
    const { i18n } = useTranslation()

    const lngFromLS = localStorage.getItem('i18nextLng') || 'en'

    React.useEffect(() => {
        i18n.changeLanguage(lngFromLS)
    }, [])

    return (
        <BaseContext.Provider value={{ authModal, setAuthModal, logoutModal, setLogoutModal, activeCourse, setActiveCourse }}>
            {children}
        </BaseContext.Provider>
    )
}
