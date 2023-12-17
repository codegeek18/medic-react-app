import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Outlet />
            <Navbar />
        </div>
  )
}

export default Layout