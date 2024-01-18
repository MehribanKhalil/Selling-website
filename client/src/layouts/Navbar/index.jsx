import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { PiBasketLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

import './index.scss'
import MobileNav from './MobileNav';
import { WishlistContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';

const Navbar = () => {
  const { wishlist } = useContext(WishlistContext);
  const { basket } = useContext(BasketContext);


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
                    <NavLink to={'/wishlist'} className='relative'>
                        <button><GoHeart size={21} /></button>
                        <span  className=' absolute -right-2 -top-2 bg-main-color text-white w-4 h-4  flex justify-center items-center text-sm rounded-full'>{wishlist.length}</span>
                    </NavLink>
                    <NavLink to={'/basket'} className='relative'>
                        <button><PiBasketLight size={23} /></button>
                        <span className=' absolute -right-2 -top-2 bg-main-color text-white w-4 h-4  flex justify-center items-center text-sm rounded-full'>{basket.length}</span>

                    </NavLink>

                </div>
                <div className=' block lg:hidden'>
                    <button className=' flex items-center justify-center' onClick={()=>setIsOpen(!isOpen)}><FaBars size={23} /></button>
                </div>
            </div>
        </nav>

   
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />     
        </div>
        
    )
}

export default Navbar