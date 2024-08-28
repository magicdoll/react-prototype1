import { lazy } from "react"
const Login = lazy(() => import('../pages/Login'))
const Index = lazy(() => import('../pages/Index'))
const Installation = lazy(() => import('../pages/menus/Installation'))

const routes = [
    {
        path: '/',
        element: <Index />,
        layout: null,
    },
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/installation',
        element: <Installation />,
        layout: null,
    },
]

export { routes }