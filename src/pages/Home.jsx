import React from 'react'
import { IoPlaySharp,IoInformationCircleOutline } from "react-icons/io5";


const Home = () => {
  return (
    <div className='h-full relative'><img src='./logos/MoviePoster.png'/>
    <div className="absolute bottom-0 left-[60px] text-white">
      <img src='/logos/MovieName.png'/>
      <div className='flex text-4xl  font-medium items-center'>
        <img src='./logos/Top10Badge.png' className='h-[32px] w-[32px]'/>
        <h3 className='ms-[15px] my-[15px]'>Türkiye’de Bugün 4 Numara</h3>
      </div>

      <div className='text-3xl w-[636px] text-start'>Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.</div>
      <div className='flex my-[15px]'>
        <button className='flex items-center bg-white text-black px-[30px] py-[15px] text-2xl font-medium rounded-[4px] me-[15px]'><IoPlaySharp className='me-[20px] h-[20px] w-[21.33px]'/>Oynat</button>
        <button className='flex items-center bg-white/30 text-white  px-[30px] py-[15px] text-2xl font-medium rounded-[4px]'><IoInformationCircleOutline className='me-[20px] size-[32px]'/> Daha Fazla Bilgi</button>
      </div>    
    </div>
    </div>
  )
}

export default Home