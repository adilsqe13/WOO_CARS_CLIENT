import React from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const customerToken = localStorage.getItem('userToken');
  const dealerToken = localStorage.getItem('sellerToken');
  const adminToken = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('sellerToken');
    localStorage.removeItem('agencyName');
    localStorage.removeItem('userFullName');
    localStorage.removeItem('carId');
    navigate('/');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo-sales-app" href="/">&nbsp;<strong>woo<span className='logo-app'>Cars</span></strong></a>
          <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <Link className='navbar-item-link btn btn-bg border-0' to="/">
                <li className="nav-item text-black ">HOMEPAGE</li>
              </Link>
              {customerToken && <Link className='navbar-item-link btn btn-bg border-0' to="/booking-page">
                <li className="nav-item text-black ">MY DEALS</li>
              </Link>}
              {dealerToken && <Link className='navbar-item-link btn btn-bg border-0' to="/get-orders">
                <li className="nav-item text-black ">DEALS</li>
              </Link>}
              {dealerToken && <Link className='navbar-item-link btn btn-bg border-0' to="/get-my-cars">
                <li className="nav-item text-black ">LISTED CARS</li>
              </Link>}
              {dealerToken && <Link className='navbar-item-link btn btn-bg border-0' to="/get-sold-cars">
                <li className="nav-item text-black ">SOLD</li>
              </Link>}

              {dealerToken && <Link className='navbar-item-link btn btn-bg border-0' to="/add-car">
                <li className="nav-item text-black ">ADD NEW CAR</li>
              </Link>}
 
              {
                (!customerToken && !dealerToken && !adminToken) &&
                <Link className='navbar-item-link btn btn-bg border-0' to='/customer-login'>
                  <li className="nav-item login-black">CUSTOMER LOGIN</li>
                </Link>
              }

              {
                (!customerToken && !dealerToken && adminToken) &&
                <Link className='navbar-item-link btn btn-bg border-0' to='/dashboard'>
                  <li className="nav-item login-black">DASHBOARD</li>
                </Link>
              }
              {(!customerToken && !dealerToken && !adminToken) && <Link className='navbar-item-link btn-bg border-0 btn' to='/agency-login'>
                <li className="nav-item text-black">CAR DEALERS</li>
              </Link>}
              
              {(!customerToken && !adminToken && !dealerToken) && <Link className='navbar-item-link btn-bg border-0 btn' to='/admin-login'>
                <li className="nav-item text-black">ADMIN</li>
              </Link>}

              {(customerToken || dealerToken || adminToken) &&
                <button onClick={handleLogout} className='navbar-item-link btn border border-danger logout-btn'>
                  <li className="nav-item text-danger">LOGOUT</li>
                </button>}

            </ul>
            {customerToken && <span className='text-light fs-4'>{localStorage.getItem('userFullName')}</span>}
            {dealerToken && <span className='text-light fs-4'>{localStorage.getItem('agencyName')}</span>}
            {adminToken && <span className='text-light fs-4'>Admin</span>}

          </div>

        </div>
      </nav>
    </>
  )
}
