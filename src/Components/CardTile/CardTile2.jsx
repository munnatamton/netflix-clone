import React from 'react'
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";


const CardTile2 = (props) => {
  return (
    <>
    <div className='flex mt-[10px] mb-[11px] me-[5px]'>
    <button className='absolute left-0 hover:bg-black/20 text-white w-[80px] h-[575px]'><IoIosArrowBack className='size-[70px]'/></button>
    <div className='flex w-[285px] h-[575px] rounded-[4px] flex-shrink-0'>
        <img src={props.image} className='object-cover h-full w-full  '/>
    </div>
    <button className='absolute right-[70px] hover:bg-black/20 text-white w-[80px] h-[575px]'><IoIosArrowForward className='size-[70px]'/></button>
    </div>
   </>
  )
}

export default CardTile2