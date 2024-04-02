import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main-page";
import { AdminPage } from "@/pages/admin-page";
import { CoursePage } from "@/pages/course-page";
import { CertificatePage } from "@/pages/cerftificate-page";

export const appRouter = () => createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/goodadmin',
        element: <AdminPage />
    },
    {
        path: '/course',
        element: <CoursePage />
    },
    {
        path: '/certificate',
        element: <CertificatePage />
    }
])