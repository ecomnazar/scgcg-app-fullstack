import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main-page";

export const appRouter = () => createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    }
])