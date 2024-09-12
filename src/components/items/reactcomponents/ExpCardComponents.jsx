import { useEffect, useState } from 'react'

const ExpCardComponents = (props) => {
  const [cardurlpic, setCardUrlPic] = useState()
  const [cardfullname, setCardFullname] = useState()
  const [cardrank, setCardRank] = useState()

  useEffect(() => {
    setCardUrlPic(props.cardurlpic ? props.cardurlpic : 'https://placehold.co/500x500')
    setCardFullname(props.cardfullname ? props.cardfullname : 'ไม่บอกหรอก')
    setCardRank(props.cardrank ? props.cardrank : 'อยากรู้อะดิ')
  })

  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div class="flex flex-col items-center pb-4">
        <img class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg" src={cardurlpic} />
        <h5 class="mb-1 text-md font-medium text-gray-900">ชื่อ: {cardfullname}</h5>
        <span class="text-sm text-gray-500">ตำแหน่ง: {cardrank}</span>
      </div>
    </div>
  )
}

export default ExpCardComponents