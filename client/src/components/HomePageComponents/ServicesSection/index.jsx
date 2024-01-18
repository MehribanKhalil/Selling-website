import React from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
  return (
    <div className=' section  bg-gray-100 py-16'>
        <SectionHeading
            subTitle='OUR SERVICES'
            title='We Offer Services'
        />

        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-16'>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    </div>
  )
}

export default ServicesSection