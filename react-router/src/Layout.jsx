import React from 'react'
import Header from './components/header/Head.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout