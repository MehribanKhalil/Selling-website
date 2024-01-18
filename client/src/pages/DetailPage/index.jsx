import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import Loader from '../../components/CommonComponents/Loader'

const Detailpage = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {id}=useParams()
  const getProduct = async () => {
    const res = await axios.get(`http://localhost:8000/product/${id}`)
    setProduct(res.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className=' section page pt-32 p-24'>
    <Helmet>
       <title>Home</title>
     </Helmet>

     <div>
        {
          isLoading ? <Loader/>
          :
          product && 
          <div className=' flex gap-5'>
            <div className=' max-w-[400px]'>
              <img src={product.image} alt="" />
            </div>
            <div className=' space-y-4'>
              <h2 className=' text-5xl' >{product.title}</h2>
              <p  className=' text-xl'>{product.info}</p>
              <p  className=' text-xl'>Price: ${product.price}</p>
              <p  className=' text-xl'>Rating: {product.rating}</p>

            </div>
          </div>
        }
     </div>
   </div>
  )
}

export default Detailpage