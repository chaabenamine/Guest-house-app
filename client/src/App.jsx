import React from 'react'
import Navbar from './components/navbar'
import{ Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Allrooms from './pages/Allrooms';
import RoomDetails from './pages/RoomDetails';
import MyBooking from './pages/MyBooking';
import AboutUs from './pages/AboutUs';
import HouseReg from './components/HouseReg';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HouseReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Allrooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-bookings' element={<MyBooking/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>


        </Routes>

      </div>
      <Footer/>
    </div>
  )
}

export default App