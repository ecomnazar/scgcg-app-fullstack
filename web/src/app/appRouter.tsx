import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main-page";
import { AdminPage } from "@/pages/admin-page";
import { CoursePage } from "@/pages/course-page";
import { CertificatePage } from "@/pages/cerftificate-page";
import { ViewCoursePage } from "@/pages/view-course-page";
import { BaseLayout } from "./providers/baseLayout";

export const appRouter = () => createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/goodadmin',
                element: <AdminPage />
            },
            {
                path: '/view',
                element: <ViewCoursePage />
            },
            {
                path: '/course',
                element: <CoursePage />
            },
            {
                path: '/certificate',
                element: <CertificatePage />
            }
        ]
    }
])