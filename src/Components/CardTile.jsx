import React from 'react'

const CardTile = (props) => {
  return (
    <div className='w-[285px] h-[160px] '>
        <img src={props.image} className='object-cover h-full w-full me-[5px] rounded-[2px]'/>

    </div>
  )
}

export default CardTile