import { createContext, useState } from "react";
import UseLocal from "../hooks/UseLocal";
import toast from "react-hot-toast";


export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = UseLocal('wishlist')

    const addToWishlist = (product) => {
        const index = wishlist.findIndex(item => item._id === product._id)

        if (index === -1) {
            setWishlist([...wishlist, { ...product }])
            toast.success('Added to Wishlsit')
        } else {
            removeWishlist(product._id)

        }
    }


    const removeWishlist = (id) => {
        setWishlist(wishlist.filter(item => item._id !== id))
        toast.success(' Deleted from Wishlsit')

    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}