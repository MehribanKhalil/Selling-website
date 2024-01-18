import React, { useContext } from 'react'
import { WishlistContext } from '../../../context/WishlistContext'

const WishlistCard = ({image,title,info,price,_id}) => {
    const { removeWishlist } = useContext(WishlistContext)
  return (
    <div className='my-4  group  text-center'>
    <div className=' overflow-hidden cursor-pointer'>
        <img src={image} className=' group-hover:scale-110 duration-500' alt="" />
    </div>
    <div className=' space-y-4 py-6 px-12'>
        <h4 className=' text-lg'>{title}</h4>

        <p className=' text-sm text-gray-400'>{info}</p>
        <p>Price : {price}</p>
        <div className=' flex gap-2 justify-center  font-bold'>
            <button onClick={()=>removeWishlist(_id)} className='bg-black hover:bg-white px-4 py-2 text-sm uppercase border-2 border-black text-white hover:text-black   duration-300'>Remove</button>
        </div>
    </div>
</div>
  )
}

export default WishlistCard