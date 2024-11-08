import React from 'react'
import ListCard from '../../../components/items/reactcomponents/ExpCardComponents'

const Component = (props) => {
  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white rounded-lg p-2 grid place-items-center">
          
          <div className="w-3/4 bg-white border border-gray-700 shadow rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">React.jsx Component</h2>
            <p className="text-gray-500 mb-2">ในการพัฒนาระบบด้วย React จะแบ่งการแสดงผลของระบบที่พัฒนา ออกเป็นส่วนย่อยๆที่เรียกว่า Component โดยจะไม่เขียนโค้ดทั้งหมดไว้อยู่ในหน้าเดียว เพื่อให้ง่ายต่อการจัดการโค้ด และการนำกลับมาใช้ได้โดยไม่ต้องเขียนโค้ดซ้ำๆกันในหลายๆที่</p>
            
            {/* Exp1 */}
            <div className='mb-6'>
              <label for="step1-id" className="text-md font-bold text-gray-900 block mb-1 mt-5">Exp 1. Components Card </label>

              <div className='mb-2'>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <div class="grid grid-cols-4 gap-4">
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-500 mb-2">จากตัวอย่างด้านบนเป็นการแสดงรายชื่อพนักงานเป็นรูปแบบ Card จาก UI เราจะแบ่งออกเป็น 3 ส่วนได้แก่ รูปภาพ , ชื่อ , ตำแหน่ง ของพนักงาน</p>
              <p className="text-gray-500 mb-2">โดยการ์ดที่เราเห็นเราสามารถเขียนแยกให้เป็น Components ย่อยแยกออกจาก File หลักได้ดังนี้</p>

              {/* File Component Card */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Component Card</label>
              <div className='mb-2'>
                <div className='w-full mb-2'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/reactcomponents/ExpCardComponents.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-green-500 pl-4'>
                    ExpCardComponents.jsx จะเป็น Component ที่เอาไว้สร้างรูปแบบ Card ขึ้นมาหนึ่งใบเมื่อถูกเรียกใช้ Component
                  </span>
                </div>


                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-blue-400'>{`const`}</span> {` ExpCardComponents = () => {`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span> {` class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span> {` class="flex flex-col items-center pb-4">`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`img`}</span> {` class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg" src="`}<span className='text-yellow-400'>{`https://placehold.co/500x500`}</span>{`" />`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`h5`}</span> {` class="mb-1 text-md font-medium text-gray-900">`}<span className='text-yellow-400'>{`ชื่อ: ไม่บอกหรอก`}</span>{`</`}<span className='text-blue-400'>{`h5`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`span`}</span> {` class="text-sm text-gray-500">`}<span className='text-yellow-400'>{`ตำแหน่ง: อยากรู้อะดิ`}</span>{`</`}<span className='text-blue-400'>{`span`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span> {`>`}
                  <br/>&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span> {`>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` ExpCardComponents`}
                </div>

                <div className='w-full text-center text-gray-600 mb-4'>
                  <span>ตัวอย่างการสร้าง Components</span>
                </div>

                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span><span className='text-green-400'>{` ListCard `}</span><span className='text-pink-400'>{`from`}</span>{` './src/components/items/reactcomponents/ExpCardComponents'`}
                  <br/>
                  <br/><span className='text-blue-400'>{`const`}</span> {` Index = () => {`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<>`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard`}</span>{` />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard`}</span>{` />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard`}</span>{` />`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-green-400'>{`ListCard`}</span>{` />`}
                  <br/>&ensp;&ensp;{`</>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` Index`}
                </div>

                <div className='w-full text-center text-gray-600'>
                  <span>ตัวอย่างการเรียกใช้งาน Components ExpCardComponents</span>
                </div>

              </div>
            </div>

            <hr/>

            {/* Exp2 */}
            <div className=''>
              <label for="step1-id" className="text-md font-bold text-gray-900 block mb-1 mt-5">Exp 2. Components Card : Props </label>

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
              <p className="text-gray-500 mb-2">จะมีการส่ง prop ไปทั้ง 3 ตัวที่กำหนดไว้</p>
              <ul className='list-disc ml-8'>
                <li>cardurlpic : url รูปภาพพนักงาน</li>
                <li>cardfullname : ชื่อพนักงาน</li>
                <li>cardrank : ตำแหน่งพนักงาน</li>
              </ul>

              {/* File Component Card */}
              <label for="step1-id" className="text-md font-bold text-gray-700 block mb-1 mt-5">File Component Card</label>
              <div className='mb-2'>
                <div className='w-full mb-2'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/reactcomponents/ExpCardComponents.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-green-500 pl-4'>
                    ExpCardComponents.jsx จะเป็น Component ที่เอาไว้สร้างรูปแบบ Card ขึ้นมาหนึ่งใบเมื่อถูกเรียกใช้ Component
                  </span>
                </div>


                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-blue-400'>{`const`}</span> {` ExpCardComponents = (`}<span className='text-green-400'>{`props`}</span>{`) => {`}
                  <br/>
                  <br/>&ensp;<span className='text-pink-400'>{`return`}</span>{` (`}
                  <br/>&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span> {` class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">`}
                  <br/>&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`div`}</span> {` class="flex flex-col items-center pb-4">`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`img`}</span> {` class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg" src={`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardurlpic`}</span>{`} />`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`h5`}</span> {` class="mb-1 text-md font-medium text-gray-900">{`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardfullname`}</span>{`}</`}<span className='text-blue-400'>{`h5`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;&ensp;{`<`}<span className='text-blue-400'>{`span`}</span> {` class="text-sm text-gray-500">{`}<span className='text-green-400'>{`props`}</span>.<span className='text-yellow-400'>{`cardrank`}</span>{`}</`}<span className='text-blue-400'>{`span`}</span>{`>`}
                  <br/>&ensp;&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span> {`>`}
                  <br/>&ensp;&ensp;{`</`}<span className='text-blue-400'>{`div`}</span> {`>`}
                  <br/>&ensp;{`)`}
                  <br/>{`}`}
                  <br/>
                  <br/><span className='text-pink-400'>{`export default`}</span>{` ExpCardComponents`}
                </div>

                <div className='w-full text-center text-gray-600 mb-4'>
                  <span>ตัวอย่างการสร้าง Components แล้วเรียกใช้งาน Props</span>
                </div>

                <div className="w-full text-white bg-slate-900 border border-gray-600 shadow rounded-lg py-3 px-5 mb-2">
                  <br/><span className='text-pink-400'>{`import`}</span><span className='text-green-400'>{` ListCard `}</span><span className='text-pink-400'>{`from`}</span>{` './src/components/items/reactcomponents/ExpCardComponents'`}
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




          </div>
        </div>
      </div>
    </div>
  )
}

export default Component