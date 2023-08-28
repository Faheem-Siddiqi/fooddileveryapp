import React from 'react'
import Nav from "./components/Nav"
import {Link, Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import AboutUs from "./components/AboutUs"
import Menu from "./components/Menu"
import ContactUs from "./components/ContactUs"
import Cart from './components/Cart'

export default function App() {
  return (
    <>
    
    <Nav/>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

    </>
  )
}
