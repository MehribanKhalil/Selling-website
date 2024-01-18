import React from 'react'

const AboutSection = () => {
  return (
    <div className=' section pb-16'>
        <div className=' flex flex-col lg:flex-row gap-10  xl:gap-32 items-center'>
        <div className=' lg:w-2/3 w-full relative'>
            <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />
            <div className=' bg-[#46DDB0] text-white p-5 absolute -right-3 -bottom-3'>
                <h2 className=' text-5xl font-bold'>Trusted Merchant</h2>
                <p>FOR 50 YEARS</p>
            </div>
        </div>
        <div className=' lg:w-1/3 w-full space-y-4'>
            <h3 className='font-bold uppercase text-sm text-gray-400 tracking-widest'>MERCHANT COMPANY</h3>
            <h6 className='text-5xl font-bold'>About Us</h6>
            <p className=' text-gray-500 py-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!
            </p>
            <button className='bg-black hover:bg-white px-4 py-2 text-sm uppercase border-2 border-black text-white hover:text-black   duration-300'>Learn more</button>
        </div>
        </div>
    </div>
  )
}

export default AboutSection