import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast from './components/Toast';
import './App.css'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/customer/Login';
import Register from './components/customer/Register';
import BookingPage from './components/customer/BookingPage';
import AgencyLogin from './components/dealer/DealerLogin';
import AgencyRegister from './components/dealer/DealerRegister';
import AdminLogin from './components/admin/AdminLogin';
import Dashboard from './components/admin/Dashboard';
import OrdersPage from './components/dealer/OrdersPage';
import MyListedCars from './components/dealer/MyListedCars';
import UpdateCar from './components/dealer/UpdateCar';
import AddCar from './components/dealer/AddCar';
import SoldCars from './components/dealer/SoldCars';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toast />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/add-car' element={<AddCar />} />
          <Route exact path='/customer-login' element={<Login />} />
          <Route exact path='/customer-signup' element={<Register />} />
          <Route exact path='/booking-page' element={<BookingPage />} />
          <Route exact path='/agency-login' element={<AgencyLogin />} />
          <Route exact path='/agency-register' element={<AgencyRegister />} />
          <Route exact path='/admin-login' element={<AdminLogin />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/get-orders' element={<OrdersPage />} />
          <Route exact path='/get-my-cars' element={<MyListedCars />} />
          <Route exact path='/update-car' element={<UpdateCar />} />
          <Route exact path='/get-sold-cars' element={<SoldCars />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
