import { Outlet, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { HomePage } from '../pages/home';
import { UserDetailsPage } from '../pages/users/UserDetailsPage';

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout><Outlet /></AppLayout>,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/users/:id",
                element: <UserDetailsPage />,
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