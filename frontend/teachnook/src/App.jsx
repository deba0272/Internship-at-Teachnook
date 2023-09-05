import { useState } from 'react'
import './App.css'
import Login from './Login.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Con from './Con.jsx'
import Signup from'./Signup.jsx'
import Home from './Home'
import Map from './Map.jsx'
import Service from './Service.jsx'
import Aboutus from './Aboutus.jsx'
import Portfolio from './Portfolio.jsx'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Con' element={<Con/>}></Route>
      <Route path='/Map' element={<Map/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Aboutus' element={<Aboutus/>}></Route>
      <Route path='/Portfolio' element={<Portfolio/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
