import { createBrowserRouter } from "react-router-dom"
import BlankPage from '../components/items/BlankPage'
import DefaultPage from '../components/items/DefaultPage'
import { routes } from './routes'

const finalRoutes = routes.map((route) => {
    return {
        ...route,
        element:  route.layout === 'blank' ? <BlankPage>{route.element}</BlankPage> : <DefaultPage>{route.element}</DefaultPage>
    }
})

const router = createBrowserRouter(finalRoutes)

export default router