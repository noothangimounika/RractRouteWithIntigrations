
import './App.css';

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Products from './routerComp/Products';
import { Jewelery } from './routerComp/Jewelery';
import Carts from './routerComp/Carts';
import Navbar from './Navbar';
// import Categories from './routerComp/Categories';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/jewelery' element={<Jewelery />}/>
        {/* <Route path='/categories' element={<Categories />} /> */}
        <Route path='/carts' element={<Carts />} />
      </Routes>
    </div>
  )
}

export default App
