import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
// jl

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Fleet' element={<Fleet />} />
      {/* <Route path='/cars/create' element={<CreateCar />} />
      <Route path='/cars/details/:id' element={<ShowCar />} />
      <Route path='/cars/edit/:id' element={<EditCar />} />
      <Route path='/cars/delete/:id' element={<DeleteCar />} /> */}


    </Routes>
  )
}

export default App
