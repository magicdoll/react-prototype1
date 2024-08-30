import React, { useState } from 'react'

const InstallationCodeBlock = (props) => {
  const listResult = props.listresult

  return (
    <div className=''>
      <label for="step1-id" className="text-sm font-medium text-gray-900 block mb-1 mt-5">{props.txttopic}</label>
      <div className='grid grid-cols-2 gap-4 mb-2'>
        <div className='w-full'>
          <div className="relative mb-2">
            <input id="step1-id" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.txtstep} disabled readonly />
            <button onClick={() => navigator.clipboard.writeText(`${props.txtstep}`)} className={`${props.iscopy ? '' : 'hidden'} absolute end-2 top-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center`}>
              <span>
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
              </span>
            </button>
          </div>
          <span className='text-xs'>{props.txtremark}</span>
        </div>

        <div className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow rounded-lg py-3 px-5">
          <h2 className="text-md font-semibold text-gray-900 dark:text-gray-400 mb-2">Result Terminal</h2>
          <address className="relative bg-gray-50 dark:bg-gray-600 dark:border-gray-500 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-1">
            <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
              {
                listResult.map((item) => 
                  <p>{item}</p>
                )
              }
            </div>
          </address>
        </div>
      </div>
    </div>
  )
}

export default InstallationCodeBlock