import React from 'react'

const CardTile1 = (props) => {
  return (
    <>
    <div className='w-[285px] h-[160px] mt-[10px] mb-[11px] me-[5px] rounded-[2px] flex-shrink-0'>
        <img src={props.image} className='object-cover h-full w-full  '/>

    </div>
   </>
  )
}


export default CardTile1