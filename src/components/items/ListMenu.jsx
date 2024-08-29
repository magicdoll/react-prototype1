import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

const ListMenu = (props) => {
  const location = useLocation()
  const { pathname } = location
  const isOpenSidebar = useSelector((state) => state.isOpenSidebar)
  const [menuitem, setMenuitem] = useState(props.menuitem)
  return (
    <li className="nav-item rounded-md p-1">
      <a className="flex items-center w-full">
        <span className={`${isOpenSidebar ? '' : 'hidden'} p-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>

        <span className={`${isOpenSidebar ? '' : 'hidden'} flex-1 text-left whitespace-nowrap text-xs px-1`} >{menuitem.topic}</span>
      </a>

      <ul className={`${isOpenSidebar ? '' : 'hidden'} py-1 space-y-1 border rounded-md`}>
        {
          menuitem.submenu.map((item) => {
            return item.to == pathname ? 
            (
              <li className='hover:bg-[#000]/[0.08]'>
              <NavLink to={item.to} className="flex items-center p-1 w-full text-black ml-4 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg> <span className={'px-1'}>{item.text}</span>
              </NavLink>
            </li>
            )
            :
            (
              <li className='hover:bg-[#000]/[0.08]'>
              <NavLink to={item.to} className="flex items-center p-1 w-full text-black ml-4 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg> <span className={'px-1'}>{item.text}</span>
              </NavLink>
            </li>
            )
          })
        }
      </ul>
    </li>
  )
}

export default ListMenu