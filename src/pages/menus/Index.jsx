import { useEffect, useState } from 'react'

const Index = () => {
  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white rounded-lg p-10">
          
          <div className="py-10 w-full text-center block space-y-6">
            <p className="text-5xl font-bold text-[#1d7181]"> SILKSPAN - React Prototype </p>
            <p className="text-3xl font-bold text-gray-500">ระบบที่จะค่อยช่วยให้คำแนะนำเบื้องต้นเกี่ยวกับ</p>
            <p className="text-4xl font-bold text-gray-500">
              (<span className={'text-sky-500'}>React[JSX]</span> + <span className={'text-pink-500'}>Tailwind[CSS]</span>) & <span className={'text-green-600 underline decoration-red-500'}>Node.JS</span>
            </p>

            <p></p>

            <button onClick={() => window.open('https://github.com/magicdoll/react-prototype1', '_blank', 'silkspanfacebook')} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
              </svg>
              Clone [Prototype] with Github
            </button>
            
            <button onClick={() => window.open('https://www.facebook.com/SILKSPAN', '_blank', 'silkspanfacebook')} type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#3b5998]/55 me-2 mb-2">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
              </svg>
              Open Silkspan with Facebook
            </button>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Index