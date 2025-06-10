import React, { useEffect, useState , useRef } from 'react'
import GlobalApi from '../Services/GlobalApi.jsx';
import MovieCard from './MovieCard.jsx';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import HrMovieCard from './HrMovieCard.jsx';
const screenWidth = window.innerWidth;
function MovieList({genreId, index_}) {
    const [movieList,setMovieList] = useState([]);
    const refElement = useRef(null);

    useEffect(()=>{
        getMovieByGenre();
    },[])

    const getMovieByGenre=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
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
    <div classname='relative'>
        <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer left-0 ${index_%3==0? `mt-[80px]` : `mt-[150px]` } `} onClick={()=>sliderLeft(refElement.current)}/>
        <HiChevronRight className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer right-0 ${index_%3==0? `mt-[80px]` : `mt-[150px]` }`} onClick={()=>sliderRight(refElement.current)}/>
        <div className='flex overflow-x-auto gap-8 hide-scrollbar scroll-smooth pt-5 px-3 pb-5' ref={refElement}>
            {movieList.map((item,index)=>(
                <>
                {index_%3==0? <HrMovieCard movie={item}/> :<MovieCard movie={item}/>}
                </>
            ))}
        </div>
    </div>
  )
}

export default MovieList