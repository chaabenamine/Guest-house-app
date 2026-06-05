import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HouseReg from './components/HouseReg';

import Home from './pages/Home';
import Allrooms from './pages/Allrooms';
import RoomDetails from './pages/RoomDetails';
import MyBooking from './pages/MyBooking';
import AboutUs from './pages/AboutUs';
import Experience from './pages/Experience';

import Layout from './pages/houseOwner/Layout';
import Dashboard from './pages/houseOwner/Dashboard';
import AddRoom from './pages/houseOwner/AddRoom';
import ListRoom from './pages/houseOwner/ListRoom';

import { useAppContext } from './context/AppContext';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
  const { showHouseReg } = useAppContext();

  return (
    <div>
      <Toaster />

      {!isOwnerPath && <Navbar />}
      {showHouseReg && <HouseReg />}

      <div className="min-h-[70vh]">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allrooms />} />

          {/* Room Details Route */}
          <Route path="/rooms/:id" element={<RoomDetails />} />

          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/experience" element={<Experience />} />

          {/* Owner Routes */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;