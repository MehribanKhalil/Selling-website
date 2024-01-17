import React from 'react'
import './index.scss'
import Button from '../../CommonComponents/Button'
const HeroSection = () => {
  return (
    <div className='hero-section flex items-center'>
        <div className=' text-white section space-y-4'>
            <h1 className=' font-bold'>Shop With Us</h1>
            <p className=' max-w-[600px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <div className=' flex gap-2 py-6' >
            <Button>Shop Now</Button>
            <Button bgWhite>Club MemberShip</Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection