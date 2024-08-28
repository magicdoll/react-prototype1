import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const ListMenu = (props) => {
  const isOpenSidebar = useSelector((state) => state.isOpenSidebar)
  const [menuitem, setMenuitem] = useState(props.menuitem)
  return (
    <li className="nav-item rounded-md p-1">
      <a className="flex items-center w-full">
        <img className="p-1" src="https://placehold.co/20x20" />
        <span className={`${isOpenSidebar ? '' : 'hidden'} flex-1 text-left whitespace-nowrap text-xs`} >{menuitem.topic}</span>
      </a>

      <ul className={`${isOpenSidebar ? '' : 'hidden'} py-1 space-y-2 border rounded-md`}>
        {
          menuitem.submenu.map((item) => 
            <li className='hover:bg-[#000]/[0.08]'>
              <NavLink to={item.to} className="flex items-center p-1 w-full text-black ml-4 text-xs">- {item.text}</NavLink>
            </li>
          )
        }
      </ul>
    </li>
  )
}

export default ListMenu