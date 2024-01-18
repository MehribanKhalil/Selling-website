import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'
import BasketCard from './BasketCard'
import { useNavigate } from 'react-router-dom'

const Basket = () => {
  const { basket } = useContext(BasketContext)

  const nav=useNavigate()

  const subtotal=basket.reduce((basketTotal,BasketItem)=> basketTotal+ (BasketItem.count * BasketItem.price),0)
  console.log(subtotal);
  return (
    <div className='page section py-16'>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className=' grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 py-10'>
        {
         
            basket.length===0 ? <p className='text-2xl w-full'> Your Basket currently empty .    <button onClick={()=>nav('/')}>Return to Home Page</button></p> :
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

      <div className=' text-3xl py-5'>
        {
          basket.length ===0 ? ' ' :<p>Subtotal : ${subtotal}</p>
        }
      </div>
    </div>
  )
}

export default Basket