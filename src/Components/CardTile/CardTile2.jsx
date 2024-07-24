import React from 'react'
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";


const CardTile2 = (props) => {
  return (
    <>
    <div className='flex w-[285px] h-[575px] mt-[10px] mb-[11px] me-[5px] rounded-[4px] flex-shrink-0'>
    <button className='absolute left-0 hover:bg-black/20 text-white w-[80px] h-[575px]'><IoIosArrowBack className='size-[70px]'/></button>
        <img src={props.image} className='object-cover h-full w-full  '/>
    <button className='absolute right-[70px] hover:bg-black/20 text-white w-[80px] h-[575px]'><IoIosArrowForward className='size-[70px]'/></button>
    </div>
   </>
  )
}

export default CardTile2