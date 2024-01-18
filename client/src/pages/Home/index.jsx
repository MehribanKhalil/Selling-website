import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import ProductSection from '../../components/HomePageComponents/ProductsSection'
import AboutSection from '../../components/HomePageComponents/AboutSection'
import LeadershipSection from '../../components/HomePageComponents/LeadershipSection'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'

const Home = () => {
  return (
    <>
    <Helmet>
       <title>Home</title>
     </Helmet>

     <HeroSection/>
     <ProductSection/>
     <AboutSection/>
     <LeadershipSection/>
     <ServicesSection/>
   </>
  )
}

export default Home