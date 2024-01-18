import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import WishlistCard from './WishlistCard'

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext)
  return (
    <div className=' section page py-32'>
     <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className=' grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 py-10'>
        {
         
            wishlist.length===0 ? <p className=' flex items-center text-2xl w-full'> Your Wishlist currently empty :/</p> :
            wishlist.map((product) => (
              <div key={product._id}>
                <WishlistCard
                  {...product}
                  product={product}
                />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default WishlistPage