import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router'
import About from './Pages/About/About'
import Forecast from './Pages/Forecast/Forecast'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/forecast' element={<Forecast />} />


   </Routes>
   </>
  )
}

export default App