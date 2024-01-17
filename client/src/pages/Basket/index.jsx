import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'
import BasketCard from './BasketCard'

const Basket = () => {
  const { basket } = useContext(BasketContext)


  const subtotal=basket.reduce((basketTotal,BasketItem)=> basketTotal+ (BasketItem.count * BasketItem.price),0)
  console.log(subtotal);
  return (
    <div className=' section py-16'>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className=' grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 py-10'>
        {
         
            basket.length===0 ? <p className=' flex items-center text-2xl w-full'> Your Basket currently empty :/</p> :
            basket.map((product) => (
              <div key={product._id}>
                <BasketCard
                  {...product}
                  product={product}
                />
              </div>
            ))
        }
      </div>

      <div>
        <p>Subtotal : {subtotal}</p>
      </div>
    </div>
  )
}

export default Basket