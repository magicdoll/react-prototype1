import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setPageTitle, setUserInfo } from '../../store/storeReducers'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userinfo = useSelector((state) => state.userinfo)
  const systemname = useSelector((state) => state.systemname)

  const fnOnClickLogout = () => {
    dispatch(setPageTitle('Login'))
    dispatch(setUserInfo(null))
    navigate('/login', { replace: true })
  }

  return (
    <div className="shadow-sm fixed w-full top-0 left-0 z-20">
      <div className="relative justify-between bg-[#2f4050] flex w-full items-center px-4 py-1.2">
        <div className="flex items-center ltr:mr-2 rtl:ml-2">
          <a className="flex p-2 items-center shrink-0">
            <span className="font-bold text-white" >{systemname.toUpperCase()}  </span>
          </a>

        </div>

        <div className="ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse">
          <div className="sm:ltr:mr-auto sm:rtl:ml-auto text-white">{userinfo.usercode} : {userinfo.firstname} [{userinfo.nickname}]</div>
          <div>
            <a className="block rounded-full">
              <img className="inline rounded-full" src="https://placehold.co/28x28" />
            </a>
          </div>
          <div>
            <button className="block rounded-full" onClick={fnOnClickLogout} >
              <img className="inline rounded-full" src="https://placehold.co/28x28" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar