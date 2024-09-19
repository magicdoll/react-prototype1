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
    , textmenufocus: 'login'
    , isOpenSidebar: false
    , listMenus: listMenus
    , jsmenu: {
        cntlike: 0
        , arrlistlike: []
    }
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
        setPageLocaltion(state, { payload }) {
            let jsitem  = []
            if (payload.toLowerCase() == '/login') {
                document.title = document.title = `${state.systemname} | Login`
                state.textmenufocus = 'login'
            }
            else {
                for (const item of state.listMenus) {
                    jsitem = item.submenu.filter((items) => items.to.toLowerCase() == payload.toLowerCase())
                    if (jsitem.length) {
                        document.title = `${state.systemname} | ${jsitem[0].text}`
                        state.textmenufocus = `${item.topic} [${jsitem[0].text}]`
                        break
                    }
                }
            }
        },
        setToggleSidebar(state, { payload }) {
            state.isOpenSidebar = (payload ? payload : !state.isOpenSidebar)
        },
        setMenuReduxjsSetCntlike(state, { payload }) {
            state.jsmenu.cntlike += (payload.like ? 1 : -1)
            if (payload.like) {
                state.jsmenu.arrlistlike.push(payload.fullname)
            }
            else {
                state.jsmenu.arrlistlike = state.jsmenu.arrlistlike.filter((str) => str != payload.fullname)
            }
        }
    }
})

export const { setUserInfo, setPageLocaltion, setToggleSidebar, setMenuReduxjsSetCntlike } = storeConfig.actions
export default configureStore({
    reducer: storeConfig.reducer
})