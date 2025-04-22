import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Order from './Pages/Order'
import Reservation from './Pages/Reservation'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'

const App = () => {
  const { pathname } = useLocation()
  const hideLayout: boolean = pathname == '/login' || pathname == '/register'

  useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

const [resize,setResize] = useState(window.innerWidth)
window.onresize = () => {
  setResize(window.innerWidth)
}

  return (
    <div>
      {/* <h1 style={{backgroundColor:'red' , color:'white' , padding:'10px' , opacity:'0.8',position:"fixed" , top:"10px",fontSize:"17px" , right:'10px'}}>{resize}</h1> */}
      {hideLayout || <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/order' element={<Order />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* {hideLayout || <Footer />} */}
    </div>
  )
}

export default App