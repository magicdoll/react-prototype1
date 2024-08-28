import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../store/storeReducers'

const Installation = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('Installation'))
  })
  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white border border-gray-200 rounded-lg shadow p-2">
          Installation
        </div>
      </div>
    </div>
  )
}

export default Installation