import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListMenu from '../items/ListMenu'
import { setToggleSidebar } from '../../store/storeReducers'

const Sidebar = (props) => {
  const dispatch = useDispatch()
  const isOpenSidebar = useSelector((state) => state.isOpenSidebar)
  const listMenus = useSelector((state) => state.listMenus)

  return (
    <div className='' onMouseOver={() => { dispatch(setToggleSidebar(true)) }} onMouseOut={() => { dispatch(setToggleSidebar(false)) }} >
      <nav className={`bg-white sidebar fixed py-10 h-full w-[${isOpenSidebar ? '260' : '64'}px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-10 transition-all duration-300 border-solid border-2`}>
        <div className="">
          <ul className="relative space-y-0.5 p-2 py-1.2">
            <li className="menu nav-item">
              <ul>
                {
                  listMenus.map((item) => 
                    <ListMenu menuitem={item} />
                  )
                }
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar