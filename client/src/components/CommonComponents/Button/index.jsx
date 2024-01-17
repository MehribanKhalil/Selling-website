import React from 'react'

const Button = ({ children, bgWhite }) => {
    return (
        <button className={` ${bgWhite ? "bg-white hover:bg-transparent text-black hover:text-white" : ' hover:bg-white  hover:text-black'}  font-bold px-8 py-3  uppercase text-[12px] border-2 border-white duration-300`} >
            {children}
        </button>
    )
}

export default Button