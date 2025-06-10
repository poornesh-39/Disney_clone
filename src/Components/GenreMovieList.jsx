import React from 'react'
import GenresList from '../Constant/GenresList.jsx';
import MovieList from './MovieList.jsx';

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index) =>index<5&&(
            <div className='p-5 px-5 md:px-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList