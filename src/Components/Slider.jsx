import { useEffect } from 'react';
import { useRef } from 'react';
import React, { useState }from 'react'
import GlobalApi from '../Services/GlobalApi';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList,setMovieList] =useState([]);
    const refElement = useRef();
    
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight =(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft =(element)=>{
        element.scrollLeft-=screenWidth-110
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(refElement.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(refElement.current)}/>
        <div className='flex overflow-x-auto w-full px-16 py-4 hide-scrollbar scroll-smooth' ref={refElement}>
            {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in '/>
            ))}
        </div>
    </div>
  )
}

export default Slider