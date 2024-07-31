import React from 'react'

const CardTile1 = (props) => {
  return (
    <>
    <div className='flex w-[285px] h-[160px] rounded-[2px] flex-shrink-0 mt-[10px] mb-[11px] me-[5px]'>
        <img src={props.image} className='object-cover h-full w-full  '/>
    </div>
   </>
  )
}


export default CardTile1