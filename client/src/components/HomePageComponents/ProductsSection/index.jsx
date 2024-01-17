import React, { useEffect, useState } from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'
import ProductCard from './ProductCard'
import axios from 'axios'
import Loader from '../../CommonComponents/Loader'

const ProductSection = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/product")
    setProducts(res.data)
    setIsLoading(false)
  }

  
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className=' section py-16'>
        <SectionHeading title='Our Products'  subTitle='POPULAR PRODUCTS' />

        <div className=' text-gray-500 max-w-[550px]  text-center mx-auto my-6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </div>

        <div  className=' grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 py-10'>
        {
                      isLoading ? <Loader />
                        :
                        products &&
                        products.map((product) => (
                          <div key={product._id}>
                            <ProductCard 
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

export default ProductSection