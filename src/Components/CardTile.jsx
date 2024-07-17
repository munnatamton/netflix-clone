import React from 'react'

const CardTile = (props) => {
  return (
    <div className='w-[285px] h-[160px] me-[5px] rounded-[2px] flex-shrink-0'>
        <img src={props.image} className='object-cover h-full w-full  '/>

    </div>
  )
}

export default CardTile