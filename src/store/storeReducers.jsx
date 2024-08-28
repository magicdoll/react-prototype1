import { createSlice, configureStore } from "@reduxjs/toolkit"
import { listMenus } from './storeMenus'

const initialState = {
    userinfo: {
        usercode: ''
        , firstname: ''
        , lastname: ''
        , nickname: ''
        , department: ''
        , rank: ''
        , permissions: []
    }
    , systemname: 'Prototype'
    , textmenufocus: 'Login'
    , isOpenSidebar: false
    , listMenus: listMenus
}

const storeConfig = createSlice({
    name: 'protytype',
    initialState: initialState,
    reducers: {
        setUserInfo(state, { payload }) {
            if (!payload) {
                state.userinfo = {
                    usercode: ''
                    , firstname: ''
                    , lastname: ''
                    , nickname: ''
                    , department: ''
                    , rank: ''
                    , permissions: []
                }
            } else {
                state.userinfo = payload
            }
            
        },
        setPageTitle(state, { payload }) {
            document.title = `${state.systemname} | ${payload}`
            state.textmenufocus = payload
        },
        setToggleSidebar(state, { payload }) {
            state.isOpenSidebar = (payload ? payload : !state.isOpenSidebar)
        }
    }
})

export const { setUserInfo, setPageTitle, setToggleSidebar } = storeConfig.actions
export default configureStore({
    reducer: storeConfig.reducer
})