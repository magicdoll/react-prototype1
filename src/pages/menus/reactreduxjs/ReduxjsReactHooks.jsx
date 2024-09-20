import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListCard from '../../../components/items/reactreduxjs/ExpCard'
import ListCardV2 from '../../../components/items/reactreduxjs/ExpCardV2'

const ReduxjsReactHooks = (props) => {
  const cntlike = useSelector((state) => state.jsmenureduxjs.cntlike)
  const arrlistlike = useSelector((state) => state.jsmenureduxjs.arrlistlike)

  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white rounded-lg p-2 grid place-items-center">
          
          <div className="w-3/4 bg-white border border-gray-700 shadow rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Reduxjs/Toolkit : React Hooks {'{ state, reducer }'}</h2>
            
            {/* Exp1 */}
            <div className='mb-6'>
              <label for="step1-id" className="text-lg font-bold text-gray-900 block mb-1 mt-5">Exp 1. React Hook : State </label>

              <div className='mb-2'>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <div class="grid grid-cols-4 gap-4">
                    <ListCard cardurlpic={`https://robohash.org/${Math.floor(Math.random() * 100)}`} cardfullname={`ทดสอบ หนึ่ง`} cardrank={`Project Manager`} />
                    <ListCard cardurlpic={`https://robohash.org/${Math.floor(Math.random() * 100)}`} cardfullname={`ทดสอบ สอง`} cardrank={`System Analyst`} />
                    <ListCard cardurlpic={`https://robohash.org/${Math.floor(Math.random() * 100)}`} cardfullname={`ทดสอบ สาม`} cardrank={`Programmer`} />
                    <ListCard cardurlpic={`https://robohash.org/${Math.floor(Math.random() * 100)}`} cardfullname={`ทดสอบ สี่`} cardrank={`Programmer`} />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-500 mb-2">จากตัวอย่างด้านบนเป็นการแสดงรายชื่อพนักงานเป็นรูปแบบ Card หลายๆใบ</p>
              <p className="text-gray-500 mb-2">และการ์ดแต่ละใบจะมีข้อมูลที่ไม่เหมือนกันด้วย ตามข้อมูลที่ส่งไปให้ Component</p>
              <p className="text-gray-500 mb-2">และจะมี Action การจัดการ State ภายในของตัวเองดังนี้</p>
              <ul className='list-disc ml-8'>
                <li>like : state ที่เอาไว้เก็บค่า true false การกดถูกใจ</li>
                <li>onClick รูปหัวใจ : จะทำการจัดการ state like</li>
              </ul>

              {/* File Component ExpCard */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Component ExpCard</label>
              <div className='mb-2'>
                <div className='w-full mb-2'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/reactreduxjs/ExpCard.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-green-500 pl-4'>
                    ExpCardV2.jsx จะเป็น Component ที่เอาไว้สร้างรูปแบบ Card ขึ้นมาหนึ่งใบเมื่อถูกเรียกใช้ Component
                  </span>
                </div>

                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span>{` { `}<span className='text-blue-400'>{`useState`}</span>{` } `}<span className='text-pink-400'>{`from`}</span>{` 'react'`}
                  <br/><span className='text-blue-400'>{`const`}</span> {` ExpCard = (`}<span className='text-green-400'>{`props`}</span>{`) => {`}
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span>{` [`}<span className='text-red-600'>{`like`}</span>{`, `}<span className='text-yellow-400'>{`setLike`}</span> {`] = `}<span className='text-yellow-400'>{`useState`}</span>{`(false)`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{` class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">`}
                  
                  <br/>&ensp;&ensp;{`<`}<span className='text-blue-400'>{`a`}</span><span className='text-blue-300'>{` onClick`}</span>{`={() => { `}<span className='text-yellow-400'>{`setLike`}</span>{`(!`}<span className='text-red-600'>{`like`}</span>{`); }}>`}
                  <br/>&ensp;&ensp;&ensp;{`{`}
                  <br/>&ensp;&ensp;&ensp;&ensp;<span className='text-red-600'>{`like`}</span>{` ? `}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`( `}<span className='text-green-400'>{`/* ไอคอนหัวใจที่กดไลค์แล้ว */`}</span>{` )`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`:`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`( `}<span className='text-green-400'>{`/* ไอคอนหัวใจที่ยังไม่กดไลค์ */`}</span>{` )`}
                  <br/>&ensp;&ensp;&ensp;{`}`}
                  <br/>&ensp;&ensp;{`</`}<span className='text-blue-400'>{`a`}</span>{`>`}
                  
                  
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{` class="flex flex-col items-center pb-4">`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`img`}</span>{` class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg" src={`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardurlpic`}</span>{`} />`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`h5`}</span>{` class="mb-1 text-md font-medium text-gray-900">{`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardfullname`}</span>{`}</`}<span className='text-blue-400'>{`h5`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`span`}</span>{` class="text-sm text-gray-500">{`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardrank`}</span>{`}</`}<span className='text-blue-400'>{`span`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` ExpCard`}
                </div>

                <div className='w-full text-center text-gray-600 mb-4'>
                  <span>ตัวอย่างการสร้าง Components แล้วเรียกใช้งาน Props และมีการจัด Stage</span>
                </div>
              </div>

              {/* File Page Index */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Page Index</label>
              <div className='mb-2'>
                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span><span className='text-green-400'>{` ListCard `}</span><span className='text-pink-400'>{`from`}</span>{` './src/components/items/reactcomponents/ExpCard'`}
                  <br/>
                  <br/><span className='text-blue-400'>{`const`}</span> {` Index = () => {`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<>`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ หนึ่ง <span className='text-yellow-400'>{`" cardrank="`}</span>Project Manager{`" />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ สอง <span className='text-yellow-400'>{`" cardrank="`}</span>System Analyst{`" />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ สาม <span className='text-yellow-400'>{`" cardrank="`}</span>Programmer{`" />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ สี่ <span className='text-yellow-400'>{`" cardrank="`}</span>Programmer{`" />`}
                  <br/>&ensp;&ensp;{`</>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` Index`}
                </div>

                <div className='w-full text-center text-gray-600'>
                  <span>ตัวอย่างการเรียกใช้งาน Components ExpCardComponents แล้วส่งค่า Props</span>
                </div>
              </div>

            </div>

            <hr />

            {/* Exp2 */}
            <div className=''>
              <label for="step1-id" className="text-lg font-bold text-gray-900 block mb-1 mt-5">Exp 2. Reduxjs/Toolkit Hook : State, Reducer </label>
              <p className="text-gray-500 mb-2">เป็นอีกเทคนิคการเขียนรูปแบบหนึ่ง ที่จะมาทดแทนการเขียนในรูปแบบการเขียนแบบ connect() ที่ยุ่งยากในสมัยก่อน </p>
              <p className="text-gray-500 mb-2">โดยสามารถเรียกใช้จาก Library ที่ชื่อว่า react-redux ได้เลย</p>

              <div className="relative mb-2">
                <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={`import { useSelector, useDispatch } from 'react-redux'`} disabled readonly />
              </div>

              <ul className='list-disc ml-8 mb-4'>
                <li><span className='text-yellow-500 font-bold'>useSelector</span> : ใช้แทนการเขียน mapStateToProps โดยจะนำค่า State ที่อยู่ใน Store มาแปลงเป็นตัวแปรแทนการส่งแบบ props</li>
                <li><span className='text-yellow-500 font-bold'>useDispatch</span> : ใช้แทนการเขียน mapDispatchToProps โดยจะทำหน้าที่ครอบ Action เพื่อส่งข้อมูลไปที่ reducer ต่อไป</li>
              </ul>

              <div className='mb-2'>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <div class="text-white mb-2 inline-block">
                    {'จำนวนไลค์ : ['}<span className='text-red-500'>{cntlike}</span>{'] => รายชื่อคนที่ไลค์ ['}<span className='text-yellow-400'>{arrlistlike.join(', ')}</span>{']'}
                  </div>
                  <div class="grid grid-cols-4 gap-4">
                    <ListCardV2 cardurlpic={`https://robohash.org/1`} cardfullname={`ทดสอบ หนึ่ง`} cardrank={`Project Manager`} />
                    <ListCardV2 cardurlpic={`https://robohash.org/2`} cardfullname={`ทดสอบ สอง`} cardrank={`System Analyst`} />
                    <ListCardV2 cardurlpic={`https://robohash.org/3`} cardfullname={`ทดสอบ สาม`} cardrank={`Programmer`} />
                    <ListCardV2 cardurlpic={`https://robohash.org/8`} cardfullname={`ทดสอบ สี่`} cardrank={`Programmer`} />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-500 mb-2">จากตัวอย่างด้านบนเป็นการแสดงรายชื่อพนักงานเป็นรูปแบบ Card หลายๆใบ</p>
              <p className="text-gray-500 mb-2">และการ์ดแต่ละใบจะมีข้อมูลที่ไม่เหมือนกันด้วย ตามข้อมูลที่ส่งไปให้ Component</p>
              <p className="text-gray-500 mb-2">และจะมี Action การจัดการ State ภายในของตัวเองดังนี้</p>
              <ul className='list-disc ml-8 mb-2'>
                <li>like : state ที่เอาไว้เก็บค่า true false การกดถูกใจ</li>
                <li>onClick รูปหัวใจ : จะทำการจัดการ state like</li>
              </ul>
              <p className="text-gray-500 mb-2">และจะมีการใช้งานของ Redux ดังนี้</p>
              <ul className='list-disc ml-8 mb-2'>
                <li>cntlike : state store redux ตัวแปรที่เก็บจำนวนคนที่เรากดไลค์ <span className='text-red-500'>(จะมองว่าเป็น state global)</span> </li>
                <li>arrlistlike : state store redux ตัวแปรที่เก็บรายชื่อคนที่เรากดไลค์ <span className='text-red-500'>(จะมองว่าเป็น state global)</span> </li>
                <li>setMenuReduxjsSetCntlike : reducer action ทำการเปลี่ยนแแปลงค่า arrlistlike และ เปลี่ยนแปลงค่า cntlist ที่เป็น state store redux</li>
              </ul>

              {/* File createSlice, configureStore from reduxjx/toolkit */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File createSlice, configureStore from reduxjx/toolkit</label>
              <div className='mb-2'>
                <div className='w-full mb-2'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./store/storeReducers.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-green-500 pl-4'>
                    storeReducers.jsx จะเป็นไฟล์ที่ใช้ create createSlice, configureStore ของ reduxjs/toolkit
                  </span>
                </div>

                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span><span className='text-yellow-400'>{` { `}</span>{`createSlice, configureStore`}<span className='text-yellow-400'>{` } `}</span><span className='text-pink-400'>{`from `}</span><span className='text-orange-400'>{`"@reduxjs/toolkit"`}</span>
                  <br/><br/><span className='text-pink-400'>{`const`}</span>{` storeConfig = `}<span className='text-yellow-400'>{`createSlice`}</span>{`({`}
                  <br/>&ensp;<span className='text-blue-300'>{`name`}</span>{`: 'protytype',`}
                  <br/>&ensp;<span className='text-blue-300'>{`initialState`}</span>{`: { jsmenureduxjs: {cntlike: 0 , arrlistlike: []} },`}
                  <br/>&ensp;<span className='text-blue-300'>{`reducers`}</span>{`: {`}
                  <br/>&ensp;&ensp;<span className='text-yellow-400'>{`setMenuReduxjsSetCntlike`}</span>{`(state, { payload }) {`}
                  <br/>&ensp;&ensp;&ensp;<span className='text-green-400'>{`/* Action ที่ต้องการจัดการ State payload.like & payload.fullname */`}</span>
                  <br/>&ensp;&ensp;{`}`}
                  <br/>&ensp;{`}`}
                  <br/>{`})`}
                  <br/><br/><span className='text-pink-400'>{`export`}</span>{` const { setMenuReduxjsSetCntlike } = storeConfig.actions`}
                  <br/><span className='text-pink-400'>{`export default`}</span><span className='text-yellow-400'>{` configureStore`}</span>{`({`}<span className='text-yellow-400'>{`reducer`}</span>{`: storeConfig.`}<span className='text-yellow-400'>{`reducer`}</span>{`})`}
                </div>

                <div className='w-full text-center text-gray-600 mb-4'>
                  ตัวอย่างการสร้าง :: initialState<span className='text-green-400'>/*ตัวแปรที่เอาไว้เก็บ state global*/</span> , reducers<span className='text-green-400'>/*ตัวตัวจัดการ action state*/</span>
                </div>
              </div>

              {/* File Main */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Main</label>
              <div className='mb-2'>
                <div className='w-full mb-2'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./main.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-green-500 pl-4'>
                    main.jsx จะเป็นไฟล์เริ่มต้นระบบ และมีการกำหนด Provider Store ที่สร้างจากไฟล์ storeReducers.jsx
                  </span>
                </div>

                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span>{` React `}<span className='text-pink-400'>{`from`}</span><span className='text-orange-400'>{` 'react'`}</span>
                  <br/><span className='text-pink-400'>{`import`}</span>{` ReactDOM `}<span className='text-pink-400'>{`from`}</span><span className='text-orange-400'>{` 'react-dom/client'`}</span>
                  <br/><span className='text-pink-400'>{`import`}</span><span className='text-yellow-400'>{` { `}</span>{`Provider`}<span className='text-yellow-400'>{` } `}</span><span className='text-pink-400'>{`from`}</span><span className='text-orange-400'>{` 'react-redux'`}</span>
                  <br/><span className='text-pink-400'>{`import`}</span>{` store `}<span className='text-pink-400'>{`from`}</span><span className='text-orange-400'>{` './store/storeReducers'`}</span>
                  <br/>{`ReactDOM.`}<span className='text-yellow-400'>{`createRoot`}</span>{`(document.`}<span className='text-yellow-400'>{`getElementById`}</span>{`('root')).`}<span className='text-yellow-400'>{`render`}</span>{`(`}
                  <br/>&ensp;{`<`}<span className='text-sky-400'>{`React`}</span>{`>`}
                  <br/>&ensp;&ensp;{`<`}<span className='text-sky-400'>{`Provider`}</span>{` store={store}>`}
                  <br/>&ensp;&ensp;&ensp;<span className='text-green-400'>{`/* Source Code */`}</span>
                  <br/>&ensp;&ensp;{`</`}<span className='text-sky-400'>{`Provider`}</span>{`>`}
                  <br/>&ensp;{`</`}<span className='text-sky-400'>{`React`}</span>{`>`}
                  <br/>{`)`}
                </div>

                <div className='w-full text-center text-gray-600 mb-4'>
                  ตัวอย่าง :: การกำหนด Provider
                </div>
              </div>

              {/* File Component ExpCardV2 */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Component ExpCardV2</label>
              <div className='mb-2'>
                <div className='w-full mb-2'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/reactreduxjs/ExpCardV2.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-green-500 pl-4'>
                    ExpCardV2.jsx จะเป็น Component ที่เอาไว้สร้างรูปแบบ Card ขึ้นมาหนึ่งใบเมื่อถูกเรียกใช้ Component
                  </span>
                </div>

                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span>{` { `}<span className='text-blue-400'>{`useState`}</span>{` } `}<span className='text-pink-400'>{`from`}</span>{` 'react'`}
                  <br/><span className='text-pink-400'>{`import`}</span>{` { `}<span className='text-blue-400'>{`useSelector`}</span>{`, `}<span className='text-blue-400'>{`useDispatch`}</span>{` } `}<span className='text-pink-400'>{`from`}</span>{` 'react-redux'`}
                  <br/><span className='text-pink-400'>{`import`}</span>{` { `}<span className='text-blue-400'>{`setMenuReduxjsSetCntlike`}</span>{` } `}<span className='text-pink-400'>{`from`}</span>{` '../../../store/storeReducers'`}
                  <br/>
                  <br/><span className='text-blue-400'>{`const`}</span> {` ExpCardV2 = (`}<span className='text-green-400'>{`props`}</span>{`) => {`}
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span><span className='text-yellow-400'>{` dispatch `}</span>{` = `}<span className='text-yellow-400'>{`useDispatch`}</span>{`()`}
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span>{` [`}<span className='text-red-600'>{`like`}</span>{`, `}<span className='text-yellow-400'>{`setLike`}</span> {`] = `}<span className='text-yellow-400'>{`useState`}</span>{`(false)`}
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span><span className='text-red-600'>{` arrlistlike`}</span>{` = `}<span className='text-yellow-400'>{`useSelector`}</span>{`((`}<span className='text-blue-400'>{`state`}</span>{`) => `}<span className='text-blue-400'>{`state`}</span>{`.`}<span className='text-blue-400'>{`jsmenureduxjs`}</span>{`.`}<span className='text-blue-400'>{`arrlistlike`}</span>{`)`}
                  <br/>
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span><span className='text-yellow-400'>{` fnSetLike`}</span>{` = async () => {`}
                  <br/>&ensp;&ensp;<span className='text-yellow-400'>{`setLike`}</span>{`(!`}<span className='text-red-600'>{`like`}</span>{`)`}
                  <br/>&ensp;&ensp;<span className='text-yellow-400'>{`dispatch`}</span>{`(`}<span className='text-yellow-400'>{`setMenuReduxjsSetCntlike`}</span>{`({ like: !`}<span className='text-red-600'>{`like`}</span>{`, fullname: `}<span className='text-green-400'>{`props`}</span>{`.`}<span className='text-yellow-400'>{`cardfullname`}</span>{` }))`}
                  <br/>&ensp;{`}`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{` class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">`}
                  <br/>
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`a`}</span><span className='text-blue-300'>{` onClick`}</span>{`={`}<span className='text-yellow-400'>{`fnSetLike`}</span>{`}>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`{`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;<span className='text-red-600'>{`like`}</span>{` ? `}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;{`( `}<span className='text-green-400'>{`/* ไอคอนหัวใจที่กดไลค์แล้ว */`}</span>{` )`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;{`:`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;{`( `}<span className='text-green-400'>{`/* ไอคอนหัวใจที่ยังไม่กดไลค์ */`}</span>{` )`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`}`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`a`}</span>{`>`}
                  <br/>
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{` class="flex flex-col items-center pb-4">`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`img`}</span>{` class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg" src={`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardurlpic`}</span>{`} />`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`h5`}</span>{` class="mb-1 text-md font-medium text-gray-900">{`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardfullname`}</span>{`}</`}<span className='text-blue-400'>{`h5`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`span`}</span>{` class="text-sm text-gray-500">{`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardrank`}</span>{`}</`}<span className='text-blue-400'>{`span`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{` className="pb-2 pl-6">`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`เพื่อนที่คุณอาจรู้จัก`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{` className='text-left items-left'>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`ul`}</span>{` className='items-left list-disc ml-8'>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{`{`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='text-red-600'>{`arrlistlike`}</span>{`.`}<span className='text-yellow-400'>{`filter`}</span>{`((str) => str != `}<span className='text-green-400'>{`props`}</span>{`.`}<span className='text-yellow-400'>{`cardfullname`}</span>{` && `}<span className='text-red-600'>{`arrlistlike`}</span>{`.`}<span className='text-yellow-400'>{`includes`}</span>{`(`}<span className='text-green-400'>{`props`}</span>{`.`}<span className='text-yellow-400'>{`cardfullname`}</span>{`)).`}<span className='text-yellow-400'>{`map`}</span>{`((`}<span className='text-pink-600'>{`str`}</span>{`) => `}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`li`}</span>{`>{`}<span className='text-pink-600'>{`str`}</span>{`}</`}<span className='text-blue-400'>{`li`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{`)`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{`}`}
                  <br/>&ensp;&ensp;&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`ul`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>
                  <br/>&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` ExpCardV2`}
                </div>

                <div className='w-full text-center text-gray-600 mb-4'>
                  <span>ตัวอย่างการสร้าง Components แล้วเรียกใช้งาน Props และมีการจัด Stage และ Store Reducer</span>
                </div>
              </div>

              {/* File Page Index */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Page Index</label>
              <div className='mb-2'>
                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span>{` { `}<span className='text-yellow-400'>{`useSelector`}</span>{` } `}<span className='text-pink-400'>{`from`}</span>{` 'react-redux'`}
                  <br/><span className='text-pink-400'>{`import`}</span><span className='text-green-400'>{` ListCard `}</span><span className='text-pink-400'>{`from`}</span>{` './src/components/items/reactcomponents/ExpCardV2'`}
                  <br/>
                  <br/><span className='text-blue-400'>{`const`}</span> {` Index = () => {`}
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span><span className='text-red-600'>{` cntlike `}</span>{`= `}<span className='text-yellow-400'>{`useSelector`}</span>{`((`}<span className='text-blue-400'>{`state`}</span>{`) => `}<span className='text-blue-400'>{`state`}</span>{`.`}<span className='text-blue-400'>{`jsmenureduxjs`}</span>{`.`}<span className='text-blue-400'>{`cntlike`}</span>{`)`}
                  <br/>&ensp;<span className='text-blue-400'>{`const`}</span><span className='text-red-600'>{` arrlistlike `}</span>{`= `}<span className='text-yellow-400'>{`useSelector`}</span>{`((`}<span className='text-blue-400'>{`state`}</span>{`) => `}<span className='text-blue-400'>{`state`}</span>{`.`}<span className='text-blue-400'>{`jsmenureduxjs`}</span>{`.`}<span className='text-blue-400'>{`arrlistlike`}</span>{`)`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<>`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`{'จำนวนไลค์ : ['}<`}<span className='text-blue-400'>{`span`}</span>{` className='text-red-500'>{`}<span className='text-red-600'>{`cntlike`}</span>{`}</`}<span className='text-blue-400'>{`span`}</span>{`>{'] `}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`=> รายชื่อคนที่ไลค์ ['}<`}<span className='text-blue-400'>{`span`}</span>{` className='text-yellow-400'>{`}<span className='text-red-600'>{`arrlistlike`}</span>{`.`}<span className='text-yellow-400'>{`join`}</span>{`(', ')}</`}<span className='text-blue-400'>{`span`}</span>{`>{']'}`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ หนึ่ง <span className='text-yellow-400'>{`" cardrank="`}</span>Project Manager{`" />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ สอง <span className='text-yellow-400'>{`" cardrank="`}</span>System Analyst{`" />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ สาม <span className='text-yellow-400'>{`" cardrank="`}</span>Programmer{`" />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard `}</span> <span className='text-yellow-400'>{`cardurlpic="`}</span>url รูปภาพพนักงาน <span className='text-yellow-400'>{`" cardfullname="`}</span>ทดสอบ สี่ <span className='text-yellow-400'>{`" cardrank="`}</span>Programmer{`" />`}
                  <br/>&ensp;&ensp;{`</>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` Index`}
                </div>

                <div className='w-full text-center text-gray-600'>
                  <span>ตัวอย่างการเรียกใช้งาน Components ExpCardComponents แล้วส่งค่า Props ส่งเรียกใช้ Store State</span>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReduxjsReactHooks