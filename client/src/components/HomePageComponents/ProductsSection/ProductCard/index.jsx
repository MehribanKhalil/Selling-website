import React, { useContext } from 'react'
import Button from '../../../CommonComponents/Button'
import { MdOutlineStar } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../../../context/BasketContext';


const ProductCard = ({image,title,rating,info,product}) => {
    const {addToBasket}=useContext(BasketContext)

    return (
        <div className='my-4  group  text-center'>
            <div  className=' overflow-hidden cursor-pointer'>
                <img src={image} className=' group-hover:scale-110 duration-500' alt="" />
            </div> 
            <div  className=' space-y-4 py-6 px-12'>
                <Link ><h4  className=' text-lg'>{title}</h4></Link>
                <div className=' flex justify-center items-center gap-4'>
                    <span className=' flex items-center gap-2'><MdOutlineStar className=' text-yellow-500'  size={20}/> {rating}</span>
                    <button><GoHeart size={20} className=' text-red-500'/></button>
                </div>
                <p className=' text-sm text-gray-400'>{info}</p>
                <div  className=' flex gap-2 justify-center  font-bold'>
                    <button onClick={()=>addToBasket(product)} className='bg-black hover:bg-white px-4 py-2 text-sm uppercase border-2 border-black text-white hover:text-black   duration-300'>Cart</button>
                    <button  className='bg-white hover:bg-black uppercase px-4 py-2 text-sm border-2  hover:border-black border-black  hover:text-white  duration-300'>view</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard