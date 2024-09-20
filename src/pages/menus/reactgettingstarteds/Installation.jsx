import { useEffect, useState } from 'react'
import InstallationCodeBlock from '../../../components/items/reactgettingstarteds/InstallationCodeBlock'

const Installation = () => {
  const arrcmd = [
    {
      txttopic: 'ขั้นตอนที่ 1 : สร้างโปรเจค react ด้วย vite version ล่าสุด',
      iscopy: true,
      txtstep: 'npm create vite@latest',
      txtremark: 'จากคำสั่งด้านบนเป็นการสร้างโปรเจคที่ชื่อว่า "react-app-test"',
      listresult: [
        '? Projet name: react-app-test'
      ],
    },
    {
      txttopic: 'ขั้นตอนที่ 2 : เลือก Framework ที่ต้องการ',
      iscopy: false,
      txtstep: 'Projet name: react-app-test',
      txtremark: 'หลังจากที่กำหนดชื่อโปรเจคแล้วเราจะต้องเลือก Framework ที่ต้องการ ในที่นี้เราจะเลือก React',
      listresult: [
        '? Select a framework: ',
        'Vanilla',
        'Vue',
        'React',
        'Preact'
      ],
    },
    {
      txttopic: 'ขั้นตอนที่ 3 : เลือกภาษาที่จะใช้ในการเขียน',
      iscopy: false,
      txtstep: 'Select a framework: React',
      txtremark: 'หลังจากเลือก framework แล้วเราจะทำการเลือกภาษาที่ใช้ในการพัฒนาระบบ ในที่นี้เราจะเลือก Javascript',
      listresult: [
        '? Select a variant: ',
        'TypeScript',
        'JavaScript',
      ],
    },
    {
      txttopic: 'ขั้นตอนที่ 4 : ให้ทำการย้ายเข้าไปที่ path folder project ที่สร้าง',
      iscopy: true,
      txtstep: 'cd react-app-test',
      txtremark: 'คำสั่งด้านบนจะเป็นการย้ายเข้าไปที่ folder react-app-test',
      listresult: [],
    },
    {
      txttopic: 'ขั้นตอนที่ 5 : ทำกาลง node module package',
      iscopy: true,
      txtstep: 'npm install',
      txtremark: 'หลังจากเราได้รันคำสั่งด้านบนใน folder project จะมี folder node_module ถูกสร้างขึ้นมา folder นี้จะเป็นตัวเก็บ package ทั้งหมดของเราไว้',
      listresult: [],
    },
    {
      txttopic: 'ขั้นตอนที่ 6 : ทำการเปิดโปรเจคด้วย Visual Code',
      iscopy: true,
      txtstep: 'code .',
      txtremark: 'หลังจากรันคำสั่งด้านบนจะเป็นการเปิดโปรแกรม Visual Code ที่เข้า folder project ไว้แล้วขึ้นมา [แต่การจะใช้คำสั่ง code . ได้นั้นจะต้องไปตั้งค่า path เครื่องให้มองเห็น visual code ก่อน]',
      listresult: [],
    },
    {
      txttopic: 'ขั้นตอนที่ 7 : เปิดการทำงานระบบ',
      iscopy: true,
      txtstep: 'npm run dev',
      txtremark: 'เท่านี้คุณก็สามารถสร้างโปรเจค react ด้วย vite ได้แล้ว',
      listresult: [
        'Local:   http://localhost:5173/',
        'Network: use --host to expose',
        'press h + enter to show help'
      ],
    },
  ]

  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white rounded-lg p-2 grid place-items-center">
          
          <div className="w-3/4 bg-white border-gray-700 shadow rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Create React with Vite</h2>
            <p className="text-gray-500 mb-6">ขั้นตอนการการสร้างโปรเจคด้วยตัวเองโดยไม่ต้องการ Clone เราจะสร้างโปรเจคผ่าน <a href="https://vitejs.dev/" target="_blank" class="text-blue-500 underline hover:no-underline font-medium">Vite</a>.</p>
            
            {
              arrcmd.map((item) => 
                <InstallationCodeBlock txttopic={item.txttopic} iscopy={item.iscopy} txtstep={item.txtstep} txtremark={item.txtremark} listresult={item.listresult} />
              )
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default Installation