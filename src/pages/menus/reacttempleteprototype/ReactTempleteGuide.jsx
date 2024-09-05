import React from 'react'

const ReactTempleteGuide = (props) => {
  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white rounded-lg p-2 grid place-items-center">
          
          <div className="w-3/4 bg-white border border-gray-700 shadow rounded-lg p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Templete Guid Prototype : Silkspan</h2>
            <p className="text-gray-500 mb-2">อธิบายโครางสร้างต่างๆของ React Templete Prototype ของบริษัท Silkspan</p>
            <p className="text-gray-500 mb-3">ส่วนไหนใช้อะไรรูปแบบไหน ประกอบไปด้วยอะไรบ้างรูปแบบไหนบ้าง</p>
            <p className="text-lg font-bold text-gray-500 mb-2">หัวข้อหลักๆ</p>
            <ul className='list-disc ml-8'>
              <li>Components</li>
              <li>Pages</li>
            </ul>

            <div className=''>
              <label for="step1-id" className="text-md font-bold text-gray-900 block mb-1 mt-5">Components</label>
              {/* App.jsx */}
              <div className='grid grid-cols-2 gap-4 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/App.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    App.jsx จะเป็น Component ที่คุมทุกไฟล์ในระบบนี้ไว้
                    <ul className="list-inside list-disc  pl-6">
                      <li>เอาไว้กำหนดค่าต่างๆให้กับทุกหน้าได้</li>
                      <li>เอาไว้ check login ของทุกๆหน้าได้</li>
                      <li>เอาไว้ check permission ของทุกๆหน้าได้</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่างโครง Component App.jsx</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2 rounded border border-dashed border-white">
                        <div className="col-span-3 text-gray-600">Navbar.jsx</div>
                        <div className="row-span-2 text-gray-600">Sidebar.jsx</div>
                        <div className="row-span-2 col-span-2 text-gray-600">Index.jsx</div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* Navbar.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/layouts/Navbar.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    Navbar.jsx เป็น Component แยกออกจากตัวอื่นๆ
                    <ul className="list-inside list-disc  pl-6">
                      <li>ทำหน้าที่เป็น Topbar Menu ด้านบน Page</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่างโครง Component Navbar.jsx</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                        <div className="col-span-3 rounded border border-dashed border-amber-300">Navbar.jsx</div>
                        <div className="row-span-2 text-gray-600">Sidebar.jsx</div>
                        <div className="row-span-2 col-span-2 text-gray-600">Index.jsx</div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* ListMenu.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/ListMenu.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    ListMenu.jsx เป็น Component แยกออกจากตัวอื่นๆ
                    <ul className="list-inside list-disc  pl-6">
                      <li>ทำหน้าที่สร้างเมนู</li>
                      <li>สร้างเมนูเป็นกลุ่มๆ</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่างโครง Component ListMenu.jsx</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                        <div className="col-span-3 text-gray-600">Navbar.jsx</div>
                        <div className="row-span-2">
                          <div className="grid grid-rows-1 grid-flow-col gap-1 text-center p-1">
                            <div className="rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                          </div>
                        </div>
                        <div className="row-span-2 col-span-2 text-gray-600">Index.jsx</div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* Sidebar.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/layouts/Sidebar.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    Sidebar.jsx เป็น Component แยกออกจากตัวอื่นๆ
                    <ul className="list-inside list-disc  pl-6">
                      <li>ทำหน้าที่เป็น Menubar ด้านข้างซ้ายของ Page</li>
                      <li>มีการเรียกใช้ Component : ListMenu.jsx เพื่อสร้างเมนูต่างๆขึ้นมา</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่างโครง Component Sidebar.jsx</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                        <div className="col-span-3 text-gray-600">Navbar.jsx</div>
                        <div className="row-span-2 rounded border border-dashed border-lime-300">
                          Sidebar.jsx
                          <div className="grid grid-rows-2 grid-flow-col gap-1 text-center p-1">
                            <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                            <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                          </div>
                        </div>
                        <div className="row-span-2 col-span-2 text-gray-600">Index.jsx</div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* BlankPage.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/BlankPage.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    BlankPage.jsx เป็น Component หลักที่จะเอาไว้ให้ Page อื่นๆที่สร้างใหม่มาเกาะได้โดย
                    <ul className="list-inside list-disc  pl-6">
                      <li>จะเป็น Component เปล่าๆ</li>
                      <li>มีการเรียกใช้ Component : App.jsx ไว้ตั้งต้นของ Page</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่างโครง Component Page BlankPage.jsx</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2 rounded border border-dashed border-white">
                        <div className="row-span-3 col-span-3 rounded border border-pink-400">BlankPage.jsx <br /><br /><br /></div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* DefaultPage.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/components/items/DefaultPage.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    DefaultPage.jsx เป็น Component หลักที่จะเอาไว้ให้ Page อื่นๆที่สร้างใหม่มาเกาะได้โดย
                    <ul className="list-inside list-disc  pl-6">
                      <li>จะเป็น Component สำเร็จรูปที่มี bar ต่างๆไว้ให้แล้ว</li>
                      <li>มีการเรียกใช้ Component : App.jsx ไว้ตั้งต้นของ Page</li>
                      <li>มีการเรียกใช้ Component : Narbar.jsx เมนูบน Page</li>
                      <li>มีการเรียกใช้ Component : Sidebar.jsx เมนูซ้ายมือ Page</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่างโครง Component Page DefaultPage.jsx</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2 rounded border border-dashed border-white">
                        <div className="row-span-3 col-span-3 rounded border border-pink-400">
                          DefaultPage.jsx
                          <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                            <div className="col-span-3 rounded border border-dashed border-amber-300">Navbar.jsx</div>
                            <div className="row-span-2 rounded border border-dashed border-lime-300">
                              Sidebar.jsx
                              <div className="grid grid-rows-2 grid-flow-col gap-1 text-center p-1">
                                <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                                <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                              </div>
                            </div>
                            <div className="row-span-2 col-span-2 text-gray-600">Index.jsx</div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />

              <label for="step1-id" className="text-md font-bold text-gray-900 block mb-1 mt-2">Pages</label>
              {/* Login.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/pages/Login.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    Login.jsx เป็น Page ที่ทำให้มีการ router มาด้วย host:domain/login
                    <ul className="list-inside list-disc  pl-6">
                      <li>เป็น Page ที่มีหน้าที่เอาไว้ Login เข้าสู่ระบบ</li>
                      <li>มีการเรียกใช้ Component Page : BlankPage.jsx เพื่อต้องการ Component เปล่าๆไว้จัดการส่วนที่เหลือต่อ</li>
                      <li>และส่วนที่เหลือที่เพิ่มเข้ามาในกรอบสีแดงก็คือ Login.jsx</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่าง Page:Login.jsx ที่ใช้งาน Component</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2 rounded border border-dashed border-white">
                        <div className="row-span-3 col-span-3 rounded border border-pink-400">
                          BlankPage.jsx
                          <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                            <div className="row-span-3 col-span-3 rounded border border-red-600">
                              Login.jsx
                              <br />
                              <br />
                              <br />
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* Index.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/pages/menus/Index.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    Index.jsx เป็น Page ที่ทำให้มีการ router มาด้วย host:domain/
                    <ul className="list-inside list-disc pl-6">
                      <li>เป็น Page ที่มีหน้าที่เอาไว้ เป็นหน้าแรกหลังจากที่ Login เข้ามา</li>
                      <li>มีการเรียกใช้ Component Page : DefaultPage.jsx เพื่อต้องการ Component ที่มีจัดการ Navbar & Sidebar มาให้แล้ว</li>
                      <li>ส่วนที่เหลือที่เพิ่มเข้ามาในกรอบสีแดงก็คือ Index.jsx</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่าง Page:Index.jsx ที่ใช้งาน Component</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2 rounded border border-dashed border-white">
                        <div className="row-span-3 col-span-3 rounded border border-pink-400">
                          DefaultPage.jsx
                          <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                            <div className="col-span-3 rounded border border-dashed border-amber-300">Navbar.jsx</div>
                            <div className="row-span-2 rounded border border-dashed border-lime-300">
                              Sidebar.jsx
                              <div className="grid grid-rows-2 grid-flow-col gap-1 text-center p-1">
                                <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                                <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                              </div>
                            </div>
                            <div className="row-span-2 col-span-2 rounded border border-red-600">Index.jsx</div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
              {/* ReactTempleteGuide.jsx */}
              <div className='grid grid-cols-2 gap-4 mt-2 mb-2'>
                <div className='w-full'>
                  <div className="relative mb-2">
                    <input id="step1-id" type="text" className="col-span-6 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500" value={'./src/pages/menus/reacttempleteprototype/ReactTempleteGuide.jsx'} disabled readonly />
                  </div>
                  <span className='text-xs text-gray-500 pl-4'>
                    ReactTempleteGuide.jsx เป็น Page ที่ทำให้มีการ router มาด้วย host:domain/reacttempleteguide
                    <ul className="list-inside list-disc pl-6">
                      <li>เป็น Page ที่มีหน้าที่เอาไว้ เป็นหน้าแรกหลังจากที่ Login เข้ามา</li>
                      <li>มีการเรียกใช้ Component Page : DefaultPage.jsx เพื่อต้องการ Component ที่มีจัดการ Navbar & Sidebar มาให้แล้ว</li>
                      <li>ส่วนที่เหลือที่เพิ่มเข้ามาในกรอบสีแดงก็คือ ReactTempleteGuide.jsx</li>
                    </ul>
                  </span>
                </div>
                <div className="w-full bg-gray-700 border border-gray-600 shadow rounded-lg py-3 px-5">
                  <h2 className="text-md font-semibold text-gray-400 mb-2">ตัวอย่าง Page:ReactTempleteGuide.jsx ที่ใช้งาน Component</h2>
                  <address className="relative bg-gray-600 border-gray-500 p-4 rounded-lg border not-italic grid grid-cols-1">
                    <div className="space-y-2 text-gray-400 leading-loose hidden sm:block">

                      <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2 rounded border border-dashed border-white">
                        <div className="row-span-3 col-span-3 rounded border border-pink-400">
                          DefaultPage.jsx
                          <div className="grid grid-rows-3 grid-flow-col gap-1 text-center p-2">
                            <div className="col-span-3 rounded border border-dashed border-amber-300">Navbar.jsx</div>
                            <div className="row-span-2 rounded border border-dashed border-lime-300">
                              Sidebar.jsx
                              <div className="grid grid-rows-2 grid-flow-col gap-1 text-center p-1">
                                <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                                <div className="col-span-2 rounded border border-dashed border-blue-400">ListMenu.jsx</div>
                              </div>
                            </div>
                            <div className="row-span-2 col-span-2 rounded border border-red-600">ReactTempleteGuide.jsx</div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </address>
                </div>
              </div>
              <hr />
            </div>




            

          </div>

        </div>
      </div>
    </div>
  )
}

export default ReactTempleteGuide