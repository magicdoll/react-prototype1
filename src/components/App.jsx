import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const App = (props) => {
  const navigate = useNavigate()
  const textmenufocus = useSelector((state) => state.textmenufocus)
  const userinfo = useSelector((state) => state.userinfo)
  useEffect(() => {
    if (!userinfo.usercode && textmenufocus !== 'Login') {
      navigate('/login', { replace: true })
    }
  })

  return (
    <div className='font-sans main-section antialiased relative text-sm'>
        {props.children}
    </div>
  )
}

export default App