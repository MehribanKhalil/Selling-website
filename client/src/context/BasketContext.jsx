import { createContext, useState } from "react";
import UseLocal from "../hooks/UseLocal";
import toast from "react-hot-toast";


export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = UseLocal('Basket')

    const addToBasket = (product) => {
        const index = basket.findIndex(item => item._id === product._id)

        if (index === -1) {
            setBasket([...basket, { ...product,count:1 }])
            toast.success('Added to Basket')
        } else {
        
            basket[index].count++
            setBasket([...basket])
            toast.success('Count Increase')


        }
    }

    const incCount=(product)=>{
        const index = basket.findIndex(item => item._id === product._id)
        if (index !==-1) {
            basket[index].count++
            setBasket([...basket])
            toast.success('Count Increase')

            return
        }
    }

    const decCount=(product)=>{
        const index = basket.findIndex(item => item._id === product._id)
        if (index !==-1) {
            if (basket[index].count === 1) {
                removeBasket(product._id)
                return
            }
            basket[index].count--
            setBasket([...basket])
            toast.success('Count Decrease')
        }
    }



    const removeBasket = (id) => {
        setBasket(basket.filter(item => item._id !== id))
        toast.success(' Deleted from Basket')
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeBasket,incCount,decCount }}>
            {children}
        </BasketContext.Provider>
    )
}