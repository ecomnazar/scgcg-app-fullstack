import { AuthModal } from '@/shared/ui/modal/auth-modal'
import { LogoutConfirmModal } from '@/shared/ui/modal/logout-confirm-modal'
import { Outlet } from 'react-router-dom'

export const BaseLayout = () => {
    return (
        <>
            <AuthModal />
            <LogoutConfirmModal />
            <Outlet />
        </>
    )
}
