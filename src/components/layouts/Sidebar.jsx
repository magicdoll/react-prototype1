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
      <nav className={`overflow-y-auto bg-white sidebar fixed py-10 h-full w-[${isOpenSidebar ? '260' : '64'}px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-10 transition-all duration-300 border-solid border-2`}>
        <div className="">
          <ul className="relative space-y-0.5 p-2 py-1.2">
            <li className="menu nav-item">
              <ul>
              
                <li className={`${isOpenSidebar ? 'hidden' : ''} nav-item rounded-md p-1`}>
                  <a className="flex items-center w-full">
                    <span className='p-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </span>
                  </a>
                </li>

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