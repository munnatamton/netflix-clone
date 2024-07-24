import React from 'react'
import { IoPlaySharp,IoInformationCircleOutline } from "react-icons/io5";
import CardTile1 from '../Components/CardTile/CardTile1';
import CardTile2 from '../Components/CardTile/CardTile2';
import RankTile from '../Components/CardTile/RankTile';


const Home = () => {
  return (
    <>
    <div className='h-full w-full relative bg-black overflow-x-hidden scrollbar-hide'>
      <img src='./logos/MoviePoster.png' className='h-full w-full object-cover'/>
      <div className="absolute top-[200px] left-[60px] text-white ">
      <img src='/logos/MovieName.png'/>
      <div className='flex text-4xl  font-medium items-center'>
        <img src='./logos/Top10Badge.png' className='h-[32px] w-[32px]'/>
        <h3 className='ms-[15px] my-[15px]'>Türkiye’de Bugün 4 Numara</h3>
      </div>

      <div className='text-3xl w-[636px] text-start'>Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.</div>
      <div className='flex my-[15px] '>
        <button className='flex items-center bg-white hover:opacity-90 text-black  px-[30px] py-[15px] text-2xl font-medium rounded-[4px] me-[15px]'><IoPlaySharp className='me-[20px] h-[20px] w-[21.33px]'/>Oynat</button>
        <button className='flex items-center bg-white/30 hover:opacity-90 text-white  px-[30px] py-[15px] text-2xl font-medium rounded-[4px]'><IoInformationCircleOutline className='me-[20px] size-[32px]'/> Daha Fazla Bilgi</button>
      </div> 
      <div className='mb-[30px]'>
        <h2 className='text-start text-3xl font-medium'>Netflix'te Popüler</h2>
            <div className="flex w-[100vw] overflow-x-scroll scrollbar-hide">
                <CardTile1 image="logos/MoviePoster1.png" />
                <CardTile1 image="logos/MoviePoster2.png" />
                <CardTile1 image="logos/MoviePoster3.png" />
                <CardTile1 image="logos/MoviePoster4.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
            </div>
       </div>
       <div className='mb-[30px]'>
        <h2 className='text-start text-3xl font-medium'>Kemal, İzlemeye Devam Et</h2>
            <div className="flex w-[100vw] overflow-x-scroll scrollbar-hide">
                <CardTile1 image="logos/MoviePoster1.png" />
                <CardTile1 image="logos/MoviePoster2.png" />
                <CardTile1 image="logos/MoviePoster3.png" />
                <CardTile1 image="logos/MoviePoster4.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
              </div>
       </div>
       <div className='mb-[30px]'>
        <h2 className='text-start text-3xl font-medium'>Gündemdekiler</h2>
            <div className="flex w-[100vw] overflow-x-scroll scrollbar-hide">
                <CardTile1 image="logos/MoviePoster1.png" />
                <CardTile1 image="logos/MoviePoster2.png" />
                <CardTile1 image="logos/MoviePoster3.png" />
                <CardTile1 image="logos/MoviePoster4.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
            </div>
       </div>
       <div className='mb-[30px]'>
        <h2 className='text-start text-3xl font-medium'>Netflix Orijinal İçerikleri</h2>
            <div className="flex w-[100vw] overflow-x-scroll scrollbar-hide">
                <CardTile2 image="logos/MoviePoster6.png" />
                <CardTile2 image="logos/MoviePoster7.png" />
                <CardTile2 image="logos/MoviePoster8.png" />
                <CardTile2 image="logos/MoviePoster9.png" />
                <CardTile2 image="logos/MoviePoster6.png" />
                <CardTile2 image="logos/MoviePoster7.png" />
                <CardTile2 image="logos/MoviePoster8.png" />
            </div>
       </div>
       <div className='mb-[30px]'>
        <h2 className='text-start text-3xl font-medium'>Türkiye'de Bugünün Top 10 Listesi</h2>
            <div className="flex w-[100vw] overflow-x-scroll scrollbar-hide">
                <RankTile image="logos/MoviePoster1.png" rank="logos/Rank1.png" />
                <RankTile image="logos/MoviePoster2.png" rank="logos/Rank2.png" />
                <RankTile image="logos/MoviePoster3.png" rank="logos/Rank3.png" />
                <RankTile image="logos/MoviePoster4.png" rank="logos/Rank4.png" />
                <RankTile image="logos/MoviePoster5.png" rank="logos/Rank5.png" />
            </div>
       </div>
       <div className='mb-[30px]'>
        <h2 className='text-start text-3xl font-medium'>Türkiye'de Bugünün Top 10 Listesi</h2>
            <div className="flex w-[100vw] overflow-x-scroll scrollbar-hide">
                <CardTile1 image="logos/MoviePoster1.png" />
                <CardTile1 image="logos/MoviePoster2.png" />
                <CardTile1 image="logos/MoviePoster3.png" />
                <CardTile1 image="logos/MoviePoster4.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
                <CardTile1 image="logos/MoviePoster5.png" />
            </div>
       </div>
       </div>
    </div>


    </>
  )
}

export default Home