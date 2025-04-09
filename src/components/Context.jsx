'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext();

const Context = ({children}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api').then((res)=>{
            setData(res.data)
        })
    },[])
  return (
    <userContext.Provider value={data}>
        {children}
    </userContext.Provider>
  )
}

export default Context