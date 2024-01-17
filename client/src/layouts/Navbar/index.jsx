import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { PiBasketLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

import './index.scss'
import MobileNav from './MobileNav';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=' relative'>
        <nav className='nav bg-white section py-6 fixed w-full z-30'>
            <div className=' flex justify-between items-center'>
                <div>
                    <NavLink  to={'/'} className=' text-4xl  font-bold' >Selling<span className=' text-main-color'> .</span> </NavLink>
                </div>
                <div className=' hidden lg:flex items-center  gap-10'>
                    <NavLink className=' nav-item ' to={'/'}>Home </NavLink>
                    <NavLink className=' nav-item' to={'/Products'}>Products </NavLink>
                    <NavLink className=' nav-item' to={'/About'}> About Us  </NavLink>
                    <NavLink className=' nav-item' to={'/Special'}> Special  </NavLink>
                    <NavLink className=' nav-item' to={'/admin'}>Admin </NavLink>
                    <NavLink to={'/wishlist'}>
                        <button><GoHeart size={21} /></button>
                    </NavLink>
                    <NavLink to={'/basket'}>
                        <button><PiBasketLight size={23} /></button>
                    </NavLink>

                </div>
                <div className=' block lg:hidden'>
                    <button className=' flex items-center justify-center' onClick={()=>setIsOpen(!isOpen)}><FaBars size={23} /></button>
                </div>
            </div>
        </nav>

    {
        isOpen &&
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />

    }        
        </div>
        
    )
}

export default Navbar