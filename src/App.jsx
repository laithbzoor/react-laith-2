import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CostumNavbar from './Navbar'
import Products from './Products'
import Home from './Home'
import Details from './Details'
import Resturant from './Resturant'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
 
  return (
    <BrowserRouter>
      <CostumNavbar/>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/resturant' element={<Resturant/>}/>
        <Route path='/details' element={<Details/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
