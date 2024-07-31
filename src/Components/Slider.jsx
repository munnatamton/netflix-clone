import React,{useRef} from 'react'
import { IoPlaySharp,IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import CardTile1 from './CardTile/CardTile1';

const Slider = () => {
    const refEle = useRef(null)

    const sliderRight=()=>{
        refEle.current.scrollLeft = -500
      }

      const sliderLeft=()=>{
        refEle.current.scrollLeft = 500
      }
      
  return (
    <div ref={refEle} className="scroll-smooth flex w-[100vw] overflow-x-scroll scrollbar-hide">
            <button onClick={sliderRight}  className='absolute left-0 hover:bg-black/20 text-white w-[60px] h-[160px] mt-[10px] mb-[11px] me-[5px]'><IoIosArrowBack className='hover:scale-125 size-[60px]'/></button>
                <CardTile1 image="logos/MoviePoster1.png" />
                <CardTile1 image="logos/MoviePoster2.png" />
                <CardTile1 image="logos/MoviePoster3.png" />
                <CardTile1 image="logos/MoviePoster4.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
            <button onClick={sliderLeft} className='absolute right-[70px] hover:bg-black/20 text-white w-[60px] h-[160px] mt-[10px] mb-[11px] me-[5px]'><IoIosArrowForward className='hover:scale-125 size-[60px]'/></button>
    </div>
  )
}

export default Slider