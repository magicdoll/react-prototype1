import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageTitle } from '../store/storeReducers'


const Index = () => {
  const disoatch = useDispatch()
  useEffect(() => {
    disoatch(setPageTitle('Home'))
  })

  return (
    <div className='py-1'>
      <div className="grid grid-cols-1">
        <div className="block w-full bg-white border border-gray-200 rounded-lg shadow p-2">
          ข่าวสาร และกิจกรรม
          <div className="grid grid-cols-3 gap-3 p-1">
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <img className="rounded-t-lg" src="https://placehold.co/500x300"  />
                </a>
                <div className="p-1">
                  <a href="#">
                    <h5 className="pl-2 pr-2 mb-2 text-xs tracking-tight text-blue-800">25 Sep 2024</h5>
                  </a>
                  <p className="pl-2 pr-2 mb-2 font-normal text-gray-800"> Silkspan .......... </p>
                  <p className="pl-2 pr-2 mb-2 font-normal text-gray-600"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates delectus quidem amet beatae, obcaecati quia molestiae voluptatibus. Odio, dolorem ipsum.. </p>
                  <hr />
                  <p className="py-2 pl-2 pr-2 font-normal text-gray-800"> HR Department </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <img className="rounded-t-lg" src="https://placehold.co/500x300"  />
                </a>
                <div className="p-1">
                  <a href="#">
                    <h5 className="pl-2 pr-2 mb-2 text-xs tracking-tight text-blue-800">25 Sep 2024</h5>
                  </a>
                  <p className="pl-2 pr-2 mb-2 font-normal text-gray-800"> Silkspan .......... </p>
                  <p className="pl-2 pr-2 mb-2 font-normal text-gray-600"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus cum ratione vel? Modi similique enim fuga consectetur voluptatum quibusdam delectus vitae unde esse veniam, sapiente.. </p>
                  <hr />
                  <p className="py-2 pl-2 pr-2 font-normal text-gray-800"> HR Department </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <img className="rounded-t-lg" src="https://placehold.co/500x300"  />
                </a>
                <div className="p-1">
                  <a href="#">
                    <h5 className="pl-2 pr-2 mb-2 text-xs tracking-tight text-blue-800">25 Sep 2024</h5>
                  </a>
                  <p className="pl-2 pr-2 mb-2 font-normal text-gray-800"> Silkspan .......... </p>
                  <p className="pl-2 pr-2 mb-2 font-normal text-gray-600"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit voluptatum rem dolorum aut modi consequatur, corporis illo at eaque similique enim voluptate atque? Quam aliquam non.. </p>
                  <hr />
                  <p className="py-2 pl-2 pr-2 font-normal text-gray-800"> HR Department </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index