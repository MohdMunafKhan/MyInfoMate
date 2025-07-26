import React  from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import Movies from './components/Movies';
import Holiday from './components/Holiday';
import Dictionary from './components/Dictionary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weather' element={<WeatherInfo/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/holiday' element={<Holiday/>}/>
        <Route path='/dictionary' element={<Dictionary/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
