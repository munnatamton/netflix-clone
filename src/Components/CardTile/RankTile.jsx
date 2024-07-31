import React from 'react'


const RankTile = (props) => {
  return (
    <>
    <div className='flex w-[285px] h-[145px]  mt-[10px] mb-[11px] me-[5px] rounded-[2px] flex-shrink-0'>
        <img src={props.rank} className='object-cover h-full'/>
        <img src={props.image} className='object-cover h-full w-1/2'/>
    </div>
   </>  )
}

export default RankTile