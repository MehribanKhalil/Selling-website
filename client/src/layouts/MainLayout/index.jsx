import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Toaster />
   </>
  )
}

export default MainLayout