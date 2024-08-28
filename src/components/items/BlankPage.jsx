import React from 'react'
import App from '../App'

const BlankPage = (props) => {
  return (
    <App>
        <div className=""> {props.children} </div>
    </App>
  )
}

export default BlankPage