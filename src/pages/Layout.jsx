import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Viber from '../components/Layout/Viber'
import Footer from '../components/Layout/Footer'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Viber />
      <Footer />
      <Outlet />
    </div>
  )
}

export default Layout