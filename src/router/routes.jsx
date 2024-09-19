import { lazy } from "react"
const Login = lazy(() => import('../pages/Login'))
const Index = lazy(() => import('../pages/menus/Index'))
const GitClone = lazy(() => import('../pages/menus/reactgettingstarteds/GitClone'))
const Installation = lazy(() => import('../pages/menus/reactgettingstarteds/Installation'))
const Component = lazy(() => import('../pages/menus/reactcomponents/Component'))

const ReduxjsReactHooks = lazy(() => import('../pages/menus/reactreduxjs/ReduxjsReactHooks'))
const ReduxjsState = lazy(() => import('../pages/menus/reactreduxjs/ReduxjsState'))
const ReduxjsReducer = lazy(() => import('../pages/menus/reactreduxjs/ReduxjsReducer'))
const ReactRouter = lazy(() => import('../pages/menus/reactrouter/ReactRouter'))
const ReactNavigate = lazy(() => import('../pages/menus/reactrouter/ReactNavigate'))
const ReactTempleteGuide = lazy(() => import('../pages/menus/reacttempleteprototype/ReactTempleteGuide'))
const LocalstorageIntroduce = lazy(() => import('../pages/menus/reactlocalstorage/LocalstorageIntroduce'))
const LocalstorageCrossDomain = lazy(() => import('../pages/menus/reactlocalstorage/LocalstorageCrossDomain'))

const routes = [
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/',
        element: <Index />,
        layout: null,
    },
    {
        path: '/gitclone',
        element: <GitClone />,
        layout: null,
    },
    {
        path: '/installation',
        element: <Installation />,
        layout: null,
    },
    {
        path: '/component',
        element: <Component />,
        layout: null,
    },
    {
        path: '/redexjsreacthooks',
        element: <ReduxjsReactHooks />,
        layout: null,
    },
    {
        path: '/reactrouter',
        element: <ReactRouter />,
        layout: null,
    },
    {
        path: '/reactnavigate',
        element: <ReactNavigate />,
        layout: null,
    },
    {
        path: '/reacttempleteguide',
        element: <ReactTempleteGuide />,
        layout: null,
    },
    {
        path: '/localstorageintroduce',
        element: <LocalstorageIntroduce />,
        layout: null,
    },
    {
        path: '/localstoragecrossdomain',
        element: <LocalstorageCrossDomain />,
        layout: null,
    },
]

export { routes }