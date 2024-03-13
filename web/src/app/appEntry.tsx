import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UseContextProvider } from './providers/useContextProvider.tsx'
import { appRouter } from './appRouter'
import './i18n.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UseContextProvider>
            <RouterProvider router={appRouter()} />
        </UseContextProvider>
    </React.StrictMode>
)