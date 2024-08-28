import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPageTitle, setUserInfo } from '../store/storeReducers'
import bannersilkspan from '../assets/images/SILKSPANINSURANCE-V1.png'
// import { fnCallAPILogin } from '../api/app/APILogin'

const Login = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const systemname = useSelector((state) => state.systemname)
  const [usercode, setUsercode] = useState('')
  const [password, setPassword] = useState('')
  const [msgalert, setMsgalert] = useState(`${systemname.toUpperCase()}`)
  const [colorerror, setColorerror] = useState('text-gray-500')

  useEffect(() => {
    dispatch(setPageTitle('Login'))
  })

  const fnSetNotify = (msg, cls) => {
    setMsgalert(msg)
    setColorerror(cls)
  }

  const fnOnClickLogin = async () => {
    if (!usercode) {
      await fnSetNotify('กรุณากรอกเลขประจำตัวพนักงาน', 'text-red-600')
    } else if (!password) {
      await fnSetNotify('กรุณากรอกรหัสผ่าน', 'text-red-600')
    } else {
      await fnSetNotify('กรุณารอสักครี่..', 'text-gray-500')
      const resp = [{ usercode: '123456', name: 'ชื่อจริง', lastname: 'นามสกุล', nickname: 'ชื่อเล่น', department: 'แผนก', rank: 'ตำแหน่ง' }] /* await fnCallAPILogin({ username: username, password: password }) */
      if (resp.length) {
        await fnSetNotify('กำลังเข้าสู่ระบบ..', 'text-green-600')
        const userinfo = {
          usercode: usercode || ''
          , firstname: resp[0].name || ''
          , lastname: resp[0].lastname || ''
          , nickname: resp[0].nickname || ''
          , department: resp[0].department || ''
          , rank: resp[0].rank || ''
          , permissions: []
        }
        dispatch(setUserInfo(userinfo))

        setTimeout(() => {
          navigate('/', { replace: true })
        }, 2000)
      } else {
        await fnSetNotify('ข้อมูลไม่ถูกต้อง', 'text-red-600')
      }
    }
  }


  return (
    <div className="py-36 bg-white">
      <div className="bg-slate-100 flex rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img src={bannersilkspan}></img>
        </div>
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              <span className="font-bold text-[#1d7181] text-6xl">PROTOTYPE</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 text-center">กรุณาระบุเลขประจำตัวพนักงาน และรหัสผ่านเพื่อเข้าใช้งาน</p>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-md text-center text-gray-500 uppercase">เข้าสู่ระบบ</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm mb-2">เลขประจำตัวพนักงาน</label>
                <input value={usercode} onChange={e => setUsercode(e.target.value)} placeholder="ตัวเลข 6 หลัก" className="focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm mb-2">รหัสผ่าน</label>
                    <a href="#" className="text-xs text-gray-500">ลืมรหัสผ่าน?</a>
                </div>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="รหัสผ่าน" className="focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
                <button className="bg-gray-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-500" onClick={fnOnClickLogin}>เข้าสู่ระบบ</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className={`font-bold text-xs ${colorerror} uppercase`}>{msgalert}</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login