import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { BasketContext } from '../../../context/BasketContext';

const BasketCard = ({image,title,rating,info,count,product,price,_id}) => {
  const { incCount,decCount,removeBasket } = useContext(BasketContext)

    return (

        <div className='my-4  group  text-center'>
            <div className=' overflow-hidden cursor-pointer'>
                <img src={image} className=' group-hover:scale-110 duration-500' alt="" />
            </div>
            <div className=' space-y-4 py-6 px-12'>
                <Link ><h4 className=' text-lg'>{title}</h4></Link>

                <p className=' text-sm text-gray-400'>{info}</p>

                <div className=' flex gap-5 items-center justify-center'>
                    <button onClick={()=>decCount(product)}  className=' border  w-7 h-7 text-xl flex justify-center items-center'>-</button>
                    <span>{count}</span>
                    <button onClick={()=>incCount(product)} className=' border  w-7 h-7 text-xl flex justify-center items-center'>+</button>
                </div>

                <p>Total: {count*price}</p>

                <div className=' flex gap-2 justify-center  font-bold'>
                    <button onClick={()=>removeBasket(_id)} className='bg-black hover:bg-white px-4 py-2 text-sm uppercase border-2 border-black text-white hover:text-black   duration-300'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default BasketCard