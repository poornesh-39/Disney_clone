import React from 'react';
import Header from './Components/Header.jsx';
import Slider from './Components/Slider.jsx';
import ProductionHouse from './Components/ProductionHouse.jsx';
import GenreMovieList from './Components/GenreMovieList.jsx';
import './App.css';

function App() {

  return (
    <div classname=''>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App
