import React from 'react'
import { useSelector } from 'react-redux'
import App from '../App'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'

const DefaultPage = (props) => {
  const textmenufocus = useSelector((state) => state.textmenufocus)
  const systemname = useSelector((state) => state.systemname)

  return (
    <App>
      <Navbar />
      <Sidebar />
      <div className={`pl-16 py-12 pr-2`}>
        <div className="border-dashed border-2 px-2 py-2">
          <div className='inline-flex'>
            <img className="p-1" src="https://placehold.co/5x5" /> <span className='py-1.5 text-xs'>{systemname} / {textmenufocus}</span>
          </div>
          {props.children}
        </div>
      </div>
    </App>
  )
}

export default DefaultPage