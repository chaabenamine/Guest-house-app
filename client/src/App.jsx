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
import Layout from './pages/houseOwner/Layout';
import AddRoom from './pages/houseOwner/AddRoom';
import ListRoom from './pages/houseOwner/ListRoom';
import Dashboard from './pages/houseOwner/Dashboard';
import Experience from './pages/Experience';


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
          <Route path='/experience' element={<Experience/>}/>

          <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='add-room' element={<AddRoom/>} />
          <Route path='list-room' element={<ListRoom/>} />
          

          </Route>


        </Routes>

      </div>
      <Footer/>
    </div>
  )
}

export default App