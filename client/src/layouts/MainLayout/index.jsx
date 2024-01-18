import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../Footer';

const MainLayout = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Toaster />
   </>
  )
}

export default MainLayout