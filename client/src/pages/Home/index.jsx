import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import ProductSection from '../../components/HomePageComponents/ProductsSection'
import AboutSection from '../../components/HomePageComponents/AboutSection'

const Home = () => {
  return (
    <>
    <Helmet>
       <title>Home</title>
     </Helmet>

     <HeroSection/>
     <ProductSection/>
     <AboutSection/>
   </>
  )
}

export default Home