import { Outlet, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element:    <AppLayout><Outlet /></AppLayout>,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {   path: "/users",
                element: <div>Users</div>,
            },
            {
                path: "/posts",
                element: <div>Posts</div>,
            },
        ],
    },
])