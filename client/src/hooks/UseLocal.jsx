import React, { useEffect, useState } from 'react'

const UseLocal = (key) => {
    const [local, setLocal] = useState(
        localStorage.getItem(key) ? JSON.parse( localStorage.getItem(key)) :[]
    )

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(local))
    }, [local])
    

    const handleData=(data)=>{
        setLocal(data)
    }

  return [local,handleData]
}

export default UseLocal