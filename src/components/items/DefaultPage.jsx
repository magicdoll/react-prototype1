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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg> <span className={'px-1'}>{systemname} / {textmenufocus}</span>
          </div>
          {props.children}
        </div>
      </div>
    </App>
  )
}

export default DefaultPage