import React from 'react'

import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import pixar from '../assets/Images/pixar.png'
import starwars from '../assets/Images/starwar.png'
import national from '../assets/Images/nationalG.png'

import disneyV from '../assets//Videos/disney.mp4'
import marvelV from '../assets//Videos/marvel.mp4'
import pixarV from '../assets//Videos/pixar.mp4'
import starwarsV from '../assets//Videos/star-wars.mp4'
import nationalV from '../assets//Videos/national-geographic.mp4'

function ProductionHouse() {
    const productionHouseList =[
        {id:1,image:disney,video:disneyV},
        {id:2,image:marvel,video:marvelV},
        {id:3,image:pixar,video:pixarV},
        {id:4,image:starwars,video:starwarsV},
        {id:5,image:national,video:nationalV}
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='group border-[2px] border-gray-600 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 group-hover:opacity-50' />
                <img src={item.image} className='w-full z-[1]' />
            </div>
        )) }
    </div>
  )
}

export default ProductionHouse