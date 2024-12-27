import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'


const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/Shop' element={<Shop/>} />
     <Route path='/Cart' element={<Cart/>} />
     {/* <Route path='/Contact' element={<Contact/>} />     */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing