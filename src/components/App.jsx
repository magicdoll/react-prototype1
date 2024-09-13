import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import { setPageLocaltion } from "../store/storeReducers"

const App = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = location
  const textmenufocus = useSelector((state) => state.textmenufocus)
  const userinfo = useSelector((state) => state.userinfo)
  useEffect(() => {
    dispatch(setPageLocaltion(pathname))
    /*
    if (!userinfo.usercode && textmenufocus !== 'login') {
      navigate('/login', { replace: true })
    }
    */
  })

  return (
    <div className='font-sans main-section antialiased relative text-sm'>
        {props.children}
    </div>
  )
}

export default App